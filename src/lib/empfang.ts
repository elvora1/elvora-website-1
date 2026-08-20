import mark from '~/assets/mark.svg';
import type { Gespraech } from '~/lib/chat';

/**
 * Der Empfang, den man auf WhatsApp tatsächlich bekommt.
 *
 * EINE Quelle für jede Stelle, an der die Assistenz aus Kundensicht
 * vorgeführt wird: das Telefon im ersten Sichtbereich der Startseite und
 * das Telefon auf der Kontaktseite. Vorher hatten beide eigene, leicht
 * unterschiedliche Verläufe, und genau solche Abweichungen lassen eine
 * Seite zusammengestückelt wirken.
 *
 * Das Telefon blättert durch die drei Verläufe wie ein Bildwechsler, mit
 * Punkten als Anzeige. Der Website-Verlauf steht am Ende, denn der letzte
 * bleibt stehen.
 *
 * Blickwinkel ist das Telefon des Interessenten: seine Nachrichten stehen
 * rechts, die der Assistenz links mit Profilbild.
 */
export const empfangGespraeche: Gespraech[] = [
  {
    name: 'Elvora',
    status: 'online',
    uhrzeit: '9:41',
    stempel: 'Termin anfragen',
    bild: mark.src,
    nachrichten: [
      { von: 'kunde', zeit: '9:41', text: 'Guten Tag, ist diese Woche noch ein Termin frei?' },
      { von: 'assistenz', zeit: '9:41', text: 'Ja, Donnerstag 9:00 Uhr oder Freitag 14:30 Uhr. Was passt Ihnen?' },
      { von: 'kunde', zeit: '9:42', text: 'Freitag, gern.' },
      { von: 'assistenz', zeit: '9:42', text: 'Eingetragen! Sie bekommen gleich eine Bestätigung.' },
    ],
  },
  {
    name: 'Elvora',
    status: 'online',
    uhrzeit: '11:06',
    stempel: 'Nach verpasstem Anruf',
    bild: mark.src,
    nachrichten: [
      { von: 'assistenz', zeit: '11:06', text: 'Guten Tag, Sie haben gerade angerufen und wir konnten leider nicht abnehmen. Worum geht es? Ich helfe direkt hier weiter.' },
      { von: 'kunde', zeit: '11:07', text: 'Oh, das ging schnell. Ich hätte eine Frage zu meiner Website.' },
      { von: 'assistenz', zeit: '11:07', text: 'Gern! Stellen Sie sie einfach hier, oder ich lasse Sie zurückrufen.' },
    ],
  },
  {
    name: 'Elvora',
    status: 'online',
    uhrzeit: '14:23',
    stempel: 'Anfrage stellen',
    bild: mark.src,
    nachrichten: [
      { von: 'kunde', zeit: '14:23', text: 'Wir bräuchten eine neue Website für unseren Betrieb.' },
      { von: 'assistenz', zeit: '14:23', text: 'Danke! Darf ich fragen, was die Seite vor allem können soll?' },
      { von: 'kunde', zeit: '14:24', text: 'Mehr Anfragen bringen, ehrlich gesagt.' },
      { von: 'assistenz', zeit: '14:24', text: 'Verstanden. Ich gebe das an Luan weiter, er meldet sich heute noch bei Ihnen.' },
    ],
  },
];

/** Gemeinsames Tempo der Vorführung, etwas schneller als der Grundtakt. */
export const EMPFANG_TEMPO = 0.85;
