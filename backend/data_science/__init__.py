"""
MathAI Data Science Package (Tahap 3 — Full DS Deliverables)
Author / Maintainer: Valdric (Lead Data Scientist)
Repository: https://github.com/Valdric/MathAI

Modul:
  1. eda_profiling.py        : Exploratory Data Analysis (EDA), Class Imbalance, & Outlier Detection
  2. validation.py           : Pydantic v2 Schema & Statistical Distribution Validation
  3. feature_engineering.py  : Mathematical Feature Extraction, Complexity Scoring, & Notation Normalization
  4. stratified_split.py     : Golden Dataset (50 SMA Math + 10 Trap Queries), Stratified Split & Leakage Audit
  5. evaluation_framework.py : Retrieval (Recall@K, MRR, NDCG@K) + MathAI CoT/LaTeX/Answer Evaluation & Error Analysis
"""

from .eda_profiling import analyze_knowledge_base_eda
from .validation import validate_chunks_statistical, CurriculumChunkSchema, GoldenQuerySchema
from .feature_engineering import (
    analyze_math_problem_hint,
    extract_math_features,
    enrich_chunk_with_ds_features,
    normalize_math_notation,
)
from .stratified_split import (
    build_golden_dataset,
    stratified_train_val_test_split,
    stratified_kfold_cv,
    verify_zero_data_leakage,
)
from .evaluation_framework import (
    evaluate_retrieval_comprehensive,
    evaluate_math_response,
    classify_math_error,
    run_error_analysis_suite,
)

__all__ = [
    "analyze_knowledge_base_eda",
    "validate_chunks_statistical",
    "CurriculumChunkSchema",
    "GoldenQuerySchema",
    "extract_math_features",
    "enrich_chunk_with_ds_features",
    "normalize_math_notation",
    "build_golden_dataset",
    "stratified_train_val_test_split",
    "stratified_kfold_cv",
    "verify_zero_data_leakage",
    "evaluate_retrieval_comprehensive",
    "evaluate_math_response",
    "classify_math_error",
    "run_error_analysis_suite",
]
