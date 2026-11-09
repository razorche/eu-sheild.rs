import React, {Fragment} from 'react'
import Slider from 'react-slick'

const FeedbackContent = [
    {
        icon: [
            'bi bi-star-fill',
            'bi bi-star-fill',
            'bi bi-star-fill',
            'bi bi-star-fill',
            'bi bi-star-fill',
        ],
        num: 4.5,
        desc: '“Energistically architect parallel leadership through standardized results. Glob' +
                'ally develop enabled leadership skills whereas multimedia based convergence. Pro' +
                'fessionally maintain best-of-breed markets and standardized leadership. Interact' +
                'ively embrace”',
        avatar:'author-1',
        author: 'Wade Warren',
        desig: 'UX/UI Designer'
    }, {
        icon: [
            'bi bi-star-fill',
            'bi bi-star-fill',
            'bi bi-star-fill',
            'bi bi-star-fill',
            'bi bi-star-fill',
        ],
        num: 5,
        desc: '“Energistically architect parallel leadership through standardized results. Glob' +
                'ally develop enabled leadership skills whereas multimedia based convergence. Pro' +
                'fessionally maintain best-of-breed markets and standardized leadership. Interact' +
                'ively embrace”',
        avatar:'author-2',
        author: 'Dev Hunter',
        desig: 'Fullstack Engr'
    }, {
        icon: [
            'bi bi-star-fill',
            'bi bi-star-fill',
            'bi bi-star-fill',
            'bi bi-star-fill',
            'bi bi-star-fill',
        ],
        num: 5,
        desc: '“Energistically architect parallel leadership through standardized results. Glob' +
                'ally develop enabled leadership skills whereas multimedia based convergence. Pro' +
                'fessionally maintain best-of-breed markets and standardized leadership. Interact' +
                'ively embrace”',
        avatar:'author-3',
        author: 'Hamina Hasan',
        desig: 'React Developer'
    }
];

const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    loop: true,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1
};

const FeedbackOne = () => {
    return (
        <Fragment>
            <Slider
                {...settings}
                className="row feedback-active-one justify-content-center"
                data-aos="fade-up"
                data-aos-delay={200}>
                {FeedbackContent.map((val, i) => (
                    <div key={i} className="col-lg-11">
                        <div className="feedback-style-one text-center">
                            <div className="rating mb-40">
                               
                                {val.icon.map((val,i) =>(
                                    <a key={i} href="#"><i className={val}/></a>
                                ))}
                                <span className="fs-18 text-white">{val.num}</span>
                            </div>
                            <p>{val.desc}</p>
                            <div className="author d-flex align-items-center justify-content-center mt-45">
                                <img src={`assets/img/testimonial/${val.avatar}.jpg`} alt="author"/>
                                <div className="author-info">
                                    <h3>{val.author}</h3>
                                    <h5>{val.desig}</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </Fragment>
    )
}

export default FeedbackOne