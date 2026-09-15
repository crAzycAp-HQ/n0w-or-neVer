# n0w or neVer — Official Website

Official website for the **n0w or neVer** clan and community by **crAzy cAp**.

## Branding

- Clan: **n0w or neVer**
- Creator / owner: **crAzy cAp**
- Twitch: https://www.twitch.tv/crazycaptv
- Discord: https://discord.gg/TmPJpB9x
- Official logo: `logo.png`

## Website

The site is a static GitHub Pages website with:

- English and German content
- Persistent language selection
- Responsive desktop, tablet and mobile layouts
- Official Twitch video player and Twitch chat
- Schedule, About and Community sections
- English and German imprint pages
- English and German privacy-policy pages
- Accessible navigation, keyboard focus states and reduced-motion support
- No build step and no framework dependency

## Typography

The visual system uses **Space Grotesk** for display/body typography and **DM Mono** for compact interface labels. The fonts are loaded from Google Fonts in the current version; if the website should be fully self-contained, replace the `@import` in `style.css` with locally hosted font files before launch.

## Twitch configuration

The top of `script.js` contains the only Twitch settings that normally need changing:

```text
TWITCH_CHANNEL = "crazycaptv"
TWITCH_PARENT = "crazycap-hq.github.io"
```

`TWITCH_PARENT` must be the exact hostname where GitHub Pages serves the site. Do not include `https://`, a path or a trailing slash.

The page does not use Twitch API credentials. The embedded Twitch player is therefore the source of truth for live/offline status.

## Files

| File | Purpose |
| --- | --- |
| `index.html` | Main homepage |
| `style.css` | Complete layout, visual system and responsive design |
| `script.js` | Twitch embeds, language switcher and navigation |
| `logo.png` | Official logo |
| `impressum.html` | German imprint |
| `imprint.html` | English imprint |
| `datenschutz.html` | German privacy policy |
| `privacy-policy.html` | English privacy policy |

## Run locally

From the project root:

```bash
python -m http.server 8765
```

Then open:

```text
http://127.0.0.1:8765/index.html
```

## GitHub Pages

1. Upload all files to the repository root.
2. Commit the changes.
3. Open **Settings → Pages**.
4. Select **Deploy from a branch**.
5. Select `main` and `/(root)`.
6. Save and wait for GitHub Pages to publish.

## Before publishing

- Confirm the GitHub Pages hostname and keep `TWITCH_PARENT` correct.
- Replace any remaining legal placeholders in the imprint/privacy pages with the final operator information.
- Review the privacy wording whenever Twitch, analytics, merch, sponsors, cookies or other external services are added.
- If external Google Fonts should not be used, host the chosen font files locally and remove the external `@import`.
