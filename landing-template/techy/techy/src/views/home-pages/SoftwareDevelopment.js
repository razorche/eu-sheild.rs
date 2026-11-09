import React, { Fragment, useState } from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'





//components
import ThemeMenuTwo from '../../components/header/ThemeMenuTwo'
import ThemeBannerTwo from '../../components/theme-banner/ThemeBannerTwo'
import BrandTwo from '../../components/brand/BrandTwo'
import FeatureThree from '../../components/feature/FeatureThree'
import BlockStyleThree from '../../components/block/BlockStyleThree'
import CounterTwo from '../../components/counter/CounterTwo'
import FeatureFour from '../../components/feature/FeatureFour'
import CaseSliderOne from '../../components/case-study/CaseSliderOne'
import VideoSliderOne from '../../components/video/VideoSliderOne'
import BlockStyleFive from '../../components/block/BlockStyleFive'
import TeamOne from '../../components/team/TeamOne'
import BlockStylFive from '../../components/block/BlockStylFive'
import FeedbackTwo from '../../components/testimonial/FeedbackTwo'
import FooterTwo from '../../components/footer/FooterTwo'


//modal video
import ModalVideos from '../../components/modal-video/ModalVideos'






const SoftwareDevelopment = () => {
    const [open, setOpen] = useState(false);
    const OpenModal = () => {
        setOpen(!open)
    }

    return (
        <Fragment>
            <ModalVideos isOpen={open} onClick={OpenModal} />
            <div className="main-page-wrapper">
                {/* Helmet start */}
                <Helmet>
                    <title>Software Development || Techy – IT Solution & Web Security React Template</title>
                </Helmet>
                {/* Helmet end */}

                {/* header-area start */}
                <ThemeMenuTwo />
                {/* header-area end */}



                {/*theme-banner-two start*/}
                <ThemeBannerTwo />
                {/*theme-banner-two end*/}

                {/*brand-area start*/}
                <section className="brand-area brand-bg pt-25 pb-25 mt-1">
                    <div className="container">
                        <div className="row gx-4 gx-xxl-5">
                            <BrandTwo />
                        </div>
                    </div>
                </section>
                {/*brand-area end*/}

                {/*techy-feature start*/}
                <section className="techy-feature pt-150 pb-30 pt-lg-120">
                    <div className="container">
                        <FeatureThree />
                    </div>
                </section>
                {/*techy-feature end*/}

                {/*about-techy start*/}
                <section className="about-techy-two pt-75 pb-105 pt-lg-40 pb-lg-20 pt-md-30 pb-md-15">
                    <img className="about-shape shape-1b" src="assets/img/shape/star-3b.svg" alt="shape" />
                    <img className="about-shape shape-2b" src="assets/img/shape/star-4b.svg" alt="shape" />
                    <img className="about-shape shape-3b d-none d-md-inline-block" src="assets/img/shape/star-2.svg" alt="shape" />
                    <img className="about-shape shape-4b" src="assets/img/shape/star-5b.svg" alt="shape" />
                    <div className="container">
                        <div className="row gx-4 gx-xxl-5 align-items-center">
                            <div className="col-xxl-5 col-xl-4 col-md-6 order-2" data-aos="fade-up" data-aos-delay={100}>
                                <div className="about-img-wrapper-two text-lg-end position-relative mb-45">
                                    <img className="assets/main-img w-100" src="assets/img/about/about-2b.jpg" alt="img" />
                                    <img className="shape-one" src="assets/img/shape/line-round-4a.svg" alt="shape" />
                                </div>
                            </div>
                            <div className="col-xxl-4 col-xl-4 col-md-6  order-1" data-aos="fade-up" data-aos-delay={100}>
                                {/* block-style-three */}
                                <BlockStyleThree />
                                {/* block-style-three */}
                            </div>
                            <div className="col-xxl-3 col-xl-4 order-3" data-aos="fade-left" data-aos-delay={100}>
                                {/* counter-style-two */}
                                <CounterTwo />
                                {/* counter-style-two */}
                            </div>
                        </div>
                    </div>
                </section>
                {/*about-techy end*/}

                {/*our-services start*/}
                <section className="our-services service-bg-two pt-95 pb-50 pt-lg-50 pb-lg-15">
                    <div className="container">
                        <div className="row gx-4 gx-xxl-5 align-items-center justify-content-center">
                            <div className="col-xl-5 col-lg-6 col-md-8">
                                <div className="section-title text-center mb-55">
                                    <h3 className="sect-title mb-25" data-aos="fade-up">Our Services</h3>
                                    <p data-aos="fade-up" data-aos-delay={100}>Dramatically supply transparent
                                        backward deliverables before caward comp internal or "organic" sources.</p>
                                </div>
                            </div>
                        </div>
                        {/*feature-style-four*/}
                        <FeatureFour />
                        {/*feature-style-four*/}
                    </div>
                </section>
                {/*our-services end*/}

                {/*latest-case-work start*/}
                <section className="latest-case-work slick-nav blog-slick pt-145 pb-150 pt-lg-60 pb-lg-120">
                    <img className="case-shape shape-1b d-none d-lg-inline-block" src="assets/img/shape/star-3b.svg" alt="shape" />
                    <img className="case-shape shape-2b d-none d-lg-inline-block" src="assets/img/shape/star-4b.svg" alt="shape" />
                    <img className="case-shape shape-3b d-none d-lg-inline-block" src="assets/img/shape/star-2.svg" alt="shape" />
                    <img className="case-shape shape-4b d-none d-lg-inline-block" src="assets/img/shape/star-5b.svg" alt="shape" />
                    <div className="container">
                        <div className="row gx-4 gx-xxl-5 align-items-center">
                            <div className="col-xl-5 col-lg-6 col-md-8">
                                <div className="section-title mb-55 text-md-start text-center">
                                    <h6 className="sub-title mb-20" data-aos="fade-up">Latest Works</h6>
                                    <h3 className="sect-title mb-25" data-aos="fade-up" data-aos-delay={100}>Check out some
                                        great case studies</h3>
                                </div>
                            </div>
                        </div>
                        {/* CaseSliderOne */}
                        <CaseSliderOne />
                        {/* CaseSliderOne */}
                    </div>
                </section>
                {/*latest-case-work end*/}

                {/*latest-case-video start*/}
                <section className="latest-case-video slick-nav">
                    <div className="container-fluid px-lg-0">
                        <div className="row gx-4 gx-xxl-5 align-items-center">
                            <div className="col-md-6 pb-sm-45">
                                <VideoSliderOne openModal={OpenModal} />
                            </div>
                            <div className="col-xxl-4 col-md-6">
                                <BlockStyleFive />
                            </div>
                        </div>
                    </div>
                </section>
                {/*latest-case-video end*/}

                {/*techy-team start*/}
                <section className="gradient-bg techy-team pt-210 pt-lg-180 pt-sm-60 pb-100 pb-lg-55">
                    <img className="team-shape shape-1b" src="assets/img/shape/star-3b.svg" alt="shape" />
                    <img className="team-shape shape-2b" src="assets/img/shape/star-4b.svg" alt="shape" />
                    <img className="team-shape shape-3b" src="assets/img/shape/star-2.svg" alt="shape" />
                    <img className="team-shape shape-4b" src="assets/img/shape/star-5b.svg" alt="shape" />
                    <img className="team-shape shape-5b" src="assets/img/shape/star-5b.svg" alt="shape" />
                    <img className="team-shape shape-6b" src="assets/img/shape/line-round-6b.svg" alt="shape" />
                    <div className="container">
                        <div className="row gx-4 gx-xxl-5">
                            <div className="col-lg-12">
                                <div className="section-title text-center mb-55">
                                    <h6 className="sub-title mb-20">Our Team</h6>
                                    <h2 className="sect-title">Expert Team Member</h2>
                                </div>
                            </div>
                        </div>
                        {/* TeamOne */}
                        <TeamOne />
                        {/* TeamOne */}
                        <div className="row gx-4 gx-xxl-5">
                            <div className="col-lg-12 text-center pt-15" data-aos="fade-up" data-aos-delay={200}>
                                <Link className="theme_btn" to="/team">See All Member</Link>
                            </div>
                        </div>
                    </div>
                </section>
                {/*techy-team end*/}

                {/*techy-wrok-process start*/}
                <section className="techy-wrok-process pt-140 pb-30 pt-lg-55">
                    <div className="container">
                        <div className="row gx-4 gx-xxl-5">
                            <div className="col-lg-12">
                                <div className="section-title text-center mb-55">
                                    <h6 className="sub-title mb-20">Working Process</h6>
                                    <h2 className="sect-title">How It Works</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row gx-4 gx-xxl-5 align-items-center">
                            <div className="col-xl-7 col-lg-6">
                                <div className="process-img-wrapper mb-45">
                                    <img src="assets/img/work/process-1b.jpg" alt="img" />
                                    <div className="call-box">
                                        <div className="icon">
                                            <img src="assets/img/icon/icon-27b.svg" alt="icon" />
                                        </div>
                                        <h3 className="sect-title-two">Do you have
                                            any question?</h3>
                                        <h4 className="fs-24 text-uppercase text-theme fw-medium">+(480) 555-0103</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-5 col-lg-6">
                                {/* BlockStylFive */}
                                <BlockStylFive />
                                {/* BlockStylFive */}
                            </div>
                        </div>
                    </div>
                </section>
                {/*techy-wrok-process end*/}

                {/*client-feedback start*/}
                <section className="client-feedback feedback-bg pt-70 pb-110 pb-lg-60">
                    <div className="container">
                        <div className="row gx-4 gx-xxl-5">
                            <div className="col-lg-12">
                                <div className="section-title text-center mb-55">
                                    <h6 className="sub-title mb-20">Testimonials</h6>
                                    <h2 className="sect-title">What Our Client Says</h2>
                                </div>
                            </div>
                        </div>
                        {/* FeedbackTwo */}
                        <FeedbackTwo />
                        {/* FeedbackTwo */}
                    </div>
                </section>
                {/*client-feedback end*/}

                {/* FooterTwo */}
                <FooterTwo />
                {/* FooterTwo */}

            </div>
        </Fragment>
    )
}

export default SoftwareDevelopment