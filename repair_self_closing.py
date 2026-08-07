#!/usr/bin/env python3
"""
repair_self_closing.py — seo_fix.py se broken hue <img>/<Image> tags fix karta hai
(missing self-closing '/' wapas add karta hai). Safe: sirf slash missing ho tabhi add karega.

Usage:
    python repair_self_closing.py --project-dir .
"""

import argparse
import os
import re
from pathlib import Path

CODE_EXTS = {".jsx", ".tsx", ".js", ".ts", ".html"}
SKIP_DIRS = {"node_modules", ".next", ".git", "dist", "build", ".vercel"}

IMG_RE = re.compile(r"<img\b([^>]*?)>", re.IGNORECASE | re.DOTALL)
IMAGE_RE = re.compile(r"<Image\b([^>]*?)>", re.DOTALL)


def walk_files(root: Path, exts: set):
    for dirpath, dirnames, filenames in os.walk(root):
        dirnames[:] = [d for d in dirnames if d not in SKIP_DIRS and not d.startswith(".")]
        for fname in filenames:
            if Path(fname).suffix.lower() in exts:
                yield Path(dirpath) / fname


def fix_tag(tag_name: str, attrs: str) -> str:
    stripped = attrs.rstrip()
    if stripped.endswith("/"):
        return f"<{tag_name}{attrs}>"  # already self-closed, leave as-is
    return f"<{tag_name}{attrs} />"


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--project-dir", default=".")
    args = parser.parse_args()

    project_dir = Path(args.project_dir).resolve()
    changed = 0

    for path in walk_files(project_dir, CODE_EXTS):
        try:
            text = path.read_text(encoding="utf-8")
        except Exception:
            continue
        original = text

        text = IMG_RE.sub(lambda m: fix_tag("img", m.group(1)), text)
        text = IMAGE_RE.sub(lambda m: fix_tag("Image", m.group(1)), text)

        if text != original:
            path.write_text(text, encoding="utf-8")
            changed += 1
            print(f"[fixed] {path}")

    print(f"\nTotal files repaired: {changed}")
    print("Ab `npm run build` (ya next build) chalake confirm kar lein sab theek hai.")


if __name__ == "__main__":
    main()
