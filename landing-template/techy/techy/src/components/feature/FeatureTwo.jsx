import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

const featureContentTwo = [
    {
        icon: 'icon-9a',
        title: 'Create Account',
        desc: 'Interactively provide access to world-class materials for catalysts.',
        dataAos: 'fade-up',
        dataDelay: ''
    },
    {
        icon: 'icon-10a',
        title: 'Read Rules',
        desc: 'Interactively provide access to world-class materials for catalysts.',
        dataAos: 'fade-up',
        dataDelay: '100'
    },
    {
        icon: 'icon-11a',
        title: 'Ask Problemt',
        desc: 'Interactively provide access to world-class materials for catalysts.',
        dataAos: 'fade-up',
        dataDelay: '200'
    },
    {
        icon: 'icon-12a',
        title: 'Get Solution',
        desc: 'Interactively provide access to world-class materials for catalysts.',
        dataAos: 'fade-up',
        dataDelay: '300'
    },
    {
        icon: 'icon-10a',
        title: 'Well Document',
        desc: 'Interactively provide access to world-class materials for catalysts.',
        dataAos: 'fade-up',
        dataDelay: '400'
    },
]

const FeatureTwo = () => {
  return (
    <Fragment>
        {featureContentTwo.map((val, i)=>(
            <div key={i} className="col-lg-4 col-md-6" data-aos={val.dataAos} data-aos-delay={val.dataDelay}>
                <div className="feature-style-two mb-45">
                    <div className="icon"><img src={`assets/img/icon/${val.icon}.png`}alt="icon" /></div>
                    <h3>
                        <Link to="faq">{val.title}</Link>
                    </h3>
                    <p>{val.desc}</p>
                </div>
            </div>
        ))}              
    </Fragment>
  )
}

export default FeatureTwo