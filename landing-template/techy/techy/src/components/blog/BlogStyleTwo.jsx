import React, {Fragment} from 'react'
import { Link } from 'react-router-dom'

const BlogTwoContent = [
    {
        img: 'blog-03',
        tag: 'Research , Technology',
        desc: 'Google is removing the Movies & TV section from the Play Store',
        authorName: 'Samir Jam',
        date: '21 Jan 2022',
        icon1: 'bi bi-person-plus',
        icon2: 'i bi-clock'
    }, {
        img: 'blog-04',
        tag: 'Research , Technology',
        desc: 'Twitter asks shareholders to approve the $44 billion Elon Musk takeover',
        authorName: 'Anisa Kdar',
        date: '02 Aug 2022',
        icon1: 'bi bi-person-plus',
        icon2: 'i bi-clock'
    }, {
        img: 'blog-05',
        tag: 'Research , Technology',
        desc: 'Where Minds Meet Machines: The Future of Robotics',
        authorName: 'Samir Jam',
        date: '21 Jan 2022',
        icon1: 'bi bi-person-plus',
        icon2: 'i bi-clock'
    }, {
        img: 'blog-06',
        tag: 'Research , Technology',
        desc: 'Announcing the full agenda for TC Sessions: Robotics happening this July',
        authorName: 'Hamina',
        date: '09 Feb 2020',
        icon1: 'bi bi-person-plus',
        icon2: 'i bi-clock'
    }, {
        img: 'blog-07',
        tag: 'Research , Technology',
        desc: 'Finger on your pulse: API-first startup Vivanta hopes to be Plaid for health',
        authorName: 'Anisa Kdar',
        date: '17 Sep 2020',
        icon1: 'bi bi-person-plus',
        icon2: 'i bi-clock'
    }, {
        img: 'blog-08',
        tag: 'Research , Technology',
        desc: 'Fermyon wants to reinvent the way programmers develop microservices',
        authorName: 'Samir Jam',
        date: '21 jan 2021',
        icon1: 'bi bi-person-plus',
        icon2: 'i bi-clock'
    }, {
        img: 'blog-09',
        tag: 'Research , Technology',
        desc: 'Deal terms look different in a downturn. Here’s what to watch out for',
        authorName: 'Chris Hams',
        date: '19 Jun 2222',
        icon1: 'bi bi-person-plus',
        icon2: 'i bi-clock'
    }, {
        img: 'blog-10',
        tag: 'Research , Technology',
        desc: 'Neuron7 raises $10M to help customer service agents find solutions',
        authorName: 'Anisa Kdar',
        date: '21 Jan 2020',
        icon1: 'bi bi-person-plus',
        icon2: 'i bi-clock'
    }, {
        img: 'blog-11',
        tag: 'Research , Technology',
        desc: 'Kibo School gets $2M to offer online STEM degrees to students in Africa',
        authorName: 'Samir jam',
        date: '04 Oct 2022',
        icon1: 'bi bi-person-plus',
        icon2: 'i bi-clock'
    }
]

const BlogStyleTwo = () => {
    return (
        <Fragment>
            <div className="row gx-4 gx-xxl-5">
                {BlogTwoContent.map((val, i)=>(
                    <div key={i} className="col-lg-4 col-md-6">
                        <div className="blog-style-two mb-45">
                            <div className="blog-thumb">
                                <img className="w-100" src={`assets/img/blog/${val.img}.jpg`} alt="img"/>
                            </div>
                            <div className="blog-content">
                                <div className="blog-tag pb-10">
                                    {val.tag}
                                </div>
                                <h3>
                                    <Link className="blog-title" to="/blog-details">{val.desc}</Link>
                                </h3>
                                <div className="blog-meta">
                                    <a href="#" className="mr-20"><i className={val.icon1}/>
                                        {val.authorName}</a>
                                    <a href="#"><i className={val.icon2}/>
                                        {val.date}</a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </Fragment>
    )
}

export default BlogStyleTwo