import React, {Fragment} from 'react'
import { Link } from 'react-router-dom'
import SubscribeFormTwo from '../form/SubscribeFormTwo';
import CopyRightThree from './CopyRightThree'

const ContactContent = [
    {
      link: 'techy@mail.com'  
    },
    {
      link: '(505) 555-0125'  
    },
    {
      link: '6391 Elgin St. Celina, Delaware 10299'  
    },

    {
      link: '+235 3654 7856'  
    },
];


const InstaFeed = [
    {
      img: 'insta-01',
      routerPath: '#'
    },
    {
        img: 'insta-02',
        routerPath: '#'
    },
    {
        img: 'insta-03',
        routerPath: '#'
    },
    {
        img: 'insta-04',
        routerPath: '#'
    },
]

const FooterThree = () => {
    return (
        <Fragment>
            <footer className="footer-area theme-footer-three pt-145 pt-lg-100 pt-sm-100">
                <img className="footer-shape shape-1b" src="assets/img/shape/star-3b.svg" alt="shape"/>
                <img className="footer-shape shape-2b" src="assets/img/shape/star-4b.svg" alt="shape"/>
                <img className="footer-shape shape-3b" src="assets/img/shape/star-6b.svg" alt="shape"/>
                <img className="footer-shape shape-4b" src="assets/img/shape/star-5b.svg" alt="shape"/>
                <img className="footer-shape shape-5b" src="assets/img/shape/star-5b.svg" alt="shape"/>
                <img
                    className="fot-shape-one"
                    src="assets/img/shape/line-round-7b.svg"
                    alt="footer shape"/>
                <div className="container">
                    <div className="row gx-4 gx-xxl-5 mb-10">
                        <div className="col-xxl-3 col-md-4" data-aos="fade-up">
                            <div className="footer__widget mb-40">
                                <Link className="logo-title" to="/">Techy.</Link>
                            </div>
                        </div>
                        <div className="col-xxl-3 col-md-4" data-aos="fade-up">
                            <div className="footer__widget mb-40">
                                <h4 className="widget-title">Contact</h4>
                                <ul className="fot-list">
                                   {ContactContent.map((val,i)=>(
                                     <li key={i}>
                                        <a href={val.routerPath}>{val.link}</a>
                                    </li>
                                   ))}
                                </ul>
                            </div>
                        </div>
                        <div className="col-xxl-3 col-md-4" data-aos="fade-up" data-aos-delay={100}>
                            <div className="footer__widget mb-40">
                                <h4 className="widget-title">Our Instagram</h4>
                                <ul className="insta-feed list-none">
                                    {InstaFeed.map((val, i)=>(
                                        <li key={i}>
                                            <Link to={val.routerPath}><img src={`assets/img/instagram/${val.img}.jpg`} alt="img"/></Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div
                            className="col-xxl-3 col-xl-4 col-md-6"
                            data-aos="fade-up"
                            data-aos-delay={200}>
                            <div className="footer__widget mb-40">
                                <h4 className="widget-title">Subscribe</h4>
                                <p className="fs-17 text-white mb-0 pb-20">Phosfluorescentl aggregate bleed channels rather global araa.
                                </p>
                                {/* SubscribeFormTwo */}
                                <SubscribeFormTwo />
                                {/* SubscribeFormTwo */}
                            </div>
                        </div>
                    </div>
                </div>
                {/* CopyRightThree */}
                <CopyRightThree />
                {/* CopyRightThree */}
            </footer>
            {/*footer-area end*/}

        </Fragment>
    )
}

export default FooterThree