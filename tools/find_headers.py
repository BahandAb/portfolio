#!/usr/bin/env python3
"""
Scan the per-page raw JSON for likely header keywords and emit a small report.

Writes: assets/header_matches.json
Also prints a short summary to stdout.
"""
import json
from pathlib import Path
import re

PAGES = Path("assets/raw_pdf_pages.json")
OUT = Path("assets/header_matches.json")

KEYWORDS = [
    "Project Title",
    "Date Completed",
    "Short Description",
    "Long Description",
    "Skills Utilized",
    "Project Role",
    "Difficulty Level",
    "Collaborators",
    "Link to Media Folder",
    "Date",
    "Short",
    "Long",
]


def snippet(text, match_span, ctx=40):
    start = max(0, match_span[0]-ctx)
    end = min(len(text), match_span[1]+ctx)
    return text[start:end].replace("\n", " ")


def main():
    if not PAGES.exists():
        print(f"Missing {PAGES}; run the extractor first.")
        return

    pages = json.loads(PAGES.read_text(encoding="utf-8"))

    results = {k: [] for k in KEYWORDS}

    for p in pages:
        text = p.get("text", "")
        lower = text.lower()
        for kw in KEYWORDS:
            lw = kw.lower()
            # find all occurrences
            for m in re.finditer(re.escape(lw), lower):
                snip = snippet(text, m.span())
                results[kw].append({"page": p.get("page"), "snippet": snip})

    # also collect any lines that look like 'Short Description' but with spaces/newlines between words
    # (already matched by lower search above because extractor often inserts spaces)

    OUT.parent.mkdir(parents=True, exist_ok=True)
    OUT.write_text(json.dumps(results, ensure_ascii=False, indent=2), encoding="utf-8")

    # print a short summary
    for k, v in results.items():
        if v:
            print(f"Found {len(v)} occurrences of '{k}'. First page: {v[0]['page']}")
    total = sum(len(v) for v in results.values())
    print(f"Wrote header match report to {OUT} ({total} total occurrences across keywords)")


if __name__ == '__main__':
    main()
