"""
MathAI - Row 16: Uji Ekstraksi pypdf vs Parser Alternatif / Sumber Markdown (.md)
Role pemilik : Data Engineer

Dua bagian pengujian:
  A. Audit SUMBER MARKDOWN (backend/knowledge_base/**/*.md): validitas frontmatter, struktur heading,
     keseimbangan delimiter LaTeX, artefak ekstraksi (karakter rusak, simbol Unicode di luar math).
  B. Perbandingan PARSER PDF pada PDF yang tersedia (default: backend/raw_pdfs/*.pdf):
     pypdf (bawaan, selalu ada) vs PyMuPDF dan pdfplumber (opsional, bila terpasang).
     Metrik: halaman kosong (indikasi PDF scan), jumlah karakter, simbol matematika terbaca,
     karakter rusak (U+FFFD), dan waktu.

Contoh:
  python backend/scripts/benchmark_parsers.py
  python backend/scripts/benchmark_parsers.py --pdf-dir D:\\materi_pdf --report docs/ROW16_PARSER_BENCHMARK.md
  pip install pymupdf pdfplumber   # opsional, untuk membandingkan parser alternatif
"""

import argparse
import glob
import os
import re
import sys
import time
from typing import Any, Callable, Dict, List, Optional

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
if BASE_DIR not in sys.path:
    sys.path.insert(0, BASE_DIR)

from rag_chunking import clean_and_normalize_latex, extract_frontmatter  # noqa: E402

REQUIRED_FRONTMATTER = ("judul", "kelas", "fase", "bab", "mapel", "kurikulum", "sumber")
MATH_SYMBOLS = "∫∑∏√π≤≥≠±×÷∞∂θαβγδΔλμσΩ∈∉⊂∪∩→⇒⇔"
BROKEN_CHARS = ("\ufffd", "□", "￾")

_DISPLAY = re.compile(r"\$\$.*?\$\$", re.DOTALL)
_INLINE = re.compile(r"(?<![\$\\])\$(?!\$)([^$\n]+?)(?<![\$\\])\$(?!\$)")


# ------------------------------------------------------------------------------
# A. Audit sumber Markdown
# ------------------------------------------------------------------------------

def audit_markdown(path: str) -> Dict[str, Any]:
    with open(path, "r", encoding="utf-8") as handle:
        raw = handle.read()
    frontmatter, body = extract_frontmatter(raw)
    issues: List[str] = []

    missing = [k for k in REQUIRED_FRONTMATTER if not str(frontmatter.get(k, "")).strip()]
    if not frontmatter:
        issues.append("tanpa frontmatter")
    elif missing:
        issues.append("frontmatter kurang: " + ",".join(missing))

    headings = re.findall(r"(?m)^(#{1,4})\s+\S", body)
    levels = {f"h{n}": sum(1 for h in headings if len(h) == n) for n in (1, 2, 3, 4)}
    if levels["h1"] != 1:
        issues.append(f"jumlah H1={levels['h1']} (diharapkan 1)")

    display = _DISPLAY.findall(body)
    without_display = _DISPLAY.sub("", body)
    inline = _INLINE.findall(without_display)
    if body.count("$$") % 2:
        issues.append("delimiter $$ tidak berpasangan")
    if without_display.replace("\\$", "").count("$") % 2:
        issues.append("delimiter $ tidak berpasangan")

    outside_math = _INLINE.sub("", without_display)
    unicode_outside = sum(outside_math.count(ch) for ch in "∫∑√π≤≥≠±∞∂")
    broken = sum(body.count(ch) for ch in BROKEN_CHARS)
    if broken:
        issues.append(f"{broken} karakter rusak")

    cleaned = clean_and_normalize_latex(body)
    dollars_preserved = cleaned.count("$") == body.count("$")
    if not dollars_preserved:
        issues.append("cleaning mengubah jumlah delimiter $ (rumus berisiko hilang)")

    empty_headings = len(re.findall(r"(?m)^#{1,4}\s+.+\n\s*(?=#{1,4}\s)", body))

    return {
        "file": os.path.relpath(path, BASE_DIR).replace("\\", "/"),
        "chars": len(body),
        "frontmatter_ok": bool(frontmatter) and not missing,
        "headings": levels,
        "display_math": len(display),
        "inline_math": len(inline),
        "unicode_math_outside_latex": unicode_outside,
        "empty_headings": empty_headings,
        "cleaning_preserves_formulas": dollars_preserved,
        "issues": issues,
    }


# ------------------------------------------------------------------------------
# B. Perbandingan parser PDF
# ------------------------------------------------------------------------------

def _pages_pypdf(path: str) -> List[str]:
    from pypdf import PdfReader
    return [(p.extract_text() or "") for p in PdfReader(path).pages]


def _pages_pymupdf(path: str) -> List[str]:
    import fitz  # PyMuPDF
    with fitz.open(path) as doc:
        return [page.get_text() or "" for page in doc]


def _pages_pdfplumber(path: str) -> List[str]:
    import pdfplumber
    with pdfplumber.open(path) as pdf:
        return [(page.extract_text() or "") for page in pdf.pages]


PDF_ENGINES: Dict[str, Callable[[str], List[str]]] = {
    "pypdf": _pages_pypdf,
    "pymupdf": _pages_pymupdf,
    "pdfplumber": _pages_pdfplumber,
}


def benchmark_pdf(path: str, engine: str) -> Dict[str, Any]:
    started = time.perf_counter()
    try:
        pages = PDF_ENGINES[engine](path)
    except ImportError:
        return {"engine": engine, "status": "tidak terpasang"}
    except Exception as exc:
        return {"engine": engine, "status": f"gagal: {exc}"}
    elapsed = time.perf_counter() - started
    text = "\n".join(pages)
    return {
        "engine": engine,
        "status": "ok",
        "pages": len(pages),
        "empty_pages": sum(1 for p in pages if not p.strip()),
        "chars": len(text),
        "math_symbols": sum(text.count(ch) for ch in MATH_SYMBOLS),
        "broken_chars": sum(text.count(ch) for ch in BROKEN_CHARS),
        "seconds": round(elapsed, 3),
    }


# ------------------------------------------------------------------------------
# Pelaporan
# ------------------------------------------------------------------------------

def build_report(md_results: List[Dict[str, Any]], pdf_results: Dict[str, List[Dict[str, Any]]], pdf_dir: str) -> str:
    lines: List[str] = ["# Row 16 - Uji Ekstraksi: pypdf vs Parser Alternatif vs Sumber Markdown", ""]
    ok_files = sum(1 for r in md_results if not r["issues"])
    total_display = sum(r["display_math"] for r in md_results)
    total_inline = sum(r["inline_math"] for r in md_results)
    lines += [
        "## A. Audit Sumber Markdown",
        "",
        f"- File diaudit: **{len(md_results)}** | tanpa masalah: **{ok_files}** | dengan catatan: **{len(md_results) - ok_files}**",
        f"- Total rumus LaTeX terdeteksi: **{total_display}** blok display (`$$`) + **{total_inline}** inline (`$`)",
        f"- Cleaning menjaga seluruh rumus: **{all(r['cleaning_preserves_formulas'] for r in md_results)}**",
        "",
        "| File | Karakter | FM | H1/H2/H3/H4 | `$$` | `$` | Unicode di luar math | Catatan |",
        "|---|---:|:-:|:-:|---:|---:|---:|---|",
    ]
    for r in md_results:
        h = r["headings"]
        lines.append(
            f"| `{r['file'].replace('backend/knowledge_base/', '')}` | {r['chars']:,} | {'ok' if r['frontmatter_ok'] else '-'} | "
            f"{h['h1']}/{h['h2']}/{h['h3']}/{h['h4']} | {r['display_math']} | {r['inline_math']} | "
            f"{r['unicode_math_outside_latex']} | {'; '.join(r['issues']) or '-'} |"
        )

    lines += ["", f"## B. Perbandingan Parser PDF (`{pdf_dir}`)", ""]
    if not pdf_results:
        lines += [
            "_Tidak ada file PDF pada direktori tersebut, sehingga perbandingan pypdf vs PyMuPDF vs pdfplumber "
            "**belum dapat diukur pada data nyata**. Letakkan sampel PDF (termasuk PDF scan) lalu jalankan ulang skrip ini._",
            "",
        ]
    else:
        lines += [
            "| PDF | Engine | Status | Halaman | Hal. kosong | Karakter | Simbol math | Karakter rusak | Detik |",
            "|---|---|---|---:|---:|---:|---:|---:|---:|",
        ]
        for pdf, rows in pdf_results.items():
            for r in rows:
                if r["status"] != "ok":
                    lines.append(f"| `{os.path.basename(pdf)}` | {r['engine']} | {r['status']} | | | | | | |")
                else:
                    lines.append(
                        f"| `{os.path.basename(pdf)}` | {r['engine']} | ok | {r['pages']} | {r['empty_pages']} | "
                        f"{r['chars']:,} | {r['math_symbols']} | {r['broken_chars']} | {r['seconds']} |"
                    )
        lines.append("")

    lines += [
        "## C. Keputusan",
        "",
        "- **Sumber utama RAG = Markdown (`.md`)**: rumus sudah berupa LaTeX yang tepat, hierarki heading tersedia untuk "
        "structure-aware chunking, dan metadata kelas/bab/fase tersedia di frontmatter. README materi juga mencatat bahwa "
        "rumus pada teks buku rusak saat diekstrak dari PDF.",
        "- **PDF/DOCX hanya jalur unggahan siswa** (`POST /upload`). Parser bawaan: pypdf. PDF hasil scan (semua halaman kosong) "
        "ditolak dengan pesan jelas karena OCR belum didukung.",
        "- Mengganti parser PDF default (mis. ke PyMuPDF) sebaiknya menunggu hasil tabel B pada PDF nyata. "
        "Catatan lisensi: PyMuPDF berlisensi AGPL.",
        "",
    ]
    return "\n".join(lines)


def main(argv: Optional[List[str]] = None) -> int:
    parser = argparse.ArgumentParser(description="Row 16 - benchmark ekstraksi dokumen")
    parser.add_argument("--kb-dir", default=os.path.join(BASE_DIR, "knowledge_base"))
    parser.add_argument("--pdf-dir", default=os.path.join(BASE_DIR, "raw_pdfs"))
    parser.add_argument("--engines", default="pypdf,pymupdf,pdfplumber")
    parser.add_argument("--report", default=None, help="Tulis laporan Markdown ke file ini")
    args = parser.parse_args(argv)

    md_files = sorted(
        f for f in glob.glob(os.path.join(args.kb_dir, "**", "*.md"), recursive=True)
        if not os.path.basename(f).lower().startswith("readme")
    )
    md_results = [audit_markdown(f) for f in md_files]

    pdf_results: Dict[str, List[Dict[str, Any]]] = {}
    engines = [e.strip() for e in args.engines.split(",") if e.strip() in PDF_ENGINES]
    for pdf in sorted(glob.glob(os.path.join(args.pdf_dir, "*.pdf"))):
        pdf_results[pdf] = [benchmark_pdf(pdf, e) for e in engines]

    report = build_report(md_results, pdf_results, os.path.relpath(args.pdf_dir, BASE_DIR).replace("\\", "/"))
    print(report)
    if args.report:
        os.makedirs(os.path.dirname(os.path.abspath(args.report)), exist_ok=True)
        with open(args.report, "w", encoding="utf-8") as handle:
            handle.write(report)
        print(f"\nLaporan ditulis ke: {args.report}")
    return 0 if all(r["frontmatter_ok"] or not r["issues"] for r in md_results) else 1


if __name__ == "__main__":
    sys.exit(main())
