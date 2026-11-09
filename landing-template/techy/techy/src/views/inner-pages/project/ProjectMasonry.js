import React, { Fragment } from 'react'
import { Helmet } from 'react-helmet'




//componets
import ThemeMenuThree from '../../../components/header/ThemeMenuThree'
import PageTitle from '../../../components/page-title/PageTitle'
import ProjectMasonryGrid from '../../../components/project/ProjectMasonryGrid'
import NewsletterTwo from '../../../components/call-to-action/NewsletterTwo'
import FooterThree from '../../../components/footer/FooterThree'
import { Link } from 'react-router-dom'


const ProjectGrid = () => {

    return (
        <Fragment>
            <div className="main-page-wrapper">
                {/* Helmet start */}
                <Helmet>
                    <title>Project Masonry || Techy – IT Solution & Web Security React Template</title>
                </Helmet>
                {/* Helmet end */}

                {/* ThemeMenuThree */}
                <ThemeMenuThree />
                {/* ThemeMenuThree */}

                {/* PageTitle */}
                <PageTitle title="Project Masonry" />
                {/* PageTitle */}

                {/*feature-work start*/}
                <section className="techy-project-masonry pt-145 pb-105 pt-lg-55 pb-lg-15">
                    <div className="container">
                        <div className="row gx-4 gx-xxl-5 align-items-center justify-content-center">
                            <div className="col-xl-6 col-lg-6 col-md-8">
                                <div className="section-title text-center mb-25">
                                    <h6 className="sub-title mb-20">Latest Works</h6>
                                    <h3 className="sect-title mb-25" data-aos="fade-up">Check out some great case studies</h3>
                                </div>
                            </div>
                        </div>
                        {/* ProjectMasonryGrid start */}
                        <ProjectMasonryGrid />
                        {/* ProjectMasonryGrid end */}
                        <div className="row">
                            <div className="col-lg-12 text-center mt-10 mb-45">
                                <Link className="theme_btn" to="/project-masonry">Load More</Link>
                            </div>
                        </div>
                    </div>
                </section>
                {/*feature-work end*/}

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

export default ProjectGrid