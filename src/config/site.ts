/**
 * Zentrale Stammdaten der Website.
 *
 * ALLE noch offenen Angaben stehen ausschließlich hier und sind mit
 * TODO markiert. Kein anderer Ort im Projekt enthält Platzhalter.
 * Sobald ein Wert hier gefüllt ist, greift er auf allen Seiten.
 */

export const site = {
  name: 'Elvora',
  domain: 'elvora.me',
  url: 'https://elvora.me',
  /** Kurzbeschreibung, u. a. für OpenGraph-Fallback und JSON-LD. */
  tagline: 'Digitalagentur für Handwerks- und Dienstleistungsbetriebe in Essen',
} as const;

/** Geschäftsadresse. Bestätigt. */
export const address = {
  street: 'Prinzenstraße 58A',
  postalCode: '45355',
  city: 'Essen',
  region: 'Nordrhein-Westfalen',
  country: 'DE',
} as const;

/**
 * Kontaktwege.
 *
 * WICHTIG zur Schreibweise:
 *  - `phoneRaw` / `whatsappRaw` im internationalen Format ohne Zeichen
 *    (E.164 ohne führendes Plus), z. B. '4920112345678'. Wird für tel:- und
 *    wa.me-Links verwendet.
 *  - `phoneDisplay` ist die menschenlesbare Fassung für die Anzeige.
 */
export const contact = {
  // TODO: echte Rufnummer eintragen
  phoneRaw: '4920100000000',
  phoneDisplay: '0201 000000',
  // TODO: echte WhatsApp-Nummer eintragen (häufig identisch mit der Mobilnummer)
  whatsappRaw: '4917000000000',
  // TODO: echte E-Mail-Adresse eintragen
  email: 'kontakt@elvora.me',
  /** Vorbelegter Text des WhatsApp-Links. */
  whatsappText: 'Guten Tag, ich interessiere mich für Ihre Unterstützung.',
} as const;

export const contactLinks = {
  tel: `tel:+${contact.phoneRaw}`,
  whatsapp: `https://wa.me/${contact.whatsappRaw}?text=${encodeURIComponent(contact.whatsappText)}`,
  mail: `mailto:${contact.email}`,
} as const;

/** Erreichbarkeit — fließt in JSON-LD und in die Kontaktseite. */
export const openingHours = {
  display: 'Montag bis Freitag, 8 bis 18 Uhr',
  schema: ['Mo-Fr 08:00-18:00'],
} as const;

/**
 * Terminbuchung über cal.com.
 * `link` ist der Pfad hinter cal.com, also Benutzername/Event-Typ.
 */
export const booking = {
  // TODO: echten cal.com-Link eintragen, z. B. 'elvora/erstgespraech'
  link: 'elvora/erstgespraech',
  get url() {
    return `https://cal.com/${this.link}`;
  },
  /** Dauer, wie sie im Umfeld des CTA kommuniziert wird. */
  durationLabel: '15 Minuten',
} as const;

/**
 * Web3Forms.
 * Der Access Key ist ein öffentlicher Schlüssel und darf im Quelltext stehen.
 */
export const forms = {
  // TODO: echten Web3Forms Access Key eintragen
  accessKey: 'REPLACE_WITH_WEB3FORMS_ACCESS_KEY',
  endpoint: 'https://api.web3forms.com/submit',
  subject: 'Neue Anfrage über elvora.me',
  redirectPath: '/kontakt/danke/',
} as const;

/**
 * Google-Bewertungen. Erscheinen im ersten Sichtbereich der Startseite.
 *
 * `enabled: false` blendet den Bewertungsbeleg überall aus — so steht nie
 * eine Bewertungsbehauptung ohne Grundlage auf der Seite.
 */
export const reviews = {
  // TODO: auf true setzen, sobald echte Bewertungen vorliegen
  enabled: false,
  // TODO: echten Schnitt und echte Anzahl eintragen
  rating: 5.0,
  count: 0,
  // TODO: Link zum Google-Unternehmensprofil
  profileUrl: '',
  /** Einzelstimmen für den ausführlichen Bewertungsabschnitt. */
  items: [] as Array<{
    author: string;
    business?: string;
    rating: number;
    text: string;
    date: string;
  }>,
} as const;

/**
 * Handlungsaufrufe.
 *
 * Grundregel: genau EIN Haupt-CTA, farblich hervorgehoben. Der sekundäre
 * CTA ist visuell klar untergeordnet und tritt nie in der Akzentfarbe auf.
 * Ein Wechsel des Haupt-CTA passiert ausschließlich hier.
 */
export const cta = {
  primary: {
    label: 'Kostenloses Erstgespräch',
    /** Kurzfassung für den klebenden Kopfbereich auf Mobil. */
    labelShort: 'Termin sichern',
    href: '/termin/',
    /** Kurzer Zusatz direkt unter dem Button, nimmt die Hemmschwelle. */
    note: `${booking.durationLabel}, unverbindlich, ohne Verkaufsgespräch`,
  },
  secondary: {
    label: 'Lieber anrufen',
    href: contactLinks.tel,
  },
} as const;

/** Hauptnavigation. */
export const nav = [
  { label: 'Leistungen', href: '/leistungen/' },
  { label: 'Über mich', href: '/ueber-mich/' },
  { label: 'Kontakt', href: '/kontakt/' },
] as const;

/**
 * Die vier Leistungen.
 *
 * `benefit` ist die Nutzenaussage und steht in der Überschrift.
 * `label` ist nur die Fachbezeichnung und tritt untergeordnet auf.
 */
export const services = [
  {
    slug: 'webdesign',
    label: 'Webdesign',
    benefit: 'Eine Website, die Anfragen bringt statt nur gut auszusehen',
    teaser:
      'Ihre Kundschaft entscheidet in wenigen Sekunden, ob sie anruft oder weiterklickt. Ich baue die Seite so, dass sie anruft.',
    href: '/leistungen/webdesign/',
  },
  {
    slug: 'seo',
    label: 'SEO',
    benefit: 'Gefunden werden, wenn im Umkreis nach Ihnen gesucht wird',
    teaser:
      'Wer heute eine Heizung braucht, sucht bei Google und ruft einen der ersten Treffer an. Genau dort gehören Sie hin.',
    href: '/leistungen/seo/',
  },
  {
    slug: 'branding',
    label: 'Branding & Print',
    benefit: 'Ein Auftritt, der nach Fachbetrieb aussieht, nicht nach Nebenerwerb',
    teaser:
      'Vom Fahrzeug über den Briefkopf bis zum Angebot: ein einheitliches Bild, das Ihre Preise rechtfertigt.',
    href: '/leistungen/branding/',
  },
  {
    slug: 'automatisierung',
    label: 'KI-Prozessautomatisierung',
    benefit: 'Kein verpasster Anruf, kein Angebot, das liegen bleibt',
    teaser:
      'Anfragen werden erfasst, beantwortet und nachgefasst, während Sie auf der Baustelle stehen.',
    href: '/leistungen/automatisierung/',
  },
] as const;

/** Einzugsgebiet — fließt in JSON-LD und in die Texte. */
export const serviceArea = {
  primary: 'Essen',
  places: ['Essen', 'Mülheim an der Ruhr', 'Bochum', 'Gelsenkirchen', 'Oberhausen', 'Duisburg'],
  display: 'Essen und das gesamte Ruhrgebiet',
} as const;

/** Angaben für das Impressum nach § 5 DDG. */
export const legal = {
  // TODO: vollständigen Namen des Inhabers eintragen
  owner: 'TODO Vor- und Nachname',
  // TODO: Umsatzsteuer-ID eintragen ODER auf null lassen bei Kleinunternehmerregelung
  vatId: null as string | null,
  /** true, wenn nach § 19 UStG keine Umsatzsteuer ausgewiesen wird. */
  smallBusiness: true,
} as const;
