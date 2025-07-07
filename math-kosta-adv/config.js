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
    "Zahl und Variable",
    "Form und Raum", 
    "Grössen und Funktionen",
    "Daten und Zufall",
    "Planung",
    "Beurteilung", 
    "Lernbegleitung und Förderung"
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
const LERNGELEGENHEITEN = [
    {
        id: "mikroplanung_math",
        semester: "HS",
        kategorie: "Mikroplanung",
        titel: "Mikroplanung Mathematik"
    },
    {
        id: "makro_problemloesen",
        semester: "HS & FS",
        kategorie: "Makroplanung",
        titel: "Problemlösen und Modellieren"
    },
    {
        id: "digitale_medien_math",
        semester: "HS & FS",
        kategorie: "Digitale Medien",
        titel: "Digitale Medien im Mathematikunterricht"
    },
    {
        id: "differenzierung_math",
        semester: "HS & FS",
        kategorie: "Binnendifferenzierung",
        titel: "Differenzierung im Mathematikunterricht"
    },
    {
        id: "beurteilung_math",
        semester: "HS & FS",
        kategorie: "Beurteilung",
        titel: "Formative und summative Beurteilung in Mathematik"
    },
    {
        id: "kommunikation_math",
        semester: "HS",
        kategorie: "Kommunikation",
        titel: "Mathematische Kommunikation fördern"
    },
    {
        id: "rechenschwaeche",
        semester: "HS",
        kategorie: "Förderung",
        titel: "Umgang mit Rechenschwäche"
    },
    {
        id: "alltagsbezug",
        semester: "FS",
        kategorie: "Anwendungsbezug",
        titel: "Mathematik im Alltag"
    }
];

export { STUDIENFAECHER, FACH_BESCHREIBUNGEN, FRAGEN_BEREICHE, ANALYSE_BEREICHE, LERNGELEGENHEITEN };