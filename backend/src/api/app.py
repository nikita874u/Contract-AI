from fastapi import FastAPI, UploadFile, File
from src.ingest.pdf_parser import extract_text
from src.ml.risk_analyzer import analyze_risk

app = FastAPI()

@app.get("/")
def root():
    return {"message": "Contract AI running 🚀"}

@app.post("/upload")
async def upload_file(file: UploadFile = File(...)):
    file_path = f"data_{file.filename}"
    with open(file_path, "wb") as f:
        f.write(await file.read())

    text = extract_text(file_path)
    risks = analyze_risk(text)

    return {"filename": file.filename, "risks": risks}