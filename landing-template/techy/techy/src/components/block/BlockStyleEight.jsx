import React, {Fragment} from 'react'
import { Link } from 'react-router-dom'

const BlockStyleEight = () => {
    return (
        <Fragment>
            <div className="block-style-eight mb-45 ps-xxl-5" data-aos="fade-up">
                <h6 className="sub-title-two mb-20">Fingerprint System</h6>
                <h3 className="sect-title mb-25">We do Website & Apps Security System</h3>
                <ul className="block-list list-none">
                    <li>Continually strategize standards compliant ideas rather than.</li>
                    <li>Globally leverage existing alternative solutions through.</li>
                    <li>Mance based alignments. Globally leverage existing altern.</li>
                </ul>
                <Link className="theme_btn mt-35" to="/project-details">More Details</Link>
            </div>
        </Fragment>
    )
}

export default BlockStyleEight