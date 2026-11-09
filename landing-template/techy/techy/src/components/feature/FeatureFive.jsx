import React, {Fragment} from 'react'
import { Link } from 'react-router-dom'


const featureContent = [
   {
    img: 'icon-33c',
    title: 'Virus Protection',
    desc: 'Dramatically supply transparent backward deliverables before caward comp internal or "organic" sources.',
    dataAos:'fade-up',
    dataDelay: ''
   },
   {
    img: 'icon-34c',
    title: 'Cloud Security',
    desc: 'Dramatically supply transparent backward deliverables before caward comp internal or "organic" sources.',
    dataAos:'fade-up',
    dataDelay: '100'
   },
   {
    img: 'icon-35c',
    title: 'Locker Security',
    desc: 'Dramatically supply transparent backward deliverables before caward comp internal or "organic" sources.',
    dataAos:'fade-up',
    dataDelay: '200'
   },
   {
    img: 'icon-36c',
    title: 'Database Security',
    desc: 'Dramatically supply transparent backward deliverables before caward comp internal or "organic" sources.',
    dataAos:'fade-up',
    dataDelay: '250'
   },
   {
    img: 'icon-37c',
    title: 'Web Security',
    desc: 'Dramatically supply transparent backward deliverables before caward comp internal or "organic" sources.',
    dataAos:'fade-up',
    dataDelay: '300'
   },
   {
    img: 'icon-38c',
    title: 'Domain Hijacking',
    desc: 'Dramatically supply transparent backward deliverables before caward comp internal or "organic" sources.',
    dataAos:'fade-up',
    dataDelay: '350'
   },
]

const FeatureFive = () => {
    return (
        <Fragment>
            <div className="row gx-4 gx-xxl-5">
                {featureContent.map((val, i)=>(
                    <div key={i} className="col-lg-4 col-md-6" data-aos={val.dataAos} data-aos-delay={val.dataDelay}>
                        <div className="feature-style-five mb-45">
                            <div className="icon mb-30">
                                <img src={`assets/img/icon/${val.img}.svg`}alt="icon"/>
                            </div>
                            <h2 className="mb-20">
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

export default FeatureFive