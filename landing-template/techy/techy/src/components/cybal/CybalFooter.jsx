import React from 'react'

import { Link } from 'react-router-dom'



const CybalFooter = () => (

  <div

    className="footer section-padding eushield-footer-bg"

    style={{

      backgroundImage: 'url(/assets/eushield/stock/section-bg.jpg)',

      backgroundSize: 'cover',

      backgroundPosition: 'center center',

    }}

  >

    <div className="container">

      <div className="row">

        <div className="col-lg-4 col-sm-6 col-xs-12">

          <div className="single_footer">

            <Link to="/">

              <img src="/assets/eushield/logo.svg" alt="EUShield" className="eushield-logo-footer" />

            </Link>

            <p>

              EUShield (AnonymX) is a fail-closed local browser shield for

              ChatGPT and Claude ù built for EU enterprises that refuse to leak

              client PII to US inference infrastructure.

            </p>

          </div>

        </div>

        <div className="col-lg-4 col-sm-6 col-xs-12">

          <div className="single_footer">

            <h4>Product</h4>

            <ul>

              <li><a href="#how">Architecture</a></li>

              <li><a href="#scrubbers">PII Scrubbers</a></li>

              <li><a href="#sandbox">Live Sandbox</a></li>

              <li><Link to="/privacy-compliance">Privacy &amp; Compliance</Link></li>

            </ul>

          </div>

        </div>

        <div className="col-lg-4 col-sm-6 col-xs-12">

          <div className="single_footer">

            <h4>HQ</h4>

            <p>
              by Bane dev, Belgrade, Serbia.
              <br />
              <a href="mailto:bane.madjija@gmail.com" className="eushield-footer-mail">
                bane.madjija@gmail.com
              </a>
            </p>

          </div>

        </div>

      </div>

      <div className="row fc">

        <div className="col-lg-6 col-sm-6 col-xs-12">

          <div className="footer_copyright">

            <p>&copy; {new Date().getFullYear()} EUShield. All Rights Reserved.</p>

          </div>

        </div>

        <div className="col-lg-6 col-sm-6 col-xs-12">

          <div className="footer_menu">

            <ul>

              <li><Link to="/privacy-compliance">Privacy Policy</Link></li>

              <li><Link to="/legal">Legal</Link></li>

            </ul>

          </div>

        </div>

      </div>

    </div>

  </div>

)



export default CybalFooter

