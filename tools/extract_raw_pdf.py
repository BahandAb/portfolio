#!/usr/bin/env python3
"""
Simple PDF -> raw JSON dumper.

Writes two files into the project's assets folder:
 - raw_pdf_pages.json : list of {page: int, text: str}
 - raw_pdf_text.json  : { text: str }

This script uses PyPDF2. If PyPDF2 is not available, it prints a helpful message.
"""
import json
import sys
from pathlib import Path

PDF_PATH = Path("assets/All-Projects-PDF/E-Porfolio.pdf")
OUT_PAGES = Path("assets/raw_pdf_pages.json")
OUT_FULL = Path("assets/raw_pdf_text.json")


def main():
    try:
        import PyPDF2
    except Exception as e:
        print("ERROR: PyPDF2 is not installed. Install it with: pip install PyPDF2")
        print("Detailed error:", e)
        sys.exit(2)

    if not PDF_PATH.exists():
        print(f"ERROR: PDF not found at {PDF_PATH.resolve()}")
        sys.exit(1)

    reader = PyPDF2.PdfReader(str(PDF_PATH))
    pages = []
    all_text_parts = []
    for i, page in enumerate(reader.pages, start=1):
        try:
            text = page.extract_text() or ""
        except Exception:
            # Some pages may fail to extract; preserve empty string but continue
            text = ""
        pages.append({"page": i, "text": text})
        all_text_parts.append(f"\n\n--- PAGE {i} ---\n\n")
        all_text_parts.append(text)

    # Write per-page JSON
    OUT_PAGES.parent.mkdir(parents=True, exist_ok=True)
    with OUT_PAGES.open("w", encoding="utf-8") as f:
        json.dump(pages, f, ensure_ascii=False, indent=2)

    # Write full concatenated text JSON
    with OUT_FULL.open("w", encoding="utf-8") as f:
        json.dump({"text": "".join(all_text_parts)}, f, ensure_ascii=False, indent=2)

    print(f"Wrote {len(pages)} pages to {OUT_PAGES}")
    print(f"Wrote full text to {OUT_FULL}")


if __name__ == "__main__":
    main()
