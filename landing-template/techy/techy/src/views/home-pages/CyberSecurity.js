import React, { Fragment } from 'react'
import { Helmet } from 'react-helmet'
import Tilt from 'react-parallax-tilt'

//components
import ThemeMenuThree from '../../components/header/ThemeMenuThree'
import ThemeBannerThree from '../../components/theme-banner/ThemeBannerThree'
import BrandThree from '../../components/brand/BrandThree'
import BlockStyleSeven from '../../components/block/BlockStyleSeven'
import FeatureFive from '../../components/feature/FeatureFive'
import BlockStyleTen from '../../components/block/BlockStyleTen'
import BlockStyleEight from '../../components/block/BlockStyleEight'
import PricingTab from '../../components/price/PricingTab'
import FeedbackThree from '../../components/testimonial/FeedbackThree'
import NewsletterTwo from '../../components/call-to-action/NewsletterTwo'
import FooterThree from '../../components/footer/FooterThree'

const CyberSecurity = () => {
  return (
    <Fragment>
      <div className="main-page-wrapper">
        {/* Helmet start */}
        <Helmet>
          <title>Cyber Security || Techy – IT Solution & Web Security React Template</title>
        </Helmet>
        {/* Helmet end */}

        {/* header-area start */}
        <ThemeMenuThree />
        {/* header-area end */}

        {/*theme-banner-two start*/}
        <ThemeBannerThree />
        {/*theme-banner-two end*/}

        {/*brand-area start*/}
        <section className="brand-area position-relative pt-75 pb-70 pt-lg-50 pb-lg-20">
          <div className="blur-shape" />
          <div className="container">
            <div className="row">
              <div className="col-12 text-center mb-55">
                <h2 className="sect-title">Over <span className="text-theme">100+</span> Trusted Company</h2>
              </div>
            </div>
            {/* BrandThree */}
            <BrandThree />
            {/* BrandThree */}
            <div className="row justify-content-center gx-4 gx-xxl-5 pt-40">
              <div className="col d-none d-md-inline-block" />
              <div className="col">
                <div className="brand-logo mb-40">
                  <a href="#"><img src="assets/img/brand/brand-1.svg" alt="brand" /></a>
                </div>
              </div>
              <div className="col">
                <div className="brand-logo mb-40">
                  <a href="#"><img src="assets/img/brand/brand-2.svg" alt="brand" /></a>
                </div>
              </div>
              <div className="col d-none d-md-inline-block">
                <div className="brand-logo mb-40">
                  <a href="#"><img src="assets/img/brand/brand-3.svg" alt="brand" /></a>
                </div>
              </div>
              <div className="col d-none d-md-inline-block" />
            </div>
          </div>
        </section>
        {/*brand-area end*/}

        {/*about-techy start*/}
        <section className="about-techy bg-shape-3c pt-40 pb-105 pt-lg-60 pb-lg-10">
          <img
            className="about-shape-3c shape-1b d-none d-xl-inline-block"
            src="assets/img/shape/star-3b.svg"
            alt="shape" />
          <img
            className="about-shape-3c shape-2b d-none d-md-inline-block"
            src="assets/img/shape/star-4b.svg"
            alt="shape" />
          <img
            className="about-shape-3c shape-3b d-none d-lg-inline-block"
            src="assets/img/shape/star-4b.svg"
            alt="shape" />
          <img
            className="about-shape-3c shape-4b"
            src="assets/img/shape/star-7c.svg"
            alt="shape" />
          <img
            className="about-shape-3c shape-5b d-none d-xl-inline-block"
            src="assets/img/shape/star-4b.svg "
            alt="shape" />
          <div className="container">
            <div className="row gx-4 gx-xxl-5 align-items-center">
              <div className="col-lg-6" data-aos="fade-right" data-aos-delay={100}>
                <div
                  data-tilt
                  className="about-img-wrapper-three text-lg-end position-relative mb-45">
                  <Tilt>
                    <img className="main-img" src="assets/img/about/ilus-1c.svg" alt="ilustrate" />
                  </Tilt>
                </div>
              </div>
              <div className="col-lg-6" data-aos="fade-left" data-aos-delay={100}>
                <BlockStyleSeven />
              </div>
            </div>
          </div>
        </section>
        {/*about-techy end*/}

        {/*our-services start*/}
        <section
          className="gradient-bg our-services service-bg-three pt-95 pb-55 pt-lg-55 pb-lg-15">
          <img
            className="service-shape-3c"
            src="assets/img/shape/line-round-6b.svg"
            alt="shape" />
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
            {/* FeatureFive */}
            <FeatureFive />
            {/* FeatureFive */}
          </div>
        </section>
        {/*our-services end*/}

        {/*teachy-work start*/}
        <section className="teachy-work work-bg-three pt-150 pb-30 pt-lg-50 pb-lg-20">
          <img
            className="work-shape-c shape-one"
            src="assets/img/shape/star-7c.svg"
            alt="shape" />
          <img
            className="work-shape-c shape-two"
            src="assets/img/shape/star-7c.svg"
            alt="shape" />
          <img
            className="work-shape-c shape-three"
            src="assets/img/shape/star-8c.svg"
            alt="shape" />
          <img
            className="work-shape-c shape-four"
            src="assets/img/shape/star-8c.svg"
            alt="shape" />
          <div className="container">
            <div className="row gx-4 gx-xxl-5 align-items-center pb-30">
              <div className="col-lg-6">
                <div data-tilt className="feature-img-wrapper mb-45" data-aos="fade-up">
                  <Tilt>
                    <img src="assets/img/ilustration/ilus-01.svg" alt="ilustration" />
                  </Tilt>
                </div>
              </div>
              <div className="col-lg-6 order-lg-first">
                {/* BlockStyleTen */}
                <BlockStyleTen />
                {/* BlockStyleTen */}
              </div>
            </div>
            <div className="row gx-4 gx-xxl-5 align-items-center pt-75 pt-lg-55">
              <div className="col-lg-6">
                <div className="feature-img-wrapper mb-45" data-aos="fade-up">
                  <Tilt>
                    <img src="assets/img/ilustration/ilus-02.svg" alt="ilustration" />
                  </Tilt>
                </div>
              </div>
              <div className="col-lg-6">
                {/* BlockStyleEight */}
                <BlockStyleEight />
                {/* BlockStyleEight */}
              </div>
            </div>
          </div>
        </section>
        {/*teachy-work end*/}

        {/*teachy-security start*/}
        <section className="techy-security pt-75 pb-150 pt-lg-55 pb-lg-60">
          <div className="container">
            <div className="row gx-4 gx-xxl-5 justify-content-center">
              <div className="col-lg-6 col-md-8">
                <div className="section-title text-center mb-55">
                  <h6 className="sub-title-two mb-20">Wallet Secure</h6>
                  <h3 className="sect-title" data-aos="fade-up">Protect Your Wallet With Our Techy Security
                  </h3>
                </div>
              </div>
            </div>
            <div className="row gx-4 gx-xxl-5">
              <div className="col-lg-12">
                <div className="ilustration-wrapper" data-aos="zoom-in">
                  <img className="w-100" src="assets/img/ilustration/ilus-03.svg" alt="ilustration" />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*teachy-security end*/}

        {/*teachy-price start*/}
        <section className="techy-price">
          <div className="bg-wrapper-one">
            <div className="container">
              <div className="row gx-4 gx-xxl-5 align-items-center justify-content-center">
                <div className="col-xl-12">
                  <div className="section-title text-center mb-40">
                    <h6 className="sub-title-two mb-20">Wallet Secure</h6>
                    <h3 className="sect-title" data-aos="fade-up">Our Simple &amp; Easy Pricing</h3>
                  </div>
                </div>
              </div>
              {/* PricingTab */}
              <PricingTab />
              {/* PricingTab */}
            </div>
          </div>
        </section>
        {/*teachy-price end*/}

        {/*client-feedback start*/}
        <section className="client-feedback feedback-three pt-145 pb-115 pt-lg-60 pb-lg-60">
          <div className="container">
            <div className="row gx-4 gx-xxl-5">
              <div className="col-lg-12">
                <div className="section-title text-center mb-55">
                  <h6 className="sub-title-two mb-20" data-aos="fade-up">Testimonials</h6>
                  <h2 className="sect-title" data-aos="fade-up" data-aos-delay={100}>What Our Client Says</h2>
                </div>
              </div>
            </div>
            {/* FeedbackThree */}
            <FeedbackThree />
            {/* FeedbackThree */}
          </div>
        </section>
        {/*client-feedback end*/}

        {/*call-to-action start*/}
        <NewsletterTwo />
        {/*call-to-action end*/}

        {/*footer-area start*/}
        <FooterThree />
        {/*footer-area end*/}



      </div>
    </Fragment>
  )
}

export default CyberSecurity