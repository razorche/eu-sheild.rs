import React, {Fragment} from 'react'
import { Link } from 'react-router-dom'

const NewsletterTwo = () => {
    return (
        <Fragment>
            {/*call-to-action start*/}
            <section className="call-to-action pt-100 pb-100">
                <img
                    className="call-shape shape-one"
                    src="assets/img/shape/line-round-8c.svg"
                    alt="shape"/>
                <img
                    className="call-shape shape-two d-none d-lg-inline-block"
                    src="assets/img/icon/icon-39c.svg"
                    alt="icon"/>
                <img
                    className="call-shape shape-three d-none d-lg-inline-block"
                    src="assets/img/icon/icon-40c.svg"
                    alt="icon"/>
                <img
                    className="call-shape shape-four d-none d-lg-inline-block"
                    src="assets/img/icon/icon-41c.svg"
                    alt="icon"/>
                <img
                    className="call-shape shape-five d-none d-lg-inline-block"
                    src="assets/img/icon/icon-42c.svg"
                    alt="icon"/>
                <img
                    className="call-shape shape-six d-none d-lg-inline-block"
                    src="assets/img/icon/icon-43c.svg"
                    alt=""/>
                <img
                    className="call-shape shape-seven d-none d-lg-inline-block"
                    src="assets/img/icon/icon-44c.svg"
                    alt=""/>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-8 col-md-8">
                            <div className="call-to-wrapper">
                                <h3 className="title-big mb-60" data-aos="fade-up">
                                    Have a project in mind? Let’s get to work.
                                </h3>
                                <Link className="theme_btn" data-aos="fade-up" to="/contact">Contact Us</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*call-to-action end*/}

        </Fragment>
    )
}

export default NewsletterTwo