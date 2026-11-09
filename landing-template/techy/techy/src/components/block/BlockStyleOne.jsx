import React, {Fragment} from 'react'
import { Link } from 'react-router-dom'

const BlockStyleOne = () => {
    return (
        <Fragment>
            <div className="block-style-one pt-10 mb-45">
                <h2 className="mb-15">About Our Techy Innovative IT Agency & Solutions</h2>
                <p>Dramatically supply transparent deliverables before caward comp internal or
                    "organic" sources. Comp transparent and leverage backward other.</p>
                <ul className="block-box list-none">
                    <li>
                        <a href="contact.html">
                            <span className="img-bg"><img src="assets/img/icon/icon-1a.svg" alt="icon"/></span>
                            <span>Money Back Guarantee</span>
                        </a>
                    </li>
                    <li>
                        <Link to="contact">
                            <span className="img-bg"><img src="assets/img/icon/icon-2a.svg" alt="icon"/></span>
                            <span>24/7 Online Support</span>
                        </Link>
                    </li>
                </ul>
                <Link className="theme_btn mt-60" to="/about">More Details</Link>
            </div>
        </Fragment>
    )
}

export default BlockStyleOne