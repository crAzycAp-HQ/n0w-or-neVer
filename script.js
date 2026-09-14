/* =========================================================
   n0w or neVer — WEBSITE JAVASCRIPT
========================================================= */

const TWITCH_CHANNEL = "crazycaptv";
const TWITCH_URL = `https://www.twitch.tv/${TWITCH_CHANNEL}`;
const TWITCH_PARENT = "crazycap-hq.github.io";

const twitchPlayerFrame = document.getElementById("twitchPlayer");
const streamStatus = document.getElementById("streamStatus");
const statusDetail = document.getElementById("statusDetail");
const statusDot = document.getElementById("statusDot");
const chatLiveDot = document.getElementById("chatLiveDot");
const twitchChat = document.getElementById("twitchChat");
const headerTwitchButton = document.getElementById("headerTwitchButton");
const menuButton = document.getElementById("menuButton");
const languageSelect = document.getElementById("languageSelect");

headerTwitchButton.href = TWITCH_URL;
document.getElementById("year").textContent = new Date().getFullYear();

/* =========================================================
   TWITCH VIDEO PLAYER
========================================================= */

const videoIframe = document.createElement("iframe");
videoIframe.src = `https://player.twitch.tv/?channel=${TWITCH_CHANNEL}&parent=${TWITCH_PARENT}&muted=false`;
videoIframe.setAttribute("allowfullscreen", "true");
videoIframe.setAttribute("allow", "autoplay; fullscreen");
videoIframe.frameBorder = "0";
twitchPlayerFrame.appendChild(videoIframe);

streamStatus.textContent = "Twitch-Kanal";
statusDetail.textContent = "Live, wenn crAzy cAp streamt";
statusDot.classList.remove("live");
chatLiveDot.classList.add("offline");
twitchChat.src = `https://www.twitch.tv/embed/${TWITCH_CHANNEL}/chat?parent=${TWITCH_PARENT}&darkpopout`;

/* =========================================================
   LANGUAGES
   Brand names and PLAY / CONNECT / NEVER QUIT stay unchanged.
========================================================= */

const translations = {
  de: {
    pageTitle: "n0w or neVer | Live von crAzy cAp",
    description: "n0w or neVer — offizieller Clan, Livestream und Community von crAzy cAp.",
    nav: ["LIVE", "STREAMPLAN", "ÜBER UNS", "COMMUNITY"],
    heroEyebrow: "OFFIZIELLER n0w or neVer CLAN",
    heroDescription: "n0w or neVer ist der Clan und die Community von crAzy cAp. Gaming, Livemomente und ein Ort für alle, die mehr als nur einen weiteren Stream erleben wollen.",
    watchLive: "LIVE ANSEHEN",
    joinDiscord: "DISCORD BEITRETEN ↗",
    liveEyebrow: "LIVE-KANAL",
    liveHeading: "STREAM",
    liveAccent: "LIVE",
    status: "Twitch-Kanal",
    statusDetail: "Live, wenn crAzy cAp streamt",
    tag: "TWITCH LIVE",
    streamTitle: "n0w or neVer — Livestream",
    streamDescription: "Schau crAzy cAp direkt über die offizielle n0w or neVer Website live auf Twitch zu.",
    chatTitle: "LIVE-CHAT",
    chatSubtitle: "TWITCH-COMMUNITY",
    scheduleEyebrow: "DEMNÄCHST",
    scheduleHeading: "WAS KOMMT ALS NÄCHSTES",
    scheduleAccent: ".",
    scheduleIntro: "Der Streamplan richtet sich nach Spielen, Events und Community-Momenten, die wir gemeinsam erleben wollen.",
    schedule: [
      ["NÄCHSTER STREAM", "Freitag · 18:00 Uhr", "LIVE GAMING", "Spannendes Gameplay, Community-Interaktion und alles, was gerade im Moment passiert."],
      ["COMMUNITY", "ÖFFENTLICH", "LOUNGE · Sonntag · 18:00 Uhr", "Reden, spielen und gemeinsam Zeit mit der Community verbringen."],
      ["SPECIAL", "BALD", "EVENT-ABEND", "Besondere Streams, Challenges und Momente, die in Erinnerung bleiben."]
    ],
    aboutEyebrow: "DER CLAN",
    aboutHeading: "MEHR ALS",
    aboutStream: "EIN STREAM",
    aboutLead: "n0w or neVer ist ein Clan und eine Community von crAzy cAp rund um Gaming, Wettbewerb und echte Menschen, die gemeinsame Erlebnisse teilen.",
    aboutText: "Diese Plattform bringt die n0w or neVer Community rund um Live-Gaming, Twitch und Discord zusammen.",
    principles: [["ECHT", "Echte Menschen. Echte Momente."], ["VERBUNDEN", "Zuschauen, chatten und gemeinsam spielen."], ["COMMUNITY", "Ein Ort für alle, die dazugehören."]],
    communityEyebrow: "COMMUNITY ZUERST",
    communityHeading: "SCHAU NICHT NUR ZU",
    communityAccent: "SEI TEIL DAVON",
    communityText: "Werde Teil der offiziellen n0w or neVer Discord-Community.",
    watchStream: "STREAM ANSEHEN",
    footerRights: "Alle Rechte vorbehalten.",
    footerTop: "NACH OBEN ↑",
    footerImprint: "Impressum",
    footerPrivacy: "Datenschutz"
  },
  en: {
    pageTitle: "n0w or neVer | Live by crAzy cAp",
    description: "n0w or neVer — official clan, live stream and community by crAzy cAp.",
    nav: ["LIVE", "SCHEDULE", "ABOUT", "COMMUNITY"],
    heroEyebrow: "OFFICIAL n0w or neVer CLAN",
    heroDescription: "n0w or neVer is the clan and community built by crAzy cAp. Gaming, live moments and a place for people who want to be part of more than just another stream.",
    watchLive: "WATCH LIVE",
    joinDiscord: "JOIN DISCORD ↗",
    liveEyebrow: "LIVE CHANNEL",
    liveHeading: "WATCH THE",
    liveAccent: "STREAM",
    status: "Twitch channel",
    statusDetail: "Live when crAzy cAp is streaming",
    tag: "TWITCH LIVE",
    streamTitle: "n0w or neVer — Live Stream",
    streamDescription: "Watch crAzy cAp live on Twitch directly from the official n0w or neVer website.",
    chatTitle: "LIVE CHAT",
    chatSubtitle: "TWITCH COMMUNITY",
    scheduleEyebrow: "UPCOMING",
    scheduleHeading: "WHAT'S NEXT",
    scheduleAccent: ".",
    scheduleIntro: "The schedule changes with the games, events and community moments that deserve to be shared.",
    schedule: [["NEXT SESSION", "Friday at 6 p.m.", "LIVE GAMING", "Competitive gameplay, community interaction and everything happening in the moment."], ["COMMUNITY", "PUBLIC", "LOUNGE · Sunday at 6 p.m.", "Talk, play and connect with the people behind the community."], ["SPECIAL", "SOON", "EVENT NIGHT", "Special streams, challenges and moments worth remembering."]],
    aboutEyebrow: "THE CLAN",
    aboutHeading: "MORE THAN",
    aboutStream: "A STREAM",
    aboutLead: "n0w or neVer is a clan and community created by crAzy cAp around gaming, competition and real people sharing the experience together.",
    aboutText: "This platform brings the n0w or neVer community together around live gaming, Twitch and Discord.",
    principles: [["AUTHENTIC", "Real people. Real moments."], ["CONNECTED", "Watch, chat and play together."], ["COMMUNITY", "One place for everyone who belongs."]],
    communityEyebrow: "COMMUNITY FIRST",
    communityHeading: "DON'T JUST WATCH",
    communityAccent: "BE PART OF IT",
    communityText: "Join the official n0w or neVer Discord community.",
    watchStream: "WATCH THE STREAM",
    footerRights: "All rights reserved.",
    footerTop: "BACK TO TOP ↑",
    footerImprint: "Imprint",
    footerPrivacy: "Privacy Policy"
  }
};

function setLanguage(lang) {
  const t = translations[lang] || translations.de;
  document.documentElement.lang = lang;
  document.title = t.pageTitle;
  const meta = document.querySelector('meta[name="description"]');
  if (meta) meta.content = t.description;

  const navLinks = document.querySelectorAll(".desktop-nav a");
  t.nav.forEach((text, i) => { if (navLinks[i]) navLinks[i].textContent = text; });

  const setText = (selector, text) => { const el = document.querySelector(selector); if (el) el.textContent = text; };
  setText(".hero .eyebrow span:last-child", t.heroEyebrow);
  const heroP = document.querySelector(".hero-copy > p");
  if (heroP) { heroP.innerHTML = t.heroDescription.replace("crAzy cAp", "<strong>crAzy cAp</strong>"); }
  setText(".hero-actions .button-primary span", t.watchLive);
  setText(".hero-actions .button-ghost span", t.joinDiscord);
  setText(".live-section .section-heading .eyebrow span:last-child", t.liveEyebrow);
  const liveH2 = document.querySelector(".live-section .section-heading h2");
  if (liveH2) liveH2.innerHTML = `${t.liveHeading} <em>${t.liveAccent}</em>`;
  setText("#streamStatus", t.status);
  setText("#statusDetail", t.statusDetail);
  setText(".stream-info .tag", t.tag);
  setText(".stream-info h3", t.streamTitle);
  setText(".stream-info p", t.streamDescription);
  setText(".chat-header strong", t.chatTitle);
  setText(".chat-header > span:last-child", t.chatSubtitle);
  setText(".schedule-section .eyebrow span:last-child", t.scheduleEyebrow);
  const scheduleH2 = document.querySelector(".schedule-section h2");
  if (scheduleH2) scheduleH2.innerHTML = `${t.scheduleHeading}<em>${t.scheduleAccent}</em>`;
  setText(".schedule-section .section-intro", t.scheduleIntro);
  document.querySelectorAll(".schedule-card").forEach((card, i) => {
    const s=t.schedule[i];
    if (!s) return;
    const label=card.querySelector(".schedule-label"); const time=card.querySelector(".schedule-time"); const h3=card.querySelector("h3"); const p=card.querySelector("p");
    if(label) label.textContent=s[0]; if(time) time.textContent=s[1]; if(h3) h3.textContent=s[2]; if(p) p.textContent=s[3];
  });
  setText(".about-section .eyebrow span:last-child", t.aboutEyebrow);
  const aboutH2=document.querySelector(".about-big h2"); if(aboutH2) aboutH2.innerHTML=`${t.aboutHeading}<br>${t.aboutStream}<br><em>n0w or neVer</em>`;
  setText(".about-copy .lead", t.aboutLead); setText(".about-copy > p:not(.lead)", t.aboutText);
  document.querySelectorAll(".principles > div").forEach((el,i)=>{ const p=t.principles[i]; if(!p)return; const strong=el.querySelector("strong"); const text=el.querySelector("p"); if(strong)strong.textContent=p[0]; if(text)text.textContent=p[1]; });
  setText(".community-cta .eyebrow span:last-child", t.communityEyebrow);
  const ctaH2=document.querySelector(".community-cta h2"); if(ctaH2) ctaH2.innerHTML=`${t.communityHeading}<br><em>${t.communityAccent}</em>`;
  setText(".community-cta .cta-content > p", t.communityText);
  const ctaButtons=document.querySelectorAll(".community-cta .button"); if(ctaButtons[0]) ctaButtons[0].textContent=t.joinDiscord; if(ctaButtons[1]) ctaButtons[1].textContent=t.watchStream;
  const footerSpans=document.querySelectorAll("footer > span"); if(footerSpans[0]) footerSpans[0].innerHTML=`© <span id="year">${new Date().getFullYear()}</span> crAzy cAp — n0w or neVer Clan. ${t.footerRights}`;
  setText("footer .footer-legal a:first-child", t.footerImprint); setText("footer .footer-legal a:last-child", t.footerPrivacy);
  const footerLinks = document.querySelectorAll("footer > a");
  if(footerLinks.length) footerLinks[0].textContent=t.footerTop;
  if(languageSelect.value!==lang) languageSelect.value=lang;
  localStorage.setItem("n0w-or-neVer-language", lang);
}

function getInitialLanguage() {
  const saved=localStorage.getItem("n0w-or-neVer-language");
  if(saved && translations[saved]) return saved;
  return (navigator.language || "de").toLowerCase().startsWith("en") ? "en" : "de";
}

languageSelect.addEventListener("change", () => setLanguage(languageSelect.value));
setLanguage(getInitialLanguage());

/* =========================================================
   MOBILE MENU
========================================================= */

menuButton.addEventListener("click", () => {
  const nav=document.querySelector(".desktop-nav");
  const open=nav.classList.toggle("mobile-open");
  menuButton.setAttribute("aria-expanded", String(open));
});

document.querySelectorAll(".desktop-nav a").forEach(link => {
  link.addEventListener("click", () => {
    document.querySelector(".desktop-nav").classList.remove("mobile-open");
    menuButton.setAttribute("aria-expanded", "false");
  });
});
