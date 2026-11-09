import React, {Fragment} from 'react'

const FeaturesContent = [
    {
        icon: 'icon-15b',
        title: 'Hybrid Apps',
        desc: 'Authoritatively revolutionize the realise is performance based content.',
        dataAos:'fade-up',
        dataDelay:'',
    },
    {
        icon: 'icon-16b',
        title: 'Simple Pricing',
        desc: 'Authoritatively revolutionize the realise is performance based content.',
        dataAos:'fade-up',
        dataDelay:'50',
    },
    {
        icon: 'icon-17b',
        title: '24/7 Support',
        desc: 'Authoritatively revolutionize the realise is performance based content.',
        dataAos:'fade-up',
        dataDelay:'100',
    },
]

const FeatureThree = () => {
    return (
        <Fragment>
            <div className="row gx-4 gx-xxl-5 justify-content-center">
                {FeaturesContent.map((val,i)=>(
                    <div key={i} className="col-lg-4 col-md-6" data-aos={val.dataAos} data-aos-delay={val.dataDelay}>
                        <div className="feature-style-three text-center mb-45">
                            <div className="icon"><img src={`assets/img/icon/${val.icon}.svg`} alt="icon"/></div>
                            <h3>
                                <a className="sect-title-two" href="price.html">{val.title}</a>
                            </h3>
                            <p>{val.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </Fragment>
    )
}

export default FeatureThree