"""
System Prompt khusus domain MathAI (Asisten AI Matematika SMA — Kurikulum Merdeka & m4th-lab.net).
"""

import os
import sys

BACKEND_DIR = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "backend")
if BACKEND_DIR not in sys.path:
    sys.path.insert(0, BACKEND_DIR)

from rag import (  # noqa: E402, F401
    SANDWICH_DEFENSE_PREFIX,
    SMA_MATH_SYSTEM_PROMPT,
    build_sanitized_user_message,
    build_system_prompt,
)

MATHAI_SYSTEM_PROMPT = SMA_MATH_SYSTEM_PROMPT

__all__ = [
    "MATHAI_SYSTEM_PROMPT",
    "SMA_MATH_SYSTEM_PROMPT",
    "SANDWICH_DEFENSE_PREFIX",
    "build_system_prompt",
    "build_sanitized_user_message",
]
