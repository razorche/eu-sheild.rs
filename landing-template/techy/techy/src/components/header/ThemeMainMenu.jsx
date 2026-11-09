import React, { Fragment } from 'react'
import {Link} from 'react-router-dom'

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


const ThemeMainMenu = () => {
  return (
    <Fragment>
        <ul className="navbar-nav main-navbar mb-2 mb-lg-0 ps-1">
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle drop-nav" href="#" id="navbarDropdownOne">
                Home
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdownOne">
                {HomeMenu.map((val, i)=>(
                  <li key={i}><Link className="dropdown-item" to={val.routerPath}>{val.name}</Link></li>
                ))}
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link" href="#" id="navbarDropdownTwo">
                Pages
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdownTwo">
                {Miscellaneous.map((val, i)=>(
                  <li key={i}><Link className="dropdown-item" to={val.routerPath}>{val.name}</Link></li>
                ))}
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown">
                Project
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                {ProjectMenu.map((val, i)=>(
                  <li key={i}><Link className="dropdown-item" to={val.routerPath}>{val.name}</Link></li>
                ))}
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownThree">
                Blog
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdownThree">
                {BlogMenu.map((val, i)=>(
                  <li key={i}><Link className="dropdown-item" to={val.routerPath}>{val.name}</Link></li>
                ))}
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">contact</Link>
            </li>
        </ul>
    </Fragment>
  )
}

export default ThemeMainMenu