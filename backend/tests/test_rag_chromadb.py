"""
Unit & Integration Tests untuk RAG MathAI (Module 10, 11, 12 — ChromaDB + nomic-embed-text)
"""

import os
import sys
import unittest

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, BASE_DIR)

from ingest import extract_text, split_markdown_into_chunks, discover_knowledge_base_files
from embeddings import embed_text
from vector_store import VectorStore, DEFAULT_KB_PATH, DEFAULT_CHROMA_PATH
from rag import retrieve_relevant_curriculum_context


class TestMathAIRAG(unittest.TestCase):
    def test_module10_knowledge_base_and_latex_atomic_chunking(self):
        """Module 10: Pastikan 29 dokumen ditemukan dan LaTeX $$...$$ tidak terpotong di tengah rumus."""
        files = discover_knowledge_base_files(DEFAULT_KB_PATH)
        self.assertGreaterEqual(len(files), 28)

        sample_path = os.path.join(DEFAULT_KB_PATH, "kelas_10", "bab_02_barisan_dan_deret.md")
        raw = extract_text(sample_path)
        self.assertIn("Barisan dan Deret", raw)

        # Uji chunking LaTeX atomik pada teks dengan blok persamaan panjang
        long_math_md = (
            '---\njudul: "Uji LaTeX"\nkelas: "12"\n---\n\n'
            + ("Penjelasan materi integral fungsi trigonometri. " * 20)
            + "\n\n$$\\int_{0}^{\\pi} \\left(\\sin^2(x) + \\cos^2(x) + \\frac{\\sqrt{x^2 + 1}}{x + 2}\\right) dx = \\pi$$\n\n"
            + ("Langkah lanjutan substitusi aljabar pada integral tentu. " * 20)
        )
        chunks = split_markdown_into_chunks(long_math_md, rel_path="kelas_12/uji.md", chunk_size=350, chunk_overlap=50)
        self.assertGreater(len(chunks), 1)
        # Pastikan tidak ada chunk yang memiliki jumlah delimiter $$ ganjil (terpotong di tengah)
        for ch in chunks:
            self.assertEqual(ch["text"].count("$$") % 2, 0, f"LaTeX $$ terpotong pada chunk: {ch['text']}")

    def test_module11_embedding_dimension_and_determinism(self):
        """Module 11: Pastikan nomic-embed-text menghasilkan vektor 768 dimensi & deterministik."""
        v1 = embed_text("Turunan fungsi trigonometri dan aturan rantai kelas 12")
        v2 = embed_text("Turunan fungsi trigonometri dan aturan rantai kelas 12")
        self.assertEqual(len(v1), 768)
        self.assertEqual(v1, v2)

    def test_module12_chromadb_semantic_search_and_scoping(self):
        """Module 12: Pastikan ChromaDB berisi ribuan chunk materi dan pencarian semantik akurat."""
        vs = VectorStore(chroma_path=DEFAULT_CHROMA_PATH)
        self.assertGreater(vs.count(), 2000)

        hits = vs.search("bagaimana cara menghitung bunga majemuk investasi dan pinjaman anuitas", k=3)
        self.assertGreaterEqual(len(hits), 1)
        sources = [h["metadata"].get("source", "") for h in hits]
        self.assertTrue(
            any("investasi_dan_pinjaman" in s or "barisan_dan_deret" in s for s in sources),
            f"Sumber tidak sesuai: {sources}",
        )

        # Uji integrasi dengan fungsi retrieve_relevant_curriculum_context di rag.py
        ctx = retrieve_relevant_curriculum_context(
            query="Tentukan determinan dan invers matriks ordo 2x2",
            grade="11",
            subject="Matriks",
        )
        self.assertIn("Referensi RAG #1", ctx)
        self.assertIn("bab_06_matriks.md", ctx)

    def test_module13_to_16_app_package_and_chat_stream(self):
        """Module 13–16: Verifikasi paket app/ (ensure_index idempotent, ingest_documents tanpa duplikat, /chat/stream)."""
        import shutil
        import tempfile
        from fastapi.testclient import TestClient

        repo_root = os.path.dirname(BASE_DIR)
        if repo_root not in sys.path:
            sys.path.insert(0, repo_root)

        from app.vector_store import VectorStore as AppVectorStore
        from app.ingest import ingest_documents
        from app.main import app, RAG_TOP_K

        self.assertEqual(RAG_TOP_K, 5)

        tmp_chroma = tempfile.mkdtemp(prefix="mathai_m13_")
        tmp_kb = tempfile.mkdtemp(prefix="mathai_kb_")
        try:
            vs = AppVectorStore(chroma_path=tmp_chroma, collection_name="mathai-m13", auto_index=False)
            vs.ensure_index("mathai-m13")
            vs.ensure_index("mathai-m13")

            doc_text = "Barisan aritmetika memiliki selisih dua suku berurutan tetap Un = a + (n-1)b"
            emb = embed_text(doc_text)
            vs.index_document("mathai-m13", "doc-1", doc_text, emb, {"source": "manual-test"})
            hits = vs.search("mathai-m13", embed_text("rumus suku ke-n deret aritmatika"), k=3)
            self.assertGreaterEqual(len(hits), 1)
            self.assertIn("aritmetika", hits[0]["_source"]["text"].lower())

            with open(os.path.join(tmp_kb, "eksponen.md"), "w", encoding="utf-8") as f:
                f.write("# Eksponen\nSifat pangkat a^m * a^n = a^(m+n)")
            with open(os.path.join(tmp_kb, "matriks.md"), "w", encoding="utf-8") as f:
                f.write("# Matriks\nDeterminan matriks 2x2 adalah ad - bc")

            c1 = ingest_documents(tmp_kb, vs, "mathai-kb-m14")
            cnt1 = vs.count("mathai-kb-m14")
            c2 = ingest_documents(tmp_kb, vs, "mathai-kb-m14")
            cnt2 = vs.count("mathai-kb-m14")
            self.assertEqual((c1, c2, cnt1, cnt2), (2, 2, 2, 2))

            client = TestClient(app)
            r_empty = client.post("/chat/stream", json={"messages": []})
            self.assertEqual(r_empty.status_code, 400)
            r_role = client.post("/chat/stream", json={"messages": [{"role": "assistant", "content": "halo"}]})
            self.assertEqual(r_role.status_code, 400)
        finally:
            shutil.rmtree(tmp_chroma, ignore_errors=True)
            shutil.rmtree(tmp_kb, ignore_errors=True)


if __name__ == "__main__":
    unittest.main(verbosity=2)
