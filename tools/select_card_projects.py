import json
from pathlib import Path

in_path = Path('assets/filtered_projects.json')
out_path = Path('assets/final_projects.json')

data = json.loads(in_path.read_text(encoding='utf-8'))

selected = []
seen = set()
for item in data:
    title = item['title'].strip()
    desc = item['description'].strip()
    if len(title) < 6 or len(title) > 80:
        continue
    if title.lower() == title:  # likely fragment or sentence
        continue
    if any(ch in title for ch in '<>"/{}#'):  # skip code/html
        continue
    if title.lower() in seen:
        continue
    seen.add(title.lower())
    # avoid duplicating Beginner Python by skipping 'Beginner Python' or its date line
    if 'Beginner' in title or 'Python' in title and len(title.split())<4:
        continue
    selected.append({'title':title, 'description':desc, 'pdf': item.get('pdf','')})

out_path.write_text(json.dumps(selected, ensure_ascii=False, indent=2), encoding='utf-8')
print('Selected', len(selected), 'projects')
