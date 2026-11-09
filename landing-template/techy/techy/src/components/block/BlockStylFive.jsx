import React, {Fragment} from 'react'
import { Link } from 'react-router-dom'

const procesContent =[
    {
       icon: 'icon-24b',
       title: 'Create Account',
       desc: 'Interactively provide access to world-class materials for catalysts.',
       margin: 'mb-40'
    },
    {
       icon: 'icon-25b',
       title: 'Choose Any Service',
       desc: 'Interactively provide access to world-class materials for catalysts.',
       margin: 'mb-40'
    },
    {
       icon: 'icon-26b',
       title: 'Get Solutions',
       desc: 'Interactively provide access to world-class materials for catalysts.',
       margin: 'mb-65'
    }
]

const BlockStylFive = () => {
    return (
        <Fragment>
            <div className="block-style-six">
                {procesContent.map((val,i)=>(
                    <div key={i} className={`process-box ${val.margin}`}>
                        <div className="img">
                            <img src={`assets/img/icon/${val.icon}.svg`} alt="icon"/>
                        </div>
                        <div className="text-wrapper">
                            <h3 className="sect-title-two">{val.title}</h3>
                            <p>{val.desc}</p>
                        </div>
                    </div>
                ))}
                <div className="text-md-start text-center">
                    <Link className="theme_btn" to="/services">More Details</Link>
                </div>
            </div>
        </Fragment>
    )
}

export default BlockStylFive