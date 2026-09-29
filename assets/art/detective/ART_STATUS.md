# Detective case art status

Source of truth for scenes, cast, clue IDs and story details: `js/data.js`. This directory contains prepared visual assets; `js/art.js` still draws the playable game's SVG art. Adding files here alone does not change the game screen.

| Case | Cover | Story scenes | Character portraits | Standalone clue cutouts | Remaining standalone clue IDs |
| --- | ---: | ---: | ---: | ---: | ---: |
| 01 Rainy Night Study | 1 | 2 game scenes; 8 environment/close-up files | 12 portrait/pose files, but identity mapping to game cast needs review | 11 | 16 IDs need mapping and story QA |
| 02 Gallery Theft | 1 | 2/2 | 2/2 | 1/14 | 13 |
| 03 The Last Cup | 1 | 2/2 | 3/3 | 1/18 | 17 |
| 04 Night Voyage | 1 | 2/2 | 3/3 | 1/17 | 16 |
| 05 Seventh Row | 1 | 3/3 | 3/3 | 1/19 | 18 |
| 06 Manor in Fog | 1 | 3/3 | 3/3 (Lin Yang portrait reused from 02) | 1/21 | 20 |

The five newer case manifests list every missing standalone clue ID. Objects within painted backgrounds are not independent alpha assets. First-case portraits and clues were designed against a separate concept sheet and need an explicit mapping check against the current game data before integration. The current `js/art.js` SVG artwork remains the working fallback for all 105 clues.

Next production gate: map or produce remaining clue cutouts, review scene hotspot positions on portrait backgrounds, then wire the approved art manifest into the existing game without breaking its offline SVG fallback.
