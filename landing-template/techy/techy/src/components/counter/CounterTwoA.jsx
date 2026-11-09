import React, {Fragment} from 'react'
import CommonCounter from './CommonCounter'

const counterContent = [
    {
        num: '125',
        mark: '+',
        desc: 'We Develop Over 125+ Software'
    }, {
        num: '64',
        mark: '+',
        desc: 'Global Clients & Trusted Us'
    }, {
        num: '32',
        mark: '+',
        desc: 'Local & Global Award Wins'
    }, {
        num: '122',
        mark: '+',
        desc: 'Clients Reviews Our Software'
    }
]

const CounterTwoA = () => {
    return (
        <Fragment>
            <div className="row gx-4 gx-xxl-5">
                {counterContent.map((val, i) => (
                    <div key={i} className="col-lg-3 col-md-6 col-sm-6" data-aos="fade-up">
                        <div
                            className="counter-style-two boder-style d-xxl-flex align-items-center mb-45">
                            <h3>
                                <span className="counter"><CommonCounter value={val.num} /></span>{val.mark}</h3>
                            <p className="text-white">{val.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </Fragment>
    )
}

export default CounterTwoA