import os
from dotenv import load_dotenv
from pydantic import field_validator
from pydantic_settings import BaseSettings

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
load_dotenv(os.path.join(BASE_DIR, ".env"))
load_dotenv()


class Settings(BaseSettings):
    DATABASE_URL: str = "sqlite:///./smartai.db"
    JWT_SECRET: str = os.getenv("JWT_SECRET", "supersecretkey")
    ALGORITHM: str = "HS256"
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 1440  # 24 hours
    OLLAMA_BASE_URL: str = os.getenv("OLLAMA_BASE_URL", "http://127.0.0.1:11434")
    OLLAMA_MODEL: str = os.getenv("OLLAMA_MODEL", "llama3.2-math")

    @field_validator("DATABASE_URL", mode="after")
    @classmethod
    def resolve_sqlite_path(cls, v: str) -> str:
        if v.startswith("sqlite:///./"):
            rel_path = v[len("sqlite:///./"):]
            abs_path = os.path.join(BASE_DIR, rel_path).replace(os.sep, "/")
            return f"sqlite:///{abs_path}"
        return v

    class Config:
        env_file = ".env"
        extra = "ignore"


settings = Settings()
