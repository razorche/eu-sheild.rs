import React, { Fragment } from 'react'
import { Helmet } from 'react-helmet'




//componets
import ThemeMenuThree from '../../../components/header/ThemeMenuThree'
import PageTitle from '../../../components/page-title/PageTitle'
import ProjectGridOne from '../../../components/project/ProjectGridOne'
import NewsletterTwo from '../../../components/call-to-action/NewsletterTwo'
import FooterThree from '../../../components/footer/FooterThree'
import { Link } from 'react-router-dom'


const ProjectGrid = () => {

    return (
        <Fragment>
            <div className="main-page-wrapper">
                {/* Helmet start */}
                <Helmet>
                    <title>Project Grid || Techy – IT Solution & Web Security React Template</title>
                </Helmet>
                {/* Helmet end */}

                {/* ThemeMenuThree */}
                <ThemeMenuThree />
                {/* ThemeMenuThree */}

                {/* PageTitle */}
                <PageTitle title="Our Project" />
                {/* PageTitle */}

                {/*techy-project-one start*/}
                <section className="techy-project-one pt-145 pb-105 pt-lg-55 pb-lg-15">
                    <div className="container">
                        <div className="row gx-4 gx-xxl-5 align-items-center justify-content-center">
                            <div className="col-xl-5 col-lg-6 col-md-8">
                                <div className="section-title text-center mb-25">
                                    <h3 className="sect-title mb-25" data-aos="fade-up">Featured Works</h3>
                                    <p data-aos="fade-up">Dramatically supply transparent
                                        backward deliverables before caward comp internal or "organic" sources.</p>
                                </div>
                            </div>
                        </div>
                        {/* ProjectGridOne start */}
                        <ProjectGridOne />
                        {/* ProjectGridOne end */}
                        <div className="row">
                            <div className="col-lg-12 text-center mt-10 mb-45">
                                <Link className="theme_btn" to="/project-masonry">Load More</Link>
                            </div>
                        </div>
                    </div>
                </section>
                {/*techy-project-one end*/}

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