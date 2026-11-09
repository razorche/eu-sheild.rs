import React, { Fragment } from 'react'
import { Helmet } from 'react-helmet'

//components
import ThemeMenuThree from '../../../components/header/ThemeMenuThree'
import PageTitle from '../../../components/page-title/PageTitle'
import FeatureFour from '../../../components/feature/FeatureFour'
import NewsletterTwo from '../../../components/call-to-action/NewsletterTwo'
import FooterThree from '../../../components/footer/FooterThree'


const Services = () => {
    return (
        <Fragment>
            <div className="main-page-wrapper">
                {/* Helmet start */}
                <Helmet>
                    <title>Services || Techy – IT Solution & Web Security React Template</title>
                </Helmet>
                {/* Helmet end */}

                {/* ThemeMenuThree */}
                <ThemeMenuThree />
                {/* ThemeMenuThree */}

                {/* PageTitle */}
                <PageTitle title="Services" />
                {/* PageTitle */}

                {/*our-services start*/}
                <section className="our-services service-bg-two pt-145 pb-100 pt-lg-60 pb-lg-20">
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
                        <FeatureFour />
                    </div>
                </section>
                {/*our-services end*/}


                {/*techy-newsletter start*/}
                <NewsletterTwo />
                {/*techy-newsletter end*/}

                {/* FooterThree start */}
                <FooterThree />
                {/* FooterThree end */}

            </div>

        </Fragment>
    )
}

export default Services