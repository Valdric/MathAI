from pydantic import BaseModel, Field
from typing import Optional
from datetime import datetime

class ChatCreate(BaseModel):
    title: Optional[str] = "Obrolan Baru"
    subject: Optional[str] = None
    grade: Optional[str] = None

class ChatUpdate(BaseModel):
    title: Optional[str] = None
    subject: Optional[str] = None
    grade: Optional[str] = None

class ChatSessionResponse(BaseModel):
    id: str
    title: str
    subject: Optional[str]
    grade: Optional[str]
    created_at: datetime
    updated_at: datetime

    class Config:
        from_attributes = True

class MessageCreate(BaseModel):
    question: str = Field(..., min_length=1, max_length=4000)
    grade: Optional[str] = None
    subject: Optional[str] = None
    attachment: Optional[str] = Field(None, max_length=255)

class MessageResponse(BaseModel):
    id: int
    sender: str
    text: str
    timestamp: datetime

    class Config:
        from_attributes = True

class AskResponse(BaseModel):
    answer: str
    user_message_id: int
    ai_message_id: int
