#!/usr/bin/env python3
"""Serveur statique avec fallback SPA (toutes les routes → index.html)."""
from __future__ import annotations

import argparse
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path

ROOT = Path(__file__).resolve().parent
STATIC_PREFIXES = ("/assets/", "/__grok/")
STATIC_FILES = {
    "/favicon.svg",
    "/og.jpg",
    "/x-banner.jpg",
    "/index.html",
}


class SpaHandler(SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=str(ROOT), **kwargs)

    def do_GET(self):  # noqa: N802
        path = self.path.split("?", 1)[0]
        candidate = ROOT / path.lstrip("/")
        if (
            path in STATIC_FILES
            or any(path.startswith(p) for p in STATIC_PREFIXES)
            or candidate.is_file()
        ):
            return SimpleHTTPRequestHandler.do_GET(self)
        self.path = "/index.html"
        return SimpleHTTPRequestHandler.do_GET(self)

    def log_message(self, fmt, *args):
        print("%s - %s" % (self.address_string(), fmt % args))


def main() -> None:
    p = argparse.ArgumentParser(description="Serve OCHE en local (SPA).")
    p.add_argument("--host", default="127.0.0.1")
    p.add_argument("--port", type=int, default=8080)
    args = p.parse_args()
    httpd = ThreadingHTTPServer((args.host, args.port), SpaHandler)
    print(f"OCHE → http://{args.host}:{args.port}/  (Ctrl+C pour arrêter)")
    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        print("\nArrêt.")


if __name__ == "__main__":
    main()
