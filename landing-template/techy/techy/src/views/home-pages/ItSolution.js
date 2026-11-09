import React, { Fragment } from 'react'
import { Helmet } from 'react-helmet'




//components
import ThemeMenuOne from '../../components/header/ThemeMenuOne'
import ThemeBannerOne from '../../components/theme-banner/ThemeBannerOne'
import MarqueSlider from '../../components/marque/MarqueSlider'
import BrandOne from '../../components/brand/BrandOne'
import BlockStyleOne from '../../components/block/BlockStyleOne'
import FeatureOne from '../../components/feature/FeatureOne'
import FeatureSliderOne from '../../components/feature-slider/FeatureSliderOne'
import FeatureTwo from '../../components/feature/FeatureTwo'
import CounterOne from '../../components/counter/CounterOne'
import FeedbackOne from '../../components/testimonial/FeedbackOne'
import BlogOne from '../../components/blog/BlogOne'
import NewsletterOne from '../../components/call-to-action/NewsletterOne'
import FooterOne from '../../components/footer/FooterOne'






const ItSolution = () => {
    return (
        <Fragment>

            <div className="main-page-wrapper">
                {/* Helmet start */}
                <Helmet>
                    <title>IT Solution || Techy – IT Solution & Web Security React Template</title>
                </Helmet>
                {/* Helmet end */}

                {/*ThemeMenuOne start*/}
                <ThemeMenuOne />
                {/*ThemeMenuOne end*/}

                {/*ThemeBannerOne start*/}
                <ThemeBannerOne />
                {/*ThemeBannerOne end*/}

                {/*marque start*/}
                <MarqueSlider />
                {/*marque end*/}

                {/*brand-area start*/}
                <section className="brand-area pt-100 pb-125 pt-lg-60 pb-lg-90">
                    <div className="container">
                        <div className="row gx-4 gx-xxl-5">
                            {/* BrandOne start */}
                            <BrandOne />
                            {/* BrandOne end */}
                        </div>
                    </div>
                </section>
                {/*brand-area end*/}

                {/*about-techy start*/}
                <section className="about-techy position-relative pt-115 pb-15">
                    <div className="container">
                        <div className="row gx-4 gx-xxl-5 align-items-center">
                            <div className="col-lg-7" data-aos="fade-right" data-aos-delay={100}>
                                <div className="position-relative">
                                    <div className="logo-animated-block">
                                        <img className="rotate-img" src="assets/img/shape/mask-text.svg" alt="Text Img" />
                                        <div className="mark-icon">
                                            <img src="assets/img/shape/star-11a.svg" alt="Star Icon" />
                                        </div>
                                    </div>
                                    <div className="about-img-wrapper position-relative mb-45">
                                        <img className="main-img" src="assets/img/about/about-1.png" alt="img" />
                                        <img className="shape-one" src="assets/img/shape/line-round-2a.svg" alt="shape" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-5" data-aos="fade-left" data-aos-delay={100}>
                                {/* BlockStyleOne start */}
                                <BlockStyleOne />
                                {/* BlockStyleOne end */}
                            </div>
                        </div>
                    </div>
                </section>
                {/*about-techy end*/}

                {/*our-services start*/}
                <section className="our-services pt-80 pb-105 pt-lg-45 pb-lg-15">
                    <div className="container">
                        <div className="row gx-4 gx-xxl-5 justify-content-lg-start justify-content-center">
                            <div className="col-xl-5 col-lg-6 col-md-8">
                                <div className="section-title text-center text-lg-start mb-55">
                                    <h3 className="sect-title mb-20" data-aos="fade-upt">Our Services</h3>
                                    <p data-aos="fade-right" data-aos-delay={100}>Dramatically supply transparent
                                        backward deliverables before caward comp internal or "organic" sources.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row gx-4 gx-xxl-5">
                            {/* FeatureOne start */}
                            <FeatureOne />
                            {/* FeatureOne end */}
                        </div>
                    </div>
                </section>
                {/*our-services end*/}

                {/*feature-work start*/}
                <section className="feature-work-area pt-90 pb-95 pt-lg-50 pb-lg-60">
                    <div className="container">
                        <div className="row gx-4 gx-xxl-5 align-items-center">
                            <div className="col-xl-5 col-lg-6 col-md-8">
                                <div className="section-title text-center text-md-start mb-55">
                                    <h3 className="sect-title mb-25" data-aos="fade-up">Featured Works</h3>
                                    <p data-aos="fade-up" data-aos-delay={100}>Dramatically supply transparent
                                        backward deliverables before caward comp internal or "organic" sources.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container feature-custom-container">
                        <div className="feature-slider-one slick-nav">
                            {/* FeatureSliderOne start  */}
                            <FeatureSliderOne />
                            {/* FeatureSliderOne end */}
                        </div>
                    </div>
                </section>
                {/*feature-work end*/}

                {/*feature-work start*/}
                <section className="feature-two pt-135 pb-30 pt-lg-60 pb-lg-15">
                    <div className="container">
                        <div className="row gx-4 gx-xxl-5 justify-content-lg-start justify-content-center">
                            <div className="col-xl-5 col-lg-6 col-md-8">
                                <div className="section-title text-lg-start text-center mb-60">
                                    <h3 className="sect-title mb-25">How It Works</h3>
                                    <p>Dramatically supply transparent
                                        backward deliverables before caward comp internal or "organic" sources.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row gx-4 gx-xxl-5">
                            {/* FeatureTwo start */}
                            <FeatureTwo />
                            {/* FeatureTwo end */}
                        </div>
                    </div>
                    <img className="shape-one" src="assets/img/shape/line-round-1.svg" alt="" />
                </section>
                {/*feature-work end*/}

                {/*counter-one end*/}
                <CounterOne />
                {/*counter-one start*/}

                {/*client-feedback start*/}
                <section className="client-feedback pt-140 pb-150 pt-lg-55 pb-lg-60">
                    <div className="container">
                        <div className="row gx-4 gx-xxl-5 justify-content-center" data-aos="fade-up">
                            <div className="col-xl-5 col-lg-6 col-md-8">
                                <div className="section-title text-center mb-55">
                                    <h3 className="sect-title mb-25">Testimonials</h3>
                                    <p>Dramatically supply transparent backward deliverables before caward comp
                                        internal or "organic" sources.</p>
                                </div>
                            </div>
                        </div>
                        {/* FeedbackOne start */}
                        <FeedbackOne />
                        {/* FeedbackOne start */}
                    </div>
                </section>
                {/*client-feedback end*/}

                {/*blog-area start*/}
                <section className="blog-area slick-nav blog-slick pt-100 pb-100 pt-lg-55 pb-lg-60">
                    <div className="container">
                        <div className="row gx-4 gx-xxl-5 align-items-center">
                            <div className="col-xl-5 col-lg-6 col-md-8" data-aos="fade-up">
                                <div className="section-title text-center text-md-start mb-60">
                                    <h3 className="sect-title mb-25">Latest Article</h3>
                                    <p>Dramatically supply transparent backward deliverables before caward comp
                                        internal or "organic" sources.</p>
                                </div>
                            </div>
                        </div>
                        {/*blog-style-one end*/}
                        <BlogOne />
                        {/*blog-style-one end*/}

                    </div>
                </section>
                {/*blog-area end*/}

                {/*techy-newsletter start*/}
                <NewsletterOne />

                {/*techy-newsletter end*/}

                {/*footer-area start*/}
                <FooterOne />
                {/*footer-area end*/}

            </div>
        </Fragment>
    )
}

export default ItSolution