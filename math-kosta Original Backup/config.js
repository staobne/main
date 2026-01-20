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

// Liste der verfügbaren Lerngelegenheiten
const LERNGELEGENHEITEN = [
    {
        id: "mikroplanung",
        semester: "HS",
        kategorie: "Mikroplanung",
        titel: "Mikroplanung Mathematik"
    },
    {
        id: "marko-erforschen",
        semester: "HS & FS",
        kategorie: "Makroplanung",
        titel: "Erforschen und Argumentieren"
    },
    {
        id: "zukunftskompetenzen",
        semester: "HS & FS",
        kategorie: "Beratung & Begleitung",
        titel: "Zukunftskompetenzen"
    },
    {
        id: "partizipativ",
        semester: "HS & FS",
        kategorie: "Zusammenarbeit & Kommunikation",
        titel: "Schule partizipativ gestalten"
    },
    {
        id: "bne_konzept",
        semester: "HS & FS",
        kategorie: "Persönliche und professionelle Entwicklung",
        titel: "Persönliches BNE-Konzept … hä?"
    },
    {
        id: "achtsamkeit",
        semester: "HS",
        kategorie: "Klassenführung",
        titel: "Sozio-emotionales Lernen & Beziehungsgestaltung – Achtsamkeit in der Schule"
    },
    {
        id: "heterogenitaet",
        semester: "HS",
        kategorie: "Klassenführung",
        titel: "Heterogenität im Klassenzimmer – mögliche Diagnosen und der Umgang damit"
    },
];

export { STUDIENFAECHER, FACH_BESCHREIBUNGEN, LERNGELEGENHEITEN };