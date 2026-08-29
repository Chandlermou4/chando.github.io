"""Build the deployable pages from the readable sources in src/pages.

The project began as self-contained HTML guides.  This builder keeps the
published result static, while extracting repeated runtime code and embedded
images so a shared change is made once.
"""
from __future__ import annotations

import base64
import hashlib
import re
import shutil
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT / "src" / "pages"
MEDIA = ROOT / "assets" / "media"
STYLES = ROOT / "assets" / "styles"
DATA = ROOT / "data" / "bosses"
URI = re.compile(r"data:image/([A-Za-z0-9.+-]+);base64,([A-Za-z0-9+/=]+)")
STYLE = re.compile(r"<style>(.*?)</style>", re.S)
SCRIPT = re.compile(r"<script>(.*?)</script>", re.S)
CLICK = "addEventListener('click',e=>{if(!document.body.classList.contains('editing'))go(1)});"
FIT_MARKER = "// Mise"


def image_url(match: re.Match[str], relative: str) -> str:
    mime, encoded = match.groups()
    raw = base64.b64decode(encoded)
    extension = {"jpeg": "jpg", "svg+xml": "svg"}.get(mime, mime)
    name = f"{hashlib.sha256(raw).hexdigest()[:20]}.{extension}"
    target = MEDIA / name
    target.parent.mkdir(parents=True, exist_ok=True)
    if not target.exists():
        target.write_bytes(raw)
    return f"{relative}{name}"


def closing_bracket(text: str, opening: int) -> int:
    """Return the closing bracket, respecting strings and escapes."""
    pairs = {"[": "]", "{": "}", "(": ")"}
    stack = [text[opening]]
    quote: str | None = None
    escaped = False
    for index in range(opening + 1, len(text)):
        char = text[index]
        if quote:
            if escaped:
                escaped = False
            elif char == "\\":
                escaped = True
            elif char == quote:
                quote = None
            continue
        if char in "'\"`":
            quote = char
        elif char in pairs:
            stack.append(char)
        elif char in "]})":
            if char != pairs[stack[-1]]:
                raise ValueError("Unbalanced JavaScript data")
            stack.pop()
            if not stack:
                return index
    raise ValueError("Unclosed JavaScript data")


def steps_expression(script: str) -> tuple[str, int, int]:
    start = script.find("const STEPS")
    if start < 0:
        raise ValueError("STEPS not found")
    opening = script.find("[", start)
    end = closing_bracket(script, opening) + 1
    return script[opening:end], start, end


def split_script(script: str) -> tuple[str, str, str]:
    """Return step data, player setup, and the common engine."""
    steps, steps_start, steps_end = steps_expression(script)
    click_at = script.find(CLICK, steps_end)
    fit_at = script.find(FIT_MARKER, click_at)
    if click_at < 0 or fit_at < 0:
        raise ValueError("The common guide runtime markers were not found")
    custom_start = click_at + len(CLICK)
    setup = script[custom_start:fit_at]
    engine = script[:steps_start] + "const STEPS=window.GUIDE_STEPS||[];" + script[steps_end:custom_start]
    engine += "\nwindow.GUIDE_SETUP?.({pc,NS,stage});\n\n" + script[fit_at:]
    return steps, setup, engine


def build_page(source: Path, common_engine: str | None) -> str:
    # archimonde_6 is deliberately a byte-for-byte deployable backup.
    slug = "archimonde" if source.stem == "archimonde_6" else source.stem
    html = source.read_text(encoding="utf-8")
    # SVG diagram markers can also embed icons directly in their href attribute.
    # Convert those before splitting CSS and JavaScript into their own folders.
    html = URI.sub(lambda m: image_url(m, "assets/media/"), html)
    css = STYLE.search(html)
    script = SCRIPT.search(html)
    if not css or not script:
        raise ValueError(f"{source.name}: expected one style and one script block")

    css_text = css.group(1).replace("assets/media/", "../media/")
    (STYLES / f"{slug}.css").parent.mkdir(parents=True, exist_ok=True)
    (STYLES / f"{slug}.css").write_text(css_text, encoding="utf-8")
    html = html[:css.start()] + f'<link rel="stylesheet" href="assets/styles/{slug}.css">' + html[css.end():]

    page_script = script.group(1)
    steps, setup, engine = split_script(page_script)
    # NB: the engine's icon paths stay "assets/media/..." — an SVG <image> href
    # resolves against the document, not against assets/guide.js.
    if common_engine is None:
        common_engine = engine
    elif engine != common_engine:
        raise ValueError(f"{source.name}: runtime differs from the shared guide engine")

    DATA.mkdir(parents=True, exist_ok=True)
    (DATA / f"{slug}.js").write_text(
        "window.GUIDE_STEPS=" + steps + ";\n"
        "window.GUIDE_SETUP=({pc,NS,stage})=>{" + setup + "\n};\n",
        encoding="utf-8",
    )
    html = html[:script.start()] + f'<script src="data/bosses/{slug}.js"></script>\n<script src="assets/guide.js"></script>' + html[script.end():]
    (ROOT / source.name).write_text(html, encoding="utf-8")
    return common_engine


def main() -> None:
    if not SOURCE.exists():
        raise SystemExit("Missing src/pages. Run tools/bootstrap_sources.py once first.")
    for folder in (MEDIA, STYLES, DATA):
        folder.mkdir(parents=True, exist_ok=True)
    engine: str | None = None
    for source in sorted(SOURCE.glob("*.html")):
        if source.name == "index.html":
            shutil.copy2(source, ROOT / "index.html")
            continue
        engine = build_page(source, engine)
    if engine is None:
        raise SystemExit("No guide pages found")
    (ROOT / "assets" / "guide.js").write_text(engine, encoding="utf-8")
    print(f"Built {len(list(SOURCE.glob('*.html')))-1} guides; shared runtime: assets/guide.js")


if __name__ == "__main__":
    main()
