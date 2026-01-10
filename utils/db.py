import sqlite3
from pathlib import Path

DB = Path("db/stories.db")

def connect():
    DB.parent.mkdir(exist_ok=True)
    return sqlite3.connect(DB)

def init_db():
    conn = connect()
    cur = conn.cursor()
    # Base table creation
    cur.execute("""
    CREATE TABLE IF NOT EXISTS stories (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT NOT NULL,
        body TEXT NOT NULL,
        location TEXT,
        lat REAL,
        lon REAL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
    """)
    conn.commit()

    # --- Safe migrations ---
    existing_cols = [r[1] for r in cur.execute("PRAGMA table_info(stories)").fetchall()]

    if "author" not in existing_cols:
        try:
            cur.execute("ALTER TABLE stories ADD COLUMN author TEXT")
        except sqlite3.OperationalError:
            pass

    if "image_url" not in existing_cols:
        try:
            cur.execute("ALTER TABLE stories ADD COLUMN image_url TEXT")
        except sqlite3.OperationalError:
            pass

    if "raw_text" not in existing_cols:
        try:
            cur.execute("ALTER TABLE stories ADD COLUMN raw_text TEXT")
        except sqlite3.OperationalError:
            pass

    conn.commit()
    conn.close()

def insert_story(title, body, location, lat, lon, author=None, image_url=None, raw_text=None):
    init_db()
    conn = connect()
    cur = conn.cursor()
    cur.execute("""
    INSERT INTO stories (title, body, location, lat, lon, author, image_url, raw_text)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    """, (title, body, location, lat, lon, author, image_url, raw_text))
    conn.commit()
    conn.close()

def fetch_all():
    init_db()
    conn = connect()
    cur = conn.cursor()
    cur.execute("""
    SELECT id, title, body, location, lat, lon, author, image_url, raw_text
    FROM stories
    ORDER BY created_at DESC
    """)
    rows = cur.fetchall()
    conn.close()
    return rows