# n0w or neVer

Offizielle Website des **n0w or neVer** Clans und der Community von **crAzy cAp**.

Die Website enthält:

- eine zweisprachige Startseite auf Deutsch und Englisch
- eingebetteten Twitch-Livestream und Twitch-Chat
- Links zur n0w or neVer Discord-Community
- einen Zeitplan-, About- und Community-Bereich
- deutsche und englische Datenschutz- und Impressumsseiten
- eine animierte, weich in den Hintergrund übergehende Logo-Darstellung
- Comic Sans MS als globale Website-Schrift

## Dateien

| Datei | Beschreibung |
| --- | --- |
| `index.html` | Startseite |
| `style.css` | Layout, Farben, Animationen und Responsive Design |
| `script.js` | Sprachumschaltung, Twitch-Einbettung und Navigation |
| `logo.png` | Website-Logo |
| `impressum.html` | Impressum auf Deutsch |
| `imprint.html` | Imprint auf Englisch |
| `datenschutz.html` | Datenschutzerklärung auf Deutsch |
| `privacy-policy.html` | Privacy Policy auf Englisch |

## Lokal ansehen

Die Website benötigt keinen Build-Schritt. Sie kann über einen lokalen HTTP-Server gestartet werden.

Mit Python:

```bash
python -m http.server 8765
```

Danach im Browser öffnen:

```text
http://127.0.0.1:8765/index.html
```

Die Legal-Seiten sind direkt erreichbar:

```text
http://127.0.0.1:8765/impressum.html
http://127.0.0.1:8765/imprint.html
http://127.0.0.1:8765/datenschutz.html
http://127.0.0.1:8765/privacy-policy.html
```

## Sprache

Die Sprache wird über das Dropdown-Menü im Header gewechselt. Die Auswahl wird im Browser in `localStorage` gespeichert. Beim Wechsel auf Deutsch werden auch die deutschen Bezeichnungen und die deutschen Legal-Seiten verwendet.

## Twitch

Der Twitch-Kanal wird in `script.js` konfiguriert:

```js
const TWITCH_CHANNEL = "crazycaptv";
```

Der Live-Player und der Chat werden direkt von Twitch eingebettet. Der Statuspunkt im Stream-Bereich bleibt derzeit bewusst im Offline-Zustand, weil keine Twitch-API-Abfrage mit Zugangsdaten im Browser eingerichtet ist.

## Veröffentlichung

Die Website besteht aus statischen Dateien und kann beispielsweise über GitHub Pages veröffentlicht werden. Beim Deployment müssen alle HTML-, CSS-, JavaScript- und Bilddateien im selben veröffentlichten Verzeichnis liegen.

Vor der Veröffentlichung sollten die Angaben im Impressum und in der Datenschutzerklärung auf Vollständigkeit und Aktualität geprüft werden.
