import React, {Fragment} from 'react'
import { Link } from 'react-router-dom'



const BlockStyleTwo = () => {
    return (
        <Fragment>
            <div className="block-style-two text-center pb-90">
                <img
                    className="news-shape-one d-none d-xl-block"
                    src="assets/img/shape/line-round-3a.svg"
                    alt="shape"/>
                <h3>Have a project in mind? Let’s get to work.</h3>
                <Link to="/contact" className="theme_btn">Contact us</Link>
            </div>
        </Fragment>
    )
}

export default BlockStyleTwo