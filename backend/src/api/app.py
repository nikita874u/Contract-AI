from fastapi import FastAPI, UploadFile, File
from src.api.review import analyze_contract

app = FastAPI()

@app.post("/review")
async def review_contract(file: UploadFile = File(...)):
    text = await file.read()
    text = text.decode("utf-8", errors="ignore")  # assuming .txt for simplicity
    results = analyze_contract(text)
    return {"results": results}
