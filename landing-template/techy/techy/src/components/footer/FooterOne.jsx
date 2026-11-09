import React, {Fragment} from 'react'
import { Link } from 'react-router-dom';
import CopyRightOne from './CopyRightOne';


const FooterNav = [
   {
    name:'About Us',
    routerPath:'/about',
   },
   {
    name:'Contact Us',
    routerPath:'/contact',
   },
   {
    name:'Blog',
    routerPath:'/blog-grid',
   },
   {
    name:'policy',
    routerPath:'/faq',
   },
   {
    name:'Refund',
    routerPath:'/faq',
   },
]

const FooterOne = () => {

    return (
        <Fragment>
            <footer className="footer-area pt-140 pt-lg-95">
                <img
                    className="fot-shape-one"
                    src="assets/img/shape/line-round-4a.svg"
                    alt="footer shape"/>
                <div className="container">
                    <div className="row gx-4 gx-xxl-5 mb-1">
                        <div className="col-lg-4 col-md-8">
                            <div
                                className="footer__widget mb-30"
                                data-aos="fade-right"
                                data-aos-delay={200}>
                                <p className="pe-xl-3 foter-para">An influencal creative agency. Get’s IT Solutions For Expert Consultants
                                </p>
                                <Link className="foter-btn" to="/contact">Let’s Chat
                                    <i className="bi bi-arrow-up-right"/>
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4" data-aos="fade-up" data-aos-delay={300}>
                            <div className="footer__widget d-flex justify-content-md-center mb-30">
                                <ul className="fot-list">
                                    {FooterNav.map((val, i)=>(
                                        <li key={i}>
                                            <Link to={val.routerPath}>{val.name}</Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4" data-aos="fade-left" data-aos-delay={200}>
                            <div className="footer__widget mb-30 ps-xl-5">
                                <h4 className="text-white mb-40">Teachy.@example.com</h4>
                                <address>4517 Washington Ave. Manchester, Kentucky 39495</address>
                            </div>
                        </div>
                    </div>
                </div>
                <CopyRightOne />
            </footer>
        </Fragment>
    )
}

export default FooterOne