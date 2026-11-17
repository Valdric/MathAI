"""
Unit test untuk verifikasi penanganan attachment dokumen pada RAG dan Chat Service MathAI.
Memastikan:
1. build_system_prompt dan build_sanitized_user_message menginjeksi dokumen yang dilampirkan.
2. Instruksi guardrail tidak menolak pertanyaan saat dokumen berisi soal/materi Matematika SMA.
3. ChatService.send_message meneruskan parameter attachment ke generate_ai_reply.
"""

import os
import sys
import unittest
from unittest.mock import MagicMock, patch

BACKEND_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
if BACKEND_DIR not in sys.path:
    sys.path.insert(0, BACKEND_DIR)

from schemas.chat_schema import MessageCreate
from rag import build_sanitized_user_message, build_system_prompt


class TestDocumentAttachment(unittest.TestCase):
    def test_build_system_prompt_with_document(self):
        doc_text = "BARISAN DAN DERET\nDiketahui U4 = 17 dan U9 = 39. Tentukan U41."
        prompt = build_system_prompt(
            grade="Kelas 10",
            subject="Barisan dan Deret",
            attachment="soal_barisan.pdf",
            doc_text=doc_text,
        )
        self.assertIn("DOKUMEN / MATERI UNGGAHAN SISWA (soal_barisan.pdf)", prompt)
        self.assertIn("BARISAN DAN DERET", prompt)
        self.assertIn("JANGAN tolak pertanyaan siswa yang menanyakan soal pada dokumen ini", prompt)

    def test_build_sanitized_user_message_with_document(self):
        doc_text = "Soal 1: Tentukan nilai lim_{x->0} (sin 2x) / x"
        sanitized = build_sanitized_user_message(
            user_message="kerjakan soal pada file tersebut",
            doc_context=doc_text,
            attachment_name="soal_limit.pdf",
        )
        self.assertIn("=== DOKUMEN / SOAL YANG DIUNGGAH SISWA (soal_limit.pdf) ===", sanitized)
        self.assertIn("Soal 1: Tentukan nilai lim_{x->0} (sin 2x) / x", sanitized)
        self.assertIn("JANGAN menolak pertanyaan siswa selama isi dokumen memuat soal/materi Matematika SMA!", sanitized)
        self.assertIn("kerjakan soal pada file tersebut", sanitized)

    @patch("rag._call_ollama_chat")
    @patch("rag.get_user_document_text")
    def test_generate_answer_resolves_and_includes_attachment(self, mock_get_doc, mock_call_ollama):
        from rag import generate_answer

        mock_get_doc.return_value = "Diketahui suku ke-4 adalah 17 dan suku ke-9 adalah 39."
        mock_call_ollama.return_value = "Suku ke-41 adalah 189."

        ans = generate_answer(
            query="kerjakan soal pada file tersebut",
            user_id=1,
            attachment="soal.pdf",
        )

        self.assertEqual(ans, "Suku ke-41 adalah 189.")
        self.assertTrue(mock_call_ollama.called)
        sent_messages = mock_call_ollama.call_args[0][0]
        user_msg = sent_messages[-1]["content"]
        self.assertIn("=== DOKUMEN / SOAL YANG DIUNGGAH SISWA (soal.pdf) ===", user_msg)
        self.assertIn("Diketahui suku ke-4 adalah 17", user_msg)

    @patch("rag._call_ollama_chat")
    @patch("rag.list_user_documents")
    @patch("rag.get_user_document_text")
    def test_generate_answer_infers_document_when_keyword_present(self, mock_get_doc, mock_list_docs, mock_call_ollama):
        from rag import generate_answer

        mock_list_docs.return_value = [{"filename": "soal_auto.pdf"}]
        mock_get_doc.return_value = "Soal matriks ordo 2x2: A = [[1, 2], [3, 4]]"
        mock_call_ollama.return_value = "Determinan matriks A adalah -2."

        # User tidak menyertakan attachment di payload, tetapi bertanya tentang "file tersebut"
        ans = generate_answer(
            query="kerjakan soal pada file tersebut",
            user_id=1,
            attachment=None,
        )

        self.assertEqual(ans, "Determinan matriks A adalah -2.")
        mock_get_doc.assert_called_with(1, "soal_auto.pdf")
        sent_messages = mock_call_ollama.call_args[0][0]
        user_msg = sent_messages[-1]["content"]
        self.assertIn("soal_auto.pdf", user_msg)
        self.assertIn("Soal matriks ordo 2x2", user_msg)

    def test_rag_grounding_instruction_enforced(self):
        user_msg = build_sanitized_user_message(
            "Diketahui barisan aritmatika 27, 24, 21. Jumlah 20 suku pertama adalah...",
            kb_snippet="Deret Aritmetika",
        )
        self.assertIn("ATURAN GROUNDING RAG MUTLAK", user_msg)
        self.assertIn("REFERENSI MATERI KURIKULUM (RAG)", user_msg)

    @patch("rag._call_ollama_chat")
    @patch("rag.retrieve_relevant_curriculum_context")
    def test_follow_up_query_augments_with_previous_question(self, mock_retrieve, mock_call_ollama):
        from rag import generate_answer

        mock_retrieve.return_value = "Deret Aritmetika: S_n = n/2 (2a + (n-1)b)"
        mock_call_ollama.return_value = "Berikut tahapan penyelesaiannya: ..."

        history = [
            {"role": "user", "content": "Diketahui barisan aritmatika 27, 24, 21. Jumlah 20 suku pertama adalah..."},
            {"role": "assistant", "content": "B. -30"},
        ]

        # Siswa bertanya pertanyaan lanjutan meminta langkah penyelesaian
        ans = generate_answer(
            query="coba buatkan juga beserta tahapan penyelesaiannya",
            history_messages=history,
            user_id=1,
        )

        self.assertIn("Berikut tahapan penyelesaiannya", ans)
        # Pastikan retrieve_relevant_curriculum_context dipanggil dengan query yang menggabungkan konteks sebelumnya
        call_query = mock_retrieve.call_args[1]["query"]
        self.assertIn("barisan aritmatika 27, 24, 21", call_query)
        self.assertIn("coba buatkan juga beserta tahapan penyelesaiannya", call_query)


if __name__ == "__main__":
    unittest.main(verbosity=2)
