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
from core.database import engine, Base, SessionLocal
from core.security import get_password_hash
from models.user_model import User

# Buat tabel database secara otomatis jika belum ada
Base.metadata.create_all(bind=engine)


def ensure_default_user() -> None:
    """Pastikan akun default siswa@mathai.com (password: 123456) tersedia."""
    db = SessionLocal()
    try:
        default_email = "siswa@mathai.com"
        user = db.query(User).filter(User.email == default_email).first()
        if not user:
            db.add(
                User(
                    email=default_email,
                    name="Siswa MathAI",
                    password_hash=get_password_hash("123456"),
                )
            )
            db.commit()
        elif not user.name:
            user.name = "Siswa MathAI"
            db.commit()
    finally:
        db.close()


ensure_default_user()

app = FastAPI(title="MathAI API - Asisten AI Matematika SMA", version="2.0")

# Konfigurasi CORS agar frontend (React / Vite) dapat mengakses API ini
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://127.0.0.1:5173",
        "http://localhost:3000",
        "http://127.0.0.1:3000",
    ],
    allow_origin_regex=r"https?://(localhost|127\.0\.0\.1)(:\d+)?",
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
