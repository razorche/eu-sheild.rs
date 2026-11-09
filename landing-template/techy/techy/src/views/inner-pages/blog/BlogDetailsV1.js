import React, { Fragment, useState } from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'





//componets
import ThemeMenuThree from '../../../components/header/ThemeMenuThree'
import PageTitle from '../../../components/page-title/PageTitle'
import SearchForm from '../../../components/form/SearchForm'
import CategoryWidgetTwo from '../../../components/widget/CategoryWidgetTwo'
import WidgetPost from '../../../components/widget/WidgetPost'
import CategoryTag from '../../../components/widget/CategoryTag'
import BlogAuthor from '../../../components/blog/BlogAuthor'
import ModalVideos from '../../../components/modal-video/ModalVideos'
import SocialMedia from '../../../components/blog/SocialMedia'
import BlogAuthorTwo from '../../../components/blog/BlogAuthorTwo'
import BlogComment from '../../../components/blog/BlogComment'
import CommentForm from '../../../components/form/CommentForm'
import NewsletterTwo from '../../../components/call-to-action/NewsletterTwo'
import FooterThree from '../../../components/footer/FooterThree'




const BlogDetailsV1 = () => {
    const [open, setOpen] = useState(false);
    const OpenModal = () => {
        setOpen(!open)
    }
    return (
        <Fragment>
            <ModalVideos isOpen={open} onClick={OpenModal} />
            <div className="main-page-wrapper">
                {/* Helmet start */}
                <Helmet>
                    <title>Blog Details V1 || Techy – IT Solution & Web Security React Template</title>
                </Helmet>
                {/* Helmet end */}

                {/* ThemeMenuThree */}
                <ThemeMenuThree />
                {/* ThemeMenuThree */}

                {/* PageTitle */}
                <PageTitle title="Blog Details One" />
                {/* PageTitle */}

                {/*blog-single-area start*/}
                <section className="blog-single-area pt-150 pb-80 pt-lg-60">
                    <div className="container">
                        <div className="row gx-4 gx-xxl-5">
                            <div className="col-lg-8 mb-60">
                                <div className="blog-style-five mb-25">
                                    <div className="blog-content">
                                        <div className="blog-tag pb-15">
                                            Research , Technology
                                        </div>
                                        <h3><Link className="blog-title" to="/blog-details-v1">Google is removing the Movies & TV section from the Play Store</Link></h3>
                                        <div className="blog-meta mb-35">
                                            <a href="#" className="mr-20"><i className="bi bi-person-plus" /> Samir Jam</a>
                                            <a href="#"><i className="bi bi-clock" /> 21 Jan 2022</a>
                                        </div>
                                    </div>
                                    <div className="blog-thumb mb-40">
                                        <img className="w-100" src="assets/img/blog/blog-21.jpg" alt="blog-img" />
                                    </div>
                                    <p className="text-white mb-25">Continually matrix clicks-and-mortar functionalities
                                        vis-a-vis
                                        high-quality
                                        bandwidth. Monotonectally pontificate distinctive expertise rather than covalent
                                        technologies. Continually generate scalable niche markets without
                                        enterprise-wide vortals. Objectively parallel task scalable solutions before
                                        high standards in mindshare. Credibly deploy vertical platforms vis-a-vis
                                        quality niches.</p>
                                    <p className="text-white">Continually matrix clicks-and-mortar functionalities vis-a-vis
                                        high-quality
                                        bandwidth. Monotonectally pontificate distinctive expertise rather than covalent
                                        technologies. Continually generate scalable niche.</p>
                                </div>
                                {/* BlogAuthor start */}
                                <BlogAuthor bgColor="prime-bg" />
                                {/* BlogAuthor end */}
                                <div className="blog-single-content">
                                    <p className="text-white">Continually matrix clicks-and-mortar functionalities vis-a-vis
                                        high-quality
                                        bandwidth. Monotonectally pontificate distinctive expertise rather than covalent
                                        technologies. Continually generate scalable niche markets without enterprise-wide
                                        vortals. Objectively parallel task scalable solutions before high standards in
                                        mindshare. Credibly deploy vertical platforms vis-a-vis quality niches.</p>
                                    <h3 className="sect-title-two mb-40 mt-50">01.Why cancel those?</h3>
                                    <p className="text-white">Continually matrix clicks-and-mortar functionalities vis-a-vis
                                        high-quality
                                        bandwidth. Monotonectally pontificate distinctive expertise rather than covalent
                                        technologies. Continually generate scalable niche markets without enterprise-wide
                                        vortals. Objectively parallel task scalable solutions before high standards in
                                        mindshare. Credibly deploy vertical platforms vis-a-vis quality niches.</p>
                                    <div className="row gx-4 gx-xxl-5 px-0 mt-30">
                                        <div className="col-sm-6 mb-30">
                                            <img className="w-100" src="assets/img/blog/blog-25.jpg" alt="blog-img" />
                                        </div>
                                        <div className="col-sm-6 mb-30">
                                            <img className="w-100" src="assets/img/blog/blog-26.jpg" alt="blog-img" />
                                        </div>
                                    </div>
                                    <p className="text-white mb-30">Continually matrix clicks-and-mortar functionalities
                                        vis-a-vis
                                        high-quality
                                        bandwidth. Monotonectally pontificate distinctive expertise rather than covalent
                                        technologies. Continually generate scalable niche markets without enterprise-wide
                                        vortals. Objectively parallel task scalable solutions before high standards in
                                        mindshare. Credibly deploy vertical platforms vis-a-vis quality niches.</p>
                                    <ul className="text-list list-none">
                                        <li>Compellingly exploit B2B vortals with emerging total linkage.</li>
                                        <li>Energistically customize error-free mindshare with strategic niche.</li>
                                        <li>Phosfluorescently mesh e-business e-markets rather than market.
                                        </li>
                                        <li>Globally aggregate ubiquitous innovation and market-driven users. </li>
                                    </ul>
                                    <h3 className="sect-title-two mb-40 mt-25">02.About more google next challenge</h3>
                                    <p className="text-white">Continually matrix clicks-and-mortar functionalities
                                        vis-a-vis
                                        high-quality bandwidth. Monotonectally pontificate distinctive expertise rather than
                                        covalent technologies. Continually generate scalable niche.</p>
                                    <p className="text-white mt-25">Continually matrix clicks-and-mortar functionalities
                                        vis-a-vis
                                        high-quality
                                        bandwidth. Monotonectally pontificate distinctive expertise rather than covalent
                                        technologies. Continually generate scalable niche markets without enterprise-wide
                                        vortals. Objectively parallel task scalable solutions before high standards in
                                        mindshare. Credibly deploy vertical platforms vis-a-vis quality niches.</p>
                                    <div className="service-video">
                                        <div className="service-single-video mt-30 mb-30">
                                            <img className="w-100" src="assets/img/blog/blog-27.jpg" alt="blog-img" />
                                            <a className="popup-video mb-30" onClick={OpenModal} ><i className="bi bi-play-fill" /></a>
                                        </div>
                                    </div>
                                    <p className="text-white">Continually matrix clicks-and-mortar functionalities vis-a-vis
                                        high-quality
                                        bandwidth. Monotonectally pontificate distinctive expertise rather than covalent
                                        technologies. Continually generate scalable niche markets without enterprise-wide
                                        vortals. Objectively parallel task scalable solutions before.</p>
                                    <h3 className="sect-title-two mb-40 mt-50">03.Conclution</h3>
                                    <p className="text-white">Continually matrix clicks-and-mortar functionalities vis-a-vis
                                        high-quality bandwidth. Monotonectally pontificate distinctive expertise rather than
                                        covalent technologies. Continually generate scalable niche markets without
                                        enterprise-wide vortals. Objectively parallel task scalable solutions before high
                                        standards in mindshare. Credibly deploy vertical platforms vis-a-vis quality
                                        niches./p&gt;
                                    </p></div>
                                {/* SocialMedia start */}
                                <SocialMedia bgColor="theme-bg" />
                                {/* SocialMedia end */}

                                {/* BlogAuthorTwo start */}
                                <BlogAuthorTwo />
                                {/* BlogAuthorTwo end */}
                                <div className="comments-wrapper  mt-55">
                                    <h3 className="post-title mb-50">Comments</h3>
                                    {/* BlogComment start */}
                                    <BlogComment />
                                    {/* BlogComment end */}
                                </div>
                                <div className="comment-form mb-10 mt-65">
                                    <h3 className="post-title mb-35">Leave a comment</h3>
                                    {/* CommentForm start */}
                                    <CommentForm />
                                    {/* CommentForm end */}
                                </div>
                            </div>
                            <div className="col-lg-4 order-lg-first">
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
                                        {/* WidgetPost start */}
                                        <WidgetPost />
                                        {/* WidgetPost end */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/*blog-single-area end*/}


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

export default BlogDetailsV1