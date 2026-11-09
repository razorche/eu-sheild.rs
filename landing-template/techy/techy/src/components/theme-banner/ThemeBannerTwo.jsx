import React, {Fragment} from 'react'
import { Link } from 'react-router-dom'
import CommonCounter from '../counter/CommonCounter'

const ThemeBannerTwo = () => {
    return (
        <Fragment>
            <div
                className="theme-banner-two pt-220 pb-230 pt-lg-120 pt-md-80 pt-xs-60 pb-sm-120">
                <img
                    className="banner-shape shape-one "
                    src="assets/img/shape/star-3b.svg"
                    alt="shape"/>
                <img
                    className="banner-shape shape-two"
                    src="assets/img/shape/star-4b.svg"
                    alt="shape"/>
                <img
                    className="banner-shape shape-three d-none d-lg-inline-block"
                    src="assets/img/shape/star-2.svg"
                    alt="shape"/>
                <div className="container">
                    <div className="row gx-4 gx-xxl-5 align-items-center">
                        <div className="col-xl-6 col-md-7">
                            <div className="theme__content__two text-md-start text-center">
                                <h4 className="hero-sub-title mb-25">Well Known Development Company</h4>
                                <h1 className="main-title-two">
                                    <span>Techy Software</span>
                                    <span>Development</span>
                                    <span>Company</span>
                                </h1>
                                <Link className="theme_btn" to="/contact">Get Our Quote</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hero-img-wrapper">
                    <img className="hero-img img-1" src="assets/img/hero/hero-1b.jpg" alt="img"/>
                    <img className="hero-img img-2" src="assets/img/hero/hero-2b.jpg" alt="img"/>
                    <img className="hero-img arrow-1" src="assets/img/shape/arrow-1b.svg" alt="icon"/>
                    <img className="hero-img arrow-2" src="assets/img/shape/arrow-2b.svg" alt="icon"/>
                    <img className="hero-img arrow-3" src="assets/img/shape/arrow-3b.svg" alt="icon"/>
                    <div className="hero-box">
                        <span className="icon">
                            <img src="assets/img/icon/icon-13b.svg" alt="icon"/>
                        </span>
                        <div className="box">
                            <span className="text-theme">
                                <span className="counter"><CommonCounter value="45" /></span>+</span>
                            Awards Win
                        </div>
                    </div>
                    <div className="hero-box-two">
                        <div className="icon">
                            <img src="assets/img/icon/icon-14b.svg" alt="icon"/>
                        </div>
                        <div className="box">
                            <span className="text-theme">
                                <span className="counter"><CommonCounter value="45" /></span>+</span>
                            Awards Win
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default ThemeBannerTwo