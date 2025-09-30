// Liste der Studienfächer (Kurzformen)
const STUDIENFAECHER = [
    "D", "F", "M", "NT", "RZG", "WAH", "ERG", 
    "E", "BS", "BG", "TTG", "MU", "I", "RR", "L"
];

// Fächerbeschreibungen für bessere Lesbarkeit
const FACH_BESCHREIBUNGEN = {
    "D": "Deutsch",
    "F": "Französisch",
    "M": "Mathematik",
    "NT": "Natur & Technik",
    "RZG": "Räume, Zeiten, Gesellschaften",
    "WAH": "Wirtschaft, Arbeit, Haushalt",
    "ERG": "Ethik, Religionen, Gemeinschaft",
    "E": "Englisch",
    "BS": "Bewegung und Sport",
    "BG": "Bildnerisches Gestalten",
    "TTG": "Textiles und Technisches Gestalten",
    "MU": "Musik",
    "I": "Italienisch",
    "RR": "Rätoromanisch",
    "L": "Latein"
};

// Bereiche für die Fragenorganisation (7 Seiten)
const FRAGEN_BEREICHE = [
    "Zahl und Variable", //1
    "Form und Raum",    //2
    "Grössen und Funktionen",   //3
    "Daten und Zufall", //4
    "Planung",  //5
    "Beurteilung", //6
    "Lernbegleitung und Förderung" //6
];

// Bereiche für die Radar-Analyse (10 Achsen)
const ANALYSE_BEREICHE = [
    "Zahl und Variable",
    "Form und Raum",
    "Grössen und Funktionen", 
    "Daten und Zufall",
    "Operieren und Benennen",
    "Erforschen und Argumentieren",
    "Mathematisieren und Darstellen",
    "Planung",
    "Beurteilung",
    "Lernbegleitung und Förderung"
];

// Liste der verfügbaren Lerngelegenheiten (für Mathematik angepasst)
// id: Eindeutige Kennung der Lerngelegenheit, wird sonst nirgends benötigt.
const LERNGELEGENHEITEN = [
    {
        id: "mikroplanung_math",
        semester: "HS",
        kategorie: "Mikroplanung",
        titel: "Mikroplanung Mathematik"
    },
    {
        id: "makro_erforschen",
        semester: "HS & FS",
        kategorie: "Makroplanung",
        titel: "Erforschen und Argumentieren"
    },
        {
        id: "makro_planen",
        semester: "HS & FS",
        kategorie: "Makroplanung",
        titel: "Makroplanung Mathematik: Lernprozesse planen"
    },
    {
        id: "summative_beurteilung",
        semester: "HS & FS",
        kategorie: "Summative Beurteilung",
        titel: "Summative Beurteilung Mathematikunterricht"
    },
    {
        id: "beurteilung_math",
        semester: "HS & FS",
        kategorie: "Formative Beurteilung",
        titel: "Formative Beurteilung in Mathematik"
    },
    {
        id: "rechenschwaeche",
        semester: "HS",
        kategorie: "Beratung und Begleitung",
        titel: "Umgang mit Rechenschwäche"
    },
    {
        id: "alltagsbezug",
        semester: "HS & FS",
        kategorie: "Fachkompetenz",
        titel: "Mathematik als Produkt und Prozess"
    },
];

export { STUDIENFAECHER, FACH_BESCHREIBUNGEN, FRAGEN_BEREICHE, ANALYSE_BEREICHE, LERNGELEGENHEITEN };