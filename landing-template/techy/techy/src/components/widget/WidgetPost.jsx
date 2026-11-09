import React, {Fragment} from 'react'
import { Link } from 'react-router-dom'


const WidgetPostContent =[
    {
        thumb: 'post-01',
        desc: 'Seamlessl monetiz cent material bleeding.',
        authorName: 'By Naile',
        marginBottom: 'mb-20'
    },
    {
        thumb: 'post-02',
        desc: 'Seamlessl monetiz cent material bleeding.',
        authorName: 'By Trust',
        marginBottom: 'mb-20'
    },
    {
        thumb: 'post-03',
        desc: 'Seamlessl monetiz cent material bleeding.',
        authorName: 'By Hamina',
        marginBottom: 'mb-20'
    },
    {
        thumb: 'post-04',
        desc: 'Seamlessl monetiz cent material bleeding.',
        authorName: 'By Anisa',
        marginBottom: 'mb-20'
    },
]

const WidgetPost = () => {
    return (
        <Fragment>
            <ul className="post-list">
                {WidgetPostContent.map((val, i)=>(
                     <li key={i}>
                        <div className={`blog-post ${val.marginBottom}`}>
                            <Link to="/blog-details-v1"><img src={`assets/img/blog/${val.thumb}.jpg`} alt="Post Img"/></Link>
                            <div className="post-content">
                                <h6 className="mb-10">
                                    <Link to="/blog-details-v1">{val.desc}</Link>
                                </h6>
                                <span>{val.authorName}</span>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </Fragment>
    )
}

export default WidgetPost