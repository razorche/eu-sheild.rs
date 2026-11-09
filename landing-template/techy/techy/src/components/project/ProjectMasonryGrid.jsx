import React, { Fragment } from 'react'
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
      img:'case-4c',
      tag: 'Web Design',
      pjname: 'Web Analytics',
      desc: 'Dramatically supply transparent backward deliverables before caward comp internal or "organic" sources.',
      icon: 'bi bi-arrow-up-right',
      dataAos: 'fade-right',
      dataDelay: '50'
    },
    
    {
      img:'case-4c',
      tag: 'Cyber Secure',
      pjname: 'Cyber Security Core',
      desc: 'Dramatically supply transparent backward deliverables before caward comp internal or "organic" sources.',
      icon: 'bi bi-arrow-up-right',
      dataAos: 'fade-right',
      dataDelay: '100'
    },
    
    {
      img:'case-6c',
      tag: 'Web Design',
      pjname: 'Design For Future',
      desc: 'Dramatically supply transparent backward deliverables before caward comp internal or "organic" sources.',
      icon: 'bi bi-arrow-up-right',
      dataAos: 'fade-right',
      dataDelay: '150'
    },
    
    {
      img:'case-9c',
      tag: 'Higher Study For',
      pjname: 'Web Cycle Develop',
      desc: 'Dramatically supply transparent backward deliverables before caward comp internal or "organic" sources.',
      icon: 'bi bi-arrow-up-right',
      dataAos: 'fade-right',
      dataDelay: '100'
    },
    {
      img:'case-7c',
      tag: 'Web Development',
      pjname: 'Futuristic Apps',
      desc: 'Dramatically supply transparent backward deliverables before caward comp internal or "organic" sources.',
      icon: 'bi bi-arrow-up-right',
      dataAos: 'fade-right',
      dataDelay: '50'
    },
    {
      img:'case-8c',
      tag: 'Software Development',
      pjname: 'Handy Soft For All',
      desc: 'Dramatically supply transparent backward deliverables before caward comp internal or "organic" sources.',
      icon: 'bi bi-arrow-up-right',
      dataAos: 'fade-right',
      dataDelay: '150'
    },
    {
      img:'case-12c',
      tag: 'It Solution',
      pjname: 'Solved All Issues',
      desc: 'Dramatically supply transparent backward deliverables before caward comp internal or "organic" sources.',
      icon: 'bi bi-arrow-up-right',
      dataAos: 'fade-right',
      dataDelay: '50'
    },
    {
      img:'case-10c',
      tag: 'Machine Learning',
      pjname: 'Gain Knowledge',
      desc: 'Dramatically supply transparent backward deliverables before caward comp internal or "organic" sources.',
      icon: 'bi bi-arrow-up-right',
      dataAos: 'fade-right',
      dataDelay: '100'
    },
    {
      img:'case-11c',
      tag: 'Programming',
      pjname: 'Hero Programmer',
      desc: 'Dramatically supply transparent backward deliverables before caward comp internal or "organic" sources.',
      icon: 'bi bi-arrow-up-right',
      dataAos: 'fade-right',
      dataDelay: '150'
    },
]
const SoftwareContent = [
    {
      img:'case-4c',
      tag: 'Web Design',
      pjname: 'Web Analytics',
      desc: 'Dramatically supply transparent backward deliverables before caward comp internal or "organic" sources.',
      icon: 'bi bi-arrow-up-right',
      dataAos: 'fade-right',
      dataDelay: '50'
    },
    {
      img:'case-6c',
      tag: 'Web Design',
      pjname: 'Design For Future',
      desc: 'Dramatically supply transparent backward deliverables before caward comp internal or "organic" sources.',
      icon: 'bi bi-arrow-up-right',
      dataAos: 'fade-right',
      dataDelay: '150'
    },
    {
      img:'case-8c',
      tag: 'Software Development',
      pjname: 'Handy Soft For All',
      desc: 'Dramatically supply transparent backward deliverables before caward comp internal or "organic" sources.',
      icon: 'bi bi-arrow-up-right',
      dataAos: 'fade-right',
      dataDelay: '150'
    },
]
const WebSecurityContent = [

    {
      img:'case-5c',
      tag: 'Cyber Secure',
      pjname: 'Cyber Security Core',
      desc: 'Dramatically supply transparent backward deliverables before caward comp internal or "organic" sources.',
      icon: 'bi bi-arrow-up-right',
      dataAos: 'fade-right',
      dataDelay: '100'
    },
    {
      img:'case-6c',
      tag: 'Web Design',
      pjname: 'Design For Future',
      desc: 'Dramatically supply transparent backward deliverables before caward comp internal or "organic" sources.',
      icon: 'bi bi-arrow-up-right',
      dataAos: 'fade-right',
      dataDelay: '150'
    },
    {
      img:'case-7c',
      tag: 'Web Development',
      pjname: 'Futuristic Apps',
      desc: 'Dramatically supply transparent backward deliverables before caward comp internal or "organic" sources.',
      icon: 'bi bi-arrow-up-right',
      dataAos: 'fade-right',
      dataDelay: '50'
    },
   
]
const IiSolutionsContent = [
    {
      img:'case-4c',
      tag: 'Web Design',
      pjname: 'Web Analytics',
      desc: 'Dramatically supply transparent backward deliverables before caward comp internal or "organic" sources.',
      icon: 'bi bi-arrow-up-right',
      dataAos: 'fade-right',
      dataDelay: '50'
    },
    {
      img:'case-10c',
      tag: 'Machine Learning',
      pjname: 'Gain Knowledge',
      desc: 'Dramatically supply transparent backward deliverables before caward comp internal or "organic" sources.',
      icon: 'bi bi-arrow-up-right',
      dataAos: 'fade-right',
      dataDelay: '100'
    },
    {
      img:'case-11c',
      tag: 'Programming',
      pjname: 'Hero Programmer',
      desc: 'Dramatically supply transparent backward deliverables before caward comp internal or "organic" sources.',
      icon: 'bi bi-arrow-up-right',
      dataAos: 'fade-right',
      dataDelay: '150'
    },
]
const TechnologyContent = [
   
    {
      img:'case-9c',
      tag: 'Higher Study For',
      pjname: 'Web Cycle Develop',
      desc: 'Dramatically supply transparent backward deliverables before caward comp internal or "organic" sources.',
      icon: 'bi bi-arrow-up-right',
      dataAos: 'fade-right',
      dataDelay: '100'
    },
    {
      img:'case-8c',
      tag: 'Software Development',
      pjname: 'Handy Soft For All',
      desc: 'Dramatically supply transparent backward deliverables before caward comp internal or "organic" sources.',
      icon: 'bi bi-arrow-up-right',
      dataAos: 'fade-right',
      dataDelay: '150'
    },
    {
      img:'case-12c',
      tag: 'It Solution',
      pjname: 'Solved All Issues',
      desc: 'Dramatically supply transparent backward deliverables before caward comp internal or "organic" sources.',
      icon: 'bi bi-arrow-up-right',
      dataAos: 'fade-right',
      dataDelay: '50'
    },
    {
      img:'case-10c',
      tag: 'Machine Learning',
      pjname: 'Gain Knowledge',
      desc: 'Dramatically supply transparent backward deliverables before caward comp internal or "organic" sources.',
      icon: 'bi bi-arrow-up-right',
      dataAos: 'fade-right',
      dataDelay: '100'
    },
    {
      img:'case-11c',
      tag: 'Programming',
      pjname: 'Hero Programmer',
      desc: 'Dramatically supply transparent backward deliverables before caward comp internal or "organic" sources.',
      icon: 'bi bi-arrow-up-right',
      dataAos: 'fade-right',
      dataDelay: '150'
    },
]
const CyberSecurityContent = [
   
    {
      img:'case-9c',
      tag: 'Higher Study For',
      pjname: 'Web Cycle Develop',
      desc: 'Dramatically supply transparent backward deliverables before caward comp internal or "organic" sources.',
      icon: 'bi bi-arrow-up-right',
      dataAos: 'fade-right',
      dataDelay: '100'
    },
    {
      img:'case-8c',
      tag: 'Software Development',
      pjname: 'Handy Soft For All',
      desc: 'Dramatically supply transparent backward deliverables before caward comp internal or "organic" sources.',
      icon: 'bi bi-arrow-up-right',
      dataAos: 'fade-right',
      dataDelay: '150'
    },
    {
      img:'case-12c',
      tag: 'It Solution',
      pjname: 'Solved All Issues',
      desc: 'Dramatically supply transparent backward deliverables before caward comp internal or "organic" sources.',
      icon: 'bi bi-arrow-up-right',
      dataAos: 'fade-right',
      dataDelay: '50'
    },
    {
      img:'case-10c',
      tag: 'Machine Learning',
      pjname: 'Gain Knowledge',
      desc: 'Dramatically supply transparent backward deliverables before caward comp internal or "organic" sources.',
      icon: 'bi bi-arrow-up-right',
      dataAos: 'fade-right',
      dataDelay: '100'
    },
    {
      img:'case-11c',
      tag: 'Programming',
      pjname: 'Hero Programmer',
      desc: 'Dramatically supply transparent backward deliverables before caward comp internal or "organic" sources.',
      icon: 'bi bi-arrow-up-right',
      dataAos: 'fade-right',
      dataDelay: '150'
    },
]

const ProjectMasonryGrid = () => {
  return (
    <Fragment>
        <Tabs>
            <TabList className="row justify-content-center ps-0">
                <div className="col-xxl-10 text-center">
                    <div className="portfolio-menu mb-40">
                    {TabListContent.map((tab,i)=>(
                        <Tab key={i} className="gf_btn">{tab}</Tab>
                        ))}
                    </div>
                </div>
            </TabList>
                <TabPanel className="project-tabpanel-masonry">
                  <ResponsiveMasonry columnsCountBreakPoints={{350: 1,  767.98: 2, 991.98: 3}}>
                      <Masonry className="row">
                      {AllContent.map((val,i)=>(
                          <div key={i} data-aos={val.dataAos} data-delay={val.dataDelay}>
                              <div className="case-item-one mx-0 mb-45">
                                    <div className="case-thumb">
                                        <img className="w-100" src={`assets/img/work/${val.img}.jpg`} alt="img" />
                                    </div>
                                    <div className="case-content">
                                        <span>{val.tag}</span>
                                        <h3><Link className="sect-title-two" to="/project-details">{val.pjname}</Link></h3>
                                        <p>{val.desc}</p>
                                        <Link className="case-btn" to="/project-details"><i className={val.icon} /></Link>
                                    </div>
                                </div>
                          </div>
                        ))}
                      </Masonry>
                  </ResponsiveMasonry>
                </TabPanel>
                <TabPanel>  
                  <ResponsiveMasonry columnsCountBreakPoints={{350: 1,  767.98: 2, 991.98: 3}}>
                      <Masonry className="row">
                      {SoftwareContent.map((val,i)=>(
                            <div key={i} data-aos={val.dataAos} data-delay={val.dataDelay}>
                              <div className="case-item-one mx-0 mb-45">
                                    <div className="case-thumb">
                                        <img className="w-100" src={`assets/img/work/${val.img}.jpg`} alt="img" />
                                    </div>
                                    <div className="case-content">
                                        <span>{val.tag}</span>
                                        <h3><Link className="sect-title-two" to="/project-details">{val.pjname}</Link></h3>
                                        <p>{val.desc}</p>
                                        <Link className="case-btn" to="/project-details"><i className={val.icon} /></Link>
                                    </div>
                                </div>
                          </div>
                          ))}
                      </Masonry>
                  </ResponsiveMasonry>
                </TabPanel>
                <TabPanel>
                <ResponsiveMasonry columnsCountBreakPoints={{350: 1,  767.98: 2, 991.98: 3}}>
                      <Masonry className="row">
                      {WebSecurityContent.map((val,i)=>(
                            <div key={i} data-aos={val.dataAos} data-delay={val.dataDelay}>
                              <div className="case-item-one mx-0 mb-45">
                                    <div className="case-thumb">
                                        <img className="w-100" src={`assets/img/work/${val.img}.jpg`} alt="img" />
                                    </div>
                                    <div className="case-content">
                                        <span>{val.tag}</span>
                                        <h3><Link className="sect-title-two" to="/project-details">{val.pjname}</Link></h3>
                                        <p>{val.desc}</p>
                                        <Link className="case-btn" to="/project-details"><i className={val.icon} /></Link>
                                    </div>
                                </div>
                          </div>
                          ))}
                      </Masonry>
                  </ResponsiveMasonry>
                </TabPanel>
                <TabPanel>
                <ResponsiveMasonry columnsCountBreakPoints={{350: 1,  767.98: 2, 991.98: 3}}>
                      <Masonry className="row">
                      {IiSolutionsContent.map((val,i)=>(
                            <div key={i} data-aos={val.dataAos} data-delay={val.dataDelay}>
                              <div className="case-item-one mx-0 mb-45">
                                    <div className="case-thumb">
                                        <img className="w-100" src={`assets/img/work/${val.img}.jpg`} alt="img" />
                                    </div>
                                    <div className="case-content">
                                        <span>{val.tag}</span>
                                        <h3><Link className="sect-title-two" to="/project-details">{val.pjname}</Link></h3>
                                        <p>{val.desc}</p>
                                        <Link className="case-btn" to="/project-details"><i className={val.icon} /></Link>
                                    </div>
                                </div>
                          </div>
                          ))}
                      </Masonry>
                  </ResponsiveMasonry>
                </TabPanel>
                <TabPanel>
                <ResponsiveMasonry columnsCountBreakPoints={{350: 1,  767.98: 2, 991.98: 3}}>
                      <Masonry className="row">
                      {TechnologyContent.map((val,i)=>(
                            <div key={i} data-aos={val.dataAos} data-delay={val.dataDelay}>
                              <div className="case-item-one mx-0 mb-45">
                                    <div className="case-thumb">
                                        <img className="w-100" src={`assets/img/work/${val.img}.jpg`} alt="img" />
                                    </div>
                                    <div className="case-content">
                                        <span>{val.tag}</span>
                                        <h3><Link className="sect-title-two" to="/project-details">{val.pjname}</Link></h3>
                                        <p>{val.desc}</p>
                                        <Link className="case-btn" to="/project-details"><i className={val.icon} /></Link>
                                    </div>
                                </div>
                          </div>
                          ))}
                      </Masonry>
                  </ResponsiveMasonry>
                </TabPanel>
                <TabPanel>
                <ResponsiveMasonry columnsCountBreakPoints={{350: 1,  767.98: 2, 991.98: 3}}>
                      <Masonry className="row">
                      {CyberSecurityContent.map((val,i)=>(
                            <div key={i} data-aos={val.dataAos} data-delay={val.dataDelay}>
                              <div className="case-item-one mx-0 mb-45">
                                    <div className="case-thumb">
                                        <img className="w-100" src={`assets/img/work/${val.img}.jpg`} alt="img" />
                                    </div>
                                    <div className="case-content">
                                        <span>{val.tag}</span>
                                        <h3><Link className="sect-title-two" to="/project-details">{val.pjname}</Link></h3>
                                        <p>{val.desc}</p>
                                        <Link className="case-btn" to="/project-details"><i className={val.icon} /></Link>
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

export default ProjectMasonryGrid