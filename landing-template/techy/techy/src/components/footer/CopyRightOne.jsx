import React, {Fragment} from 'react'
import SocialOne from '../social/SocialOne'

const CopyRightOne = () => {
    return (
        <Fragment>
            <div className="techy-copyright pt-60 pb-45 pb-lg-10">
                <div className="container">
                    <div className="row gx-4 gx-xxl-5 align-items-center">
                        <div className="col-md-6 text-center text-md-start">
                            <div className="copyright mb-30">
                                <h6>
                                    <a href="https://themeforest.net/user/hamina-themes/portfolio">Hamina-Themes</a>
                                    © {new Date().getFullYear()}, All Rights Reserved</h6>
                            </div>
                        </div>
                        <div className="col-md-6 text-center text-md-end">
                            <SocialOne />
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default CopyRightOne