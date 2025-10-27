from pdfminer.high_level import extract_text
import json
from pathlib import Path

pdf_path = Path('assets/All-Projects-PDF/E-Porfolio.pdf')
out_path = Path('assets/all_projects_extracted.json')

if not pdf_path.exists():
    print('PDF not found:', pdf_path)
    raise SystemExit(1)

text = extract_text(str(pdf_path))
# Basic cleaning
lines = [l.strip() for l in text.splitlines() if l.strip()]

# Heuristic: find short lines that look like titles (<= 60 chars, at least 2 words, not starting with "www" or "http")
candidates = []
for i, line in enumerate(lines):
    if 3 <= len(line.split()) <= 8 and len(line) <= 60 and not line.lower().startswith(('http', 'www', 'page')):
        # Avoid lines that are clearly page numbers or years
        if not line.replace('.', '').isdigit() and not any(ch.isdigit() for ch in line[:3]):
            # Grab following paragraph (up to next short heading or blank)
            desc_parts = []
            for j in range(i+1, min(i+6, len(lines))):
                nxt = lines[j]
                # stop if next looks like a title
                if 3 <= len(nxt.split()) <= 8 and len(nxt) <= 60:
                    break
                desc_parts.append(nxt)
            desc = ' '.join(desc_parts).strip()
            candidates.append({'title': line, 'description': desc})

# Deduplicate by title (keep first)
seen = set()
projects = []
for c in candidates:
    t = c['title']
    if t.lower() in seen:
        continue
    seen.add(t.lower())
    # If description empty, use placeholder
    if not c['description']:
        c['description'] = 'Description not available in extracted text — placeholder (please update).'
    projects.append(c)

# Fallback: if nothing found, try to chunk by double newlines
if not projects:
    paras = text.split('\n\n')
    for p in paras:
        p = p.strip()
        if not p: continue
        # take first line as title and rest as description
        first_line = p.splitlines()[0].strip()
        rest = ' '.join(p.splitlines()[1:]).strip()
        if len(first_line.split()) <= 8 and len(first_line) <= 80:
            projects.append({'title': first_line, 'description': rest or 'Description placeholder'})

# Always include a PDF link entry for the full PDF
projects.insert(0, {'title': 'E-Portfolio (All Projects PDF)', 'description': 'Download the full portfolio PDF.', 'pdf':'assets/All-Projects-PDF/E-Porfolio.pdf'})

with out_path.open('w', encoding='utf-8') as f:
    json.dump(projects, f, ensure_ascii=False, indent=2)

print('Wrote', len(projects), 'projects to', out_path)
