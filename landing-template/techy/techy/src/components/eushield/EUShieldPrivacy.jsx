import React, { Fragment } from 'react'

export const EU_SHIELD_PRIVACY_EFFECTIVE_DATE = 'November 9, 2026'

const EUShieldPrivacy = () => {
  return (
    <Fragment>
      <article className="eushield-legal-doc">
        <header className="eushield-legal-header mb-50">
          <h1 className="sect-title mb-20">
            EUShield Privacy &amp; Compliance Statement (GDPR &amp; EU AI Act)
          </h1>
          <p className="eushield-legal-meta">
            Last Updated: <time dateTime="2026-11-09">{EU_SHIELD_PRIVACY_EFFECTIVE_DATE}</time>
          </p>
        </header>

        <section className="eushield-legal-section mb-45">
          <h2 className="sect-title-two mb-20">
            1. Zero-Data Retention Architecture (Local-First Processing)
          </h2>
          <p className="fs-17 text-white mb-20">
            EUShield (AnonymX) operates strictly as a local browser extension. It
            intercepts, tokenizes, and de-tokenizes text inputs locally within the
            user&apos;s browser runtime.
          </p>
          <ul className="eushield-legal-list">
            <li>
              <strong>ZERO server-side storage:</strong> No prompt data, user
              inputs, or Personal Identifiable Information (PII) is ever
              transmitted to, stored on, or processed by EUShield external servers.
            </li>
            <li>
              <strong>Encryption:</strong> All token mapping is held in volatile
              local memory (<code>chrome.storage.session</code>) and is
              automatically destroyed when the browser session or tab is closed.
            </li>
          </ul>
        </section>

        <section className="eushield-legal-section mb-45">
          <h2 className="sect-title-two mb-20">2. Role Under GDPR (Art. 4 GDPR)</h2>
          <p className="fs-17 text-white mb-0">
            Since EUShield does not access, transmit, or store personal data
            outside the user&apos;s local machine, EUShield{' '}
            <strong>DOES NOT</strong> act as a Data Controller or Data Processor
            under GDPR. The data management remains entirely within the boundary
            of the user&apos;s local enterprise environment. EUShield acts purely as
            a local Data Loss Prevention (DLP) technical safeguard.
          </p>
        </section>

        <section className="eushield-legal-section mb-45">
          <h2 className="sect-title-two mb-20">
            3. Compatibility with Third-Party AI Providers
          </h2>
          <p className="fs-17 text-white mb-0">
            EUShield actively reduces the risk of unlawful third-party data
            transfers (under Chapter V GDPR) to non-EU servers (e.g., US-based AI
            infrastructure) by ensuring that only anonymized placeholders (
            <code>[NAME_n]</code>, <code>[IBAN_n]</code>) leave the local client
            environment.
          </p>
        </section>

        <section className="eushield-legal-section mb-45">
          <h2 className="sect-title-two mb-20">4. Disclaimer</h2>
          <p className="fs-17 text-white mb-0">
            EUShield is a tool designed to mitigate corporate data leaks. While it
            provides robust algorithmic masking based on European standards
            (including MOD-97 checksums for financial data), the ultimate
            responsibility for compliance under the EU AI Act and GDPR remains
            with the deploying enterprise organization.
          </p>
        </section>

        <footer className="eushield-legal-footer pt-30">
          <p className="eushield-legal-meta mb-15">
            Last Updated: {EU_SHIELD_PRIVACY_EFFECTIVE_DATE}
          </p>
          <p className="eushield-legal-signature">
            by Bane dev, Belgrade, Serbia.
            <br />
            <a href="mailto:bane.madjija@gmail.com">bane.madjija@gmail.com</a>
          </p>
        </footer>
      </article>
    </Fragment>
  )
}

export default EUShieldPrivacy
