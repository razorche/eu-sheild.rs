import React, { Fragment, useState } from 'react'
import { Helmet } from 'react-helmet'




//componets
import ThemeMenuThree from '../../../components/header/ThemeMenuThree'
import PageTitle from '../../../components/page-title/PageTitle'
import CommonCounter from '../../../components/counter/CommonCounter'
import ProjectMasonryTwo from '../../../components/project/ProjectMasonryTwo'
import ServiceCategory from '../../../components/widget/ServiceCategory'
import WidgetForm from '../../../components/form/WidgetForm'
import ModalVideos from '../../../components/modal-video/ModalVideos'
import CaseSliderOne from '../../../components/case-study/CaseSliderOne'
import NewsletterTwo from '../../../components/call-to-action/NewsletterTwo'
import FooterThree from '../../../components/footer/FooterThree'



const ProjectDetails = () => {
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
                    <title>Project Details || Techy – IT Solution & Web Security React Template</title>
                </Helmet>
                {/* Helmet end */}

                {/* ThemeMenuThree */}
                <ThemeMenuThree />
                {/* ThemeMenuThree */}

                {/* PageTitle */}
                <PageTitle title="Project Details" />
                {/* PageTitle */}

                {/*project-details-wrapper start*/}
                <section className="project-details-wrapper pt-145 pb-30 pt-lg-60 pb-lg-20">
                    <div className="container">
                        <div className="row gx-4 gx-xxl-5 align-items-center justify-content-center">
                            <div className="col-lg-12">
                                <div className="project-details-content-top mb-50">
                                    <h2 className="sect-title mb-20">Design For Future</h2>
                                    <p className="text-white mb-35">Quickly integrate client-centered users through vertical
                                        data. Holisticly repurpose interactive expertise after distinctive resources.
                                        Collaboratively engineer prospective imperatives with transparent technology.
                                        Phosfluorescently morph excellent materials for multifunctional collaboration and
                                        idea-sharing. Continually innovate maintainable e-commerce without future-proof
                                        relationships.</p>
                                </div>
                                <div className="project-info d-flex justify-content-end mb-60">
                                    <div className="info-box">
                                        <h4 className="semi-title mb-20">Project Information</h4>
                                        <div className="box d-md-flex align-items-center">
                                            <ul className="list-none pe-5">
                                                <li>
                                                    <div className="info-list">
                                                        <span>Client</span>
                                                        <h5>Frndz IT LTD.</h5>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="info-list">
                                                        <span>Start Date</span>
                                                        <h5>21 June 2022</h5>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="info-list">
                                                        <span>Project Duration</span>
                                                        <h5>03 Months</h5>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="info-list">
                                                        <span>End Date</span>
                                                        <h5>21 Sept 2022</h5>
                                                    </div>
                                                </li>
                                            </ul>
                                            <ul className="list-none">
                                                <li>
                                                    <div className="info-list">
                                                        <span>Project type</span>
                                                        <h5>IT Solutions</h5>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="info-list">
                                                        <span>Location</span>
                                                        <h5>Dhaka, Bangladesh</h5>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="info-list">
                                                        <span>Employees</span>
                                                        <h5>10 Person</h5>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="info-list">
                                                        <span>Results</span>
                                                        <h5>Very Good</h5>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="info-list">
                                            <span>Tag</span>
                                            <h5>Cyber / Solution / Protection</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row gx-4 gx-xxl-5">
                            <div className="col-lg-8">
                                <div className="widget-left-section">
                                    <p className="text-white mb-55">Quickly integrate client-centered users through
                                        vertical
                                        data.
                                        Holisticly repurpose interactive expertise after distinctive resources.
                                        Collaboratively engineer prospective imperatives with transparent technology.
                                        Phosfluorescently morph excellent materials for multifunctional collaboration and
                                        idea-sharing. Continually innovate maintainable e-commerce without future-proof
                                        relationships.</p>
                                    <hr />
                                    <h3 className="sect-title-two fw-bold mb-20 mt-55">Challenge</h3>
                                    <p className="text-white mb-35">Quickly integrate client-centered users through vertical
                                        data.
                                        Holisticly repurpose interactive expertise after distinctive resources.
                                        Collaboratively engineer prospective imperatives with transparent technology.
                                        Phosfluorescently morph excellent materials for multifunctional collaboration and
                                        idea-sharing. Continually innovate maintainable e-commerce without future-proof
                                        relationships.</p>
                                    <ul className="text-list list-none">
                                        <li>Collaboratively engineer prospective imperatives with transparent technology.
                                        </li>
                                        <li>Phosfluorescently morph excellent materials for multifunctional collaboration
                                            and idea-sharing.</li>
                                        <li>Conveniently cultivate compelling processes before client-centered networks.
                                        </li>
                                    </ul>
                                    <div className="service-video d-md-flex mt-10">
                                        <div className="service-single-video mb-30">
                                            <img className="w-100" src="assets/img/work/big-img-02.jpg" alt="img" />
                                            <a className="popup-video mb-30" onClick={OpenModal} ><i className="bi bi-play-fill" /></a>
                                        </div>
                                    </div>
                                    <hr />
                                    <h3 className="sect-title-two fw-bold mb-20 mt-55">Project Goals</h3>
                                    <p className="text-white">Quickly integrate client-centered users through vertical data.
                                        Holisticly repurpose interactive expertise after distinctive resources.
                                        Collaboratively engineer prospective imperatives with transparent technology.
                                        Phosfluorescently morph excellent materials for multifunctional collaboration and
                                        idea-sharing. Continually innovate maintainable e-commerce without future-proof
                                        relationships.</p>
                                    <div className="row gx-4 gx-xxl-5 mt-40">
                                        <div className="col-md-3 col-sm-6" data-aos="fade-up">
                                            <div className="counter-style-two boder-style mb-45">
                                                <h3><span className="counter"><CommonCounter value="125" /></span>+</h3>
                                                <p className="text-white mt-20">We Develop Over 125+ Software</p>
                                            </div>
                                        </div>
                                        <div className="col-md-3 col-sm-6" data-aos="fade-up">
                                            <div className="counter-style-two boder-style mb-45">
                                                <h3><span className="counter"><CommonCounter value="64" /></span>+</h3>
                                                <p className="text-white mt-20">Global Clients &amp; Trusted Us</p>
                                            </div>
                                        </div>
                                        <div className="col-md-3 col-sm-6" data-aos="fade-up">
                                            <div className="counter-style-two boder-style mb-45">
                                                <h3><span className="counter"><CommonCounter value="32" /></span>+</h3>
                                                <p className="text-white mt-20">Local &amp; Global
                                                    Award Wins</p>
                                            </div>
                                        </div>
                                        <div className="col-md-3 col-sm-6" data-aos="fade-up">
                                            <div className="counter-style-two boder-style mb-45">
                                                <h3><span className="counter"><CommonCounter value="122" /></span>+</h3>
                                                <p className="text-white mt-20">Clients Reviews Our Software</p>
                                            </div>
                                        </div>
                                    </div>
                                    <hr className="mt-10 mb-55" />
                                    <h3 className="sect-title-two fw-bold mb-20">Solutions</h3>
                                    <p className="text-white mb-40">Quickly integrate client-centered users through vertical
                                        data.
                                        Holisticly repurpose interactive expertise after distinctive resources.
                                        Collaboratively engineer prospective imperatives with transparent.</p>
                                    {/* ProjectMasonryTwo start */}
                                    <ProjectMasonryTwo />
                                    {/* ProjectMasonryTwo end */}
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="widget-right-section">
                                    {/* ServiceCategory start */}
                                    <ServiceCategory />
                                    {/* ServiceCategory end */}
                                    <div className="widget-file-download mt-60">
                                        <button>Download PDF 01 <i className="bi bi-file-earmark-arrow-down" /></button>
                                        <button>Download PDF 02 <i className="bi bi-file-earmark-arrow-down" /></button>
                                    </div>
                                    <div className="widget-form mt-60">
                                        <h3 className="widget-title mb-20">Contact Us</h3>
                                        <p className="mb-40">Collaboratively engineer prospective
                                            imperatives with transparent technology.</p>
                                        {/* WidgetForm start*/}
                                        <WidgetForm />
                                        {/* WidgetForm end */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/*project-details-wrapper end*/}

                {/*latest-case-work start*/}
                <section className="latest-case-work slick-nav blog-slick-two pt-75 pb-150 pt-lg-65">
                    <img className="case-shape shape-1b" src="assets/img/shape/star-3b.svg" alt="shape" />
                    <img className="case-shape shape-2b" src="assets/img/shape/star-4b.svg" alt="shape" />
                    <img className="case-shape shape-3b d-none d-lg-inline-block" src="assets/img/shape/star-2.svg" alt="shape" />
                    <img className="case-shape shape-4b" src="assets/img/shape/star-5b.svg" alt="shape" />
                    <div className="container">
                        <div className="row gx-4 gx-xxl-5 align-items-center">
                            <div className="col-xl-5 col-lg-6 col-md-8">
                                <div className="section-title mb-55 text-md-start text-center">
                                    <h3 className="sect-title mb-25" data-aos="fade-up" data-aos-delay={100}>Related Projects
                                    </h3>
                                </div>
                            </div>
                        </div>
                        {/* CaseSliderOne start */}
                        <CaseSliderOne />
                        {/* CaseSliderOne end */}
                    </div>
                </section>
                {/*latest-case-work end*/}

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

export default ProjectDetails