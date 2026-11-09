import React, {Fragment} from 'react'
import { Link } from 'react-router-dom'

const pageContent = [
    {
        name: 'About Us',
        routerPath: '/about'
    },
    {
        name: 'Contact',
        routerPath: '/contact'
    },
    {
        name: 'Blog',
        routerPath: '/blog-grid'
    },
]

const CopyRightTwo = () => {
    return (
        <Fragment>
            <div className="copyright-two">
                <div className="row gx-4 gx-xxl-5 align-items-center">
                    <div className="col-xl-5 col-md-5">
                        <ul
                            className="fot-list d-flex align-items-center  justify-content-center justify-content-md-start">
                        {pageContent.map((val, i)=>(
                            <li key={i}>
                                <Link to={val.routerPath}>{val.name}</Link>
                            </li>
                        ))}
                        </ul>
                    </div>
                    <div className="col-xl-3 col-md-6 text-center d-none d-lg-inline-block">
                        <div className="footer__logo mb-25">
                            <Link to="/">
                                <img src="assets/img/logo/header-logo-1.png" alt=""/>
                            </Link>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-12 col-md-7 text-center">
                        <p className="text-white mb-20 pe-xl-3">
                            <a href="https://themeforest.net/user/hamina-themes/portfolio">Hamina-Themes </a>
                            © {new Date().getFullYear()}, All Rights Reserved</p>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default CopyRightTwo