from fastapi import FastAPI, UploadFile, File
from .review import analyze_contract_ai
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# 👇 ye add karo
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # ya phir ["http://localhost:5173"]
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/analyze/")
async def analyze_contract(file: UploadFile = File(...)):
    content = await file.read()
    text = content.decode("utf-8", errors="ignore")
    print("📂 Uploaded file content:", text[:200])
    results = analyze_contract_ai(text)
    print("🤖 AI Results:", results)
    return {"results": results}

