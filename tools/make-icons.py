#!/usr/bin/env python3
"""Génère les icônes PWA/TWA d’OCHE à partir du logo cible (couleurs CSS)."""
from pathlib import Path
from PIL import Image, ImageDraw

ROOT = Path(__file__).resolve().parent.parent
ICON_DIR = ROOT / "icons"
ICON_DIR.mkdir(exist_ok=True)

BG = (0x14, 0x0F, 0x0C, 255)
INSET = (0x0C, 0x0A, 0x09, 255)
CREAM = (0xF0, 0xD9, 0xA6, 255)
RED = (0xE2, 0x3B, 0x32, 255)
GREEN = (0x1F, 0x8F, 0x5A, 255)


def draw_board(draw, cx, cy, scale, stroke_scale):
    r = 12 * scale
    draw.ellipse((cx - r, cy - r, cx + r, cy + r), fill=CREAM)
    draw.pieslice((cx - r, cy - r, cx + r, cy + r), start=270, end=360, fill=INSET)
    draw.pieslice((cx - r, cy - r, cx + r, cy + r), start=90, end=180, fill=INSET)
    w_red = max(1, round(2.2 * stroke_scale))
    w_green = max(1, round(2.0 * stroke_scale))
    draw.ellipse((cx - r, cy - r, cx + r, cy + r), outline=RED, width=w_red)
    rg = 7.2 * scale
    draw.ellipse((cx - rg, cy - rg, cx + rg, cy + rg), outline=GREEN, width=w_green)
    rb = 2.4 * scale
    draw.ellipse((cx - rb, cy - rb, cx + rb, cy + rb), fill=RED)
    rt = 1.0 * scale
    draw.ellipse((cx - rt, cy - rt, cx + rt, cy + rt), fill=CREAM)


def render(size: int, board_ratio: float) -> Image.Image:
    over = 4
    S = size * over
    im = Image.new("RGBA", (S, S), BG)
    d = ImageDraw.Draw(im)
    cx = cy = S / 2
    outer_r_units = 12 + 2.2 / 2
    target_outer = (board_ratio * S) / 2
    scale = target_outer / outer_r_units
    draw_board(d, cx, cy, scale, scale)
    return im.resize((size, size), Image.Resampling.LANCZOS)


def save(name: str, size: int, ratio: float, dest: Path) -> None:
    img = render(size, ratio)
    bg = Image.new("RGBA", img.size, BG)
    bg.alpha_composite(img)
    out = bg.convert("RGB")
    dest.parent.mkdir(parents=True, exist_ok=True)
    out.save(dest, "PNG", optimize=True)
    print(f"wrote {dest} {out.size} {dest.stat().st_size} bytes")


def main() -> None:
    save("icon-192.png", 192, 0.86, ICON_DIR / "icon-192.png")
    save("icon-512.png", 512, 0.86, ICON_DIR / "icon-512.png")
    save("icon-512-maskable.png", 512, 0.70, ICON_DIR / "icon-512-maskable.png")
    save("apple-touch-icon.png", 180, 0.86, ICON_DIR / "apple-touch-icon.png")
    save("icon-180.png", 180, 0.86, ROOT / "__grok" / "icon-180.png")


if __name__ == "__main__":
    main()
