"""
MathAI - Harness Evaluasi & Eksperimen Retrieval
Role pembuat : Data Engineer  |  Pengguna utama : Data Scientist (Row 23-27)

Mengukur seberapa sering chunk yang relevan muncul di top-K hasil ChromaDB:
  - Recall@K : proporsi pertanyaan yang minimal 1 chunk top-K-nya berasal dari bab yang diharapkan
  - MRR      : rata-rata 1/peringkat chunk relevan pertama
  - Mean distance top-1 : indikator kemiripan (semakin kecil semakin mirip; L2 pada embedding ter-normalisasi)

Faithfulness / Answer Relevance memerlukan LLM-judge dan bukan bagian skrip ini (Row 27).

Contoh:
  # Evaluasi koleksi produksi apa adanya
  python backend/scripts/evaluate_retrieval.py --top-k 5

  # Eksperimen parameter chunking (koleksi eksperimen terpisah, produksi tidak tersentuh)
  python backend/scripts/evaluate_retrieval.py --reindex --chunk-size 600 --overlap 100 --top-k 5
  python backend/scripts/evaluate_retrieval.py --reindex --no-breadcrumb --top-k 5

  # Bandingkan embedding multibahasa (butuh: pip install sentence-transformers)
  python backend/scripts/evaluate_retrieval.py --reindex --embedding st:paraphrase-multilingual-MiniLM-L12-v2

  # Pakai Golden Dataset sendiri (format sama dengan backend/evaluation/sanity_queries.json)
  python backend/scripts/evaluate_retrieval.py --dataset backend/evaluation/golden_dataset.json --output hasil.json
"""

import argparse
import json
import os
import sys
from typing import Any, Dict, List, Optional

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
if BASE_DIR not in sys.path:
    sys.path.insert(0, BASE_DIR)

from rag_store import (  # noqa: E402
    DEFAULT_CHUNK_OVERLAP,
    DEFAULT_CHUNK_SIZE,
    KNOWLEDGE_COLLECTION_NAME,
    get_chroma_client,
    get_embedding_function,
    get_knowledge_collection,
    index_curriculum_to_chromadb,
    query_knowledge_chromadb,
)

DEFAULT_DATASET = os.path.join(BASE_DIR, "evaluation", "sanity_queries.json")
EXPERIMENT_DIR = os.path.join(BASE_DIR, "chroma_experiments")


def load_dataset(path: str) -> List[Dict[str, Any]]:
    with open(path, "r", encoding="utf-8") as handle:
        data = json.load(handle)
    queries = data["queries"] if isinstance(data, dict) else data
    for item in queries:
        if "question" not in item or "expected_bab" not in item:
            raise ValueError(f"Item dataset tidak valid (butuh 'question' & 'expected_bab'): {item}")
        if isinstance(item["expected_bab"], str):
            item["expected_bab"] = [item["expected_bab"]]
    return queries


def evaluate(
    collection,
    queries: List[Dict[str, Any]],
    top_k: int = 5,
    use_grade_filter: bool = False,
) -> Dict[str, Any]:
    ks = sorted({k for k in (1, 3, 5, top_k) if k <= top_k})
    hits_at = {k: 0 for k in ks}
    reciprocal_ranks: List[float] = []
    top1_distances: List[float] = []
    misses: List[Dict[str, Any]] = []
    per_query: List[Dict[str, Any]] = []

    for item in queries:
        grade = item.get("expected_kelas") if use_grade_filter else None
        results = query_knowledge_chromadb(item["question"], grade=grade, n_results=top_k, collection=collection)
        babs = [r["metadata"].get("bab", "") for r in results]
        rank = next((i + 1 for i, b in enumerate(babs) if b in item["expected_bab"]), None)
        for k in ks:
            if rank is not None and rank <= k:
                hits_at[k] += 1
        reciprocal_ranks.append(1.0 / rank if rank else 0.0)
        if results:
            top1_distances.append(results[0]["distance"])
        record = {
            "id": item.get("id"),
            "question": item["question"],
            "expected_bab": item["expected_bab"],
            "rank_of_first_relevant": rank,
            "top_results": [
                {"bab": r["metadata"].get("bab"), "kelas": r["metadata"].get("kelas"),
                 "heading": r["metadata"].get("heading_path"), "distance": round(r["distance"], 4)}
                for r in results
            ],
        }
        per_query.append(record)
        if rank is None:
            misses.append(record)

    n = len(queries) or 1
    return {
        "num_queries": len(queries),
        "top_k": top_k,
        "grade_filter": use_grade_filter,
        "recall_at_k": {f"Recall@{k}": round(hits_at[k] / n, 4) for k in ks},
        "mrr": round(sum(reciprocal_ranks) / n, 4),
        "mean_top1_distance": round(sum(top1_distances) / (len(top1_distances) or 1), 4),
        "misses": misses,
        "per_query": per_query,
    }


def print_report(report: Dict[str, Any], label: str) -> None:
    print("=" * 78)
    print(f" EVALUASI RETRIEVAL - {label}")
    print("=" * 78)
    print(f" Jumlah pertanyaan : {report['num_queries']}   | top-K: {report['top_k']}   | filter kelas: {report['grade_filter']}")
    for name, value in report["recall_at_k"].items():
        print(f" {name:<18}: {value:.2%}")
    print(f" MRR               : {report['mrr']:.4f}")
    print(f" Rata-rata jarak top-1: {report['mean_top1_distance']:.4f}")
    if report["misses"]:
        print(f"\n Pertanyaan TANPA hasil relevan di top-{report['top_k']} ({len(report['misses'])}):")
        for miss in report["misses"]:
            got = ", ".join(r["bab"] or "?" for r in miss["top_results"][:3])
            print(f"  - [{miss['id']}] {miss['question']}\n      diharapkan: {miss['expected_bab']}\n      didapat   : {got}")
    print("=" * 78)


def main(argv: Optional[List[str]] = None) -> Dict[str, Any]:
    parser = argparse.ArgumentParser(description="Evaluasi retrieval ChromaDB MathAI")
    parser.add_argument("--dataset", default=DEFAULT_DATASET)
    parser.add_argument("--top-k", type=int, default=5)
    parser.add_argument("--use-grade-filter", action="store_true", help="Pakai expected_kelas sebagai filter metadata")
    parser.add_argument("--collection", default=KNOWLEDGE_COLLECTION_NAME)
    parser.add_argument("--persist-dir", default=None, help="Direktori ChromaDB (default: backend/chroma_db)")
    parser.add_argument("--reindex", action="store_true", help="Bangun koleksi eksperimen baru sesuai parameter di bawah")
    parser.add_argument("--chunk-size", type=int, default=DEFAULT_CHUNK_SIZE)
    parser.add_argument("--overlap", type=int, default=DEFAULT_CHUNK_OVERLAP)
    parser.add_argument("--no-breadcrumb", action="store_true", help="Jangan sisipkan jalur judul ke teks chunk")
    parser.add_argument("--embedding", default="default", help="'default' atau 'st:<nama-model-sentence-transformers>'")
    parser.add_argument("--output", default=None, help="Simpan laporan lengkap ke file JSON")
    args = parser.parse_args(argv)

    queries = load_dataset(args.dataset)
    embedding = get_embedding_function(args.embedding)

    if args.reindex:
        persist_dir = args.persist_dir or EXPERIMENT_DIR
        emb_tag = args.embedding.replace(":", "-").replace("/", "-")
        name = f"exp_cs{args.chunk_size}_ov{args.overlap}_{'nobc' if args.no_breadcrumb else 'bc'}_{emb_tag}"[:60]
        print(f"[Eksperimen] Membangun koleksi '{name}' di {persist_dir} ...")
        result = index_curriculum_to_chromadb(
            collection_name=name, chunk_size=args.chunk_size, chunk_overlap=args.overlap,
            breadcrumb_in_text=not args.no_breadcrumb, embedding_function=embedding, persist_dir=persist_dir,
            progress=lambda done, total: print(f"   indexing {done}/{total}", end="\r"),
        )
        print(f"\n[Eksperimen] {result['status']} - {result['total_chunks']} chunks")
        collection = get_knowledge_collection(get_chroma_client(persist_dir), name, embedding)
        label = name
    else:
        client = get_chroma_client(args.persist_dir)
        collection = get_knowledge_collection(client, args.collection, embedding)
        label = f"koleksi '{args.collection}' ({collection.count()} chunks)"

    report = evaluate(collection, queries, top_k=args.top_k, use_grade_filter=args.use_grade_filter)
    report["label"] = label
    print_report(report, label)
    if args.output:
        with open(args.output, "w", encoding="utf-8") as handle:
            json.dump(report, handle, indent=2, ensure_ascii=False)
        print(f"Laporan lengkap disimpan: {args.output}")
    return report


if __name__ == "__main__":
    main()
