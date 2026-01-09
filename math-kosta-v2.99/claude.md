# Kompetenzstandanalyse Mathematik Master - Version 2.99

## Projektübersicht

Webbasierte interaktive Anwendung zur Kompetenzstandanalyse für das Fach Mathematik im Masterstudium der PHBern.

## Version 2.99 - Änderungen

- **Objektive Fragen entfernt**: Nur noch Einschätzung und Interesse (keine Wissensfragen mehr)
- **2 Ebenen**: `einschätzung` und `interesse` (vorher 3: subjektiv, objektiv, interesse)
- **Spidergraph**: 2 Datenreihen statt 3
- **Viererfeld-Formel**: `Bedarf = MAX_WERT + 1 - Einschätzung` (= 4 - Einschätzung)
- **Farbliche Differenzierung**: Einschätzungsfragen blau, Interessefragen gelb

## Dateistruktur

```
math-kosta-v2.99/
├── index.html       # Hauptseite mit UI-Struktur
├── main.js          # Kernanwendungslogik
├── fragen.js        # Fragenkatalog (~60 Fragen)
├── config.js        # Konfiguration und Konstanten
└── style.css        # Styling
```

## Wichtige Konstanten

```javascript
MIN_WERT = 0
MAX_WERT = 3
MAX_SELECTED_SUBJECTS = 4
```

## Fragenstruktur (fragen.js)

```javascript
{
  id: 101,
  text: "Fragetext...",
  bereich: "Zahl und Variable",           // 7 Bereiche
  handlungsaspekte: ["Zahl und Variable", "Operieren und Benennen"],
  ebene: "einschätzung",                   // oder "interesse"
  typ: "slider",                           // nur noch slider
  antworten: [
    { text: "Keine Antwort", wert: 0 },
    { text: "Wenig kompetent", wert: 1 },
    { text: "Kompetent", wert: 2 },
    { text: "Sehr kompetent", wert: 3 }
  ]
}
```

## Bereiche

**Fragen-Bereiche (7):**
- Zahl und Variable
- Form und Raum
- Grössen und Funktionen
- Daten und Zufall
- Planung
- Beurteilung
- Lernbegleitung und Förderung

**Analyse-Bereiche (10):**
- 4 mathematische Kompetenzbereiche (wie oben, ohne didaktische)
- 3 Handlungsaspekte: Operieren und Benennen, Erforschen und Argumentieren, Mathematisieren und Darstellen
- 3 didaktische Kompetenzen: Planung, Beurteilung, Lernbegleitung und Förderung

## Kernfunktionen (main.js)

| Funktion | Beschreibung |
|----------|--------------|
| `mapAntworten()` | Verteilt Antworten auf Analysebereiche nach Handlungsaspekten |
| `drawRadar()` | Zeichnet 10-achsigen Radar-Chart mit 2 Datenreihen |
| `drawPriorityMatrix()` | Zeichnet Viererfeld mit Prioritäten |
| `calculatePriorityPositions()` | Berechnet Position im Viererfeld |
| `renderFragen()` | Rendert Fragen mit farblicher Differenzierung |

## Viererfeld-Berechnung

```javascript
const einschätzung = durchschnitt(bereichData.einschätzung);
const interesse = durchschnitt(bereichData.interesse);
const bedarf = MAX_WERT + 1 - einschätzung;  // 4 - einschätzung

// Quadranten:
// interesse > 1.5 && bedarf > 1.5 → Priorität 1 (rot)
// interesse ≤ 1.5 && bedarf > 1.5 → Priorität 2 (orange)
// interesse > 1.5 && bedarf ≤ 1.5 → Priorität 3 (blau)
// interesse ≤ 1.5 && bedarf ≤ 1.5 → Ohne Priorität (grau)
```

## Viererfeld-Darstellung (Hybrid-Ansatz)

**Nummerierte Punkte**: Statt Text-Labels werden nummerierte Kreise (1-10) verwendet, um Überlappungen zu vermeiden.

**Legende**: Unterhalb des Canvas, gruppiert nach Priorität:
- Sortierung: 1. Priorität → 2. Priorität → 3. Priorität → Ohne Priorität
- Jeder Eintrag zeigt: Nummer + Bereichsname
- Farbcodierung passend zum Quadrant

**Hover-Tooltips**: Bei Mauszeiger über einem Punkt erscheint:
- Bereichsname
- Einschätzung (0-3)
- Interesse (0-3)
- Bedarf (1-4)

**Relevante Funktionen:**
- `drawDataPoints()`: Zeichnet nummerierte Punkte
- `updatePriorityLegend()`: Generiert HTML-Legende
- `initPriorityCanvasHover()`: Aktiviert Hover-Detection

## Farbliche Differenzierung

CSS-Klassen für Fragen:
- `.question-einschaetzung`: Hellblau (#f0f9ff) mit blauem Rand (#2563eb)
- `.question-interesse`: Hellgelb (#fefce8) mit goldenem Rand (#ca8a04)

## Test-Modus

Aktivierung: Tastatureingabe `testing`
- Füllt alle Formulare mit Testdaten
- Springt zur Prioritätsmatrix
- Gelber Indikator oben rechts

## Export

- `exportPriorityPage()`: Prioritätsmatrix als PNG
- `exportFinalPage()`: Ergebnisseite als PNG
- `exportBothPages()`: Beide Seiten sequenziell

## Seitenablauf

1. Startseite (Einführung)
2. Persönliche Daten
3. 7 Fragebereiche
4. Prioritätsmatrix (Viererfeld)
5. Ergebnisse (Radar-Chart + Zusammenfassung)

## Bekannte Probleme / Offene Punkte

1. **Werte bei Labels**: Prädikat statt Zahlen anzeigen?
2. **Sortierung Prioritäten**: Zuerst nach Bedarf, dann nach Interesse sortieren
3. **Landing Page Design**: Farbschema überarbeiten (zu rund/blau/gelb)
4. **Punkt-Positionen**: Quadranten-Zuordnung prüfen (Farbe vs. Position)
5. **Spidergraph**: Verdeutlichen, dass höhere Einschätzung = besser
6. **Reihenfolge**: Ev. Viererfeld und Radar-Chart tauschen
7. **Legenden**: Quadranten-Erklärung mit Punkte-Legende zusammenführen

## Globale Variablen

```javascript
priorityPointsData = []  // Speichert Punkt-Positionen für Hover-Detection
```

## CSS-Klassen (Viererfeld)

| Klasse | Beschreibung |
|--------|--------------|
| `.priority-tooltip` | Hover-Tooltip (fixed, dark) |
| `.priority-points-legend` | Container für Punkte-Legende |
| `.legend-group` | Gruppierung nach Priorität |
| `.legend-number` | Nummerierter Kreis |
