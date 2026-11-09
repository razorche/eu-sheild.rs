import React, { Fragment } from 'react'
import { Helmet } from 'react-helmet'






//componets
import ThemeMenuThree from '../../../components/header/ThemeMenuThree'
import PageTitle from '../../../components/page-title/PageTitle'
import NewsletterTwo from '../../../components/call-to-action/NewsletterTwo'
import FooterThree from '../../../components/footer/FooterThree'
import ContactForm from '../../../components/form/ContactForm'
import SocialFive from '../../../components/social/SocialFive'





const Contact = () => {

    return (
        <Fragment>
            <div className="main-page-wrapper">
                {/* Helmet start */}
                <Helmet>
                    <title>Contact || Techy – IT Solution & Web Security React Template</title>
                </Helmet>
                {/* Helmet end */}

                {/* ThemeMenuThree */}
                <ThemeMenuThree />
                {/* ThemeMenuThree */}

                {/* PageTitle */}
                <PageTitle title="Contact" />
                {/* PageTitle */}

                {/*contact-section start*/}
                <div className="contact-section pt-145 pb-100 pt-lg-60 pb-lg-15">
                    <div className="container">
                        <div className="row gx-4 gx-xxl-5">
                            <div className="col-lg-5">
                                <div className="contact-info-wrapper me-xxl-5 pe-xxl-5 mb-45">
                                    <h2 className="sect-title mb-5">Let’s Get Connect With Us</h2>
                                    <div className="single-info-box mb-50">
                                        <div className="icon">
                                            <i className="bi bi-telephone" />
                                        </div>
                                        <span className="mb-10">(704) 555-0127</span>
                                        <span>(629) 555-0129</span>
                                    </div>
                                    <div className="single-info-box mb-50">
                                        <div className="icon">
                                            <i className="bi bi-geo-alt" />
                                        </div>
                                        <span className="mb-10">4140 Parker Rd. Allentown,</span>
                                        <span>New Mexico 31134</span>
                                    </div>
                                    <div className="single-info-box mb-50">
                                        <div className="icon">
                                            <i className="bi bi-envelope" />
                                        </div>
                                        <span className="mb-10">jackson.graham@example.com</span>
                                        <span>michael.mitc@example.com</span>
                                    </div>
                                    <div className="single-info-box mb-40">
                                        <div className="icon">
                                            <i className="bi bi-briefcase" />
                                        </div>
                                        <span className="mb-10">Starbucks</span>
                                        <span>Louis Vuitton</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-7">
                                <div className="contact-content-wrapper mb-45">
                                    <div className="row gx-4 gx-xxl-5 px-0 align-items-center mb-25">
                                        <div className="col-xxl-8 col-md-7">
                                            <div className="text-center text-md-start">
                                                <p className="text-white mb-40">Holisticly coordinate user-centric resources
                                                    through
                                                    client centric content.
                                                    Completely embrace intermandated mode for pandemic supply chains.</p>
                                            </div>
                                        </div>
                                        <div className="col-xxl-4 col-md-5">
                                            {/* SocialFive start */}
                                            <SocialFive />
                                            {/* SocialFive end */}
                                        </div>
                                    </div>
                                    <div className="contact-map pb-40 mb-xxl-4">
                                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14586.166746112083!2d90.38689255!3d23.941278099999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1656070170544!5m2!1sen!2sbd" />
                                    </div>
                                    <div className="contact-form-two">
                                        <h3 className="post-title mb-50">Send Us Message</h3>
                                        {/* ContactForm start */}
                                        <ContactForm />
                                        {/* ContactForm end */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*contact-section end*/}

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

export default Contact