import React, {Fragment} from 'react'
import Slider from 'react-slick';

const feedbackContent = [
    {
        img: 'author-6c',
        desc: 'Credibly engineer empowered niche markets via superior & vortal. Int eractive ma' +
                'intain team & driven data for longterm highimpact internal or organic.',
        name: 'Elenor Pena',
        desig: 'Web Designer',
        rating: '4.5'
    }, {
        img: 'author-7c',
        desc: 'Credibly engineer empowered niche markets via superior & vortal. Int eractive ma' +
                'intain team & driven data for longterm highimpact internal or organic.',
        name: 'Kathryn Murphy',
        desig: 'President of Sales',
        rating: '5'
    }, {
        img: 'author-8c',
        desc: 'Credibly engineer empowered niche markets via superior & vortal. Int eractive ma' +
                'intain team & driven data for longterm highimpact internal or organic.',
        name: 'Ronald Richards',
        desig: 'Web Developer',
        rating: '4.0'
    }, {
        img: 'author-6c',
        desc: 'Credibly engineer empowered niche markets via superior & vortal. Int eractive ma' +
                'intain team & driven data for longterm highimpact internal or organic.',
        name: 'Elenor Pena',
        desig: 'Web Designer',
        rating: '4.5'
    }, {
        img: 'author-7c',
        desc: 'Credibly engineer empowered niche markets via superior & vortal. Int eractive ma' +
                'intain team & driven data for longterm highimpact internal or organic.',
        name: 'Kathryn Murphy',
        desig: 'President of Sales',
        rating: '5.0'
    }
];

const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    loop: true,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,


    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2
            }
        }, {
            breakpoint: 767,
            settings: {
                slidesToShow: 1
            }
        }
    ]
};

const FeedbackThree = () => {
    return (
        <Fragment>
            <Slider {...settings} className="row gx-0 px-0 feedback-slider-three" data-aos="fade-up">
                {feedbackContent.map((val, i) => (
                    <div key={i} className="col-lg-4">
                        <div className="feedback-style-three text-center">
                            <img src={`assets/img/testimonial/${val.img}.jpg`} alt="author"/>
                            <div className="rating mt-30 mb-10">
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
                                    <i className="bi bi-star-half"/>
                                </a>
                                <span>{val.rating}</span>
                            </div>
                            <p>{val.desc}</p>
                            <h4>{val.name}</h4>
                            <p className="text-white">{val.desig}</p>
                        </div>
                    </div>
                ))}
            </Slider>
        </Fragment>
    )
}

export default FeedbackThree