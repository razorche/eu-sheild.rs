import React, {Fragment} from 'react'
import { Link } from 'react-router-dom'

const featuresContent =[
    {
        img:'line-round-5b',
        icon:'icon-18b',
        title:'Software Develop',
        desc:'Dramatically supply transparent backward deliverables before caward comp internal or organic" sources.',
        dataAos:'fade-up',
        dataAosDown:'fade-down',
        dataDelay: '',
        dataDelayDown: '100',
    },
    {
        img:'line-round-5b',
        icon:'icon-19b',
        title:'Web Developmet',
        desc:'Dramatically supply transparent backward deliverables before caward comp internal or "organic" sources.',
        dataAos:'fade-up',
        dataAosDown:'fade-down',
        dataDelay: '100',
        dataDelayDown: '100',
    },
    {
        img:'line-round-5b',
        icon:'icon-20b',
        title:'UI/UX Design',
        desc:'Dramatically supply transparent backward deliverables before caward comp internal or "organic" sources.',
        dataAos:'fade-up',
        dataAosDown:'fade-down',
        dataDelay: '150',
        dataDelayDown: '100',
    },
    {
        img:'line-round-5b',
        icon:'icon-21b',
        title:'Web Security',
        desc:'Dramatically supply transparent backward deliverables before caward comp internal or "organic" sources.',
        dataAos:'fade-up',
        dataAosDown:'fade-down',
        dataDelay: '200',
        dataDelayDown: '100',
    },
    {
        img:'line-round-5b',
        icon:'icon-22b',
        title:'Apps Development',
        desc:'Dramatically supply transparent backward deliverables before caward comp internal or "organic" sources.',
        dataAos:'fade-up',
        dataAosDown:'fade-down',
        dataDelay: '250',
        dataDelayDown: '100',
    },
    {
        img:'line-round-5b',
        icon:'icon-23b',
        title:'Programming',
        desc:'Dramatically supply transparent backward deliverables before caward comp internal or "organic" sources.',
        dataAos:'fade-up',
        dataAosDown:'fade-down',
        dataDelay: '250',
        dataDelayDown: '100',
    },
]

const FeatureFour = () => {
    return (
        <Fragment>
            <div className="row gx-4 gx-xxl-5">
                {featuresContent.map((val,i)=>(
                    <div key={i} className="col-lg-4 col-md-6" data-aos={val.dataAos} data-aos-delay={val.dataDelay}>
                    <div className="feature-style-four mb-45">
                        <img
                            className="shape-over"
                            data-aos={val.dataAosDown}
                            data-aos-delay={val.dataDelayDown}
                            src={`assets/img/shape/${val.img}.svg`}
                            alt="shape"/>
                        <img src={`assets/img/icon/${val.icon}.svg`} alt="icon"/>
                        <h2>
                            <Link className="sect-title-two" to="/services-details">{val.title}</Link>
                        </h2>
                        <p>{val.desc}</p>
                    </div>
                </div>
                ))}
            </div>
        </Fragment>
    )
}

export default FeatureFour