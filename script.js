/* =========================================================
   TWITCH SETTINGS
========================================================= */

const TWITCH_CHANNEL = "crazycaptv";
const TWITCH_URL = `https://www.twitch.tv/${TWITCH_CHANNEL}`;
const TWITCH_PARENT = "crazycap-hq.github.io";


/* =========================================================
   TRANSLATIONS
   Add future languages here without changing the page layout.
========================================================= */

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
    live_status: "Twitch channel",
    live_detail: "Live when crAzy cAp is streaming",
    stream_tag: "TWITCH LIVE",
    stream_title: "n0w or neVer — Live Stream",
    stream_desc: "Watch crAzy cAp live on Twitch directly from the official n0w or neVer website.",
    chat_title: "LIVE CHAT",
    chat_subtitle: "TWITCH COMMUNITY",

    schedule_eyebrow: "UPCOMING",
    schedule_heading: "WHAT'S <em>NEXT.</em>",
    schedule_intro: "The schedule changes with the games, events and community moments that deserve to be shared.",
    schedule1_label: "NEXT SESSION",
    schedule1_time: "Friday · 6:00 PM",
    schedule1_title: "LIVE GAMING",
    schedule1_desc: "Competitive gameplay, community interaction and everything happening in the moment.",
    schedule2_label: "COMMUNITY",
    schedule2_time: "Public",
    schedule2_title: "LOUNGE",
    schedule2_desc: "Sunday · 6:00 PM — Talk, play and connect with the people behind the community.",
    schedule3_label: "SPECIAL",
    schedule3_time: "SOON",
    schedule3_title: "EVENT NIGHT",
    schedule3_desc: "Special streams, challenges and moments worth remembering.",

    about_eyebrow: "THE CLAN",
    about_heading: "MORE THAN<br>A STREAM<br><em>n0w or neVer</em>",
    about_lead: "n0w or neVer is a clan and community created by crAzy cAp around gaming, competition and real people sharing the experience together.",
    about_desc: "This platform brings the n0w or neVer community together around live gaming, Twitch and Discord.",
    principle1_title: "AUTHENTIC",
    principle1_desc: "Real people. Real moments.",
    principle2_title: "CONNECTED",
    principle2_desc: "Watch, chat and play together.",
    principle3_title: "COMMUNITY",
    principle3_desc: "One place for everyone who belongs.",

    community_eyebrow: "COMMUNITY FIRST",
    community_heading: "DON'T JUST WATCH<br><em>BE PART OF IT</em>",
    community_desc: "Join the official n0w or neVer Discord community.",
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
    live_status: "Twitch-Kanal",
    live_detail: "Live, wenn crAzy cAp streamt",
    stream_tag: "TWITCH LIVE",
    stream_title: "n0w or neVer — Live-Stream",
    stream_desc: "Sieh crAzy cAp live auf Twitch direkt über die offizielle n0w or neVer Website.",
    chat_title: "LIVE-CHAT",
    chat_subtitle: "TWITCH COMMUNITY",

    schedule_eyebrow: "ALS NÄCHSTES",
    schedule_heading: "WAS KOMMT <em>ALS NÄCHSTES.</em>",
    schedule_intro: "Der Zeitplan richtet sich nach Spielen, Events und Community-Momenten, die geteilt werden sollen.",
    schedule1_label: "NÄCHSTE SESSION",
    schedule1_time: "Freitag · 18:00",
    schedule1_title: "LIVE GAMING",
    schedule1_desc: "Wettbewerbsorientiertes Gameplay, Community-Interaktion und alles, was gerade passiert.",
    schedule2_label: "COMMUNITY",
    schedule2_time: "Public",
    schedule2_title: "LOUNGE",
    schedule2_desc: "Sonntag · 18:00 Uhr — Reden, spielen und gemeinsam mit der Community Zeit verbringen.",
    schedule3_label: "SPECIAL",
    schedule3_time: "BALD",
    schedule3_title: "EVENT-ABEND",
    schedule3_desc: "Spezielle Streams, Challenges und Momente, die in Erinnerung bleiben.",

    about_eyebrow: "DER CLAN",
    about_heading: "MEHR ALS<br>NUR EIN<br><em>STREAM</em>",
    about_lead: "n0w or neVer ist ein von crAzy cAp gegründeter Clan und eine Community rund um Gaming, Wettbewerb und echte Menschen, die das Erlebnis gemeinsam teilen.",
    about_desc: "Diese Plattform bringt die n0w or neVer Community rund um Live-Gaming, Twitch und Discord zusammen.",
    principle1_title: "AUTHENTISCH",
    principle1_desc: "Echte Menschen. Echte Momente.",
    principle2_title: "VERBUNDEN",
    principle2_desc: "Zusammen zuschauen, chatten und spielen.",
    principle3_title: "COMMUNITY",
    principle3_desc: "Ein Ort für alle, die dazugehören.",

    community_eyebrow: "COMMUNITY ZUERST",
    community_heading: "NICHT NUR ZUSCHAUEN<br><em>SEI DABEI</em>",
    community_desc: "Tritt der offiziellen n0w or neVer Discord-Community bei.",
    community_discord: "DISCORD BEITRETEN ↗",
    community_watch: "STREAM ANSEHEN",

    footer_copy: "© {year} crAzy cAp — n0w or neVer Clan. Alle Rechte vorbehalten.",
    footer_imprint: "Impressum",
    footer_privacy: "Datenschutz",
    footer_top: "NACH OBEN ↑"
  }
};


/* =========================================================
   LANGUAGE DROPDOWN
========================================================= */

const languageDropdownButton =
  document.getElementById("languageDropdownButton");
const languageDropdown =
  document.getElementById("languageDropdown");
const languageOptions =
  document.querySelectorAll(".language-option");

const languageLabels = {
  en: "English",
  de: "Deutsch"
};

const languageFlags = {
  en: "gb",
  de: "de"
};

const languageFlagMarkup = {
  gb: `<rect width="60" height="40" fill="#012169"/><path d="M0 0 60 40M60 0 0 40" stroke="#fff" stroke-width="10"/><path d="M0 0 60 40M60 0 0 40" stroke="#c8102e" stroke-width="4"/><path d="M30 0v40M0 20h60" stroke="#fff" stroke-width="16"/><path d="M30 0v40M0 20h60" stroke="#c8102e" stroke-width="8"/>`,
  de: `<rect width="60" height="40" fill="#ffce00"/><rect width="60" height="13.33" fill="#000"/><rect width="60" height="13.34" y="13.33" fill="#dd0000"/>`
};

function updateLegalLinks(lang) {
  const imprint = document.querySelector(".footer-legal a:nth-of-type(1)");
  const privacy = document.querySelector(".footer-legal a:nth-of-type(2)");

  if (!imprint || !privacy) return;

  if (lang === "de") {
    imprint.href = "impressum.html";
    privacy.href = "datenschutz.html";
  } else {
    imprint.href = "imprint.html";
    privacy.href = "privacy-policy.html";
  }
}

function setLanguage(lang) {
  if (!translations[lang]) lang = "en";

  document.documentElement.lang = lang;
  document.documentElement.dataset.lang = lang;

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    const value = translations[lang][key];
    if (value === undefined) return;

    element.innerHTML = value.replace("{year}", new Date().getFullYear());
  });

  const selectedFlag = languageDropdownButton.querySelector(".language-flag");
  selectedFlag.className = `language-flag flag-${languageFlags[lang]}`;
  selectedFlag.innerHTML = languageFlagMarkup[languageFlags[lang]];
  languageDropdownButton.querySelector(".language-label").textContent =
    languageLabels[lang];
  languageDropdownButton.setAttribute(
    "aria-label",
    `Select language: ${languageLabels[lang]}`
  );

  languageOptions.forEach((option) => {
    option.classList.toggle("active", option.dataset.lang === lang);
  });

  updateLegalLinks(lang);

  document.title =
    lang === "de"
      ? "n0w or neVer | Live mit crAzy cAp"
      : "n0w or neVer | Live by crAzy cAp";

  localStorage.setItem("n0w-or-neVer-language", lang);
  languageDropdown.classList.remove("open");
  languageDropdownButton.setAttribute("aria-expanded", "false");
}

languageDropdownButton.addEventListener("click", (event) => {
  event.stopPropagation();
  const isOpen = languageDropdown.classList.toggle("open");
  languageDropdownButton.setAttribute("aria-expanded", String(isOpen));
});

languageOptions.forEach((option) => {
  option.addEventListener("click", () => {
    setLanguage(option.dataset.lang);
  });
});

document.addEventListener("click", () => {
  languageDropdown.classList.remove("open");
  languageDropdownButton.setAttribute("aria-expanded", "false");
});


/* =========================================================
   ELEMENTS
========================================================= */

const twitchPlayerFrame = document.getElementById("twitchPlayer");
const streamStatus = document.getElementById("streamStatus");
const statusDetail = document.getElementById("statusDetail");
const statusDot = document.getElementById("statusDot");
const chatLiveDot = document.getElementById("chatLiveDot");
const twitchChat = document.getElementById("twitchChat");
const headerTwitchButton = document.getElementById("headerTwitchButton");
const menuButton = document.getElementById("menuButton");

headerTwitchButton.href = TWITCH_URL;
/* =========================================================
   TWITCH VIDEO PLAYER
========================================================= */

const videoIframe = document.createElement("iframe");
videoIframe.src =
  `https://player.twitch.tv/?channel=${TWITCH_CHANNEL}&parent=${TWITCH_PARENT}&muted=false`;
videoIframe.setAttribute("allowfullscreen", "true");
videoIframe.setAttribute("allow", "autoplay; fullscreen");
videoIframe.frameBorder = "0";
twitchPlayerFrame.appendChild(videoIframe);

statusDot.classList.remove("live");
chatLiveDot.classList.add("offline");


/* =========================================================
   TWITCH CHAT
========================================================= */

twitchChat.src =
  `https://www.twitch.tv/embed/${TWITCH_CHANNEL}/chat?parent=${TWITCH_PARENT}&darkpopout`;


/* =========================================================
   MOBILE MENU
========================================================= */

menuButton.addEventListener("click", () => {
  document.querySelector(".desktop-nav").classList.toggle("mobile-open");
});

document.querySelectorAll(".desktop-nav a").forEach((link) => {
  link.addEventListener("click", () => {
    document.querySelector(".desktop-nav").classList.remove("mobile-open");
  });
});


/* =========================================================
   INITIAL LANGUAGE
========================================================= */

setLanguage(localStorage.getItem("n0w-or-neVer-language") || "de");
