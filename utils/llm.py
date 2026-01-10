import streamlit as st
from groq import Groq

api_key = st.secrets.get("GROQ_API_KEY")
if not api_key:
    raise RuntimeError("Missing GROQ_API_KEY in secrets.toml")

client = Groq(api_key=api_key)

SYSTEM_PROMPT = """
You are an archival storyteller preserving memories of Kolkata.
Write with restraint, warmth, and cultural specificity.
Never mention AI.
"""

def curate_memory(memory, location):
    prompt = f"""
Memory:
{memory}

Location:
{location or "Unknown"}

Create:
1. A poetic title
2. A 120–150 word archival story
"""

    res = client.chat.completions.create(
        model="llama-3.1-8b-instant",
        messages=[
            {"role": "system", "content": SYSTEM_PROMPT},
            {"role": "user", "content": prompt}
        ],
        temperature=0.7,
        max_tokens=350
    )

    text = res.choices[0].message.content.strip()
    lines = [l for l in text.split("\n") if l.strip()]
    return lines[0], "\n\n".join(lines[1:])