import React, {Fragment} from 'react'
import { Link } from 'react-router-dom'



const BlockStyleSeven = () => {
    return (
        <Fragment>
            <div className="block-style-seven pl-90 mb-45 pl-md-0">
                <h6 className="sub-title-two mb-20">About Us</h6>
                <h2 className="sect-title mb-20">We do Website & Apps Security System</h2>
                <p>Continually strategize standards compliant ideas rather than perfor mance
                    based alignments. Globally leverage existing alternative solutions through
                    virtual users.</p>
                <div className="icon-box">
                    <span><img src="assets/img/icon/icon-28c.svg" alt="icon"/></span>
                    <span><img src="assets/img/icon/icon-29c.svg" alt="icon"/></span>
                    <span><img src="assets/img/icon/icon-30c.svg" alt="icon"/></span>
                    <span><img src="assets/img/icon/icon-31c.svg" alt="icon"/></span>
                    <span><img src="assets/img/icon/icon-32c.svg" alt="icon"/></span>
                </div>
                <Link className="theme_btn mt-55" to="/about">More Details</Link>
            </div>
        </Fragment>
    )
}

export default BlockStyleSeven