# Kompetenzstandanalyse Mathematik Master

## Projektübersicht

Dies ist eine webbasierte interaktive Anwendung zur Kompetenzstandanalyse für das Fach Mathematik im Masterstudium der PHBern. Die Anwendung ermöglicht Studierenden eine strukturierte Selbsteinschätzung ihrer mathematischen Fachkompetenzen, didaktischen Fähigkeiten und Interessen.

## Zweck

Die Analyse dient:
- Der Selbstreflexion mathematischer und didaktischer Kompetenzen
- Der Identifikation von Entwicklungsbereichen
- Der Erstellung individualisierter Empfehlungen für das Modul "Weiterentwicklung des fachspezifischen Unterrichtens"
- Als Grundlage für Kick-Off-Gespräche

## Architektur

### Technologie-Stack
- **Frontend**: Vanilla JavaScript (ES6 Module)
- **Styling**: Custom CSS mit Roboto Font
- **Visualisierung**: Canvas API für Radar-Charts und Prioritätsmatrix
- **Export**: html2canvas für Bilderzeugung
- **Datenspeicherung**: Client-seitig (kein Server-Backend)

### Projektstruktur

```
main/
├── math-kosta/          # Version 1.0 (Legacy)
├── math-kosta-v1.5/     # Version 1.5 (Legacy)
└── math-kosta-v2/       # Aktuelle Version 2.0
    ├── index.html       # Hauptseite mit UI-Struktur
    ├── main.js          # Kernanwendungslogik
    ├── fragen.js        # Fragenkatalog (ca. 70+ Fragen)
    ├── config.js        # Konfiguration und Konstanten
    └── style.css        # Styling
```

## Hauptkomponenten

### 1. Fragenkatalog (fragen.js)
- **Bereiche**: 7 Hauptbereiche organisiert
  - Zahl und Variable
  - Form und Raum
  - Grössen und Funktionen
  - Daten und Zufall
  - Planung
  - Beurteilung
  - Lernbegleitung und Förderung

- **Fragetypen**:
  - Slider-Fragen (4-Stufen-Skala: 0-3)
  - Multiple-Choice-Fragen

- **Ebenen**: Jede Frage erfasst eine von drei Ebenen
  - `subjektiv`: Selbsteinschätzung
  - `objektiv`: Wissensfragen mit korrekten Antworten
  - `interesse`: Interessensbekundung

- **Handlungsaspekte**: Fragen sind 10 Analysebereichen zugeordnet
  - 4 mathematische Kompetenzbereiche
  - 3 Handlungsaspekte (Operieren/Benennen, Erforschen/Argumentieren, Mathematisieren/Darstellen)
  - 3 didaktische Kompetenzen

### 2. Konfiguration (config.js)
- Liste der 15 Studienfächer (D, F, M, NT, RZG, WAH, ERG, E, BS, BG, TTG, MU, I, RR, L)
- 7 verfügbare Lerngelegenheiten mit Kategorien und Semestern
- Analyse- und Fragenbereiche

### 3. Hauptlogik (main.js)
**Kernfunktionalitäten**:

#### Navigation & Seitenmanagement
- Dynamische Seitenerstellung basierend auf Fragenbereichen
- Überblendeffekte zwischen Seiten
- Fortschrittsanzeige mit Punkten
- Seiten: Start → Persönliche Daten → 7 Fragebereiche → Prioritätsmatrix → Ergebnisse

#### Datenverarbeitung
```javascript
// Antworten-Mapping auf Analysebereiche
function mapAntworten() {
  // Verteilt Antworten basierend auf Handlungsaspekten
  // Gruppiert nach subjektiv/objektiv/interesse
  // Berechnet Durchschnittswerte für jeden Bereich
}
```

#### Visualisierungen

**Radar-Chart** (10-achsig):
- 3 Datenreihen: Subjektiv (Kreis), Objektiv (Dreieck), Interesse (Quadrat)
- Normalisierung auf 0-3 Skala
- Anpassbare Farbwahl
- Canvas: 1600×1600px mit responsiver Anpassung
- Zweizeilige Achsenbeschriftungen

**Prioritätsmatrix** (Viererfeld):
- X-Achse: Interesse (niedrig → hoch)
- Y-Achse: Weiterentwicklungspotenzial (niedrig → hoch)
- 4 Quadranten mit Prioritäten:
  - **1. Priorität**: Hoher Bedarf + Hohes Interesse (rot)
  - **2. Priorität**: Hoher Bedarf + Wenig Interesse (orange)
  - **3. Priorität**: Wenig Bedarf + Hohes Interesse (blau)
  - **Ohne Priorität**: Wenig Bedarf + Wenig Interesse (grau)
- Intelligente Label-Positionierung mit Kollisionsvermeidung

#### Export-Funktionalität
```javascript
exportPriorityPage()    // Prioritätsmatrix als PNG
exportFinalPage()       // Ergebnisseite als PNG
exportBothPages()       // Beide Seiten sequenziell
```

### 4. Persönliche Daten
- Vorname, Nachname, Matrikelnummer, E-Mail
- Studienfächer-Auswahl (max. 4 Fächer)
- Lerngelegenheiten-Dropdown mit Suchfunktion
- Tag-basierte Mehrfachauswahl

## Algorithmen

### Weiterentwicklungsbedarf-Berechnung
```javascript
kompetenz = (subjektiv + objektiv - 2) / 2
bedarf = MAX_WERT (3) - kompetenz
```
Je niedriger die Selbsteinschätzung und objektive Messung, desto höher der Entwicklungsbedarf.

### Quadranten-Zuordnung
```javascript
interesse > 1.5 && bedarf > 1.5 → Priorität 1
interesse ≤ 1.5 && bedarf > 1.5 → Priorität 2
interesse > 1.5 && bedarf ≤ 1.5 → Priorität 3
interesse ≤ 1.5 && bedarf ≤ 1.5 → Ohne Priorität
```

## Besondere Features

### Test-Modus
- Aktivierung durch Tastatureingabe: `testing`
- Füllt automatisch alle Formulare mit Testdaten
- Springt zur Prioritätsmatrix
- Visueller Indikator in gelb
- Nützlich für Entwicklung und Demonstration

### Responsive Design
- Canvas-Neuzeichnung bei Fenstergrößenänderung
- Anpassung der Visualisierungen
- Optimierung für Druck und PDF-Export

### Datenschutz
- Alle Daten werden lokal im Browser verarbeitet
- Keine Serverübertragung
- Keine externen Tracking-Tools

## Verwendung

### Ablauf für Studierende
1. Startseite mit Einführung lesen
2. Persönliche Daten eingeben
3. 7 Fragebereiche durchgehen (ca. 20-25 Minuten)
4. Prioritätsmatrix ansehen
5. Radar-Chart und Zusammenfassung betrachten
6. Ergebnisse als Bilder exportieren
7. In schriftliche Kompetenzstandanalyse einbinden

### Für Entwickler

**Neue Frage hinzufügen**:
```javascript
// In fragen.js
{
  id: 999,
  text: "Fragetext...",
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
}
```

**Neue Lerngelegenheit hinzufügen**:
```javascript
// In config.js → LERNGELEGENHEITEN
{
  id: "unique_id",
  semester: "HS & FS",
  kategorie: "Kategoriename",
  titel: "Titel der Lerngelegenheit"
}
```

## Wichtige Konstanten

```javascript
MIN_WERT = 0
MAX_WERT = 3
MAX_SELECTED_SUBJECTS = 4
ANZAHL_FRAGEN_BEREICHE = 7
ANZAHL_ANALYSE_BEREICHE = 10
```

## Browser-Kompatibilität

Erfordert:
- ES6 Module Support
- Canvas API
- HTML5 Custom Elements
- CSS Grid/Flexbox

Getestet mit:
- Chrome/Edge (empfohlen)
- Firefox
- Safari

## Deployment

Die Anwendung ist statisch und kann direkt über einen Webserver ausgeliefert werden:
- Kein Build-Prozess erforderlich
- Keine Server-seitige Logik
- HTTPS empfohlen (für html2canvas)

## Zukünftige Entwicklungen

Mögliche Erweiterungen:
- PDF-Export statt nur Bilder
- Speichern/Laden von Zwischenständen (localStorage)
- Mehrsprachigkeit (DE/FR)
- Vergleich mit Kohorten-Durchschnitt
- Detaillierte Empfehlungen pro Bereich
- Druckansicht-Optimierung

## Versionierung

- **v1.0**: Ursprüngliche Version
- **v1.5**: Überarbeitete Fragestruktur
- **v2.0**: Aktuelle Version mit Prioritätsmatrix, Export-Funktion, verbesserten Visualisierungen

## Kontakt & Support

PHBern - Institut für Weiterbildung und Dienstleistungen
Masterstudiengang Primarstufe

## Lizenz

Für den internen Gebrauch der PHBern entwickelt.
