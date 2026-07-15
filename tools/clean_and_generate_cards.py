import json, re, html

IN = 'assets/filtered_projects.json'
OUT = 'tools/clean_generated_cards.html'

MONTHS = r'Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec|January|February|March|April|June|July|August|September|October|November|December'


def normalize_whitespace(s):
    return ' '.join(s.split())


def extract_fields(raw):
    raw = normalize_whitespace(raw or '')
    short = ''
    long = ''
    date = ''

    # Try explicit markers first
    sd = re.search(r'Short Description[:]?\s*', raw, re.I)
    ld = re.search(r'Long Description[:]?\s*', raw, re.I)

    if sd and ld:
        short = raw[sd.end():ld.start()].strip()
        long = raw[ld.end():].strip()
    elif sd:
        # take until end or until 'Long Description' absent
        short = raw[sd.end():].strip()
        # Look for standalone long description that might have been split
        for ld_key in ['Long Description', 'longer description', 'full description']:
            if ld_key in short:
                parts = short.split(ld_key, 1)
                if len(parts) > 1:
                    short = parts[0].strip()
                    long = parts[1].strip()
                    break
    elif ld:
        long = raw[ld.end():].strip()
        # make a short preview from the first meaningful sentence
        sentences = re.split(r'(?<=[.!?])\s+', long)
        for sent in sentences:
            if len(sent.strip()) > 20:  # Avoid very short sentences
                short = sent.strip()
                break
        if not short:
            short = sentences[0].strip() if sentences else (long[:220].strip())
    else:
        # look for 'Date Completed' then try to split
        m = re.search(r'Date Completed[:]?\s*([^\n\r]*)', raw, re.I)
        if m:
            date = m.group(1).strip()
            # remove date fragment from raw
            raw2 = raw.replace(m.group(0), '')
            raw2 = raw2.strip()
            
            # Look for any meaningful text after Date Completed
            text_after = raw2.strip()
            if text_after:
                # Try to split into sentences for better short/long division
                sentences = re.split(r'(?<=[.!?])\s+', text_after)
                if len(sentences) > 1:
                    short = sentences[0].strip()
                    long = ' '.join(sentences[1:]).strip()
                else:
                    short = text_after
        else:
            # Look for date patterns in the raw text
            date_patterns = [
                r'(January|February|March|April|May|June|July|August|September|October|November|December)\s+\d{4}',
                r'(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)[.,]?\s+\d{1,2}[,]?\s+\d{4}',
                r'\d{4}[-/]\d{1,2}[-/]\d{1,2}'
            ]
            for pattern in date_patterns:
                m = re.search(pattern, raw)
                if m:
                    date = m.group(0).strip()
                    break
            
            # Use the rest for short/long descriptions
            desc_text = raw
            if date:
                desc_text = raw.replace(date, '').strip()
            
            sentences = re.split(r'(?<=[.!?])\s+', desc_text)
            if sentences:
                if len(sentences) > 1:
                    short = sentences[0].strip()
                    long = ' '.join(sentences[1:]).strip()
                else:
                    short = desc_text

    # sanitize and clean up
    short = short.strip()
    long = long.strip()
    date = date.strip() if date else ''

    # Improve short description if needed
    if not short and long:
        # Try to find a meaningful first sentence
        sentences = re.split(r'(?<=[.!?])\s+', long)
        for sent in sentences:
            if len(sent.strip()) > 20:  # Skip very short sentences
                short = sent.strip()
                break
        if not short:
            short = sentences[0].strip() if sentences else long[:220].strip()

    # Handle specific project date patterns
    if (not date) and ('Beginner Python' in raw or 'January - May 2022' in raw):
        date = 'January - May 2022'
    elif (not date) and ('System Performance' in raw):
        date = 'January 2024'

    # Clean up placeholders
    if date.lower() == 'date completed':
        date = '—'

    return short, long, date


def make_card(idx, title, short, long, date):
    t = html.escape(title)
    s = html.escape(short or '(No short description available)')
    l = html.escape(long or '(No long description available)')
    d = html.escape(date or '—')

    # Skip if both descriptions are empty
    if not short and not long:
        return ''

    # Use specific images for special projects
    img = 'assets/project1.jpg'
    if 'Beginner Python' in title or 'January - May 2022' in title:
        img = 'assets/Beginner-Python/python-code.jpg'
    elif 'Performance' in title:
        img = 'assets/system-performance.jpg'

    # For split entries with continued descriptions, try to merge them
    if any(x in title.lower() for x in ['continued', 'part 2', 'continued)', '(cont']):
        return ''

    # Clean up title if it's just a continuation
    if title.strip().endswith(('buttons.', 'surface.', 'pieces.')):
        return ''
        
    return f'''            <article class="project-card" data-project="gen-{idx}" tabindex="0">
                <div class="project-media">
                    <img src="{img}" alt="{t} screenshot" />
                    <div class="card-overlay">
                        <span class="overlay-title">{t}</span>
                        <span class="overlay-date">{d}</span>
                    </div>
                </div>
                <div class="project-info">
                    <h3>{t}</h3>
                    <p>{s}</p>
                    <div class="project-extended-desc" style="display:none;">
                        <p>{l}</p>
                        <p><strong>Date Completed:</strong> {d}<br><strong>Project Role:</strong> (placeholder)<br><strong>Difficulty Level:</strong> (placeholder)<br><strong>Collaborators:</strong> (placeholder)</p>
                        <p><strong>Skills Utilized:</strong> (placeholder)</p>
                        <p><em>Source: filtered_projects.json — please update placeholders if needed.</em></p>
                    </div>
                </div>
            </article>\n\n'''


def main():
    with open(IN, 'r', encoding='utf-8') as f:
        data = json.load(f)

    # assume filtered list is oldest->newest; we want newest-first
    data_rev = list(reversed(data))

    blocks = []
    for i, entry in enumerate(data_rev):
        title = entry.get('title', '').strip() or '(untitled)'
        raw_desc = entry.get('description', '')
        short, long, date = extract_fields(raw_desc)
        blocks.append(make_card(i, title, short, long, date))

    with open(OUT, 'w', encoding='utf-8') as f:
        f.write('\n'.join(blocks))

    print(f'Wrote {len(blocks)} cards to {OUT}')

if __name__ == '__main__':
    main()
