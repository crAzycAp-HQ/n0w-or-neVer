/* =========================================================
   TWITCH SETTINGS
========================================================= */

const TWITCH_CHANNEL =
  "crazycaptv";

const TWITCH_URL =
  `https://www.twitch.tv/${TWITCH_CHANNEL}`;

/*
   Your GitHub Pages domain.

   IMPORTANT:
   This must match the domain where the website runs
   (hostname only, no path, no protocol, no trailing slash).
*/

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
   BASIC SETTINGS
========================================================= */

headerTwitchButton.href =
  TWITCH_URL;


document.getElementById("year").textContent =
  new Date().getFullYear();


/* =========================================================
   TWITCH VIDEO PLAYER
   (plain iframe — no Twitch.Embed JS API, which has known,
   long-standing sizing bugs. The CSS in style.css already
   stretches this iframe to fill the 16:9 frame.)
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


/*
   We can't reliably detect live/offline status from a plain
   iframe (Twitch doesn't expose that to outside scripts
   without OAuth). Twitch itself shows an "offline" screen
   inside the player when the channel isn't streaming, so we
   just keep the badge text generic instead of guessing.
*/

streamStatus.textContent =
  "Twitch channel";

statusDetail.textContent =
  "Live when crAzy cAp is streaming";

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
      .classList.toggle(
        "mobile-open"
      );

  }
);


/* =========================================================
   CLOSE MOBILE MENU AFTER CLICK
========================================================= */

document
  .querySelectorAll(
    ".desktop-nav a"
  )
  .forEach(
    (link) => {

      link.addEventListener(
        "click",
        () => {

          document
            .querySelector(".desktop-nav")
            .classList.remove(
              "mobile-open"
            );

        }
      );

    }
  );


/* =========================================================
   LANGUAGE SWITCHER (DE / EN)
========================================================= */

const translations = {
  en: {
    nav_live: "LIVE", nav_schedule: "SCHEDULE", nav_about: "ABOUT", nav_community: "COMMUNITY",
    hero_eyebrow: "OFFICIAL n0w or neVer CLAN", hero_play: "PLAY", hero_connect: "CONNECT", hero_never: "NEVER QUIT",
    hero_desc: "n0w or neVer is the clan and community built by", hero_desc2: "Gaming, live moments and a place for people who want to be part of more than just another stream.",
    watch_live: "WATCH LIVE", join_discord: "JOIN DISCORD ↗", clan_identity: "CLAN IDENTITY", twitch_stream: "TWITCH STREAM", creator_owner: "CREATOR & OWNER",
    live_channel: "LIVE CHANNEL", live_heading: "WATCH THE STREAM", watch_the: "WATCH THE", stream: "STREAM", twitch_channel: "Twitch channel", loading_player: "Loading player…", twitch_live: "TWITCH LIVE",
    stream_desc: "Watch crAzy cAp live on Twitch directly from the official n0w or neVer website.", live_chat: "LIVE CHAT", twitch_community: "TWITCH COMMUNITY",
    upcoming: "UPCOMING", whats: "WHAT'S", next: "NEXT.", schedule_intro: "The schedule changes with the games, events and community moments that deserve to be shared.",
    next_session: "NEXT SESSION", schedule1_time: "Friday at 6 p.m.", live_gaming: "LIVE GAMING", schedule1_desc: "Competitive gameplay, community interaction and everything happening in the moment.",
    community: "COMMUNITY", public: "PUBLIC", schedule2_title: "LOUNGE Sunday at 6 p.m.", schedule2_desc: "Talk, play and connect with the people behind the community.",
    special: "SPECIAL", soon: "SOON", event_night: "EVENT NIGHT", schedule3_desc: "Special streams, challenges and moments worth remembering.",
    the_clan: "THE CLAN", about_heading: "MORE THAN A STREAM n0w or neVer", more_than: "MORE THAN", a_stream: "A STREAM", about_desc1: "n0w or neVer is a clan and community created by crAzy cAp around gaming, competition and real people sharing the experience together.",
    about_desc2: "This platform brings the n0w or neVer community together around live gaming, Twitch and Discord.", authentic: "AUTHENTIC", authentic_desc: "Real people. Real moments.",
    connected: "CONNECTED", connected_desc: "Watch, chat and play together.", community_desc: "One place for everyone who belongs.", community_first: "COMMUNITY FIRST", dont_watch: "DON'T JUST WATCH", be_part: "BE PART OF IT",
    community_desc2: "Join the official n0w or neVer Discord community.", community_heading: "DON'T JUST WATCH — BE PART OF IT", back_top: "BACK TO TOP ↑", imprint: "Imprint", privacy: "Privacy Policy", brand_tagline: "CLAN · LIVE · COMMUNITY",
    copyright: "crAzy cAp — n0w or neVer Clan. All rights reserved."
  },
  de: {
    nav_live: "LIVE", nav_schedule: "ZEITPLAN", nav_about: "ÜBER UNS", nav_community: "COMMUNITY",
    hero_eyebrow: "OFFIZIELLER n0w or neVer CLAN", hero_play: "SPIELEN", hero_connect: "VERBINDEN", hero_never: "NIEMALS AUFGEBEN",
    hero_desc: "n0w or neVer ist der von crAzy cAp aufgebaute Clan und die Community.", hero_desc2: "Gaming, Live-Momente und ein Ort für Menschen, die Teil von mehr als nur einem weiteren Stream sein möchten.",
    watch_live: "LIVE ANSEHEN", join_discord: "DISCORD BEITRETEN ↗", clan_identity: "CLAN-IDENTITÄT", twitch_stream: "TWITCH-STREAM", creator_owner: "CREATOR & INHABER",
    live_channel: "LIVE-KANAL", live_heading: "STREAM ANSEHEN", watch_the: "STREAM", stream: "ANSEHEN", twitch_channel: "Twitch-Kanal", loading_player: "Player wird geladen…", twitch_live: "TWITCH LIVE",
    stream_desc: "Sieh crAzy cAp direkt auf Twitch live – von der offiziellen n0w or neVer Webseite.", live_chat: "LIVE-CHAT", twitch_community: "TWITCH COMMUNITY",
    upcoming: "ALS NÄCHSTES", whats: "WAS KOMMT", next: "ALS NÄCHSTES.", schedule_intro: "Der Zeitplan richtet sich nach Games, Events und Community-Momenten, die wir gemeinsam erleben möchten.",
    next_session: "NÄCHSTE SESSION", schedule1_time: "Freitag · 18:00 Uhr", live_gaming: "LIVE GAMING", schedule1_desc: "Wettbewerbsorientiertes Gameplay, Community-Interaktion und alles, was gerade passiert.",
    community: "COMMUNITY", public: "PUBLIC", schedule2_title: "LOUNGE Sonntag · 18:00 Uhr", schedule2_desc: "Reden, spielen und mit den Menschen hinter der Community verbinden.",
    special: "SPECIAL", soon: "BALD", event_night: "EVENT-NACHT", schedule3_desc: "Besondere Streams, Challenges und Momente, die in Erinnerung bleiben.",
    the_clan: "DER CLAN", about_heading: "MEHR ALS EIN STREAM n0w or neVer", more_than: "MEHR ALS", a_stream: "EIN STREAM", about_desc1: "n0w or neVer ist ein von crAzy cAp gegründeter Clan und eine Community rund um Gaming, Wettbewerb und echte Menschen, die ihre Erlebnisse miteinander teilen.",
    about_desc2: "Diese Plattform bringt die n0w or neVer Community rund um Live-Gaming, Twitch und Discord zusammen.", authentic: "AUTHENTISCH", authentic_desc: "Echte Menschen. Echte Momente.",
    connected: "VERBUNDEN", connected_desc: "Gemeinsam ansehen, chatten und spielen.", community_desc: "Ein Ort für alle, die dazugehören.", community_first: "COMMUNITY ZUERST", dont_watch: "NICHT NUR ZUSCHAUEN", be_part: "SEI DABEI",
    community_desc2: "Tritt der offiziellen n0w or neVer Discord-Community bei.", community_heading: "NICHT NUR ZUSCHAUEN — SEI DABEI", back_top: "NACH OBEN ↑", imprint: "Impressum", privacy: "Datenschutz", brand_tagline: "CLAN · LIVE · COMMUNITY",
    copyright: "crAzy cAp — n0w or neVer Clan. Alle Rechte vorbehalten."
  }
};

function setLanguage(lang) {
  if (!translations[lang]) lang = "en";
  const dict = translations[lang];
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.dataset.i18n;
    if (dict[key] !== undefined) el.textContent = dict[key];
  });
  document.querySelectorAll(".language-button").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.language === lang);
  });
  localStorage.setItem("n0w-or-neVer-language", lang);
  document.title = lang === "de" ? "n0w or neVer | Live mit crAzy cAp" : "n0w or neVer | Live by crAzy cAp";
}

document.querySelectorAll(".language-button").forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.language));
});

setLanguage(localStorage.getItem("n0w-or-neVer-language") || "en");


function updateLegalLinks(lang) {
  const imprint = document.getElementById("footerImprint");
  const privacy = document.getElementById("footerPrivacy");
  if (imprint) imprint.href = lang === "de" ? "impressum.html" : "imprint.html";
  if (privacy) privacy.href = lang === "de" ? "datenschutz.html" : "privacy-policy.html";
}
const originalSetLanguage = setLanguage;
setLanguage = function(lang) { originalSetLanguage(lang); updateLegalLinks(lang); };
updateLegalLinks(localStorage.getItem("n0w-or-neVer-language") || "en");
