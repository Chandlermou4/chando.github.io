"""One-time migration: preserve the original standalone pages as source files."""
from pathlib import Path
import shutil

ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT / "src" / "pages"
SOURCE.mkdir(parents=True, exist_ok=True)
for page in ROOT.glob("*.html"):
    if page.name == "index.html" or "<script>" in page.read_text(encoding="utf-8"):
        shutil.copy2(page, SOURCE / page.name)
print(f"Copied {len(list(SOURCE.glob('*.html')))} source pages to {SOURCE}")
