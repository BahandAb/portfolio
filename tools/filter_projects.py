import json
from pathlib import Path

in_path = Path('assets/all_projects_extracted.json')
out_path = Path('assets/filtered_projects.json')

if not in_path.exists():
    print('Input not found', in_path)
    raise SystemExit(1)

data = json.loads(in_path.read_text(encoding='utf-8'))

markers = ['Short Description', 'Date Completed', 'Long Description', 'Short Description', 'Date Completed:']

seen = set()
projects = []
for item in data:
    title = item.get('title','').strip()
    desc = item.get('description','').strip()
    # ignore obvious noise
    if not title or '<' in title or title.lower().startswith(('int ', '#include', 'return', 'void ', 'pinmode', 'if (')):
        continue
    if any(m in desc for m in markers) or ('Short Description' in desc) or ('Date Completed' in desc) or ('Long Description' in desc):
        key = title.lower()
        if key in seen:
            continue
        seen.add(key)
        projects.append({'title':title, 'description':desc, 'pdf': item.get('pdf','')})

# Always ensure the E-Portfolio PDF is first
for i,p in enumerate(projects):
    if p['title'] == 'E-Portfolio (All Projects PDF)':
        projects.insert(0, projects.pop(i))
        break

out_path.write_text(json.dumps(projects, ensure_ascii=False, indent=2), encoding='utf-8')
print('Wrote', len(projects), 'filtered projects to', out_path)
