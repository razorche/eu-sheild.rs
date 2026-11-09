/* Lightweight demo tokenizer mirroring extension logic for landing sandbox */

const EMAIL_RE = /\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b/gi;
const IBAN_CANDIDATE_RE = /\b[A-Z]{2}[0-9]{2}[\sA-Z0-9]{11,32}\b/gi;
const EUR_RE =
  /(?:€\s?)?\d{1,3}(?:[.\s]\d{3})*(?:,\d{2})?(?:\s?(?:€|EUR|eur))?|\bEUR\s?\d{1,3}(?:[.\s]\d{3})*(?:,\d{2})?\b/gi;
const NAME_RE =
  /\b(?:Mr|Mrs|Ms|Dr|Prof|Adv|g\.)\.?\s+[A-Z??ŽŠ?ÄÖÜ][a-z??žš?äöüéèê'-]+(?:\s+[A-Z??ŽŠ?ÄÖÜ][a-z??žš?äöüéèê'-]+)+\b/g;

function mod97(iban) {
  const expanded = (iban.slice(4) + iban.slice(0, 4))
    .replace(/[A-Z]/g, (ch) => String(ch.charCodeAt(0) - 55))
    .replace(/\s/g, '');
  let remainder = 0;
  for (let i = 0; i < expanded.length; i += 1) {
    remainder = (remainder * 10 + Number(expanded[i])) % 97;
  }
  return remainder === 1;
}

export function demoTokenize(text) {
  const vault = new Map();
  const counters = { NAME: 0, IBAN: 0, EMAIL: 0, EUR: 0 };
  const next = (type, value) => {
    counters[type] += 1;
    vault.set(`${type}_${counters[type]}`, value);
    return `[${type}_${counters[type]}]`;
  };

  let out = text;
  out = out.replace(IBAN_CANDIDATE_RE, (m) => {
    const iban = m.replace(/\s/g, '').toUpperCase();
    if (iban.length >= 15 && mod97(iban)) return next('IBAN', m.trim());
    return m;
  });
  out = out.replace(EMAIL_RE, (m) => next('EMAIL', m));
  out = out.replace(EUR_RE, (m) => next('EUR', m.trim()));
  out = out.replace(NAME_RE, (m) => next('NAME', m.trim()));

  return {
    redacted: out,
    map: Object.fromEntries(vault),
    detokenized: out.replace(
      /\[(NAME|IBAN|EMAIL|EUR)_(\d+)\]/g,
      (_, type, num) => vault.get(`${type}_${num}`) || `[${type}_${num}]`
    ),
  };
}
