import React, {Fragment} from 'react'

import CommonSkill from './CommonSkill'

const skillContent = [
    {
        number: '80',
        title: 'Web Security',
    },
    {
        number: '85',
        title: 'UI/UX Design',
    },
    {
        number: '88',
        title: 'Development',
    },
    {
        number: '92',
        title: 'Design',
    },
    {
        number: '90',
        title: 'Communicate',
    },
    {
        number: '92',
        title: 'Photography',
    },
]

const SkillTwo = () => {
    return (
        <Fragment>
            <div className="row gx-4 gx-xxl-5 progressbar-wrapper mt-30 mb-15">
                {skillContent.map((val, i)=>(
                    <div key={i} className="col-lg-2 col-md-4 col-sm-6">
                        <div className="progressbar-content text-center mb-45">
                            <CommonSkill number={val.number} />
                            <h4 className="semi-title">{val.title}</h4>
                        </div>
                    </div>
                ))}
            </div>
        </Fragment>
    )
}

export default SkillTwo