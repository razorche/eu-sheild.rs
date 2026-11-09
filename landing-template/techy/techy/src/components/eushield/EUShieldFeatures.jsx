import React, { Fragment } from 'react'

const features = [
  {
    icon: 'assets/eushield/icons/tokenization.svg',
    title: 'Local Tokenization',
    desc: 'PII is replaced with neutral tokens in-browser before any API call. Your vault never touches our servers.',
  },
  {
    icon: 'assets/eushield/icons/iban.svg',
    title: 'IBAN · MOD-97',
    desc: 'Checksum-validated EU IBAN detection blocks false positives and keeps finance teams compliant.',
  },
  {
    icon: 'assets/eushield/icons/fail-closed.svg',
    title: 'Fail-Closed Protection',
    desc: 'Unknown protocol or tokenization failure? We block the send — no gambling with client data.',
  },
  {
    icon: 'assets/eushield/icons/copy-clean.svg',
    title: 'Copy Clean',
    desc: 'De-tokenized UX on screen; one-click copy exports anonymized text for external sharing (roadmap).',
  },
]

const EUShieldFeatures = () => {
  return (
    <Fragment>
      <section className="gradient-bg our-services service-bg-three pt-95 pb-55 pt-lg-55 pb-lg-15">
        <div className="container">
          <div className="row justify-content-center mb-55">
            <div className="col-lg-8 text-center">
              <h2 className="sect-title">
                Enterprise scrubbers built for{' '}
                <span className="text-theme">EU regulation</span>
              </h2>
              <p className="mb-0">
                One design system from landing page to Chromium popup — your
                teams trust what they see.
              </p>
            </div>
          </div>
          <div className="row gx-4 gx-xxl-5">
            {features.map((f) => (
              <div key={f.title} className="col-lg-3 col-md-6" data-aos="fade-up">
                <div className="feature-style-five eushield-feature-card mb-45">
                  <div className="icon mb-30 eushield-icon-wrap">
                    <img src={f.icon} alt="" />
                  </div>
                  <h3 className="sect-title-two mb-15">{f.title}</h3>
                  <p>{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Fragment>
  )
}

export default EUShieldFeatures
