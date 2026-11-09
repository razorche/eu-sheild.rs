import React, { Fragment } from 'react'
import { Helmet } from 'react-helmet'




//componets
import ThemeMenuThree from '../../../components/header/ThemeMenuThree'
import PageTitle from '../../../components/page-title/PageTitle'
import LoginForm from '../../../components/form/LoginForm'
import NewsletterTwo from '../../../components/call-to-action/NewsletterTwo'
import FooterThree from '../../../components/footer/FooterThree'


const Login = () => {
    return (
        <Fragment>
            <div className="main-page-wrapper">
                {/* Helmet start */}
                <Helmet>
                    <title>Login || Techy – IT Solution & Web Security React Template</title>
                </Helmet>
                {/* Helmet end */}

                {/* ThemeMenuThree */}
                <ThemeMenuThree />
                {/* ThemeMenuThree */}

                {/* PageTitle */}
                <PageTitle title="Login" />
                {/* PageTitle */}

                {/*login-section start*/}
                <div className="signup-section pt-150 pb-150 pt-lg-60 pb-lg-60">
                    <div className="container">
                        <div className="row gx-4 gx-xxl-5 align-items-center justify-content-center">
                            <div className="col-xl-8 col-lg-10">
                                <div className="signup-form">
                                    <h3 className="post-title mb-65 text-center">Log in Your Account</h3>
                                    {/* LoginForm start */}
                                    <LoginForm />
                                    {/* LoginForm start */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*login-section end*/}

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

export default Login