/* =========================================================
   TWITCH SETTINGS
========================================================= */

const TWITCH_CHANNEL =
  "crazycaptv";

const TWITCH_URL =
  `https://www.twitch.tv/${TWITCH_CHANNEL}`;

const TWITCH_PARENT =
  "crazycap-hq.github.io";


/* =========================================================
   ELEMENTS
========================================================= */

const twitchPlayerFrame =
  document.getElementById("twitchPlayer");

const streamStatus =
  document.getElementById("streamStatus");

const statusDetail =
  document.getElementById("statusDetail");

const statusDot =
  document.getElementById("statusDot");

const chatLiveDot =
  document.getElementById("chatLiveDot");

const twitchChat =
  document.getElementById("twitchChat");

const headerTwitchButton =
  document.getElementById("headerTwitchButton");

const menuButton =
  document.getElementById("menuButton");


/* =========================================================
   LANGUAGE SYSTEM

   English is the default. New languages can be added later
   by adding another object to this translations collection
   and another button with data-language="xx".
========================================================= */

const translations = {

  en: {
    nav_live: "LIVE",
    nav_schedule: "SCHEDULE",
    nav_about: "ABOUT",
    nav_community: "COMMUNITY",

    eyebrow_official: "OFFICIAL n0w or neVer CLAN",
    hero_desc_1: "n0w or neVer is the clan and community built by",
    hero_desc_2: "Gaming, live moments and a place for people who want to be part of more than just another stream.",
    watch_live: "WATCH LIVE",
    join_discord: "JOIN DISCORD ↗",
    clan_identity: "CLAN IDENTITY",
    twitch_stream: "TWITCH STREAM",
    creator_owner: "CREATOR & OWNER",

    live_channel: "LIVE CHANNEL",
    watch_the: "WATCH THE",
    stream: "STREAM",
    twitch_live: "TWITCH LIVE",
    live_title: "n0w or neVer — Live Stream",
    live_desc: "Watch crAzy cAp live on Twitch directly from the official n0w or neVer website.",
    live_chat: "LIVE CHAT",
    twitch_community: "TWITCH COMMUNITY",

    upcoming: "UPCOMING",
    whats: "WHAT'S",
    next: "NEXT.",
    schedule_intro: "The schedule changes with the games, events and community moments that deserve to be shared.",
    next_session: "NEXT SESSION",
    friday_time: "Friday · 18:00",
    live_gaming: "LIVE GAMING",
    schedule_desc1: "Competitive gameplay, community interaction and everything happening in the moment.",
    community_label: "COMMUNITY",
    lounge_title: "LOUNGE",
    sunday_time: "Sunday · 18:00",
    schedule_desc2: "Talk, play and connect with the people behind the community.",
    special: "SPECIAL",
    soon: "SOON",
    event_night: "EVENT NIGHT",
    schedule_desc3: "Special streams, challenges and moments worth remembering.",

    the_clan: "THE CLAN",
    more_than: "MORE THAN",
    a_stream: "A STREAM",
    clan_name: "n0w or neVer",
    about_lead: "n0w or neVer is a clan and community created by crAzy cAp around gaming, competition and real people sharing the experience together.",
    about_text: "This platform brings the n0w or neVer community together around live gaming, Twitch and Discord.",
    authentic: "AUTHENTIC",
    authentic_desc: "Real people. Real moments.",
    connected: "CONNECTED",
    connected_desc: "Watch, chat and play together.",
    community_value: "COMMUNITY",
    community_desc: "One place for everyone who belongs.",

    community_first: "COMMUNITY FIRST",
    dont_just_watch: "DON'T JUST WATCH",
    be_part: "BE PART OF IT",
    join_desc: "Join the official n0w or neVer Discord community.",
    watch_stream: "WATCH THE STREAM",

    copyright: "crAzy cAp — n0w or neVer Clan. All rights reserved.",
    imprint: "Imprint",
    privacy: "Privacy Policy",
    back_top: "BACK TO TOP ↑",

    twitch_channel: "Twitch channel",
    twitch_status: "Live when crAzy cAp is streaming"
  },

  de: {
    nav_live: "LIVE",
    nav_schedule: "ZEITPLAN",
    nav_about: "ÜBER UNS",
    nav_community: "COMMUNITY",

    eyebrow_official: "OFFIZIELLER n0w or neVer CLAN",
    hero_desc_1: "n0w or neVer ist der von",
    hero_desc_2: "Gaming, Live-Momente und ein Ort für alle, die mehr als nur einen weiteren Stream erleben wollen.",
    watch_live: "LIVE ANSEHEN",
    join_discord: "DISCORD BEITRETEN ↗",
    clan_identity: "CLAN IDENTITÄT",
    twitch_stream: "TWITCH STREAM",
    creator_owner: "CREATOR & INHABER",

    live_channel: "LIVE CHANNEL",
    watch_the: "DEN",
    stream: "STREAM ANSEHEN",
    twitch_live: "TWITCH LIVE",
    live_title: "n0w or neVer — Live Stream",
    live_desc: "Sieh crAzy cAp direkt auf der offiziellen n0w or neVer Website live auf Twitch.",
    live_chat: "LIVE CHAT",
    twitch_community: "TWITCH COMMUNITY",

    upcoming: "ALS NÄCHSTES",
    whats: "WAS KOMMT",
    next: "ALS NÄCHSTES.",
    schedule_intro: "Der Zeitplan richtet sich nach Games, Events und Community-Momenten, die geteilt werden sollen.",
    next_session: "NÄCHSTE SESSION",
    friday_time: "Freitag · 18:00 Uhr",
    live_gaming: "LIVE GAMING",
    schedule_desc1: "Wettbewerbsorientiertes Gameplay, Community-Interaktion und alles, was gerade passiert.",
    community_label: "COMMUNITY",
    lounge_title: "LOUNGE",
    sunday_time: "Sonntag · 18:00 Uhr",
    schedule_desc2: "Reden, spielen und gemeinsam mit den Menschen hinter der Community verbinden.",
    special: "SPECIAL",
    soon: "DEMNÄCHST",
    event_night: "EVENT NIGHT",
    schedule_desc3: "Besondere Streams, Challenges und Momente, die in Erinnerung bleiben.",

    the_clan: "DER CLAN",
    more_than: "MEHR ALS",
    a_stream: "EIN STREAM",
    clan_name: "n0w or neVer",
    about_lead: "n0w or neVer ist ein von crAzy cAp gegründeter Clan und eine Community rund um Gaming, Wettbewerb und echte Menschen, die das Erlebnis gemeinsam teilen.",
    about_text: "Diese Plattform bringt die n0w or neVer Community rund um Live-Gaming, Twitch und Discord zusammen.",
    authentic: "AUTHENTISCH",
    authentic_desc: "Echte Menschen. Echte Momente.",
    connected: "VERBUNDEN",
    connected_desc: "Zuschauen, chatten und gemeinsam spielen.",
    community_value: "COMMUNITY",
    community_desc: "Ein Ort für alle, die dazugehören.",

    community_first: "COMMUNITY ZUERST",
    dont_just_watch: "NICHT NUR ZUSCHAUEN",
    be_part: "SEI DABEI",
    join_desc: "Tritt der offiziellen n0w or neVer Discord Community bei.",
    watch_stream: "STREAM ANSEHEN",

    copyright: "crAzy cAp — n0w or neVer Clan. Alle Rechte vorbehalten.",
    imprint: "Impressum",
    privacy: "Datenschutz",
    back_top: "NACH OBEN ↑",

    twitch_channel: "Twitch-Kanal",
    twitch_status: "Live, wenn crAzy cAp streamt"
  }
};


function updateLegalLinks(lang) {
  const imprint = document.getElementById("footerImprint");
  const privacy = document.getElementById("footerPrivacy");

  if (imprint) {
    imprint.href = lang === "de" ? "impressum.html" : "imprint.html";
  }

  if (privacy) {
    privacy.href = lang === "de" ? "datenschutz.html" : "privacy-policy.html";
  }
}


function setLanguage(lang) {
  if (!translations[lang]) {
    lang = "en";
  }

  document.documentElement.lang = lang;

  document
    .querySelectorAll("[data-i18n]")
    .forEach((element) => {
      const key = element.dataset.i18n;
      if (translations[lang][key] !== undefined) {
        element.textContent = translations[lang][key];
      }
    });

  document
    .querySelectorAll(".language-button")
    .forEach((button) => {
      button.classList.toggle(
        "active",
        button.dataset.language === lang
      );
    });

  streamStatus.textContent = translations[lang].twitch_channel;
  statusDetail.textContent = translations[lang].twitch_status;

  updateLegalLinks(lang);

  document.title = lang === "de"
    ? "n0w or neVer | Live mit crAzy cAp"
    : "n0w or neVer | Live by crAzy cAp";

  localStorage.setItem(
    "n0w-or-neVer-language",
    lang
  );
}


document
  .querySelectorAll(".language-button")
  .forEach((button) => {
    button.addEventListener("click", () => {
      setLanguage(button.dataset.language);
    });
  });


/* =========================================================
   BASIC SETTINGS
========================================================= */

headerTwitchButton.href =
  TWITCH_URL;

document.getElementById("year").textContent =
  new Date().getFullYear();


/* =========================================================
   TWITCH VIDEO PLAYER
========================================================= */

const videoIframe =
  document.createElement("iframe");

videoIframe.src =
  `https://player.twitch.tv/?channel=${TWITCH_CHANNEL}&parent=${TWITCH_PARENT}&muted=false`;

videoIframe.setAttribute(
  "allowfullscreen",
  "true"
);

videoIframe.setAttribute(
  "allow",
  "autoplay; fullscreen"
);

videoIframe.frameBorder =
  "0";

twitchPlayerFrame.appendChild(
  videoIframe
);

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

menuButton.addEventListener(
  "click",
  () => {
    document
      .querySelector(".desktop-nav")
      .classList.toggle("mobile-open");
  }
);

document
  .querySelectorAll(".desktop-nav a")
  .forEach((link) => {
    link.addEventListener("click", () => {
      document
        .querySelector(".desktop-nav")
        .classList.remove("mobile-open");
    });
  });


/* =========================================================
   START LANGUAGE
========================================================= */

setLanguage(
  localStorage.getItem("n0w-or-neVer-language") || "en"
);
