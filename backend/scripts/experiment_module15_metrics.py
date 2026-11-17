"""
Module 14, 15, & 16 — Verifikasi & Eksperimen Konsep Semantic Search (ChromaDB)
Mengadaptasi seluruh tahapan pada 'panduan PDS 2.md' untuk proyek MathAI:
  1. Module 13 & 14 : Uji idempotensi ensure_collection() & upsert dokumen tanpa duplikasi.
  2. Module 15 (a)  : Perhitungan 2D Cosine Similarity, L2 Distance, dan Dot Product.
  3. Module 15 (b)  : Pembuktian Norma Vektor (Unit Vector = 1.0) pada nomic-embed-text.
  4. Module 15 (c)  : Eksperimen 3 Collection ChromaDB ('cosine', 'l2', 'ip') dengan materi MathAI
                      untuk membuktikan urutan ranking identik di ketiga metrik.
  5. Module 16      : Verifikasi RAG_TOP_K = 5 dan integrasi ke prompt chatbot MathAI.
"""

import math
import os
import shutil
import sys
import tempfile

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
if BASE_DIR not in sys.path:
    sys.path.insert(0, BASE_DIR)

import chromadb
from embeddings import embed_text, embed_texts
from ingest import extract_text
from rag import RAG_TOP_K, retrieve_relevant_curriculum_context


def cosine_2d(a, b):
    dot = sum(x * y for x, y in zip(a, b))
    norm_a = math.sqrt(sum(x * x for x in a))
    norm_b = math.sqrt(sum(y * y for y in b))
    return dot / (norm_a * norm_b)


def l2_2d(a, b):
    return math.sqrt(sum((x - y) ** 2 for x, y in zip(a, b)))


def dot_2d(a, b):
    return sum(x * y for x, y in zip(a, b))


def normalize_vec(v):
    norm = math.sqrt(sum(x * x for x in v))
    if norm == 0:
        return v
    return [x / norm for x in v]


def main():
    print("=" * 75)
    print("TAHAP 1 — MODULE 15.2: SIMULASI 2 DIMENSI (COSINE vs L2 vs DOT PRODUCT)")
    print("=" * 75)
    A = [3, 4]
    B = [6, 8]
    C = [4, -3]
    print(f"Vektor A = {A}, B = {B} (searah, B = 2A), C = {C} (tegak lurus)")
    print(
        f"Pasangan (A, B) -> Cosine: {cosine_2d(A, B):.2f} | "
        f"L2 Distance: {l2_2d(A, B):.2f} | Dot Product: {dot_2d(A, B):.2f}"
    )
    print(
        f"Pasangan (A, C) -> Cosine: {cosine_2d(A, C):.2f} | "
        f"L2 Distance: {l2_2d(A, C):.2f} | Dot Product: {dot_2d(A, C):.2f}"
    )

    print("\n" + "=" * 75)
    print("TAHAP 2 — MODULE 15.4: CEK NORMA VEKTOR EMBEDDING (UNIT VECTOR = 1.0)")
    print("=" * 75)
    sample_emb = embed_text("Rumus suku ke-n barisan aritmetika dan deret geometri SMA")
    raw_norm = math.sqrt(sum(x * x for x in sample_emb))
    unit_emb = normalize_vec(sample_emb)
    unit_norm = math.sqrt(sum(x * x for x in unit_emb))
    print(f"Dimensi Vektor nomic-embed-text : {len(sample_emb)}")
    print(f"Norma Vektor Asli               : {raw_norm:.6f}")
    print(f"Norma Vektor Ternormalisasi     : {unit_norm:.6f} (Unit Vector ||v|| = 1.0)")

    print("\n" + "=" * 75)
    print("TAHAP 3 — MODULE 15.3: EKSPERIMEN 3 METRIK DI CHROMADB (cosine, l2, ip)")
    print("=" * 75)
    kb_dir = os.path.join(BASE_DIR, "knowledge_base")
    sample_docs = [
        ("bab_01_eksponen", "Kelas 10 Bab 1 Eksponen dan Logaritma: Sifat bilangan berpangkat dan logaritma."),
        ("bab_02_barisan", "Kelas 10 Bab 2 Barisan dan Deret: Barisan aritmetika Un = a + (n-1)b dan deret geometri."),
        ("bab_04_trigonometri", "Kelas 10 Bab 4 Trigonometri: Perbandingan sinus, cosinus, tangen pada segitiga siku-siku."),
        ("bab_06_matriks", "Kelas 11 Bab 6 Matriks: Determinan dan invers matriks ordo 2x2 serta operasi baris."),
        ("bab_02_investasi", "Kelas 12 Bab 2 Investasi dan Pinjaman: Perhitungan bunga tunggal, bunga majemuk, dan anuitas."),
        ("tl_bab_04_integral", "Kelas 12 Bab 4 Integral: Integral tak tentu, integral tentu, dan luas daerah di bawah kurva."),
    ]
    doc_ids = [d[0] for d in sample_docs]
    doc_texts = [d[1] for d in sample_docs]
    doc_embs = [normalize_vec(e) for e in embed_texts(doc_texts)]

    query_text = "bagaimana cara menghitung tabungan dengan bunga majemuk dan anuitas"
    query_emb = normalize_vec(embed_text(query_text))
    print(f"Query Uji: '{query_text}'\n")

    tmp_dir = tempfile.mkdtemp(prefix="mathai_mod15_")
    try:
        client = chromadb.PersistentClient(path=tmp_dir)
        rankings_by_metric = {}

        for space in ("cosine", "l2", "ip"):
            coll = client.get_or_create_collection(
                name=f"test_{space}",
                metadata={"hnsw:space": space},
            )
            # Uji idempotensi Module 14: upsert 2x dengan ID yang sama tidak menduplikasi
            coll.upsert(ids=doc_ids, documents=doc_texts, embeddings=doc_embs)
            coll.upsert(ids=doc_ids, documents=doc_texts, embeddings=doc_embs)
            assert coll.count() == len(doc_ids), "Duplikasi terdeteksi!"

            res = coll.query(query_embeddings=[query_emb], n_results=len(doc_ids))
            hit_ids = res["ids"][0]
            hit_dists = res["distances"][0]
            rankings_by_metric[space] = hit_ids
            print(f"Metrik '{space:<6}' (count={coll.count()}) -> Urutan Top-6:")
            for rank_idx, (hid, hdist) in enumerate(zip(hit_ids, hit_dists), start=1):
                print(f"  #{rank_idx}: {hid:<20} (distance={hdist:.4f})")
            print()

        same_ranking = (
            rankings_by_metric["cosine"] == rankings_by_metric["l2"] == rankings_by_metric["ip"]
        )
        print(f"Apakah urutan ranking IDENTIK di ketiga metrik (cosine == l2 == ip)? -> {same_ranking}")
    finally:
        shutil.rmtree(tmp_dir, ignore_errors=True)

    print("\n" + "=" * 75)
    print("TAHAP 4 — MODULE 16: VERIFIKASI RAG_TOP_K = 5 & INTEGRASI KONTEKS CHAT")
    print("=" * 75)
    print(f"Konfigurasi RAG_TOP_K di backend/rag.py saat ini: {RAG_TOP_K}")
    ctx = retrieve_relevant_curriculum_context(
        "Jelaskan Masalah 5.1 tentang Susunan Kelereng pada materi Barisan dan Deret Kelas 10!"
    )
    chunks_returned = ctx.count("> **Sumber:**")
    print(f"Jumlah potongan referensi yang dikirim ke prompt AI: {chunks_returned} chunks")
    print(f"Apakah 'Masalah 5.1: Susunan Kelereng' masuk di posisi #1? -> {'Masalah 5.1: Susunan Kelereng' in ctx.splitlines()[2]}")
    print("=" * 75)


if __name__ == "__main__":
    main()
