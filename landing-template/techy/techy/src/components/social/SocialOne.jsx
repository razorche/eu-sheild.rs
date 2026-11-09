import React, {Fragment} from 'react'
import { Link } from 'react-router-dom'

const SocialIcon = [
    {
        icon: 'fab fa-facebook-f',
        routerPath:'https://www.facebook.com/',
    },
    {
        icon: 'fab fa-twitter',
        routerPath:'https://twitter.com/',
    },
    {
        icon: 'fab fa-linkedin-in',
        routerPath:'https://www.linkedin.com/',
    },
    {
        icon: 'fab fa-youtube',
        routerPath:'https://www.youtube.com/',
    },
]

const SocialOne = () => {
    return (
        <Fragment>
            <div className="footer__social mb-30">
                {SocialIcon.map((val, i)=>(
                    <Link key={i} href={val.routerPath}>
                        <i className={val.icon}/>
                    </Link>
                ))}
            </div>
        </Fragment>
    )
}

export default SocialOne