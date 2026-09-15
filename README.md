# n0w or neVer — Official Twitch Website

Official website for the **n0w or neVer** clan and community by **crAzy cAp**.

## Branding

- Clan: n0w or neVer
- Creator / owner: crAzy cAp
- Official logo: `logo.png`
- Discord: https://discord.gg/TmPJpB9x
- Twitch: https://www.twitch.tv/crazycaptv

## Website features

- German and English homepage content
- Language dropdown with persisted browser preference
- Twitch video player and read-only live chat
- Schedule, About and Community sections
- German and English imprint pages
- German and English privacy policy pages
- Comic Sans MS as the global website font
- Soft, rounded logo presentation blended into the background
- Responsive layout for desktop and mobile screens

## Files

| File | Description |
| --- | --- |
| `index.html` | Main homepage |
| `style.css` | Layout, colors, responsive design and animations |
| `script.js` | Language switching, Twitch embeds and navigation |
| `logo.png` | Official website logo |
| `impressum.html` | German imprint |
| `imprint.html` | English imprint |
| `datenschutz.html` | German privacy policy |
| `privacy-policy.html` | English privacy policy |

## Twitch embeds used

- Video player: `https://player.twitch.tv/?channel=crazycaptv&parent=crazycap-hq.github.io`
- Live chat (read-only): `https://www.twitch.tv/embed/crazycaptv/chat?parent=crazycap-hq.github.io`

Both embeds are plain iframes (no Twitch.Embed JavaScript API), built and inserted by `script.js`. The video iframe fills the full width and height of its 16:9 frame through CSS. Twitch displays its own offline screen inside the player when crAzy cAp is not live.

### Channel and domain settings

Both `TWITCH_CHANNEL` and `TWITCH_PARENT` are set at the top of `script.js`:

- `TWITCH_CHANNEL` — the Twitch channel name, currently `crazycaptv`.
- `TWITCH_PARENT` — the exact hostname where the site is served, for example `crazycap-hq.github.io`. Do not include `https://`, a path or a trailing slash.

If the Twitch channel or website domain changes, update both values in `script.js`.

## Run locally

The website is made of static files and does not require a build step. Start a local HTTP server from the project root:

```bash
python -m http.server 8765
```

Open the homepage at:

```text
http://127.0.0.1:8765/index.html
```

The legal pages can be opened directly:

```text
http://127.0.0.1:8765/impressum.html
http://127.0.0.1:8765/imprint.html
http://127.0.0.1:8765/datenschutz.html
http://127.0.0.1:8765/privacy-policy.html
```

## GitHub Pages deployment

1. Open the repository on GitHub.
2. Upload `index.html`, `style.css`, `script.js`, `logo.png`, the legal pages and `README.md` to the repository root.
3. Commit the changes.
4. In repository **Settings > Pages**, select **Deploy from a branch**.
5. Select branch `main` and folder `/(root)`.
6. Save and wait for GitHub Pages to publish.

## Important

- If you deploy to a new domain or a different GitHub Pages URL, update `TWITCH_PARENT` in `script.js` first. Otherwise Twitch may refuse to load the player or chat.
- Live status is not tracked automatically by the page. The embedded Twitch player and its own offline screen are the source of truth for whether crAzy cAp is live.
- The status indicator in the stream card intentionally remains in its current offline state because no Twitch API credentials are exposed in the browser.
- Before publishing, check the imprint and privacy policy for completeness and current legal requirements.
