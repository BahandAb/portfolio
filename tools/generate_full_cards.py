import json
from pathlib import Path

in_path = Path('assets/filtered_projects.json')
out_path = Path('tools/full_generated_cards.html')

if not in_path.exists():
    print('filtered_projects.json not found')
    raise SystemExit(1)

data = json.loads(in_path.read_text(encoding='utf-8'))

# data assumed oldest->newest per PDF; we want newest first in the page
data_rev = list(reversed(data))

cards = []
img_cycle = ['assets/project1.jpg','assets/project2.jpg','assets/project1.jpg']

for i, item in enumerate(data_rev):
    title = item.get('title','').strip()
    desc = item.get('description','').strip()
    pdf = item.get('pdf','')
    # parse short and long descriptions heuristically
    short = ''
    long = ''
    # Try to find 'Short Description' and 'Long Description' markers
    if 'Short Description' in desc:
        # split after 'Short Description'
        parts = desc.split('Short Description',1)[1].strip()
        # if there's 'Long Description' inside parts, split
        if 'Long Description' in parts:
            short = parts.split('Long Description',1)[0].strip()
            long = parts.split('Long Description',1)[1].strip()
        else:
            short = parts.strip()
            long = ''
    elif 'Date Completed' in desc and 'Short Description' in desc:
        # less likely, catch generally
        try:
            short = desc.split('Short Description',1)[1].strip()
        except:
            short = ''
    elif 'Long Description' in desc:
        # Use first sentence as short, full as long
        long = desc.split('Long Description',1)[1].strip()
        # pick first 120 chars as short
        short = (long.split('.',1)[0]+'.') if '.' in long else (long[:120]+'...')
    else:
        # fallback: use the whole desc as both
        short = desc if desc else 'Short description placeholder (please update)'
        long = ''

    # metadata placeholders - try to extract some fields if present in desc
    date_completed = ''
    role = ''
    difficulty = ''
    collaborators = ''
    skills = ''

    # naive extraction from desc by keywords
    low = desc.lower()
    if 'date completed' in low:
        # pull substring starting at Date Completed
        idx = low.find('date completed')
        date_completed = desc[idx:idx+200]
    if 'project role' in low:
        idx = low.find('project role')
        role = desc[idx:idx+200]
    if 'difficulty level' in low or 'difficulty' in low:
        idx = low.find('difficulty')
        difficulty = desc[idx:idx+200]
    if 'collaborators' in low:
        idx = low.find('collaborators')
        collaborators = desc[idx:idx+200]
    if 'skills utilized' in low or 'skills' in low:
        idx = low.find('skills')
        skills = desc[idx:idx+200]

    # If short too long, truncate for tile hover
    short_tile = short
    if len(short_tile) > 200:
        short_tile = short_tile[:200].rstrip() + '...'

    img = img_cycle[i % len(img_cycle)]

    # Build metadata badges if skills found
    skills_html = ''
    if skills:
        # try to extract comma-separated list after 'Skills' keyword
        s = skills
        # strip leading label
        for k in ['skills utilized', 'skills']:
            if k in s.lower():
                s = s.split(k,1)[1]
                break
        # split by commas
        parts = [p.strip().strip('.,') for p in s.split(',') if p.strip()]
        badges = []
        for p in parts[:10]:
            if len(p) > 0 and len(p) < 60:
                badges.append(f'<span style="display:inline-block;background:#f5f5dc;color:#333;padding:2px 8px;margin:2px 2px 2px 0;border-radius:6px;font-size:0.95em;">{p}</span>')
        skills_html = ' '.join(badges)

    # Compose extended-desc inner HTML
    extended_parts = []
    if long:
        extended_parts.append(f'<p>{long}</p>')
    else:
        extended_parts.append('<p>Long description placeholder (please update from PDF).</p>')

    # Add metadata block
    meta_html = '<p>'
    meta_html += f'<strong>Date Completed:</strong> {date_completed or "(placeholder)"}<br>'
    meta_html += f'<strong>Project Role:</strong> {role or "(placeholder)"}<br>'
    meta_html += f'<strong>Difficulty Level:</strong> {difficulty or "(placeholder)"}<br>'
    meta_html += f'<strong>Collaborators:</strong> {collaborators or "(placeholder)"}</p>'

    if skills_html:
        meta_html += f'<p><strong>Skills Utilized:</strong><br>{skills_html}</p>'
    else:
        meta_html += '<p><strong>Skills Utilized:</strong> (placeholder)</p>'

    if pdf:
        meta_html += f'<p><a href="{pdf}" target="_blank">Download project PDF</a></p>'

    # Full article
    article = f'''            <article class="project-card" data-project="gen-{i}" tabindex="0">
                <div class="project-media">
                    <img src="{img}" alt="{title} screenshot" />
                    <div class="card-overlay">
                        <span class="overlay-title">{title}</span>
                        <span class="overlay-date">Date: —</span>
                    </div>
                </div>
                <div class="project-info">
                    <h3>{title}</h3>
                    <p>{short_tile}</p>
                    <div class="project-extended-desc" style="display:none;">
                        {''.join(extended_parts)}
                        {meta_html}
                        <p><em>Source: extracted from E-Portfolio PDF — please update placeholders if needed.</em></p>
                    </div>
                </div>
            </article>
'''
    cards.append(article)

out_path.write_text('\n'.join(cards), encoding='utf-8')
print('Wrote', len(cards), 'cards to', out_path)
