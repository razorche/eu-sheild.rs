import React, {Fragment} from 'react'
import Marquee from "react-fast-marquee";

const MarqueSlider = () => {
    return (
        <Fragment>
            <div className="pt-75 pb-130 pb-lg-60">
                <Marquee pauseOnHover={true} className="marquee-line">
                    <h3 className="marque-text">Technology to elevate our human experience. Your Next It Solution Agency &
                    Explore More Technology to elevate our human experience. Your Next It Solution
                    Agency & Explore More</h3>
                </Marquee>
            </div>
        </Fragment>
    )
}

export default MarqueSlider