import React, {Fragment} from 'react'
import { Link } from 'react-router-dom'

const BlockStyleThree = () => {
    return (
        <Fragment>
            <div className="block-style-three mb-45">
                <h6 className="sub-title mb-20">About Us</h6>
                <h2 className="sect-title mb-15">We Do Creative Design , Develop Best Softwares</h2>
                <p>Continually strategize standards compliant ideas rather than performance
                    based alignments. Globally leverage existing alternative solutions through
                    virtual users.
                </p>
                <Link className="theme_btn mt-55" to="/about">More Details</Link>
            </div>
        </Fragment>
    )
}

export default BlockStyleThree