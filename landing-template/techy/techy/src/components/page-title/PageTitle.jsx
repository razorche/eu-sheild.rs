import React, {Fragment} from 'react'
import { Link } from 'react-router-dom'

const PageTitle = (props) => {
    return (
        <Fragment>
            {/*page-title-area start*/}
            <div className="page-title-area pt-210 pb-150 pt-lg-120 pb-lg-125 pb-md-100">
                <img
                    className="page-title-shape shape-one "
                    src="assets/img/shape/star-10d.svg"
                    alt="shape"/>
                <img
                    className="page-title-shape shape-three"
                    src="assets/img/shape/star-2.svg"
                    alt="shape"/>
                <img
                    className="page-title-shape shape-four d-none d-md-inline-block "
                    src="assets/img/shape/star-4b.svg"
                    alt="shape"/>
                <img
                    className="page-title-shape shape-five d-none d-lg-inline-block "
                    src="assets/img/shape/line-round-9d.svg"
                    alt="shape"/>
                <img
                    className="page-title-shape shape-six"
                    src="assets/img/shape/star-5b.svg"
                    alt="shape"/>
                <img
                    className="page-title-shape shape-seven"
                    src="assets/img/shape/star-5b.svg"
                    alt="shape"/>
                <img
                    className="page-title-shape shape-eight d-none d-xl-inline-block"
                    src="assets/img/page-title/img-01.png"
                    alt="img"/>
                <img
                    className="page-title-shape shape-nine d-none d-xl-inline-block"
                    src="assets/img/page-title/img-02.png"
                    alt="img"/>
                <div className="container">
                    <div className="row gx-4 gx-xxl-5 align-items-center">
                        <div className="col-xl-6 col-md-6">
                            <div className="page-title-wrapper text-md-start text-center">
                                <h2 className="page-title mb-20">{props.title}</h2>
                                <nav aria-label="breadcrumb">
                                    <ul
                                        className="breadcrumb list-none justify-content-center justify-content-md-start">
                                        <li>
                                            <Link to="/">Home</Link>
                                        </li>
                                        <li>
                                            <a href="#">Pages</a>
                                        </li>
                                        <li className="active" aria-current="page">{props.title}</li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*page-title-area end*/}

        </Fragment>
    )
}

export default PageTitle