"""
Script Indexing & Verifikasi RAG (Module 10, 11, 12)
Mengindeks seluruh dokumen di backend/knowledge_base/ ke ChromaDB
menggunakan model embedding Ollama (nomic-embed-text, 768 dimensi).
"""

import os
import sys

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, BASE_DIR)

from ingest import discover_knowledge_base_files, extract_text, split_markdown_into_chunks
from embeddings import embed_text
from vector_store import VectorStore, DEFAULT_KB_PATH, DEFAULT_CHROMA_PATH


def main():
    print("=" * 65)
    print("1. VERIFIKASI MODULE 10 (KNOWLEDGE BASE & TEXT EXTRACTION)")
    print("=" * 65)
    files = discover_knowledge_base_files(DEFAULT_KB_PATH)
    print(f"Folder Knowledge Base : {DEFAULT_KB_PATH}")
    print(f"Total file ditemukan  : {len(files)} file")

    sample_file = os.path.join(DEFAULT_KB_PATH, "kelas_10", "bab_02_barisan_dan_deret.md")
    if os.path.exists(sample_file):
        sample_text = extract_text(sample_file)
        print(f"Uji extract_text()    : {os.path.basename(sample_file)} ({len(sample_text)} karakter)")

    print("\n" + "=" * 65)
    print("2. VERIFIKASI MODULE 11 (EMBEDDING: nomic-embed-text)")
    print("=" * 65)
    v1 = embed_text("Rumus suku ke-n barisan aritmetika dan deret geometri")
    v2 = embed_text("Rumus suku ke-n barisan aritmetika dan deret geometri")
    print(f"Dimensi vektor        : {len(v1)} (Target: 768)")
    print(f"Contoh 3 nilai awal   : {v1[:3]}")
    print(f"Uji Deterministik     : identik = {v1 == v2}")

    print("\n" + "=" * 65)
    print("3. VERIFIKASI MODULE 12 (CHROMADB VECTOR STORE & INDEXING)")
    print("=" * 65)
    vs = VectorStore(chroma_path=DEFAULT_CHROMA_PATH)
    print(f"Lokasi ChromaDB       : {DEFAULT_CHROMA_PATH}")
    print(f"Collection            : {vs.collection_name}")

    all_chunks = []
    for fpath in files:
        rel_path = os.path.relpath(fpath, DEFAULT_KB_PATH).replace("\\", "/")
        raw_text = extract_text(fpath)
        chunks = split_markdown_into_chunks(raw_text, rel_path=rel_path)
        all_chunks.extend(chunks)
        print(f"  - {rel_path:<58} -> {len(chunks):>3} chunks")

    print(f"\nTotal chunks siap di-embed ke ChromaDB: {len(all_chunks)} chunks")
    indexed = vs.index_chunks(all_chunks, batch_size=32)
    print(f"Berhasil disimpan di ChromaDB         : {indexed} chunks (Total di DB: {vs.count()})")

    print("\n" + "=" * 65)
    print("4. UJI PENCARIAN SEMANTIK (SEMANTIC SEARCH)")
    print("=" * 65)
    test_query = "bagaimana cara menghitung tabungan yang bunganya berbunga setiap tahun"
    print(f"Query Uji: '{test_query}'")
    hits = vs.search(test_query, k=3)
    for idx, h in enumerate(hits, start=1):
        meta = h.get("metadata", {})
        print(
            f"\n[Hasil #{idx}] Sumber: {meta.get('source')} | "
            f"Kelas: {meta.get('kelas')} | Kemiripan: {h.get('similarity')}"
        )
        preview = h["text"].replace("\n", " ")[:180]
        print(f"Cuplikan : {preview}...")


if __name__ == "__main__":
    main()
