import React, {Fragment} from 'react'
import { Link } from 'react-router-dom'


const TagContent = [
    {
        tag: 'IT Solutions',
        routerPath:'/blog-details-v1',
    },
    {
        tag: 'Cyber',
        routerPath:'/blog-details-v1',
    },
    {
        tag: 'Agency',
        routerPath:'/blog-details-v1',
    },
];

const SocialContent = [
    {
        icon:'fab fa-facebook-f',
        routerPath: 'https://www.facebook.com/',
    },
    {
        icon:'fab fa-twitter',
        routerPath: 'https://twitter.com/',
    },
    {
        icon:'fab fa-linkedin-in',
        routerPath: 'https://www.linkedin.com/',
    },
    {
        icon:'fab fa-youtube',
        routerPath: 'https://www.youtube.com/',
    },
]

const SocialMedia = (props) => {
    return (
        <Fragment>
            <div
                className={`${props.bgColor} row gx-4 gx-xxl-5 align-items-center social-media pt-30 mt-55 mx-md-0`}>
                <div className="col-lg-7 col-md-7">
                    <div className="media-tag text-center text-md-start mb-30 ms-lg-2">
                        {TagContent.map((val, i)=>(
                            <Link key={i} to={val.routerPath}>{val.tag}</Link>
                        ))}
                    </div>
                </div>
                <div className="col-lg-5 col-md-5 text-center text-md-end">
                    <div className="team-social-three social-style-four mb-30">
                        {SocialContent.map((val, i)=>(
                            <Link key={i} to={val.routerPath}>
                                <i className={val.icon}/>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default SocialMedia