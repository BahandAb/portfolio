"""
Generate compressed, resized thumbnail copies of the project photos referenced
in projects-data.js so the project grid / gallery strips don't have to ship
multi-megabyte camera originals just to render a ~170px-tall preview tile.

Source images live under assets/E-Portfolio/<Project>/<file>.
Thumbnails are written to assets/E-Portfolio-thumbs/<Project>/<file>.jpg
(always re-encoded as JPEG, EXIF orientation baked in, longest side capped).

Usage:
    pip install Pillow
    python3 tools/generate_thumbnails.py

Re-run any time new project photos are added; it only (re)writes thumbnails
that are missing or older than their source image.
"""
import json
import subprocess
import sys
from pathlib import Path

from PIL import Image

ROOT = Path(__file__).resolve().parent.parent
SRC_DIR = ROOT / "assets" / "E-Portfolio"
THUMB_DIR = ROOT / "assets" / "E-Portfolio-thumbs"
MAX_DIM = 640
JPEG_QUALITY = 72


def extract_image_paths():
    """Pull the unique local image paths out of projects-data.js via Node."""
    script = """
    const fs = require('fs');
    let src = fs.readFileSync('projects-data.js', 'utf8');
    src += '\\nmodule.exports = projects;';
    const Module = require('module');
    const m = new Module('projects-data');
    m._compile(src, 'projects-data.js');
    const projects = m.exports;
    const set = new Set();
    for (const p of projects) {
      for (const img of (p.images || [])) {
        if (/^https?:\\/\\//i.test(img) || img.startsWith('data:')) continue;
        set.add(img);
      }
    }
    process.stdout.write(JSON.stringify([...set]));
    """
    out = subprocess.run(["node", "-e", script], cwd=ROOT, capture_output=True, text=True, check=True)
    return json.loads(out.stdout)


def make_thumbnail(src_path: Path, dst_path: Path):
    dst_path.parent.mkdir(parents=True, exist_ok=True)
    with Image.open(src_path) as im:
        im = Image.open(src_path)
        try:
            from PIL import ImageOps
            im = ImageOps.exif_transpose(im)
        except Exception:
            pass
        im = im.convert("RGB")
        im.thumbnail((MAX_DIM, MAX_DIM), Image.LANCZOS)
        im.save(dst_path, "JPEG", quality=JPEG_QUALITY, optimize=True, progressive=True)


def main():
    rel_paths = extract_image_paths()
    made, skipped, missing = 0, 0, 0

    for rel in rel_paths:
        src_path = SRC_DIR / rel
        dst_path = (THUMB_DIR / rel).with_suffix(".jpg")

        if not src_path.exists():
            print(f"MISSING source: {rel}", file=sys.stderr)
            missing += 1
            continue

        if dst_path.exists() and dst_path.stat().st_mtime >= src_path.stat().st_mtime:
            skipped += 1
            continue

        try:
            make_thumbnail(src_path, dst_path)
            made += 1
        except Exception as exc:
            print(f"FAILED {rel}: {exc}", file=sys.stderr)

    print(f"Generated {made} thumbnails, skipped {skipped} up-to-date, {missing} sources missing.")


if __name__ == "__main__":
    main()
