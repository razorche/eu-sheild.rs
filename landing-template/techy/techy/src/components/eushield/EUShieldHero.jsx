import React, { Fragment } from 'react'

const CHROME_STORE_HINT =
  'Load unpacked from the downloaded EUShield folder, or install from Chrome Web Store (coming soon).'

const MockupBar = () => (
  <div className="eushield-mockup-bar">
    <span />
    <span />
    <span />
    <span className="eushield-url">chatgpt.com — EUShield Active</span>
  </div>
)

const EUShieldHero = () => {
  const handleDownload = () => {
    const link = document.createElement('a')
    link.href = `${process.env.PUBLIC_URL || ''}/downloads/eushield-extension.zip`
    link.download = 'eushield-extension.zip'
    document.body.appendChild(link)
    link.click()
    link.remove()
    window.setTimeout(() => {
      window.alert(
        `Extension package downloaded.\n\n1. Unzip the file\n2. Open chrome://extensions\n3. Enable Developer mode\n4. Load unpacked ? select the "extension" folder\n\n${CHROME_STORE_HINT}`
      )
    }, 400)
  }

  return (
    <Fragment>
      <div className="theme-banner-three eushield-hero pt-100 pb-120 pt-lg-120 pb-lg-100 pt-md-80 pb-md-60">
        <img
          className="banner-shape shape-one d-none d-sm-inline-block"
          src="assets/img/shape/star-3b.svg"
          alt=""
        />
        <img
          className="banner-shape shape-five"
          src="assets/img/shape/star-7c.svg"
          alt=""
        />
        <div className="container">
          <div className="row gx-4 gx-xxl-5 align-items-center">
            <div className="col-xl-6 col-lg-6">
              <div className="theme__content__two text-lg-start text-center mb-45">
                <h4 className="hero-sub-title mb-25">
                  B2B Local Privacy Shield · AnonymX
                </h4>
                <h1 className="main-title-two">
                  Stop AI Data Leaks
                  <br />
                  Before They Leave the{' '}
                  <span className="text-theme">EU</span>
                </h1>
                <p className="hero-lead mb-35">
                  100% GDPR &amp; EU AI Act aligned usage of{' '}
                  <strong>ChatGPT</strong> &amp; <strong>Claude</strong>.
                  Local tokenization, fail-closed sends, zero plain-text PII to
                  US inference APIs.
                </p>
                <div className="d-flex flex-wrap gap-3 justify-content-lg-start justify-content-center">
                  <button
                    type="button"
                    className="theme_btn eushield-cta-primary"
                    onClick={handleDownload}
                  >
                    Download Extension
                  </button>
                  <a className="theme_btn theme_btn_border" href="#eushield-demo">
                    Watch Demo
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6" id="eushield-demo">
              <div className="eushield-video-mockup mb-45">
                <div className="eushield-mockup-frame">
                  <MockupBar />
                  <video
                    className="eushield-demo-video"
                    src="assets/eushield/media/eushield-demo.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                    poster="assets/eushield/hero/shield-circuit.png"
                  />
                </div>
                <img
                  className="eushield-hero-float"
                  src="assets/eushield/hero/padlock-touch.png"
                  alt=""
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default EUShieldHero
