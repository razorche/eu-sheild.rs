import React, {Fragment} from 'react'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'

const BlogContent = [
    {
        blogImg: 'blog-01',
        tag: 'Web Desing',
        blogTitle: 'Cybersecurity researchers trace Lapsus$ attacks to a teenager from England',
        blogDesc: 'Dramatically supply transparent backward deliverables before caward comp interna' +
                'l or "organic" sources.',
        icon: 'bi bi-person-plus',
        icon2: 'bi bi-clock',
        author: 'Paul Teru',
        date: '21 Jan 2022'
    }, {
        blogImg: 'blog-02',
        tag: 'Cyber Security',
        blogTitle: 'Google is removing the Movies &amp; TV section from the Play Store',
        blogDesc: 'Dramatically supply transparent backward deliverables before caward comp interna' +
                'l or "organic" sources.',
        icon: 'bi bi-person-plus',
        icon2: 'bi bi-clock',
        author: 'Samir jam',
        date: '01 Apr 2022'
    }, {
        blogImg: 'blog-01',
        tag: 'Development',
        blogTitle: 'Google Photos makes it easier to import and organize your pics',
        blogDesc: 'Dramatically supply transparent backward deliverables before caward comp interna' +
                'l or "organic" sources.',
        icon: 'bi bi-person-plus',
        icon2: 'bi bi-clock',
        author: 'Hamina Hasan',
        date: '17 May 2022'
    }, {
        blogImg: 'blog-02',
        tag: 'Software',
        blogTitle: 'Cybersecurity researchers trace Lapsus$ attacks to a teenager from England',
        blogDesc: 'Dramatically supply transparent backward deliverables before caward comp interna' +
                'l or "organic" sources.',
        icon: 'bi bi-person-plus',
        icon2: 'bi bi-clock',
        author: 'Hang True',
        date: '09 Aug 2022'
    }, {
        blogImg: 'blog-01',
        tag: 'Software',
        blogTitle: 'Cybersecurity researchers trace Lapsus$ attacks to a teenager from England',
        blogDesc: 'Dramatically supply transparent backward deliverables before caward comp interna' +
                'l or "organic" sources.',
        icon: 'bi bi-person-plus',
        icon2: 'bi bi-clock',
        author: 'Hayat More',
        date: '09 Aug 2022'
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
    margin: 15,
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
            breakpoint: 820,
            settings: {
                slidesToShow: 1,
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

const BlogOne = () => {
    return (
        <Fragment>
            <Slider className="row gx-0 blog-active-one" data-aos="fade-up" data-aos-delay={100} {...settings}>
                {BlogContent.map((val, i) => (
                    <div key={i} className="col-lg-4">
                        <div className="blog-style-one">
                            <div className="blog-thumb">
                                <img className="w-100" src={`assets/img/blog/${val.blogImg}.jpg`} alt="img"/>
                                <a href="#" className="tag">{val.tag}</a>
                            </div>
                            <div className="blog-content">
                                <h4>
                                    <Link className="blog-title" to="/blog-details-v1">{val.blogTitle}</Link>
                                </h4>
                                <p>{val.blogDesc}</p>
                                <div className="blog-meta">
                                    <a href="#">
                                        <i className={val.icon}/>
                                        {val.author}
                                    </a>
                                    <a href="#">
                                        <i className={val.icon2}/>
                                        {val.date}
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

export default BlogOne