import React from 'react'
import {Link} from 'react-router-dom'
import MetisMenu from '@metismenu/react';
import 'metismenujs/dist/metismenujs.css';

const HomeMenu = [
    {
        name: 'It Solution',
        routerPath: '/'
    },
    {
        name: 'Software Development',
        routerPath: '/software-development'
    },
    {
        name: 'Cyber Security',
        routerPath: '/cyber-security'
    },
];

const Miscellaneous = [
    {
      name: 'About Us',
      routerPath: '/about'
  },
    {
      name: 'Services',
      routerPath: '/services'
  },
    {
      name: 'Services Details',
      routerPath: '/services-details'
  },
    {
      name: 'Team',
      routerPath: '/team'
  },
    {
      name: 'Team Details',
      routerPath: '/team-details'
  },
    
    {
      name: 'Price',
      routerPath: '/price'
  },
    {
      name: 'FAQ',
      routerPath: '/faq'
  },
    {
      name: 'Error-404',
      routerPath: '/error'
  },
    {
      name: 'Login',
      routerPath: '/login'
  },
    {
      name: 'Signup',
      routerPath: '/signup'
  },
    {
      name: 'Comming Soon',
      routerPath: '/coming-soon'
  },
];

const ProjectMenu = [
  {
      name: 'Project Grid',
      routerPath: '/project-grid'
  },
  {
      name: 'Project Masonry',
      routerPath: '/project-masonry'
  },
  {
      name: 'Project Details',
      routerPath: '/project-details'
  },
];
const BlogMenu = [
  {
      name: 'Blog Grid',
      routerPath: '/blog-grid'
  },
  {
      name: 'Blog Masonry',
      routerPath: '/blog-masonry'
  },
  {
      name: 'Blog Classic',
      routerPath: '/blog-classic'
  },
  {
      name: 'Blog Details V1',
      routerPath: '/blog-details-v1'
  },
  {
      name: 'Blog Details V2',
      routerPath: '/blog-details-v2'
  },
];


const MobileMenu = (props) => {

  const {onClick, active} = props;



    
  return (
    // <div className={active?"mobile-menu-wrapper show d-lg-none":"mobile-menu-wrapper d-lg-none"}>
    <div className={`mobile-menu-wrapper ${active} d-lg-none`}>
        <div className="mobile-logo mb-5">
            <Link to="/"><img src="assets/img/logo/header-logo-1.png" alt=""/></Link>
        </div>
        <div className="close-menu" onClick={onClick}>
            <i className="bi bi-x-lg"></i>
        </div>
        <div className="side-mobile-menu">
            <MetisMenu>
                <li className="has-dropdown">
                    <a href="#">Home</a>
                    <ul className="sub-menu">
                      {HomeMenu.map((val, i)=>(
                        <li key={i}>
                            <Link onClick={onClick} to={val.routerPath}>{val.name}</Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                <li className="has-dropdown">
                    <a href="#">Pages</a>
                    <ul className="sub-menu">
                      {Miscellaneous.map((val, i)=>(
                        <li onClick={onClick} key={i}>
                            <Link  to={val.routerPath}>{val.name}</Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                <li className="has-dropdown">
                    <a href="#">Project</a>
                    <ul className="sub-menu">
                      {ProjectMenu.map((val, i)=>(
                        <li onClick={onClick} key={i}>
                            <Link to={val.routerPath}>{val.name}</Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                <li className="has-dropdown">
                    <a href="#">Blog</a>
                    <ul className="sub-menu">
                      {BlogMenu.map((val, i)=>(
                        <li onClick={onClick} key={i}>
                            <Link to={val.routerPath}>{val.name}</Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                  <li onClick={onClick}>
                    <Link to="/contact">Contact Us</Link>
                  </li>
            </MetisMenu>
        </div>
        <div className="login-btn text-center mt-4">
            <Link className="theme_btn w-100" to="/login">Login</Link>
            <p className="text-white">Don't have an account ? Please <Link to="/signup" className="border-bottom">Signup</Link> today</p>
        </div>
    </div>
  )
}

export default MobileMenu