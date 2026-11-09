import React, { Fragment } from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'




//componets
import ThemeMenuThree from '../../../components/header/ThemeMenuThree'
import PageTitle from '../../../components/page-title/PageTitle'
import BlogStyleTwo from '../../../components/blog/BlogStyleTwo'
import NewsletterTwo from '../../../components/call-to-action/NewsletterTwo'
import FooterThree from '../../../components/footer/FooterThree'




const BlogGrid = () => {

    return (
        <Fragment>
            <div className="main-page-wrapper">
                {/* Helmet start */}
                <Helmet>
                    <title>Blog Grid || Techy – IT Solution & Web Security React Template</title>
                </Helmet>
                {/* Helmet end */}

                {/* ThemeMenuThree */}
                <ThemeMenuThree />
                {/* ThemeMenuThree */}

                {/* PageTitle */}
                <PageTitle title="Blog Grid" />
                {/* PageTitle */}

                {/*blog-grid-area start*/}
                <section className="blog-grid-area pt-150 pb-105 pt-lg-60 pb-lg-15">
                    <div className="container">
                        {/* BlogStyleTwo start */}
                        <BlogStyleTwo />
                        {/* BlogStyleTwo start */}
                        <div className="row">
                            <div
                                className="col-lg-12 d-flex align-items-center justify-content-center mb-45">
                                <Link className="theme_btn" to="/blog-details-v1">Load More</Link>
                            </div>
                        </div>
                    </div>
                </section>
                {/*blog-grid-area end*/}

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

export default BlogGrid