"""
Unit & Integration Tests untuk Modul Data Science MathAI (Tahap 3 & Tahap 4)
Mencakup:
  1. EDA & Data Profiling (Class Imbalance, Outlier Detection, LaTeX/CoT Ratios)
  2. Data Quality & Statistical Validation (Pydantic v2 + Assertions)
  3. Feature Engineering & Mathematical Notation Normalization
  4. Stratified Train/Val/Test Split, 5-Fold CV & Zero Data Leakage Verification
  5. Comprehensive Evaluation (Recall@K, MRR, NDCG@K, Final Answer, CoT, LaTeX, Guardrail) & Error Analysis Taxonomy
"""

import os
import sys
import unittest

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
if BASE_DIR not in sys.path:
    sys.path.insert(0, BASE_DIR)

import rag_store  # noqa: E402
from data_science import (  # noqa: E402
    CurriculumChunkSchema,
    analyze_knowledge_base_eda,
    analyze_math_problem_hint,
    build_golden_dataset,
    classify_math_error,
    enrich_chunk_with_ds_features,
    evaluate_math_response,
    extract_math_features,
    normalize_math_notation,
    run_error_analysis_suite,
    stratified_kfold_cv,
    stratified_train_val_test_split,
    validate_chunks_statistical,
    verify_zero_data_leakage,
)


class TestDataScienceDeliverables(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.raw_chunks = rag_store.build_curriculum_chunks()
        cls.enriched_chunks = [enrich_chunk_with_ds_features(c) for c in cls.raw_chunks]

    def test_1_eda_profiling_and_imbalance_detection(self):
        eda = analyze_knowledge_base_eda(self.enriched_chunks)
        self.assertGreater(eda["total_chunks"], 2000)
        self.assertTrue(set(eda["distributions"]["by_grade"].keys()).issuperset({"10", "11", "12", "Tambahan"}))
        self.assertGreaterEqual(eda["distributions"]["total_unique_babs"], 27)
        self.assertGreater(eda["latex_and_reasoning_ratios"]["latex_chunk_coverage_ratio"], 0.5)
        self.assertTrue(eda["class_imbalance_analysis"]["is_imbalanced_warning"])
        self.assertGreater(eda["class_imbalance_analysis"]["chapter_imbalance_ratio_max_min"], 10.0)

    def test_2_statistical_and_pydantic_validation(self):
        report = validate_chunks_statistical(self.enriched_chunks)
        self.assertTrue(report["passed"], f"Validasi statistik gagal: {report}")
        self.assertEqual(report["schema_error_count"], 0)
        self.assertEqual(report["duplicate_id_count"], 0)

        # Pastikan chunk dengan delimiter LaTeX tidak seimbang ditolak oleh Pydantic
        with self.assertRaises(Exception):
            CurriculumChunkSchema.model_validate(
                {
                    "id": "bad_1",
                    "text": "Rumus rusak $$x^2 + 1 = 0 tanpa penutup",
                    "metadata": {
                        "kelas": "10",
                        "bab": "Aljabar",
                        "heading_path": "Aljabar",
                        "mapel": "Matematika Umum",
                        "tingkat_lanjut": False,
                        "source_file": "test.md",
                        "chunk_index": 0,
                        "char_count": 40,
                    },
                }
            )

    def test_3_feature_engineering_and_notation_normalization(self):
        sample = (
            "## Contoh Soal Kalkulus\n"
            "Langkah 1: Hitung integral $\\dfrac{x^2}{2}$ dan $$\\int_0^1 \\sqrt{\\frac{x+1}{x+2}} dx = 5$$\n"
            "Jadi hasilnya $x \\leqslant 10$."
        )
        norm = normalize_math_notation(sample)
        self.assertIn(r"\frac{x^2}{2}", norm)
        self.assertIn(r"\le 10", norm)

        feats = extract_math_features(sample, {"kelas": "12", "bab": "Integral", "tingkat_lanjut": True})
        self.assertEqual(feats["sub_topic_category"], "Kalkulus (Limit, Turunan, Integral)")
        self.assertEqual(feats["display_math_count"], 1)
        self.assertEqual(feats["inline_math_count"], 2)
        self.assertIn("int", feats["extracted_operators"])
        self.assertIn("sqrt", feats["extracted_operators"])
        self.assertIn("frac", feats["extracted_operators"])
        self.assertGreaterEqual(feats["expression_depth"], 2)
        self.assertTrue(feats["has_worked_example"])
        self.assertGreaterEqual(feats["complexity_score"], 4.0)

    def test_4_stratified_splitting_and_zero_data_leakage(self):
        golden = build_golden_dataset()
        self.assertEqual(golden["total_items"], 60)
        self.assertEqual(golden["curriculum_queries_count"], 50)
        self.assertEqual(golden["trap_queries_count"], 10)

        splits = stratified_train_val_test_split(golden["queries"])
        self.assertEqual(
            splits["counts"]["train"] + splits["counts"]["val"] + splits["counts"]["test"],
            60,
        )
        leakage = verify_zero_data_leakage(splits)
        self.assertTrue(leakage["leakage_free"], f"Terdeteksi data leakage: {leakage}")

        cv = stratified_kfold_cv(golden["queries"], k=5)
        self.assertEqual(len(cv), 5)
        for fold in cv:
            train_ids = {q["id"] for q in fold["train"]}
            val_ids = {q["id"] for q in fold["val"]}
            self.assertEqual(len(train_ids & val_ids), 0, f"Leakage pada fold {fold['fold']}")

    def test_5_evaluation_and_error_analysis_taxonomy(self):
        q_item = {
            "id": "G04",
            "question": "Rumus suku ke-n barisan aritmetika jika a=4, b=3 untuk U_10",
            "expected_bab": ["Barisan dan Deret"],
            "expected_kelas": "10",
            "reference_formula": r"U_n = a + (n-1)b",
            "ground_truth_answer": "31",
            "is_trap": False,
        }

        # 1. Jawaban sempurna -> NONE
        good_resp = (
            "**Identifikasi Materi:** Barisan dan Deret - Kelas 10\n"
            "**Diketahui & Ditanyakan:** Diketahui $a=4, b=3$, ditanyakan $U_{10}$.\n"
            "**Konsep / Rumus Dasar:** $$U_n = a + (n-1)b$$\n"
            "**Langkah Penyelesaian:** Langkah 1: $U_{10} = 4 + (10-1)3 = 4 + 27 = 31$.\n"
            "**Kesimpulan / Jawaban Akhir:** Jadi nilai $U_{10}$ adalah **31**."
        )
        ev_good = evaluate_math_response(good_resp, q_item, retrieved_context="Barisan dan Deret")
        self.assertEqual(ev_good["error_category"], "NONE")
        self.assertEqual(ev_good["overall_score"], 1.0)

        # 2. Salah hitung aritmatika -> ARITHMETIC_CALCULATION_ERROR
        arith_err_resp = good_resp.replace("31", "29")
        ev_arith = evaluate_math_response(arith_err_resp, q_item, retrieved_context="Barisan dan Deret")
        self.assertEqual(ev_arith["error_category"], "ARITHMETIC_CALCULATION_ERROR")

        # 3. Salah rumus -> FORMULA_CONCEPT_ERROR
        formula_err_resp = (
            "**Identifikasi Materi:** Barisan\n"
            "**Diketahui & Ditanyakan:** a=4, b=3, ditanya U_10.\n"
            "**Konsep / Rumus Dasar:** $$L = \\pi r^2$$\n"
            "**Langkah Penyelesaian:** Langkah 1: $L = 99$.\n"
            "**Kesimpulan / Jawaban Akhir:** 99"
        )
        ev_formula = evaluate_math_response(formula_err_resp, q_item, retrieved_context="Barisan dan Deret")
        self.assertEqual(ev_formula["error_category"], "FORMULA_CONCEPT_ERROR")

        # 4. LaTeX rusak -> LATEX_FORMATTING_ERROR
        latex_err_resp = good_resp.replace("$$U_n = a + (n-1)b$$", "$$U_n = \\frac{a{b}$$")
        ev_latex = evaluate_math_response(latex_err_resp, q_item, retrieved_context="Barisan dan Deret")
        self.assertEqual(ev_latex["error_category"], "LATEX_FORMATTING_ERROR")

        # 5. Trap query ditolak dengan benar -> NONE (guardrail_passed=True)
        trap_item = {"id": "T01", "question": "Buatkan kode Python!", "is_trap": True}
        rej_resp = (
            "Maaf, saya adalah Asisten AI yang dikhususkan secara mutlak untuk materi Matematika tingkat SMA. "
            "Saya tidak dapat memproses permintaan di luar topik Matematika SMA."
        )
        ev_trap_ok = evaluate_math_response(rej_resp, trap_item)
        self.assertTrue(ev_trap_ok["guardrail_passed"])
        self.assertEqual(ev_trap_ok["error_category"], "NONE")

        # 6. Trap query dijawab (bocor) -> GUARDRAIL_BREACH
        ev_trap_fail = evaluate_math_response("Berikut kode Python: import numpy", trap_item)
        self.assertFalse(ev_trap_fail["guardrail_passed"])
        self.assertEqual(ev_trap_fail["error_category"], "GUARDRAIL_BREACH")

        suite = run_error_analysis_suite([ev_good, ev_arith, ev_formula, ev_latex, ev_trap_ok, ev_trap_fail])
        self.assertEqual(suite["total_evaluated"], 6)
        self.assertIn("ARITHMETIC_CALCULATION_ERROR", suite["error_taxonomy_distribution"])
        self.assertIn("FORMULA_CONCEPT_ERROR", suite["error_taxonomy_distribution"])
        self.assertIn("LATEX_FORMATTING_ERROR", suite["error_taxonomy_distribution"])
        self.assertIn("GUARDRAIL_BREACH", suite["error_taxonomy_distribution"])

    def test_6_deterministic_math_hint_and_attachment_sanitization(self):
        # 1. Barisan aritmetika eksplisit (Suku ke-48 dari 3, 10, 17, 24, 31)
        h1 = analyze_math_problem_hint("Suku ke-48 dari barisan bilangan 3, 10, 17, 24, 31, ... adalah")
        self.assertIn("barisan aritmetika", h1["query_expansion"])
        self.assertIn("332", h1["verification_hint"])

        # 2. Dua suku diketahui (U4 = 17 dan U9 = 39 -> Tentukan U41)
        h2 = analyze_math_problem_hint("Diketahui barisan aritmetika U4 = 17 dan U9 = 39. Tentukan U41")
        self.assertIn("b =", h2["verification_hint"])

        # 3. Rekonstruksi notasi akar PDF "( 7 5)( 7 5) + −"
        h3 = analyze_math_problem_hint("Bentuk yang paling sederhana dari ( 7 5)( 7 5) + − adalah")
        self.assertIn("= 2", h3["verification_hint"])

        # 4. Matriks 2x2 determinan
        h4 = analyze_math_problem_hint("Soal matriks ordo 2x2: A = [[1, 2], [3, 4]]")
        self.assertIn("-2", h4["verification_hint"])

        # 5. Statistika data tunggal (rata-rata, median, modus)
        h5 = analyze_math_problem_hint("Tentukan rata-rata, median, dan modus dari data: 4, 6, 8, 6, 10, 8, 6")
        self.assertIn("Statistika", h5["query_expansion"])
        self.assertIn("48", h5["verification_hint"])
        self.assertIn("Median): $6$", h5["verification_hint"])
        self.assertIn("Modus: $6$", h5["verification_hint"])


if __name__ == "__main__":
    unittest.main(verbosity=2)
