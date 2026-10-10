# Datlas

**The open roadmap to Data Science.**

Datlas is a server-rendered Django learning platform with 38 connected chapters, 676 guided topics, curated video lessons, and 23 practical projects. It records watched lessons in the browser and completes a chapter only after every lesson video has been opened. It also includes instant roadmap and project filtering and global search. Every project card opens its real external dataset or project source on services such as Kaggle, GitHub, UCI, OpenML, and Hugging Face.

## Stack

- Python 3.12
- Django 5
- Django templates, modern CSS, and framework-free JavaScript
- A Python static exporter for GitHub Pages

The application has no Node.js, React, Astro, or frontend build step. Django renders every page during deployment and GitHub Pages serves the exported HTML.

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
