def analyze_contract(text: str):
    risky_terms = {
        "termination": "Clause may allow sudden termination",
        "penalty": "Contains penalty clause",
        "confidentiality": "Confidentiality obligations present",
        "liability": "Check liability terms carefully",
        "indemnity": "Indemnity clause detected"
    }

    findings = []
    lower_text = text.lower()

    for word, warning in risky_terms.items():
        if word in lower_text:
            findings.append({"term": word, "warning": warning})

    if not findings:
        findings.append({"term": "None", "warning": "No risky clauses found"})

    return findings