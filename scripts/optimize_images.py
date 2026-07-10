#!/usr/bin/env python3
"""Optimize public website images and update local image references to WebP.

Usage:
  python scripts/optimize_images.py
  python scripts/optimize_images.py --dry-run
  python scripts/optimize_images.py --delete-originals

SVG, ICO, PDF, and animated images are left untouched. By default this creates
or refreshes .webp files next to supported images, rewrites local references in
src/ from .jpg/.jpeg/.png to .webp when a converted asset exists, and adds an
empty alt attribute to any raw <img> tag that is missing one.
"""

from __future__ import annotations

import argparse
import re
from pathlib import Path

from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
PUBLIC_DIR = ROOT / "public"
SRC_DIR = ROOT / "src"
SUPPORTED_EXTENSIONS = {".jpg", ".jpeg", ".png", ".webp"}
CODE_EXTENSIONS = {".tsx", ".ts", ".jsx", ".js", ".html"}


def is_animated(image: Image.Image) -> bool:
    return bool(getattr(image, "is_animated", False) and getattr(image, "n_frames", 1) > 1)


def convert_image(path: Path, quality: int, dry_run: bool) -> tuple[Path, bool]:
    target = path.with_suffix(".webp")
    temp_target = target.with_name(f"{target.stem}.tmp{target.suffix}")

    with Image.open(path) as image:
        if is_animated(image):
            return target, False

        has_alpha = image.mode in {"RGBA", "LA", "P"} and (
            "transparency" in image.info or image.mode in {"RGBA", "LA"}
        )
        converted = image.convert("RGBA" if has_alpha else "RGB")

        if dry_run:
            return target, True

        target.parent.mkdir(parents=True, exist_ok=True)
        converted.save(temp_target, "WEBP", quality=quality, method=6, optimize=True)

        if target.exists() and temp_target.stat().st_size >= target.stat().st_size:
            temp_target.unlink()
            return target, False

        temp_target.replace(target)

    return target, True


def iter_public_images() -> list[Path]:
    return sorted(
        path
        for path in PUBLIC_DIR.rglob("*")
        if path.is_file() and path.suffix.lower() in SUPPORTED_EXTENSIONS
    )


def public_url(path: Path) -> str:
    return "/" + path.relative_to(PUBLIC_DIR).as_posix()


def add_missing_img_alt(source: str) -> str:
    img_tag = re.compile(r"<img\b(?P<attrs>[^>]*?)(?P<close>/?)>", re.IGNORECASE | re.DOTALL)

    def replace(match: re.Match[str]) -> str:
        tag = match.group(0)
        if re.search(r"\balt\s*=", tag, re.IGNORECASE):
            return tag
        attrs = match.group("attrs").rstrip()
        close = match.group("close")
        spacing = " " if attrs else ""
        return f"<img{attrs}{spacing}alt=\"\"{close}>"

    return img_tag.sub(replace, source)


def update_code_references(mapping: dict[str, str], dry_run: bool) -> int:
    changed_files = 0

    for file_path in sorted(SRC_DIR.rglob("*")):
        if not file_path.is_file() or file_path.suffix.lower() not in CODE_EXTENSIONS:
            continue

        original = file_path.read_text(encoding="utf-8")
        updated = original

        for old_url, new_url in mapping.items():
            updated = updated.replace(old_url, new_url)
            updated = updated.replace(old_url.replace("/", "%2F"), new_url.replace("/", "%2F"))

        updated = add_missing_img_alt(updated)

        if updated != original:
            changed_files += 1
            if not dry_run:
                file_path.write_text(updated, encoding="utf-8", newline="")

    return changed_files


def main() -> int:
    parser = argparse.ArgumentParser(description="Convert and optimize public images to WebP.")
    parser.add_argument("--quality", type=int, default=78, help="WebP quality from 1-100.")
    parser.add_argument("--dry-run", action="store_true", help="Preview without writing files.")
    parser.add_argument(
        "--delete-originals",
        action="store_true",
        help="Delete converted JPG/JPEG/PNG originals after successful conversion.",
    )
    args = parser.parse_args()

    if not 1 <= args.quality <= 100:
        raise SystemExit("--quality must be between 1 and 100")

    mapping: dict[str, str] = {}
    converted = 0
    skipped = 0

    for image_path in iter_public_images():
        old_url = public_url(image_path)
        target, did_convert = convert_image(image_path, args.quality, args.dry_run)

        if did_convert:
            converted += 1
            mapping[old_url] = public_url(target)
            if args.delete_originals and image_path.suffix.lower() != ".webp" and not args.dry_run:
                image_path.unlink()
        else:
            skipped += 1

    changed_files = update_code_references(mapping, args.dry_run)

    mode = "Dry run" if args.dry_run else "Done"
    print(f"{mode}: {converted} image(s) converted/optimized, {skipped} skipped.")
    print(f"{mode}: {changed_files} code file(s) updated.")

    return 0


if __name__ == "__main__":
    raise SystemExit(main())
