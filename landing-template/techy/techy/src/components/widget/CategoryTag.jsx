import React, {Fragment} from 'react'
import { Link } from 'react-router-dom'

const TagContent = [
    {
      tag: 'Web Solution',
      routerPath: '/blog-details' 
    },
    {
      tag: 'Web Solution',
      routerPath: '/blog-details' 
    },
    {
      tag: 'Technology Support',
      routerPath: '/blog-details' 
    },
    {
      tag: 'UI/UX Design',
      routerPath: '/blog-details' 
    },
    {
      tag: 'Development',
      routerPath: '/blog-details' 
    },
    {
      tag: 'HTML',
      routerPath: '/blog-details' 
    },
]

const CategoryTag = () => {
    return (
        <Fragment>
            <div className="tag-list">
                {TagContent.map((val, i)=>(
                    <Link key={i} to={val.routerPath}>{val.tag}</Link>
                ))}
            </div>
        </Fragment>
    )
}

export default CategoryTag