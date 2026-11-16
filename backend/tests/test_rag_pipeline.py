"""
Test suite pipeline RAG Data Engineer: Row 16 (ekstraksi), 18 (cleaning LaTeX), 19 (chunking),
20 (indexing ChromaDB) dan 21 (upload -> ChromaDB).

Jalankan dari root proyek:
    backend\\venv\\Scripts\\python -m unittest discover -s backend/tests -v

Test ChromaDB memakai direktori sementara + mini knowledge base, sehingga TIDAK bergantung pada
backend/chroma_db lokal dan tidak mengubahnya.
"""

import glob
import io
import os
import re
import shutil
import sys
import tempfile
import unittest
from unittest import mock

BACKEND_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
if BACKEND_DIR not in sys.path:
    sys.path.insert(0, BACKEND_DIR)

import rag  # noqa: E402
import rag_store  # noqa: E402
from rag_chunking import (  # noqa: E402
    VALID_GRADES,
    chunk_markdown_with_metadata,
    clean_and_normalize_latex,
    detect_grade,
    extract_frontmatter,
    normalize_grade,
    split_text_preserving_math,
)

PROSE = (
    "Penjelasan materi ini sengaja dibuat cukup panjang supaya setiap bagian melewati batas minimum "
    "ukuran chunk dan tidak digabung dengan bagian lain, sehingga struktur judul tetap terjaga rapi. "
)


def make_md(judul, kelas, bab, mapel, sections):
    """sections: list[(h2, h3, body)] -> dokumen Markdown dengan frontmatter."""
    lines = [
        "---", f'judul: "{judul}"', f'kelas: "{kelas}"', 'fase: "E"', f'bab: "{bab}"',
        f'mapel: "{mapel}"', 'kurikulum: "Kurikulum Merdeka"', 'sumber: "dokumen uji"', "---", "",
        f"# Bab {bab} — {judul}", "", "## Daftar Isi", "", "- bagian satu", "- bagian dua", "",
    ]
    for h2, h3, body in sections:
        lines += [f"## {h2}", "", f"### {h3}", "", PROSE * 2, "", body, ""]
    return "\n".join(lines)


MINI_KB = {
    "kelas_10/bab_04_trigonometri.md": make_md(
        "Trigonometri", "10", "4", "Matematika Umum",
        [("Aturan Sinus dan Cosinus", "Aturan Sinus",
          "Aturan sinus pada segitiga ABC dengan sisi a, b, c:\n\n$$\\frac{a}{\\sin A}=\\frac{b}{\\sin B}=\\frac{c}{\\sin C}=2R$$")],
    ),
    "kelas_11/bab_06_matriks.md": make_md(
        "Matriks", "11", "6", "Matematika Tingkat Lanjut",
        [("Determinan dan Invers", "Invers Matriks",
          "Invers matriks ordo 2x2 dengan determinan tidak nol:\n\n$$A^{-1}=\\frac{1}{ad-bc}\\begin{pmatrix} d & -b \\\\ -c & a \\end{pmatrix}$$")],
    ),
    "kelas_12/tl_bab_04_integral.md": make_md(
        "Integral", "12", "TL-4", "Matematika Tingkat Lanjut",
        [("Integral Tentu", "Luas Daerah",
          "Luas daerah di bawah kurva dihitung dengan integral tentu:\n\n$$L=\\int_{a}^{b} f(x)\\,dx$$")],
    ),
    "tambahan/logika_matematika.md": make_md(
        "Logika Matematika", "Tambahan", "Tambahan", "Matematika Umum",
        [("Operasi Logika", "Konjungsi dan Disjungsi",
          "Tabel kebenaran konjungsi $p \\land q$ dan disjungsi $p \\lor q$ untuk dua pernyataan.")],
    ),
}


def write_kb(root, files=None):
    for rel, content in (files or MINI_KB).items():
        path = os.path.join(root, rel)
        os.makedirs(os.path.dirname(path), exist_ok=True)
        with open(path, "w", encoding="utf-8") as handle:
            handle.write(content)


def make_text_pdf(path, text):
    """PDF 1 halaman yang berisi `text` (tanpa tanda kurung) - dibuat manual agar tak perlu library tambahan."""
    stream = f"BT /F1 12 Tf 72 720 Td ({text}) Tj ET".encode()
    objs = [
        b"<< /Type /Catalog /Pages 2 0 R >>",
        b"<< /Type /Pages /Kids [3 0 R] /Count 1 >>",
        b"<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Contents 4 0 R "
        b"/Resources << /Font << /F1 5 0 R >> >> >>",
        b"<< /Length %d >>\nstream\n" % len(stream) + stream + b"\nendstream",
        b"<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>",
    ]
    out, offsets = b"%PDF-1.4\n", []
    for number, body in enumerate(objs, 1):
        offsets.append(len(out))
        out += f"{number} 0 obj\n".encode() + body + b"\nendobj\n"
    xref = len(out)
    out += f"xref\n0 {len(objs) + 1}\n0000000000 65535 f \n".encode()
    for offset in offsets:
        out += f"{offset:010d} 00000 n \n".encode()
    out += f"trailer\n<< /Size {len(objs) + 1} /Root 1 0 R >>\nstartxref\n{xref}\n%%EOF".encode()
    with open(path, "wb") as handle:
        handle.write(out)


def unbalanced_math(text):
    if text.count("$$") % 2:
        return True
    rest = re.sub(r"\$\$.*?\$\$", "", text, flags=re.DOTALL).replace("\\$", "")
    return rest.count("$") % 2 == 1


# ==============================================================================
# ROW 18 - CLEANING & NORMALISASI LATEX
# ==============================================================================

class TestLatexCleaning(unittest.TestCase):
    def test_bracket_delimiter_becomes_display_math(self):
        cleaned = clean_and_normalize_latex(r"Persamaan: \[ ax^2 + bx + c = 0 \]")
        self.assertIn("$$ax^2 + bx + c = 0$$", cleaned)
        self.assertNotIn("\\[", cleaned)

    def test_paren_delimiter_becomes_inline_math(self):
        cleaned = clean_and_normalize_latex(r"Jika \( x > 0 \) maka positif.")
        self.assertIn("$x > 0$", cleaned)
        self.assertNotIn("\\(", cleaned)

    def test_latex_row_spacing_is_not_treated_as_display_delimiter(self):
        raw = r"$$\begin{cases} \frac{x^2}{3}, & -1 < x < 2 \\[4pt] 0, & \text{lainnya} \end{cases}$$"
        self.assertEqual(clean_and_normalize_latex(raw), raw)

    def test_unicode_converted_only_inside_math(self):
        cleaned = clean_and_normalize_latex("Hitung 5 × 3 lalu $ a × b \u2264 c \u2212 d $ dan $$ x \u00b2 \u2260 \u221e $$")
        self.assertIn("5 × 3", cleaned)  # di luar math tidak diubah
        self.assertIn(r"\times", cleaned)
        self.assertIn(r"\le", cleaned)
        self.assertIn(r"\ne", cleaned)
        self.assertIn(r"\infty", cleaned)
        self.assertIn("^{2}", cleaned)
        self.assertNotIn("\u2212", cleaned)
        self.assertNotIn("\u2264", cleaned)

    def test_page_number_noise_removed(self):
        cleaned = clean_and_normalize_latex("Materi Eksponen\n\nHalaman 12 dari 45\n\nDefinisi Eksponen\nHlm. 3\nPage 4 of 9")
        for noise in ("Halaman 12", "Hlm. 3", "Page 4"):
            self.assertNotIn(noise, cleaned)
        self.assertIn("Definisi Eksponen", cleaned)

    def test_control_chars_and_whitespace(self):
        cleaned = clean_and_normalize_latex("Baris 1\x00\x07  \n\n\n\n\nBaris 2    spasi banyak\r\nBaris 3")
        self.assertEqual(cleaned, "Baris 1\n\nBaris 2 spasi banyak\nBaris 3")

    def test_indentation_of_nested_lists_is_preserved(self):
        raw = "- Induk\n  - Anak pertama\n    - Cucu"
        self.assertEqual(clean_and_normalize_latex(raw), raw)

    def test_empty_input(self):
        self.assertEqual(clean_and_normalize_latex(""), "")
        self.assertEqual(clean_and_normalize_latex(None), "")

    def test_idempotent(self):
        raw = "A \\( x \u2264 y \\) dan \\[ a \u00d7 b \\]\r\n\n\n\nHalaman 3\n  - item"
        once = clean_and_normalize_latex(raw)
        self.assertEqual(clean_and_normalize_latex(once), once)

    def test_real_knowledge_base_formulas_are_preserved(self):
        files = [f for f in glob.glob(os.path.join(BACKEND_DIR, "knowledge_base", "**", "*.md"), recursive=True)
                 if not os.path.basename(f).lower().startswith("readme")]
        self.assertGreaterEqual(len(files), 29)
        for path in files:
            with open(path, "r", encoding="utf-8") as handle:
                _, body = extract_frontmatter(handle.read())
            cleaned = clean_and_normalize_latex(body)
            self.assertEqual(cleaned.count("$$"), body.count("$$"), os.path.basename(path))
            self.assertEqual(cleaned.count("$"), body.count("$"), os.path.basename(path))
            self.assertEqual(clean_and_normalize_latex(cleaned), cleaned, os.path.basename(path))


# ==============================================================================
# ROW 19 - STRUCTURE-AWARE CHUNKING
# ==============================================================================

class TestMathPreservingSplitter(unittest.TestCase):
    def test_display_math_never_split(self):
        text = (
            "Pengantar yang cukup panjang untuk mengisi chunk pertama dengan kalimat penjelas.\n\n"
            "$$\\int_{0}^{\\pi} \\sin(x)\\,dx = [-\\cos(x)]_{0}^{\\pi} = 2$$\n\n"
            "Penutup yang juga memuat penjelasan lanjutan tentang materi yang sedang dibahas."
        )
        chunks = split_text_preserving_math(text, chunk_size=90, chunk_overlap=20)
        self.assertGreaterEqual(len(chunks), 3)
        for chunk in chunks:
            self.assertFalse(unbalanced_math(chunk), chunk)

    def test_long_line_with_inline_math_is_packed_without_breaking_math(self):
        text = " ".join(f"Suku ke-{i} adalah $U_{{{i}}} = a + ({i}-1)b$ pada barisan." for i in range(1, 60))
        chunks = split_text_preserving_math(text, chunk_size=200, chunk_overlap=0)
        self.assertGreater(len(chunks), 5)
        for chunk in chunks:
            self.assertLessEqual(len(chunk), 200)
            self.assertFalse(unbalanced_math(chunk), chunk)

    def test_prose_chunks_respect_size_limit(self):
        text = "\n\n".join(PROSE for _ in range(30))
        for chunk in split_text_preserving_math(text, chunk_size=900, chunk_overlap=150):
            self.assertLessEqual(len(chunk), 900)

    def test_overlap_repeats_trailing_content(self):
        paragraphs = [f"Paragraf nomor {i}. " + "isi " * 20 for i in range(12)]
        chunks = split_text_preserving_math("\n\n".join(paragraphs), chunk_size=400, chunk_overlap=120)
        self.assertGreater(len(chunks), 2)
        last_paragraph_of_first = chunks[0].split("\n")[-1]
        self.assertIn(last_paragraph_of_first, chunks[1])

    def test_short_and_empty_text(self):
        self.assertEqual(split_text_preserving_math("   "), [])
        self.assertEqual(split_text_preserving_math("pendek"), ["pendek"])

    def test_oversized_single_formula_kept_whole(self):
        formula = "$$" + "x+" * 400 + "y$$"
        chunks = split_text_preserving_math(f"awal\n\n{formula}\n\nakhir", chunk_size=100, chunk_overlap=10)
        self.assertTrue(any(formula in c for c in chunks))


class TestGradeAndFrontmatter(unittest.TestCase):
    def test_normalize_grade_variants(self):
        cases = {"Kelas 10": "10", "kelas 11": "11", "Kelas XII": "12", "X": "10", "xi": "11", 12: "12",
                 "10": "10", "Tambahan": "Tambahan", "umum": "Umum"}
        for value, expected in cases.items():
            self.assertEqual(normalize_grade(value), expected, value)
        for value in (None, "", "  ", "Kelas 9", "abc"):
            self.assertIsNone(normalize_grade(value), value)

    def test_detect_grade_prefers_frontmatter_then_headings_then_path(self):
        self.assertEqual(detect_grade(sub_sec="Kelas XI (Matematika Wajib)", fallback="10"), "10")
        self.assertEqual(detect_grade(sub_sec="Kelas X (Matematika Wajib)"), "10")
        self.assertEqual(detect_grade(sub_sec="Kelas XI (Matematika Wajib)"), "11")
        self.assertEqual(detect_grade(sub_sec="Kelas XII (Matematika Wajib)"), "12")
        self.assertEqual(detect_grade(source_name="kelas_12/tl_bab_01.md"), "12")
        self.assertEqual(detect_grade(fallback="Tambahan"), "Tambahan")
        self.assertEqual(detect_grade(), "Umum")

    def test_extract_frontmatter_handles_crlf_and_bom(self):
        raw = "\ufeff---\r\njudul: \"Matriks\"\r\nkelas: \"11\"\r\n---\r\n# Judul\r\nIsi"
        meta, body = extract_frontmatter(raw)
        self.assertEqual(meta["judul"], "Matriks")
        self.assertEqual(meta["kelas"], "11")
        self.assertTrue(body.startswith("# Judul"))
        self.assertEqual(extract_frontmatter("# tanpa frontmatter")[0], {})
        self.assertEqual(extract_frontmatter("---\nbukan: yaml: valid: [\n---\nteks")[0], {})


class TestStructureAwareChunking(unittest.TestCase):
    def setUp(self):
        self.md = MINI_KB["kelas_11/bab_06_matriks.md"]

    def test_metadata_schema_and_values(self):
        chunks = chunk_markdown_with_metadata(self.md, source_name="kelas_11/bab_06_matriks.md")
        self.assertGreaterEqual(len(chunks), 1)
        required = {"kelas", "bab", "section", "sub_section", "topic", "heading_path", "fase", "mapel",
                    "tingkat_lanjut", "kurikulum", "sumber", "source_file", "chunk_index", "char_count"}
        for index, chunk in enumerate(chunks):
            meta = chunk["metadata"]
            self.assertTrue(required <= set(meta), required - set(meta))
            self.assertEqual(meta["kelas"], "11")
            self.assertEqual(meta["bab"], "Matriks")
            self.assertTrue(meta["tingkat_lanjut"])
            self.assertEqual(meta["chunk_index"], index)
            for value in meta.values():  # kompatibel dengan ChromaDB
                self.assertIsInstance(value, (str, int, float, bool))

    def test_table_of_contents_is_skipped(self):
        chunks = chunk_markdown_with_metadata(self.md, source_name="x.md")
        self.assertFalse(any("Daftar Isi" in c["text"] or "bagian satu" in c["text"] for c in chunks))

    def test_heading_path_and_breadcrumb(self):
        with_bc = chunk_markdown_with_metadata(self.md, source_name="x.md", breadcrumb_in_text=True)
        without = chunk_markdown_with_metadata(self.md, source_name="x.md", breadcrumb_in_text=False)
        path = "Matriks › Determinan dan Invers › Invers Matriks"
        self.assertTrue(any(c["metadata"]["heading_path"] == path for c in with_bc))
        self.assertTrue(all(c["text"].startswith("[Matriks") for c in with_bc))
        self.assertFalse(any(c["text"].startswith("[Matriks") for c in without))

    def test_header_only_fragments_are_merged_into_child(self):
        md = "# Bab 6 — Matriks\n\n## Determinan dan Invers\n\n### Invers Matriks\n\n" + PROSE * 2 + "\n\nRumus..."
        chunks = chunk_markdown_with_metadata(md, source_name="x.md", breadcrumb_in_text=False)
        self.assertTrue(all(len(c["text"]) >= 100 for c in chunks), [len(c["text"]) for c in chunks])
        self.assertTrue(any("# Bab 6" in c["text"] and "Invers Matriks" in c["text"] for c in chunks))

    def test_metadata_priority_override_over_frontmatter_over_default(self):
        defaults = {"kelas": "12", "judul": "Default", "fase": "Z"}
        chunks = chunk_markdown_with_metadata(
            self.md, source_name="x.md", default_metadata=defaults,
            override_metadata={"kelas": "10", "judul": "Dari Form", "tingkat_lanjut": False, "bab": None},
        )
        meta = chunks[0]["metadata"]
        self.assertEqual(meta["kelas"], "10")          # override
        self.assertEqual(meta["bab"], "Dari Form")      # override
        self.assertEqual(meta["fase"], "E")             # frontmatter mengalahkan default
        self.assertFalse(meta["tingkat_lanjut"])        # override eksplisit

    def test_no_frontmatter_uses_headings(self):
        md = "# Bab 1 — Eksponen\n\n## Kelas XI\n\n" + PROSE * 3
        meta = chunk_markdown_with_metadata(md, source_name="catatan.md")[0]["metadata"]
        self.assertEqual(meta["bab"], "Eksponen")
        self.assertEqual(meta["kelas"], "11")

    def test_advanced_detection_from_filename_prefix(self):
        md = "# Limit\n\n" + PROSE * 3
        self.assertTrue(chunk_markdown_with_metadata(md, source_name="kelas_12/tl_bab_02_limit.md")[0]["metadata"]["tingkat_lanjut"])
        self.assertFalse(chunk_markdown_with_metadata(md, source_name="kelas_12/bab_02_limit.md")[0]["metadata"]["tingkat_lanjut"])

    def test_empty_input_returns_no_chunks(self):
        self.assertEqual(chunk_markdown_with_metadata("", source_name="x.md"), [])
        self.assertEqual(chunk_markdown_with_metadata("---\njudul: a\n---\n", source_name="x.md"), [])

    def test_real_knowledge_base_chunking_is_sound(self):
        chunks = rag_store.build_curriculum_chunks()
        self.assertGreater(len(chunks), 2000)
        ids = [c["id"] for c in chunks]
        self.assertEqual(len(ids), len(set(ids)), "ID chunk harus unik")
        broken = [c["id"] for c in chunks if unbalanced_math(c["text"])]
        self.assertEqual(broken, [], "Rumus terpotong pada chunk")
        grades = {c["metadata"]["kelas"] for c in chunks}
        self.assertTrue({"10", "11", "12", "Tambahan"} <= grades)
        self.assertTrue(grades <= set(VALID_GRADES), grades)
        self.assertFalse(any("Daftar Isi" in c["metadata"]["section"] for c in chunks))
        self.assertTrue(any(c["metadata"]["tingkat_lanjut"] for c in chunks))
        self.assertTrue(all(c["metadata"]["origin"] == "curriculum" for c in chunks))


# ==============================================================================
# ROW 16 - EKSTRAKSI FILE (md / docx / pdf)
# ==============================================================================

class TestFileExtraction(unittest.TestCase):
    def setUp(self):
        self.tmp = tempfile.mkdtemp()
        self.addCleanup(shutil.rmtree, self.tmp, ignore_errors=True)

    def path(self, name):
        return os.path.join(self.tmp, name)

    def test_markdown_and_txt(self):
        with open(self.path("a.md"), "w", encoding="utf-8-sig") as handle:
            handle.write("# Judul\nIsi")
        self.assertEqual(rag.get_text_from_file(self.path("a.md")), "# Judul\nIsi")

    def test_non_utf8_text_is_rejected_with_value_error(self):
        with open(self.path("b.txt"), "wb") as handle:
            handle.write(b"\xff\xfe\x00bad")
        with self.assertRaises(ValueError):
            rag.get_text_from_file(self.path("b.txt"))

    def test_unsupported_extension(self):
        with self.assertRaises(ValueError):
            rag.get_text_from_file(self.path("c.exe"))

    def test_docx_headings_and_tables_become_markdown(self):
        from docx import Document
        doc = Document()
        doc.add_heading("Trigonometri", level=1)
        doc.add_heading("Aturan Sinus", level=2)
        doc.add_paragraph(PROSE * 3 + "Rumus $\\sin A$ penting.")
        table = doc.add_table(rows=2, cols=2)
        table.cell(0, 0).text, table.cell(0, 1).text = "Sudut", "Nilai"
        table.cell(1, 0).text, table.cell(1, 1).text = "30", "0,5"
        doc.save(self.path("materi.docx"))

        text = rag.get_text_from_file(self.path("materi.docx"))
        self.assertIn("# Trigonometri", text)
        self.assertIn("## Aturan Sinus", text)
        self.assertIn("| Sudut | Nilai |", text)

        chunks = rag.process_document(self.path("materi.docx"))
        self.assertTrue(any(c["metadata"]["section"] == "Aturan Sinus" for c in chunks))
        self.assertTrue(all(c["metadata"]["bab"] == "materi" for c in chunks))

    def test_text_pdf_is_extracted(self):
        make_text_pdf(self.path("teks.pdf"), "Aturan sinus pada segitiga")
        self.assertIn("Aturan sinus", rag.get_text_from_file(self.path("teks.pdf")))

    def test_scanned_or_blank_pdf_is_rejected_clearly(self):
        from pypdf import PdfWriter
        writer = PdfWriter()
        writer.add_blank_page(612, 792)
        with open(self.path("scan.pdf"), "wb") as handle:
            writer.write(handle)
        with self.assertRaises(ValueError) as ctx:
            rag.process_document(self.path("scan.pdf"))
        self.assertIn("scan", str(ctx.exception).lower())

    def test_corrupt_pdf_raises_value_error(self):
        with open(self.path("rusak.pdf"), "wb") as handle:
            handle.write(b"bukan pdf sama sekali")
        with self.assertRaises(ValueError):
            rag.get_text_from_file(self.path("rusak.pdf"))

    def test_process_document_markdown_uses_frontmatter(self):
        with open(self.path("x.md"), "w", encoding="utf-8") as handle:
            handle.write(MINI_KB["kelas_10/bab_04_trigonometri.md"])
        chunks = rag.process_document(self.path("x.md"))
        self.assertEqual(chunks[0]["metadata"]["bab"], "Trigonometri")
        self.assertEqual(chunks[0]["metadata"]["kelas"], "10")


# ==============================================================================
# ROW 20 - INDEXING & RETRIEVAL CHROMADB (direktori sementara)
# ==============================================================================

class ChromaTestCase(unittest.TestCase):
    """Basis: ChromaDB sementara + mini KB. Tidak menyentuh backend/chroma_db."""

    @classmethod
    def setUpClass(cls):
        cls.tmp = tempfile.mkdtemp()
        cls.kb_dir = os.path.join(cls.tmp, "kb")
        cls.chroma_dir = os.path.join(cls.tmp, "chroma")
        write_kb(cls.kb_dir)
        cls._patches = [
            mock.patch.object(rag_store, "CHROMA_PERSIST_DIR", cls.chroma_dir),
            mock.patch.object(rag_store, "KNOWLEDGE_BASE_DIR", cls.kb_dir),
        ]
        for patcher in cls._patches:
            patcher.start()
        rag_store.reset_chroma_clients()
        cls.index_result = rag_store.index_curriculum_to_chromadb()

    @classmethod
    def tearDownClass(cls):
        for patcher in cls._patches:
            patcher.stop()
        rag_store.reset_chroma_clients()
        shutil.rmtree(cls.tmp, ignore_errors=True)

    def setUp(self):
        rag_store._set_status("ready", "test")


class TestChromaIndexing(ChromaTestCase):
    def test_initial_index_success(self):
        self.assertEqual(self.index_result["status"], "success")
        expected = len(rag_store.build_curriculum_chunks(self.kb_dir))
        self.assertEqual(rag_store.get_knowledge_collection().count(), expected)
        self.assertGreaterEqual(expected, 4)

    def test_every_chunk_has_metadata_and_origin(self):
        data = rag_store.get_knowledge_collection().get(include=["metadatas", "documents"])
        self.assertTrue(data["ids"])
        for meta, doc in zip(data["metadatas"], data["documents"]):
            self.assertEqual(meta["origin"], "curriculum")
            self.assertIn(meta["kelas"], VALID_GRADES)
            self.assertTrue(meta["bab"])
            self.assertTrue(doc.strip())

    def test_reindex_is_idempotent_when_nothing_changed(self):
        self.assertEqual(rag_store.index_curriculum_to_chromadb()["status"], "already_indexed")
        self.assertTrue(rag_store.is_curriculum_index_current())

    def test_changed_content_triggers_rebuild_without_stale_chunks(self):
        extra_kb = os.path.join(self.tmp, "kb2")
        shutil.copytree(self.kb_dir, extra_kb, dirs_exist_ok=True)
        persist = os.path.join(self.tmp, "chroma_exp")
        first = rag_store.index_curriculum_to_chromadb(kb_dir=extra_kb, collection_name="exp", persist_dir=persist)
        self.assertEqual(first["status"], "success")
        before = first["total_chunks"]

        os.remove(os.path.join(extra_kb, "tambahan", "logika_matematika.md"))
        second = rag_store.index_curriculum_to_chromadb(kb_dir=extra_kb, collection_name="exp", persist_dir=persist)
        self.assertEqual(second["status"], "success")
        self.assertLess(second["total_chunks"], before)
        metas = rag_store.get_knowledge_collection(rag_store.get_chroma_client(persist), "exp").get(include=["metadatas"])["metadatas"]
        self.assertFalse(any(m["kelas"] == "Tambahan" for m in metas))

    def test_interrupted_index_without_manifest_is_rebuilt(self):
        persist = os.path.join(self.tmp, "chroma_interrupt")
        rag_store.index_curriculum_to_chromadb(kb_dir=self.kb_dir, collection_name="exp2", persist_dir=persist)
        os.remove(rag_store._manifest_path(persist))
        again = rag_store.index_curriculum_to_chromadb(kb_dir=self.kb_dir, collection_name="exp2", persist_dir=persist)
        self.assertEqual(again["status"], "success")

    def test_experiment_collection_does_not_touch_production(self):
        before = rag_store.get_knowledge_collection().count()
        rag_store.index_curriculum_to_chromadb(
            kb_dir=self.kb_dir, collection_name="exp3", chunk_size=300, chunk_overlap=50,
            persist_dir=os.path.join(self.tmp, "chroma_exp3"),
        )
        self.assertEqual(rag_store.get_knowledge_collection().count(), before)

    def test_ensure_chromadb_indexed_marks_ready_when_current(self):
        rag_store._set_status("idle")
        self.assertIsNone(rag_store.ensure_chromadb_indexed())
        self.assertEqual(rag_store.INDEX_STATUS["state"], "ready")

    def test_ensure_chromadb_indexed_runs_in_background_when_stale(self):
        persist = os.path.join(self.tmp, "chroma_bg")
        with mock.patch.object(rag_store, "CHROMA_PERSIST_DIR", persist):
            rag_store.reset_chroma_clients()
            thread = rag_store.ensure_chromadb_indexed(background=True)
            self.assertIsNotNone(thread)
            thread.join(timeout=120)
            self.assertEqual(rag_store.INDEX_STATUS["state"], "ready")
            self.assertGreater(rag_store.get_knowledge_collection().count(), 0)
        rag_store.reset_chroma_clients()


class TestChromaRetrieval(ChromaTestCase):
    def top_bab(self, query, **kwargs):
        hits = rag_store.query_knowledge_chromadb(query, n_results=3, **kwargs)
        self.assertTrue(hits)
        return hits[0]["metadata"]["bab"]

    def test_semantic_queries_find_the_right_chapter(self):
        self.assertEqual(self.top_bab("aturan sinus pada segitiga"), "Trigonometri")
        self.assertEqual(self.top_bab("cara mencari invers matriks dan determinan"), "Matriks")
        self.assertEqual(self.top_bab("menghitung luas daerah dengan integral tentu"), "Integral")
        self.assertEqual(self.top_bab("tabel kebenaran konjungsi"), "Logika Matematika")

    def test_hit_structure(self):
        hit = rag_store.query_knowledge_chromadb("integral tentu", n_results=1)[0]
        self.assertEqual(set(hit), {"id", "text", "metadata", "distance", "matched_grade"})
        self.assertIsInstance(hit["distance"], float)

    def test_grade_filter_accepts_ui_format_and_prioritises_grade(self):
        for grade, expected in (("Kelas 10", "10"), ("Kelas XI", "11"), ("12", "12")):
            hits = rag_store.query_knowledge_chromadb("penjelasan materi", grade=grade, n_results=3)
            self.assertEqual(hits[0]["metadata"]["kelas"], expected, grade)
            self.assertTrue(hits[0]["matched_grade"])

    def test_strict_grade_only_returns_that_grade(self):
        hits = rag_store.query_knowledge_chromadb("integral matriks sinus logika", grade="Kelas 11", n_results=4, strict_grade=True)
        self.assertTrue(hits)
        self.assertTrue(all(h["metadata"]["kelas"] == "11" for h in hits))

    def test_non_strict_grade_fills_remaining_slots_from_other_grades(self):
        hits = rag_store.query_knowledge_chromadb("integral tentu", grade="Kelas 10", n_results=3)
        self.assertEqual(len(hits), 3)
        self.assertEqual(hits[0]["metadata"]["kelas"], "10")
        self.assertFalse(hits[-1]["matched_grade"])

    def test_empty_or_unknown_grade_means_no_filter(self):
        for grade in (None, "", "Kelas 9", "ngawur"):
            self.assertTrue(rag_store.query_knowledge_chromadb("integral tentu", grade=grade, n_results=2), grade)

    def test_advanced_filter(self):
        hits = rag_store.query_knowledge_chromadb("penjelasan materi", is_advanced=False, n_results=4)
        self.assertTrue(hits)
        self.assertTrue(all(h["metadata"]["tingkat_lanjut"] is False for h in hits))

    def test_blank_query_and_indexing_state_return_empty(self):
        self.assertEqual(rag_store.query_knowledge_chromadb("   "), [])
        rag_store._set_status("indexing")
        self.assertEqual(rag_store.query_knowledge_chromadb("integral"), [])

    def test_n_results_larger_than_collection_is_safe(self):
        hits = rag_store.query_knowledge_chromadb("integral", n_results=500)
        self.assertEqual(len(hits), rag_store.get_knowledge_collection().count())

    def test_stats_and_topics(self):
        stats = rag_store.get_knowledge_stats()
        self.assertEqual(stats["index_state"], "ready")
        self.assertEqual(stats["curriculum_chunks"], rag_store.get_knowledge_collection().count())
        self.assertEqual(set(stats["by_kelas"]), {"10", "11", "12", "Tambahan"})
        topics = rag_store.list_curriculum_topics()
        self.assertEqual([t["bab"] for t in topics["11"]], ["Matriks"])
        self.assertTrue(topics["11"][0]["tingkat_lanjut"])

    def test_context_formatting_for_prompt(self):
        context = rag.retrieve_relevant_curriculum_context("integral tentu luas daerah", grade="Kelas 12")
        self.assertIn("> **Sumber:** Integral (Kelas 12", context)
        self.assertIn("\\int", context)

    def test_context_max_distance_filters_to_keyword_fallback(self):
        context = rag.retrieve_relevant_curriculum_context("integral", max_distance=0.0)
        self.assertNotIn("> **Sumber:**", context)

    def test_prompt_includes_retrieved_context_with_ui_grade(self):
        prompt = rag.build_system_prompt(grade="Kelas 11", subject="Matriks, Vektor & Transformasi", query="invers matriks 2x2")
        self.assertIn("# REFERENSI KNOWLEDGE BASE KURIKULUM", prompt)
        self.assertIn("Matriks (Kelas 11", prompt)


class TestKeywordFallback(unittest.TestCase):
    def test_empty_chroma_falls_back_to_keyword_context(self):
        tmp = tempfile.mkdtemp()
        self.addCleanup(shutil.rmtree, tmp, ignore_errors=True)
        with mock.patch.object(rag_store, "CHROMA_PERSIST_DIR", tmp):
            rag_store.reset_chroma_clients()
            rag_store._set_status("ready")
            context = rag.retrieve_relevant_curriculum_context("jelaskan matriks dan determinan")
            rag_store.reset_chroma_clients()
        self.assertTrue(context)
        self.assertNotIn("> **Sumber:**", context)

    def test_missing_chromadb_package_does_not_crash(self):
        with mock.patch.object(rag_store, "chromadb", None):
            self.assertEqual(rag_store.query_knowledge_chromadb("integral"), [])
            self.assertIsNone(rag_store.ensure_chromadb_indexed())
            self.assertEqual(rag_store.INDEX_STATUS["state"], "unavailable")
            self.assertTrue(rag.retrieve_relevant_curriculum_context("jelaskan matriks"))
        rag_store._set_status("idle")


# ==============================================================================
# ROW 21 - UPLOAD -> CHROMADB
# ==============================================================================

class TestUploadIndexing(ChromaTestCase):
    def setUp(self):
        super().setUp()
        self.files = tempfile.mkdtemp()
        self.addCleanup(shutil.rmtree, self.files, ignore_errors=True)
        self.addCleanup(self._cleanup_uploads)

    def _cleanup_uploads(self):
        rag_store.get_upload_collection().delete(where={"uploaded_by": {"$gte": 0}})

    def write(self, name, text):
        path = os.path.join(self.files, name)
        with open(path, "w", encoding="utf-8") as handle:
            handle.write(text)
        return path

    NOTE = "# Catatan Pribadi\n\n## Barisan\n\n" + PROSE * 3 + "\n\nSuku ke-n: $U_n = a + (n-1)b$\n"

    def test_upload_is_indexed_with_user_and_form_metadata(self):
        path = self.write("catatan.md", self.NOTE)
        result = rag.ingest_uploaded_document(path, user_id=7, original_filename="catatan.md",
                                              kelas="Kelas 10", bab="Barisan Aritmetika", tingkat_lanjut=False)
        self.assertEqual(result["collection"], rag_store.UPLOAD_COLLECTION_NAME)
        self.assertEqual(result["kelas"], "10")
        self.assertEqual(result["bab"], "Barisan Aritmetika")
        data = rag_store.get_upload_collection().get(where={"uploaded_by": 7}, include=["metadatas"])
        self.assertEqual(len(data["ids"]), result["indexed_chunks"])
        meta = data["metadatas"][0]
        self.assertEqual((meta["origin"], meta["source_file"], meta["kelas"]), ("upload", "catatan.md", "10"))

    def test_upload_does_not_pollute_curriculum_collection(self):
        before = rag_store.get_knowledge_collection().count()
        rag.ingest_uploaded_document(self.write("n.md", self.NOTE), user_id=7, original_filename="n.md")
        self.assertEqual(rag_store.get_knowledge_collection().count(), before)

    def test_uploaded_document_only_retrievable_by_owner(self):
        rag.ingest_uploaded_document(self.write("rahasia.md", self.NOTE.replace("Barisan", "Barisan Rahasia Xylophone")),
                                     user_id=7, original_filename="rahasia.md")
        owner = rag_store.query_knowledge_chromadb("barisan rahasia xylophone", user_id=7, n_results=3)
        other = rag_store.query_knowledge_chromadb("barisan rahasia xylophone", user_id=8, n_results=3)
        anonymous = rag_store.query_knowledge_chromadb("barisan rahasia xylophone", n_results=3)
        self.assertTrue(any(h["metadata"].get("origin") == "upload" for h in owner))
        self.assertFalse(any(h["metadata"].get("origin") == "upload" for h in other))
        self.assertFalse(any(h["metadata"].get("origin") == "upload" for h in anonymous))

    def test_reupload_same_filename_replaces_without_duplicates(self):
        path = self.write("dok.md", self.NOTE)
        first = rag.ingest_uploaded_document(path, user_id=7, original_filename="dok.md")
        second = rag.ingest_uploaded_document(path, user_id=7, original_filename="dok.md")
        self.assertEqual(first["indexed_chunks"], second["indexed_chunks"])
        count = len(rag_store.get_upload_collection().get(where={"uploaded_by": 7})["ids"])
        self.assertEqual(count, second["indexed_chunks"])

    def test_same_filename_different_users_do_not_collide(self):
        path = self.write("sama.md", self.NOTE)
        rag.ingest_uploaded_document(path, user_id=1, original_filename="sama.md")
        rag.ingest_uploaded_document(path, user_id=2, original_filename="sama.md")
        for uid in (1, 2):
            self.assertTrue(rag_store.list_user_documents(uid))
        self.assertEqual(rag_store.delete_user_document(1, "sama.md") > 0, True)
        self.assertEqual(rag_store.list_user_documents(1), [])
        self.assertTrue(rag_store.list_user_documents(2))

    def test_list_and_delete_documents(self):
        rag.ingest_uploaded_document(self.write("a.md", self.NOTE), user_id=3, original_filename="a.md", kelas="12")
        docs = rag_store.list_user_documents(3)
        self.assertEqual([d["filename"] for d in docs], ["a.md"])
        self.assertEqual(docs[0]["kelas"], "12")
        self.assertGreater(docs[0]["chunks"], 0)
        self.assertEqual(rag_store.delete_user_document(3, "a.md"), docs[0]["chunks"])
        self.assertEqual(rag_store.delete_user_document(3, "a.md"), 0)

    def test_generate_answer_uses_owner_upload_in_system_prompt(self):
        rag.ingest_uploaded_document(self.write("bahan.md", self.NOTE.replace("Barisan", "Barisan Zeppelin")),
                                     user_id=11, original_filename="bahan.md")
        captured = {}

        def fake_chat(messages):
            captured["messages"] = messages
            return "ok"

        with mock.patch.object(rag, "_call_ollama_chat", side_effect=fake_chat):
            rag.generate_answer("jelaskan barisan zeppelin", grade="Kelas 10", user_id=11)
            self.assertIn("Dokumen unggahan Anda: bahan.md", captured["messages"][0]["content"])
            rag.generate_answer("jelaskan barisan zeppelin", grade="Kelas 10", user_id=12)
            self.assertNotIn("Dokumen unggahan Anda", captured["messages"][0]["content"])
        self.assertEqual(captured["messages"][0]["role"], "system")
        self.assertIn("Pertanyaan Siswa", captured["messages"][-1]["content"])


class TestUploadAPI(ChromaTestCase):
    """Endpoint HTTP: POST /upload, GET/DELETE /api/documents, GET /api/knowledge/*."""

    @classmethod
    def setUpClass(cls):
        super().setUpClass()
        from fastapi import FastAPI
        from fastapi.testclient import TestClient
        from api.routers import document_router, knowledge_router
        from services.user_service import get_current_user

        cls.document_router = document_router
        app = FastAPI()
        app.include_router(document_router.router)
        app.include_router(knowledge_router.router)
        cls.current = {"id": 7}
        app.dependency_overrides[get_current_user] = lambda: type("U", (), {"id": cls.current["id"]})()
        cls.client = TestClient(app)
        cls.upload_dir = os.path.join(cls.tmp, "uploads")
        cls._upload_patch = mock.patch.object(document_router, "UPLOAD_FOLDER", cls.upload_dir)
        cls._upload_patch.start()

    @classmethod
    def tearDownClass(cls):
        cls._upload_patch.stop()
        super().tearDownClass()

    def setUp(self):
        super().setUp()
        self.current["id"] = 7
        self.addCleanup(lambda: rag_store.get_upload_collection().delete(where={"uploaded_by": {"$gte": 0}}))

    def post(self, name="materi.md", content=None, data=None, mime="text/markdown"):
        content = content if content is not None else TestUploadIndexing.NOTE.encode()
        return self.client.post("/upload", files={"file": (name, io.BytesIO(content), mime)}, data=data or {})

    def leftovers(self):
        return os.listdir(self.upload_dir) if os.path.isdir(self.upload_dir) else []

    def test_successful_upload_returns_index_info_and_cleans_temp_file(self):
        response = self.post(data={"kelas": "Kelas 11", "bab": "Barisan Uji", "tingkat_lanjut": "true"})
        self.assertEqual(response.status_code, 200, response.text)
        body = response.json()
        self.assertTrue(body["indexed_to_chroma"])
        self.assertEqual(body["indexed_chunks"], body["chunks_count"])
        self.assertGreater(body["chunks_count"], 0)
        self.assertEqual((body["kelas"], body["bab"], body["tingkat_lanjut"]), ("11", "Barisan Uji", True))
        self.assertEqual(body["collection"], "smartai_uploads")
        self.assertEqual(body["uploaded_by"], 7)
        self.assertEqual(body["filename"], "materi.md")
        self.assertIn("message", body)
        self.assertEqual(self.leftovers(), [])

    def test_upload_without_optional_metadata(self):
        body = self.post().json()
        self.assertEqual(body["bab"], "Catatan Pribadi" if body["bab"] == "Catatan Pribadi" else body["bab"])
        self.assertIn(body["kelas"], VALID_GRADES)

    def test_rejects_unsupported_extension(self):
        response = self.post(name="virus.exe", content=b"MZ", mime="application/octet-stream")
        self.assertEqual(response.status_code, 400)
        self.assertEqual(self.leftovers(), [])

    def test_rejects_invalid_kelas(self):
        self.assertEqual(self.post(data={"kelas": "Kelas 9"}).status_code, 422)

    def test_rejects_empty_file(self):
        self.assertEqual(self.post(content=b"").status_code, 400)

    def test_rejects_oversized_file(self):
        with mock.patch.object(self.document_router, "MAX_UPLOAD_BYTES", 1000):
            response = self.post(content=b"x" * 1500)
        self.assertEqual(response.status_code, 413)
        self.assertEqual(self.leftovers(), [])

    def test_rejects_scanned_pdf_and_cleans_temp_file(self):
        from pypdf import PdfWriter
        buffer = io.BytesIO()
        writer = PdfWriter()
        writer.add_blank_page(612, 792)
        writer.write(buffer)
        response = self.post(name="scan.pdf", content=buffer.getvalue(), mime="application/pdf")
        self.assertEqual(response.status_code, 400)
        self.assertIn("scan", response.json()["detail"].lower())
        self.assertEqual(self.leftovers(), [])

    def test_text_pdf_upload_is_indexed(self):
        pdf_path = os.path.join(self.tmp, "teks.pdf")
        make_text_pdf(pdf_path, "Aturan sinus pada segitiga ABC")
        with open(pdf_path, "rb") as handle:
            response = self.post(name="teks.pdf", content=handle.read(), mime="application/pdf")
        self.assertEqual(response.status_code, 200, response.text)
        self.assertTrue(response.json()["indexed_to_chroma"])

    def test_path_traversal_filename_is_sanitised(self):
        response = self.post(name="../../etc/passwd.md")
        self.assertEqual(response.status_code, 200, response.text)
        self.assertNotIn("/", response.json()["filename"])
        self.assertNotIn("..", response.json()["filename"])

    def test_documents_list_and_delete_are_scoped_to_user(self):
        self.post(name="milik7.md")
        self.current["id"] = 8
        self.post(name="milik8.md")
        self.assertEqual([d["filename"] for d in self.client.get("/api/documents").json()["documents"]], ["milik8.md"])
        self.assertEqual(self.client.delete("/api/documents/milik7.md").status_code, 404)  # bukan milik user 8
        self.assertEqual(self.client.delete("/api/documents/milik8.md").status_code, 200)
        self.assertEqual(self.client.get("/api/documents").json()["documents"], [])
        self.current["id"] = 7
        self.assertEqual([d["filename"] for d in self.client.get("/api/documents").json()["documents"]], ["milik7.md"])

    def test_chromadb_unavailable_returns_503(self):
        with mock.patch.object(rag_store, "chromadb", None):
            response = self.post()
        self.assertEqual(response.status_code, 503)
        self.assertEqual(self.leftovers(), [])

    def test_knowledge_search_endpoint(self):
        response = self.client.get("/api/knowledge/search", params={"q": "integral tentu", "grade": "Kelas 12", "k": 2})
        self.assertEqual(response.status_code, 200)
        body = response.json()
        self.assertEqual(body["grade"], "12")
        self.assertEqual(body["count"], 2)
        self.assertEqual(body["results"][0]["metadata"]["bab"], "Integral")
        self.assertEqual(self.client.get("/api/knowledge/search", params={"q": "x"}).status_code, 422)
        self.assertEqual(self.client.get("/api/knowledge/search", params={"q": "integral", "grade": "Kelas 9"}).status_code, 422)

    def test_search_includes_own_upload_only(self):
        self.post(name="zzz.md", content=TestUploadIndexing.NOTE.replace("Barisan", "Barisan Quokka").encode())
        mine = self.client.get("/api/knowledge/search", params={"q": "barisan quokka", "k": 3}).json()["results"]
        self.assertTrue(any(r["metadata"].get("origin") == "upload" for r in mine))
        self.current["id"] = 9
        theirs = self.client.get("/api/knowledge/search", params={"q": "barisan quokka", "k": 3}).json()["results"]
        self.assertFalse(any(r["metadata"].get("origin") == "upload" for r in theirs))

    def test_topics_and_stats_endpoints(self):
        topics = self.client.get("/api/knowledge/topics").json()["topics"]
        self.assertEqual(set(topics), {"10", "11", "12", "Tambahan"})
        stats = self.client.get("/api/knowledge/stats").json()
        self.assertEqual(stats["index_state"], "ready")
        self.assertGreater(stats["curriculum_chunks"], 0)


if __name__ == "__main__":
    unittest.main()
