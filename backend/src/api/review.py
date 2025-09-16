from transformers import pipeline
import json

# Hugging Face pipeline load karo (lightweight model)
nlp = pipeline("zero-shot-classification", model="facebook/bart-large-mnli")

def analyze_contract_ai(text: str):
    try:
        # Important terms to check in contract
        candidate_labels = [
            "Confidentiality",
            "Termination",
            "Payment",
            "Liability",
            "Governing Law",
            "Penalty",
            "Services"
        ]

        # Zero-shot classification
        result = nlp(text, candidate_labels)

        # Convert results into JSON-like format
        analysis = []
        for label, score in zip(result["labels"], result["scores"]):
            if score > 0.3:  # filter weak matches
                analysis.append({
                    "term": label,
                    "warning": f"Detected with confidence {round(score*100, 2)}%"
                })

        if not analysis:
            analysis = [{"term": "Notice", "warning": "No major terms detected"}]

        return analysis

    except Exception as e:
        return [{"term": "Error", "warning": str(e)}]
