// Definition aller Fragen des Fragebogens für Mathematik-Kompetenzstandanalyse
// Jede Frage hat: id, text, bereich, handlungsaspekte, ebene, typ, antwortmöglichkeiten

const FRAGEN = [
    // ===== ZAHL UND VARIABLE ===== id 1xx
    {
        id: 101,
        text: "Wie sicher fühlen Sie sich beim Erklären und Formulieren von Förderhinwesien zu den Grundrechenarten?",
        bereich: "Zahl und Variable",
        handlungsaspekte: ["Zahl und Variable", "Operieren und Benennen"],
        ebene: "subjektiv",
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
        text: "Wie sicher fühlen Sie sich beim Erklären und Formulieren von Förderhinwesien zum Stellenwertsystem?",
        bereich: "Zahl und Variable",
        handlungsaspekte: ["Zahl und Variable", "Operieren und Benennen"],
        ebene: "subjektiv",
        typ: "slider",
        antworten: [
            { text: "Keine Antwort", wert: 0 },
            { text: "Eher unsicher", wert: 1 },
            { text: "Eher sicher", wert: 2 },
            { text: "Sehr sicher", wert: 3 }
        ]
    },
    {
        id: 103,
        text: "Welches Prinzip eignet sich am besten für die Erklärung der Multiplikation von negativen Zahlen?",
        bereich: "Zahl und Variable",
        handlungsaspekte: ["Zahl und Variable", "Operieren und Benennen"],
        ebene: "objektiv",
        typ: "mc",
        antworten: [
            { text: "Das operative Prinzip", wert: 1 },
            { text: "Das Permanenzprinzip", wert: 3 }, // korrekte Antwort
            { text: "Das genetische Prinzip", wert: 1 },
            { text: "Das EIS (enaktiv, ikonisch, symbolisch) Prinzip", wert: 1 }
        ]
    },
    {
        id: 104,
        text: "Schätzen Sie im Folgenden <b>Ihre fachliche Kompetenz</br> in Bezug auf die genannten LP21 Kompetenz ein: «Die Schülerinnen und Schüler verstehen und verwenden arithmetische Begriffe und Symbole. Sie lesen und schreiben Zahlen.»",
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
    {
        id: 111,
        text: "«Die Schülerinnen und Schüler können Rechenwege darstellen, beschreiben, austauschen und nachvollziehen.»",
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
        id: 112,
        text: "«Die Schülerinnen und Schüler können Anzahlen, Zahlenfolgen und Terme veranschaulichen, beschreiben und verallgemeinern.»",
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
        id: 113,
        text: "Können Sie Schüler*innen beim Erkunden von Zahlenmustern helfen?",
        bereich: "Zahl und Variable",
        handlungsaspekte: ["Zahl und Variable", "Erforschen und Argumentieren"],
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
        id: 114,
        text: "Wie schätzen Sie Ihre Kompetenzen ein in Bezug auf Unterrichtsplanung in Arithmetik und Algebra?",
        bereich: "Zahl und Variable",
        handlungsaspekte: ["Planung"],
        ebene: "subjektiv",
        typ: "slider",
        antworten: [
            { text: "Wenig Kompetenz", wert: 0 },
            { text: "Mittlere Kompetenz", wert: 1 },
            { text: "Hohe Kompetenz", wert: 2 },
            { text: "Sehr hohe Kompetenz", wert: 3 }
        ]
    },
    {
        id: 115,
        text: "Eine lineare Gleichung hat immer genau eine Lösung.",
        bereich: "Zahl und Variable",
        handlungsaspekte: ["Zahl und Variable", "Erforschen und Argumentieren"],
        ebene: "objektiv",
        typ: "mc",
        antworten: [
            { text: "Richtig", wert: 1 },
            { text: "Falsch", wert: 3 } // korrekte Antwort
        ]
    },

    // ===== FORM UND RAUM =====
    {
        id: 21,
        text: "Wie gut können Sie geometrische Zusammenhänge visualisieren?",
        bereich: "Form und Raum",
        handlungsaspekte: ["Form und Raum", "Mathematisieren und Darstellen"],
        ebene: "subjektiv",
        typ: "slider",
        antworten: [
            { text: "Keine Antwort", wert: 0 },
            { text: "Eher schlecht", wert: 1 },
            { text: "Gut", wert: 2 },
            { text: "Sehr gut", wert: 3 }
        ]
    },
    {
        id: 22,
        text: "Wie viele Ecken hat ein Oktaeder?",
        bereich: "Form und Raum",
        handlungsaspekte: ["Form und Raum", "Operieren und Benennen"],
        ebene: "objektiv",
        typ: "mc",
        antworten: [
            { text: "6", wert: 3 }, // korrekte Antwort
            { text: "8", wert: 1 },
            { text: "10", wert: 1 },
            { text: "12", wert: 1 }
        ]
    },
    {
        id: 23,
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
        id: 24,
        text: "Können Sie Schüler*innen beim Entdecken geometrischer Eigenschaften anleiten?",
        bereich: "Form und Raum",
        handlungsaspekte: ["Form und Raum", "Erforschen und Argumentieren"],
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
        id: 204,
        text: "Schätzen Sie im Folgenden <i>Ihre fachliche Kompetenz</i> in Bezug auf die genannten LP21 Kompetenz ein: «Die Schülerinnen und Schüler verstehen und verwenden arithmetische Begriffe und Symbole. Sie lesen und schreiben Zahlen.»",
        bereich: "Form und Raum",
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

    // ===== GRÖSSEN UND FUNKTIONEN =====
    {
        id: 31,
        text: "Wie sicher sind Sie im Umgang mit proportionalen Zusammenhängen?",
        bereich: "Grössen und Funktionen",
        handlungsaspekte: ["Grössen und Funktionen", "Mathematisieren und Darstellen"],
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
        id: 32,
        text: "Ein Auto fährt mit konstanter Geschwindigkeit 60 km/h. Wie weit kommt es in 2.5 Stunden?",
        bereich: "Grössen und Funktionen",
        handlungsaspekte: ["Grössen und Funktionen", "Operieren und Benennen"],
        ebene: "objektiv",
        typ: "mc",
        antworten: [
            { text: "120 km", wert: 1 },
            { text: "150 km", wert: 3 }, // korrekte Antwort
            { text: "180 km", wert: 1 },
            { text: "240 km", wert: 1 }
        ]
    },
    {
        id: 33,
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
        id: 34,
        text: "Können Sie Lernende bei der Modellierung von Alltagssituationen unterstützen?",
        bereich: "Grössen und Funktionen",
        handlungsaspekte: ["Grössen und Funktionen", "Mathematisieren und Darstellen"],
        ebene: "subjektiv",
        typ: "slider",
        antworten: [
            { text: "Keine Antwort", wert: 0 },
            { text: "Wenig", wert: 1 },
            { text: "Gut", wert: 2 },
            { text: "Sehr gut", wert: 3 }
        ]
    },

    // ===== DATEN UND ZUFALL =====
    {
        id: 41,
        text: "Wie kompetent fühlen Sie sich bei der Interpretation von Diagrammen?",
        bereich: "Daten und Zufall",
        handlungsaspekte: ["Daten und Zufall", "Mathematisieren und Darstellen"],
        ebene: "subjektiv",
        typ: "slider",
        antworten: [
            { text: "Wenig kompetent", wert: 0 },
            { text: "Eher wenig", wert: 1 },
            { text: "Kompetent", wert: 2 },
            { text: "Sehr kompetent", wert: 3 }
        ]
    },
    {
        id: 42,
        text: "Beim Werfen einer fairen Münze: Wie gross ist die Wahrscheinlichkeit für 'Kopf'?",
        bereich: "Daten und Zufall",
        handlungsaspekte: ["Daten und Zufall", "Operieren und Benennen"],
        ebene: "objektiv",
        typ: "mc",
        antworten: [
            { text: "0.25", wert: 1 },
            { text: "0.5", wert: 3 }, // korrekte Antwort
            { text: "0.75", wert: 1 },
            { text: "1.0", wert: 1 }
        ]
    },
    {
        id: 43,
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
        id: 44,
        text: "Können Sie Schüler*innen beim kritischen Hinterfragen von Statistiken anleiten?",
        bereich: "Daten und Zufall",
        handlungsaspekte: ["Daten und Zufall", "Erforschen und Argumentieren"],
        ebene: "subjektiv",
        typ: "slider",
        antworten: [
            { text: "Keine Antwort", wert: 0 },
            { text: "Wenig", wert: 1 },
            { text: "Gut", wert: 2 },
            { text: "Sehr gut", wert: 3 }
        ]
    },

    // ===== PLANUNG =====
    {
        id: 51,
        text: "Wie sicher fühlen Sie sich bei der Planung von Mathematikstunden?",
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
        id: 52,
        text: "Was ist das wichtigste Element einer guten Mathematikstunde?",
        bereich: "Planung",
        handlungsaspekte: ["Planung"],
        ebene: "objektiv",
        typ: "mc",
        antworten: [
            { text: "Viele Übungsaufgaben", wert: 1 },
            { text: "Klare Lernziele", wert: 3 }, // beste Antwort
            { text: "Schwierige Aufgaben", wert: 1 },
            { text: "Lange Erklärungen", wert: 1 }
        ]
    },
    {
        id: 53,
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
        id: 54,
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

    // ===== BEURTEILUNG =====
    {
        id: 61,
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
        id: 62,
        text: "Was ist der Hauptzweck formativer Beurteilung?",
        bereich: "Beurteilung",
        handlungsaspekte: ["Beurteilung"],
        ebene: "objektiv",
        typ: "mc",
        antworten: [
            { text: "Noten geben und Grundlage für Zeugnis", wert: 1 },
            { text: "Lernprozess unterstützen", wert: 3 }, // korrekte Antwort
            { text: "Eltern informieren", wert: 1 },
            { text: "Vergleichen", wert: 1 }
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
        ebene: "subjektiv",
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
        id: 72,
        text: "Was ist das wichtigste bei der Fehleranalyse?",
        bereich: "Lernbegleitung und Förderung",
        handlungsaspekte: ["Lernbegleitung und Förderung"],
        ebene: "objektiv",
        typ: "mc",
        antworten: [
            { text: "Fehler korrigieren", wert: 1 },
            { text: "Denkprozesse verstehen", wert: 3 }, // korrekte Antwort
            { text: "Noten abziehen", wert: 1 },
            { text: "Üben lassen", wert: 1 }
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
        ebene: "subjektiv",
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