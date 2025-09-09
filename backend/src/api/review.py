# Simple rule-based contract reviewer

KEY_TERMS = {
    "Confidentiality": "Check if details are too vague.",
    "Termination": "Check if notice period is missing.",
    "Payment": "Check payment terms clarity.",
    "Liability": "Check liability limits.",
}

def analyze_contract(text: str):
    results = []
    for term, warning in KEY_TERMS.items():
        if term.lower() in text.lower():
            results.append({"term": term, "warning": warning})
    return results
