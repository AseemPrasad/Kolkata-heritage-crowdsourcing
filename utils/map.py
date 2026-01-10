import random

def fake_geocode():
    # Kolkata bounding box
    lat = random.uniform(22.50, 22.62)
    lon = random.uniform(88.30, 88.42)
    return lat, lon