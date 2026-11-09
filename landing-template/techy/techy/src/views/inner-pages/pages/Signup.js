import React, { Fragment } from 'react'
import { Helmet } from 'react-helmet'




//componets
import ThemeMenuThree from '../../../components/header/ThemeMenuThree'
import PageTitle from '../../../components/page-title/PageTitle'
import SignUp from '../../../components/form/SignUp'
import NewsletterTwo from '../../../components/call-to-action/NewsletterTwo'
import FooterThree from '../../../components/footer/FooterThree'


const Signup = () => {
    return (
        <Fragment>
            <div className="main-page-wrapper">
                {/* Helmet start */}
                <Helmet>
                    <title>Signup || Techy – IT Solution & Web Security React Template</title>
                </Helmet>
                {/* Helmet end */}

                {/* ThemeMenuThree */}
                <ThemeMenuThree />
                {/* ThemeMenuThree */}

                {/* PageTitle */}
                <PageTitle title="Sign Up" />
                {/* PageTitle */}

                {/*signup-section start*/}
                <div className="signup-section pt-150 pb-150 pt-lg-60 pb-lg-60">
                    <div className="container">
                        <div className="row gx-4 gx-xxl-5 align-items-center justify-content-center">
                            <div className="col-xl-8 col-lg-10">
                                <div className="signup-form">
                                    <h3 className="post-title mb-65 text-center">Create Your Account</h3>
                                    {/* SignUp start */}
                                    <SignUp />
                                    {/* SignUp end*/}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*signup-section end*/}

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

export default Signup