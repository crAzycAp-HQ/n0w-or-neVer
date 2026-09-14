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
   LANGUAGE SWITCHER
========================================================= */

const translations = {
  de: {
    navLive: "LIVE",
    navSchedule: "STREAMPLAN",
    navAbout: "ÜBER UNS",
    navCommunity: "COMMUNITY",
    heroEyebrow: "OFFIZIELLER n0w or neVer CLAN",
    heroDescription: "n0w or neVer ist der Clan und die Community von <strong>crAzy cAp</strong>. Gaming, Live-Momente und ein Ort für alle, die mehr wollen als nur einen weiteren Stream.",
    heroWatch: "LIVE ANSEHEN",
    joinDiscord: "DISCORD BEITRETEN ↗",
    metaClan: "CLAN-IDENTITÄT",
    metaStream: "TWITCH-STREAM",
    metaCreator: "GRÜNDER & INHABER",
    liveEyebrow: "LIVE-KANAL",
    liveHeadingPrefix: "LIVE-",
    streamWord: "STREAM",
    statusChannel: "Twitch-Kanal",
    statusLoading: "Player wird geladen…",
    twitchLive: "LIVE AUF TWITCH",
    streamTitle: "n0w or neVer — Live-Stream",
    streamDescription: "Schau crAzy cAp direkt auf der offiziellen n0w or neVer Website live auf Twitch zu.",
    liveChat: "LIVE-CHAT",
    twitchCommunity: "TWITCH-COMMUNITY",
    upcoming: "KOMMENDE TERMINE",
    whatsNextPrefix: "WAS KOMMT ALS",
    whatsNext: "NÄCHSTES.",
    scheduleIntro: "Der Streamplan richtet sich nach Spielen, Events und Community-Momenten, die gemeinsam erlebt werden sollen.",
    nextSession: "NÄCHSTE SESSION",
    fridayTime: "Freitag · 18:00 Uhr",
    liveGaming: "LIVE-GAMING",
    liveGamingText: "Wettkampf, Community-Interaktion und alles, was gerade im Moment passiert.",
    public: "ÖFFENTLICH",
    loungeTime: "LOUNGE · Sonntag · 18:00 Uhr",
    loungeText: "Reden, spielen und sich mit den Menschen hinter der Community verbinden.",
    special: "SONDER-EVENT",
    soon: "BALD",
    eventNight: "EVENT-ABEND",
    eventText: "Spezielle Streams, Challenges und Momente, die in Erinnerung bleiben.",
    theClan: "DER CLAN",
    moreThan: "MEHR ALS",
    aStream: "EIN STREAM",
    aboutLead: "n0w or neVer ist ein Clan und eine Community von crAzy cAp – rund um Gaming, Wettbewerb und echte Menschen, die ihre Erlebnisse miteinander teilen.",
    aboutText: "Diese Plattform bringt die n0w or neVer Community rund um Live-Gaming, Twitch und Discord zusammen.",
    authentic: "AUTHENTISCH",
    authenticText: "Echte Menschen. Echte Momente.",
    connected: "VERBUNDEN",
    connectedText: "Gemeinsam zuschauen, chatten und spielen.",
    communityFirst: "COMMUNITY ZUERST",
    dontJustWatch: "SCHAU NICHT NUR ZU",
    bePart: "SEI TEIL DAVON",
    joinCommunity: "Tritt der offiziellen n0w or neVer Discord-Community bei.",
    watchStream: "STREAM ANSEHEN",
    rights: "Alle Rechte vorbehalten.",
    imprint: "Impressum",
    privacy: "Datenschutz",
    backTop: "NACH OBEN ↑",
    title: "n0w or neVer | Live von crAzy cAp",
    description: "n0w or neVer — offizieller Clan, Livestream und Community von crAzy cAp."
  },
  en: {
    navLive: "LIVE",
    navSchedule: "SCHEDULE",
    navAbout: "ABOUT",
    navCommunity: "COMMUNITY",
    heroEyebrow: "OFFICIAL n0w or neVer CLAN",
    heroDescription: "n0w or neVer is the clan and community built by <strong>crAzy cAp</strong>. Gaming, live moments and a place for people who want to be part of more than just another stream.",
    heroWatch: "WATCH LIVE",
    joinDiscord: "JOIN DISCORD ↗",
    metaClan: "CLAN IDENTITY",
    metaStream: "TWITCH STREAM",
    metaCreator: "CREATOR & OWNER",
    liveEyebrow: "LIVE CHANNEL",
    liveHeadingPrefix: "WATCH THE",
    streamWord: "STREAM",
    statusChannel: "Twitch channel",
    statusLoading: "Loading player…",
    twitchLive: "TWITCH LIVE",
    streamTitle: "n0w or neVer — Live Stream",
    streamDescription: "Watch crAzy cAp live on Twitch directly from the official n0w or neVer website.",
    liveChat: "LIVE CHAT",
    twitchCommunity: "TWITCH COMMUNITY",
    upcoming: "UPCOMING",
    whatsNextPrefix: "WHAT'S",
    whatsNext: "NEXT.",
    scheduleIntro: "The schedule changes with the games, events and community moments that deserve to be shared.",
    nextSession: "NEXT SESSION",
    fridayTime: "Friday · 6 p.m.",
    liveGaming: "LIVE GAMING",
    liveGamingText: "Competitive gameplay, community interaction and everything happening in the moment.",
    public: "PUBLIC",
    loungeTime: "LOUNGE · Sunday · 6 p.m.",
    loungeText: "Talk, play and connect with the people behind the community.",
    special: "SPECIAL",
    soon: "SOON",
    eventNight: "EVENT NIGHT",
    eventText: "Special streams, challenges and moments worth remembering.",
    theClan: "THE CLAN",
    moreThan: "MORE THAN",
    aStream: "A STREAM",
    aboutLead: "n0w or neVer is a clan and community created by crAzy cAp around gaming, competition and real people sharing the experience together.",
    aboutText: "This platform brings the n0w or neVer community together around live gaming, Twitch and Discord.",
    authentic: "AUTHENTIC",
    authenticText: "Real people. Real moments.",
    connected: "CONNECTED",
    connectedText: "Watch, chat and play together.",
    communityFirst: "COMMUNITY FIRST",
    dontJustWatch: "DON'T JUST WATCH",
    bePart: "BE PART OF IT",
    joinCommunity: "Join the official n0w or neVer Discord community.",
    watchStream: "WATCH THE STREAM",
    rights: "All rights reserved.",
    imprint: "Imprint",
    privacy: "Privacy Policy",
    backTop: "BACK TO TOP ↑",
    title: "n0w or neVer | Live by crAzy cAp",
    description: "n0w or neVer — official clan, live stream and community by crAzy cAp."
  }
};

function applyLanguage(language) {
  const lang = translations[language] ? language : "de";
  const t = translations[lang];

  document.documentElement.lang = lang;

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    if (t[key] !== undefined) {
      if (key === "heroDescription") {
        element.innerHTML = t[key];
      } else {
        element.textContent = t[key];
      }
    }
  });

  document.title = t.title;

  const description = document.querySelector('meta[name="description"]');
  if (description) description.setAttribute("content", t.description);

  const status = document.getElementById("streamStatus");
  const detail = document.getElementById("statusDetail");
  if (status) status.textContent = t.statusChannel;
  if (detail) detail.textContent = t.statusLoading;

  const select = document.getElementById("languageSelect");
  if (select) select.value = lang;

  localStorage.setItem("n0wOrNeverLanguage", lang);
}

const languageSelect = document.getElementById("languageSelect");

if (languageSelect) {
  languageSelect.addEventListener("change", () => {
    applyLanguage(languageSelect.value);
  });
}

const savedLanguage = localStorage.getItem("n0wOrNeverLanguage");
const browserLanguage = (navigator.language || "").toLowerCase().startsWith("de") ? "de" : "en";
applyLanguage(savedLanguage || browserLanguage);
