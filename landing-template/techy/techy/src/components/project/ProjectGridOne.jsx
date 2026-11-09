import React, { Fragment } from 'react'
import { Link } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

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
      img:'project-1',
      tag: 'Web Design',
      pjname: 'Web Analytics',
      dataAos: 'fade-right',
      dataDelay: '50'
    },
    {
      img:'project-2',
      tag: 'Cyber Secure',
      pjname: 'Cyber Security Core',
      dataAos: 'fade-right',
      dataDelay: '100'
    },
    {
      img:'project-3',
      tag: 'Mobile info',
      pjname: 'Upcoming Phone',
      dataAos: 'fade-right',
      dataDelay: '150'
    },
    {
      img:'project-4',
      tag: 'Graphic Design',
      pjname: 'Design The Future',
      dataAos: 'fade-right',
      dataDelay: '50'
    },
    {
      img:'project-5',
      tag: 'Development',
      pjname: 'Web Cycle Develop',
      dataAos: 'fade-right',
      dataDelay: '100'
    },
    {
      img:'project-6',
      tag: 'Apps Development',
      pjname: 'Company Developmnet',
      dataAos: 'fade-right',
      dataDelay: '150'
    },
    {
      img:'project-7',
      tag: 'App Case Study',
      pjname: 'Full Apps Journey',
      dataAos: 'fade-right',
      dataDelay: '50'
    },
    {
      img:'project-8',
      tag: 'Cyber Engineering',
      pjname: 'Specialized Security',
      dataAos: 'fade-right',
      dataDelay: '100'
    },
    {
      img:'project-9',
      tag: 'Chemical Engineering',
      pjname: 'World Medicine Care',
      dataAos: 'fade-right',
      dataDelay: '150'
    },
]
const SoftwareContent = [
    {
      img:'project-1',
      tag: 'Web Design',
      pjname: 'Web Analytics',
      dataAos: 'fade-right',
      dataDelay: '50'
    },
    {
      img:'project-2',
      tag: 'Cyber Secure',
      pjname: 'Cyber Security Core',
      dataAos: 'fade-right',
      dataDelay: '100'
    },
    {
      img:'project-3',
      tag: 'Mobile info',
      pjname: 'Upcoming Phone',
      dataAos: 'fade-right',
      dataDelay: '150'
    },
    {
      img:'project-6',
      tag: 'Apps Development',
      pjname: 'Company Developmnet',
      dataAos: 'fade-right',
      dataDelay: '150'
    },
]
const WebSecurityContent = [
    {
      img:'project-1',
      tag: 'Web Design',
      pjname: 'Web Analytics',
      dataAos: 'fade-right',
      dataDelay: '50'
    },
    {
      img:'project-2',
      tag: 'Cyber Secure',
      pjname: 'Cyber Security Core',
      dataAos: 'fade-right',
      dataDelay: '100'
    },
    {
      img:'project-3',
      tag: 'Mobile info',
      pjname: 'Upcoming Phone',
      dataAos: 'fade-right',
      dataDelay: '150'
    },
    {
      img:'project-4',
      tag: 'Graphic Design',
      pjname: 'Design The Future',
      dataAos: 'fade-right',
      dataDelay: '50'
    },
   
]
const IiSolutionsContent = [
    {
      img:'project-1',
      tag: 'Web Design',
      pjname: 'Web Analytics',
      dataAos: 'fade-right',
      dataDelay: '50'
    },
    {
      img:'project-8',
      tag: 'Cyber Engineering',
      pjname: 'Specialized Security',
      dataAos: 'fade-right',
      dataDelay: '100'
    },
    {
      img:'project-9',
      tag: 'Chemical Engineering',
      pjname: 'World Medicine Care',
      dataAos: 'fade-right',
      dataDelay: '150'
    },
]
const TechnologyContent = [
   
    {
      img:'project-5',
      tag: 'Development',
      pjname: 'Web Cycle Develop',
      dataAos: 'fade-right',
      dataDelay: '100'
    },
    {
      img:'project-6',
      tag: 'Apps Development',
      pjname: 'Company Developmnet',
      dataAos: 'fade-right',
      dataDelay: '150'
    },
    {
      img:'project-7',
      tag: 'App Case Study',
      pjname: 'Full Apps Journey',
      dataAos: 'fade-right',
      dataDelay: '50'
    },
    {
      img:'project-8',
      tag: 'Cyber Engineering',
      pjname: 'Specialized Security',
      dataAos: 'fade-right',
      dataDelay: '100'
    },
    {
      img:'project-9',
      tag: 'Chemical Engineering',
      pjname: 'World Medicine Care',
      dataAos: 'fade-right',
      dataDelay: '150'
    },
]
const CyberSecurityContent = [
   
    {
      img:'project-5',
      tag: 'Development',
      pjname: 'Web Cycle Develop',
      dataAos: 'fade-right',
      dataDelay: '100'
    },
    {
      img:'project-6',
      tag: 'Apps Development',
      pjname: 'Company Developmnet',
      dataAos: 'fade-right',
      dataDelay: '150'
    },
    {
      img:'project-7',
      tag: 'App Case Study',
      pjname: 'Full Apps Journey',
      dataAos: 'fade-right',
      dataDelay: '50'
    },
    {
      img:'project-8',
      tag: 'Cyber Engineering',
      pjname: 'Specialized Security',
      dataAos: 'fade-right',
      dataDelay: '100'
    },
    {
      img:'project-9',
      tag: 'Chemical Engineering',
      pjname: 'World Medicine Care',
      dataAos: 'fade-right',
      dataDelay: '150'
    },
]

const ProjectGridOne = () => {
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
                <div className="row gx-4 gx-xxl-5 feature-slider pe-0">
                   {AllContent.map((val,i)=>(
                     <div key={i} className="col-lg-4 col-md-4 col-sm-6" data-aos={val.dataAos} data-delay={val.dataDelay}>
                        <div className="feature-item mb-40">
                            <Link className="back-bg" to="/project-details"><img className="w-100" src={`assets/img/work/${val.img}.jpg`} alt="img" /></Link>
                            <h5>
                                <Link href="project-details">{val.tag}</Link>
                            </h5>
                            <h3><Link to="/project-details">{val.pjname}</Link></h3>
                        </div>
                    </div>
                   ))}
                </div>
            </TabPanel>
            <TabPanel>
              <div className="grid row gx-4 gx-xxl-5 feature-slider pe-0">
                   {SoftwareContent.map((val,i)=>(
                     <div key={i} className="col-lg-4 col-md-4 col-sm-6 grid-item cat3 cat5" data-aos={val.dataAos} data-delay={val.dataDelay}>
                        <div className="feature-item mb-40">
                            <Link className="back-bg" to="/project-details"><img className="w-100" src={`assets/img/work/${val.img}.jpg`} alt="img" /></Link>
                            <h5>
                                <Link href="project-details">{val.tag}</Link>
                            </h5>
                            <h3><Link to="/project-details">{val.pjname}</Link></h3>
                        </div>
                    </div>
                   ))}
                </div>
            </TabPanel>
            <TabPanel>
            <div className="grid row gx-4 gx-xxl-5 feature-slider pe-0">
                   {WebSecurityContent.map((val,i)=>(
                     <div key={i} className="col-lg-4 col-md-4 col-sm-6 grid-item cat3 cat5" data-aos={val.dataAos} data-delay={val.dataDelay}>
                        <div className="feature-item mb-40">
                            <Link className="back-bg" to="/project-details"><img className="w-100" src={`assets/img/work/${val.img}.jpg`} alt="img" /></Link>
                            <h5>
                                <Link href="project-details">{val.tag}</Link>
                            </h5>
                            <h3><Link to="/project-details">{val.pjname}</Link></h3>
                        </div>
                    </div>
                   ))}
                </div>
            </TabPanel>
            <TabPanel>
              <div className="grid row gx-4 gx-xxl-5 feature-slider pe-0">
                   {IiSolutionsContent.map((val,i)=>(
                     <div key={i} className="col-lg-4 col-md-4 col-sm-6 grid-item cat3 cat5" data-aos={val.dataAos} data-delay={val.dataDelay}>
                        <div className="feature-item mb-40">
                            <Link className="back-bg" to="/project-details"><img className="w-100" src={`assets/img/work/${val.img}.jpg`} alt="img" /></Link>
                            <h5>
                                <Link href="project-details">{val.tag}</Link>
                            </h5>
                            <h3><Link to="/project-details">{val.pjname}</Link></h3>
                        </div>
                    </div>
                   ))}
                </div>
            </TabPanel>
            <TabPanel>
            <div className="grid row gx-4 gx-xxl-5 feature-slider pe-0">
                   {TechnologyContent.map((val,i)=>(
                     <div key={i} className="col-lg-4 col-md-4 col-sm-6 grid-item cat3 cat5" data-aos={val.dataAos} data-delay={val.dataDelay}>
                        <div className="feature-item mb-40">
                            <Link className="back-bg" to="/project-details"><img className="w-100" src={`assets/img/work/${val.img}.jpg`} alt="img" /></Link>
                            <h5>
                                <Link href="project-details">{val.tag}</Link>
                            </h5>
                            <h3><Link to="/project-details">{val.pjname}</Link></h3>
                        </div>
                    </div>
                   ))}
                </div>
            </TabPanel>
            <TabPanel>
            <div className="grid row gx-4 gx-xxl-5 feature-slider pe-0">
                   {CyberSecurityContent.map((val,i)=>(
                     <div key={i} className="col-lg-4 col-md-4 col-sm-6 grid-item cat3 cat5" data-aos={val.dataAos} data-delay={val.dataDelay}>
                        <div className="feature-item mb-40">
                            <Link className="back-bg" to="/project-details"><img className="w-100" src={`assets/img/work/${val.img}.jpg`} alt="cbr-img" /></Link>
                            <h5>
                                <Link href="project-details">{val.tag}</Link>
                            </h5>
                            <h3><Link to="/project-details">{val.pjname}</Link></h3>
                        </div>
                    </div>
                   ))}
                </div>
            </TabPanel>
            
        </Tabs>
    </Fragment>
  )
}

export default ProjectGridOne