import React, {Fragment} from 'react'
import { Link } from 'react-router-dom'

const featureContent = [
    {
        arrow: 'bi bi-arrow-up-right',
        frontIcon: 'icon-3a',
        backIcon: 'icon-3w',
        title: 'Web Design',
        desc: 'Dramatically supply transparent backward deliverables before caward comp internal or "organic" sources.',
        pview: '324 Projects',
        dataAos:'fade-up',
        dataDelay:''
    }, {
        arrow: 'bi bi-arrow-up-right',
        frontIcon: 'icon-4a',
        backIcon: 'icon-4w',
        title: 'Web Developmet',
        desc: 'Dramatically supply transparent backward deliverables before caward comp internal or "organic" sources.',
        pview: '420 Projects',
        dataAos:'fade-up',
        dataDelay:'50'
    }, {
        arrow: 'bi bi-arrow-up-right',
        frontIcon: 'icon-5a',
        backIcon: 'icon-5w',
        title: 'UI/UX Design',
        desc: 'Dramatically supply transparent backward deliverables before caward comp internal or "organic" sources.',
        pview: '231 Projects',
        dataAos:'fade-up',
        dataDelay:'100'
    }, {
        arrow: 'bi bi-arrow-up-right',
        frontIcon: 'icon-6a',
        backIcon: 'icon-6w',
        title: 'Web Security',
        desc: 'Dramatically supply transparent backward deliverables before caward comp internal or "organic" sources.',
        pview: '121 Projects',
        dataAos:'fade-up',
        dataDelay:'150'
    }, {
        arrow: 'bi bi-arrow-up-right',
        frontIcon: 'icon-7a',
        backIcon: 'icon-7w',
        title: 'Digital Marketing',
        desc: 'Dramatically supply transparent backward deliverables before caward comp internal or "organic" sources.',
        pview: '501 Projects',
        dataAos:'fade-up',
        dataDelay:'200'
    }, {
        arrow: 'bi bi-arrow-up-right',
        frontIcon: 'icon-8a',
        backIcon: 'icon-8w',
        title: 'Programming',
        desc: 'Dramatically supply transparent backward deliverables before caward comp internal or "organic" sources.',
        pview: '224 Projects',
        dataAos:'fade-up',
        dataDelay:'250'
    }
]

const FeatureOne = () => {
    return (
        <Fragment>
            {featureContent.map((val, i) => (
                <div key={i} className="col-lg-4 col-md-6" data-aos={val.dataAos} data-aos-delay={val.dataDelay}>
                    <div className="feature-style-one mb-45">
                        <a className="top-arrow" href="#">
                            <i className={val.arrow}/>
                        </a>
                        <img className="front-icon" src={`assets/img/icon/${val.frontIcon}.png`} alt="icon"/>
                        <img className="back-icon" src={`assets/img/icon/${val.backIcon}.png`} alt="icon"/>
                        <h2>
                            <Link to="/services-details">{val.title}</Link>
                        </h2>
                        <p>{val.desc}</p>
                        <Link to="/project-grid">324 Projects</Link>
                    </div>
                </div>
            ))}
        </Fragment>
    )
}

export default FeatureOne