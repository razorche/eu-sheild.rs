# EUShield (AnonymX)

Cybal-dark B2B ecosystem: **Chromium MV3 extension** + **React landing** with local download counter and live tokenizer sandbox.

## Quick start

### Extension (v0.3.0)
1. `chrome://extensions` ? Developer mode ? **Load unpacked** ? `extension/`
2. Open ChatGPT or Claude with shield ON (default fail-closed).

### Landing
```bash
cd "landing-template/techy/techy"
npm install
npm start
```

Home: Cybal-styled EUShield single page. **Download Extension** increments `localStorage` counter (`eushield_download_stats_v1`, baseline 1420).

### Tests

```bash
cd extension
npm test
```

## Features (extension)

| Feature | Status |
|---------|--------|
| fetch/XHR outbound redaction | Yes |
| IBAN MOD-97, Email, EUR, Phone, Names | Yes |
| Custom RegEx (popup) | Yes |
| Per-category toggles | Yes |
| Fail-closed modal | Yes |
| TreeWalker de-tokenization | Yes |
| Copy Clean button on AI replies | Yes |
| Session vault purge | Yes |

## Assets

- Cybal template: `public/assets/cybal/`
- Custom icons: `public/assets/eushield/icons/`
- Extension ZIP: `public/downloads/eushield-extension.zip`

## Rebuild ZIP after extension changes

```powershell
Compress-Archive -Path "extension\*" -DestinationPath "landing-template\techy\techy\public\downloads\eushield-extension.zip" -Force
```
