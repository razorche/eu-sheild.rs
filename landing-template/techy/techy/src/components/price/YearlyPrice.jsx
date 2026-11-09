import React, {Fragment} from 'react'
import { Link } from 'react-router-dom'

const priceContent = [
    {
       packName: 'Starter',
       desc: 'For most businesses that want to the otpimize web queries',
       price: '$500',
       month: '/month',
       feature: [
            'All limited links',
            'Own analytics platform',
            'Chat support',
            'Optimize hashtags',
            'Unlimited users'
       ],
       dataAos:'fade-left',
       dataDelay:'50',
    },
    {
       packName: 'Medium',
       desc: 'For most businesses that want to the otpimize web queries',
       price: '$700',
       month: '/month',
       feature: [
            'All limited links',
            'Own analytics platform',
            'Chat support',
            'Optimize hashtags',
            'Unlimited users'
       ],
       dataAos:'fade-left',
       dataDelay:'100',
    },
    {
       packName: 'Advance',
       desc: 'For most businesses that want to the otpimize web queries',
       price: '$800',
       month: '/month',
       feature: [
            'All limited links',
            'Own analytics platform',
            'Chat support',
            'Optimize hashtags',
            'Unlimited users'
       ],
       dataAos:'fade-left',
       dataDelay:'150',
    },
]

const YearlyPrice = () => {
    return (
        <Fragment>
            <div className="row gx-4 gx-xxl-5 justify-content-center">
                {priceContent.map((val,i)=>(
                    <div key={i} className="col-lg-4 col-md-6" data-aos="fade-left" data-aos-delay={100}>
                        <div className="plan mb-45">
                            <div className="plan__header">
                                <h3>{val.packName}</h3>
                                <p>F{val.desc}</p>
                            </div>
                            <div className="plan__price">
                                {val.price}
                                <sub>{val.month}</sub>
                            </div>
                            <ul className="plan__body list-none">
                                {val.feature.map((val,i)=>(
                                    <li key={i}>{val}</li>
                                ))}
                            </ul>
                            <div className="plan__footer">
                                <Link className="price-btn" to="#">Choose Plan</Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </Fragment>
    )
}

export default YearlyPrice