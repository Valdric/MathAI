"""
MathAI Data Engineering CLI - Knowledge Base Ingestion & Verification
Role: Data Engineer
Tasks: Row 18 (LaTeX Cleaning & Normalization), Row 19 (Structure-Aware Chunking & Metadata)
"""

import os
import sys
import glob
import json
import argparse
from typing import List, Dict, Any

# Ensure backend root is in python path
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
if BASE_DIR not in sys.path:
    sys.path.insert(0, BASE_DIR)

from rag import (
    chunk_markdown_with_metadata,
    clean_and_normalize_latex,
    process_document,
    index_curriculum_to_chromadb,
)


def run_ingestion(
    kb_dir: str,
    output_json: str = None,
    verbose: bool = False,
) -> Dict[str, Any]:
    """Menyusuri seluruh file di knowledge_base, melakukan cleaning, chunking, dan audit metadata."""
    if not os.path.exists(kb_dir):
        raise FileNotFoundError(f"Direktori Knowledge Base tidak ditemukan: {kb_dir}")

    files = sorted(glob.glob(f"{kb_dir}/**/*.md", recursive=True))
    # Exclude README.md and sample documents if any
    curriculum_files = [
        f for f in files
        if not os.path.basename(f).lower().startswith("readme")
    ]

    print("=" * 80)
    print(f" MATHAI DATA ENGINEERING INGESTION PIPELINE (ROW 18 & 19)")
    print(f" Direktori Target : {kb_dir}")
    print(f" Total File Materi: {len(curriculum_files)} modul Markdown")
    print("=" * 80)

    total_chunks = 0
    total_characters = 0
    unmatched_display_math = 0
    unmatched_inline_math = 0
    grade_distribution: Dict[str, int] = {}
    advanced_count = 0
    regular_count = 0

    all_processed_chunks: List[Dict[str, Any]] = []

    print(f"\n{'No.':<4} {'File Name':<45} {'Kelas':<8} {'TL':<5} {'Chunks':<8} {'Math OK':<8}")
    print("-" * 80)

    for idx, fpath in enumerate(curriculum_files, 1):
        rel_path = os.path.relpath(fpath, kb_dir)
        fname = os.path.basename(fpath)

        with open(fpath, "r", encoding="utf-8") as f:
            content = f.read()

        chunks = chunk_markdown_with_metadata(
            raw_text=content,
            source_name=rel_path.replace("\\", "/"),
        )

        file_chunks_count = len(chunks)
        total_chunks += file_chunks_count

        file_unmatched_display = 0
        file_unmatched_inline = 0
        first_meta = chunks[0]["metadata"] if chunks else {}
        kelas = first_meta.get("kelas", "Umum")
        is_tl = first_meta.get("tingkat_lanjut", False)

        grade_distribution[kelas] = grade_distribution.get(kelas, 0) + file_chunks_count
        if is_tl:
            advanced_count += file_chunks_count
        else:
            regular_count += file_chunks_count

        for c in chunks:
            text = c["text"]
            total_characters += len(text)
            all_processed_chunks.append(c)

            if text.count("$$") % 2 != 0:
                file_unmatched_display += 1
                unmatched_display_math += 1

            # Check inline $
            import re
            no_display = re.sub(r"\$\$.*?\$\$", "", text, flags=re.DOTALL)
            no_display = no_display.replace(r"\$", "")
            if no_display.count("$") % 2 != 0:
                file_unmatched_inline += 1
                unmatched_inline_math += 1

        math_status = "PASS" if file_unmatched_display == 0 and file_unmatched_inline == 0 else "FAIL"
        display_name = fname if len(fname) <= 43 else fname[:40] + "..."
        tl_str = "Ya" if is_tl else "Tidak"

        print(f"{idx:<4} {display_name:<45} {kelas:<8} {tl_str:<5} {file_chunks_count:<8} {math_status:<8}")

        if verbose and file_chunks_count > 0:
            print(f"     -> Bab: {first_meta.get('bab')} | Mapel: {first_meta.get('mapel')}")

    print("-" * 80)
    print("\n" + "=" * 80)
    print(" RINGKASAN AUDIT INGESTION & QUALITY METRICS")
    print("=" * 80)
    print(f" Total File Diproses         : {len(curriculum_files)}")
    print(f" Total Chunks Dihasilkan     : {total_chunks}")
    print(f" Total Karakter Teks         : {total_characters:,} karakter")
    print(f" Rata-rata Panjang Chunk     : {total_characters // (total_chunks or 1)} karakter")
    print(f" Distribusi Jenjang Kelas    : {dict(sorted(grade_distribution.items()))}")
    print(f" Chunks Reguler (Wajib)      : {regular_count}")
    print(f" Chunks Tingkat Lanjut (TL)  : {advanced_count}")
    print(f" Broken Display Math ($$)    : {unmatched_display_math} {'(SEMPURNA: 0 Cacat)' if unmatched_display_math == 0 else 'WARNING'}")
    print(f" Broken Inline Math ($)      : {unmatched_inline_math} {'(SEMPURNA: 0 Cacat)' if unmatched_inline_math == 0 else 'WARNING'}")
    print("=" * 80)

    summary = {
        "status": "success",
        "total_files": len(curriculum_files),
        "total_chunks": total_chunks,
        "total_characters": total_characters,
        "average_chunk_size": total_characters // (total_chunks or 1),
        "grade_distribution": grade_distribution,
        "regular_chunks": regular_count,
        "advanced_chunks": advanced_count,
        "unmatched_display_math": unmatched_display_math,
        "unmatched_inline_math": unmatched_inline_math,
    }

    if output_json:
        out_dir = os.path.dirname(os.path.abspath(output_json))
        os.makedirs(out_dir, exist_ok=True)
        with open(output_json, "w", encoding="utf-8") as f:
            json.dump({
                "summary": summary,
                "chunks": all_processed_chunks if verbose else all_processed_chunks[:50],
            }, f, indent=2, ensure_ascii=False)
        print(f"\n[Artifact Output] Hasil ringkasan disimpan ke: {output_json}")

    return summary


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="MathAI Knowledge Base Ingestion CLI")
    parser.add_argument(
        "--kb-dir",
        default=os.path.join(BASE_DIR, "knowledge_base"),
        help="Path ke direktori knowledge_base",
    )
    parser.add_argument(
        "--output",
        default=None,
        help="Path file output JSON opsional untuk ringkasan/chunks",
    )
    parser.add_argument(
        "--verbose",
        action="store_true",
        help="Menampilkan detail bab dan menyimpan sampel chunks",
    )
    parser.add_argument(
        "--index",
        action="store_true",
        help="Langsung lakukan indexing ke ChromaDB (smartai_knowledge) setelah verifikasi",
    )
    parser.add_argument(
        "--force",
        action="store_true",
        help="Dengan --index: bangun ulang index dari nol walau materi tidak berubah",
    )

    args = parser.parse_args()
    summary = run_ingestion(kb_dir=args.kb_dir, output_json=args.output, verbose=args.verbose)
    if args.index:
        print("\n" + "=" * 80)
        print(" MEMULAI INDEXING KE CHROMADB")
        print("=" * 80)
        res = index_curriculum_to_chromadb(kb_dir=args.kb_dir, force_reindex=args.force)
        print(f"Status Indexing: {res.get('status')} | Total Chunks: {res.get('total_chunks')}")
