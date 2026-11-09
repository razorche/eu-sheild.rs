import React,{Fragment} from 'react'
import {Link} from 'react-router-dom'

const ThemeBannerOne = () => {
    return (
        <Fragment>
            {/*theme-banner-one start*/}
            <div className="theme-banner-one pt-205 pb-35 pt-lg-120 pt-md-80 pt-xs-60">
                <div className="shadow-text">Techy</div>
                <img className="banner-shape shape-one" src="assets/img/shape/line-1.svg" alt="shape"/>
                <img
                    className="banner-shape shape-two d-none d-lg-inline-block"
                    src="assets/img/shape/star-1.svg"
                    alt="shape"/>
                <img
                    className="banner-shape shape-three d-none d-lg-inline-block"
                    src="assets/img/shape/star-2.svg"
                    alt="shape"/>
                <img
                    className="banner-shape shape-four"
                    src="assets/img/shape/line-round-1.svg"
                    alt="shape"/>
                <div className="container">
                    <div className="row gx-4 gx-xxl-5 align-items-center justify-content-center">
                        <div className="col-11">
                            <div className="theme__content text-center">
                                <h1 className="main-title-one">
                                    <span>We’re a</span>
                                    <span>innovative IT</span>
                                    <span>Solutions</span>
                                </h1>
                                <Link className="theme_btn" to="/contact">Get Started Now</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*theme-banner-one end*/}

        </Fragment>
    )
}

export default ThemeBannerOne