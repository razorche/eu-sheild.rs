import React,{Fragment} from 'react'
import CommonSkill from './CommonSkill'


const skillContent = [
    {
        value: '80',
        title:'Web Security',
    },
    {
        value: '90',
        title:'UI/UX Design',
    },
    {
        value: '88',
        title:'Development',
    },
    {
        value: '92',
        title:'Design',
    },
]

const Skill = () => {

    return (
        <Fragment>
            <div className="row progressbar-wrapper mt-35 mb-15">
               {skillContent.map((val,i)=>(
                 <div key={i} className="col-lg-3 col-sm-6">
                    <div className="progressbar-content text-center mb-45">
                        <CommonSkill number={val.value} />
                        <h4 className="semi-title">{val.title}</h4>
                    </div>
                </div>
               ))}
            </div>
        </Fragment>
    )
}

export default Skill