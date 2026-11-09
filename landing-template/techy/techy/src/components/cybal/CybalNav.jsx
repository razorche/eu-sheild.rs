import React from 'react'
import { Link } from 'react-router-dom'

const CybalNav = ({ onDownload }) => (
  <div id="navigation" className="navbar-light bg-faded site-navigation">
    <div className="container-fluid">
      <div className="row">
        <div className="col-20 align-self-center">
          <div className="site-logo">
            <Link to="/" className="eushield-brand" title="EUShield home">
              <img src="/assets/eushield/logo.svg" alt="EUShield" className="eushield-logo" />
            </Link>
          </div>
        </div>
        <div className="col-60 d-flex justify-content-center">
          <nav id="main-menu">
            <ul>
              <li><a href="#how">How It Works</a></li>
              <li><a href="#scrubbers">PII Scrubbers</a></li>
              <li><a href="#sandbox">Interactive Sandbox</a></li>
              <li><a href="#pricing">Enterprise Pricing</a></li>
              <li><Link to="/privacy-compliance">GDPR &amp; AI Act</Link></li>
            </ul>
          </nav>
        </div>
        <div className="col-20 d-none d-xl-block text-end align-self-center">
          <button type="button" className="btn_one" onClick={onDownload}>
            Download Extension
          </button>
        </div>
      </div>
    </div>
  </div>
)

export default CybalNav
