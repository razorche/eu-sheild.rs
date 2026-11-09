import React, {Fragment} from 'react'
import { Link } from 'react-router-dom'



const SideBar = (props) => {

    const {onClick, value} = props;
    
    return (
        <Fragment>

            {/* slide-bar start */}
            <aside className={value?"slide-bar show":"slide-bar"}>
                <div className="close-mobile-menu">
                    <a href="#" onClick={onClick}>
                        <i className="fas fa-times"/>
                    </a>
                </div>
                {/* offset-sidebar start */}
                <div className="offset-sidebar">
                    <div className="offset-widget offset-logo mb-30">
                        <Link to="/">
                            <img src="assets/img/logo/header-logo-1.png" alt="logo"/>
                        </Link>
                    </div>
                    <div className="offset-widget mb-40">
                        <div className="info-widget">
                            <h4 className="offset-title mb-20">About Us</h4>
                            <p className="mb-30">
                                But I must explain to you how all this mistaken idea of denouncing pleasure and
                                praising pain was born and will give you a complete account of the system and
                                expound the actual teachings of the great explore
                            </p>
                        </div>
                    </div>
                    <div className="offset-widget mb-30 pr-10">
                        <div className="info-widget info-widget2">
                            <h4 className="offset-title mb-20">Contact Info</h4>
                            <p>
                                <i className="fal fa-address-book"/>
                                23/A, Miranda City Likaoli Prikano, Dope</p>
                            <p>
                                <i className="fal fa-phone"/>
                                +0989 7876 9865 9
                            </p>
                            <p>
                                <i className="fal fa-envelope-open"/>
                                info@example.com
                            </p>
                        </div>
                    </div>
                    <div className="login-btn text-center">
                        <Link className="theme_btn w-100" to="/login">Login</Link>
                    </div>
                </div>
                {/* offset-sidebar end */}
            </aside>
            {/* slide-bar end */}
        </Fragment>
    )
}

export default SideBar