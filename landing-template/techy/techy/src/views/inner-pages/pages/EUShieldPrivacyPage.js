import React, { Fragment } from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import CybalNav from '../../../components/cybal/CybalNav'
import CybalFooter from '../../../components/cybal/CybalFooter'
import EUShieldPrivacy from '../../../components/eushield/EUShieldPrivacy'
import { useDownloadCounter } from '../../../hooks/useDownloadCounter'

const EUShieldPrivacyPage = () => {
  const { triggerDownload } = useDownloadCounter()

  return (
    <Fragment>
      <div className="eushield-cybal-site eushield-privacy-cybal">
        <Helmet>
          <title>Privacy &amp; Compliance || EUShield</title>
        </Helmet>
        <CybalNav onDownload={triggerDownload} />

        <section
          className="section-padding eushield-page-hero"
          style={{
            backgroundImage: 'url(/assets/eushield/hero/shield-circuit.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            paddingTop: 160,
            paddingBottom: 80,
          }}
        >
          <div className="container text-center">
            <h1 style={{ color: '#fff', fontSize: 42 }}>Privacy &amp; Compliance</h1>
            <p style={{ color: 'rgba(255,255,255,0.8)' }}>
              <Link to="/" style={{ color: '#18fef5' }}>
                Home
              </Link>{' '}
              / GDPR &amp; EU AI Act
            </p>
          </div>
        </section>

        <section className="section-padding">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <EUShieldPrivacy />
                <div className="text-center mt-4">
                  <Link to="/" className="btn_one">
                    Back to Home
                  </Link>
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

export default EUShieldPrivacyPage
