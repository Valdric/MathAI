"""
MathAI Data Engineering CLI - Indexing ke ChromaDB & uji retrieval (Row 20)

  python backend/scripts/index_to_chroma.py                 # index bila belum mutakhir
  python backend/scripts/index_to_chroma.py --force         # bangun ulang dari nol
  python backend/scripts/index_to_chroma.py --stats         # status index
  python backend/scripts/index_to_chroma.py --query "rumus aturan sinus" --grade "Kelas 10"
"""

import argparse
import json
import os
import sys

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
if BASE_DIR not in sys.path:
    sys.path.insert(0, BASE_DIR)

from rag_store import (  # noqa: E402
    get_knowledge_stats,
    index_curriculum_to_chromadb,
    query_knowledge_chromadb,
)


def main() -> None:
    parser = argparse.ArgumentParser(description="MathAI ChromaDB indexing & retrieval CLI")
    parser.add_argument("--force", action="store_true", help="Bangun ulang index dari nol")
    parser.add_argument("--stats", action="store_true", help="Tampilkan status index")
    parser.add_argument("--query", default=None, help="Uji pencarian semantik")
    parser.add_argument("--grade", default=None, help="Filter kelas: 10 / 11 / 12 / Tambahan / 'Kelas 10'")
    parser.add_argument("--strict-grade", action="store_true", help="Hanya kelas tersebut (tanpa mengisi dari kelas lain)")
    parser.add_argument("--n-results", type=int, default=3)
    args = parser.parse_args()

    if args.stats:
        print(json.dumps(get_knowledge_stats(), indent=2, ensure_ascii=False))
        return

    if args.query:
        hits = query_knowledge_chromadb(
            args.query, grade=args.grade, n_results=args.n_results, strict_grade=args.strict_grade
        )
        print(f"\n[Query] '{args.query}' | grade={args.grade} | {len(hits)} hasil\n")
        for i, hit in enumerate(hits, 1):
            meta = hit["metadata"]
            print(f"{i}. {meta.get('bab')} (Kelas {meta.get('kelas')}, {meta.get('mapel')}) "
                  f"[distance {hit['distance']:.4f}]")
            print(f"   {meta.get('heading_path')}")
            print(f"   {hit['text'][:200].replace(chr(10), ' ')}...")
            print("-" * 70)
        return

    result = index_curriculum_to_chromadb(
        force_reindex=args.force,
        progress=lambda done, total: print(f"  indexing {done}/{total}", end="\r"),
    )
    print(json.dumps(result, indent=2, ensure_ascii=False))


if __name__ == "__main__":
    main()
