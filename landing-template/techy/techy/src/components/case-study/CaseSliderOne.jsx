import React, {Fragment} from 'react'
import { Link } from 'react-router-dom'
import Slider from 'react-slick';

const caseContent = [
    {
        img: 'case-1b',
        tag: 'Web Design',
        title: 'Web Analytics',
        desc: 'Dramatically supply transparent backward deliverables before caward comp internal or "organic" sources.',
        icon: 'bi bi-arrow-up-right',
    },
    {
        img: 'case-2b',
        tag: 'Cyber Secure',
        title: 'Cyber Security Core',
        desc: 'Dramatically supply transparent backward deliverables before caward comp internal or "organic" sources.',
        icon: 'bi bi-arrow-up-right',
    },
    {
        img: 'case-3b',
        tag: 'Design',
        title: 'Design For Future',
        desc: 'Dramatically supply transparent backward deliverables before caward comp internal or "organic" sources.',
        icon: 'bi bi-arrow-up-right',
    },
    {
        img: 'case-1b',
        tag: 'Web Design',
        title: 'Web Analytics',
        desc: 'Dramatically supply transparent backward deliverables before caward comp internal or "organic" sources.',
        icon: 'bi bi-arrow-up-right',
    },
    
];

const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,

    responsive: [
         {
            breakpoint: 991,
            settings: {
                slidesToShow: 2
            }
        }, {
            breakpoint: 575,
            settings: {
                slidesToShow: 1,
                arrows:false,
            }
        }
    ]
};


const CaseSliderOne = () => {
    return (
        <Fragment>
            <Slider {...settings} className="row gx-0 px-0 case-slider-one" data-aos="fade-up" data-aos-delay={200}>
                {caseContent.map((val, i)=>(
                    <div key={i} className="col-lg-4">
                        <div className="case-item-one">
                            <div className="case-thumb">
                                <img className="w-100" src={`assets/img/work/${val.img}.jpg`} alt="img"/>
                            </div>
                            <div className="case-content">
                                <span>{val.tag}</span>
                                <h3>
                                    <Link className="sect-title-two" to="/project-details">{val.title}</Link>
                                </h3>
                                <p>{val.desc}</p>
                                <Link className="case-btn" to="/project-details"><i className={val.icon}/></Link>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </Fragment>
    )
}

export default CaseSliderOne