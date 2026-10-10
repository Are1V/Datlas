# Datlas

**The open roadmap to Data Science.**

Datlas maps a path from Python fundamentals to machine learning, deep learning, computer vision, and LLM systems. Choose from 38 chapters, work through 676 focused topics, and practice with 23 projects built around real datasets.

Your progress stays in your browser. Chapters finish only after you have opened every lesson, search works across the full curriculum, and each project links directly to its original source on Kaggle, GitHub, UCI, OpenML, or Hugging Face.

## Stack

- Python 3.12
- Django 5
- Django templates, CSS, and plain JavaScript
- A small Python exporter for GitHub Pages

Django renders the pages during deployment, then GitHub Pages serves the exported HTML. No frontend build step is needed.

## Local development

```sh
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
python manage.py runserver
```

Open `http://127.0.0.1:8000`.

Run the checks with:

```sh
python manage.py check
python manage.py test
python manage.py export_static --output site --base-path /Datlas/
```

## Content

| File | Purpose |
| --- | --- |
| `src/data/curriculum.json` | Chapters and stable topic IDs |
| `src/data/topic-lessons.json` | Explanations, prerequisites, videos, and practice |
| `src/data/videos.json` | Curated video metadata and source URLs |
| `src/content/projects/projects.json` | Project briefs and external sources |
| `roadmap/services.py` | Content loading, stages, project platforms, and search |

## GitHub Pages

Pushes to `main` run Django checks, render all routes into static HTML, and deploy the result through GitHub Actions. The public site is available at `https://are1v.github.io/Datlas/`.

## License

Datlas code and original content are released under the MIT License. Linked videos, datasets, and resources remain the property of their creators.
