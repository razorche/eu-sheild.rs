import React, {Fragment} from 'react'
import { Link } from 'react-router-dom'

const teamContent = [
    {
        img: 'team-1b',
        desig:'Chief Excutive',
        name:'Savannah Nguyen',
        dataAos:'fade-up',
        dataDelay: '100',
    },
    {
        img: 'team-2b',
        desig:'chief Excutive',
        name:'Timm Miller',
        dataAos:'fade-up',
        dataDelay: '100',
    },
    {
        img: 'team-3b',
        desig:'Chief Manager',
        name:'David Human',
        dataAos:'fade-up',
        dataDelay: '100',
    },
]

const TeamOne = () => {
    return (
        <Fragment>
            <div className="row gx-4 gx-xxl-5 justify-content-center">
                {teamContent.map((val,i) => (
                    <div key={i} className="col-lg-4 col-md-6" data-aos={val.dataAos} data-aos-delay={val.dataDelay}>
                        <div className="team-style-one text-center mb-45">
                            <Link to="/team-details"><img src={`assets/img/team/${val.img}.jpg`} alt="img"/></Link>
                            <div className="team-content">
                                <p>{val.desig}</p>
                                <h3 className="sect-title-two">
                                    <Link to="/team-details">{val.name}</Link>
                                </h3>
                                <div className="team-social">
                                    <a href="#">
                                        <i className="fab fa-facebook-f"/>
                                    </a>
                                    <a href="#">
                                        <i className="fab fa-twitter"/>
                                    </a>
                                    <a href="#">
                                        <i className="fab fa-linkedin-in"/>
                                    </a>
                                    <a href="#">
                                        <i className="fab fa-youtube"/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </Fragment>
    )
}

export default TeamOne