import React, {Fragment} from 'react'
import { Link } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"


const TabListContent = [
    'All',
    'Software',
    'Web Security',
    'IT Solutions',
    'Technology',
    'Cyber Security',
];

const AllContent = [
    {
        img: 'blog-12',
        tag: 'Research , Technology',
        desc: 'Google is removing the Movies & TV section from the Play Store',
        authorName: 'Samir Jam',
        date: '21 Jan 2022',
        icon1: 'bi bi-person-plus',
        icon2: 'i bi-clock'
    }, {
        img: 'blog-13',
        tag: 'Research , Technology',
        desc: 'Twitter asks shareholders to approve the $44 billion Elon Musk takeover',
        authorName: 'Anisa Kdar',
        date: '02 Aug 2022',
        icon1: 'bi bi-person-plus',
        icon2: 'i bi-clock'
    }, {
        img: 'blog-14',
        tag: 'Research , Technology',
        desc: 'Where Minds Meet Machines: The Future of Robotics',
        authorName: 'Samir Jam',
        date: '21 Jan 2022',
        icon1: 'bi bi-person-plus',
        icon2: 'i bi-clock'
    }, {
        img: 'blog-17',
        tag: 'Research , Technology',
        desc: 'Fermyon wants to reinvent the way programmers develop microservices',
        authorName: 'Hamina',
        date: '09 Feb 2020',
        icon1: 'bi bi-person-plus',
        icon2: 'i bi-clock'
    }, {
        img: 'blog-15',
        tag: 'Research , Technology',
        desc: 'Announcing the full agenda for TC Sessions: Robotics happening this July',
        authorName: 'Anisa Kdar',
        date: '17 Sep 2020',
        icon1: 'bi bi-person-plus',
        icon2: 'i bi-clock'
    }, {
        img: 'blog-16',
        tag: 'Research , Technology',
        desc: 'Finger on your pulse: API-first startup Vivanta hopes to be Plaid for health',
        authorName: 'Samir Jam',
        date: '21 jan 2021',
        icon1: 'bi bi-person-plus',
        icon2: 'i bi-clock'
    }, {
        img: 'blog-20',
        tag: 'Research , Technology',
        desc: 'Kibo School gets $2M to offer online STEM degrees to students in Africa',
        authorName: 'Chris Hams',
        date: '19 Jun 2222',
        icon1: 'bi bi-person-plus',
        icon2: 'i bi-clock'
    }, {
        img: 'blog-18',
        tag: 'Research , Technology',
        desc: 'Deal terms look different in a downturn. Here’s what to watch out for',
        authorName: 'Samir Jam',
        date: '21 Jan 2020',
        icon1: 'bi bi-person-plus',
        icon2: 'i bi-clock'
    }, {
        img: 'blog-19',
        tag: 'Research , Technology',
        desc: 'Neuron7 raises $10M to help customer service agents find solutions',
        authorName: 'Hamina Hasan',
        date: '04 Oct 2022',
        icon1: 'bi bi-person-plus',
        icon2: 'i bi-clock'
    }
];
const SoftwareContent = [
    {
        img: 'blog-14',
        tag: 'Research , Technology',
        desc: 'Where Minds Meet Machines: The Future of Robotics',
        authorName: 'Samir Jam',
        date: '21 Jan 2022',
        icon1: 'bi bi-person-plus',
        icon2: 'i bi-clock'
    }, {
        img: 'blog-17',
        tag: 'Research , Technology',
        desc: 'Fermyon wants to reinvent the way programmers develop microservices',
        authorName: 'Hamina',
        date: '09 Feb 2020',
        icon1: 'bi bi-person-plus',
        icon2: 'i bi-clock'
    }, {
        img: 'blog-15',
        tag: 'Research , Technology',
        desc: 'Announcing the full agenda for TC Sessions: Robotics happening this July',
        authorName: 'Anisa Kdar',
        date: '17 Sep 2020',
        icon1: 'bi bi-person-plus',
        icon2: 'i bi-clock'
    }, {
        img: 'blog-16',
        tag: 'Research , Technology',
        desc: 'Finger on your pulse: API-first startup Vivanta hopes to be Plaid for health',
        authorName: 'Samir Jam',
        date: '21 jan 2021',
        icon1: 'bi bi-person-plus',
        icon2: 'i bi-clock'
    },  {
        img: 'blog-19',
        tag: 'Research , Technology',
        desc: 'Neuron7 raises $10M to help customer service agents find solutions',
        authorName: 'Hamina Hasan',
        date: '04 Oct 2022',
        icon1: 'bi bi-person-plus',
        icon2: 'i bi-clock'
    }
];
const WebSecurityContent = [
     {
        img: 'blog-14',
        tag: 'Research , Technology',
        desc: 'Where Minds Meet Machines: The Future of Robotics',
        authorName: 'Samir Jam',
        date: '21 Jan 2022',
        icon1: 'bi bi-person-plus',
        icon2: 'i bi-clock'
    }, {
        img: 'blog-17',
        tag: 'Research , Technology',
        desc: 'Fermyon wants to reinvent the way programmers develop microservices',
        authorName: 'Hamina',
        date: '09 Feb 2020',
        icon1: 'bi bi-person-plus',
        icon2: 'i bi-clock'
    }, {
        img: 'blog-15',
        tag: 'Research , Technology',
        desc: 'Announcing the full agenda for TC Sessions: Robotics happening this July',
        authorName: 'Anisa Kdar',
        date: '17 Sep 2020',
        icon1: 'bi bi-person-plus',
        icon2: 'i bi-clock'
    }, {
        img: 'blog-16',
        tag: 'Research , Technology',
        desc: 'Finger on your pulse: API-first startup Vivanta hopes to be Plaid for health',
        authorName: 'Samir Jam',
        date: '21 jan 2021',
        icon1: 'bi bi-person-plus',
        icon2: 'i bi-clock'
    }, {
        img: 'blog-19',
        tag: 'Research , Technology',
        desc: 'Neuron7 raises $10M to help customer service agents find solutions',
        authorName: 'Hamina Hasan',
        date: '04 Oct 2022',
        icon1: 'bi bi-person-plus',
        icon2: 'i bi-clock'
    }
];
const ITContent = [
    {
        img: 'blog-12',
        tag: 'Research , Technology',
        desc: 'Google is removing the Movies & TV section from the Play Store',
        authorName: 'Samir Jam',
        date: '21 Jan 2022',
        icon1: 'bi bi-person-plus',
        icon2: 'i bi-clock'
    }, {
        img: 'blog-13',
        tag: 'Research , Technology',
        desc: 'Twitter asks shareholders to approve the $44 billion Elon Musk takeover',
        authorName: 'Anisa Kdar',
        date: '02 Aug 2022',
        icon1: 'bi bi-person-plus',
        icon2: 'i bi-clock'
    },  {
        img: 'blog-15',
        tag: 'Research , Technology',
        desc: 'Announcing the full agenda for TC Sessions: Robotics happening this July',
        authorName: 'Anisa Kdar',
        date: '17 Sep 2020',
        icon1: 'bi bi-person-plus',
        icon2: 'i bi-clock'
    },  {
        img: 'blog-18',
        tag: 'Research , Technology',
        desc: 'Deal terms look different in a downturn. Here’s what to watch out for',
        authorName: 'Samir Jam',
        date: '21 Jan 2020',
        icon1: 'bi bi-person-plus',
        icon2: 'i bi-clock'
    }, 
];
const TechnologyContent = [
    {
        img: 'blog-17',
        tag: 'Research , Technology',
        desc: 'Fermyon wants to reinvent the way programmers develop microservices',
        authorName: 'Hamina',
        date: '09 Feb 2020',
        icon1: 'bi bi-person-plus',
        icon2: 'i bi-clock'
    }, {
        img: 'blog-15',
        tag: 'Research , Technology',
        desc: 'Announcing the full agenda for TC Sessions: Robotics happening this July',
        authorName: 'Anisa Kdar',
        date: '17 Sep 2020',
        icon1: 'bi bi-person-plus',
        icon2: 'i bi-clock'
    }, {
        img: 'blog-16',
        tag: 'Research , Technology',
        desc: 'Finger on your pulse: API-first startup Vivanta hopes to be Plaid for health',
        authorName: 'Samir Jam',
        date: '21 jan 2021',
        icon1: 'bi bi-person-plus',
        icon2: 'i bi-clock'
    }, 
];
const CyberSecurityContent = [
     {
        img: 'blog-13',
        tag: 'Research , Technology',
        desc: 'Twitter asks shareholders to approve the $44 billion Elon Musk takeover',
        authorName: 'Anisa Kdar',
        date: '02 Aug 2022',
        icon1: 'bi bi-person-plus',
        icon2: 'i bi-clock'
    }, {
        img: 'blog-16',
        tag: 'Research , Technology',
        desc: 'Finger on your pulse: API-first startup Vivanta hopes to be Plaid for health',
        authorName: 'Samir Jam',
        date: '21 jan 2021',
        icon1: 'bi bi-person-plus',
        icon2: 'i bi-clock'
    }, {
        img: 'blog-18',
        tag: 'Research , Technology',
        desc: 'Deal terms look different in a downturn. Here’s what to watch out for',
        authorName: 'Samir Jam',
        date: '21 Jan 2020',
        icon1: 'bi bi-person-plus',
        icon2: 'i bi-clock'
    }, 
];

const BlogStyleThree = () => {
    return (
        <Fragment>
            <Tabs>
            <TabList className="row justify-content-center">
                <div className="col-xxl-10 text-center">
                    <div className="portfolio-menu mb-40">
                    {TabListContent.map((tab,i)=>(
                        <Tab key={i} className="gf_btn">{tab}</Tab>
                        ))}
                    </div>
                </div>
            </TabList>
                <TabPanel>
                  <ResponsiveMasonry columnsCountBreakPoints={{350: 1,  767.98: 2, 991.98: 3}}>
                      <Masonry gutter="30px">
                        {AllContent.map((val,i)=>(
                            <div key={i} className="blog-style-two style-three mb-35">
                                <div className="blog-thumb">
                                    <img className="w-100" src={`assets/img/blog/${val.img}.jpg`} alt="img" />
                                    </div>
                                    <div className="blog-content">
                                    <div className="blog-tag pb-10">
                                        {val.tag}
                                    </div>
                                    <h3><Link className="blog-title" to="/blog-details">{val.desc}</Link></h3>
                                    <div className="blog-meta">
                                        <a href="#" className="mr-lg-5 mr-20"><i className={val.icon1} /> {val.authorName}</a>
                                        <a href="#"><i className={val.icon2} /> {val.date}</a>
                                    </div>
                                </div>
                            </div>
                            ))}
                      </Masonry>
                  </ResponsiveMasonry>
                </TabPanel>
                <TabPanel>  
                  <ResponsiveMasonry columnsCountBreakPoints={{350: 1,  767.98: 2, 991.98: 3}}>
                      <Masonry gutter="30px">
                      {SoftwareContent.map((val,i)=>(
                           <div key={i} className="blog-style-two style-three mb-35">
                                <div className="blog-thumb">
                                    <img className="w-100" src={`assets/img/blog/${val.img}.jpg`} alt="img" />
                                    </div>
                                    <div className="blog-content">
                                    <div className="blog-tag pb-10">
                                        {val.tag}
                                    </div>
                                    <h3><Link className="blog-title" to="/blog-details">{val.desc}</Link></h3>
                                    <div className="blog-meta">
                                        <a href="#" className="mr-lg-5 mr-20"><i className={val.icon1} /> {val.authorName}</a>
                                        <a href="#"><i className={val.icon2} /> {val.date}</a>
                                    </div>
                                </div>
                            </div>
                          ))}
                      </Masonry>
                  </ResponsiveMasonry>
                </TabPanel>
                <TabPanel>
                <ResponsiveMasonry columnsCountBreakPoints={{350: 1,  767.98: 2, 991.98: 3}}>
                      <Masonry gutter="30px">
                      {WebSecurityContent.map((val,i)=>(
                           <div key={i} className="blog-style-two style-three mb-35">
                                <div className="blog-thumb">
                                    <img className="w-100" src={`assets/img/blog/${val.img}.jpg`} alt="img" />
                                    </div>
                                    <div className="blog-content">
                                    <div className="blog-tag pb-10">
                                        {val.tag}
                                    </div>
                                    <h3><Link className="blog-title" to="/blog-details">{val.desc}</Link></h3>
                                    <div className="blog-meta">
                                        <a href="#" className="mr-lg-5 mr-20"><i className={val.icon1} /> {val.authorName}</a>
                                        <a href="#"><i className={val.icon2} /> {val.date}</a>
                                    </div>
                                </div>
                            </div>
                          ))}
                      </Masonry>
                  </ResponsiveMasonry>
                </TabPanel>
                <TabPanel>
                <ResponsiveMasonry columnsCountBreakPoints={{350: 1,  767.98: 2, 991.98: 3}}>
                      <Masonry gutter="30px">
                      {ITContent.map((val,i)=>(
                           <div key={i} className="blog-style-two style-three mb-35">
                                <div className="blog-thumb">
                                    <img className="w-100" src={`assets/img/blog/${val.img}.jpg`} alt="img" />
                                    </div>
                                    <div className="blog-content">
                                    <div className="blog-tag pb-10">
                                        {val.tag}
                                    </div>
                                    <h3><Link className="blog-title" to="/blog-details">{val.desc}</Link></h3>
                                    <div className="blog-meta">
                                        <a href="#" className="mr-lg-5 mr-20"><i className={val.icon1} /> {val.authorName}</a>
                                        <a href="#"><i className={val.icon2} /> {val.date}</a>
                                    </div>
                                </div>
                            </div>
                          ))}
                      </Masonry>
                  </ResponsiveMasonry>
                </TabPanel>
                <TabPanel>
                <ResponsiveMasonry columnsCountBreakPoints={{350: 1,  767.98: 2, 991.98: 3}}>
                      <Masonry gutter="30px">
                      {TechnologyContent.map((val,i)=>(
                           <div key={i} className="blog-style-two style-three mb-35">
                                <div className="blog-thumb">
                                    <img className="w-100" src={`assets/img/blog/${val.img}.jpg`} alt="img" />
                                    </div>
                                    <div className="blog-content">
                                    <div className="blog-tag pb-10">
                                        {val.tag}
                                    </div>
                                    <h3><Link className="blog-title" to="/blog-details">{val.desc}</Link></h3>
                                    <div className="blog-meta">
                                        <a href="#" className="mr-lg-5 mr-20"><i className={val.icon1} /> {val.authorName}</a>
                                        <a href="#"><i className={val.icon2} /> {val.date}</a>
                                    </div>
                                </div>
                            </div>
                          ))}
                      </Masonry>
                  </ResponsiveMasonry>
                </TabPanel>
                <TabPanel>
                <ResponsiveMasonry columnsCountBreakPoints={{350: 1,  767.98: 2, 991.98: 3}}>
                      <Masonry gutter="30px">
                      {CyberSecurityContent.map((val,i)=>(
                           <div key={i} className="blog-style-two style-three mb-35">
                                <div className="blog-thumb">
                                    <img className="w-100" src={`assets/img/blog/${val.img}.jpg`} alt="img" />
                                    </div>
                                    <div className="blog-content">
                                    <div className="blog-tag pb-10">
                                        {val.tag}
                                    </div>
                                    <h3><Link className="blog-title" to="/blog-details">{val.desc}</Link></h3>
                                    <div className="blog-meta">
                                        <a href="#" className="mr-lg-5 mr-20"><i className={val.icon1} /> {val.authorName}</a>
                                        <a href="#"><i className={val.icon2} /> {val.date}</a>
                                    </div>
                                </div>
                            </div>
                          ))}
                      </Masonry>
                  </ResponsiveMasonry>
                </TabPanel>
                
        </Tabs>
        </Fragment>
    )
}

export default BlogStyleThree


