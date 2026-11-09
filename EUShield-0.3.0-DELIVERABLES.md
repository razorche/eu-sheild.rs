# EUShield 0.3.0 — engineering deliverables

## 1. Root cause — ChatGPT blocking

**Primary:** `detectAttachmentKey()` in tokenizer v0.2.x treated any JSON property whose **name** contained `file`, `image`, or `attachment` as an upload. Normal ChatGPT payloads include `file_ids: []`, `attachments: []`, `files: []` ? immediate **ATTACHMENT** fail-closed on every send.

**Secondary:** `fetch` was patched for **all** requests on ChatGPT/Claude hosts (analytics, models, GET assets), often consuming/cloning bodies unnecessarily ? parse errors and **PARSE** blocks.

**Tertiary:** Non-message endpoints had JSON walked and blocked for empty metadata.

## 2. Root cause — Claude blocking

Same attachment false positives and broad fetch interception. Claude conversation JSON often includes empty `files` / metadata fields and UUID fields (previously misclassified as file IDs via regex).

## 3. Security issues found (v0.2.x)

| Issue | Severity | v0.3.0 fix |
|-------|----------|------------|
| Full PII vault synced via `postMessage` + `chrome.storage.session` | High | Vault stays in MAIN-world closure; bridge stores **count only** |
| Page could send `SYNC_VAULT` with forged map | Medium | Message type removed from bridge handling |
| Policy could be spoofed from page (theoretical) | Medium | Policy only from `chrome.storage` via isolated bridge |
| MAIN world shares page realm (inherent) | Documented | Honest trust-boundary comment in `bridge.js` |
| Dev logs could include raw body snippets | Low | `DEV_LOG` default false; no body in bridge messages |
| Misleading “leaks blocked” counter on redaction | Low | Split into **redactionsToday** vs **blockedToday** |

## 4. Files modified / added / removed

**Modified:** `extension/manifest.json`, `lib/tokenizer.js`, `content/bridge.js`, `background.js`, `content/page-runtime.js` (new), `lib/outbound-processor.js` (new), `popup/*`, `landing.../EUShieldHome.js`, `landing.../downloadCounter.js`, `README.md` (recommended)

**Removed:** `extension/content/injector.js`, `extension/lib/dom-shield.js` (merged into `page-runtime.js`)

**Added:** `extension/package.json`, `extension/test/tokenizer.test.js`

## 5. Architectural changes

- **`page-runtime.js`:** Single MAIN-world bundle — shared `sessionVault`, outbound processor, DOM restore, Copy Clean.
- **`outbound-processor.js`:** Testable classification + body processing.
- **`classifyIntercept()`:** Only POST/PUT/PATCH to known **message** path patterns.
- **Tokenizer:** One `createRunState` per JSON redaction; structural `detectAttachmentValue()`; safer custom regex compile.
- **Bridge:** Allow-list message types; no vault map over postMessage.

## 6. Automated test results

```bash
cd extension && npm test
```

16 tests implemented (covers spec items 1–11, 13, 15–17, 20). **All passing** after IBAN fixture fix.

Not automated in CI here: 12, 14, 18, 19 (require browser/MV3 harness).

## 7. Known limitations

- Message URL patterns may need updates when OpenAI/Anthropic change APIs.
- MAIN-world vault is **not hidden from hostile page JS** (same realm); extension does not claim otherwise.
- Raw-string fallback when JSON parse fails can false-positive on large protocol strings.
- Multimodal uploads intentionally blocked (MVP).
- Live ChatGPT/Claude E2E **not executed** in this environment.

## 8. Manual validation checklist

- [ ] ChatGPT new chat — plain “hello” sends
- [ ] ChatGPT — PII in message ? tokens in network payload
- [ ] ChatGPT — empty `file_ids` / no upload
- [ ] ChatGPT — image upload ? ATTACHMENT modal
- [ ] Claude — same matrix
- [ ] Refresh tab ? injector ready in popup
- [ ] Purge vault ? count 0, restore stops
- [ ] Copy Clean ? tokenized clipboard
- [ ] Shield OFF ? no redaction

## 9. Version

**0.3.0** in `manifest.json` and `extension/package.json`.

## 10. Branding

Popup Cybal-dark UI, gradients, Lexend, scrubber pills — **preserved**; added injector status + metric rename.
