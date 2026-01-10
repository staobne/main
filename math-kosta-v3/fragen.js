// Definition aller Fragen des Fragebogens für Mathematik-Kompetenzstandanalyse
// Jede Frage hat: id, text, bereich, handlungsaspekte, ebene, typ, antwortmöglichkeiten

const FRAGEN = [
    // ===== ZAHL UND VARIABLE ===== id 1xx
    {
        id: 101,
        text: "Wie sicher fühlen Sie sich inhaltlich beim Erklären und Formulieren von Förderhinweisen zu den Grundrechenarten?",
        bereich: "Zahl und Variable",
        handlungsaspekte: ["Zahl und Variable", "Operieren und Benennen", "Lernbegleitung und Förderung"],
        ebene: "einschätzung",
        typ: "slider",
        antworten: [
            { text: "Keine Antwort", wert: 0 },
            { text: "Eher unsicher", wert: 1 },
            { text: "Eher sicher", wert: 2 },
            { text: "Sehr sicher", wert: 3 }
        ]
    },
    {
        id: 102,
        text: "Wie sicher fühlen Sie sich inhaltlich beim Erklären und Formulieren von Förderhinweisen zum Stellenwertsystem?",
        bereich: "Zahl und Variable",
        handlungsaspekte: ["Zahl und Variable", "Operieren und Benennen", "Lernbegleitung und Förderung"],
        ebene: "einschätzung",
        typ: "slider",
        antworten: [
            { text: "Keine Antwort", wert: 0 },
            { text: "Eher unsicher", wert: 1 },
            { text: "Eher sicher", wert: 2 },
            { text: "Sehr sicher", wert: 3 }
        ]
    },
    {
        id: 104,
        text: "Schätzen Sie im Folgenden <b>Ihre fachliche Kompetenz</br> in Bezug auf die genannten LP21 Kompetenzen ein: «Arithmetische Begriffe und Symbole verstehen und verwenden. Zahlen lesen und schreiben.»",
        bereich: "Zahl und Variable",
        handlungsaspekte: ["Zahl und Variable", "Operieren und Benennen"],
        ebene: "einschätzung",
        typ: "slider",
        antworten: [
            { text: "Keine Antwort", wert: 0 },
            { text: "Wenig kompetent", wert: 1 },
            { text: "Kompetent", wert: 2 },
            { text: "Sehr kompetent", wert: 3 }
        ]
    },
        {
        id: 105,
        text: "«Flexibel zählen, Zahlen nach der Grösse ordnen und Ergebnisse überschlagen.»",
        bereich: "Zahl und Variable",
        handlungsaspekte: ["Zahl und Variable", "Operieren und Benennen"],
        ebene: "einschätzung",
        typ: "slider",
        antworten: [
            { text: "Keine Antwort", wert: 0 },
            { text: "Wenig kompetent", wert: 1 },
            { text: "Kompetent", wert: 2 },
            { text: "Sehr kompetent", wert: 3 }
        ]
    },
    {
        id: 106,
        text: "«Addieren, subtrahieren, multiplizieren, dividieren und potenzieren.»",
        bereich: "Zahl und Variable",
        handlungsaspekte: ["Zahl und Variable", "Operieren und Benennen"],
        ebene: "einschätzung",
        typ: "slider",
        antworten: [
            { text: "Keine Antwort", wert: 0 },
            { text: "Wenig kompetent", wert: 1 },
            { text: "Kompetent", wert: 2 },
            { text: "Sehr kompetent", wert: 3 }
        ]
    },
    {
        id: 107,
        text: "«Terme vergleichen und umformen, Gleichungen lösen, Gesetze und Regeln anwenden.»",
        bereich: "Zahl und Variable",
        handlungsaspekte: ["Zahl und Variable", "Operieren und Benennen"],
        ebene: "einschätzung",
        typ: "slider",
        antworten: [
            { text: "Keine Antwort", wert: 0 },
            { text: "Wenig kompetent", wert: 1 },
            { text: "Kompetent", wert: 2 },
            { text: "Sehr kompetent", wert: 3 }
        ]
    },
        {
        id: 108,
        text: "«Zahl- und Operationsbeziehungen sowie arithmetische Muster erforschen und Erkenntnisse austauschen.»",
        bereich: "Zahl und Variable",
        handlungsaspekte: ["Zahl und Variable", "Erforschen und Argumentieren"],
        ebene: "einschätzung",
        typ: "slider",
        antworten: [
            { text: "Keine Antwort", wert: 0 },
            { text: "Wenig kompetent", wert: 1 },
            { text: "Kompetent", wert: 2 },
            { text: "Sehr kompetent", wert: 3 }
        ]
    },
    {
        id: 109,
        text: "«Aussagen, Vermutungen und Ergebnisse zu Zahlen und Variablen erläutern, überprüfen, begründen.»",
        bereich: "Zahl und Variable",
        handlungsaspekte: ["Zahl und Variable", "Erforschen und Argumentieren"],
        ebene: "einschätzung",
        typ: "slider",
        antworten: [
            { text: "Keine Antwort", wert: 0 },
            { text: "Wenig kompetent", wert: 1 },
            { text: "Kompetent", wert: 2 },
            { text: "Sehr kompetent", wert: 3 }
        ]
    },
    {
        id: 110,
        text: "«Beim Erforschen arithmetischer Muster Hilfsmittel nutzen.»",
        bereich: "Zahl und Variable",
        handlungsaspekte: ["Zahl und Variable", "Erforschen und Argumentieren"],
        ebene: "einschätzung",
        typ: "slider",
        antworten: [
            { text: "Keine Antwort", wert: 0 },
            { text: "Wenig kompetent", wert: 1 },
            { text: "Kompetent", wert: 2 },
            { text: "Sehr kompetent", wert: 3 }
        ]
    },
    {
        id: 111,
        text: "«Rechenwege darstellen, beschreiben, austauschen und nachvollziehen.»",
        bereich: "Zahl und Variable",
        handlungsaspekte: ["Zahl und Variable", "Operieren und Benennen"],
        ebene: "einschätzung",
        typ: "slider",
        antworten: [
            { text: "Keine Antwort", wert: 0 },
            { text: "Wenig kompetent", wert: 1 },
            { text: "Kompetent", wert: 2 },
            { text: "Sehr kompetent", wert: 3 }
        ]
    },
    {
        id: 112,
        text: "«Anzahlen, Zahlenfolgen und Terme veranschaulichen, beschreiben und verallgemeinern.»",
        bereich: "Zahl und Variable",
        handlungsaspekte: ["Zahl und Variable", "Operieren und Benennen"],
        ebene: "einschätzung",
        typ: "slider",
        antworten: [
            { text: "Keine Antwort", wert: 0 },
            { text: "Wenig kompetent", wert: 1 },
            { text: "Kompetent", wert: 2 },
            { text: "Sehr kompetent", wert: 3 }
        ]
    },
    {
        id: 113,
        text: "Können Sie Schüler*innen beim Erkunden von Zahlenmustern methodisch unterstützen?",
        bereich: "Zahl und Variable",
        handlungsaspekte: ["Zahl und Variable", "Erforschen und Argumentieren", "Lernbegleitung und Förderung"],
        ebene: "einschätzung",
        typ: "slider",
        antworten: [
            { text: "Keine Antwort", wert: 0 },
            { text: "Wenig", wert: 1 },
            { text: "Gut", wert: 2 },
            { text: "Sehr gut", wert: 3 }
        ]
    },
        {
        id: 114,
        text: "Wie schätzen Sie Ihre Kompetenzen ein in Bezug auf Unterrichtsplanung in Arithmetik und Algebra?",
        bereich: "Zahl und Variable",
        handlungsaspekte: ["Planung"],
        ebene: "einschätzung",
        typ: "slider",
        antworten: [
            { text: "Wenig Kompetenz", wert: 0 },
            { text: "Mittlere Kompetenz", wert: 1 },
            { text: "Hohe Kompetenz", wert: 2 },
            { text: "Sehr hohe Kompetenz", wert: 3 }
        ]
    },
     {
        id: 116,
        text: "Inwiefern interessieren Sie sich für arithmetische und algebraische Inhalte im Handlungsaspekt Operieren und Benennen?",
        bereich: "Zahl und Variable",
        handlungsaspekte: ["Zahl und Variable", "Operieren und Benennen"],
        ebene: "interesse",
        typ: "slider",
        antworten: [
            { text: "Keine Antwort", wert: 0 },
            { text: "Wenig interessiert", wert: 1 },
            { text: "Interessiert", wert: 2 },
            { text: "Sehr interessiert", wert: 3 }
        ]
    },
    {
        id: 117,
        text: "Inwiefern interessieren Sie sich für arithmetische und algebraische Inhalte im Handlungsaspekt Erforschen und Argumentieren?",
        bereich: "Zahl und Variable",
        handlungsaspekte: ["Zahl und Variable", "Erforschen und Argumentieren"],
        ebene: "interesse",
        typ: "slider",
        antworten: [
            { text: "Keine Antwort", wert: 0 },
            { text: "Wenig interessiert", wert: 1 },
            { text: "Interessiert", wert: 2 },
            { text: "Sehr interessiert", wert: 3 }
        ]
    },
    {
        id: 118,
        text: "Inwiefern interessieren Sie sich für arithmetische und algebraische Inhalte im Handlungsaspekt Mathematisieren und Darstellen?",
        bereich: "Zahl und Variable",
        handlungsaspekte: ["Zahl und Variable", "Mathematisieren und Darstellen"],
        ebene: "interesse",
        typ: "slider",
        antworten: [
            { text: "Keine Antwort", wert: 0 },
            { text: "Wenig interessiert", wert: 1 },
            { text: "Interessiert", wert: 2 },
            { text: "Sehr interessiert", wert: 3 }
        ]
    },

    // ===== FORM UND RAUM =====
    {
        id: 201,
        text: "Wie gut können Sie geometrische Zusammenhänge visualisieren?",
        bereich: "Form und Raum",
        handlungsaspekte: ["Form und Raum", "Mathematisieren und Darstellen"],
        ebene: "einschätzung",
        typ: "slider",
        antworten: [
            { text: "Keine Antwort", wert: 0 },
            { text: "Eher schlecht", wert: 1 },
            { text: "Gut", wert: 2 },
            { text: "Sehr gut", wert: 3 }
        ]
    },
    {
        id: 203,
        text: "Interessieren Sie sich für räumliches Vorstellungsvermögen?",
        bereich: "Form und Raum",
        handlungsaspekte: ["Form und Raum"],
        ebene: "interesse",
        typ: "slider",
        antworten: [
            { text: "Keine Antwort", wert: 0 },
            { text: "Wenig", wert: 1 },
            { text: "Mittel", wert: 2 },
            { text: "Sehr", wert: 3 }
        ]
    },
    {
        id: 204,
        text: "Können Sie Schüler*innen beim Entdecken geometrischer Eigenschaften anleiten?",
        bereich: "Form und Raum",
        handlungsaspekte: ["Form und Raum", "Erforschen und Argumentieren"],
        ebene: "einschätzung",
        typ: "slider",
        antworten: [
            { text: "Keine Antwort", wert: 0 },
            { text: "Wenig", wert: 1 },
            { text: "Gut", wert: 2 },
            { text: "Sehr gut", wert: 3 }
        ]
    },
    {
        id: 205,
        text: "Schätzen Sie im Folgenden <i>Ihre fachliche Kompetenz</i> in Bezug auf die genannten LP21 Kompetenz ein: «Die Schülerinnen und Schüler verstehen und verwenden Begriffe und Symbole.»",
        bereich: "Form und Raum",
        handlungsaspekte: ["Form und Raum", "Operieren und Benennen"],
        ebene: "einschätzung",
        typ: "slider",
        antworten: [
            { text: "Keine Antwort", wert: 0 },
            { text: "Wenig kompetent", wert: 1 },
            { text: "Kompetent", wert: 2 },
            { text: "Sehr kompetent", wert: 3 }
        ]
    },
    {
        id: 206,
        text: "«Figuren und Körper abbilden, zerlegen und zusammensetzen.»",
        bereich: "Form und Raum",
        handlungsaspekte: ["Form und Raum", "Operieren und Benennen"],
        ebene: "einschätzung",
        typ: "slider",
        antworten: [
            { text: "Keine Antwort", wert: 0 },
            { text: "Wenig kompetent", wert: 1 },
            { text: "Kompetent", wert: 2 },
            { text: "Sehr kompetent", wert: 3 }
        ]
    },
        {
        id: 207,
        text: "«Längen, Flächen und Volumen bestimmen und berechnen.»",
        bereich: "Form und Raum",
        handlungsaspekte: ["Form und Raum", "Operieren und Benennen"],
        ebene: "einschätzung",
        typ: "slider",
        antworten: [
            { text: "Keine Antwort", wert: 0 },
            { text: "Wenig kompetent", wert: 1 },
            { text: "Kompetent", wert: 2 },
            { text: "Sehr kompetent", wert: 3 }
        ]
    },
            {
        id: 208,
        text: "«Geometrische Beziehungen, insbesondere zwischen Längen, Flächen und Volumen, erforschen, Vermutungen formulieren und Erkenntnisse austauschen.»",
        bereich: "Form und Raum",
        handlungsaspekte: ["Form und Raum", "Erforschen und Argumentieren"],
        ebene: "einschätzung",
        typ: "slider",
        antworten: [
            { text: "Keine Antwort", wert: 0 },
            { text: "Wenig kompetent", wert: 1 },
            { text: "Kompetent", wert: 2 },
            { text: "Sehr kompetent", wert: 3 }
        ]
    },
    {
        id: 209,
        text: "«Aussagen und Formeln zu geometrischen Beziehungen überprüfen, mit Beispielen belegen und begründen.»",
        bereich: "Form und Raum",
        handlungsaspekte: ["Form und Raum", "Erforschen und Argumentieren"],
        ebene: "einschätzung",
        typ: "slider",
        antworten: [
            { text: "Keine Antwort", wert: 0 },
            { text: "Wenig kompetent", wert: 1 },
            { text: "Kompetent", wert: 2 },
            { text: "Sehr kompetent", wert: 3 }
        ]
    },
    {
        id: 210,
        text: "«Körper und räumliche Beziehungen darstellen.»",
        bereich: "Form und Raum",
        handlungsaspekte: ["Form und Raum", "Mathematisieren und Darstellen"],
        ebene: "einschätzung",
        typ: "slider",
        antworten: [
            { text: "Keine Antwort", wert: 0 },
            { text: "Wenig kompetent", wert: 1 },
            { text: "Kompetent", wert: 2 },
            { text: "Sehr kompetent", wert: 3 }
        ]
    },
    {
        id: 211,
        text: "«Figuren falten, skizzieren, zeichnen und konstruieren sowie Darstellungen zur ebenen Geometrie austauschen und überprüfen.»",
        bereich: "Form und Raum",
        handlungsaspekte: ["Form und Raum", "Mathematisieren und Darstellen"],
        ebene: "einschätzung",
        typ: "slider",
        antworten: [
            { text: "Keine Antwort", wert: 0 },
            { text: "Wenig kompetent", wert: 1 },
            { text: "Kompetent", wert: 2 },
            { text: "Sehr kompetent", wert: 3 }
        ]
    },
    {
        id: 212,
        text: "«Sich Figuren und Körper in verschiedenen Lagen vorstellen, Veränderungen darstellen und beschreiben (Kopfgeometrie).»",
        bereich: "Form und Raum",
        handlungsaspekte: ["Form und Raum", "Mathematisieren und Darstellen"],
        ebene: "einschätzung",
        typ: "slider",
        antworten: [
            { text: "Keine Antwort", wert: 0 },
            { text: "Wenig kompetent", wert: 1 },
            { text: "Kompetent", wert: 2 },
            { text: "Sehr kompetent", wert: 3 }
        ]
    },
    {
        id: 213,
        text: "«An einem Koordinatensystem die Koordinaten von Figuren und Körpern bestimmen bzw. Figuren und Körper aufgrund ihrer Koordinaten darstellen sowie Pläne lesen und zeichnen.»",
        bereich: "Form und Raum",
        handlungsaspekte: ["Form und Raum", "Mathematisieren und Darstellen"],
        ebene: "einschätzung",
        typ: "slider",
        antworten: [
            { text: "Keine Antwort", wert: 0 },
            { text: "Wenig kompetent", wert: 1 },
            { text: "Kompetent", wert: 2 },
            { text: "Sehr kompetent", wert: 3 }
        ]
    },
        {
        id: 214,
        text: "Inwiefern interessieren Sie sich für geometrische Inhalte im Handlungsaspekt Operieren und Benennen?",
        bereich: "Form und Raum",
        handlungsaspekte: ["Form und Raum", "Operieren und Benennen"],
        ebene: "interesse",
        typ: "slider",
        antworten: [
            { text: "Keine Antwort", wert: 0 },
            { text: "Wenig interessiert", wert: 1 },
            { text: "Interessiert", wert: 2 },
            { text: "Sehr interessiert", wert: 3 }
        ]
    },
    {
        id: 215,
        text: "Inwiefern interessieren Sie sich für geometrische Inhalte im Handlungsaspekt Erforschen und Argumentieren?",
        bereich: "Form und Raum",
        handlungsaspekte: ["Form und Raum", "Erforschen und Argumentieren"],
        ebene: "interesse",
        typ: "slider",
        antworten: [
            { text: "Keine Antwort", wert: 0 },
            { text: "Wenig interessiert", wert: 1 },
            { text: "Interessiert", wert: 2 },
            { text: "Sehr interessiert", wert: 3 }
        ]
    },
    {
        id: 216,
        text: "Inwiefern interessieren Sie sich für geometrische Inhalte im Handlungsaspekt Mathematisieren und Darstellen?",
        bereich: "Form und Raum",
        handlungsaspekte: ["Form und Raum", "Mathematisieren und Darstellen"],
        ebene: "interesse",
        typ: "slider",
        antworten: [
            { text: "Keine Antwort", wert: 0 },
            { text: "Wenig interessiert", wert: 1 },
            { text: "Interessiert", wert: 2 },
            { text: "Sehr interessiert", wert: 3 }
        ]
    },

    // ===== GRÖSSEN UND FUNKTIONEN =====
    {
        id: 301,
        text: "Wie sicher sind Sie im Umgang mit proportionalen Zusammenhängen?",
        bereich: "Grössen und Funktionen",
        handlungsaspekte: ["Grössen und Funktionen", "Mathematisieren und Darstellen"],
        ebene: "einschätzung",
        typ: "slider",
        antworten: [
            { text: "Keine Antwort", wert: 0 },
            { text: "Eher unsicher", wert: 1 },
            { text: "Sicher", wert: 2 },
            { text: "Sehr sicher", wert: 3 }
        ]
    },
    {
        id: 303,
        text: "Wie interessiert sind Sie an funktionalen Zusammenhängen?",
        bereich: "Grössen und Funktionen",
        handlungsaspekte: ["Grössen und Funktionen"],
        ebene: "interesse",
        typ: "slider",
        antworten: [
            { text: "Keine Antwort", wert: 0 },
            { text: "Wenig", wert: 1 },
            { text: "Mittel", wert: 2 },
            { text: "Sehr", wert: 3 }
        ]
    },
    {
        id: 304,
        text: "Können Sie Lernende bei der Modellierung von Alltagssituationen unterstützen?",
        bereich: "Grössen und Funktionen",
        handlungsaspekte: ["Grössen und Funktionen", "Mathematisieren und Darstellen"],
        ebene: "einschätzung",
        typ: "slider",
        antworten: [
            { text: "Keine Antwort", wert: 0 },
            { text: "Wenig", wert: 1 },
            { text: "Gut", wert: 2 },
            { text: "Sehr gut", wert: 3 }
        ]
    },
    {
        id: 305,
        text: "Schätzen Sie im Folgenden <i>Ihre fachliche Kompetenz</i> in Bezug auf die genannten LP21 Kompetenz ein: «Die Schülerinnen und Schüler verstehen und verwenden Begriffe und Symbole zu Grössen und Funktionen»",        
        bereich: "Grössen und Funktionen",
        handlungsaspekte: ["Grössen und Funktionen", "Operieren und Benennen"],
        ebene: "einschätzung",
        typ: "slider",
        antworten: [
            { text: "Keine Antwort", wert: 0 },
            { text: "Wenig kompetent", wert: 1 },
            { text: "Kompetent", wert: 2 },
            { text: "Sehr kompetent", wert: 3 }
        ]
    },
    {
        id: 306,
        text: "«Grössen schätzen, messen, umwandeln, runden und mit ihnen rechnen.»",
        bereich: "Grössen und Funktionen",
        handlungsaspekte: ["Grössen und Funktionen", "Operieren und Benennen"],
        ebene: "einschätzung",
        typ: "slider",
        antworten: [
            { text: "Keine Antwort", wert: 0 },
            { text: "Wenig kompetent", wert: 1 },
            { text: "Kompetent", wert: 2 },
            { text: "Sehr kompetent", wert: 3 }
        ]
    },
        {
        id: 307,
        text: "«Funktionale Zusammenhänge beschreiben und Funktionswerte bestimmen.»",
        bereich: "Grössen und Funktionen",
        handlungsaspekte: ["Grössen und Funktionen", "Operieren und Benennen"],
        ebene: "einschätzung",
        typ: "slider",
        antworten: [
            { text: "Keine Antwort", wert: 0 },
            { text: "Wenig kompetent", wert: 1 },
            { text: "Kompetent", wert: 2 },
            { text: "Sehr kompetent", wert: 3 }
        ]
    },
    {
        id: 308,
        text: "«Zu Grössenbeziehungen und funktionalen Zusammenhängen Fragen formulieren, diese erforschen sowie Ergebnisse überprüfen und begründen.»",
        bereich: "Grössen und Funktionen",
        handlungsaspekte: ["Grössen und Funktionen", "Erforschen und Argumentieren"],
        ebene: "einschätzung",
        typ: "slider",
        antworten: [
            { text: "Keine Antwort", wert: 0 },
            { text: "Wenig kompetent", wert: 1 },
            { text: "Kompetent", wert: 2 },
            { text: "Sehr kompetent", wert: 3 }
        ]
    },
    {
        id: 309,
        text: "«Sachsituationen mathematisieren, darstellen, berechnen sowie Ergebnisse interpretieren und überprüfen.»",
        bereich: "Grössen und Funktionen",
        handlungsaspekte: ["Grössen und Funktionen", "Mathematisieren und Darstellen"],
        ebene: "einschätzung",
        typ: "slider",
        antworten: [
            { text: "Keine Antwort", wert: 0 },
            { text: "Wenig kompetent", wert: 1 },
            { text: "Kompetent", wert: 2 },
            { text: "Sehr kompetent", wert: 3 }
        ]
    },
    {
        id: 310,
        text: "«Terme, Formeln, Gleichungen und Tabellen mit Sachsituationen konkretisieren.»",
        bereich: "Grössen und Funktionen",
        handlungsaspekte: ["Grössen und Funktionen", "Mathematisieren und Darstellen"],
        ebene: "einschätzung",
        typ: "slider",
        antworten: [
            { text: "Keine Antwort", wert: 0 },
            { text: "Wenig kompetent", wert: 1 },
            { text: "Kompetent", wert: 2 },
            { text: "Sehr kompetent", wert: 3 }
        ]
    },
    {
        id: 311,
        text: "Inwiefern interessieren Sie sich für Inhalte des Kompetenzbereichs Grössen und Funktionen im Handlungsaspekt Operieren und Benennen?",
        bereich: "Grössen und Funktionen",
        handlungsaspekte: ["Grössen und Funktionen", "Operieren und Benennen"],
        ebene: "interesse",
        typ: "slider",
        antworten: [
            { text: "Keine Antwort", wert: 0 },
            { text: "Wenig interessiert", wert: 1 },
            { text: "Interessiert", wert: 2 },
            { text: "Sehr interessiert", wert: 3 }
        ]
    },
    {
        id: 312,
        text: "Inwiefern interessieren Sie sich für Inhalte des Kompetenzbereichs Grössen und Funktionen im Handlungsaspekt Erforschen und Argumentieren?",
        bereich: "Grössen und Funktionen",
        handlungsaspekte: ["Grössen und Funktionen", "Erforschen und Argumentieren"],
        ebene: "interesse",
        typ: "slider",
        antworten: [
            { text: "Keine Antwort", wert: 0 },
            { text: "Wenig interessiert", wert: 1 },
            { text: "Interessiert", wert: 2 },
            { text: "Sehr interessiert", wert: 3 }
        ]
    },
    {
        id: 313,
        text: "Inwiefern interessieren Sie sich für Inhalte des Kompetenzbereichs Grössen und Funktionen im Handlungsaspekt Mathematisieren und Darstellen?",
        bereich: "Grössen und Funktionen",
        handlungsaspekte: ["Grössen und Funktionen", "Mathematisieren und Darstellen"],
        ebene: "interesse",
        typ: "slider",
        antworten: [
            { text: "Keine Antwort", wert: 0 },
            { text: "Wenig interessiert", wert: 1 },
            { text: "Interessiert", wert: 2 },
            { text: "Sehr interessiert", wert: 3 }
        ]
    },

    // ===== DATEN UND ZUFALL =====
    {
        id: 401,
        text: "Wie kompetent fühlen Sie sich bei der Interpretation von Diagrammen?",
        bereich: "Daten und Zufall",
        handlungsaspekte: ["Daten und Zufall", "Mathematisieren und Darstellen"],
        ebene: "einschätzung",
        typ: "slider",
        antworten: [
            { text: "Wenig kompetent", wert: 0 },
            { text: "Eher wenig", wert: 1 },
            { text: "Kompetent", wert: 2 },
            { text: "Sehr kompetent", wert: 3 }
        ]
    },
    {
        id: 403,
        text: "Interessieren Sie sich für Statistik und Wahrscheinlichkeitsrechnung?",
        bereich: "Daten und Zufall",
        handlungsaspekte: ["Daten und Zufall"],
        ebene: "interesse",
        typ: "slider",
        antworten: [
            { text: "Keine Antwort", wert: 0 },
            { text: "Wenig", wert: 1 },
            { text: "Mittel", wert: 2 },
            { text: "Sehr", wert: 3 }
        ]
    },
    {
        id: 404,
        text: "Können Sie Schüler*innen beim kritischen Hinterfragen von Statistiken anleiten?",
        bereich: "Daten und Zufall",
        handlungsaspekte: ["Daten und Zufall", "Erforschen und Argumentieren"],
        ebene: "einschätzung",
        typ: "slider",
        antworten: [
            { text: "Keine Antwort", wert: 0 },
            { text: "Wenig", wert: 1 },
            { text: "Gut", wert: 2 },
            { text: "Sehr gut", wert: 3 }
        ]
    },
    {
        id: 405,
        text: "Schätzen Sie im Folgenden <i>Ihre fachliche Kompetenz</i> in Bezug auf die genannten LP21 Kompetenz ein: «Die Schülerinnen und Schüler verstehen und verwenden Begriffe und Symbole zu Daten und Zufall»",        
        bereich: "Daten und Zufall",
        handlungsaspekte: ["Daten und Zufall", "Operieren und Benennen"],
        ebene: "einschätzung",
        typ: "slider",
        antworten: [
            { text: "Keine Antwort", wert: 0 },
            { text: "Wenig kompetent", wert: 1 },
            { text: "Kompetent", wert: 2 },
            { text: "Sehr kompetent", wert: 3 }
        ]
    },
    {
        id: 406,
        text: "«Sachsituationen zur Statistik, Kombinatorik und Wahrscheinlichkeit erforschen, Vermutungen formulieren und überprüfen.»",
        bereich: "Daten und Zufall",
        handlungsaspekte: ["Daten und Zufall", "Erforschen und Argumentieren"],
        ebene: "einschätzung",
        typ: "slider",
        antworten: [
            { text: "Keine Antwort", wert: 0 },
            { text: "Wenig kompetent", wert: 1 },
            { text: "Kompetent", wert: 2 },
            { text: "Sehr kompetent", wert: 3 }
        ]
    },
    {
        id: 407,
        text: "«Daten zu Statistik, Kombinatorik und Wahrscheinlichkeit erheben, ordnen, darstellen, auswerten und interpretieren.»",
        bereich: "Daten und Zufall",
        handlungsaspekte: ["Daten und Zufall", "Mathematisieren und Darstellen"],
        ebene: "einschätzung",
        typ: "slider",
        antworten: [
            { text: "Keine Antwort", wert: 0 },
            { text: "Wenig kompetent", wert: 1 },
            { text: "Kompetent", wert: 2 },
            { text: "Sehr kompetent", wert: 3 }
        ]
    },
        {
        id: 408,
        text: "Inwiefern interessieren Sie sich für Inhalte des Kompetenzbereichs Daten und Zufall im Handlungsaspekt Operieren und Benennen?",
        bereich: "Daten und Zufall",
        handlungsaspekte: ["Daten und Zufall", "Operieren und Benennen"],
        ebene: "interesse",
        typ: "slider",
        antworten: [
            { text: "Keine Antwort", wert: 0 },
            { text: "Wenig interessiert", wert: 1 },
            { text: "Interessiert", wert: 2 },
            { text: "Sehr interessiert", wert: 3 }
        ]
    },
    {
        id: 408,
        text: "Inwiefern interessieren Sie sich für Inhalte des Kompetenzbereichs Daten und Zufall im Handlungsaspekt Erforschen und Argumentieren?",
        bereich: "Daten und Zufall",
        handlungsaspekte: ["Daten und Zufall", "Erforschen und Argumentieren"],
        ebene: "interesse",
        typ: "slider",
        antworten: [
            { text: "Keine Antwort", wert: 0 },
            { text: "Wenig interessiert", wert: 1 },
            { text: "Interessiert", wert: 2 },
            { text: "Sehr interessiert", wert: 3 }
        ]
    },
    {
        id: 408,
        text: "Inwiefern interessieren Sie sich für Inhalte des Kompetenzbereichs Daten und Zufall im Handlungsaspekt Mathematisieren und Darstellen?",
        bereich: "Daten und Zufall",
        handlungsaspekte: ["Daten und Zufall", "Mathematisieren und Darstellen"],
        ebene: "interesse",
        typ: "slider",
        antworten: [
            { text: "Keine Antwort", wert: 0 },
            { text: "Wenig interessiert", wert: 1 },
            { text: "Interessiert", wert: 2 },
            { text: "Sehr interessiert", wert: 3 }
        ]
    },

    // ===== PLANUNG =====
    {
        id: 501,
        text: "Wie sicher fühlen Sie sich bei der Planung von Mathematikunterricht (einzelnen Lektionen)?",
        bereich: "Planung",
        handlungsaspekte: ["Planung"],
        ebene: "einschätzung",
        typ: "slider",
        antworten: [
            { text: "Keine Antwort", wert: 0 },
            { text: "Eher unsicher", wert: 1 },
            { text: "Sicher", wert: 2 },
            { text: "Sehr sicher", wert: 3 }
        ]
    },
    {
        id: 503,
        text: "Interessieren Sie sich für innovative Unterrichtsmethoden in Mathematik?",
        bereich: "Planung",
        handlungsaspekte: ["Planung"],
        ebene: "interesse",
        typ: "slider",
        antworten: [
            { text: "Keine Antwort", wert: 0 },
            { text: "Wenig", wert: 1 },
            { text: "Mittel", wert: 2 },
            { text: "Sehr", wert: 3 }
        ]
    },
    {
        id: 504,
        text: "Können Sie Mathematikstunden an verschiedene Lernvoraussetzungen anpassen?",
        bereich: "Planung", 
        handlungsaspekte: ["Planung", "Lernbegleitung und Förderung"],
        ebene: "einschätzung",
        typ: "slider",
        antworten: [
            { text: "Keine Antwort", wert: 0 },
            { text: "Wenig", wert: 1 },
            { text: "Gut", wert: 2 },
            { text: "Sehr gut", wert: 3 }
        ]
    },

    // ===== BEURTEILUNG =====
    {
        id: 61,
        text: "Wie kompetent fühlen Sie sich bei der Beurteilung mathematischer Leistungen?",
        bereich: "Beurteilung",
        handlungsaspekte: ["Beurteilung"],
        ebene: "einschätzung",
        typ: "slider",
        antworten: [
            { text: "Keine Antwort", wert: 0 },
            { text: "Eher wenig kompetent", wert: 1 },
            { text: "Kompetent", wert: 2 },
            { text: "Sehr kompetent", wert: 3 }
        ]
    },
    {
        id: 63,
        text: "Interessieren Sie sich für alternative Beurteilungsformen?",
        bereich: "Beurteilung",
        handlungsaspekte: ["Beurteilung"],
        ebene: "interesse",
        typ: "slider",
        antworten: [
            { text: "Keine Antwort", wert: 0 },
            { text: "Wenig", wert: 1 },
            { text: "Mittel", wert: 2 },
            { text: "Sehr", wert: 3 }
        ]
    },
    {
        id: 64,
        text: "Können Sie Lernenden konstruktives Feedback zu mathematischen Lösungswegen geben?",
        bereich: "Beurteilung",
        handlungsaspekte: ["Beurteilung", "Lernbegleitung und Förderung"],
        ebene: "einschätzung",
        typ: "slider",
        antworten: [
            { text: "Keine Antwort", wert: 0 },
            { text: "Wenig", wert: 1 },
            { text: "Gut", wert: 2 },
            { text: "Sehr gut", wert: 3 }
        ]
    },

    // ===== LERNBEGLEITUNG UND FÖRDERUNG =====
    {
        id: 71,
        text: "Wie sicher fühlen Sie sich bei der individuellen Förderung in Mathematik?",
        bereich: "Lernbegleitung und Förderung",
        handlungsaspekte: ["Lernbegleitung und Förderung"],
        ebene: "einschätzung",
        typ: "slider",
        antworten: [
            { text: "Keine Antwort", wert: 0 },
            { text: "Eher unsicher", wert: 1 },
            { text: "Sicher", wert: 2 },
            { text: "Sehr sicher", wert: 3 }
        ]
    },
    {
        id: 73,
        text: "Interessieren Sie sich für den Umgang mit Rechenschwäche?",
        bereich: "Lernbegleitung und Förderung",
        handlungsaspekte: ["Lernbegleitung und Förderung"],
        ebene: "interesse",
        typ: "slider",
        antworten: [
            { text: "Keine Antwort", wert: 0 },
            { text: "Wenig", wert: 1 },
            { text: "Mittel", wert: 2 },
            { text: "Sehr", wert: 3 }
        ]
    },
    {
        id: 74,
        text: "Können Sie mathematische Begabungen erkennen und fördern?",
        bereich: "Lernbegleitung und Förderung",
        handlungsaspekte: ["Lernbegleitung und Förderung"],
        ebene: "einschätzung",
        typ: "slider",
        antworten: [
            { text: "Keine Antwort", wert: 0 },
            { text: "Wenig", wert: 1 },
            { text: "Gut", wert: 2 },
            { text: "Sehr gut", wert: 3 }
        ]
    }
];

export { FRAGEN };