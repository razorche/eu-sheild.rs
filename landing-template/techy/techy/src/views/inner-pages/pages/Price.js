import React, { Fragment } from 'react'
import { Helmet } from 'react-helmet'



//componets
import ThemeMenuThree from '../../../components/header/ThemeMenuThree'
import PageTitle from '../../../components/page-title/PageTitle'
import PricingTab from '../../../components/price/PricingTab'
import NewsletterTwo from '../../../components/call-to-action/NewsletterTwo'
import FooterThree from '../../../components/footer/FooterThree'


const Price = () => {
    return (
        <Fragment>
            <div className="main-page-wrapper">
                {/* Helmet start */}
                <Helmet>
                    <title>Price || Techy – IT Solution & Web Security React Template</title>
                </Helmet>
                {/* Helmet end */}

                {/* ThemeMenuThree */}
                <ThemeMenuThree />
                {/* ThemeMenuThree */}

                {/* PageTitle */}
                <PageTitle title="Pricing" />
                {/* PageTitle */}

                {/*teachy-price start*/}
                <section className="techy-price pt-145 pb-105 pt-lg-100 pb-lg-60">
                    <div className="container">
                        <div className="row gx-4 gx-xxl-5 align-items-center justify-content-center">
                            <div className="col-xl-5 col-lg-6 col-md-8">
                                <div className="section-title text-center mb-35">
                                    <h3 className="sect-title mb-25">Our Simple & Easy Pricing</h3>
                                    <p>Dramatically supply transparent backward
                                        deliverables before caward comp internal or "organic" sources.</p>
                                </div>
                            </div>
                        </div>
                        {/* PricingTab */}
                        <PricingTab />
                        {/* PricingTab */}
                    </div>
                </section>
                {/*teachy-price end*/}


                {/*techy-newsletter start*/}
                <NewsletterTwo />
                {/*techy-newsletter end*/}

                {/*FooterThree start*/}
                <FooterThree />
                {/*FooterThree end*/}

            </div>

        </Fragment>
    )
}

export default Price