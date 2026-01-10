import streamlit as st, time
from utils.db import init_db, insert_story
from utils.llm import curate_memory
from utils.map import fake_geocode
from pathlib import Path

st.set_page_config(layout="wide")
init_db()

with open("assets/css/style.css") as f:
    st.markdown(f"<style>{f.read()}</style>", unsafe_allow_html=True)

st.markdown("""
<section class="hero">
<h1>Offer a Memory</h1>
<div class="gold-underline"></div>
</section>
""", unsafe_allow_html=True)

with st.container():
    st.markdown('<div class="memory-form">', unsafe_allow_html=True)
    memory = st.text_area("Memory")
    location = st.text_input("Location")
    submit = st.button("Curate with AI")
    st.markdown('</div>', unsafe_allow_html=True)

if submit and memory:
    s = st.empty()
    s.markdown('<div class="shimmer">Curating your memory…</div>', unsafe_allow_html=True)
    time.sleep(1.2)

    title, body = curate_memory(memory, location)
    lat, lon = fake_geocode()
    insert_story(title, body, location, lat, lon)

    s.empty()
    st.markdown(f"""
    <div class="story-card">
    <h3>{title}</h3>
    <p>{body}</p>
    </div>
    """, unsafe_allow_html=True)