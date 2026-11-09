import React, { Fragment, useMemo, useState } from 'react'
import { Helmet } from 'react-helmet'
import CybalNav from '../../components/cybal/CybalNav'
import CybalFooter from '../../components/cybal/CybalFooter'
import { useDownloadCounter } from '../../hooks/useDownloadCounter'
import { demoTokenize } from '../../utils/demoTokenizer'

const PRESETS = {
  legal:
    'Adv. Marko Petrovic prepared contract for client IBAN HR1210010051863000160, fee EUR 125.000,00.',
  sepa: 'SEPA transfer: Marko Petrovic to RS352600056031133177, amount EUR 48.500,00.',
  medical:
    'Dr. Ana Jovanovic - patient Jelena Maric, email jelena.m@klinika.rs, treatment cost 12.400 EUR.',
  hr: 'HR: Executive salary for Petar Nikolic is EUR 8.750,00 monthly. Contact hr@firma.com.',
}

const SERVICES = [
  {
    img: '/assets/eushield/stock/service-1.jpg',
    icon: '/assets/eushield/icons/tokenization.svg',
    title: 'European Names',
    desc: 'Contextual detection for EU/Balkan/DACH personal names to [NAME_n].',
  },
  {
    img: '/assets/eushield/stock/service-2.jpg',
    icon: '/assets/eushield/icons/iban.svg',
    title: 'IBAN MOD-97',
    desc: 'Checksum-validated financial identifiers before they hit US AI APIs.',
  },
  {
    img: '/assets/eushield/stock/service-3.jpg',
    icon: '/assets/eushield/icons/tokenization.svg',
    title: 'Emails & Phones',
    desc: 'Corporate contact data scrubbed locally to [EMAIL_n], [PHONE_n].',
  },
  {
    img: '/assets/eushield/stock/service-4.jpg',
    icon: '/assets/eushield/icons/tokenization.svg',
    title: 'EUR Amounts',
    desc: 'European currency formats normalized to neutral [EUR_n] tokens.',
  },
  {
    img: '/assets/eushield/stock/service-5.jpg',
    icon: '/assets/eushield/icons/fail-closed.svg',
    title: 'Custom RegEx',
    desc: 'Tenant-specific patterns (contract IDs, national numbers) to [CUSTOM_n].',
  },
  {
    img: '/assets/eushield/stock/service-6-fallback.jpg',
    icon: '/assets/eushield/icons/copy-clean.svg',
    title: 'De-tokenize + Copy Clean',
    desc: 'TreeWalker restores readable UI; Copy Clean exports tokenized text.',
  },
]

const EUShieldHome = () => {
  const { totalCount, localCount, triggerDownload } = useDownloadCounter()
  const [sandboxInput, setSandboxInput] = useState(PRESETS.legal)
  const [activePreset, setActivePreset] = useState('legal')
  const [viewMode, setViewMode] = useState('anon')

  const sandbox = useMemo(() => demoTokenize(sandboxInput), [sandboxInput])

  return (
    <Fragment>
      <div className="eushield-cybal-site">
        <Helmet>
          <title>EUShield - Stop AI Data Leaks Before They Leave the EU</title>
        </Helmet>
        <CybalNav onDownload={triggerDownload} />

        <section
          className="home_bg eushield-hero-bg"
          style={{
            backgroundImage: 'url(/assets/eushield/hero/laptop-shield.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center right',
          }}
        >
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-7 col-md-10 col-sm-12">
                <div className="hero-text ht2">
                  <h1>
                    Stop AI Data Leaks Before They Leave the{' '}
                    <span style={{ color: '#18fef5' }}>EU</span>
                  </h1>
                  <p>
                    Browser-local tokenization for ChatGPT &amp; Claude. Designed to
                    reduce plain-text PII in outbound prompts; fail-closed on
                    unsupported uploads and tokenization errors. Not legal advice.
                  </p>
                </div>
                <div className="skill_btn">
                  <button type="button" className="btn_one" onClick={triggerDownload}>
                    Download Extension
                  </button>
                  <a href="#sandbox" className="btn_two">
                    Interactive Sandbox
                  </a>
                </div>
                <p className="eushield-download-pill">
                  Downloaded {localCount} time{localCount === 1 ? '' : 's'} on this
                  browser ({totalCount.toLocaleString()} total including this device)
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="count_area counter_feature">
          <div className="container">
            <div className="row text-center">
              <div className="col-lg-3 col-sm-6 no-padding">
                <div className="single-project">
                  <h2 className="counter-num">{totalCount.toLocaleString()}</h2>
                  <h4>Downloads (this site)</h4>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6 no-padding">
                <div className="single-project">
                  <h2 className="counter-num">Local</h2>
                  <h4>No EUShield Backend</h4>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6 no-padding">
                <div className="single-project">
                  <h2 className="counter-num">MOD-97</h2>
                  <h4>IBAN Scrubbing</h4>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6 no-padding">
                <div className="single-project">
                  <h2 className="counter-num">v0.3</h2>
                  <h4>Fail-Closed (MVP)</h4>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="how" className="ab_one section-padding">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-sm-12">
                <div className="ab_img">
                  <img
                    src="/assets/eushield/hero/shield-circuit.png"
                    className="img-fluid eushield-photo-rounded"
                    alt="EUShield circuit shield architecture"
                  />
                </div>
              </div>
              <div className="col-lg-6 col-sm-12">
                <div className="ab_content">
                  <span>Architecture</span>
                  <h2>Five-step local shield ù zero data on our servers</h2>
                </div>
                <div className="abmv">
                  <h4>
                    <img src="/assets/eushield/icons/check.svg" alt="" className="eushield-check-icon" /> MAIN world fetch intercept
                  </h4>
                  <p>Outbound JSON is rewritten before ChatGPT/Claude APIs receive it.</p>
                </div>
                <div className="abmv">
                  <h4>
                    <img src="/assets/eushield/icons/check.svg" alt="" className="eushield-check-icon" /> Session vault in isolated RAM
                  </h4>
                  <p>Token maps live in chrome.storage.session ù destroyed on tab close.</p>
                </div>
                <div className="abmv">
                  <h4>
                    <img src="/assets/eushield/icons/check.svg" alt="" className="eushield-check-icon" /> TreeWalker de-tokenization
                  </h4>
                  <p>Streaming AI replies restore readable names locally; Copy Clean keeps tokens.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="sandbox" className="section-padding">
          <div className="container">
            <div className="section-title text-center">
              <span>Live demo</span>
              <h2>Interactive tokenizer sandbox</h2>
            </div>
            <div className="eushield-sandbox">
              <div className="eushield-preset-row" role="tablist" aria-label="Sample scenarios">
                {Object.entries(PRESETS).map(([key, value]) => (
                  <button
                    key={key}
                    type="button"
                    role="tab"
                    aria-selected={activePreset === key}
                    className={`eushield-preset-chip${activePreset === key ? ' is-active' : ''}`}
                    onClick={() => {
                      setActivePreset(key)
                      setSandboxInput(value)
                    }}
                  >
                    {key}
                  </button>
                ))}
              </div>
              <textarea
                value={sandboxInput}
                onChange={(e) => {
                  setSandboxInput(e.target.value)
                  setActivePreset('')
                }}
                aria-label="Text to tokenize"
              />
              <div className="eushield-view-row">
                <button
                  type="button"
                  className={`eushield-view-btn${viewMode === 'anon' ? ' is-active' : ''}`}
                  onClick={() => setViewMode('anon')}
                >
                  AI Server View
                </button>
                <button
                  type="button"
                  className={`eushield-view-btn${viewMode === 'employee' ? ' is-active' : ''}`}
                  onClick={() => setViewMode('employee')}
                >
                  Employee DOM View
                </button>
              </div>
              <pre className="eushield-sandbox-output">
                {viewMode === 'anon' ? sandbox.redacted : sandbox.detokenized}
              </pre>
            </div>
          </div>
        </section>

        <section id="scrubbers" className="service_area section-padding">
          <div className="container">
            <div className="section-title text-center">
              <span>PII scrubbers</span>
              <h2>Six core enterprise-grade protections</h2>
            </div>
            <div className="row">
              {SERVICES.map((s) => (
                <div key={s.title} className="col-lg-4 col-md-6 col-sm-12">
                  <div className="single_service">
                    <img src={s.img} className="img-fluid" alt="" />
                    <img src={s.icon} alt="" style={{ width: 36, marginTop: 8 }} />
                    <h2>{s.title}</h2>
                    <p>{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          className="why_area section-padding eushield-why-bg"
          style={{
            backgroundImage: 'url(/assets/eushield/stock/section-bg.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
          }}
        >
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-sm-12">
                <div className="ab_content">
                  <span>Why EUShield</span>
                  <h2>GDPR Chapter V &amp; EU AI Act risk ù neutralized at the keyboard</h2>
                  <p>
                    Law firms, banks, clinics, and HR teams use ChatGPT daily. EUShield ensures
                    only anonymized placeholders cross the Atlantic while employees keep
                    productive, readable AI output on screen.
                  </p>
                </div>
              </div>
              <div className="col-lg-6 col-sm-12">
                <div className="sk_img">
                  <img
                    src="/assets/eushield/hero/padlock-touch.png"
                    className="img-fluid eushield-photo-rounded"
                    alt="Touch-activated digital privacy shield"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="pricing" className="plan_home_area section-padding">
          <div className="container">
            <div className="section-title text-center">
              <span>Pricing</span>
              <h2>Enterprise plans</h2>
            </div>
            <div className="row">
              <div className="col-lg-4 col-sm-12">
                <div className="pricingTable">
                  <div className="pricingTable-header">
                    <h3 className="title">Starter Shield</h3>
                  </div>
                  <ul className="pricing-content">
                    <li>Unpacked dev build</li>
                    <li>IBAN + Email + EUR scrubbers</li>
                    <li>Fail-closed by default</li>
                  </ul>
                  <label>
                    <button type="button" className="btn_one" onClick={triggerDownload}>
                      Download Free
                    </button>
                  </label>
                </div>
              </div>
              <div className="col-lg-4 col-sm-12">
                <div className="pricingTable">
                  <div className="pricingTable-header">
                    <h3 className="title">Business Compliance</h3>
                  </div>
                  <ul className="pricing-content">
                    <li>Per-seat deployment</li>
                    <li>Custom RegEx policies</li>
                    <li>Compliance reporting</li>
                  </ul>
                  <a href="mailto:sales@eushield.eu" className="btn_one">
                    Contact Sales
                  </a>
                </div>
              </div>
              <div className="col-lg-4 col-sm-12">
                <div className="pricingTable">
                  <div className="pricingTable-header">
                    <h3 className="title">Enterprise SOC</h3>
                  </div>
                  <ul className="pricing-content">
                    <li>MDM rollout</li>
                    <li>Signed adapter configs</li>
                    <li>Dedicated support</li>
                  </ul>
                  <a href="mailto:enterprise@eushield.eu" className="btn_one">
                    Talk to Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <CybalFooter />
      </div>
    </Fragment>
  )
}

export default EUShieldHome
