# VCO Dresden - Saison 2025/26

Statische Webseite mit Spielkarten zur Saison 2025/26 von VCO Dresden in der Sparda 2. Liga Pro.

Die Seite enthält:

- alle 28 Saisonspiele
- Ergebnisse, Satzstände und Ballpunkte
- Tabellenplatz nach dem jeweiligen Spiel
- Spielnummern und matchIds
- Spieldauer, Zuschauer und Spielhalle
- planmäßige Uhrzeit je Spiel
- Teamlogos und Links zu Teamseiten
- MVPs mit Spielerinnenlinks
- Kurzberichte aus VBL-Spielartikeln bzw. neutralen Spieldaten
- Links zu Spieldetails, Statistik-PDF, Spielartikeln und YouTube-Video
- Punkteverlauf als Kreis-Kette
- Tabellenverlauf und Abschlusstabellen
- Kreuztabelle
- Saisonbilanz
- Dresdner MVP-Auswertung
- YouTube-Direktlinks für alle 28 Saisonspiele

## Dateien

Die Seite besteht nur aus statischen Dateien:

- `index.html` - HTML-Struktur
- `styles.css` - Layout und Responsive Design
- `app.js` - Rendering, Filter, Sortierung und Berechnungen
- `games.js` - Spieldaten, Links, Logos, MVPs und YouTube-Aufrufe
- `cross-table.js` - Kreuztabelle der Liga

Es gibt keinen Build-Schritt und keine Server-Abhängigkeit.

## Lokal anschauen

Im Projektordner:

```bash
python3 -m http.server 8000
```

Danach im Browser öffnen:

```text
http://localhost:8000/
```

## Veröffentlichung auf knud-zabrocki.de

Empfohlen ist eine statische Unterseite auf dem Webspace.

1. Per FTP/SFTP oder Webhosting-Dateimanager einen Ordner anlegen, zum Beispiel:

```text
/vco-dresden-2025-26/
```

2. Diese fünf Dateien in den Ordner hochladen:

```text
index.html
styles.css
app.js
games.js
cross-table.js
```

3. Danach sollte die Seite erreichbar sein unter:

```text
https://knud-zabrocki.de/vco-dresden-2025-26/
```

## In WordPress einbinden

Wenn die Seite als eigene statische Unterseite auf dem Webspace liegt, kann sie in WordPress per Custom-HTML-Block eingebettet werden:

```html
<iframe
  src="https://knud-zabrocki.de/vco-dresden-2025-26/"
  style="width:100%; height:900px; border:0;"
  loading="lazy">
</iframe>
```

Bei sehr langer Seite kann die Hoehe erhoeht werden. Alternativ ist ein normaler Link auf die Unterseite oft sauberer.

## GitHub Pages

Falls ein Repository angelegt wird, kann es auch direkt mit GitHub Pages veroeffentlicht werden:

Repository:

```text
https://github.com/Zappi77/vco-dresden-2025-26
```

1. GitHub-Repository oeffnen.
2. `Settings` -> `Pages`.
3. `Deploy from a branch` auswaehlen.
4. Branch `main`, Ordner `/root` waehlen.
5. Speichern.

Danach stellt GitHub eine Pages-URL bereit, typischerweise:

```text
https://zappi77.github.io/vco-dresden-2025-26/
```

Diese URL kann ebenfalls in WordPress verlinkt oder per iframe eingebettet werden.

## Daten aktualisieren

Die meisten Inhalte stehen in `games.js`.

Typische Anpassungen:

- YouTube-Aufrufe: `youtubeViews`
- Stichtag der YouTube-Aufrufe: `youtubeViewsDate`
- neue/andere Links: `videoUrl`, `articleUrl`, `statsUrl`
- Spieltexte: `summary` im jeweiligen Spielobjekt
- MVPs: `mvps`
- Logos: `teamLogoUrls`

Nach Aenderungen:

```bash
git add .
git commit -m "Update season data"
git push
```

## Hinweise

Die Teamlogos, Spieldetails, Statistik-PDFs, Spielartikel und YouTube-Videos werden extern verlinkt. Bildergalerien sind derzeit nicht hinterlegt.

## Änderungshistorie

### 04.07.2026

- Linkstruktur analog zur veröffentlichten DSHS-Seite überarbeitet
- für alle 28 Spiele den offiziellen SAMS-Spielbericht aus den Spieldetails separat verlinkt
- separate VBL-Spielstatistik unter `live.volleyball-bundesliga.de/2025-26/Women/[SPIELNUMMER].pdf` ergänzt
- vier vom VBL-Server nicht veröffentlichte Statistik-PDFs (#3209, #3193, #3187, #3203) als nicht verfügbar gekennzeichnet
- Artikel als betitelte Links mit Herkunftskürzel dargestellt
- Kurzberichte auf jeweils drei Sätze erweitert und um die MVP-Auszeichnungen ergänzt
- Impressum, Datenschutz und Copyright im Footer ergänzt
- interne Benamung von alten Köln-Bezeichnern auf neutrale `focusTeam`-Bezeichner umgestellt
- Responsive-, Syntax- und Linkcheck durchgeführt

### 27.06.2026

- Projekt aus der NawaRo-Straubing-Vorlage für VCO Dresden angelegt
- 28 Dresdner Ligaspiele aus der offiziellen VBL-Teamseite übernommen
- Einzelsatzergebnisse, Ballpunkte, Spielnummern und matchIds ergänzt
- planmäßige Uhrzeiten, Spielhallen, Zuschauer und Spieldauer aus VBL-Daten ergänzt
- Tabellenplatz nach jedem Dresdner Spiel aus allen 210 Ligaergebnissen berechnet
- MVPs mit Spielerinnenprofilen aus den VBL-Spieldetails ergänzt
- Artikel-Links und Kurzberichte aus den VBL-Spieldetailseiten ergänzt
- 14 bekannte YouTube-Direktlinks aus den vorhandenen Teamseiten übernommen
- die übrigen 14 Direktlinks anhand ihrer YouTube-Titel eindeutig den Begegnungen zugeordnet
- YouTube-Aufrufzahlen aller 28 Direktvideos mit Stichtag 27.06.2026 aktualisiert
- alle 28 Kurzbeschreibungen gegen Artikel und offizielle Satzdaten geprüft; zwölf knappe, abgeschnittene oder aus Vorlagenperspektive formulierte Texte vollständig überarbeitet
- Dateien auf fremde Vorlagenwerte geprüft; NawaRo-Nennungen verbleiben ausschließlich als reguläre Liga-, Kreuztabellen- und Gegnerdaten
- Bildergalerie-Links vorerst nicht hinterlegt
- Punkteverlauf, Tabellenverlauf, Abschlusstabellen, Kreuztabelle und Saisonbilanz angepasst
- Syntax-, Browser- und externer Linkcheck für VBL-/SAMS-/Logo-/Teamlinks durchgeführt
