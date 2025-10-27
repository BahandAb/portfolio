import json
from pathlib import Path

in_path = Path('assets/final_projects.json')
out_path = Path('tools/generated_project_cards.html')

data = json.loads(in_path.read_text(encoding='utf-8'))

img_cycle = ['assets/project1.jpg','assets/project2.jpg','assets/project1.jpg']

entries = []
for i, item in enumerate(data):
    title = item['title']
    desc = item['description']
    # skip entries that are clearly dates-only or tiny
    if len(title) < 4:
        continue
    if title.lower().startswith(('january','february','march','april','may','june','july','august','september','october','november','december')) and len(title.split())<=4:
        # include some date-based project titles only if they have longer descriptions
        if len(desc) < 30:
            continue
    img = img_cycle[i % len(img_cycle)]
    short_desc = (desc[:220] + '...') if len(desc) > 220 else desc
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
                    <p>{short_desc}</p>
                    <div class="project-extended-desc" style="display:none;">
                        <p>{desc}</p>
                        <p><em>Source: extracted from E-Portfolio PDF — please update dates/collaborators as needed.</em></p>
                    </div>
                </div>
            </article>
'''
    entries.append(article)

out_path.write_text('\n'.join(entries), encoding='utf-8')
print('Wrote', len(entries), 'html cards to', out_path)
