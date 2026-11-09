import React, { Fragment } from 'react'
import { Helmet } from 'react-helmet'



//componets
import ThemeMenuThree from '../../../components/header/ThemeMenuThree'
import PageTitle from '../../../components/page-title/PageTitle'
import SocialThree from '../../../components/social/SocialThree'
import SkillTwo from '../../../components/skill/SkillTwo'
import NewsletterTwo from '../../../components/call-to-action/NewsletterTwo'
import FooterThree from '../../../components/footer/FooterThree'


const TeamDetails = () => {
    return (
        <Fragment>
            <div className="main-page-wrapper">
                {/* Helmet start */}
                <Helmet>
                    <title>Team-Details || Techy – IT Solution & Web Security React Template</title>
                </Helmet>
                {/* Helmet end */}

                {/* ThemeMenuThree */}
                <ThemeMenuThree />
                {/* ThemeMenuThree */}

                {/* PageTitle */}
                <PageTitle title="Team Details" />
                {/* PageTitle */}

                {/*team-details-wrapper start*/}
                <section className="team-details-wrapper pt-145 pb-100 pt-lg-60 pb-lg-20">
                    <div className="container">
                        <div className="row gx-4 gx-xxl-5 align-items-center justify-content-center">
                            <div className="col-lg-12">
                                <div className="team-details-content-top mb-60 d-lg-flex align-items-center justify-content-space-between">
                                    <div className="team-img pe-md-1">
                                        <img src="assets/img/team/team-16f.jpg" alt="img" />
                                    </div>
                                    <div className="team-info ps-md-3 ps-xxl-5 pt-lg-5">
                                        <h3 className="team-title mb-25">Ronald Richards</h3>
                                        <p className="fs-20 text-white mb-40">UX/UI Designer, Chemical Engineer, Youtuber, Life
                                            Style
                                            Blogger</p>
                                        <div className="d-md-flex justify-content-space-between">
                                            <ul className="list-none pe-5 me-4">
                                                <li>
                                                    <div className="info">
                                                        <div className="icon">
                                                            <i className="bi bi-briefcase" />
                                                        </div>
                                                        <div className="info-content">
                                                            <h5>Job Title</h5>
                                                            <p>Lead UX Engineer</p>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="info">
                                                        <div className="icon">
                                                            <i className="bi bi-telephone" />
                                                        </div>
                                                        <div className="info-content">
                                                            <h5>Phone</h5>
                                                            <p>+00 365 9852 65</p>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="info">
                                                        <div className="icon">
                                                            <i className="bi bi-envelope" />
                                                        </div>
                                                        <div className="info-content">
                                                            <h5>Email</h5>
                                                            <p>Ltechy@mail.com</p>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="info">
                                                        <div className="icon">
                                                            <i className="bi bi-clock" />
                                                        </div>
                                                        <div className="info-content">
                                                            <h5>JExperiences</h5>
                                                            <p>12+ Years</p>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                            <ul className="list-none">
                                                <li>
                                                    <div className="info">
                                                        <div className="icon">
                                                            <i className="bi bi-file-bar-graph" />
                                                        </div>
                                                        <div className="info-content">
                                                            <h5>Skill Level</h5>
                                                            <p>Pro Level</p>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="pb-2">
                                                    <div className="info">
                                                        <div className="icon">
                                                            <i className="bi bi-translate" />
                                                        </div>
                                                        <div className="info-content">
                                                            <h5>Language</h5>
                                                            <p>English, Bangla</p>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <h4 className="social-title mb-20">Follow More:</h4>
                                                    {/* SocialThree start */}
                                                    <SocialThree />
                                                    {/* SocialThree end */}
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row gx-4 gx-xxl-5">
                            <div className="col-lg-12">
                                <div className="widget-left-section">
                                    <h3 className="sect-title-two fw-bold mb-20">Biography</h3>
                                    <p className="text-white">Quickly integrate client-centered users through vertical data.
                                        Holisticly repurpose interactive expert after distinctive resources. Collaboratively
                                        engineer prospective imperatives with transparent technology. Phosfluorescently
                                        morph excellent materials.
                                        Quickly integrate client-centered users through vertical data. Holisticly repurpose
                                        interactive expertise after distinctive resources. Collaboratively engineer
                                        prospective imperatives with transparent technology. Phosfluorescently morph
                                        excellent materials for multifunctional collaboration and idea-sharing. Continually
                                        innovate maintainable e-commerce without future-proof relationships.</p>
                                    <p className="text-white mt-25 mb-40">Quickly integrate client-centered users through
                                        vertical data. Holisticly repurpose interactive expert after distinctive resources.
                                        Collaboratively engineer prospective imperatives with transparent technology.
                                        Phosfluorescently morph excellent materials.</p>
                                    {/* SkillTwo start */}
                                    <SkillTwo />
                                    {/* SkillTwo end */}
                                    <h3 className="sect-title-two fw-bold mb-20">Our Skills</h3>
                                    <p className="text-white">Quickly integrate client-centered users through vertical data.
                                        Holisticly repurpose interactive expert after distinctive resources. Collaboratively
                                        engineer prospective imperatives with transparent technology. Phosfluorescently
                                        morph excellent materials.</p>
                                    <div className="tools-list mt-30 mb-40">
                                        <span><img src="assets/img/icon/html-5.png" alt="html" /></span>
                                        <span><img src="assets/img/icon/css-3.png" alt="css" /></span>
                                        <span><img src="assets/img/icon/js.png" alt="js" /></span>
                                        <span><img src="assets/img/icon/php.png" alt="php" /></span>
                                        <span><img src="assets/img/icon/c.png" alt="c++" /></span>
                                        <span><img src="assets/img/icon/dart.png" alt="dart" /></span>
                                        <span><img src="assets/img/icon/python.png" alt="pythone" /></span>
                                        <span><img src="assets/img/icon/typescript.png" alt="typescript" /></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/*team-details-wrapper end*/}



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

export default TeamDetails