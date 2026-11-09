import React, {Fragment} from 'react'
import { Link } from 'react-router-dom'

const categoryContent = [
    {
        category: 'Software Development',
        icon: 'bi bi-arrow-right-short',
        routerPath: '/project-grid'
    },
    {
        category: 'Web Security',
        icon: 'bi bi-arrow-right-short',
        routerPath: '/project-grid'
    },
    {
        category: 'UI/UX Design',
        icon: 'bi bi-arrow-right-short',
        routerPath: '/project-grid'
    },
    {
        category: 'Apps Development',
        icon: 'bi bi-arrow-right-short',
        routerPath: '/project-grid'
    },
    {
        category: 'Programming',
        icon: 'bi bi-arrow-right-short',
        routerPath: '/project-grid'
    },
    {
        category: 'Web Development',
        icon: 'bi bi-arrow-right-short',
        routerPath: '/project-grid'
    },
]

const ServiceCategory = () => {
    return (
        <Fragment>
            <ul className="list-none service-widget">
                {categoryContent.map((val, i)=>(
                    <li key={i}>
                        <Link to={val.routerPath}>Software Development
                            <span className="f-right"><i className={val.icon}/></span>
                        </Link>
                    </li>
                ))}
            </ul>
        </Fragment>
    )
}

export default ServiceCategory