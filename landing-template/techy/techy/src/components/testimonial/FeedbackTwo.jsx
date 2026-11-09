import React, {Fragment} from 'react'
import Slider from 'react-slick';

const feedbackContent = [
    {
        title: '“ Best software agency in the new world ”',
        desc: 'Credibly engineer empowered niche markets via superior vortal. Int eractive maintain team driven data for longterm highimpact internal or "organic" sources. Appropriately integrate revolutionary ideas & cross-media technologies.',
        img: 'author-4b',
        author: 'Kristin Watson',
        desig: 'Marketing Coordinator',
    },
    {
        title: '“ 24/7 dedicated support team”',
        desc: 'Credibly engineer empowered niche markets via superior vortal. Int eractive maintain team driven data for longterm highimpact internal or "organic" sources. Appropriately integrate revolutionary ideas & cross-media technologies.',
        img: 'author-5b',
        author: 'Darrell Steward',
        desig: 'Medical Assistant',
    },
    {
        title: '“ Best software agency in the new world ”',
        desc: 'Credibly engineer empowered niche markets via superior vortal. Int eractive maintain team driven data for longterm highimpact internal or "organic" sources. Appropriately integrate revolutionary ideas & cross-media technologies.',
        img: 'author-4b',
        author: 'Kristin Watson',
        desig: 'Marketing Coordinator',
    },
    {
        title: '“ 24/7 dedicated support team”',
        desc: 'Credibly engineer empowered niche markets via superior vortal. Int eractive maintain team driven data for longterm highimpact internal or "organic" sources. Appropriately integrate revolutionary ideas & cross-media technologies.',
        img: 'author-5b',
        author: 'Darrell Steward',
        desig: 'Medical Assistant',
    },
];

const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    loop: true,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 2,
    slidesToScroll: 1,
    padding:15,
    responsive: [
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 1,
            }
        }
    ]
};

const FeedbackTwo = () => {
    return (
        <Fragment>
            <Slider {...settings} className="row gx-0 feedback-slider-two">
                {feedbackContent.map((val,i)=>(
                    <div key={i} className="col-lg-6">
                        <div className="feedback-style-two">
                            <h4 className="fw-medium mb-25">“ Best software agency in the new world ”</h4>
                            <p>C{val.desc}</p>
                            <div className="d-sm-flex align-items-center justify-content-between">
                                <div className="author d-flex align-items-center justify-content-center mt-35">
                                    <img src={`assets/img/testimonial/${val.img}.jpg`} alt="author"/>
                                    <div className="author-info">
                                        <h4>{val.author}</h4>
                                        <p className="text-white">{val.desig}</p>
                                    </div>
                                </div>
                                <div className="rating mt-35">
                                    <a href="#">
                                        <i className="bi bi-star-fill"/>
                                    </a>
                                    <a href="#">
                                        <i className="bi bi-star-fill"/>
                                    </a>
                                    <a href="#">
                                        <i className="bi bi-star-fill"/>
                                    </a>
                                    <a href="#">
                                        <i className="bi bi-star-fill"/>
                                    </a>
                                    <a href="#">
                                        <i className="bi bi-star-fill"/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </Fragment>
    )
}

export default FeedbackTwo