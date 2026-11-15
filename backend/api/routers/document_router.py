import os
from fastapi import APIRouter, Depends, UploadFile, File, HTTPException
from werkzeug.utils import secure_filename
from models.user_model import User
from services.user_service import get_current_user
from rag import process_document

router = APIRouter()

UPLOAD_FOLDER = os.path.join(os.path.dirname(os.path.dirname(os.path.dirname(__file__))), 'uploads')

@router.post("/upload")
def upload_file(
    file: UploadFile = File(...),
    current_user: User = Depends(get_current_user),
):
    if not file.filename:
        raise HTTPException(status_code=400, detail="Nama file kosong")
    
    os.makedirs(UPLOAD_FOLDER, exist_ok=True)
    filename = secure_filename(file.filename)
    if not filename:
        raise HTTPException(status_code=400, detail="Nama file tidak valid")
    filepath = os.path.join(UPLOAD_FOLDER, filename)
    
    try:
        with open(filepath, "wb") as buffer:
            buffer.write(file.file.read())
        
        chunks = process_document(filepath)
        os.remove(filepath)
        return {
            "message": f"File {filename} berhasil diproses ({len(chunks)} potongan teks).",
            "filename": filename,
            "chunks_count": len(chunks),
            "uploaded_by": current_user.id,
        }
    except ValueError as e:
        if os.path.exists(filepath):
            os.remove(filepath)
        raise HTTPException(status_code=400, detail=str(e))
    except Exception as e:
        if os.path.exists(filepath):
            os.remove(filepath)
        raise HTTPException(status_code=500, detail=str(e))
