"""
End-to-End (E2E) Test Suite:
Menguji alur penuh dari Autentikasi -> Sinkronisasi Topik UI -> Pembuatan ChatSession (grade & subject)
-> Pertanyaan Siswa (/api/chats/{id}/ask) -> ChromaDB Retrieval -> Penyimpanan Pesan -> Validasi Format LaTeX/KaTeX.
"""

import os
import sys
import unittest
from fastapi.testclient import TestClient

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
if BASE_DIR not in sys.path:
    sys.path.insert(0, BASE_DIR)

from api.index import app


class TestEndToEndFlow(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.client = TestClient(app)

    def test_full_e2e_login_curriculum_rag_chat_and_katex_format(self):
        # 1. Login dengan akun default siswa@mathai.com
        login_res = self.client.post(
            "/login",
            json={"email": "siswa@mathai.com", "password": "123456"},
        )
        self.assertEqual(login_res.status_code, 200, login_res.text)
        token = login_res.json()["token"]
        headers = {"Authorization": f"Bearer {token}"}

        # 2. Sinkronisasi topik kurikulum untuk WelcomeForm.tsx
        topics_res = self.client.get("/api/knowledge/topics", headers=headers)
        self.assertEqual(topics_res.status_code, 200)
        topics = topics_res.json()["topics"]
        self.assertIn("10", topics)
        self.assertIn("11", topics)
        self.assertIn("12", topics)

        # 3. Buat sesi obrolan baru & set kurikulum (Kelas 10 - Barisan dan Deret)
        create_res = self.client.post(
            "/api/chats/",
            headers=headers,
            json={"title": "Obrolan Baru"},
        )
        self.assertEqual(create_res.status_code, 201)
        chat_id = create_res.json()["id"]

        update_res = self.client.put(
            f"/api/chats/{chat_id}",
            headers=headers,
            json={
                "title": "Barisan dan Deret - Kelas 10",
                "grade": "Kelas 10",
                "subject": "Barisan dan Deret",
            },
        )
        self.assertEqual(update_res.status_code, 200)

        # 4. Kirim pertanyaan siswa ke endpoint /api/chats/{chat_id}/ask
        ask_res = self.client.post(
            f"/api/chats/{chat_id}/ask",
            headers=headers,
            json={
                "question": "Jelaskan Masalah 5.1 tentang Susunan Kelereng beserta rumus suku ke-n nya!",
                "grade": "Kelas 10",
                "subject": "Barisan dan Deret",
            },
        )
        self.assertEqual(ask_res.status_code, 200, ask_res.text)
        ask_data = ask_res.json()
        answer = ask_data["answer"]

        # 5. Verifikasi jawaban grounded dari ChromaDB & mengandung notasi LaTeX untuk KaTeX
        self.assertTrue(len(answer) > 30)
        self.assertTrue(
            any(k in answer.lower() for k in ("kelereng", "persegi", "25", "225", "k_")),
            f"Jawaban tidak mencerminkan referensi RAG Susunan Kelereng: {answer}",
        )
        # Pastikan terdapat delimiter LaTeX ($...$ atau $$...$$) yang siap dirender oleh KaTeX di ChatBubble.tsx
        self.assertIn("$", answer)

        # 6. Verifikasi riwayat pesan tersimpan di database dan dapat diambil oleh Frontend React
        msgs_res = self.client.get(f"/api/chats/{chat_id}/messages", headers=headers)
        self.assertEqual(msgs_res.status_code, 200)
        msgs = msgs_res.json()
        self.assertEqual(len(msgs), 2)
        self.assertEqual(msgs[0]["sender"], "user")
        self.assertEqual(msgs[1]["sender"], "ai")

        # 7. Bersihkan chat uji
        del_res = self.client.delete(f"/api/chats/{chat_id}", headers=headers)
        self.assertEqual(del_res.status_code, 200)


if __name__ == "__main__":
    unittest.main(verbosity=2)
