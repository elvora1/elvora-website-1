import type { Gespraech } from '~/lib/chat';

/**
 * Die Verläufe der drei Chat-Module, aus Sicht des Kunden eines Betriebs.
 *
 * EINE Quelle für zwei Stellen auf der Automatisierungsseite: das
 * Karussell im Abschnitt „Wo es klemmt" und die Telefone in den
 * Modulzeilen weiter unten. Vorher hätten beide eigene Fassungen gehabt,
 * und solche Abweichungen lassen eine Seite zusammengestückelt wirken.
 *
 * Geschrieben wie echte Verläufe: jeder zeigt einen Handgriff, den die
 * Assistenz wirklich übernimmt (Foto anfordern, Rückruf mit Zeitfenster,
 * Termin verschieben samt Erinnerung). Der `stempel` nennt das Modul,
 * damit im Karussell zu sehen ist, welcher Baustein gerade arbeitet.
 *
 * „Musterbetrieb" ist bewusst ein erkennbarer Platzhaltername: die
 * Verläufe sind Darstellungen, keine echten Vorgänge.
 */
export const modulGespraeche: Record<string, Gespraech> = {
  'whatsapp-assistenz': {
    name: 'Musterbetrieb',
    status: 'online',
    uhrzeit: '9:41',
    stempel: 'WhatsApp-Assistenz',
    nachrichten: [
      { von: 'kunde', zeit: '9:41', text: 'Guten Tag, unser Heizkörper im Bad wird nicht mehr warm. Tauschen Sie auch nur ein Thermostat?' },
      { von: 'assistenz', zeit: '9:41', text: 'Guten Tag! Machen wir, das ist eine kleine Sache. Mögen Sie ein Foto vom Thermostat schicken? Dann bringt der Kollege direkt das passende Ersatzteil mit.' },
      { von: 'kunde', zeit: '9:43', text: 'Super, Foto kommt gleich. Geht was nächste Woche?' },
      { von: 'assistenz', zeit: '9:43', text: 'Dienstag 8:30 Uhr ist frei. Soll ich Sie eintragen?' },
    ],
  },
  'anruf-retter': {
    name: 'Musterbetrieb',
    status: 'online',
    uhrzeit: '10:03',
    stempel: 'Anruf-Retter',
    nachrichten: [
      { von: 'assistenz', zeit: '10:03', text: 'Guten Tag, Sie haben uns gerade angerufen. Wir sind bis mittags auf einer Baustelle. Worum geht es? Ich leite es sofort weiter.' },
      { von: 'kunde', zeit: '10:06', text: 'Bei uns tropft es unter der Spüle, langsam wird es mehr.' },
      { von: 'assistenz', zeit: '10:06', text: 'Verstanden, das sollte zügig angeschaut werden. Bitte stellen Sie einen Eimer drunter und drehen Sie das Eckventil zu. Sie bekommen heute bis 13 Uhr einen Rückruf mit Termin.' },
    ],
  },
  'terminbuchung': {
    name: 'Musterbetrieb',
    status: 'online',
    uhrzeit: '14:12',
    stempel: 'Terminbuchung',
    nachrichten: [
      { von: 'kunde', zeit: '14:12', text: 'Hallo, ich schaffe es morgen um 9 doch nicht. Kann man den Termin verschieben?' },
      { von: 'assistenz', zeit: '14:12', text: 'Kein Problem! Frei wäre Donnerstag 13:00 Uhr oder Freitag 9:30 Uhr.' },
      { von: 'kunde', zeit: '14:13', text: 'Freitag bitte.' },
      { von: 'assistenz', zeit: '14:13', text: 'Verschoben: Freitag, 9:30 Uhr. Die alte Erinnerung ist gelöscht, die neue kommt am Donnerstag.' },
    ],
  },
};

/** Dieselben drei in fester Reihenfolge, für das Karussell. */
export const modulGespraechFolge: Gespraech[] = [
  modulGespraeche['whatsapp-assistenz'],
  modulGespraeche['anruf-retter'],
  modulGespraeche['terminbuchung'],
];
