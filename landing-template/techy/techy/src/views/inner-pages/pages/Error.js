import React, { Fragment } from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'


//componets
import ThemeMenuThree from '../../../components/header/ThemeMenuThree'
import NewsletterTwo from '../../../components/call-to-action/NewsletterTwo'
import PageTitle from '../../../components/page-title/PageTitle'
import FooterThree from '../../../components/footer/FooterThree'

const Error = () => {
    return (
        <Fragment>
            <div className="main-page-wrapper">

                {/* Helmet start */}
                <Helmet>
                    <title>Error-404 || Techy – IT Solution & Web Security React Template</title>
                </Helmet>
                {/* Helmet end */}

                {/* ThemeMenuThree */}
                <ThemeMenuThree />
                {/* ThemeMenuThree */}

                {/*page-title-area start*/}
                <PageTitle title="Error 404" />
                {/*page-title-area end*/}

                {/*error-page start*/}
                <div className="error-page pt-150 pb-115 pt-lg-60 pb-lg-50">
                    <div className="error-page-bg">
                        <img
                            className="error-shape d-none d-lg-inline-block"
                            src="assets/img/shape/line-round-11f.svg"
                            alt="Shape" />
                        <div className="container">
                            <div className="row gx-4 gx-xxl-5">
                                <div className="col-lg-12">
                                    <div className="error-page-wrapper mb-60">
                                        <div className="section-title text-center mb-60">
                                            <h2 className="sect-title text-white">Oops!<br />Page not found</h2>
                                        </div>
                                        <img className="w-100" src="assets/img/error/404.svg" alt="error-imgs" />
                                    </div>
                                </div>
                            </div>
                            <div className="row gx-4 gx-xxl-5">
                                <div className="col-lg-12 text-center">
                                    <Link className="theme_btn" to="/">Back To Home</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*error-page end*/}

                {/*call-to-action start*/}
                <NewsletterTwo />
                {/*call-to-action end*/}

                {/* FooterThree start */}
                <FooterThree />
                {/* FooterThree end */}
            </div>

        </Fragment>
    )
}

export default Error