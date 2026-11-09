import React, {Fragment} from 'react'
import { Link } from 'react-router-dom'

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

const BlogAuthorTwo = () => {
    return (
        <Fragment>
            <div
                className="row gx-4 gx-xxl-5 align-items-center author-profile mx-md-0 mt-60">
                <div className="col-lg-7 col-md-7">
                    <div
                        className="blog-author d-md-flex align-items-center text-center text-md-start mb-30">
                        <div className="author-avatar mb-4 mb-md-0 me-md-3">
                            <img src="assets/img/blog/author-1.jpg" alt="Avatar"/>
                        </div>
                        <div className="author-info ms-xl-3">
                            <h3 className="author-name">Kane William</h3>
                            <h4 className="h5 fs-20 fw-medium text-white">Software Developer</h4>
                        </div>
                    </div>
                </div>
                <div className="col-lg-5 col-md-5 text-center text-md-end">
                    <div className="team-social-three social-style-five mb-30">
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

export default BlogAuthorTwo