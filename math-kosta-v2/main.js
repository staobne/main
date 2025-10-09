import { FRAGEN } from './fragen.js';
import { STUDIENFAECHER, FACH_BESCHREIBUNGEN, FRAGEN_BEREICHE, ANALYSE_BEREICHE, LERNGELEGENHEITEN } from './config.js';

        // =========================================================
        // FRAGENKATALOG - BEGINN
        // =========================================================
        // Grundlegende Konfiguration
        const MIN_WERT = 0;  // Minimaler Wert für Antworten
        const MAX_WERT = 3;  // Maximaler Wert für Antworten
        const MAX_SELECTED_SUBJECTS = 4;  // Maximale Anzahl auswählbarer Fächer
        
        // =========================================================
        // FRAGENKATALOG - ENDE
        // =========================================================

        // Globale Zustandsvariablen
        let antworten = {};  // Speichert alle Antworten
        let personalData = {};  // Speichert persönliche Daten
        let currentPage = 0;  // Aktuelle Seite
        let pages = [];  // Liste aller Seiten
        let selectedSubjects = [];  // Ausgewählte Studienfächer
        let selectedLerngelegenheiten = [];  // Ausgewählte Lerngelegenheiten
        
        // Handler für Lerngelegenheit-Auswahl
        function handleLerngelegenheitSelection(lgId) {
            // Toggle Auswahl: Hinzufügen falls nicht vorhanden, entfernen falls vorhanden
            if (selectedLerngelegenheiten.includes(lgId)) {
                selectedLerngelegenheiten = selectedLerngelegenheiten.filter(id => id !== lgId);
            } else {
                selectedLerngelegenheiten.push(lgId);
            }
            
            // Element-Stil aktualisieren
            const element = document.querySelector(`.dropdown-option[data-id="${lgId}"]`);
            if (element) {
                if (selectedLerngelegenheiten.includes(lgId)) {
                    element.classList.add('selected');
                } else {
                    element.classList.remove('selected');
                }
            }
            
            // Ausgewählte Elemente anzeigen
            updateSelectedLerngelegenheitenDisplay();
        }
        
        // Funktion zum Aktualisieren der Anzeige der ausgewählten Lerngelegenheiten
        function updateSelectedLerngelegenheitenDisplay() {
            const display = document.getElementById('selected-lerngelegenheiten-display');
            if (!display) return;
            
            // Zeige Platzhalter, wenn keine Lerngelegenheiten ausgewählt sind
            if (selectedLerngelegenheiten.length === 0) {
                display.innerHTML = '<span class="placeholder">Bitte auswählen (Klicken zum Öffnen)...</span>';
                return;
            }
            
            // Generiere Tags für ausgewählte Lerngelegenheiten
            display.innerHTML = selectedLerngelegenheiten.map(id => {
                const lg = LERNGELEGENHEITEN.find(item => item.id === id);
                if (!lg) return '';
                
                return `<span class="selected-tag">${lg.titel} <span class="remove-tag" onclick="removeLerngelegenheit('${id}')">×</span></span>`;
            }).join('');
        }
        
        // Funktion zum Entfernen einer Lerngelegenheit
        function removeLerngelegenheit(id) {
            event.stopPropagation(); // Verhindert, dass das Dropdown sich schliesst
            
            // Aus der Auswahl entfernen
            selectedLerngelegenheiten = selectedLerngelegenheiten.filter(item => item !== id);
            
            // Element-Stil aktualisieren
            const element = document.querySelector(`.dropdown-option[data-id="${id}"]`);
            if (element) {
                element.classList.remove('selected');
            }
            
            // Anzeige aktualisieren
            updateSelectedLerngelegenheitenDisplay();
        }
        
        // Seiten nach Bereichen erstellen
        function initPages() {
            // Startseite und persönliche Daten-Seite sind bereits im HTML vorhanden
            
            // Gruppiere Fragen nach Bereichen für bessere Organisation
            const bereicheFragen = FRAGEN_BEREICHE.reduce((acc, bereich) => {
                acc[bereich] = FRAGEN.filter(frage => frage.bereich === bereich);
                return acc;
            }, {});
            
            // Erstelle für jeden Bereich eine eigene Fragensei
            let pageIndex = 1; // Start bei 1, weil 0 bereits persönliche Daten sind
            FRAGEN_BEREICHE.forEach(bereich => {
                const pageId = `page-${pageIndex}`;
                pages.push(pageId);
                
                // Erstelle Container für diesen Bereich
                const pageDiv = document.createElement('div');
                pageDiv.className = 'page';
                pageDiv.id = pageId;
                
                // Titel für den Bereich
                const bereichTitel = document.createElement('h2');
                bereichTitel.textContent = bereich;
                pageDiv.appendChild(bereichTitel);
                
                // Fragen für diesen Bereich hinzufügen
                const bereichContainer = document.createElement('div');
                bereichContainer.id = `bereich-${pageIndex}`;
                pageDiv.appendChild(bereichContainer);
                
                // Füge die Seite zum Dokument hinzu
                document.querySelector('.container').insertBefore(pageDiv, document.getElementById('page-final'));
                
                pageIndex++;
            });
            
            // Final-Seite und Prioritäts-Seite als letzte Seiten hinzufügen
            pages.push('page-priority'); // Neue Viererfeld-Seite
            pages.push('page-final');
            
            // Fortschrittsanzeige erstellen
            updateProgressIndicator();
        }

        // Fortschrittsanzeige aktualisieren
        function updateProgressIndicator() {
            const progressContainer = document.getElementById('progressIndicator');
            progressContainer.innerHTML = '';
            
            const totalPages = pages.length + 2; // +1 für Startseite, +1 für persönliche Daten
            
            // Erstelle einen Punkt für jede Seite im Fortschrittsbalken
            for (let i = 0; i < totalPages; i++) {
                const dot = document.createElement('div');
                dot.className = 'progress-dot';
                // Markiere den aktuellen Punkt
                if (i === currentPage) {
                    dot.classList.add('active');
                }
                progressContainer.appendChild(dot);
            }
        }

        // Fragen für den aktuellen Bereich rendern
        function renderFragen() {
            // Keine Fragen auf der Start-, persönlichen Daten- und Ergebnisseite
            if (currentPage === 0 || currentPage === 1 || currentPage === pages.length + 1) {
                return; 
            }
            
            const bereichIndex = currentPage - 2; // -2 wegen Start- und persönlicher Daten-Seite
            const bereich = FRAGEN_BEREICHE[bereichIndex];
            const bereichContainer = document.getElementById(`bereich-${currentPage - 1}`);
            
            // Fragen für diesen Bereich filtern
            const bereichFragen = FRAGEN.filter(frage => frage.bereich === bereich);
            
            // HTML für alle Fragen des Bereichs erstellen
            bereichContainer.innerHTML = bereichFragen.map(frage => {
                if (frage.typ === 'slider') {
                    return `
                        <div class="question-card">
                            <div class="question-title">${frage.text}</div>
                            <!---<div class="meta-info">
                                Ebene: ${frage.ebene} | Aspekte: ${frage.handlungsaspekte.join(', ')}
                            </div>--->
                            <div class="slider-container">
                                <input 
                                    type="range" 
                                    min="${MIN_WERT}" 
                                    max="${MAX_WERT}" 
                                    step="1"
                                    value="${antworten[frage.id] || MIN_WERT}"
                                    onchange="handleAntwort(${frage.id}, parseInt(this.value))"
                                    oninput="this.nextElementSibling.nextElementSibling.textContent = this.value"
                                    class="slider"
                                >
                                <div class="slider-labels">
                                    ${frage.antworten.map(antwort => `
                                        <span>${antwort.text}</span>
                                    `).join('')}
                                </div>
                                <div class="slider-value">${antworten[frage.id] || MIN_WERT}</div>
                            </div>
                        </div>
                    `;
                } else {
                    return `
                        <div class="question-card">
                            <div class="question-title">${frage.text}</div>
                            <!---<div class="meta-info">
                                Ebene: ${frage.ebene} | Aspekte: ${frage.handlungsaspekte.join(', ')}
                            </div>--->
                            <div class="mc-group">
                                ${frage.antworten.map((antwort, idx) => `
                                    <label class="mc-option">
                                        <input 
                                            type="radio" 
                                            name="frage-${frage.id}" 
                                            value="${antwort.wert}"
                                            ${antworten[frage.id] === antwort.wert ? 'checked' : ''}
                                            onchange="handleAntwort(${frage.id}, ${antwort.wert})"
                                        >
                                        ${antwort.text}
                                    </label>
                                `).join('')}
                            </div>
                        </div>
                    `;
                }
            }).join('');
        }

        // NEUE FUNKTION: Mapping von Antworten auf Analysebereiche
        function mapAntworten() {
            const analyseWerte = {};
            
            // Initialisiere alle Analysebereiche
            ANALYSE_BEREICHE.forEach(bereich => {
                analyseWerte[bereich] = { subjektiv: [], objektiv: [], interesse: [] };
            });
            
            // Verteile Antworten auf Analysebereiche basierend auf Handlungsaspekten
            Object.entries(antworten).forEach(([fragenId, wert]) => {
                const frage = FRAGEN.find(f => f.id === parseInt(fragenId));
                if (frage && frage.handlungsaspekte) {
                    frage.handlungsaspekte.forEach(aspekt => {
                        if (analyseWerte[aspekt]) {
                            analyseWerte[aspekt][frage.ebene].push(wert);
                        }
                    });
                }
            });
            
            return analyseWerte;
        }

        // Sammeln der persönlichen Daten aus dem Formular
        function collectPersonalData() {
            personalData = {
                vorname: document.getElementById('vorname').value,
                nachname: document.getElementById('nachname').value,
                matrikelnummer: document.getElementById('matrikelnummer').value,
                email: document.getElementById('email').value,
                studienfaecher: selectedSubjects,
                lerngelegenheiten: selectedLerngelegenheiten.map(id => {
                    const lg = LERNGELEGENHEITEN.find(item => item.id === id);
                    return lg ? `${lg.titel} (${lg.kategorie}, ${lg.semester})` : id;
                })
            };
        }

        // Anzeigen der persönlichen Daten auf der Ergebnisseite
        function renderPersonalData() {
            const container = document.getElementById('personalDataSummary');
            
            // Überprüfen, ob persönliche Daten vorhanden sind
            const hasData = Object.values(personalData).some(value => 
                Array.isArray(value) ? value.length > 0 : (value && value.trim && value.trim() !== '')
            );
            
            if (!hasData) {
                container.innerHTML = '<p>Keine persönlichen Daten angegeben.</p>';
                return;
            }
            
            // Beschriftungen für die persönlichen Daten
            const labels = {
                vorname: 'Vorname',
                nachname: 'Nachname',
                matrikelnummer: 'Matrikelnummer',
                email: 'E-Mail',
                studienfaecher: 'Studienfächer',
                lerngelegenheiten: 'Besuchte Lerngelegenheiten'
            };
            
            // HTML für die Datenfelder generieren
            let html = '';
            for (const [key, value] of Object.entries(personalData)) {
                // Spezialbehandlung für Studienfächer-Array
                if (key === 'studienfaecher' && Array.isArray(value) && value.length > 0) {
                    const faecherMitBeschreibung = value.map(fach => 
                        `${fach} (${FACH_BESCHREIBUNGEN[fach] || fach})`
                    );
                    html += `
                        <div class="personal-data-item">
                            <span class="personal-data-label">${labels[key]}:</span> 
                            ${faecherMitBeschreibung.join(', ')}
                        </div>
                    `;
                }
                // Spezialbehandlung für Lerngelegenheiten-Array
                else if (key === 'lerngelegenheiten' && Array.isArray(value) && value.length > 0) {
                    html += `
                        <div class="personal-data-item">
                            <span class="personal-data-label">${labels[key]}:</span>
                            <ul class="lerngelegenheiten-list">
                                ${value.map(item => `<li>${item}</li>`).join('')}
                            </ul>
                        </div>
                    `;
                }
                // Normale Textfelder
                else if (key !== 'studienfaecher' && key !== 'lerngelegenheiten' && 
                         value && (!Array.isArray(value) && value.trim !== undefined && value.trim() !== '')) {
                    html += `
                        <div class="personal-data-item">
                            <span class="personal-data-label">${labels[key]}:</span> 
                            ${value}
                        </div>
                    `;
                }
            }
            
            container.innerHTML = html;
        }

        // Ergebniszusammenfassung anzeigen
        function renderResultsSummary() {
            const resultContainer = document.getElementById('resultsSummary');
            
            // Verwende die gemappten Analysewerte
            const analyseWerte = mapAntworten();
            
            // Ergebnisse für jeden Analysebereich berechnen
            const bereichErgebnisse = ANALYSE_BEREICHE.map(bereich => {
                const ebenen = ['subjektiv', 'objektiv', 'interesse'];
                
                // Für jede Ebene Durchschnittswerte berechnen
                const ebenenWerte = ebenen.map(ebene => {
                    const werte = analyseWerte[bereich][ebene];
                    if (werte.length === 0) return '0.0';
                    
                    const summe = werte.reduce((sum, wert) => sum + wert, 0);
                    return (summe / werte.length).toFixed(1);
                });
                
                // HTML für einen Bereich generieren
                return `
                    <div style="margin-bottom: 10px; font-size: 0.8em;">
                        <strong>${bereich}</strong>
                        <ul style="margin-top: 5px;">
                            <li>Subjektiv: ${ebenenWerte[0]}</li>
                            <li>Objektiv: ${ebenenWerte[1]}</li>
                            <li>Interesse: ${ebenenWerte[2]}</li>
                        </ul>
                    </div>
                `;
            });
            
            // Bereiche in zwei Spalten aufteilen für übersichtlicheres Layout
            const mitte = Math.ceil(bereichErgebnisse.length / 2);
            const ergebnisseLinks = bereichErgebnisse.slice(0, mitte).join('');
            const ergebnisseRechts = bereichErgebnisse.slice(mitte).join('');
            
            // HTML für zwei Spalten erzeugen
            const html = `
                <div class="results-columns">
                    <div class="results-column">${ergebnisseLinks}</div>
                    <div class="results-column">${ergebnisseRechts}</div>
                </div>
            `;
            
            resultContainer.innerHTML = bereichErgebnisse.length > 0 ? html : '<p>Keine Daten vorhanden.</p>';
        }

        // Canvas-Initialisierung für den Radar-Chart
        function setupCanvas(canvas) {
            // Setze Canvas auf Grösse mit guter Auflösung für scharfe Darstellung
            canvas.width = 1600;
            canvas.height = 1600;
            
            // Setze Display-Grösse via CSS für responsive Darstellung
            canvas.style.width = '100%';
            canvas.style.height = 'auto';
            canvas.style.maxWidth = '1000px';
            
            const ctx = canvas.getContext('2d');
            
            // Aktiviere Anti-Aliasing für glattere Linien
            ctx.imageSmoothingEnabled = true;
            ctx.imageSmoothingQuality = 'high';
            
            return ctx;
        }

        // Antwort-Handler für Fragebeantwortung
        function handleAntwort(fragenId, wert) {
            antworten[fragenId] = wert;
        }

        // Handler für Fachauswahl
        function handleSubjectSelection(event) {
            const subject = event.target.getAttribute('data-subject');
            const isSelected = selectedSubjects.includes(subject);
            
            if (isSelected) {
                // Entferne Fach aus der Auswahl
                selectedSubjects = selectedSubjects.filter(s => s !== subject);
                event.target.classList.remove('selected');
            } else {
                // Füge Fach zur Auswahl hinzu, wenn maximale Anzahl nicht erreicht
                if (selectedSubjects.length < MAX_SELECTED_SUBJECTS) {
                    selectedSubjects.push(subject);
                    event.target.classList.add('selected');
                }
            }
            
            // Zähler aktualisieren
            updateSubjectCounter();
            
            // Alle Fächer aktivieren/deaktivieren basierend auf der Auswahlanzahl
            updateSubjectAvailability();
        }

        // Zähler für ausgewählte Fächer aktualisieren
        function updateSubjectCounter() {
            const counter = document.getElementById('selection-counter');
            counter.textContent = `Ausgewählte Fächer: ${selectedSubjects.length}/${MAX_SELECTED_SUBJECTS}`;
        }

        // Verfügbarkeit der Fächer aktualisieren (Deaktivieren, wenn maximale Anzahl erreicht)
        function updateSubjectAvailability() {
            const maxReached = selectedSubjects.length >= MAX_SELECTED_SUBJECTS;
            
            document.querySelectorAll('.subject-item').forEach(item => {
                const subject = item.getAttribute('data-subject');
                const isSelected = selectedSubjects.includes(subject);
                
                if (maxReached && !isSelected) {
                    item.classList.add('disabled');
                } else {
                    item.classList.remove('disabled');
                }
            });
        }

        // Erstellen der Studienfächer-Buttons
        function renderSubjectsSelection() {
            const container = document.getElementById('subjects-container');
            if (!container) return;
            
            // Generiere HTML für alle verfügbaren Fächer
            container.innerHTML = STUDIENFAECHER.map(fach => `
                <div class="subject-item" data-subject="${fach}" onclick="handleSubjectSelection(event)">
                    ${fach}
                </div>
            `).join('');
            
            // Bereits ausgewählte Fächer markieren
            selectedSubjects.forEach(fach => {
                const element = container.querySelector(`[data-subject="${fach}"]`);
                if (element) {
                    element.classList.add('selected');
                }
            });
            
            // Verfügbarkeit aktualisieren
            updateSubjectAvailability();
            
            // Zähler aktualisieren
            updateSubjectCounter();
        }

        // Radar-Chart zeichnen 
        function drawRadar() {
            const canvas = document.getElementById('radarCanvas');
            const ctx = setupCanvas(canvas);

            // Aktuelle Farbeinstellungen auslesen
            const subjektivColor = document.getElementById('subjektiv-color').value;
            const objektivColor = document.getElementById('objektiv-color').value;
            const interesseColor = document.getElementById('interesse-color').value;
            
            // Alpha-Werte für Füllfarben erstellen (20% Deckkraft)
            const getTransparentColor = (hexColor) => {
                // Konvertiere hex zu rgb und füge Alpha-Wert hinzu
                const r = parseInt(hexColor.substring(1,3), 16);
                const g = parseInt(hexColor.substring(3,5), 16);
                const b = parseInt(hexColor.substring(5,7), 16);
                return `rgba(${r}, ${g}, ${b}, 0.2)`;
            };

            // Berechne das Zentrum und den Radius basierend auf den Canvas-Dimensionen
            const width = canvas.width;
            const height = canvas.height;
            const centerX = width / 2;
            const centerY = height / 2;
            const radius = Math.min(width, height) * 0.35; // 35% des Canvas-Radius verwenden
            
            // Canvas löschen für Neuzeichnung
            ctx.clearRect(0, 0, width, height);

            // Berechne Winkel zwischen Achsen basierend auf Anzahl der ANALYSE_BEREICHE
            const anzahlBereiche = ANALYSE_BEREICHE.length;
            const winkel = (2 * Math.PI) / anzahlBereiche;

            // Hilfsfunktion zum Zeichnen der verschiedenen Marker
            function drawMarker(x, y, type, color) {
                ctx.fillStyle = color;
                ctx.strokeStyle = color;
                ctx.lineWidth = 4;
                
                switch(type) {
                    case 'circle': // Kreis für subjektive Werte
                        ctx.beginPath();
                        ctx.arc(x, y, 8, 0, 2 * Math.PI);
                        ctx.stroke();
                        break;
                    case 'triangle': // Dreieck für objektive Werte
                        ctx.beginPath();
                        ctx.moveTo(x, y - 8);
                        ctx.lineTo(x + 9.2, y + 8);
                        ctx.lineTo(x - 9.2, y + 8);
                        ctx.closePath();
                        ctx.stroke();
                        break;
                    case 'square': // Quadrat für Interesse-Werte
                        ctx.beginPath();
                        ctx.rect(x - 6, y - 6, 12, 12);
                        ctx.stroke();
                        break;
                }
            }

            // Konzentrische Kreise für die Werteskala zeichnen
            for (let r = 1; r <= 3; r++) {
                ctx.beginPath();
                ctx.strokeStyle = '#d1d5db';
                ctx.lineWidth = 1;
                
                // Berechne den aktuellen Radius (von innen nach aussen)
                const currentRadius = radius * (r / 3);
                
                // Zeichne einen Kreis mit dem aktuellen Radius
                ctx.arc(centerX, centerY, currentRadius, 0, 2 * Math.PI);
                ctx.stroke();
            }

            // Achsenlinien vom Zentrum zu den äusseren Punkten
            ctx.beginPath();
            ctx.strokeStyle = '#d1d5db';
            ctx.lineWidth = 1;
            for (let i = 0; i < anzahlBereiche; i++) {
                const angle = i * winkel - Math.PI / 2; // Starte bei -90° (oben)
                const x = centerX + radius * Math.cos(angle);
                const y = centerY + radius * Math.sin(angle);
                ctx.moveTo(centerX, centerY);
                ctx.lineTo(x, y);
            }
            ctx.stroke();

            // Beschriftungen der Achsen
            ctx.font = 'bold 30px Arial';
            ctx.fillStyle = '#000';
            
            ANALYSE_BEREICHE.forEach((bereich, i) => {
                const angle = i * winkel - Math.PI / 2;
                const labelRadius = radius + 30; // Abstand für die Beschriftungen
                let x = centerX + labelRadius * Math.cos(angle);
                let y = centerY + labelRadius * Math.sin(angle);
                
                // Text an die Achsenausrichtung anpassen
                if (Math.cos(angle) < -0.1) {
                    ctx.textAlign = 'right';
                } else if (Math.cos(angle) > 0.1) {
                    ctx.textAlign = 'left';
                } else {
                    ctx.textAlign = 'center';
                }
                
                // Vertikale Anpassungen
                if (Math.sin(angle) > 0.9) {
                    y += 10; // unten
                } else if (Math.sin(angle) < -0.9) {
                    y -= 5; // oben
                }
                
                // Text in zwei Zeilen aufteilen
                const lines = splitBereichLabel(bereich);
                
                // Erste Zeile (kleiner Abstand nach oben)
                ctx.font = 'bold 30px Arial';
                ctx.fillText(lines[0], x, y - 15);
                
                // Zweite Zeile (kleiner Abstand nach unten)
                ctx.font = '30px Arial';
                ctx.fillText(lines[1], x, y + 15);
            });
            // Zurücksetzen des textAlign
            ctx.textAlign = 'left';

            // NEUE DATENVERARBEITUNG: Verwende gemappte Werte
            const analyseWerte = mapAntworten();

            // Berechne Durchschnittswerte für jede Kategorie in jedem Analysebereich
            const chartData = ANALYSE_BEREICHE.map(bereich => {
                const bereichData = analyseWerte[bereich];
                return {
                    bereich,
                    subjektiv: durchschnitt(bereichData.subjektiv),
                    objektiv: durchschnitt(bereichData.objektiv),
                    interesse: durchschnitt(bereichData.interesse)
                };
            });

            // Definition der Ebenen mit ihren Eigenschaften und den ausgewählten Farben
            const ebenen = [
                { name: 'subjektiv', farbe: [getTransparentColor(subjektivColor), subjektivColor], marker: 'circle' },
                { name: 'objektiv', farbe: [getTransparentColor(objektivColor), objektivColor], marker: 'triangle' },
                { name: 'interesse', farbe: [getTransparentColor(interesseColor), interesseColor], marker: 'square' }
            ];

            // Zeichne die Datenpunkte und Verbindungslinien für jede Ebene
            ebenen.forEach((ebene) => {
                const punkte = chartData.map((data, i) => {
                    const normalisierterWert = (data[ebene.name]) / 3; // Werte auf 0-1 normalisieren
                    const angle = i * winkel - Math.PI / 2;
                    return {
                        x: centerX + ((radius * normalisierterWert)) * Math.cos(angle),
                        y: centerY + ((radius * normalisierterWert)) * Math.sin(angle)
                    };
                });

                // Zeichne die Verbindungslinien und Fläche
                ctx.beginPath();
                ctx.fillStyle = ebene.farbe[0]; // Transparente Füllfarbe
                ctx.strokeStyle = ebene.farbe[1]; // Linienfarbe
                ctx.lineWidth = 8; // Dickere Linie für bessere Sichtbarkeit
                ctx.lineCap = 'round'; // Abgerundete Linienenden
                ctx.lineJoin = 'round'; // Abgerundete Verbindungspunkte

                // Verbinde die Punkte zu einer geschlossenen Form
                punkte.forEach((punkt, i) => {
                    if (i === 0) {
                        ctx.moveTo(punkt.x, punkt.y);
                    } else {
                        ctx.lineTo(punkt.x, punkt.y);
                    }
                });
                ctx.lineTo(punkte[0].x, punkte[0].y); // Schliesse die Form
                ctx.closePath();
                ctx.fill();
                ctx.stroke();

                // Zeichne die Marker an den Datenpunkten
                punkte.forEach(punkt => {
                    drawMarker(punkt.x, punkt.y, ebene.marker, ebene.farbe[1]);
                });
            });
            
            // Auch die Farben in der Legende aktualisieren
            updateLegendColors(subjektivColor, objektivColor, interesseColor);
        }
        
        // Funktion zum Aktualisieren der Farben in der Legende
        function updateLegendColors(subjektivColor, objektivColor, interesseColor) {
            // Finde alle SVG-Elemente in der Legende
            const legendItems = document.querySelectorAll('.legend-item svg');
            
            // Aktualisiere die Farben der SVG-Elemente
            if (legendItems.length >= 3) {
                // Subjektiv (Kreis)
                const subjektivSVG = legendItems[0].querySelector('circle');
                if (subjektivSVG) {
                    subjektivSVG.setAttribute('fill', '#fff');
                    subjektivSVG.setAttribute('stroke', subjektivColor);
                }
                
                // Objektiv (Dreieck)
                const objektivSVG = legendItems[1].querySelector('path');
                if (objektivSVG) {
                    objektivSVG.setAttribute('fill', '#fff');
                    objektivSVG.setAttribute('stroke', objektivColor);
                }
                
                // Interesse (Rechteck)
                const interesseSVG = legendItems[2].querySelector('rect');
                if (interesseSVG) {
                    interesseSVG.setAttribute('fill', '#fff');
                    interesseSVG.setAttribute('stroke', interesseColor);
                }
            }
        }
        
        // Funktion zum Aktualisieren der Farben und Neuzeichnen des Charts
        function updateChartColors() {
            drawRadar(); // Chart mit aktuellen Farben neu zeichnen
        }
        
        // Funktion zum Zurücksetzen der Farben auf die Standardwerte
        function resetChartColors() {
            // Standard-Farben setzen
            document.getElementById('subjektiv-color').value = '#2563eb';
            document.getElementById('objektiv-color').value = '#16a34a';
            document.getElementById('interesse-color').value = '#dc2626';
            
            // Chart neu zeichnen
            drawRadar();
        }

        // Hilfsfunktion: Durchschnitt berechnen
        function durchschnitt(werte) {
            if (werte.length === 0) return MIN_WERT;
            return werte.reduce((a, b) => a + b, 0) / werte.length;
        }
        
        // Hilfsfunktion: Bereichsnamen in zwei Zeilen aufteilen
        function splitBereichLabel(text) {
            // Spezielle Behandlung für längere Begriffe
            const replacements = {
                "Lernbegleitung und Förderung": ["Lernbegleitung", "& Förderung"],
                "Grössen und Funktionen": ["Grössen &", "Funktionen"],
                "Operieren und Benennen": ["Operieren &", "Benennen"],
                "Erforschen und Argumentieren": ["Erforschen &", "Argumentieren"],
                "Mathematisieren und Darstellen": ["Mathematisieren", "& Darstellen"],
                "Zahl und Variable": ["Zahl &", "Variable"],
                "Form und Raum": ["Form &", "Raum"],
                "Daten und Zufall": ["Daten &", "Zufall"]
            };
            
            if (replacements[text]) {
                return replacements[text];
            }
            
            // Fallback: Teile nach dem ersten Wort
            const words = text.split(" ");
            if (words.length > 1) {
                return [words[0], words.slice(1).join(" ")];
            }
            
            // Wenn keine Aufteilung möglich ist
            return [text, ""];
        }

// Hauptfunktion für den Seitenwechsel
function goToPage(pageIndex) {
    // Verstecke aktuelle Seite
    const activePage = document.querySelector('.page.active');
    
    // Sammle persönliche Daten, wenn wir von Persönliche Daten-Seite weitergehen
    if (currentPage === 1 && pageIndex > 1) {
        collectPersonalData();
    }
    
    if (activePage) {
        // Überblendeffekt starten
        activePage.style.opacity = '0';
        
        // Warten, bis der Überblendeffekt abgeschlossen ist
        setTimeout(() => {
            activePage.classList.remove('active');
            
            // Aktuelle Seite aktualisieren und neue Seite anzeigen
            currentPage = pageIndex;
            activateAndInitializePage(pageIndex);
            
            // UI-Elemente aktualisieren
            updateUIElements();
            
            // Nach oben scrollen
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth'
            });
        }, 500); // Verzögerung = Überblendzeit
    } else {
        // Direkter Wechsel ohne Überblendung
        currentPage = pageIndex;
        activateAndInitializePage(pageIndex);
        updateUIElements();
    }
}

// Aktivieren und Initialisieren der neuen Seite
function activateAndInitializePage(pageIndex) {
    let newActivePage = null;
    
    // Seite basierend auf dem Index ermitteln und initialisieren
    if (pageIndex === 0) {
        newActivePage = document.getElementById('page-start');
    }
    else if (pageIndex === 1) {
        newActivePage = document.getElementById('page-0');
        initializePersonalDataPage();
    } 
    else if (pageIndex === pages.length) {
        // Prioritäts-Seite (vorletzte Seite)
        newActivePage = document.getElementById('page-priority');
        initializePriorityPage();
    }
    else if (pageIndex === pages.length + 1) {
        // Final-Seite (letzte Seite)
        newActivePage = document.getElementById('page-final');
        initializeResultsPage();
    } 
    else {
        newActivePage = document.getElementById(pages[pageIndex - 2]);
        renderFragen();
    }
    
    // Seite aktivieren und Einblendeffekt starten
    if (newActivePage) {
        newActivePage.classList.add('active');
        newActivePage.style.opacity = '0';
        setTimeout(() => {
            newActivePage.style.opacity = '1';
        }, 50);
    }
}

// UI-Elemente aktualisieren (Navigation, Buttons, Fortschritt)
function updateUIElements() {
    // Navigation-Abstand anpassen
    const navigationElement = document.querySelector('.navigation');
    if (navigationElement) {
        navigationElement.style.marginTop = currentPage === 1 ? '300px' : '20px';
    }
    
    // Navigation-Buttons aktualisieren
    document.getElementById('prevButton').disabled = currentPage === 0;
    document.getElementById('nextButton').textContent = 
        currentPage === pages.length + 1 ? 'Diese Seite drucken' : 'Weiter';
    
    // Fortschrittsanzeige aktualisieren
    updateProgressIndicator();
}

// Initialisierung der persönlichen Daten-Seite
function initializePersonalDataPage() {
    renderSubjectsSelection();
    
    // Lerngelegenheiten-Liste initialisieren
    const container = document.getElementById('lerngelegenheiten-list');
    if (container) {
        // Alle verfügbaren Lerngelegenheiten anzeigen
        container.innerHTML = LERNGELEGENHEITEN.map(lg => `
            <div class="dropdown-option ${selectedLerngelegenheiten.includes(lg.id) ? 'selected' : ''}" 
                 data-id="${lg.id}" 
                 onclick="handleLerngelegenheitSelection('${lg.id}')">
                <div class="dropdown-option-content">
                    <div class="dropdown-option-title">${lg.titel}</div>
                    <div class="dropdown-option-info">
                        <span class="option-category">${lg.kategorie}</span>
                        <span class="option-semester">${lg.semester}</span>
                    </div>
                </div>
            </div>
        `).join('');
        
        // Suchfunktion für Lerngelegenheiten einrichten
        const searchInput = document.getElementById('lerngelegenheiten-search');
        if (searchInput) {
            searchInput.addEventListener('input', function() {
                const searchTerm = this.value.toLowerCase();
                const options = document.querySelectorAll('#lerngelegenheiten-list .dropdown-option');
                let hasResults = false;
                
                options.forEach(option => {
                    const text = option.textContent.toLowerCase();
                    if (text.includes(searchTerm)) {
                        option.style.display = 'block';
                        hasResults = true;
                    } else {
                        option.style.display = 'none';
                    }
                });
                
                // "Keine Ergebnisse" Hinweis
                const noResultsElement = document.getElementById('no-results');
                if (!hasResults) {
                    if (!noResultsElement) {
                        const noResults = document.createElement('div');
                        noResults.id = 'no-results';
                        noResults.className = 'no-results';
                        noResults.textContent = 'Keine Ergebnisse gefunden';
                        document.getElementById('lerngelegenheiten-list').appendChild(noResults);
                    }
                } else if (noResultsElement) {
                    noResultsElement.remove();
                }
            });
        }
        
        // Bereits ausgewählte Optionen anzeigen
        updateSelectedLerngelegenheitenDisplay();
    }
}

// Initialisierung der Prioritäts-Seite
function initializePriorityPage() {
    // Verzögerung zum Zeichnen des Viererfeld-Diagramms
    setTimeout(() => {
        try {
            drawPriorityMatrix();
        } catch (e) {
            console.error("Fehler beim Zeichnen des Viererfeld-Charts:", e);
        }
    }, 100);
}

// Initialisierung der Ergebnisseite
function initializeResultsPage() {
    renderPersonalData();
    renderResultsSummary();
    
    // Verzögerung zum Zeichnen des Radar-Diagramms
    setTimeout(() => {
        try {
            drawRadar();
        } catch (e) {
            console.error("Fehler beim Zeichnen des Radar-Charts:", e);
        }
    }, 100);
}

// Event-Listener für Navigation-Buttons
document.getElementById('prevButton').addEventListener('click', () => {
    if (currentPage > 0) {
        goToPage(currentPage - 1);
    }
});

document.getElementById('nextButton').addEventListener('click', () => {
    if (currentPage < pages.length + 1) {
        goToPage(currentPage + 1);
        // Ändere diesen Code im nextButton Event-Listener
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    } else {
        // Formular abschliessen und Druck-Dialog öffnen
        window.print();
    }
});

        // Responsive Canvas-Anpassung bei Fenstergrössen-Änderung
        window.addEventListener('resize', () => {
            if (currentPage === pages.length + 1) {
                drawRadar(); // Radar-Chart neu zeichnen bei Grössenänderung
            } else if (currentPage === pages.length) {
                drawPriorityMatrix(); // Viererfeld neu zeichnen bei Grössenänderung
            }
        });

        // Initialisierung der Anwendung
        function init() {
            initPages();
            initTestMode(); // NEUE ZEILE: Test-Modus Listener aktivieren
            goToPage(0); // Erste Seite laden (Startseite)
        }

        // =========================================================
        // NEUE FUNKTIONEN FÜR VIERERFELD-ANALYSE
        // =========================================================

        // Berechnung der Prioritätspositionen für alle Analysebereiche
        function calculatePriorityPositions() {
            const analyseWerte = mapAntworten();
            const priorityData = [];
            
            ANALYSE_BEREICHE.forEach(bereich => {
                const bereichData = analyseWerte[bereich];
                
                // Durchschnittswerte berechnen
                const subjektiv = durchschnitt(bereichData.subjektiv);
                const objektiv = durchschnitt(bereichData.objektiv);
                const interesse = durchschnitt(bereichData.interesse);
                
                // Weiterentwicklungsbedarf = umgekehrt zur Kompetenz
                const kompetenz = (subjektiv + objektiv - 2) / 2;
                const bedarf = MAX_WERT - kompetenz;
                
                // Position im Viererfeld bestimmen
                const position = {
                    bereich: bereich,
                    x: interesse, // Interesse horizontal (0-3)
                    y: bedarf,    // Bedarf vertikal (0-3)
                    quadrant: getQuadrant(interesse, bedarf),
                    kompetenz: kompetenz,
                    interesse: interesse,
                    bedarf: bedarf
                };
                
                priorityData.push(position);
            });
            
            return priorityData;
        }

        // Quadrant bestimmen
        function getQuadrant(interesse, bedarf) {
            const istHohesInteresse = interesse > 1.5; // > Mitte
            const istHoherBedarf = bedarf > 1.5;       // > Mitte
            
            if (istHoherBedarf && istHohesInteresse) return "priority-1";    // 1. Priorität
            if (istHoherBedarf && !istHohesInteresse) return "priority-2";   // 2. Priorität
            if (!istHoherBedarf && istHohesInteresse) return "priority-3";   // 3. Priorität
            return "priority-4"; // Ohne Priorität
        }

        // Viererfeld zeichnen
        function drawPriorityMatrix() {
            const canvas = document.getElementById('priorityCanvas');
            if (!canvas) return;
            
            const ctx = canvas.getContext('2d');
            const width = canvas.width;
            const height = canvas.height;
            
            // Canvas löschen
            ctx.clearRect(0, 0, width, height);
            
            // Grundeinstellungen
            const margin = 80;
            const chartWidth = width - 2 * margin;
            const chartHeight = height - 2 * margin;
            
            // Prioritätsdaten laden
            const priorityData = calculatePriorityPositions();
            
            // Achsen zeichnen
            drawAxes(ctx, margin, chartWidth, chartHeight);
            
            // Quadranten zeichnen
            drawQuadrants(ctx, margin, chartWidth, chartHeight);
            
            // Datenpunkte zeichnen
            drawDataPoints(ctx, margin, chartWidth, chartHeight, priorityData);
            
            // Beschriftungen zeichnen
            drawLabels(ctx, margin, chartWidth, chartHeight);
        }

        // Achsen zeichnen
        function drawAxes(ctx, margin, chartWidth, chartHeight) {
            ctx.strokeStyle = '#374151';
            ctx.lineWidth = 2;
            
            // X-Achse (horizontal)
            ctx.beginPath();
            ctx.moveTo(margin, margin + chartHeight);
            ctx.lineTo(margin + chartWidth, margin + chartHeight);
            ctx.stroke();
            
            // Y-Achse (vertikal)
            ctx.beginPath();
            ctx.moveTo(margin, margin);
            ctx.lineTo(margin, margin + chartHeight);
            ctx.stroke();
            
            // Mittellinien für Quadranten
            ctx.strokeStyle = '#9ca3af';
            ctx.lineWidth = 1;
            ctx.setLineDash([5, 5]);
            
            // Vertikale Mittellinie
            ctx.beginPath();
            ctx.moveTo(margin + chartWidth/2, margin);
            ctx.lineTo(margin + chartWidth/2, margin + chartHeight);
            ctx.stroke();
            
            // Horizontale Mittellinie
            ctx.beginPath();
            ctx.moveTo(margin, margin + chartHeight/2);
            ctx.lineTo(margin + chartWidth, margin + chartHeight/2);
            ctx.stroke();
            
            ctx.setLineDash([]); // Reset dash
        }

        // Quadranten einfärben
        function drawQuadrants(ctx, margin, chartWidth, chartHeight) {
            const halfWidth = chartWidth / 2;
            const halfHeight = chartHeight / 2;
            
            // Quadrant 1: Rechts oben (Hoher Bedarf + Hohes Interesse) - Rot
            ctx.fillStyle = 'rgba(220, 38, 38, 0.1)';
            ctx.fillRect(margin + halfWidth, margin, halfWidth, halfHeight);
            
            // Quadrant 2: Links oben (Hoher Bedarf + Wenig Interesse) - Orange
            ctx.fillStyle = 'rgba(217, 119, 6, 0.1)';
            ctx.fillRect(margin, margin, halfWidth, halfHeight);
            
            // Quadrant 3: Rechts unten (Wenig Bedarf + Hohes Interesse) - Blau
            ctx.fillStyle = 'rgba(37, 99, 235, 0.1)';
            ctx.fillRect(margin + halfWidth, margin + halfHeight, halfWidth, halfHeight);
            
            // Quadrant 4: Links unten (Wenig Bedarf + Wenig Interesse) - Grau
            ctx.fillStyle = 'rgba(107, 114, 128, 0.1)';
            ctx.fillRect(margin, margin + halfHeight, halfWidth, halfHeight);
        }

// Datenpunkte zeichnen mit intelligenter Label-Positionierung
function drawDataPoints(ctx, margin, chartWidth, chartHeight, priorityData) {
    const padding = 0.15;
    const usableWidth = chartWidth * (1 - 2 * padding);
    const usableHeight = chartHeight * (1 - 2 * padding);
    
    // Farben je nach Quadrant
    const colors = {
        'priority-1': '#dc2626',
        'priority-2': '#d97706',
        'priority-3': '#2563eb',
        'priority-4': '#6b7280'
    };
    
    // Berechne Positionen für alle Punkte
    const points = priorityData.map(point => {
        const normalizedX = (point.x - 1) / 2;  // Berücksichtigt, dass Interesse von 1 bis 3 geht
        const normalizedY = (point.y - 1) / 2;  // dito
        const x = margin + chartWidth * padding + normalizedX * usableWidth;
        const y = margin + chartHeight * padding + (1 - normalizedY) * usableHeight;
        
        return {
            x: x,
            y: y,
            bereich: point.bereich,
            quadrant: point.quadrant,
            lines: splitBereichLabel(point.bereich)
        };
    });
    
    // Berechne Label-Positionen mit Kollisionsvermeidung
    const labels = calculateLabelPositions(points, ctx);
    
    // Zeichne Verbindungslinien zu verschobenen Labels
    labels.forEach((label, index) => {
        const point = points[index];
        
        // Wenn Label verschoben wurde, zeichne dünne Verbindungslinie
        const labelCenterX = label.x;
        const labelCenterY = label.y;
        const distance = Math.sqrt(Math.pow(labelCenterX - point.x, 2) + Math.pow(labelCenterY - point.y, 2));
        
        if (distance > 30) { // Nur bei größerer Verschiebung
            ctx.strokeStyle = colors[point.quadrant];
            ctx.lineWidth = 2;
            ctx.setLineDash([2, 2]);
            ctx.beginPath();
            ctx.moveTo(point.x, point.y);
            ctx.lineTo(labelCenterX, labelCenterY);
            ctx.stroke();
            ctx.setLineDash([]);
        }
    });
    
    // Zeichne Punkte
    points.forEach(point => {
        ctx.fillStyle = colors[point.quadrant];
        ctx.strokeStyle = colors[point.quadrant];
        ctx.lineWidth = 2;
        
        ctx.beginPath();
        ctx.arc(point.x, point.y, 8, 0, 2 * Math.PI);
        ctx.fill();
        ctx.stroke();
    });
    
    // Zeichne Labels
    ctx.font = '24px Arial';
    labels.forEach((label, index) => {
        const point = points[index];
        
        ctx.fillStyle = '#000';
        ctx.textAlign = 'center';
        
        // Erste Zeile
        ctx.fillText(point.lines[0], label.x, label.y - 5);
        // Zweite Zeile
        if (point.lines[1]) {
            ctx.fillText(point.lines[1], label.x, label.y + 20);
        }
    });
    
    ctx.textAlign = 'left'; // Reset
}

// Hilfsfunktion: Berechne Label-Positionen mit Kollisionsvermeidung
function calculateLabelPositions(points, ctx) {
    ctx.font = '24px Arial';
    
    const labels = [];
    const minDistance = 20; // Minimaler Abstand zwischen Labels
    
    points.forEach((point, index) => {
        // Bevorzugte Positionen (in Reihenfolge): oben, unten, rechts, links. Mit den Zahlenwerten spielen, bis gut.
        const positions = [
            { x: point.x, y: point.y - 50, priority: 1 },      // oben
            { x: point.x, y: point.y + 50, priority: 2 },      // unten
            { x: point.x + 100, y: point.y, priority: 3 },      // rechts
            { x: point.x - 100, y: point.y, priority: 4 },      // links

        ];
        
        // Finde beste Position ohne Kollision
        let bestPosition = positions[0];
        
        for (const pos of positions) {
            let hasCollision = false;
            
            // Prüfe Kollision mit bereits platzierten Labels
            for (const existingLabel of labels) {
                const distance = Math.sqrt(
                    Math.pow(pos.x - existingLabel.x, 2) + 
                    Math.pow(pos.y - existingLabel.y, 2)
                );
                
                if (distance < minDistance) {
                    hasCollision = true;
                    break;
                }
            }
            
            if (!hasCollision) {
                bestPosition = pos;
                break;
            }
        }
        
        labels.push(bestPosition);
    });
    
    return labels;
}

        // Beschriftungen zeichnen
        function drawLabels(ctx, margin, chartWidth, chartHeight) {
            ctx.fillStyle = '#374151';
            ctx.font = 'bold 28px Arial';
            
            // X-Achsen-Beschriftung (Interesse)
            ctx.textAlign = 'center';
            ctx.fillText('Interesse', margin + chartWidth/2, margin + chartHeight + 40);
            
            // Y-Achsen-Beschriftung (Weiterentwicklungsbedarf)
            ctx.save();
            ctx.translate(40, margin + chartHeight/2);
            ctx.rotate(-Math.PI/2);
            ctx.fillText('Weiterentwicklungsbedarf', 0, 0);
            ctx.restore();
            
            // Skala-Beschriftungen
            ctx.font = '20px Arial';
            ctx.fillStyle = '#6b7280'; 
            
            // X-Achse Skala
            ctx.textAlign = 'center';
            ctx.fillText('niedrig', margin + chartWidth * 0.25, margin + chartHeight + 40);
            ctx.fillText('hoch', margin + chartWidth * 0.75, margin + chartHeight + 40);
            
            // Y-Achse Skala
            ctx.textAlign = 'center';
            ctx.fillText('niedrig', margin - 40, margin + chartHeight * 0.85);
            ctx.fillText('hoch', margin - 40, margin + chartHeight * 0.15);
            
            // Quadranten-Labels
            ctx.font = 'bold 32px Arial';
            ctx.fillStyle = '#000';
            
            ctx.fillText('1. Priorität', margin + chartWidth * 0.75, margin + 40);
            ctx.fillText('2. Priorität', margin + chartWidth * 0.25, margin + 40);
            ctx.fillText('3. Priorität', margin + chartWidth * 0.75, margin + chartHeight - 20);
            ctx.fillText('Ohne Priorität', margin + chartWidth * 0.25, margin + chartHeight - 20);
            
            ctx.textAlign = 'left'; // Reset
        }

// =========================================================
// HTML2CANVAS EXPORT FUNKTIONEN (ERWEITERT)
// =========================================================

async function exportPageAsImage(pageId, filename, padding = 20) {
    const page = document.getElementById(pageId);
    
    try {
        const canvas = await html2canvas(page, {
            scale: 2,
            backgroundColor: '#ffffff',
            logging: false,
            useCORS: true,
            onclone: (clonedDoc) => {
                // Navigation im Klon ausblenden
                const nav = clonedDoc.querySelector('.navigation');
                if (nav) nav.style.display = 'none';
                
                // Export-Buttons im Klon ausblenden
                const buttons = clonedDoc.querySelectorAll('.export-button, .combined-export-button');
                buttons.forEach(btn => btn.style.display = 'none');

                // Farbauswahl-Container ausblenden
                const colorPicker = clonedDoc.querySelector('.color-picker-container');
                if (colorPicker) colorPicker.style.display = 'none';
            }
        });
        
        // Neues Canvas mit Rand erstellen
        const paddedCanvas = document.createElement('canvas');
        paddedCanvas.width = canvas.width + (padding * 2);
        paddedCanvas.height = canvas.height + (padding * 2);
        
        const ctx = paddedCanvas.getContext('2d');
        
        // Weißer Hintergrund mit Rand
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(0, 0, paddedCanvas.width, paddedCanvas.height);
        
        // Original-Canvas mit Abstand einfügen
        ctx.drawImage(canvas, padding, padding);
        
        // Download
        paddedCanvas.toBlob(function(blob) {
            const url = URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.download = filename;
            link.href = url;
            link.click();
            URL.revokeObjectURL(url);
        });
        
        return true;
    } catch (error) {
        console.error('Fehler beim Export:', error);
        return false;
    }
}

async function exportPriorityPage() {
    const button = document.querySelector('#page-priority .export-button');
    if (button) button.disabled = true;
    
    const success = await exportPageAsImage('page-priority', 'prioritaetsmatrix.png', 30);
    
    if (!success) {
        alert('Fehler beim Exportieren. Bitte versuche es erneut.');
    }
    
    if (button) button.disabled = false;
}

async function exportFinalPage() {
    const button = document.querySelector('#page-final .export-button');
    if (button) button.disabled = true;
    
    const success = await exportPageAsImage('page-final', 'kompetenzanalyse-ergebnis.png', 30);
    
    if (!success) {
        alert('Fehler beim Exportieren. Bitte versuche es erneut.');
    }
    
    if (button) button.disabled = false;
}

async function exportBothPages() {
    const button = document.querySelector('.combined-export-button');
    if (button) {
        button.disabled = true;
        button.textContent = 'Exportiere...';
    }
    
    // Aktuelle Seite merken
    const currentPageBackup = currentPage;
    
    // Beide Seiten referenzieren
    const priorityPage = document.getElementById('page-priority');
    const finalPage = document.getElementById('page-final');
    
    // Original Classes speichern
    const priorityClasses = priorityPage.className;
    const finalClasses = finalPage.className;
    
    try {
        // Priority-Seite aktivieren und exportieren
        document.querySelectorAll('.page').forEach(p => {
            p.classList.remove('active');
            p.style.display = 'none';
        });
        
        priorityPage.classList.add('active');
        priorityPage.style.display = 'block';
        priorityPage.style.opacity = '1';
        
        // Canvas neu zeichnen mit voller Größe
        await new Promise(resolve => setTimeout(resolve, 100));
        drawPriorityMatrix();
        await new Promise(resolve => setTimeout(resolve, 300));
        
        // Erste Seite exportieren
        const success1 = await exportPageAsImage('page-priority', '1_prioritaetsmatrix.png', 30);
        
        // Zur Final-Seite wechseln
        priorityPage.classList.remove('active');
        priorityPage.style.display = 'none';
        
        finalPage.classList.add('active');
        finalPage.style.display = 'block';
        finalPage.style.opacity = '1';
        
        // Canvas neu zeichnen mit voller Größe
        await new Promise(resolve => setTimeout(resolve, 100));
        drawRadar();
        await new Promise(resolve => setTimeout(resolve, 300));
        
        // Zweite Seite exportieren
        const success2 = await exportPageAsImage('page-final', '2_kompetenzanalyse-ergebnis.png', 30);
        
        if (success1 && success2) {
            // Erfolgsmeldung
            const message = document.createElement('div');
            message.style.cssText = `
                position: fixed;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                background: #10b981;
                color: white;
                padding: 20px 30px;
                border-radius: 8px;
                font-weight: bold;
                z-index: 9999;
                box-shadow: 0 4px 12px rgba(0,0,0,0.2);
            `;
            message.textContent = 'Beide Seiten erfolgreich gespeichert!';
            document.body.appendChild(message);
            
            setTimeout(() => {
                message.style.opacity = '0';
                message.style.transition = 'opacity 0.5s';
                setTimeout(() => message.remove(), 500);
            }, 2000);
        } else {
            alert('Fehler beim Exportieren einer oder beider Seiten.');
        }
    } catch (error) {
        console.error('Fehler beim kombinierten Export:', error);
        alert('Fehler beim Exportieren. Bitte versuche es erneut.');
    } finally {
        // Zurück zur ursprünglichen Seite
        document.querySelectorAll('.page').forEach(p => {
            p.classList.remove('active');
            p.style.display = 'none';
        });
        
        // Original-Seite wieder aktivieren
        if (currentPageBackup === pages.length) {
            priorityPage.classList.add('active');
            priorityPage.style.display = 'block';
            priorityPage.style.opacity = '1';
            drawPriorityMatrix();
        } else if (currentPageBackup === pages.length + 1) {
            finalPage.classList.add('active');
            finalPage.style.display = 'block';
            finalPage.style.opacity = '1';
            drawRadar();
        }
        
        // Button wieder aktivieren
        if (button) {
            button.disabled = false;
            button.textContent = 'Beide Ergebnisseiten als Bilder speichern';
        }
    }
}

// =========================================================
// VERSTECKTE TEST-FUNKTION
// =========================================================

// Test-Daten: Mittlere bis hohe Werte für realistische Darstellung
/*const TEST_ANTWORTEN = {
    // Zahl und Variable
    101: 2, 102: 2, 103: 3, 104: 2, 105: 3, 106: 2, 107: 1, 
    108: 2, 109: 2, 110: 2, 111: 2, 112: 2, 113: 2, 114: 2, 115: 3,
    
    // Form und Raum
    201: 2, 202: 3, 203: 2, 204: 2, 205: 2, 206: 2, 207: 2,
    208: 2, 209: 2, 210: 2, 211: 2, 212: 1, 213: 2, 214: 2, 215: 3, 216: 2,
    
    // Größen und Funktionen
    301: 2, 302: 3, 303: 2, 304: 2, 305: 2, 306: 2, 307: 2,
    308: 2, 309: 2, 310: 2,
    
    // Daten und Zufall
    401: 2, 402: 3, 403: 2, 404: 2, 405: 2, 406: 2, 407: 2,
    
    // Planung
    501: 2, 502: 3, 503: 3, 504: 2,
    
    // Beurteilung
    61: 2, 62: 3, 63: 2, 64: 2,
    
    // Lernbegleitung und Förderung
    71: 2, 72: 3, 73: 2, 74: 2
};
*/

const TEST_ANTWORTEN = {
    // Zahl und Variable - gemischte Kompetenzen
    101: 2,  // Grundrechenarten - eher unsicher
    102: 2,  // Stellenwertsystem - eher sicher
    103: 2,  // Multiplikation negativer Zahlen - korrekt
    104: 2,  // LP21 Kompetenz
    105: 2,  // Zählen und ordnen - sehr kompetent
    106: 2,  // Grundoperationen - wenig kompetent
    107: 2,  // Terme und Gleichungen - keine Kompetenz
    108: 2,  // Zahlbeziehungen erforschen
    109: 2,  // Aussagen erläutern
    110: 2,  // Hilfsmittel nutzen - sehr kompetent
    111: 2,  // Rechenwege darstellen
    112: 2,  // Anzahlen veranschaulichen
    113: 2,  // Zahlenmuster - gut
    114: 2,  // Unterrichtsplanung Arithmetik - mittlere Kompetenz
    115: 2,  // Gleichung ax+b=0 - falsch beantwortet
    116: 1,  // Interesse Operieren und Benennen 
    117: 1,  // Interesse Erforschen und Argumentieren 
    118: 1,  // Interesse Mathematisieren und Darstellen
    
    // Form und Raum - stärkerer Bereich
    201: 2,  // Geometrische Zusammenhänge visualisieren - sehr gut
    202: 2,  // Oktaeder Ecken - korrekt
    203: 1,  // Interesse räumliches Vorstellungsvermögen - sehr
    204: 2,  // Geometrische Eigenschaften - sehr gut
    205: 2,  // LP21 Begriffe und Symbole - sehr kompetent
    206: 2,  // Figuren abbilden - kompetent
    207: 2,  // Längen, Flächen, Volumen - kompetent
    208: 2,  // Geometrische Beziehungen erforschen - kompetent
    209: 2,  // Aussagen überprüfen - kompetent
    210: 2,  // Körper darstellen - sehr kompetent
    211: 2,  // Figuren zeichnen - sehr kompetent
    212: 2,  // Kopfgeometrie - kompetent
    213: 2,  // Koordinatensystem - kompetent
    214: 1,  // Interesse Operieren und Benennen -
    215: 1,  // Interesse Erforschen und Argumentieren - sehr interessiert
    216: 1,  // Interesse Mathematisieren und Darstellen - sehr interessiert
    
    // Größen und Funktionen - mittlerer Bereich mit Schwächen
    301: 3,  // Proportionale Zusammenhänge - sicher
    302: 3,  // Auto Geschwindigkeit - korrekt
    303: 2,  // Interesse funktionale Zusammenhänge - wenig
    304: 3,  // Alltagssituationen modellieren - gut
    305: 3,  // LP21 Begriffe - kompetent
    306: 3,  // Größen schätzen - wenig kompetent
    307: 3,  // Funktionale Zusammenhänge - wenig kompetent
    308: 3,  // Größenbeziehungen erforschen - kompetent
    309: 3,  // Sachsituationen mathematisieren - kompetent
    310: 1,  // Terme konkretisieren - wenig kompetent
    311: 2,  // Interesse Operieren und Benennen - wenig
    312: 2,  // Interesse Erforschen und Argumentieren - wenig
    313: 2,  // Interesse Mathematisieren und Darstellen - mittel
    
    // Daten und Zufall - schwächerer Bereich
    401: 2,  // Diagramme interpretieren - eher wenig kompetent
    402: 2,  // Münzwurf Wahrscheinlichkeit - korrekt
    403: 1,  // Interesse Statistik - keine Antwort/wenig
    404: 2,  // Statistiken hinterfragen - wenig
    405: 2,  // LP21 Begriffe - wenig kompetent
    406: 2,  // Sachsituationen erforschen - wenig kompetent
    407: 2,  // Daten erheben und darstellen - kompetent
    408: 1,  // Interesse Operieren und Benennen - keine Antwort/wenig
    409: 1,  // Interesse Erforschen und Argumentieren - keine Antwort/wenig
    410: 1,  // Interesse Mathematisieren und Darstellen - keine Antwort/wenig
    
    // Unterrichts- und Lernplanung
    
    // Planung - guter Bereich
    501: 3,  // Unterrichtsplanung - sicher
    502: 3,  // Lernwirksamer Unterricht - korrekt
    503: 1,  // Interesse innovative Methoden - sehr
    504: 3,  // Anpassung an Lernvoraussetzungen - gut
    
    // Beurteilung - mittlerer Bereich
    61: 2,   // Beurteilung math. Leistungen - kompetent
    62: 3,   // Formative Beurteilung - korrekt
    63: 2,   // Interesse alternative Beurteilung - mittel
    64: 2,   // Konstruktives Feedback - gut
    
    // Lernbegleitung und Förderung - Entwicklungsbedarf
    71: 1,   // Individuelle Förderung - eher unsicher
    72: 1,   // Fehleranalyse - korrekt
    73: 3,   // Interesse Rechenschwäche - sehr
    74: 1    // Begabungen fördern - keine Antwort/wenig
};

const TEST_PERSONAL_DATA = {
    vorname: 'Test',
    nachname: 'Person',
    matrikelnummer: '12345678',
    email: 'test.person@phbern.ch',
    studienfaecher: ['M', 'D', 'NT'],
    lerngelegenheiten: ['mikroplanung_math', 'beurteilung_math']
};

// Keypress-Listener für versteckte Test-Funktion
let keyBuffer = '';
let keyTimeout = null;

function initTestMode() {
    document.addEventListener('keypress', (e) => {
        // Buchstaben zum Buffer hinzufügen
        keyBuffer += e.key.toLowerCase();
        
        // Timeout zurücksetzen
        if (keyTimeout) clearTimeout(keyTimeout);
        keyTimeout = setTimeout(() => {
            keyBuffer = '';
        }, 2000); // Buffer nach 2 Sekunden zurücksetzen
        
        // Prüfen ob "testx" eingegeben wurde
        if (keyBuffer.includes('testx')) {
            activateTestMode();
            keyBuffer = ''; // Buffer zurücksetzen
        }
    });
}

        function activateTestMode() {
            console.log('🧪 Test-Modus aktiviert!');
            
            // Antworten füllen
            antworten = { ...TEST_ANTWORTEN };
            
            // Persönliche Daten füllen
            document.getElementById('vorname').value = TEST_PERSONAL_DATA.vorname;
            document.getElementById('nachname').value = TEST_PERSONAL_DATA.nachname;
            document.getElementById('matrikelnummer').value = TEST_PERSONAL_DATA.matrikelnummer;
            document.getElementById('email').value = TEST_PERSONAL_DATA.email;
            
            // Studienfächer auswählen
            selectedSubjects = [...TEST_PERSONAL_DATA.studienfaecher];
            
            // Lerngelegenheiten auswählen
            selectedLerngelegenheiten = [...TEST_PERSONAL_DATA.lerngelegenheiten];
            
            // Persönliche Daten sammeln
            collectPersonalData();
            
            // Zur zweitletzten Seite (Priority-Matrix) springen
            goToPage(pages.length);
            
            // Visuelles Feedback
            const testIndicator = document.createElement('div');
            testIndicator.style.cssText = `
                position: fixed;
                top: 10px;
                right: 10px;
                background: #fbbf24;
                color: #92400e;
                padding: 10px 15px;
                border-radius: 6px;
                font-weight: bold;
                z-index: 9999;
                box-shadow: 0 4px 6px rgba(0,0,0,0.1);
            `;
            testIndicator.textContent = '🧪 TEST-MODUS';
            document.body.appendChild(testIndicator);
            
            // Indicator nach 3 Sekunden ausblenden
            setTimeout(() => {
                testIndicator.style.opacity = '0';
                testIndicator.style.transition = 'opacity 0.5s';
                setTimeout(() => testIndicator.remove(), 500);
            }, 3000);
        }

        // Starte die Anwendung nach dem vollständigen Laden des DOM
        document.addEventListener('DOMContentLoaded', function() {
            init();
            
            // Globale Funktionen für Event-Handler bereitstellen
            window.handleAntwort = handleAntwort;
            window.handleSubjectSelection = handleSubjectSelection;
            window.handleLerngelegenheitSelection = handleLerngelegenheitSelection;
            window.updateSelectedLerngelegenheitenDisplay = updateSelectedLerngelegenheitenDisplay;
            window.removeLerngelegenheit = removeLerngelegenheit;
            window.updateChartColors = updateChartColors;
            window.resetChartColors = resetChartColors;
            window.exportPriorityPage = exportPriorityPage;     // NEU
            window.exportFinalPage = exportFinalPage;           // NEU
            window.exportBothPages = exportBothPages;
        });