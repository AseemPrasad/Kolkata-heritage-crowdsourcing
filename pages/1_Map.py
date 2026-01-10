import streamlit as st
from utils.db import fetch_all
from streamlit_folium import st_folium
import folium

st.set_page_config(layout="wide")

with open("assets/css/style.css") as f:
    st.markdown(f"<style>{f.read()}</style>", unsafe_allow_html=True)

stories = fetch_all()

m = folium.Map(location=[22.57, 88.36], zoom_start=12, tiles="cartodbpositron")

for s in stories:
    folium.CircleMarker(
        location=[s[4], s[5]],
        radius=8,
        color="#dda744",
        fill=True,
        popup=f"<b>{s[1]}</b><br>{s[3]}"
    ).add_to(m)

st_folium(m, height=600)