import React, {Fragment, useState} from 'react'
import {Link} from 'react-router-dom'
import ThemeMainMenu from './ThemeMainMenu'
import SearchModal from '../search-modal/SearchModal'
import SideBar from '../sidebar/SideBar'
import MobileMenu from './MobileMenu'

const ThemeMenuFour = () => {
    const [sticky, setSticky] = useState(false);
    const [modalIsopen, setOpen] = useState(false)
    const [showSidebar, setShowSidebar] = useState(false)
    const [menu, setMenu] = useState("")

    const openModal =()=>{
        setOpen(true);
    }
    const closeModal =()=>{
        setOpen(false);
    }

    const openSidebar =()=>{
        setShowSidebar(true)
    }
    const closeSidebar =()=>{
        setShowSidebar(false)
    }

    const showMobilemenu =()=>{
        setMenu('show')
    }
    const hideMobilemenu =()=>{
        setMenu()
    }


    const stickyMenu = ()=>{
        if(window.scrollY >= 60){
            setSticky(true);
        } else{
            setSticky(false);
        }
    };
    window.addEventListener('scroll', stickyMenu);
    return (
        <Fragment>
            <SearchModal isOpen={modalIsopen} onClick={closeModal} />
            <SideBar onClick={closeSidebar} value={showSidebar} />
            {/* header-area start */}
            <header className="theme-main-menu theme-menu-three pt-25">
                <div className="top-header pb-25">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-xl-4 col-lg-3 text-start d-none d-lg-inline-block">
                                <div className="logo-area">
                                    <Link to="/"><img src="img/logo/header-logo-1.png" alt="Header-logo"/></Link>
                                </div>
                            </div>
                            <div className="col-xl-8 col-lg-9">
                                <ul
                                    className="list-none header-info d-flex align-items-center justify-content-center justify-content-lg-end">
                                    <li className="d-none d-md-inline-block">
                                        <div className="header-info-box">
                                            <div className="icon">
                                                <i className="bi bi-clock"/>
                                            </div>
                                            <div className="text-content">
                                                <span>Time</span>
                                                <h6 className="text-white">10AM - 11:30PM</h6>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="d-md-inline-block">
                                        <div className="header-info-box">
                                            <div className="icon">
                                                <i className="bi bi-geo-alt"/>
                                            </div>
                                            <div className="text-content">
                                                <span>Location</span>
                                                <div className="right-language">
                                                    <div className="dropdown-language">
                                                        <a
                                                            className="language-btn dropdown-toggle"
                                                            href="#">
                                                            USA, New York
                                                            <i className="fal fa-chevron-down"/>
                                                        </a>
                                                        <ul className="dropdown-menu-language" aria-labelledby="dropdownMenuLink">
                                                            <li>
                                                                <a className="dropdown-item" href="#">Washington DC</a>
                                                            </li>
                                                            <li>
                                                                <a className="dropdown-item" href="#">Nevrada</a>
                                                            </li>
                                                            <li>
                                                                <a className="dropdown-item" href="#">New Walsh</a>
                                                            </li>
                                                            <li>
                                                                <a className="dropdown-item" href="#">Merily Land</a>
                                                            </li>
                                                            <li>
                                                                <a className="dropdown-item" href="#">Hampshire</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="header-info-box">
                                            <div className="icon">
                                                <i className="bi bi-telephone"/>
                                            </div>
                                            <div className="text-content">
                                                <span>Phone</span>
                                                <h6 className="text-white">(505) 555-0125</h6>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={sticky ? "main-header-area sticky-menu":"main-header-area"}>
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-6 d-lg-none d-md-block">
                                <div className="logo-area">
                                    <a href="index.html"><img src="img/logo/header-logo-1.png" alt="Header-logo"/></a>
                                </div>
                            </div>
                            <div className="col-xxl-8 col-lg-10 d-none d-lg-block">
                                <nav className="navbar navbar-expand-lg">
                                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                        <ThemeMainMenu />
                                    </div>
                                </nav>
                            </div>
                            <div className="col-xxl-4 col-lg-2 col-6 text-end">
                                <ul className="right-nav mb-0 d-flex align-items-center justify-content-end">
                                    <li className="search-area">
                                        <a
                                            className="search_input"
                                            href="#"
                                            onClick={openModal}
                                            >
                                            <i className="bi bi-search"/>
                                        </a>
                                    </li>
                                    <li>
                                        <a className="shopping-cart" href="#">
                                            <i className="bi bi-bag"/>
                                            <span className="badge">0</span>
                                        </a>
                                    </li>
                                    <li>
                                        <div className="hamburger-menu">
                                            <div className="d-none d-lg-inline-block">
                                                <a className="round-menu" href="#" onClick={openSidebar}>
                                                    <i className="bi bi-list"/>
                                                </a>
                                           </div>
                                            <a className="round-menu d-lg-none" href="#" onClick={showMobilemenu}>
                                                <i className="bi bi-list"/>
                                            </a>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                {/* /.theme-main-menu */}
                <MobileMenu onClick={hideMobilemenu} active={menu} />
            </header>
            {/* header-area end */}

        </Fragment>
    )
}

export default ThemeMenuFour