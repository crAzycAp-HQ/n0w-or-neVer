/* =========================================================
   n0w or neVer — WEBSITE JAVASCRIPT
========================================================= */

const TWITCH_CHANNEL = "crazycaptv";
const TWITCH_URL = `https://www.twitch.tv/${TWITCH_CHANNEL}`;
const TWITCH_PARENT = "crazycap-hq.github.io";
const DISCORD_URL = "https://discord.gg/TmPJpB9x";

const translations = {
  en: {
    nav_live: "LIVE",
    nav_schedule: "SCHEDULE",
    nav_about: "ABOUT",
    nav_community: "COMMUNITY",

    hero_eyebrow: "OFFICIAL n0w or neVer CLAN",
    hero_desc: "n0w or neVer is the clan and community built by <strong>crAzy cAp</strong>. Gaming, live moments and a place for people who want to be part of more than just another stream.",
    hero_watch: "WATCH LIVE <b>▶</b>",
    hero_discord: "JOIN DISCORD ↗",
    hero_meta_clan: "CLAN IDENTITY",
    hero_meta_creator: "CREATOR & OWNER",

    live_eyebrow: "LIVE CHANNEL",
    live_heading: "WATCH THE <em>STREAM</em>",
    live_status: "TWITCH CHANNEL",
    live_detail: "Live when crAzy cAp is streaming.",
    stream_tag: "TWITCH LIVE",
    stream_title: "n0w or neVer — Live Stream",
    stream_desc: "Watch crAzy cAp live on Twitch directly from the official n0w or neVer website.",
    stream_open: "OPEN TWITCH ↗",
    chat_title: "LIVE CHAT",
    chat_subtitle: "TWITCH COMMUNITY",

    schedule_eyebrow: "UPCOMING",
    schedule_heading: "WHAT'S <em>NEXT.</em>",
    schedule_intro: "The schedule follows the games, events and community moments that are worth sharing.",
    schedule1_label: "NEXT SESSION",
    schedule1_time: "Friday · 18:00",
    schedule1_title: "LIVE GAMING",
    schedule1_desc: "Competitive gameplay, community interaction and everything that makes each session worth showing up for.",
    schedule2_label: "COMMUNITY",
    schedule2_time: "Public",
    schedule2_title: "LOUNGE",
    schedule2_desc: "Sunday · 18:00 — Talk, play and connect with the people behind the community.",
    schedule3_label: "SPECIAL",
    schedule3_time: "SOON",
    schedule3_title: "EVENT NIGHT",
    schedule3_desc: "Special streams, challenges and moments worth remembering.",

    about_eyebrow: "THE CLAN",
    about_heading: "MORE THAN<br>A STREAM<br><em>n0w or neVer</em>",
    about_lead: "n0w or neVer is a clan and community created by crAzy cAp around gaming, competition and real people sharing the experience together.",
    about_desc: "This platform brings the n0w or neVer community together around live gaming, Twitch and Discord — built to feel direct, authentic and connected.",
    principle1_title: "AUTHENTIC",
    principle1_desc: "Real people. Real moments.",
    principle2_title: "CONNECTED",
    principle2_desc: "Watch, chat and play together.",
    principle3_title: "COMMUNITY",
    principle3_desc: "One place for everyone who belongs.",

    community_eyebrow: "COMMUNITY FIRST",
    community_heading: "DON'T JUST WATCH<br><em>BE PART OF IT</em>",
    community_desc: "Join the official n0w or neVer Discord community and be part of the conversation beyond the stream.",
    community_discord: "JOIN DISCORD ↗",
    community_watch: "WATCH THE STREAM",

    footer_copy: "© {year} crAzy cAp — n0w or neVer Clan. All rights reserved.",
    footer_imprint: "Imprint",
    footer_privacy: "Privacy Policy",
    footer_top: "BACK TO TOP ↑"
  },

  de: {
    nav_live: "LIVE",
    nav_schedule: "ZEITPLAN",
    nav_about: "ÜBER UNS",
    nav_community: "COMMUNITY",

    hero_eyebrow: "OFFIZIELLER n0w or neVer CLAN",
    hero_desc: "n0w or neVer ist der von <strong>crAzy cAp</strong> aufgebaute Clan und die Community. Gaming, Live-Momente und ein Ort für alle, die Teil von mehr als nur einem weiteren Stream sein wollen.",
    hero_watch: "LIVE ANSEHEN <b>▶</b>",
    hero_discord: "DISCORD BEITRETEN ↗",
    hero_meta_clan: "CLAN-IDENTITÄT",
    hero_meta_creator: "CREATOR & INHABER",

    live_eyebrow: "LIVE-KANAL",
    live_heading: "DEN <em>STREAM</em> ANSEHEN",
    live_status: "TWITCH-KANAL",
    live_detail: "Live, wenn crAzy cAp streamt.",
    stream_tag: "TWITCH LIVE",
    stream_title: "n0w or neVer — Live-Stream",
    stream_desc: "Sieh crAzy cAp live auf Twitch direkt über die offizielle n0w or neVer Website.",
    stream_open: "TWITCH ÖFFNEN ↗",
    chat_title: "LIVE-CHAT",
    chat_subtitle: "TWITCH COMMUNITY",

    schedule_eyebrow: "ALS NÄCHSTES",
    schedule_heading: "WAS KOMMT <em>ALS NÄCHSTES.</em>",
    schedule_intro: "Der Zeitplan richtet sich nach Spielen, Events und Community-Momenten, die es wert sind, geteilt zu werden.",
    schedule1_label: "NÄCHSTE SESSION",
    schedule1_time: "Freitag · 18:00",
    schedule1_title: "LIVE GAMING",
    schedule1_desc: "Wettbewerbsorientiertes Gameplay, Community-Interaktion und alles, was eine Session zu etwas Besonderem macht.",
    schedule2_label: "COMMUNITY",
    schedule2_time: "Public",
    schedule2_title: "LOUNGE",
    schedule2_desc: "Sonntag · 18:00 — Reden, spielen und gemeinsam mit der Community Zeit verbringen.",
    schedule3_label: "SPECIAL",
    schedule3_time: "BALD",
    schedule3_title: "EVENT-ABEND",
    schedule3_desc: "Spezielle Streams, Challenges und Momente, die in Erinnerung bleiben.",

    about_eyebrow: "DER CLAN",
    about_heading: "MEHR ALS<br>NUR EINEN<br><em>STREAM</em>",
    about_lead: "n0w or neVer ist ein von crAzy cAp gegründeter Clan und eine Community rund um Gaming, Wettbewerb und echte Menschen, die das Erlebnis gemeinsam teilen.",
    about_desc: "Diese Plattform bringt die n0w or neVer Community rund um Live-Gaming, Twitch und Discord zusammen — direkt, authentisch und verbunden.",
    principle1_title: "AUTHENTISCH",
    principle1_desc: "Echte Menschen. Echte Momente.",
    principle2_title: "VERBUNDEN",
    principle2_desc: "Zusammen zuschauen, chatten und spielen.",
    principle3_title: "COMMUNITY",
    principle3_desc: "Ein Ort für alle, die dazugehören.",

    community_eyebrow: "COMMUNITY ZUERST",
    community_heading: "NICHT NUR ZUSCHAUEN<br><em>SEI DABEI</em>",
    community_desc: "Tritt der offiziellen n0w or neVer Discord-Community bei und sei auch abseits des Streams Teil der Unterhaltung.",
    community_discord: "DISCORD BEITRETEN ↗",
    community_watch: "STREAM ANSEHEN",

    footer_copy: "© {year} crAzy cAp — n0w or neVer Clan. Alle Rechte vorbehalten.",
    footer_imprint: "Impressum",
    footer_privacy: "Datenschutz",
    footer_top: "NACH OBEN ↑"
  }
};

const languageLabels = { en: "English", de: "Deutsch" };
const languageFlags = { en: "gb", de: "de" };
const languageDropdownButton = document.getElementById("languageDropdownButton");
const languageDropdown = document.getElementById("languageDropdown");
const languageOptions = document.querySelectorAll(".language-option");
const siteNavigation = document.getElementById("siteNavigation");
const menuButton = document.getElementById("menuButton");
const twitchPlayerFrame = document.getElementById("twitchPlayer");
const twitchChat = document.getElementById("twitchChat");

function setFlag(element, country) {
  element.className = `language-flag flag-${country}`;
  if (country === "gb") {
    element.innerHTML = `
      <rect width="60" height="40" fill="#012169"/>
      <path d="M0 0 60 40M60 0 0 40" stroke="#fff" stroke-width="10"/>
      <path d="M0 0 60 40M60 0 0 40" stroke="#c8102e" stroke-width="4"/>
      <path d="M30 0v40M0 20h60" stroke="#fff" stroke-width="16"/>
      <path d="M30 0v40M0 20h60" stroke="#c8102e" stroke-width="8"/>
    `;
  } else {
    element.innerHTML = `
      <rect width="60" height="40" fill="#ffce00"/>
      <rect width="60" height="13.33" fill="#000"/>
      <rect width="60" height="13.34" y="13.33" fill="#dd0000"/>
    `;
  }
}

function updateLegalLinks(lang) {
  const imprint = document.querySelector(".footer-legal a:first-of-type");
  const privacy = document.querySelector(".footer-legal a:last-of-type");
  if (!imprint || !privacy) return;
  imprint.href = lang === "de" ? "impressum.html" : "imprint.html";
  privacy.href = lang === "de" ? "datenschutz.html" : "privacy-policy.html";
}

function setLanguage(lang) {
  if (!translations[lang]) lang = "en";

  document.documentElement.lang = lang;
  document.documentElement.dataset.lang = lang;

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const value = translations[lang][element.dataset.i18n];
    if (value !== undefined) element.innerHTML = value.replace("{year}", new Date().getFullYear());
  });

  const selectedFlag = languageDropdownButton.querySelector(".language-flag");
  setFlag(selectedFlag, languageFlags[lang]);
  languageDropdownButton.querySelector(".language-label").textContent = languageLabels[lang];
  languageDropdownButton.setAttribute("aria-label", `Select language: ${languageLabels[lang]}`);

  languageOptions.forEach((option) => option.classList.toggle("active", option.dataset.lang === lang));
  updateLegalLinks(lang);
  document.title = lang === "de" ? "n0w or neVer | Live mit crAzy cAp" : "n0w or neVer | Live by crAzy cAp";

  try { localStorage.setItem("n0w-or-neVer-language", lang); } catch (_) {}
  closeLanguageMenu();
}

function closeLanguageMenu() {
  languageDropdown.classList.remove("open");
  languageDropdownButton.setAttribute("aria-expanded", "false");
}

function closeMobileMenu() {
  siteNavigation.classList.remove("mobile-open");
  menuButton.setAttribute("aria-expanded", "false");
  menuButton.setAttribute("aria-label", "Open navigation");
}

function toggleMobileMenu() {
  const open = siteNavigation.classList.toggle("mobile-open");
  menuButton.setAttribute("aria-expanded", String(open));
  menuButton.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
}

function initTwitch() {
  if (twitchPlayerFrame) {
    const videoIframe = document.createElement("iframe");
    videoIframe.src = `https://player.twitch.tv/?channel=${encodeURIComponent(TWITCH_CHANNEL)}&parent=${encodeURIComponent(TWITCH_PARENT)}&muted=false`;
    videoIframe.title = "n0w or neVer Twitch live stream";
    videoIframe.allowFullscreen = true;
    videoIframe.setAttribute("allow", "autoplay; fullscreen");
    videoIframe.loading = "eager";
    twitchPlayerFrame.appendChild(videoIframe);
  }

  if (twitchChat) {
    twitchChat.src = `https://www.twitch.tv/embed/${encodeURIComponent(TWITCH_CHANNEL)}/chat?parent=${encodeURIComponent(TWITCH_PARENT)}&darkpopout`;
    twitchChat.loading = "lazy";
  }
}

languageOptions.forEach((option) => {
  option.addEventListener("click", () => setLanguage(option.dataset.lang));
});

languageDropdownButton.addEventListener("click", (event) => {
  event.stopPropagation();
  const open = languageDropdown.classList.toggle("open");
  languageDropdownButton.setAttribute("aria-expanded", String(open));
});

document.addEventListener("click", (event) => {
  if (!event.target.closest(".language-switcher")) closeLanguageMenu();
  if (!event.target.closest(".site-header")) closeMobileMenu();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeLanguageMenu();
    closeMobileMenu();
  }
});

menuButton.addEventListener("click", (event) => {
  event.stopPropagation();
  toggleMobileMenu();
});

document.querySelectorAll(".desktop-nav a").forEach((link) => {
  link.addEventListener("click", closeMobileMenu);
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 1080) closeMobileMenu();
});

setFlag(document.querySelector(".language-dropdown-button .language-flag"), "gb");

let savedLanguage = "en";
try { savedLanguage = localStorage.getItem("n0w-or-neVer-language") || "en"; } catch (_) {}
setLanguage(savedLanguage);
initTwitch();

/* The page intentionally does not expose Twitch API credentials.
   The Twitch player itself is the source of truth for live/offline state. */
