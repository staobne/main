// Definition aller Fragen des Fragebogens für Mathematik-Kompetenzstandanalyse
// Jede Frage hat: id, text, bereich, handlungsaspekte, ebene, typ, antwortmöglichkeiten
// Version 2.9 - Überarbeitet mit Bezug zur Standortbestimmung auf ILIAS

const FRAGEN = [
    // ===== ZAHL UND VARIABLE ===== id 1xx

    // Matrix-Selbsteinschätzungsfragen (3 Stück - eine pro Handlungsaspekt)
    {
        id: 101,
        text: "Bitte beziehen Sie sich auf die <b>Standortbestimmung: Fachkompetenz Mathematik</b> auf ILIAS.<br><br>Wie schätzen Sie Ihre Kompetenz im Bereich <b>Zahl und Variable × Operieren und Benennen</b> ein?<br><small>(Orientieren Sie sich an der Selbstbeurteilung auf Seite 3 im Überblick-PDF)</small>",
        bereich: "Zahl und Variable",
        handlungsaspekte: ["Zahl und Variable", "Operieren und Benennen"],
        ebene: "matrix",
        typ: "slider",
        ilias_link: "https://ilias.phbern.ch/goto_phbern_grp_1792180.html",
        pdf_seite: 3,
        antworten: [
            { text: "🔴 Rot: Ich muss ziemlich viel Zeit und Energie investieren", wert: 1 },
            { text: "🟠 Orange: Nach kurzer Wiederholung würde ich die Kompetenzstufen beherrschen", wert: 2 },
            { text: "🟢 Grün: Ich beherrsche die Kompetenzstufen", wert: 3 }
        ]
    },
    {
        id: 102,
        text: "Bitte beziehen Sie sich auf die <b>Standortbestimmung: Fachkompetenz Mathematik</b> auf ILIAS.<br><br>Wie schätzen Sie Ihre Kompetenz im Bereich <b>Zahl und Variable × Erforschen und Argumentieren</b> ein?<br><small>(Orientieren Sie sich an der Selbstbeurteilung auf Seite 6 im Überblick-PDF)</small>",
        bereich: "Zahl und Variable",
        handlungsaspekte: ["Zahl und Variable", "Erforschen und Argumentieren"],
        ebene: "matrix",
        typ: "slider",
        ilias_link: "https://ilias.phbern.ch/goto_phbern_grp_1792180.html",
        pdf_seite: 6,
        antworten: [
            { text: "🔴 Rot: Ich muss ziemlich viel Zeit und Energie investieren", wert: 1 },
            { text: "🟠 Orange: Nach kurzer Wiederholung würde ich die Kompetenzstufen beherrschen", wert: 2 },
            { text: "🟢 Grün: Ich beherrsche die Kompetenzstufen", wert: 3 }
        ]
    },
    {
        id: 103,
        text: "Bitte beziehen Sie sich auf die <b>Standortbestimmung: Fachkompetenz Mathematik</b> auf ILIAS.<br><br>Wie schätzen Sie Ihre Kompetenz im Bereich <b>Zahl und Variable × Mathematisieren und Darstellen</b> ein?<br><small>(Orientieren Sie sich an der Selbstbeurteilung auf Seite 9 im Überblick-PDF)</small>",
        bereich: "Zahl und Variable",
        handlungsaspekte: ["Zahl und Variable", "Mathematisieren und Darstellen"],
        ebene: "matrix",
        typ: "slider",
        ilias_link: "https://ilias.phbern.ch/goto_phbern_grp_1792180.html",
        pdf_seite: 9,
        antworten: [
            { text: "🔴 Rot: Ich muss ziemlich viel Zeit und Energie investieren", wert: 1 },
            { text: "🟠 Orange: Nach kurzer Wiederholung würde ich die Kompetenzstufen beherrschen", wert: 2 },
            { text: "🟢 Grün: Ich beherrsche die Kompetenzstufen", wert: 3 }
        ]
    },

    // LP21-Kompetenzbeschreibungen als Kontext (Operieren und Benennen)
    {
        id: 104,
        text: "Schätzen Sie im Folgenden <b>Ihre fachliche Kompetenz</b> in Bezug auf die genannten LP21 Kompetenz ein: «Die Schülerinnen und Schüler verstehen und verwenden arithmetische Begriffe und Symbole. Sie lesen und schreiben Zahlen.»",
        bereich: "Zahl und Variable",
        handlungsaspekte: ["Zahl und Variable", "Operieren und Benennen"],
        ebene: "subjektiv",
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
        text: "«Die Schülerinnen und Schüler können flexibel zählen, Zahlen nach der Grösse ordnen und Ergebnisse überschlagen.»",
        bereich: "Zahl und Variable",
        handlungsaspekte: ["Zahl und Variable", "Operieren und Benennen"],
        ebene: "subjektiv",
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
        text: "«Die Schülerinnen und Schüler können addieren, subtrahieren, multiplizieren, dividieren und potenzieren.»",
        bereich: "Zahl und Variable",
        handlungsaspekte: ["Zahl und Variable", "Operieren und Benennen"],
        ebene: "subjektiv",
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
        text: "«Die Schülerinnen und Schüler können Terme vergleichen und umformen, Gleichungen lösen, Gesetze und Regeln anwenden.»",
        bereich: "Zahl und Variable",
        handlungsaspekte: ["Zahl und Variable", "Operieren und Benennen"],
        ebene: "subjektiv",
        typ: "slider",
        antworten: [
            { text: "Keine Antwort", wert: 0 },
            { text: "Wenig kompetent", wert: 1 },
            { text: "Kompetent", wert: 2 },
            { text: "Sehr kompetent", wert: 3 }
        ]
    },

    // LP21-Kompetenzbeschreibungen (Erforschen und Argumentieren)
    {
        id: 108,
        text: "«Die Schülerinnen und Schüler können Zahl- und Operationsbeziehungen sowie arithmetische Muster erforschen und Erkenntnisse austauschen.»",
        bereich: "Zahl und Variable",
        handlungsaspekte: ["Zahl und Variable", "Erforschen und Argumentieren"],
        ebene: "subjektiv",
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
        text: "«Die Schülerinnen und Schüler können Aussagen, Vermutungen und Ergebnisse zu Zahlen und Variablen erläutern, überprüfen, begründen.»",
        bereich: "Zahl und Variable",
        handlungsaspekte: ["Zahl und Variable", "Erforschen und Argumentieren"],
        ebene: "subjektiv",
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
        text: "«Die Schülerinnen und Schüler können beim Erforschen arithmetischer Muster Hilfsmittel nutzen.»",
        bereich: "Zahl und Variable",
        handlungsaspekte: ["Zahl und Variable", "Erforschen und Argumentieren"],
        ebene: "subjektiv",
        typ: "slider",
        antworten: [
            { text: "Keine Antwort", wert: 0 },
            { text: "Wenig kompetent", wert: 1 },
            { text: "Kompetent", wert: 2 },
            { text: "Sehr kompetent", wert: 3 }
        ]
    },

    // LP21-Kompetenzbeschreibungen (Mathematisieren und Darstellen)
    {
        id: 111,
        text: "«Die Schülerinnen und Schüler können Rechenwege darstellen, beschreiben, austauschen und nachvollziehen.»",
        bereich: "Zahl und Variable",
        handlungsaspekte: ["Zahl und Variable", "Mathematisieren und Darstellen"],
        ebene: "subjektiv",
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
        text: "«Die Schülerinnen und Schüler können Anzahlen, Zahlenfolgen und Terme veranschaulichen, beschreiben und verallgemeinern.»",
        bereich: "Zahl und Variable",
        handlungsaspekte: ["Zahl und Variable", "Mathematisieren und Darstellen"],
        ebene: "subjektiv",
        typ: "slider",
        antworten: [
            { text: "Keine Antwort", wert: 0 },
            { text: "Wenig kompetent", wert: 1 },
            { text: "Kompetent", wert: 2 },
            { text: "Sehr kompetent", wert: 3 }
        ]
    },

    // Interesse-Fragen (3 Stück - eine pro Handlungsaspekt)
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

    // ===== FORM UND RAUM ===== id 2xx

    // Matrix-Selbsteinschätzungsfragen
    {
        id: 201,
        text: "Bitte beziehen Sie sich auf die <b>Standortbestimmung: Fachkompetenz Mathematik</b> auf ILIAS.<br><br>Wie schätzen Sie Ihre Kompetenz im Bereich <b>Form und Raum × Operieren und Benennen</b> ein?<br><small>(Orientieren Sie sich an der Selbstbeurteilung auf Seite 4 im Überblick-PDF)</small>",
        bereich: "Form und Raum",
        handlungsaspekte: ["Form und Raum", "Operieren und Benennen"],
        ebene: "matrix",
        typ: "slider",
        ilias_link: "https://ilias.phbern.ch/goto_phbern_grp_1792180.html",
        pdf_seite: 4,
        antworten: [
            { text: "🔴 Rot: Ich muss ziemlich viel Zeit und Energie investieren", wert: 1 },
            { text: "🟠 Orange: Nach kurzer Wiederholung würde ich die Kompetenzstufen beherrschen", wert: 2 },
            { text: "🟢 Grün: Ich beherrsche die Kompetenzstufen", wert: 3 }
        ]
    },
    {
        id: 202,
        text: "Bitte beziehen Sie sich auf die <b>Standortbestimmung: Fachkompetenz Mathematik</b> auf ILIAS.<br><br>Wie schätzen Sie Ihre Kompetenz im Bereich <b>Form und Raum × Erforschen und Argumentieren</b> ein?<br><small>(Orientieren Sie sich an der Selbstbeurteilung auf Seite 7 im Überblick-PDF)</small>",
        bereich: "Form und Raum",
        handlungsaspekte: ["Form und Raum", "Erforschen und Argumentieren"],
        ebene: "matrix",
        typ: "slider",
        ilias_link: "https://ilias.phbern.ch/goto_phbern_grp_1792180.html",
        pdf_seite: 7,
        antworten: [
            { text: "🔴 Rot: Ich muss ziemlich viel Zeit und Energie investieren", wert: 1 },
            { text: "🟠 Orange: Nach kurzer Wiederholung würde ich die Kompetenzstufen beherrschen", wert: 2 },
            { text: "🟢 Grün: Ich beherrsche die Kompetenzstufen", wert: 3 }
        ]
    },
    {
        id: 203,
        text: "Bitte beziehen Sie sich auf die <b>Standortbestimmung: Fachkompetenz Mathematik</b> auf ILIAS.<br><br>Wie schätzen Sie Ihre Kompetenz im Bereich <b>Form und Raum × Mathematisieren und Darstellen</b> ein?<br><small>(Orientieren Sie sich an der Selbstbeurteilung auf Seite 10 im Überblick-PDF)</small>",
        bereich: "Form und Raum",
        handlungsaspekte: ["Form und Raum", "Mathematisieren und Darstellen"],
        ebene: "matrix",
        typ: "slider",
        ilias_link: "https://ilias.phbern.ch/goto_phbern_grp_1792180.html",
        pdf_seite: 10,
        antworten: [
            { text: "🔴 Rot: Ich muss ziemlich viel Zeit und Energie investieren", wert: 1 },
            { text: "🟠 Orange: Nach kurzer Wiederholung würde ich die Kompetenzstufen beherrschen", wert: 2 },
            { text: "🟢 Grün: Ich beherrsche die Kompetenzstufen", wert: 3 }
        ]
    },

    // LP21-Kompetenzbeschreibungen (Operieren und Benennen)
    {
        id: 205,
        text: "Schätzen Sie im Folgenden <i>Ihre fachliche Kompetenz</i> in Bezug auf die genannten LP21 Kompetenz ein: «Die Schülerinnen und Schüler verstehen und verwenden Begriffe und Symbole.»",
        bereich: "Form und Raum",
        handlungsaspekte: ["Form und Raum", "Operieren und Benennen"],
        ebene: "subjektiv",
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
        text: "«Die Schülerinnen und Schüler können Figuren und Körper abbilden, zerlegen und zusammensetzen.»",
        bereich: "Form und Raum",
        handlungsaspekte: ["Form und Raum", "Operieren und Benennen"],
        ebene: "subjektiv",
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
        text: "«Die Schülerinnen und Schüler können Längen, Flächen und Volumen bestimmen und berechnen.»",
        bereich: "Form und Raum",
        handlungsaspekte: ["Form und Raum", "Operieren und Benennen"],
        ebene: "subjektiv",
        typ: "slider",
        antworten: [
            { text: "Keine Antwort", wert: 0 },
            { text: "Wenig kompetent", wert: 1 },
            { text: "Kompetent", wert: 2 },
            { text: "Sehr kompetent", wert: 3 }
        ]
    },

    // LP21-Kompetenzbeschreibungen (Erforschen und Argumentieren)
    {
        id: 208,
        text: "«Die Schülerinnen und Schüler können geometrische Beziehungen, insbesondere zwischen Längen, Flächen und Volumen, erforschen, Vermutungen formulieren und Erkenntnisse austauschen.»",
        bereich: "Form und Raum",
        handlungsaspekte: ["Form und Raum", "Erforschen und Argumentieren"],
        ebene: "subjektiv",
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
        text: "«Die Schülerinnen und Schüler können Aussagen und Formeln zu geometrischen Beziehungen überprüfen, mit Beispielen belegen und begründen.»",
        bereich: "Form und Raum",
        handlungsaspekte: ["Form und Raum", "Erforschen und Argumentieren"],
        ebene: "subjektiv",
        typ: "slider",
        antworten: [
            { text: "Keine Antwort", wert: 0 },
            { text: "Wenig kompetent", wert: 1 },
            { text: "Kompetent", wert: 2 },
            { text: "Sehr kompetent", wert: 3 }
        ]
    },

    // LP21-Kompetenzbeschreibungen (Mathematisieren und Darstellen)
    {
        id: 210,
        text: "«Die Schülerinnen und Schüler können Körper und räumliche Beziehungen darstellen.»",
        bereich: "Form und Raum",
        handlungsaspekte: ["Form und Raum", "Mathematisieren und Darstellen"],
        ebene: "subjektiv",
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
        text: "«Die Schülerinnen und Schüler können Figuren falten, skizzieren, zeichnen und konstruieren sowie Darstellungen zur ebenen Geometrie austauschen und überprüfen.»",
        bereich: "Form und Raum",
        handlungsaspekte: ["Form und Raum", "Mathematisieren und Darstellen"],
        ebene: "subjektiv",
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
        text: "«Die Schülerinnen und Schüler können sich Figuren und Körper in verschiedenen Lagen vorstellen, Veränderungen darstellen und beschreiben (Kopfgeometrie).»",
        bereich: "Form und Raum",
        handlungsaspekte: ["Form und Raum", "Mathematisieren und Darstellen"],
        ebene: "subjektiv",
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
        text: "«Die Schülerinnen und Schüler können in einem Koordinatensystem die Koordinaten von Figuren und Körpern bestimmen bzw. Figuren und Körper aufgrund ihrer Koordinaten darstellen sowie Pläne lesen und zeichnen.»",
        bereich: "Form und Raum",
        handlungsaspekte: ["Form und Raum", "Mathematisieren und Darstellen"],
        ebene: "subjektiv",
        typ: "slider",
        antworten: [
            { text: "Keine Antwort", wert: 0 },
            { text: "Wenig kompetent", wert: 1 },
            { text: "Kompetent", wert: 2 },
            { text: "Sehr kompetent", wert: 3 }
        ]
    },

    // Interesse-Fragen
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

    // ===== GRÖSSEN UND FUNKTIONEN ===== id 3xx

    // Matrix-Selbsteinschätzungsfragen
    {
        id: 301,
        text: "Bitte beziehen Sie sich auf die <b>Standortbestimmung: Fachkompetenz Mathematik</b> auf ILIAS.<br><br>Wie schätzen Sie Ihre Kompetenz im Bereich <b>Grössen und Funktionen × Operieren und Benennen</b> ein?<br><small>(Orientieren Sie sich an der Selbstbeurteilung auf Seite 5 - obere Hälfte im Überblick-PDF)</small>",
        bereich: "Grössen und Funktionen",
        handlungsaspekte: ["Grössen und Funktionen", "Operieren und Benennen"],
        ebene: "matrix",
        typ: "slider",
        ilias_link: "https://ilias.phbern.ch/goto_phbern_grp_1792180.html",
        pdf_seite: 5,
        antworten: [
            { text: "🔴 Rot: Ich muss ziemlich viel Zeit und Energie investieren", wert: 1 },
            { text: "🟠 Orange: Nach kurzer Wiederholung würde ich die Kompetenzstufen beherrschen", wert: 2 },
            { text: "🟢 Grün: Ich beherrsche die Kompetenzstufen", wert: 3 }
        ]
    },
    {
        id: 302,
        text: "Bitte beziehen Sie sich auf die <b>Standortbestimmung: Fachkompetenz Mathematik</b> auf ILIAS.<br><br>Wie schätzen Sie Ihre Kompetenz im Bereich <b>Grössen und Funktionen × Erforschen und Argumentieren</b> ein?<br><small>(Orientieren Sie sich an der Selbstbeurteilung auf Seite 8 - obere Hälfte im Überblick-PDF)</small>",
        bereich: "Grössen und Funktionen",
        handlungsaspekte: ["Grössen und Funktionen", "Erforschen und Argumentieren"],
        ebene: "matrix",
        typ: "slider",
        ilias_link: "https://ilias.phbern.ch/goto_phbern_grp_1792180.html",
        pdf_seite: 8,
        antworten: [
            { text: "🔴 Rot: Ich muss ziemlich viel Zeit und Energie investieren", wert: 1 },
            { text: "🟠 Orange: Nach kurzer Wiederholung würde ich die Kompetenzstufen beherrschen", wert: 2 },
            { text: "🟢 Grün: Ich beherrsche die Kompetenzstufen", wert: 3 }
        ]
    },
    {
        id: 303,
        text: "Bitte beziehen Sie sich auf die <b>Standortbestimmung: Fachkompetenz Mathematik</b> auf ILIAS.<br><br>Wie schätzen Sie Ihre Kompetenz im Bereich <b>Grössen und Funktionen × Mathematisieren und Darstellen</b> ein?<br><small>(Orientieren Sie sich an der Selbstbeurteilung auf Seite 11 - obere Hälfte im Überblick-PDF)</small>",
        bereich: "Grössen und Funktionen",
        handlungsaspekte: ["Grössen und Funktionen", "Mathematisieren und Darstellen"],
        ebene: "matrix",
        typ: "slider",
        ilias_link: "https://ilias.phbern.ch/goto_phbern_grp_1792180.html",
        pdf_seite: 11,
        antworten: [
            { text: "🔴 Rot: Ich muss ziemlich viel Zeit und Energie investieren", wert: 1 },
            { text: "🟠 Orange: Nach kurzer Wiederholung würde ich die Kompetenzstufen beherrschen", wert: 2 },
            { text: "🟢 Grün: Ich beherrsche die Kompetenzstufen", wert: 3 }
        ]
    },

    // LP21-Kompetenzbeschreibungen (Operieren und Benennen)
    {
        id: 305,
        text: "Schätzen Sie im Folgenden <i>Ihre fachliche Kompetenz</i> in Bezug auf die genannten LP21 Kompetenz ein: «Die Schülerinnen und Schüler verstehen und verwenden Begriffe und Symbole zu Grössen und Funktionen»",
        bereich: "Grössen und Funktionen",
        handlungsaspekte: ["Grössen und Funktionen", "Operieren und Benennen"],
        ebene: "subjektiv",
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
        text: "«Die Schülerinnen und Schüler können Grössen schätzen, messen, umwandeln, runden und mit ihnen rechnen.»",
        bereich: "Grössen und Funktionen",
        handlungsaspekte: ["Grössen und Funktionen", "Operieren und Benennen"],
        ebene: "subjektiv",
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
        text: "«Die Schülerinnen und Schüler können funktionale Zusammenhänge beschreiben und Funktionswerte bestimmen.»",
        bereich: "Grössen und Funktionen",
        handlungsaspekte: ["Grössen und Funktionen", "Operieren und Benennen"],
        ebene: "subjektiv",
        typ: "slider",
        antworten: [
            { text: "Keine Antwort", wert: 0 },
            { text: "Wenig kompetent", wert: 1 },
            { text: "Kompetent", wert: 2 },
            { text: "Sehr kompetent", wert: 3 }
        ]
    },

    // LP21-Kompetenzbeschreibungen (Erforschen und Argumentieren)
    {
        id: 308,
        text: "«Die Schülerinnen und Schüler können zu Grössenbeziehungen und funktionalen Zusammenhängen Fragen formulieren, diese erforschen sowie Ergebnisse überprüfen und begründen.»",
        bereich: "Grössen und Funktionen",
        handlungsaspekte: ["Grössen und Funktionen", "Erforschen und Argumentieren"],
        ebene: "subjektiv",
        typ: "slider",
        antworten: [
            { text: "Keine Antwort", wert: 0 },
            { text: "Wenig kompetent", wert: 1 },
            { text: "Kompetent", wert: 2 },
            { text: "Sehr kompetent", wert: 3 }
        ]
    },

    // LP21-Kompetenzbeschreibungen (Mathematisieren und Darstellen)
    {
        id: 309,
        text: "«Die Schülerinnen und Schüler können Sachsituationen mathematisieren, darstellen, berechnen sowie Ergebnisse interpretieren und überprüfen.»",
        bereich: "Grössen und Funktionen",
        handlungsaspekte: ["Grössen und Funktionen", "Mathematisieren und Darstellen"],
        ebene: "subjektiv",
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
        text: "«Die Schülerinnen und Schüler können Terme, Formeln, Gleichungen und Tabellen mit Sachsituationen konkretisieren.»",
        bereich: "Grössen und Funktionen",
        handlungsaspekte: ["Grössen und Funktionen", "Mathematisieren und Darstellen"],
        ebene: "subjektiv",
        typ: "slider",
        antworten: [
            { text: "Keine Antwort", wert: 0 },
            { text: "Wenig kompetent", wert: 1 },
            { text: "Kompetent", wert: 2 },
            { text: "Sehr kompetent", wert: 3 }
        ]
    },

    // Interesse-Fragen
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

    // ===== DATEN UND ZUFALL ===== id 4xx

    // Matrix-Selbsteinschätzungsfragen
    {
        id: 401,
        text: "Bitte beziehen Sie sich auf die <b>Standortbestimmung: Fachkompetenz Mathematik</b> auf ILIAS.<br><br>Wie schätzen Sie Ihre Kompetenz im Bereich <b>Daten und Zufall × Operieren und Benennen</b> ein?<br><small>(Orientieren Sie sich an der Selbstbeurteilung auf Seite 5 - untere Hälfte im Überblick-PDF)</small>",
        bereich: "Daten und Zufall",
        handlungsaspekte: ["Daten und Zufall", "Operieren und Benennen"],
        ebene: "matrix",
        typ: "slider",
        ilias_link: "https://ilias.phbern.ch/goto_phbern_grp_1792180.html",
        pdf_seite: 5,
        antworten: [
            { text: "🔴 Rot: Ich muss ziemlich viel Zeit und Energie investieren", wert: 1 },
            { text: "🟠 Orange: Nach kurzer Wiederholung würde ich die Kompetenzstufen beherrschen", wert: 2 },
            { text: "🟢 Grün: Ich beherrsche die Kompetenzstufen", wert: 3 }
        ]
    },
    {
        id: 402,
        text: "Bitte beziehen Sie sich auf die <b>Standortbestimmung: Fachkompetenz Mathematik</b> auf ILIAS.<br><br>Wie schätzen Sie Ihre Kompetenz im Bereich <b>Daten und Zufall × Erforschen und Argumentieren</b> ein?<br><small>(Orientieren Sie sich an der Selbstbeurteilung auf Seite 8 - untere Hälfte im Überblick-PDF)</small>",
        bereich: "Daten und Zufall",
        handlungsaspekte: ["Daten und Zufall", "Erforschen und Argumentieren"],
        ebene: "matrix",
        typ: "slider",
        ilias_link: "https://ilias.phbern.ch/goto_phbern_grp_1792180.html",
        pdf_seite: 8,
        antworten: [
            { text: "🔴 Rot: Ich muss ziemlich viel Zeit und Energie investieren", wert: 1 },
            { text: "🟠 Orange: Nach kurzer Wiederholung würde ich die Kompetenzstufen beherrschen", wert: 2 },
            { text: "🟢 Grün: Ich beherrsche die Kompetenzstufen", wert: 3 }
        ]
    },
    {
        id: 403,
        text: "Bitte beziehen Sie sich auf die <b>Standortbestimmung: Fachkompetenz Mathematik</b> auf ILIAS.<br><br>Wie schätzen Sie Ihre Kompetenz im Bereich <b>Daten und Zufall × Mathematisieren und Darstellen</b> ein?<br><small>(Orientieren Sie sich an der Selbstbeurteilung auf Seite 11 - untere Hälfte im Überblick-PDF)</small>",
        bereich: "Daten und Zufall",
        handlungsaspekte: ["Daten und Zufall", "Mathematisieren und Darstellen"],
        ebene: "matrix",
        typ: "slider",
        ilias_link: "https://ilias.phbern.ch/goto_phbern_grp_1792180.html",
        pdf_seite: 11,
        antworten: [
            { text: "🔴 Rot: Ich muss ziemlich viel Zeit und Energie investieren", wert: 1 },
            { text: "🟠 Orange: Nach kurzer Wiederholung würde ich die Kompetenzstufen beherrschen", wert: 2 },
            { text: "🟢 Grün: Ich beherrsche die Kompetenzstufen", wert: 3 }
        ]
    },

    // LP21-Kompetenzbeschreibungen (Operieren und Benennen)
    {
        id: 405,
        text: "Schätzen Sie im Folgenden <i>Ihre fachliche Kompetenz</i> in Bezug auf die genannten LP21 Kompetenz ein: «Die Schülerinnen und Schüler verstehen und verwenden Begriffe und Symbole zu Daten und Zufall»",
        bereich: "Daten und Zufall",
        handlungsaspekte: ["Daten und Zufall", "Operieren und Benennen"],
        ebene: "subjektiv",
        typ: "slider",
        antworten: [
            { text: "Keine Antwort", wert: 0 },
            { text: "Wenig kompetent", wert: 1 },
            { text: "Kompetent", wert: 2 },
            { text: "Sehr kompetent", wert: 3 }
        ]
    },

    // LP21-Kompetenzbeschreibungen (Erforschen und Argumentieren)
    {
        id: 406,
        text: "«Die Schülerinnen und Schüler können Sachsituationen zur Statistik, Kombinatorik und Wahrscheinlichkeit erforschen, Vermutungen formulieren und überprüfen.»",
        bereich: "Daten und Zufall",
        handlungsaspekte: ["Daten und Zufall", "Erforschen und Argumentieren"],
        ebene: "subjektiv",
        typ: "slider",
        antworten: [
            { text: "Keine Antwort", wert: 0 },
            { text: "Wenig kompetent", wert: 1 },
            { text: "Kompetent", wert: 2 },
            { text: "Sehr kompetent", wert: 3 }
        ]
    },

    // LP21-Kompetenzbeschreibungen (Mathematisieren und Darstellen)
    {
        id: 407,
        text: "«Die Schülerinnen und Schüler können Daten zu Statistik, Kombinatorik und Wahrscheinlichkeit erheben, ordnen, darstellen, auswerten und interpretieren.»",
        bereich: "Daten und Zufall",
        handlungsaspekte: ["Daten und Zufall", "Mathematisieren und Darstellen"],
        ebene: "subjektiv",
        typ: "slider",
        antworten: [
            { text: "Keine Antwort", wert: 0 },
            { text: "Wenig kompetent", wert: 1 },
            { text: "Kompetent", wert: 2 },
            { text: "Sehr kompetent", wert: 3 }
        ]
    },

    // Interesse-Fragen (korrigierte IDs)
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
        id: 409,
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
        id: 410,
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

    // ===== PLANUNG ===== id 5xx
    {
        id: 501,
        text: "Wie sicher fühlen Sie sich bei der Planung einzelner Mathematiklektionen?",
        bereich: "Planung",
        handlungsaspekte: ["Planung"],
        ebene: "subjektiv",
        typ: "slider",
        antworten: [
            { text: "Keine Antwort", wert: 0 },
            { text: "Eher unsicher", wert: 1 },
            { text: "Sicher", wert: 2 },
            { text: "Sehr sicher", wert: 3 }
        ]
    },
    {
        id: 502,
        text: "Wie sicher fühlen Sie sich beim Planen von Unterrichtssequenzen über mehrere Lektionen hinweg?",
        bereich: "Planung",
        handlungsaspekte: ["Planung"],
        ebene: "subjektiv",
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
        text: "Können Sie mathematische Lernziele aus dem LP21 in konkrete Unterrichtsziele übersetzen?",
        bereich: "Planung",
        handlungsaspekte: ["Planung"],
        ebene: "subjektiv",
        typ: "slider",
        antworten: [
            { text: "Keine Antwort", wert: 0 },
            { text: "Selten", wert: 1 },
            { text: "Meistens", wert: 2 },
            { text: "Immer", wert: 3 }
        ]
    },
    {
        id: 504,
        text: "Können Sie Mathematikstunden an verschiedene Lernvoraussetzungen anpassen?",
        bereich: "Planung",
        handlungsaspekte: ["Planung", "Lernbegleitung und Förderung"],
        ebene: "subjektiv",
        typ: "slider",
        antworten: [
            { text: "Keine Antwort", wert: 0 },
            { text: "Wenig", wert: 1 },
            { text: "Gut", wert: 2 },
            { text: "Sehr gut", wert: 3 }
        ]
    },
    {
        id: 505,
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

    // ===== BEURTEILUNG ===== id 6xx
    {
        id: 601,
        text: "Wie kompetent fühlen Sie sich bei der Beurteilung mathematischer Leistungen?",
        bereich: "Beurteilung",
        handlungsaspekte: ["Beurteilung"],
        ebene: "subjektiv",
        typ: "slider",
        antworten: [
            { text: "Keine Antwort", wert: 0 },
            { text: "Eher wenig kompetent", wert: 1 },
            { text: "Kompetent", wert: 2 },
            { text: "Sehr kompetent", wert: 3 }
        ]
    },
    {
        id: 602,
        text: "Wie sicher fühlen Sie sich beim Erstellen von kompetenzorientierten Beurteilungsaufgaben?",
        bereich: "Beurteilung",
        handlungsaspekte: ["Beurteilung"],
        ebene: "subjektiv",
        typ: "slider",
        antworten: [
            { text: "Keine Antwort", wert: 0 },
            { text: "Eher unsicher", wert: 1 },
            { text: "Sicher", wert: 2 },
            { text: "Sehr sicher", wert: 3 }
        ]
    },
    {
        id: 603,
        text: "Können Sie zwischen formativer und summativer Beurteilung im Mathematikunterricht differenzieren und beide gezielt einsetzen?",
        bereich: "Beurteilung",
        handlungsaspekte: ["Beurteilung"],
        ebene: "subjektiv",
        typ: "slider",
        antworten: [
            { text: "Keine Antwort", wert: 0 },
            { text: "Wenig", wert: 1 },
            { text: "Gut", wert: 2 },
            { text: "Sehr gut", wert: 3 }
        ]
    },
    {
        id: 604,
        text: "Können Sie Lernenden konstruktives Feedback zu mathematischen Lösungswegen geben?",
        bereich: "Beurteilung",
        handlungsaspekte: ["Beurteilung", "Lernbegleitung und Förderung"],
        ebene: "subjektiv",
        typ: "slider",
        antworten: [
            { text: "Keine Antwort", wert: 0 },
            { text: "Wenig", wert: 1 },
            { text: "Gut", wert: 2 },
            { text: "Sehr gut", wert: 3 }
        ]
    },
    {
        id: 605,
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

    // ===== LERNBEGLEITUNG UND FÖRDERUNG ===== id 7xx
    {
        id: 701,
        text: "Wie sicher fühlen Sie sich bei der individuellen Förderung in Mathematik?",
        bereich: "Lernbegleitung und Förderung",
        handlungsaspekte: ["Lernbegleitung und Förderung"],
        ebene: "subjektiv",
        typ: "slider",
        antworten: [
            { text: "Keine Antwort", wert: 0 },
            { text: "Eher unsicher", wert: 1 },
            { text: "Sicher", wert: 2 },
            { text: "Sehr sicher", wert: 3 }
        ]
    },
    {
        id: 702,
        text: "Wie sicher fühlen Sie sich beim Diagnostizieren von Lernständen und Lernschwierigkeiten in Mathematik?",
        bereich: "Lernbegleitung und Förderung",
        handlungsaspekte: ["Lernbegleitung und Förderung"],
        ebene: "subjektiv",
        typ: "slider",
        antworten: [
            { text: "Keine Antwort", wert: 0 },
            { text: "Eher unsicher", wert: 1 },
            { text: "Sicher", wert: 2 },
            { text: "Sehr sicher", wert: 3 }
        ]
    },
    {
        id: 703,
        text: "Können Sie differenzierende Aufgabenstellungen für heterogene Lerngruppen entwickeln?",
        bereich: "Lernbegleitung und Förderung",
        handlungsaspekte: ["Lernbegleitung und Förderung"],
        ebene: "subjektiv",
        typ: "slider",
        antworten: [
            { text: "Keine Antwort", wert: 0 },
            { text: "Selten", wert: 1 },
            { text: "Oft", wert: 2 },
            { text: "Regelmässig", wert: 3 }
        ]
    },
    {
        id: 704,
        text: "Können Sie mathematische Begabungen erkennen und fördern?",
        bereich: "Lernbegleitung und Förderung",
        handlungsaspekte: ["Lernbegleitung und Förderung"],
        ebene: "subjektiv",
        typ: "slider",
        antworten: [
            { text: "Keine Antwort", wert: 0 },
            { text: "Wenig", wert: 1 },
            { text: "Gut", wert: 2 },
            { text: "Sehr gut", wert: 3 }
        ]
    },
    {
        id: 705,
        text: "Interessieren Sie sich für den Umgang mit Rechenschwäche und Dyskalkulie?",
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
    }
];

export { FRAGEN };
