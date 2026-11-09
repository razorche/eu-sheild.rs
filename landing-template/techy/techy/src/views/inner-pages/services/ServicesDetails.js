import React, { Fragment, useState } from 'react'
import { Helmet } from 'react-helmet'

//components
import ThemeMenuThree from '../../../components/header/ThemeMenuThree'
import PageTitle from '../../../components/page-title/PageTitle'
import ModalVideos from '../../../components/modal-video/ModalVideos'
import ToolsList from '../../../components/Service/ToolsList'
import Skill from '../../../components/skill/Skill'
import CommonCounter from '../../../components/counter/CommonCounter'
import ServiceCategory from '../../../components/widget/ServiceCategory'
import WidgetForm from '../../../components/form/WidgetForm'
import NewsletterTwo from '../../../components/call-to-action/NewsletterTwo'
import FooterThree from '../../../components/footer/FooterThree'


const ServicesDetails = () => {
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
                    <title>Services Details || Techy – IT Solution & Web Security React Template</title>
                </Helmet>
                {/* Helmet end */}

                {/* ThemeMenuThree */}
                <ThemeMenuThree />
                {/* ThemeMenuThree */}

                {/* PageTitle */}
                <PageTitle title="Service Details" />
                {/* PageTitle */}

                {/*our-services start*/}
                <section className="service-details-wrapper pt-145 pb-100 pt-lg-60 pb-lg-20">
                    <div className="container">
                        <div className="row gx-4 gx-xxl-5 align-items-center justify-content-center">
                            <div className="col-lg-12">
                                <div className="service-details-content-top mb-60">
                                    <h2 className="sect-title">Software Development</h2>
                                    <p className="text-white mb-35">Quickly integrate client-centered users through vertical
                                        data.
                                        Holisticly repurpose
                                        interactive expertise after distinctive resources. Collaboratively engineer
                                        prospective imperatives with transparent technology. Phosfluorescently morph
                                        excellent materials for multifunctional collaboration and idea-sharing. Continually
                                        innovate maintainable e-commerce without future-proof relationships.</p>
                                    <img className="w-100" src="assets/img/service/img-01.jpg" alt="img" />
                                </div>
                            </div>
                        </div>
                        <div className="row gx-4 gx-xxl-5">
                            <div className="col-lg-8">
                                <div className="widget-left-section">
                                    <p className="text-white">Quickly integrate client-centered users through vertical data.
                                        Holisticly repurpose
                                        interactive expertise after distinctive resources. Collaboratively engineer
                                        prospective imperatives with transparent technology. Phosfluorescently morph
                                        excellent materials for multifunctional collaboration and idea-sharing. Continually
                                        innovate maintainable e-commerce without future-proof relationships.</p>
                                    <p className="text-white mt-15 mb-45">Quickly integrate client-centered users through
                                        vertical data.
                                        Holisticly repurpose
                                        interactive expertise after distinctive resources. Collaboratively engineer
                                        prospective imperatives with transparent .</p>
                                    <h3 className="sect-title-two fw-bold mb-20">Our Specialized</h3>
                                    <p className="text-white">Quickly integrate client-centered users through vertical data.
                                        Holisticly repurpose
                                        interactive expertise after distinctive resources. Collaboratively engineer
                                        prospective imperatives with transparent .</p>
                                    {/* Skill start */}
                                    <Skill />
                                    {/* Skill end */}
                                    <h3 className="sect-title-two fw-bold mb-20">Our Skills</h3>
                                    <p className="text-white">Quickly integrate client-centered users through vertical data.
                                        Holisticly repurpose interactive expert after distinctive resources. Collaboratively
                                        engineer prospective imperatives with transparent technology. Phosfluorescently
                                        morph excellent materials.</p>
                                    {/* ToolsList */}
                                    <ToolsList />
                                    {/* ToolsList */}
                                    <h3 className="sect-title-two fw-bold mb-20">We Provide Services that You can Rely on</h3>
                                    <p className="text-white">Quickly integrate client-centered users through vertical data.
                                        Holisticly repurpose interactive expert after distinctive resources. Collaboratively
                                        engineer prospective imperatives with transparent technology. Phosfluorescently
                                        morph excellent materials.</p>
                                    <div className="service-video d-md-flex mt-40">
                                        <div className="service-single mb-40">
                                            <img className="w-100" src="assets/img/service/img-02.jpg" alt="services-imgs" />
                                        </div>
                                        <div className="service-single-video mb-40">
                                            <img className="w-100" src="assets/img/service/img-03.jpg" alt="services-imgs" />
                                            <a className="popup-video mb-30" onClick={OpenModal} ><i className="bi bi-play-fill" /></a>
                                        </div>
                                        <div className="service-single mb-40">
                                            <img className="w-100" src="assets/img/service/img-04.jpg" alt="services-imgs" />
                                        </div>
                                    </div>
                                    <ul className="text-list list-none">
                                        <li>Collaboratively engineer prospective imperatives with transparent technology.
                                        </li>
                                        <li>Phosfluorescently morph excellent materials for multifunctional collaboration
                                            and idea-sharing.</li>
                                        <li>Conveniently cultivate compelling processes before client-centered networks.
                                        </li>
                                    </ul>
                                    <div className="row mt-20">
                                        <div className="col-md-3" data-aos="fade-up">
                                            <div className="counter-style-two boder-style mb-45">
                                                <h3><span className="counter"><CommonCounter value="125" /></span>+</h3>
                                                <p className="text-white mt-20">We Develop Over 125+ Software</p>
                                            </div>
                                        </div>
                                        <div className="col-md-3" data-aos="fade-up">
                                            <div className="counter-style-two boder-style mb-45">
                                                <h3><span className="counter"><CommonCounter value="64" /></span>+</h3>
                                                <p className="text-white mt-20">Global Clients & Trusted Us</p>
                                            </div>
                                        </div>
                                        <div className="col-md-3" data-aos="fade-up">
                                            <div className="counter-style-two boder-style mb-45">
                                                <h3><span className="counter"><CommonCounter value="32" /></span>+</h3>
                                                <p className="text-white mt-20">Local & Global
                                                    Award Wins</p>
                                            </div>
                                        </div>
                                        <div className="col-md-3" data-aos="fade-up">
                                            <div className="counter-style-two boder-style mb-45">
                                                <h3><span className="counter"><CommonCounter value="122" /></span>+</h3>
                                                <p className="text-white mt-20">Clients Reviews Our Software</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 order-md-first">
                                <div className="widget-right-section mb-40">
                                    {/* ServiceCategory start */}
                                    <ServiceCategory />
                                    {/* ServiceCategory end */}
                                    <div className="widget-form mt-60">
                                        <h3 className="widget-title mb-20">Contact Us</h3>
                                        <p className="mb-40">Collaboratively engineer prospective
                                            imperatives with transparent technology.</p>
                                        {/* WidgetForm start */}
                                        <WidgetForm />
                                        {/* WidgetForm end */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/*our-services end*/}

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

export default ServicesDetails