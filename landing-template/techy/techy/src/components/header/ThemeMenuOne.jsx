import React, {Fragment, useState} from 'react'
import {Link} from 'react-router-dom'
import ThemeMainMenu from './ThemeMainMenu'
import SearchModal from '../search-modal/SearchModal'
import SideBar from '../sidebar/SideBar'
import MobileMenu from './MobileMenu'

const ThemeMenuOne = () => {
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
            <header className="theme-main-menu py-lg-4">
                <div className={sticky?"main-header-area sticky-menu":"main-header-area"}>
                    <div className="container custom-container-nav">
                        <div className="row gx-4 gx-xxl-5 align-items-center">
                            <div className="col-xxl-3 col-xl-2 col-lg-2 col-6 text-start">
                                <div className="logo-area">
                                    <Link to="/"><img src="assets/img/logo/header-logo-1.png" alt="Header-logo"/></Link>
                                </div>
                            </div>
                            <div className="col-xxl-6 col-xl-6 col-lg-6 d-none d-lg-block">
                                <nav className="navbar navbar-expand-lg">
                                    <div className="container-fluid">
                                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                            <ThemeMainMenu/>
                                        </div>
                                    </div>
                                </nav>
                            </div>
                            <div className="col-xxl-3 col-xl-4 col-lg-4 col-6 text-end">
                                <ul className="right-nav mb-0 d-flex align-items-center justify-content-end">
                                    <li>
                                        <div className="d-none d-xxl-inline-block right-language pr-40">
                                            <div className="dropdown-language">
                                                <a href="#" >
                                                    English
                                                    <i className="fal fa-chevron-down"/>
                                                </a>
                                                <ul className="dropdown-menu-language">
                                                    <li>
                                                        <a href="#">Arabic</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">USA</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">German</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Chaina</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Spanish</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="search-area">
                                        <a
                                            className="search_input"
                                            onClick={openModal}
                                            href="#"
                                            >
                                            <i className="bi bi-search"/>
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

export default ThemeMenuOne