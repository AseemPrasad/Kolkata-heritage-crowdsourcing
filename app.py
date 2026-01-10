import streamlit as st
from pathlib import Path
from utils.db import init_db, insert_story, fetch_all
from utils.llm import curate_memory
from utils.map import fake_geocode
from streamlit_folium import st_folium
import folium
import time
import base64

st.set_page_config(page_title="Kolkata Katha", page_icon="📍", layout="wide")

# Inject CSS
css_path = Path("assets/css/style.css")
st.markdown(f"<style>{css_path.read_text()}</style>", unsafe_allow_html=True)

# Header
st.markdown("""
<section class="hero">
  <h1>Kolkata Katha <span>AI</span><br>Where Memories Become Heritage</h1>
  <div class="gold-underline"></div>
  <p class="decorative-bn">adda • para • mishti • barir pujo</p>
  <p>A living archive of para, adda, trams, and time.</p>
</section>
""", unsafe_allow_html=True)

init_db()

tabs = st.tabs(["📍 Map", "📸 Submit memory", "📚 Stories"])

# --- MAP TAB ---
with tabs[0]:
    st.markdown('<div class="section"><div class="ui-label">Explore the city</div></div>', unsafe_allow_html=True)
    stories = fetch_all()

    m = folium.Map(location=[22.57, 88.36], zoom_start=12, tiles="cartodbpositron")
    for s in stories:
        _, title, body, location, lat, lon, author, image_url, raw_text = s
        popup_html = f"""
        <b>{title}</b><br>
        <i>{location or ''}</i><br>
        <small>by {author or 'Anonymous'}</small><br>
        <div style='max-width:240px'>{body[:160]}...</div>
        """
        folium.CircleMarker(
            location=[lat or 22.57, lon or 88.36],
            radius=8,
            color="#dda744",
            fill=True,
            popup=popup_html
        ).add_to(m)

    st_folium(m, height=600)

# --- SUBMIT TAB ---
with tabs[1]:
    st.markdown('<div class="section"><div class="ui-label">Add your memory</div></div>', unsafe_allow_html=True)
    st.markdown('<div class="memory-form">', unsafe_allow_html=True)

    col1, col2 = st.columns([1, 1])
    with col1:
        memory = st.text_area("Your memory", height=180, placeholder="Write your adda, para, mishti moments…")
        location = st.text_input("Spot (e.g., College Street, Kumartuli, Kalighat)")
        image = st.file_uploader("Upload a photo (optional)", type=["jpg", "jpeg", "png"])
        author = st.text_input("Your name (optional)", placeholder="Anonymous")

        curate = st.button("✨ Curate with AI")
    with col2:
        st.markdown("""
        <div class="story-card">
          <div class="ui-label">Curated preview</div>
          <div id="curated-preview">Your curated story will appear here.</div>
        </div>
        """, unsafe_allow_html=True)

    st.markdown('</div>', unsafe_allow_html=True)

    if curate and memory:
        s = st.empty()
        s.markdown('<div class="shimmer">Curating your memory…</div>', unsafe_allow_html=True)
        time.sleep(1.0)
        title, body = curate_memory(memory, location)
        s.empty()

        st.session_state["curated_title"] = title
        st.session_state["curated_body"] = body

        st.markdown(f"""
        <div class="story-card">
          <h3>{title}</h3>
          <p>{body}</p>
        </div>
        """, unsafe_allow_html=True)

    save = st.button("Save to archive", type="primary")
    if save:
        if not memory:
            st.error("Please write your memory before saving.")
        else:
            title = st.session_state.get("curated_title") or (location or "Untitled memory")
            body = st.session_state.get("curated_body") or memory
            lat, lon = fake_geocode()

            img_data_url = None
            if image:
                b64 = base64.b64encode(image.read()).decode("utf-8")
                img_data_url = f"data:image/jpeg;base64,{b64}"

            insert_story(
                title, body, location, lat, lon,
                author=author or "Anonymous",
                image_url=img_data_url,
                raw_text=memory
            )
            st.success("Saved—your story now lives in Kolkata Katha.")

# --- STORIES TAB ---
with tabs[2]:
    st.markdown('<div class="section"><div class="ui-label">Community stories</div></div>', unsafe_allow_html=True)
    rows = fetch_all()
    if not rows:
        st.caption("No stories yet—be the first to contribute.")
    else:
        for s in rows:
            _, title, body, location, lat, lon, author, image_url, raw_text = s
            img_html = f"<img src='{image_url}' class='rounded' width='220'>" if image_url else ""
            st.markdown(f"""
            <div class="story-card">
              <h3>{title}</h3>
              <div style="display:flex; gap:16px;">
                {img_html}
                <div>
                  <div class="ui-label">Location</div>
                  <p>{location or "Unknown"}</p>
                  <div class="ui-label">Curated</div>
                  <p>{body}</p>
                  <div class="ui-label">Contributor</div>
                  <p>{author or "Anonymous"}</p>
                  <details>
                    <summary class="ui-label">View raw memory</summary>
                    <p>{raw_text or ""}</p>
                  </details>
                </div>
              </div>
            </div>
            """, unsafe_allow_html=True)