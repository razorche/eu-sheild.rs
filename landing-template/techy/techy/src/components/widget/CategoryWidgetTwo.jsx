import React, {Fragment} from 'react'
import { Link } from 'react-router-dom'


const CategoryWidget = [
    {
        category: 'UX/UI Design',
        number:'26',
        routerPath: 'blog-details',
    },
    {
        category: 'Nursing Assistant',
        number:'30',
        routerPath: 'blog-details',
        
    },
    {
        category: 'Web Designer',
        number:'',
        routerPath: '71',
    },
    {
        category: 'Medical Assistant',
        number:'56',
        routerPath: 'blog-details',
    },
    {
        category: 'Marketing Coordinator',
        number:'60',
        routerPath: 'blog-details',
    },
]

const CategoryWidgetTwo = () => {
    return (
        <Fragment>
            <ul className="list-none">
                {CategoryWidget.map((val,i)=>(
                    <li key={i}>
                        <Link href="#">{val.category} <span className="f-right">{val.number}</span>
                        </Link>
                    </li>
                ))}
            </ul>
        </Fragment>
    )
}

export default CategoryWidgetTwo