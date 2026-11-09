import React, {Fragment} from 'react'
import { Link } from 'react-router-dom'

const BlockStyleTen = () => {
    return (
        <Fragment>
            <div className="block-style-ten">
                <div className="section-title mb-45 pe-xxl-5" data-aos="fade-up">
                    <h6 className="sub-title-two mb-20">Face Recognition System</h6>
                    <h3 className="sect-title mb-25">Protect Your System With Face Recognition</h3>
                    <p className="mb-15">Continually strategize standards compliant ideas rather
                        than perfor mance based alignments. Globally leverage existing alternative
                        solutions through virtual users.</p>
                    <p>Continually strategize standards compliant ideas rather than perfor mance
                        based alignments. Globally leverage existing.</p>
                    <Link className="theme_btn mt-55" to="/project-details">More Details</Link>
                </div>
            </div>
        </Fragment>
    )
}

export default BlockStyleTen