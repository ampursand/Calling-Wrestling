# AEW Calling It!

A local-first replacement app for the `AEW Calling It!` Google Sheet.

## What It Covers

- Year and company filtering like the yearly spreadsheet tabs.
- Event/show tracking for AEW, ROH, NJPW, WWE, and crossover shows.
- Match cards with per-player predictions, final winners, and automatic scoring.
- Database sections for companies, shows, wrestlers, and teams.
- JSON import/export so the tracker can move between browsers or become a future backend seed.

## Run It

Open `index.html` in a browser. No build step or package install is required.

## Spreadsheet Mapping

The source workbook has yearly tabs (`2023`, `2024`, `2025`, `2026`) plus database tabs:

- `Company Database`
- `Show Database`
- `Wrestler Database`
- `Entity Mapping`
- `Team Database`
- `Miscellaneous`

This first app version turns those spreadsheet concepts into structured local data. A later pass can import the full Google Sheet once the Sheets API quota is available again.
