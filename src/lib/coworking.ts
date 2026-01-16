export type Lang = "de" | "en";

export type CoworkingItem = {
  name: string;
  desc: string;
  url?: string;
};

type CityCoworking = {
  de: CoworkingItem[];
  en: CoworkingItem[];
};

const DATA: Record<string, CityCoworking> = {
  // ✅ Fertig gepflegt
  amsterdam: {
    de: [
      {
        name: "B. Amsterdam (Coworking Floor)",
        desc: "Großer Creative Campus mit flexiblem Coworking",
        url: "https://b-amsterdam.com/en/werkplekken/cowork-floor/",
      },
      {
        name: "TNW City",
        desc: "Tech-Coworking-Hub am Kanal (The Next Web)",
        url: "https://thenextweb.com/spaces/locations/city",
      },
      {
        name: "WeWork Amsterdam",
        desc: "Mehrere Locations, flexibel buchbar",
        url: "https://www.wework.com/l/coworking-space/amsterdam",
      },
    ],
    en: [
      {
        name: "B. Amsterdam (Coworking Floor)",
        desc: "Large creative campus with flexible coworking",
        url: "https://b-amsterdam.com/en/werkplekken/cowork-floor/",
      },
      {
        name: "TNW City",
        desc: "Tech coworking hub on the canal (The Next Web)",
        url: "https://thenextweb.com/spaces/locations/city",
      },
      {
        name: "WeWork Amsterdam",
        desc: "Multiple locations, flexible memberships",
        url: "https://www.wework.com/l/coworking-space/amsterdam",
      },
    ],
  },

  berlin: {
    de: [
      {
        name: "Mindspace Berlin",
        desc: "Premium Coworking / flexible Offices (mehrere Locations)",
        url: "https://www.mindspace.me/berlin/",
      },
      {
        name: "betahaus Berlin",
        desc: "Community Coworking (Kreuzberg) + Day Passes",
        url: "https://www.betahaus.com/coworking",
      },
      {
        name: "WeWork Berlin",
        desc: "Flexible Coworking-Spaces in mehreren Bezirken",
        url: "https://www.wework.com/l/coworking-space/berlin",
      },
    ],
    en: [
      {
        name: "Mindspace Berlin",
        desc: "Premium coworking / flexible offices (multiple locations)",
        url: "https://www.mindspace.me/berlin/",
      },
      {
        name: "betahaus Berlin",
        desc: "Community coworking (Kreuzberg) + day passes",
        url: "https://www.betahaus.com/coworking",
      },
      {
        name: "WeWork Berlin",
        desc: "Flexible coworking spaces across the city",
        url: "https://www.wework.com/l/coworking-space/berlin",
      },
    ],
  },

  prague: {
    de: [
      {
        name: "Opero (Coworking)",
        desc: "Stylish & professionell, gute Atmosphäre für Fokus-Tage",
        url: "https://opero.cz/en/",
      },
      {
        name: "Impact Hub Praha",
        desc: "Große Community, Events, gut zum Netzwerken",
        url: "https://www.impacthub.cz/",
      },
      {
        name: "Scott.Weber Workspace",
        desc: "Business-Setup, Meetingräume, mehrere Standorte",
        url: "https://scottweber.cz/en/",
      },
    ],
    en: [
      {
        name: "Opero (Coworking)",
        desc: "Stylish, professional vibe — great for deep work days",
        url: "https://opero.cz/en/",
      },
      {
        name: "Impact Hub Prague",
        desc: "Big community + events — solid networking",
        url: "https://www.impacthub.cz/",
      },
      {
        name: "Scott.Weber Workspace",
        desc: "Business-grade setup, meeting rooms, multiple locations",
        url: "https://scottweber.cz/en/",
      },
    ],
  },

  // ✅ NEU: Budapest (echte Coworkings)
  budapest: {
    de: [
      {
        name: "Kaptár Coworking Budapest",
        desc: "Etabliert, zentral, starke Community",
        url: "https://kaptarbudapest.hu/",
      },
      {
        name: "Impact Hub Budapest",
        desc: "Coworking + Events/Community (Networking)",
        url: "https://budapest.impacthub.net/",
      },
      {
        name: "FlowSpaces",
        desc: "Beliebt, fokussiert, gutes Setup für produktive Tage",
        url: "https://flowspaces.com/",
      },
    ],
    en: [
      {
        name: "Kaptár Coworking Budapest",
        desc: "Well-known, central, strong community",
        url: "https://kaptarbudapest.hu/",
      },
      {
        name: "Impact Hub Budapest",
        desc: "Coworking + events/community (networking)",
        url: "https://budapest.impacthub.net/",
      },
      {
        name: "FlowSpaces",
        desc: "Popular, focus-friendly, great setup for productive days",
        url: "https://flowspaces.com/",
      },
    ],
  },

  // ✅ NEU: Paris (echte Coworkings)
  paris: {
    de: [
      {
        name: "Station F",
        desc: "Großer Startup-Campus (Events + Community)",
        url: "https://stationf.co/",
      },
      {
        name: "Anticafé",
        desc: "Pay-by-time Café/Workspaces (mehrere Locations)",
        url: "https://www.anticafe.eu/",
      },
      {
        name: "WeWork Paris",
        desc: "Mehrere Standorte, flexibel buchbar",
        url: "https://www.wework.com/l/coworking-space/paris",
      },
    ],
    en: [
      {
        name: "Station F",
        desc: "Huge startup campus (events + community)",
        url: "https://stationf.co/",
      },
      {
        name: "Anticafé",
        desc: "Pay-by-time café workspaces (multiple locations)",
        url: "https://www.anticafe.eu/",
      },
      {
        name: "WeWork Paris",
        desc: "Multiple locations, flexible memberships",
        url: "https://www.wework.com/l/coworking-space/paris",
      },
    ],
  },

  // ✅ NEU: Rome (echte Coworkings)
  rome: {
    de: [
      {
        name: "Talent Garden Rome Ostiense",
        desc: "Coworking + Community/Events (modernes Setup)",
        url: "https://talentgarden.org/en/coworking/rome-ostiense/",
      },
      {
        name: "Impact Hub Rome",
        desc: "Coworking + Community (Networking)",
        url: "https://rome.impacthub.net/",
      },
      {
        name: "Regus Rome (Business Center)",
        desc: "Viele Standorte, zuverlässig für Meetings/Calls",
        url: "https://www.regus.com/en-gb/italy/rome",
      },
    ],
    en: [
      {
        name: "Talent Garden Rome Ostiense",
        desc: "Coworking + community/events (modern setup)",
        url: "https://talentgarden.org/en/coworking/rome-ostiense/",
      },
      {
        name: "Impact Hub Rome",
        desc: "Coworking + community (networking)",
        url: "https://rome.impacthub.net/",
      },
      {
        name: "Regus Rome (Business Center)",
        desc: "Many locations, reliable for meetings/calls",
        url: "https://www.regus.com/en-gb/italy/rome",
      },
    ],
  },

  // ✅ NEU: Malaga (echte Coworkings)
  malaga: {
    de: [
      {
        name: "The Living Room Coworking Málaga",
        desc: "Zentral, entspannt, gut für Remote-Worker",
        url: "https://thelivingroomcoworking.com/",
      },
      {
        name: "BIC Euronova (Coworking / Tech Park)",
        desc: "Business/Tech-Umfeld, professionelles Setup",
        url: "https://www.bic.es/",
      },
      {
        name: "Regus Málaga",
        desc: "Business Center, zuverlässig für Calls/Meetings",
        url: "https://www.regus.com/en-gb/spain/malaga",
      },
    ],
    en: [
      {
        name: "The Living Room Coworking Málaga",
        desc: "Central, relaxed, great for remote workers",
        url: "https://thelivingroomcoworking.com/",
      },
      {
        name: "BIC Euronova (Coworking / Tech Park)",
        desc: "Business/tech environment, professional setup",
        url: "https://www.bic.es/",
      },
      {
        name: "Regus Málaga",
        desc: "Business center, reliable for calls/meetings",
        url: "https://www.regus.com/en-gb/spain/malaga",
      },
    ],
  },

  // ⏳ Noch Platzhalter (später nur hier ergänzen)
  lisbon: {
    de: [
      { name: "Coworking (TBD)", desc: "2–3 echte Spots ergänzen wir als Nächstes", url: "" },
      { name: "Coworking (TBD)", desc: "Recherche + Links gemeinsam", url: "" },
      { name: "Tipp", desc: "Day-Pass testen, dann Paket wählen", url: "" },
    ],
    en: [
      { name: "Coworking (TBD)", desc: "we’ll add 2–3 real spots next", url: "" },
      { name: "Coworking (TBD)", desc: "research + links together", url: "" },
      { name: "Tip", desc: "try a day pass first, then choose a plan", url: "" },
    ],
  },

  zurich: {
    de: [
      { name: "Coworking (TBD)", desc: "2–3 echte Spots ergänzen wir als Nächstes", url: "" },
      { name: "Coworking (TBD)", desc: "Recherche + Links gemeinsam", url: "" },
      { name: "Tipp", desc: "Für Fokus: eher außerhalb vom Party-Spot wohnen", url: "" },
    ],
    en: [
      { name: "Coworking (TBD)", desc: "we’ll add 2–3 real spots next", url: "" },
      { name: "Coworking (TBD)", desc: "research + links together", url: "" },
      { name: "Tip", desc: "for focus: stay away from party hotspots", url: "" },
    ],
  },

  vienna: {
    de: [
      { name: "Coworking (TBD)", desc: "2–3 echte Spots ergänzen wir als Nächstes", url: "" },
      { name: "Coworking (TBD)", desc: "Recherche + Links gemeinsam", url: "" },
      { name: "Tipp", desc: "Zentrale Lage = praktisch, außenrum = ruhiger", url: "" },
    ],
    en: [
      { name: "Coworking (TBD)", desc: "we’ll add 2–3 real spots next", url: "" },
      { name: "Coworking (TBD)", desc: "research + links together", url: "" },
      { name: "Tip", desc: "central is convenient; outside is calmer", url: "" },
    ],
  },

  barcelona: {
    de: [
      { name: "Coworking (TBD)", desc: "2–3 echte Spots ergänzen wir als Nächstes", url: "" },
      { name: "Coworking (TBD)", desc: "Recherche + Links gemeinsam", url: "" },
      { name: "Tipp", desc: "Day-Pass testen, dann Paket wählen", url: "" },
    ],
    en: [
      { name: "Coworking (TBD)", desc: "we’ll add 2–3 real spots next", url: "" },
      { name: "Coworking (TBD)", desc: "research + links together", url: "" },
      { name: "Tip", desc: "try a day pass first, then choose a plan", url: "" },
    ],
  },
};

// DE/EN Slug -> Canonical Key
const ALIASES: Record<string, string> = {
  lissabon: "lisbon",
  lisbon: "lisbon",
  zuerich: "zurich",
  zurich: "zurich",
  wien: "vienna",
  vienna: "vienna",
  prag: "prague",
  prague: "prague",
  rom: "rome",
  rome: "rome",
};

function keyFromSlug(slug: string): string {
  const s = (slug || "").trim().toLowerCase();
  return ALIASES[s] ?? s;
}

export function getCoworking(cityKeyOrSlug: string, lang: Lang): CoworkingItem[] | null {
  const key = keyFromSlug(cityKeyOrSlug);
  const entry = DATA[key];
  if (!entry) return null;
  return lang === "de" ? entry.de : entry.en;
}

export function getCoworkingFromPathname(pathname: string, lang: Lang): CoworkingItem[] | null {
  // expected: /de/workation/<slug> or /en/workation/<slug>
  const parts = (pathname || "").split("/").filter(Boolean);
  const idx = parts.findIndex((p) => p === "workation");
  if (idx === -1) return null;
  const slug = parts[idx + 1];
  if (!slug) return null;
  return getCoworking(slug, lang);
}
