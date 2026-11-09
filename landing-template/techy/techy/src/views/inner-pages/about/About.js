import React, { Fragment, useState } from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'

import ThemeMenuThree from '../../../components/header/ThemeMenuThree'
import PageTitle from '../../../components/page-title/PageTitle'
import FeatureThree from '../../../components/feature/FeatureThree'
import BlockStyleOneA from '../../../components/block/BlockStyleOneA'
import CounterTwoA from '../../../components/counter/CounterTwoA'
import TeamTwo from '../../../components/team/TeamTwo'
import PricingTab from '../../../components/price/PricingTab'
import NewsletterOne from '../../../components/call-to-action/NewsletterOne'
import FooterThree from '../../../components/footer/FooterThree'
import ModalVideos from '../../../components/modal-video/ModalVideos'


const About = () => {
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
                    <title>About Us || Techy – IT Solution & Web Security React Template</title>
                </Helmet>
                {/* Helmet end */}

                {/* ThemeMenuThree */}
                <ThemeMenuThree />
                {/* ThemeMenuThree */}

                {/* PageTitle */}
                <PageTitle title="About Us" />
                {/* PageTitle */}


                {/*techy-feature start*/}
                <section className="techy-feature pt-150 pt-lg-100 pb-30 pb-lg-15">
                    <div className="container">
                        <FeatureThree />
                    </div>
                </section>
                {/*techy-feature end*/}

                {/*about-techy start*/}
                <section className="about-techy about-techy-4d pt-140 pb-75 pt-lg-60 pb-lg-15">
                    <img className="about-shape-4d shape-1b d-none d-xl-inline-block" src="assets/img/shape/star-3b.svg" alt="shape" />
                    <img className="about-shape-4d shape-2b d-none d-lg-inline-block" src="assets/img/shape/star-4b.svg" alt="shape" />
                    <img className="about-shape-4d shape-3b d-none d-md-inline-block" src="assets/img/shape/star-4b.svg" alt="shape" />
                    <img className="about-shape-4d shape-4b d-none d-md-inline-block" src="assets/img/shape/star-7c.svg" alt="shape" />
                    <img className="about-shape-4d shape-5b d-none d-xl-inline-block" src="assets/img/shape/star-4b.svg" alt="shape" />
                    <div className="container">
                        <div className="row gx-4 gx-xxl-5 align-items-center">
                            <div className="col-lg-7" data-aos="fade-right" data-aos-delay={100}>
                                <div className="about-img-wrapper-four position-relative mb-45">
                                    <img className="main-img" src="assets/img/about/about-3d.jpg" alt="img" />
                                    <img className="main-img-two d-none d-xl-inline-block" src="assets/img/about/about-4d.jpg" alt="img" />
                                    <img className="shape-one" src="assets/img/shape/line-round-2a.svg" alt="shape" />
                                </div>
                            </div>
                            <div className="col-lg-5" data-aos="fade-left" data-aos-delay={100}>
                                <BlockStyleOneA />
                            </div>
                        </div>
                    </div>
                </section>
                {/*about-techy end*/}


                {/*counter-area end*/}
                <section className="counter-area pt-70 pb-100 pt-lg-25 pb-lg-15">
                    <div className="container">
                        <CounterTwoA />
                    </div>
                </section>
                {/*counter-area start*/}


                {/*techy-team start*/}
                <section className="gradient-bg techy-team team-sec-two mt-0 pt-95  pb-90 pt-lg-55 pb-lg-60">
                    <img className="team-shape shape-1b" src="assets/img/shape/star-3b.svg" alt="shape" />
                    <img className="team-shape shape-2b" src="assets/img/shape/star-4b.svg" alt="shape" />
                    <img className="team-shape shape-3b" src="assets/img/shape/star-6b.svg" alt="shape" />
                    <img className="team-shape shape-4b" src="assets/img/shape/star-5b.svg" alt="shape" />
                    <img className="team-shape shape-5b" src="assets/img/shape/star-5b.svg" alt="shape" />
                    <img className="team-shape shape-6b" src="assets/img/shape/line-round-6b.svg" alt="shape" />
                    <div className="container">
                        <div className="row gx-4 gx-xxl-5">
                            <div className="col-lg-12">
                                <div className="section-title-two text-center mb-55">
                                    <h6 className="sub-title mb-20">Our Team</h6>
                                    <h2 className="sect-title">Expert Team Member</h2>
                                </div>
                            </div>
                        </div>
                        <TeamTwo />
                        <div className="row gx-4 gx-xxl-5">
                            <div className="col-lg-12 text-center pt-15" data-aos="fade-up" data-aos-delay={200}>
                                <Link className="theme_btn" to="/team">See All Member</Link>
                            </div>
                        </div>
                    </div>
                </section>
                {/*techy-team end*/}

                {/*techy-video start*/}
                <section className="techy-video pt-230 pb-230 pt-lg-150 pb-lg-150">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-12">
                                <div className="video-wrapper-two text-center">
                                    <a className="popup-video mb-30" onClick={OpenModal} ><i className="bi bi-play-fill" /></a>
                                    <h4>Watch Videos</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/*techy-video end*/}

                {/*teachy-price start*/}
                <section className="techy-price price-bg pt-150 pb-50 pt-lg-60">
                    <div className="container">
                        <div className="row gx-4 gx-xxl-5">
                            <div className="col-lg-12">
                                <div className="section-title-two text-center mb-30 pb-1">
                                    <h6 className="sub-title mb-20">Pricing List</h6>
                                    <h2 className="sect-title">Our Simple & Easy Pricing</h2>
                                </div>
                            </div>
                        </div>
                        <PricingTab />
                    </div>
                </section>
                {/*teachy-price end*/}

                {/*techy-newsletter start*/}
                <NewsletterOne />
                {/*techy-newsletter end*/}

                {/*FooterThree start*/}
                <FooterThree />
                {/*FooterThree end*/}

            </div>

        </Fragment>
    )
}

export default About