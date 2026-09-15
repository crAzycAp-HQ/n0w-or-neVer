/* =========================================================
   SITE SETTINGS
========================================================= */

const TWITCH_CHANNEL = "crazycaptv";
const TWITCH_URL = `https://www.twitch.tv/${TWITCH_CHANNEL}`;
const TWITCH_PARENT = "crazycap-hq.github.io";

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
const languageSelect = document.getElementById("languageSelect");

/* =========================================================
   TRANSLATIONS
========================================================= */

const translations = {
  de: {
    "nav.live": "LIVE",
    "nav.schedule": "PLAN",
    "nav.about": "ÜBER UNS",
    "nav.community": "COMMUNITY",
    "hero.eyebrow": "OFFIZIELLER n0w or neVer CLAN",
    "hero.watch": "LIVE ANSEHEN",
    "common.discord": "DISCORD BEITRETEN ↗",
    "hero.p1": "n0w or neVer ist der Clan und die Community von",
    "hero.p2": "Gaming, Live-Momente und ein Ort für alle, die",
    "hero.p3": "mehr wollen als nur einen weiteren Stream.",
    "hero.description": "n0w or neVer ist der Clan und die Community von <strong>crAzy cAp</strong>. Gaming, Live-Momente und ein Ort für alle, die mehr wollen als nur einen weiteren Stream.",
    "live.eyebrow": "LIVE-KANAL",
    "live.heading": "DEN",
    "live.stream": "STREAM ANSEHEN",
    "live.tag": "TWITCH LIVE",
    "live.title": "n0w or neVer — Livestream",
    "live.description": "Sieh crAzy cAp live auf Twitch direkt auf der offiziellen n0w or neVer Website.",
    "chat.live": "LIVE-CHAT",
    "chat.community": "TWITCH COMMUNITY",
    "schedule.eyebrow": "ALS NÄCHSTES",
    "schedule.heading": "WAS KOMMT",
    "schedule.next": "ALS NÄCHSTES.",
    "schedule.intro1": "Der Zeitplan richtet sich nach Games,",
    "schedule.intro2": "Events und Community-Momenten, die es wert sind,",
    "schedule.intro3": "geteilt zu werden.",
    "schedule.nextSession": "NÄCHSTE SESSION",
    "schedule.friday": "Freitag · 18:00 Uhr",
    "schedule.liveGaming": "LIVE GAMING",
    "schedule.desc1": "Kompetitives Gameplay,",
    "schedule.desc2": "Community-Interaktion und",
    "schedule.desc3": "alles, was gerade passiert.",
    "schedule.community": "COMMUNITY",
    "schedule.public": "ÖFFENTLICH",
    "schedule.lounge": "LOUNGE · Sonntag · 18:00 Uhr",
    "schedule.desc4": "Reden, spielen und verbinden",
    "schedule.desc5": "mit den Menschen hinter",
    "schedule.desc6": "der Community.",
    "schedule.special": "SPECIAL",
    "schedule.soon": "BALD",
    "schedule.event": "EVENT-NACHT",
    "schedule.desc7": "Besondere Streams,",
    "schedule.desc8": "Challenges und Momente,",
    "schedule.desc9": "an die man sich erinnert.",
    "about.eyebrow": "DER CLAN",
    "about.heading1": "MEHR ALS",
    "about.heading2": "EIN STREAM",
    "about.lead1": "n0w or neVer ist ein Clan und eine Community,",
    "about.lead2": "gegründet von crAzy cAp rund um Gaming,",
    "about.lead3": "Wettkampf und echte Menschen, die",
    "about.lead4": "gemeinsam Erlebnisse teilen.",
    "about.description": "Diese Plattform bringt die n0w or neVer Community rund um Live-Gaming, Twitch und Discord zusammen.",
    "about.authentic": "AUTHENTISCH",
    "about.authenticDesc": "Echte Menschen. Echte Momente.",
    "about.connected": "VERBUNDEN",
    "about.connectedDesc": "Gemeinsam schauen, chatten und spielen.",
    "about.communityDesc": "Ein Ort für alle, die dazugehören.",
    "community.eyebrow": "COMMUNITY ZUERST",
    "community.heading1": "NICHT NUR ZUSCHAUEN",
    "community.heading2": "SEI DABEI",
    "community.description": "Tritt der offiziellen n0w or neVer Discord Community bei.",
    "community.watch": "STREAM ANSEHEN",
    "footer.copyright": "crAzy cAp — n0w or neVer Clan.",
    "footer.rights": "Alle Rechte vorbehalten.",
    "footer.imprint": "Impressum",
    "footer.privacy": "Datenschutz",
    "footer.top": "NACH OBEN ↑",
    "legal.back": "← ZURÜCK ZUR STARTSEITE",
    "legal.imprint.title": "Impressum",
    "legal.imprint.intro": "Angaben gemäß § 5 DDG. Diese Seite ist nach deutschem Recht erforderlich, da der Betreiber seinen Sitz in Deutschland hat – unabhängig davon, in welcher Sprache die Website verfasst ist.",
    "legal.contact": "Kontakt",
    "legal.email": "E-Mail:",
    "legal.content": "Haftung für Inhalte",
    "legal.content.text": "Als Diensteanbieter sind wir nach den allgemeinen Gesetzen für eigene Inhalte auf dieser Website verantwortlich. Wir sind jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben davon unberührt.",
    "legal.links": "Haftung für Links",
    "legal.links.text": "Diese Website enthält Links zu externen Websites Dritter (z. B. Twitch und Discord), auf deren Inhalte wir keinen Einfluss haben. Für diese fremden Inhalte können wir daher keine Haftung übernehmen. Für den Inhalt der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft; rechtswidrige Inhalte waren zu diesem Zeitpunkt nicht erkennbar. Eine permanente Überwachung der verlinkten Seiten ist ohne konkrete Anhaltspunkte für eine Rechtsverletzung nicht zumutbar.",
    "legal.copyright": "Urheberrecht",
    "legal.copyright.text": "Die vom Seitenbetreiber erstellten Inhalte und Werke auf dieser Website (einschließlich Logo und Texte) unterliegen dem deutschen Urheberrecht. Beiträge Dritter sind entsprechend gekennzeichnet. Downloads und Kopien dieser Website sind nur für den privaten, nicht-kommerziellen Gebrauch gestattet.",
    "legal.privacy.title": "Datenschutzerklärung",
    "legal.privacy.intro": "Diese Datenschutzerklärung basiert auf der Datenschutz-Grundverordnung (DSGVO), die gilt, weil der Betreiber seinen Sitz in Deutschland bzw. der EU hat – unabhängig von der Sprache dieser Website.",
    "legal.controller": "1. Verantwortlicher",
    "legal.controller.text": "Verantwortlich für die Datenverarbeitung auf dieser Website ist:",
    "legal.hosting": "2. Hosting (GitHub Pages)",
    "legal.hosting.text": "Diese Website wird über GitHub Pages, einen Dienst von GitHub, Inc. (Microsoft Corporation), mit Sitz in den USA gehostet. Beim Besuch der Website verarbeitet GitHub automatisch technische Daten wie IP-Adresse, Datum und Uhrzeit des Zugriffs, Browsertyp und das angeforderte Dokument (Server-Logdateien). Diese Verarbeitung ist technisch erforderlich, um die Website bereitzustellen (Art. 6 Abs. 1 lit. f DSGVO). Weitere Informationen findest du in der Datenschutzerklärung von GitHub:",
    "legal.twitch": "3. Eingebettete Twitch-Inhalte",
    "legal.twitch.text": "Diese Website bindet den Twitch-Livestream-Player und den Live-Chat ein (Betreiber: Twitch Interactive, Inc., ein Unternehmen von Amazon.com, Inc., USA). Beim Laden der Startseite oder des Live-Bereichs wird automatisch eine Verbindung zu den Servern von Twitch hergestellt, wodurch Twitch darüber informiert wird, dass diese Website aufgerufen wurde. Dabei können Cookies gesetzt und Daten wie die IP-Adresse an Twitch/Amazon (einschließlich in die USA) übertragen werden. Die Einbindung erfolgt auf Grundlage unseres berechtigten Interesses an der Darstellung unseres Streams (Art. 6 Abs. 1 lit. f DSGVO). Weitere Informationen findest du in der Datenschutzerklärung von Twitch:",
    "legal.fonts": "4. Schriftarten",
    "legal.fonts.text": "Diese Website lädt ihre Schriftarten lokal (Self-Hosting). Es wird keine Verbindung zu Drittanbietern wie Google Fonts hergestellt und keine Daten an einen Schriftanbieter übertragen.",
    "legal.discord": "5. Links zu Discord",
    "legal.discord.text": "Diese Website enthält einen Link zu unserem Discord-Server. Erst nach einem aktiven Klick führt der Link zu Discord – allein durch den Besuch dieser Website werden keine Daten an Discord übertragen. Nach dem Aufruf von Discord gilt die Datenschutzerklärung von Discord Inc.",
    "legal.rights": "6. Deine Rechte als betroffene Person",
    "legal.rights.intro": "Du hast jederzeit das Recht auf:",
    "legal.rights.list": "Auskunft über die zu deiner Person gespeicherten Daten (Art. 15 DSGVO)|Berichtigung unrichtiger Daten (Art. 16 DSGVO)|Löschung deiner Daten (Art. 17 DSGVO)|Einschränkung der Verarbeitung (Art. 18 DSGVO)|Datenübertragbarkeit (Art. 20 DSGVO)|Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)|Beschwerde bei einer Datenschutzaufsichtsbehörde",
    "legal.rights.outro": "Zur Ausübung dieser Rechte genügt eine Kontaktaufnahme über die oben genannte E-Mail-Adresse.",
    "legal.changes": "7. Änderungen dieser Datenschutzerklärung",
    "legal.changes.text": "Wir behalten uns vor, diese Datenschutzerklärung zu aktualisieren, wenn sich die Funktionen der Website ändern (z. B. durch eine spätere Integration eines Merch-Shops, von Sponsoren oder Analyse-Tools). Es gilt jeweils die auf dieser Seite veröffentlichte Fassung."
  },
  en: {
    "nav.live": "LIVE",
    "nav.schedule": "SCHEDULE",
    "nav.about": "ABOUT",
    "nav.community": "COMMUNITY",
    "hero.eyebrow": "OFFICIAL n0w or neVer CLAN",
    "hero.watch": "WATCH LIVE",
    "common.discord": "JOIN DISCORD ↗",
    "hero.p1": "n0w or neVer is the clan and community built by",
    "hero.p2": "Gaming, live moments and a place for people who want",
    "hero.p3": "to be part of more than just another stream.",
    "hero.description": "n0w or neVer is the clan and community built by <strong>crAzy cAp</strong>. Gaming, live moments and a place for people who want to be part of more than just another stream.",
    "live.eyebrow": "LIVE CHANNEL",
    "live.heading": "WATCH THE",
    "live.stream": "STREAM",
    "live.tag": "TWITCH LIVE",
    "live.title": "n0w or neVer — Live Stream",
    "live.description": "Watch crAzy cAp live on Twitch directly from the official n0w or neVer website.",
    "chat.live": "LIVE CHAT",
    "chat.community": "TWITCH COMMUNITY",
    "schedule.eyebrow": "UPCOMING",
    "schedule.heading": "WHAT'S",
    "schedule.next": "NEXT.",
    "schedule.intro": "The schedule changes with the games, events and community moments that deserve to be shared.",
    "schedule.nextSession": "NEXT SESSION",
    "schedule.friday": "Friday · 18:00",
    "schedule.liveGaming": "LIVE GAMING",
    "schedule.desc1": "Competitive gameplay,",
    "schedule.desc2": "community interaction and",
    "schedule.desc3": "everything happening in the moment.",
    "schedule.community": "COMMUNITY",
    "schedule.public": "PUBLIC",
    "schedule.lounge": "LOUNGE · Sunday · 18:00",
    "schedule.desc4": "Talk, play and connect",
    "schedule.desc5": "with the people behind",
    "schedule.desc6": "the community.",
    "schedule.special": "SPECIAL",
    "schedule.soon": "SOON",
    "schedule.event": "EVENT NIGHT",
    "schedule.desc7": "Special streams,",
    "schedule.desc8": "challenges and moments",
    "schedule.desc9": "worth remembering.",
    "about.eyebrow": "THE CLAN",
    "about.heading1": "MORE THAN",
    "about.heading2": "A STREAM",
    "about.lead": "n0w or neVer is a clan and community created by crAzy cAp around gaming, competition and real people sharing the experience together.",
    "about.description": "This platform brings the n0w or neVer community together around live gaming, Twitch and Discord.",
    "about.authentic": "AUTHENTIC",
    "about.authenticDesc": "Real people. Real moments.",
    "about.connected": "CONNECTED",
    "about.connectedDesc": "Watch, chat and play together.",
    "about.communityDesc": "One place for everyone who belongs.",
    "community.eyebrow": "COMMUNITY FIRST",
    "community.heading1": "DON'T JUST WATCH",
    "community.heading2": "BE PART OF IT",
    "community.description": "Join the official n0w or neVer Discord community.",
    "community.watch": "WATCH THE STREAM",
    "footer.copyright": "crAzy cAp — n0w or neVer Clan.",
    "footer.rights": "All rights reserved.",
    "footer.imprint": "Imprint",
    "footer.privacy": "Privacy Policy",
    "footer.top": "BACK TO TOP ↑",
    "legal.back": "← BACK TO HOME",
    "legal.imprint.title": "Imprint",
    "legal.imprint.intro": "Information according to § 5 DDG (German Digital Services Act). This page is required under German law because the site operator is based in Germany — regardless of the language the site is written in.",
    "legal.contact": "Contact",
    "legal.email": "Email:",
    "legal.content": "Liability for content",
    "legal.content.text": "As a service provider, we are responsible for our own content on this website in accordance with general laws. However, we are not obligated to monitor transmitted or stored third-party information, or to investigate circumstances that indicate illegal activity. Obligations to remove or block the use of information under general laws remain unaffected by this.",
    "legal.links": "Liability for links",
    "legal.links.text": "This website contains links to external third-party websites (e.g. Twitch and Discord) over whose content we have no influence. We therefore cannot accept liability for this third-party content. The respective provider or operator of the linked pages is always responsible for their content. The linked pages were checked for possible legal violations at the time of linking; no illegal content was recognizable at that time. Permanent monitoring of linked pages' content is not reasonable without concrete evidence of a legal violation.",
    "legal.copyright": "Copyright",
    "legal.copyright.text": "The content and works created by the site operator on this website (including the logo and text) are subject to German copyright law. Third-party contributions are marked as such. Downloads and copies of this site are only permitted for private, non-commercial use.",
    "legal.privacy.title": "Privacy Policy",
    "legal.privacy.intro": "This policy is written under the GDPR (General Data Protection Regulation), which applies because the site operator is based in the EU/Germany — regardless of the language of the site.",
    "legal.controller": "1. Controller",
    "legal.controller.text": "The party responsible for data processing on this website is:",
    "legal.hosting": "2. Hosting (GitHub Pages)",
    "legal.hosting.text": "This website is hosted via GitHub Pages, a service of GitHub, Inc. (a Microsoft Corporation company), based in the USA. When you visit this website, GitHub automatically processes technical data such as your IP address, date and time of access, browser type, and the requested document (server log files). This processing is technically necessary to provide the website (Art. 6 (1)(f) GDPR). More information can be found in GitHub's own privacy statement:",
    "legal.twitch": "3. Embedded Twitch content",
    "legal.twitch.text": "This website embeds the Twitch livestream player and live chat (operator: Twitch Interactive, Inc., a subsidiary of Amazon.com, Inc., USA). When you load the homepage or the live section, a connection is automatically made to Twitch's servers, so Twitch is informed that this website was accessed. Cookies may be set and data such as your IP address may be transferred to Twitch/Amazon (including to the USA). This embedding is based on our legitimate interest in presenting our stream (Art. 6 (1)(f) GDPR). More information is available in Twitch's privacy policy:",
    "legal.fonts": "4. Fonts",
    "legal.fonts.text": "This website loads its fonts locally (self-hosted). No connection is made to third-party servers (e.g. Google Fonts), and no data is transferred to any font provider.",
    "legal.discord": "5. Links to Discord",
    "legal.discord.text": "This website contains a link to our Discord server. This link only leads to Discord after an active click — simply visiting this website does not transfer any data to Discord. Once you follow the link, Discord Inc.'s own privacy policy applies.",
    "legal.rights": "6. Your rights as a data subject",
    "legal.rights.intro": "You have the right, at any time, to:",
    "legal.rights.list": "Access the data stored about you (Art. 15 GDPR)|Rectification of inaccurate data (Art. 16 GDPR)|Erasure of your data (Art. 17 GDPR)|Restriction of processing (Art. 18 GDPR)|Data portability (Art. 20 GDPR)|Object to processing (Art. 21 GDPR)|Lodge a complaint with a data protection supervisory authority",
    "legal.rights.outro": "To exercise these rights, simply contact us at the email address above.",
    "legal.changes": "7. Changes to this privacy policy",
    "legal.changes.text": "We reserve the right to update this privacy policy as the functionality of the website changes (e.g. future integration of a merch shop, sponsors, or analytics tools). The version published on this page at any given time applies."
  }
};

function applyLanguage(lang) {
  const selected = translations[lang] ? lang : "de";
  document.documentElement.lang = selected;

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    if (translations[selected][key] !== undefined) {
      if (key === "hero.description") {
        element.innerHTML = translations[selected][key];
      } else {
        element.textContent = translations[selected][key];
      }
    }
  });

  if (document.body.dataset.page === "imprint") {
    document.title = selected === "de" ? "Impressum | n0w or neVer" : "Imprint | n0w or neVer";
  } else if (document.body.dataset.page === "privacy") {
    document.title = selected === "de" ? "Datenschutz | n0w or neVer" : "Privacy Policy | n0w or neVer";
  } else {
    document.title = "n0w or neVer | Live by crAzy cAp";
  }

  const legalList = document.getElementById("legalRightsList");
  if (legalList && translations[selected]["legal.rights.list"]) {
    legalList.innerHTML = translations[selected]["legal.rights.list"]
      .split("|")
      .map(item => `<li>${item}</li>`)
      .join("");
  }

  if (languageSelect) {
    languageSelect.value = selected;
  }

  localStorage.setItem("siteLanguage", selected);
}

const savedLanguage = localStorage.getItem("siteLanguage") || "de";
applyLanguage(savedLanguage);

languageSelect?.addEventListener("change", (event) => {
  applyLanguage(event.target.value);
});

/* =========================================================
   BASIC SETTINGS
========================================================= */

if (headerTwitchButton) {
  headerTwitchButton.href = TWITCH_URL;
}

const yearElement = document.getElementById("year");
if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

/* =========================================================
   TWITCH VIDEO PLAYER
========================================================= */

if (twitchPlayerFrame) {
  const videoIframe = document.createElement("iframe");

  videoIframe.src =
    `https://player.twitch.tv/?channel=${TWITCH_CHANNEL}&parent=${TWITCH_PARENT}&muted=false`;

  videoIframe.setAttribute("allowfullscreen", "true");
  videoIframe.setAttribute("allow", "autoplay; fullscreen");
  videoIframe.frameBorder = "0";

  twitchPlayerFrame.appendChild(videoIframe);

  streamStatus.textContent = "Twitch channel";
  statusDetail.textContent = "Live when crAzy cAp is streaming";
  statusDot.classList.remove("live");
  chatLiveDot.classList.add("offline");

  if (twitchChat) {
    twitchChat.src =
      `https://www.twitch.tv/embed/${TWITCH_CHANNEL}/chat?parent=${TWITCH_PARENT}&darkpopout`;
  }
}

/* =========================================================
   MOBILE MENU
========================================================= */

if (menuButton) {
  menuButton.addEventListener("click", () => {
    document.querySelector(".desktop-nav")?.classList.toggle("mobile-open");
  });
}

document.querySelectorAll(".desktop-nav a").forEach((link) => {
  link.addEventListener("click", () => {
    document.querySelector(".desktop-nav")?.classList.remove("mobile-open");
  });
});
