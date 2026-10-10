import shutil
from pathlib import Path

from django.conf import settings
from django.core.management.base import BaseCommand
from django.test import Client, override_settings
from django.urls import set_script_prefix

from roadmap.services import curriculum


class Command(BaseCommand):
    help = "Export the Django site as static HTML for GitHub Pages."

    def add_arguments(self, parser):
        parser.add_argument("--output", default="site", help="Export directory")
        parser.add_argument("--base-path", default="/", help="Public URL prefix")

    def handle(self, *args, **options):
        output = Path(options["output"]).resolve()
        base_path = "/" + options["base_path"].strip("/")
        if base_path != "/":
            base_path += "/"

        if output.exists():
            shutil.rmtree(output)
        output.mkdir(parents=True)

        static_url = f"{base_path}static/"
        script_name = "" if base_path == "/" else base_path.rstrip("/")
        routes = ["/", "/roadmap/", "/projects/", "/about/", "/search/"]
        routes.extend(f"/learn/{phase['id']}/" for phase in curriculum())

        with override_settings(
            DEBUG=True,
            ALLOWED_HOSTS=["testserver"],
            STATIC_URL=static_url,
            FORCE_SCRIPT_NAME=script_name,
            SECURE_SSL_REDIRECT=False,
        ):
            set_script_prefix(base_path)
            client = Client()
            for route in routes:
                response = client.get(route)
                if response.status_code != 200:
                    raise RuntimeError(f"Could not export {route}: HTTP {response.status_code}")
                destination = output / route.strip("/") / "index.html" if route != "/" else output / "index.html"
                destination.parent.mkdir(parents=True, exist_ok=True)
                destination.write_bytes(response.content)
            not_found = client.get("/page-not-found/")
            if not_found.status_code != 404:
                raise RuntimeError("Could not render the custom 404 page")
            (output / "404.html").write_bytes(not_found.content)
            set_script_prefix("/")

        static_source = settings.BASE_DIR / "roadmap" / "static"
        shutil.copytree(static_source, output / "static", dirs_exist_ok=True)
        (output / ".nojekyll").write_text("", encoding="utf-8")

        self.stdout.write(self.style.SUCCESS(f"Exported {len(routes)} pages to {output}"))
