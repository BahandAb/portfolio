#!/usr/bin/env python3
"""
Parse the raw PDF full text (assets/raw_pdf_text.json) using explicit headers
and generate a structured JSON plus an HTML snippet of project cards.

Outputs:
 - assets/structured_projects.json
 - tools/generated_structured_cards.html

This is heuristic but uses explicit header tokens like
  'Date Completed', 'Short Description', 'Long Description', 'Skills Utilized',
  'Project Role', 'Difficulty Level', 'Collaborators'

Run: python tools/parse_and_generate.py
"""
import json
import re
from pathlib import Path

RAW_FULL = Path("assets/raw_pdf_text.json")
OUT_JSON = Path("assets/structured_projects.json")
OUT_HTML = Path("tools/generated_structured_cards.html")

MARKERS = {
    # use looser single-word markers because PDF extraction inserts newlines/spaces unpredictably
    'date': re.compile(r'date', re.I),
    'short': re.compile(r'short', re.I),
    'long': re.compile(r'long', re.I),
    'skills': re.compile(r'skills', re.I),
    'role': re.compile(r'project\s*role|role', re.I),
    'difficulty': re.compile(r'difficulty', re.I),
    'collab': re.compile(r'collaborators?|collaborator', re.I),
}


def normalize_whitespace(s: str) -> str:
    return re.sub(r'\s+', ' ', s).strip()


def find_marker_pos(text: str, marker_re: re.Pattern, start: int=0):
    m = marker_re.search(text, start)
    return m.start() if m else -1


def extract_between(text: str, a_re: re.Pattern, b_re: re.Pattern, start_from=0):
    """Return text between first a_re after start_from and first b_re after that (or up to 1000 chars)."""
    a = a_re.search(text, start_from)
    if not a:
        return None, -1, -1
    a_end = a.end()
    b = None
    # search for b after a_end
    b = b_re.search(text, a_end)
    end = b.start() if b else min(len(text), a_end + 2000)
    return text[a_end:end].strip(), a_end, end


def parse_projects(full_text: str):
    projects = []

    # find all 'Short Description' occurrences and treat each as a project anchor
    short_matches = list(re.finditer(MARKERS['short'], full_text))

    for idx, sm in enumerate(short_matches):
        # find surrounding markers
        short_start = sm.start()

        # find date before this short
        date_m = None
        for dm in re.finditer(MARKERS['date'], full_text[:short_start]):
            date_m = dm
        date_text = ''
        if date_m:
            # capture small window after date marker for actual date value
            after = full_text[date_m.end(): date_m.end()+120]
            date_text = normalize_whitespace(after.split('\n')[0])
        else:
            # fallback: look back for a year-like token
            m = re.search(r'\b(20\d{2})\b', full_text[:short_start][-40:])
            date_text = m.group(1) if m else ''

        # title: find nearest block of text before the date marker (or before short)
        title_candidate = ''
        title_search_end = date_m.start() if date_m else short_start
        # look back up to 200 chars for a non-marker text block
        head = full_text[max(0, title_search_end-300):title_search_end]
        # heuristics: split by page divider or double newline and take last non-empty piece
        parts = re.split(r'--- PAGE \d+ ---|\n\s*\n', head)
        if parts:
            cand = parts[-1]
            cand = normalize_whitespace(cand)
            # clean common template words
            cand = re.sub(r'Project\s*Documentation\s*Template', '', cand, flags=re.I)
            cand = re.sub(r'Project\s*Title', '', cand, flags=re.I)
            title_candidate = cand.strip()[:120]

        # Short: extract between Short Description and Long Description
        short_text, s_a, s_b = extract_between(full_text, MARKERS['short'], MARKERS['long'], start_from=short_start)
        if short_text is None:
            # fallback: grab 200 chars after short marker
            short_text = normalize_whitespace(full_text[short_start: short_start+300])

        # Long: extract between Long Description and next marker like Skills/Project Role/Short (next)
        # find end marker for long
        next_marker_re = re.compile(r'skills\s*utilized|project\s*role|difficulty\s*level|collaborators?|short\s*description', re.I)
        long_text, l_a, l_b = extract_between(full_text, MARKERS['long'], next_marker_re, start_from=s_b if s_b>0 else short_start)
        if long_text is None:
            long_text = ''

        # skills
        skills_text, sk_a, sk_b = extract_between(full_text, MARKERS['skills'], MARKERS['role'], start_from=l_b if l_b>0 else s_b)
        if skills_text is None:
            # try to extract up to 'Project Role' or 'Difficulty'
            skills_text = ''

        # role
        role_text = ''
        rt = re.search(MARKERS['role'], full_text[l_b if l_b>0 else s_b:])
        if rt:
            # extract small window
            startpos = (l_b if l_b>0 else s_b) + rt.end()
            role_text = normalize_whitespace(full_text[startpos:startpos+120].split('\n')[0])

        # difficulty
        diff_text = ''
        dt = re.search(MARKERS['difficulty'], full_text[l_b if l_b>0 else s_b:])
        if dt:
            startpos = (l_b if l_b>0 else s_b) + dt.end()
            diff_text = normalize_whitespace(full_text[startpos:startpos+120].split('\n')[0])

        # collaborators
        coll_text = ''
        cm = re.search(MARKERS['collab'], full_text[l_b if l_b>0 else s_b:])
        if cm:
            startpos = (l_b if l_b>0 else s_b) + cm.end()
            coll_text = normalize_whitespace(full_text[startpos:startpos+240].split('\n')[0])

        title_val = normalize_whitespace(title_candidate)
        if not title_val:
            title_val = f'Untitled Project #{idx+1}'
        project = {
            'title': title_val,
            'date_completed': normalize_whitespace(date_text),
            'short_description': normalize_whitespace(short_text),
            'long_description': normalize_whitespace(long_text),
            'skills': normalize_whitespace(skills_text),
            'role': normalize_whitespace(role_text),
            'difficulty': normalize_whitespace(diff_text),
            'collaborators': normalize_whitespace(coll_text),
            'image': 'assets/placeholder.png'
        }

        projects.append(project)

    # dedupe by title (keep first)
    seen = set()
    uniq = []
    for p in projects:
        t = p['title']
        if t in seen:
            continue
        seen.add(t)
        uniq.append(p)

    return uniq


def generate_html(projects):
    parts = []
    for p in projects:
        title = p.get('title','Untitled')
        date = p.get('date_completed','')
        short = p.get('short_description','')
        long = p.get('long_description','')
        skills = p.get('skills','')
        role = p.get('role','')
        difficulty = p.get('difficulty','')
        collab = p.get('collaborators','')
        img = p.get('image','assets/placeholder.png')

        article = f'''<article class="project-card">
  <div class="project-media">
    <img src="{img}" alt="{title}">
    <div class="card-overlay">
      <div class="overlay-title">{title}</div>
      <div class="overlay-date">{date}</div>
    </div>
  </div>
  <div class="project-info">
    <h3>{title}</h3>
    <p>{short}</p>
  </div>
  <div class="project-extended-desc" style="display:none;">
    <p>{long}</p>
    <p><strong>Skills:</strong> {skills}</p>
    <p><strong>Role:</strong> {role} | <strong>Difficulty:</strong> {difficulty} | <strong>Collaborators:</strong> {collab}</p>
  </div>
</article>'''
        parts.append(article)
    return '\n'.join(parts)


def main():
    if not RAW_FULL.exists():
        print(f"Missing {RAW_FULL}; run tools/extract_raw_pdf.py first.")
        return

    data = json.loads(RAW_FULL.read_text(encoding='utf-8'))
    full = data.get('text','')

    projects = parse_projects(full)

    # newest-first: reverse the list
    projects = list(reversed(projects))

    OUT_JSON.parent.mkdir(parents=True, exist_ok=True)
    OUT_JSON.write_text(json.dumps(projects, ensure_ascii=False, indent=2), encoding='utf-8')

    html = generate_html(projects)
    OUT_HTML.write_text(html, encoding='utf-8')

    print(f"Parsed {len(projects)} projects to {OUT_JSON}")
    print(f"Wrote HTML snippet to {OUT_HTML}")


if __name__ == '__main__':
    main()
