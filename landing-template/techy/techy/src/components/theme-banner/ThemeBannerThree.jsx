import React, {Fragment} from 'react'
import Tilt from 'react-parallax-tilt';
import { Link } from 'react-router-dom';

const ThemeBannerThree = () => {
    return (
        <Fragment>
            <div
                className="theme-banner-three pt-100 pb-155 pt-lg-120 pb-lg-100 pt-md-80 pb-md-40">
                <img
                    className="banner-shape shape-one d-none d-sm-inline-block"
                    src="assets/img/shape/star-3b.svg"
                    alt="shape"/>
                <img
                    className="banner-shape shape-two d-none d-lg-inline-block"
                    src="assets/img/shape/star-4b.svg"
                    alt="shape"/>
                <img
                    className="banner-shape shape-three d-none d-sm-inline-block"
                    src="assets/img/shape/star-2.svg"
                    alt="shape"/>
                <img
                    className="banner-shape shape-four d-none d-md-inline-block "
                    src="assets/img/shape/star-4b.svg"
                    alt="shape"/>
                <img
                    className="banner-shape shape-five"
                    src="assets/img/shape/star-7c.svg"
                    alt="shape"/>
                <img
                    className="banner-shape shape-six d-none d-xl-inline-block"
                    src="assets/img/hero/hero-shape-3a.svg"
                    alt="shape"/>
                <img
                    className="banner-shape shape-seven d-none d-xl-inline-block"
                    src="assets/img/hero/hero-shape-3b.svg"
                    alt="shape"/>
                <div className="container">
                    <div className="row gx-4 gx-xxl-5 align-items-center">
                        <div className="col-xl-6 col-md-6">
                            <div className="theme__content__two text-md-start text-center mb-45">
                                <h4 className="hero-sub-title mb-25">Well Known Development Company</h4>
                                <h1 className="main-title-two">
                                    Secure Web
                                    <br/>
                                    Data With
                                    <span>Techy</span>
                                </h1>
                                <Link className="theme_btn" to="/contact">Get Our Quote</Link>
                            </div>
                        </div>
                        <div className="col-xl-6 col-md-6">
                            <Tilt>
                                <div className="hero-ilustration-wrapper mb-45">
                                    <img src="assets/img/hero/hero-3c.svg" alt="ilus"/>
                                </div>
                            </Tilt>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default ThemeBannerThree