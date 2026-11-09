import React, {Fragment} from 'react'
import {Link} from 'react-router-dom'
import Slider from 'react-slick'


const featureSilderContent = [
    {
        img: 'img-01',
        title: 'Web Design',
        bTitle: 'Web Analytics'
    }, {
        img: 'img-02',
        title: 'Cyber Secure',
        bTitle: 'Web Analytics'
    }, {
        img: 'img-03',
        title: 'Mobile info',
        bTitle: 'Upcoming phone'
    }, {
        img: 'img-01',
        title: 'Web Design',
        bTitle: 'Web Analytics'
    }, {
        img: 'img-03',
        title: 'Mobile info',
        bTitle: 'Upcoming phone'
    }
];


const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    loop: true,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    padding: 15,
    center: false,
    centerPadding: 0,

    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
            }
        },
        
        {
            breakpoint: 767.98,
            settings: {
                arrows: false,
                slidesToShow: 1,
            }
        }
    ]
};


//feature-slider-active
const FeatureSliderOne = () => {
    return (
        <Fragment>
            <Slider
                {...settings}
                className="feature-slider row gx-0">
                {featureSilderContent.map((val, i) => (
                    <div key={i} className="col-lg-4">
                        <div className="feature-item">
                            <Link className="back-bg" to="/project-details"><img className="w-100" src={`assets/img/feature/${val.img}.jpg`} alt="img"/></Link>
                            <h5>
                                <Link to="/project-details">{val.title}</Link>
                            </h5>
                            <h3>
                                <Link to="/project-details">{val.bTitle}</Link>
                            </h3>
                        </div>
                    </div>
                ))
}
            </Slider>
        </Fragment>
    )
}

export default FeatureSliderOne