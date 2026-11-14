"""
MathAI FastAPI Application Entry Point
Author / Maintainer: Valdric
Repository: https://github.com/Valdric/MathAI
"""

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import os
import sys

# Tambahkan path root backend agar import module bekerja
sys.path.insert(0, os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

from api.routers import auth_router, user_router, chat_router, document_router
from core.database import engine, Base

# Buat tabel database secara otomatis jika belum ada
Base.metadata.create_all(bind=engine)

app = FastAPI(title="MathAI API - Asisten AI Matematika SMA", version="2.0")

# Konfigurasi CORS agar frontend (React) dapat mengakses API ini
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Registrasi semua routers
app.include_router(auth_router.router)
app.include_router(user_router.router)
app.include_router(chat_router.router)
app.include_router(document_router.router)

@app.get("/")
def home():
    return "Backend MathAI berjalan!"
