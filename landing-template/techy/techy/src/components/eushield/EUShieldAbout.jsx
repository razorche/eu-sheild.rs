import React from 'react'

const EUShieldAbout = () => {
  return (
    <div className="block-style-seven">
      <h5 className="sub-title mb-20">How EUShield works</h5>
      <h2 className="sect-title mb-30">
        Invisible shield. <span className="text-theme">Visible compliance.</span>
      </h2>
      <p className="mb-25">
        When employees press Send on ChatGPT or Claude, EUShield intercepts the
        outbound JSON in the browser MAIN world, tokenizes IBANs and emails (MOD-97
        validated), and stores the vault in isolated extension memory — never on
        our servers.
      </p>
      <ul className="eushield-check-list">
        <li>Fail-closed on unknown AI protocol changes</li>
        <li>Text-only protection in v1 — multimodal blocked with clear UX</li>
        <li>Daily &quot;leaks blocked&quot; counter for security leadership</li>
      </ul>
    </div>
  )
}

export default EUShieldAbout
