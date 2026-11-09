import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

const BlogFourContent = [
    {
        img: 'blog-21',
        tag: 'Research , Technology',
        title: 'Google is removing the Movies & TV section from the Play Store',
        desc: 'Continually matrix clicks-and-mortar functionalities vis-a-vis high-quality bandwidth. Monotonectally pontificate distinctive expertise rather than covalent technologies. Continually generate scalable niche markets without enterprise-wide vortals. Objectively parallel task scalable solutions before high standards in mindshare. Credibly deploy vertical platforms vis-a-vis quality niches.',
        authorName: 'Samir Jam',
        date: '21 Jan 2022',
        icon1: 'bi bi-person-plus',
        icon2: 'i bi-clock',
        btnText:'Read More'
    }, 
    {
        img: 'blog-22',
        tag: 'Research , Technology',
        title: 'Announcing the full agenda for TC Sessions: Robotics happening this July',
        desc: 'Continually matrix clicks-and-mortar functionalities vis-a-vis high-quality bandwidth. Monotonectally pontificate distinctive expertise rather than covalent technologies. Continually generate scalable niche markets without enterprise-wide vortals. Objectively parallel task scalable solutions before high standards in mindshare. Credibly deploy vertical platforms vis-a-vis quality niches.',
        authorName: 'Anisa Kdar',
        date: '17 Sep 2020',
        icon1: 'bi bi-person-plus',
        icon2: 'i bi-clock',
        btnText:'Read More'
    }, 
    {
        img: 'blog-23',
        tag: 'Research , Technology',
        title: 'Deal terms look different in a downturn. Here’s what to watch out for',
        desc: 'Continually matrix clicks-and-mortar functionalities vis-a-vis high-quality bandwidth. Monotonectally pontificate distinctive expertise rather than covalent technologies. Continually generate scalable niche markets without enterprise-wide vortals. Objectively parallel task scalable solutions before high standards in mindshare. Credibly deploy vertical platforms vis-a-vis quality niches.',
        authorName: 'Samir Jam',
        date: '21 Jan 2020',
        icon1: 'bi bi-person-plus',
        icon2: 'i bi-clock',
        btnText:'Read More'
    },
    {
        img: 'blog-24',
        tag: 'Research , Technology',
        title: 'Kibo School gets $2M to offer online STEM degrees to students in Africa',
        desc: 'Continually matrix clicks-and-mortar functionalities vis-a-vis high-quality bandwidth. Monotonectally pontificate distinctive expertise rather than covalent technologies. Continually generate scalable niche markets without enterprise-wide vortals. Objectively parallel task scalable solutions before high standards in mindshare. Credibly deploy vertical platforms vis-a-vis quality niches.',
        authorName: 'Chris Hams',
        date: '19 Jun 2222',
        icon1: 'bi bi-person-plus',
        icon2: 'i bi-clock',
        btnText:'Read More'
    },
]

const BlogStyleFour = () => {
    return (
        <Fragment>
            {BlogFourContent.map((val, i)=>(
                <div key={i} className="blog-style-two style-four mb-lg-45 mb-275">
                <div className="blog-thumb">
                    <img className="w-100" src={`assets/img/blog/${val.img}.jpg`} alt="img"/>
                </div>
                <div className="blog-content">
                    <div className="blog-tag pb-10">
                        {val.tag}
                    </div>
                    <h3>
                        <Link className="blog-title" to="/blog-details">{val.title}</Link>
                    </h3>
                    <div className="blog-meta">
                        <a href="#" className="mr-20"><i className={val.icon1}/>
                            {val.authorName}</a>
                        <a href="#"><i className={val.icon2}/> {val.date}</a>
                    </div>
                    <p>{val.desc}</p>
                    <Link className="more-btn" to="/blog-details">{val.btnText}</Link>
                </div>
            </div>
            ))}
        </Fragment>
    )
}

export default BlogStyleFour