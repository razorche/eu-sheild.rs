import React, { Fragment } from 'react'


const brandContent = [
    {
        img:'brand-1',
        class:'',
    },
    {
        img:'brand-2',
        class:'',
    },
    {
        img:'brand-3',
        class:'',
    },
    {
        img:'brand-4',
        class:'',
    },
    {
        img:'brand-5',
        class:'d-none d-md-inline-block',
    },
]

const BrandThree = () => {
  return (
    <Fragment>
        <div className="row brand-border gx-4 gx-xxl-5">
            {brandContent.map((val, i)=>(
                <div key={i} className={`col ${val.class}`}>
                    <div className="brand-logo mb-40">
                        <a href="#"><img src={`assets/img/brand/${val.img}.svg`} alt="brand" /></a>
                    </div>
                </div>
            ))}
        </div>
    </Fragment>
  )
}

export default BrandThree