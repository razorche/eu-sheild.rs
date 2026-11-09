import React, {Fragment} from 'react'
import CommonCounter from './CommonCounter'


const CounterOneContent = [
    {
        dataAos:"fade-up",
        dataDelay:"",
        num:276,
        text:"Worldwide Students",
        mark:"k"
    },
    {
        dataAos:"fade-up",
        dataDelay:"200",
        text:"Years Experience",
        num:23,
        mark:"+"
    },
    {
        dataAos:"fade-up",
        dataDelay:"300",
        num:735,
        text:"Professional Courses",
        mark:"+"
    },
    {
        dataAos:"fade-up",
        dataDelay:"400",
        num:4.7,
        text:"Beautiful Review",
        mark:"k"
    },
]



const CounterOne = () => {
    return (
        <Fragment>
            <section className="counter-area pt-75 pt-lg-30 pt-lg-35 pb-lg-10">
                <div className="container custom-contianer-one theme-bg">
                    <div className="row gx-4 gx-xxl-5">
                        {CounterOneContent.map((val, i)=>(
                            <div key={i} className="col-lg-3 col-md-6 col-sm-6" data-aos="fade-up">
                                <div className="counter-style-one mb-30">
                                    <h3><span className="counter"><CommonCounter value={val.num} /></span>{val.mark}</h3>
                                    <h4>{val.text}</h4>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </Fragment>
    )
}

export default CounterOne