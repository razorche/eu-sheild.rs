import React, {Fragment} from 'react'
import { Link } from 'react-router-dom'
import NewsletterTwo from '../components/call-to-action/NewsletterTwo'
import PageTitle from '../components/page-title/PageTitle'

const NotFound = () => {
    return (
        <Fragment>
            <div className="main-page-wrapper">
                {/*page-title-area start*/}
                <PageTitle title="Error 404" />
                {/*page-title-area end*/}

                {/*error-page start*/}
                <div className="error-page pt-150 pb-115 pt-lg-60 pb-lg-50">
                    <div className="error-page-bg">
                        <img
                            className="error-shape d-none d-lg-inline-block"
                            src="assets/img/shape/line-round-11f.svg"
                            alt="Shape"/>
                        <div className="container">
                            <div className="row gx-4 gx-xxl-5">
                                <div className="col-lg-12">
                                    <div className="error-page-wrapper mb-60">
                                        <div className="section-title text-center mb-60">
                                            <h2 className="sect-title text-white">Oops!<br/>Page not found</h2>
                                        </div>
                                        <img className="w-100" src="assets/img/error/404.svg" alt="error-images"/>
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
            </div>

        </Fragment>
    )
}

export default NotFound