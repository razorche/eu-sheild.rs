import React, { Fragment } from 'react'
import { Helmet } from 'react-helmet'





//componets
import ThemeMenuThree from '../../../components/header/ThemeMenuThree'
import PageTitle from '../../../components/page-title/PageTitle'
import BlogStyleFour from '../../../components/blog/BlogStyleFour'
import SearchForm from '../../../components/form/SearchForm'
import CategoryWidgetTwo from '../../../components/widget/CategoryWidgetTwo'
import WidgetPost from '../../../components/widget/WidgetPost'
import CategoryTag from '../../../components/widget/CategoryTag'
import NewsletterTwo from '../../../components/call-to-action/NewsletterTwo'
import FooterThree from '../../../components/footer/FooterThree'




const BlogClassic = () => {

    return (
        <Fragment>
            <div className="main-page-wrapper">
                {/* Helmet start */}
                <Helmet>
                    <title>Blog Classic || Techy – IT Solution & Web Security React Template</title>
                </Helmet>
                {/* Helmet end */}

                {/* ThemeMenuThree */}
                <ThemeMenuThree />
                {/* ThemeMenuThree */}

                {/* PageTitle */}
                <PageTitle title="Blog Classic" />
                {/* PageTitle */}

                {/*blog-classic-area start*/}
                <section className="blog-classic-area pt-150 pb-105 pt-lg-60 pb-lg-15">
                    <div className="container">
                        <div className="row gx-4 gx-xxl-5">
                            <div className="col-lg-8">
                                {/* BlogStyleFour start */}
                                <BlogStyleFour />
                                {/* BlogStyleFour end */}
                            </div>
                            <div className="col-lg-4">
                                <div className="right-widget-section">
                                    <div className="widget widget-search mb-60">
                                        <div className="widget-title-box mb-30">
                                            <h4 className="widget-sub-title2 fs-20">Search Here</h4>
                                        </div>
                                        {/* SearchForm start */}
                                        <SearchForm />
                                        {/* SearchForm end */}
                                    </div>
                                    <div className="widget widget-categories-list mb-40">
                                        <div className="widget-title-box mb-30">
                                            <h4 className="widget-sub-title2 fs-20">Categories</h4>
                                        </div>
                                        {/* CategoryWidgetTwo start */}
                                        <CategoryWidgetTwo />
                                        {/* CategoryWidgetTwo end */}
                                    </div>
                                    <div className="widget widget-post mb-60">
                                        <div className="widget-title-box mb-30">
                                            <h4 className="widget-sub-title2 fs-20">Recent Post</h4>
                                        </div>
                                        {/* WidgetPost start */}
                                        <WidgetPost />
                                        {/* WidgetPost end */}
                                    </div>
                                    <div className="widget widget-categories-tag mb-60">
                                        <div className="widget-title-box mb-25">
                                            <h4 className="widget-sub-title2 fs-20">Tags</h4>
                                        </div>
                                        {/* CategoryTag start */}
                                        <CategoryTag />
                                        {/* CategoryTag end */}
                                    </div>
                                    <div className="widget widget-post mb-60">
                                        <div className="widget-title-box mb-30">
                                            <h4 className="widget-sub-title2 fs-20">Popular Post</h4>
                                        </div>
                                        <ul className="post-list">
                                            {/* WidgetPost start */}
                                            <WidgetPost />
                                            {/* WidgetPost end */}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12 mt-15 mb-30">
                                <div className="page-navigation">
                                    <ul className="pagination">
                                        <li className="page-item"><a className="page-link" href="#"><i className="bi bi-arrow-left-short" /></a></li>
                                        <li className="page-item"><a className="page-link" href="#">1</a></li>
                                        <li className="page-item"><a className="page-link" href="#">2</a></li>
                                        <li className="page-item"><a className="page-link" href="#">3</a></li>
                                        <li className="page-item"><a className="page-link" href="#"><i className="bi bi-arrow-right-short" /></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/*blog-classic-area end*/}

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

export default BlogClassic