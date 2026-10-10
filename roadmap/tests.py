from django.test import SimpleTestCase, override_settings
from django.urls import reverse
from django.core.management import call_command
from pathlib import Path
from tempfile import TemporaryDirectory

from .services import curriculum, projects, search, search_catalog, stages


class ContentTests(SimpleTestCase):
    def test_curriculum_is_complete_and_unique(self):
        phases = curriculum()
        topics = [topic for phase in phases for topic in phase["topics"]]
        self.assertEqual(len(phases), 38)
        self.assertEqual(len(topics), 676)
        self.assertEqual(len({topic["id"] for topic in topics}), len(topics))
        self.assertTrue(all(topic["summary"] for topic in topics))

    def test_stages_include_every_chapter_once(self):
        numbers = [phase["number"] for stage in stages() for phase in stage["phases"]]
        self.assertCountEqual(numbers, range(38))

    def test_every_project_has_an_external_source(self):
        self.assertEqual(len(projects()), 23)
        self.assertTrue(all(item["external_url"] == item["datasetUrl"] for item in projects()))
        self.assertTrue(all("github.com/Are1V/Datlas" not in item["external_url"] for item in projects()))
        self.assertTrue(all(item["platform"] != "Original source" for item in projects()))

    def test_search_finds_topics_and_projects(self):
        self.assertTrue(any(item["title"] == "Transformers" for item in search("transformers")))
        self.assertTrue(any(item["kind"] == "Project" for item in search("Titanic")))

    def test_browser_search_catalog_contains_all_content_types(self):
        catalog = search_catalog()
        self.assertEqual(len(catalog), 38 + 676 + 23)
        self.assertTrue(any(item["kind"] == "Chapter" for item in catalog))
        self.assertTrue(any(item["kind"] == "Project" for item in catalog))
        self.assertTrue(any(item["title"] == "Transformers" for item in catalog))


@override_settings(SECURE_SSL_REDIRECT=False)
class PageTests(SimpleTestCase):
    def test_public_pages_render(self):
        for name in ["home", "roadmap", "projects", "about"]:
            response = self.client.get(reverse(f"roadmap:{name}"))
            self.assertEqual(response.status_code, 200)
            self.assertContains(response, "Datlas")

    def test_chapter_renders_video_links(self):
        response = self.client.get(reverse("roadmap:chapter", args=["large-language-models"]))
        self.assertContains(response, "Large language models")
        self.assertContains(response, "data-watch-topic", count=20)
        self.assertContains(response, "https://www.youtube.com/")

    def test_homepage_map_links_to_learning_stages(self):
        response = self.client.get(reverse("roadmap:home"))
        for slug in ["python-foundations", "numpy-pandas", "machine-learning-foundations", "large-language-models"]:
            self.assertContains(response, reverse("roadmap:chapter", args=[slug]))

    def test_roadmap_renders_progress_and_filter_controls(self):
        response = self.client.get(reverse("roadmap:roadmap"))
        self.assertContains(response, "data-phase-card", count=38)
        self.assertContains(response, "data-chapter-id", count=38)
        self.assertContains(response, "data-roadmap-search")
        self.assertContains(response, "data-progress-reset")
        self.assertNotContains(response, "Mark done")

    def test_chapter_completion_is_driven_by_watched_videos(self):
        response = self.client.get(reverse("roadmap:chapter", args=["python-foundations"]))
        self.assertContains(response, "data-watch-topic", count=33)
        self.assertContains(response, "data-topic-id", count=33)
        self.assertContains(response, "data-chapter-progress")
        self.assertNotContains(response, "Mark chapter complete")

    def test_projects_render_filter_control(self):
        response = self.client.get(reverse("roadmap:projects"))
        self.assertContains(response, "data-project-search")
        self.assertContains(response, "data-project-card", count=23)

    def test_search_page_embeds_catalog_for_static_hosting(self):
        response = self.client.get(reverse("roadmap:search"))
        self.assertContains(response, 'id="datlas-search-catalog"')
        self.assertContains(response, "Transformers")
        self.assertContains(response, "Titanic survival analysis")

    def test_project_cards_link_to_external_sources(self):
        response = self.client.get(reverse("roadmap:projects"))
        self.assertContains(response, 'class="project-card"', count=23)
        self.assertContains(response, "https://www.kaggle.com/competitions/titanic")
        self.assertContains(response, "https://archive.ics.uci.edu/dataset/352/online+retail")
        self.assertContains(response, "https://github.com/allisonhorst/palmerpenguins")

    def test_unknown_chapter_returns_404(self):
        self.assertEqual(self.client.get("/learn/not-a-chapter/").status_code, 404)


class StaticExportTests(SimpleTestCase):
    def test_export_builds_github_pages_with_repository_prefix(self):
        with TemporaryDirectory() as directory:
            call_command("export_static", output=directory, base_path="/Datlas/", verbosity=0)
            root = Path(directory)
            homepage = (root / "index.html").read_text(encoding="utf-8")
            self.assertIn('href="/Datlas/roadmap/"', homepage)
            self.assertTrue((root / "roadmap" / "index.html").exists())
            self.assertTrue((root / "learn" / "large-language-models" / "index.html").exists())
            self.assertTrue((root / "static" / "roadmap" / "site.css").exists())
            self.assertTrue((root / "static" / "roadmap" / "site.js").exists())
            self.assertTrue((root / "404.html").exists())
            search_page = (root / "search" / "index.html").read_text(encoding="utf-8")
            self.assertIn('id="datlas-search-catalog"', search_page)
            self.assertIn("Titanic survival analysis", search_page)
