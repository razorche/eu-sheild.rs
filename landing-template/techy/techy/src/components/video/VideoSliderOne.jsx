import React, {Fragment} from 'react'
import Slider from 'react-slick';


const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    fade: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
};


const VideoSliderOne = (props) => {
    
    return (
        <Fragment>
            <Slider {...settings} className="video-slider-one">
                <div className="video-wrapper">
                    <a className="popup-video" href="#" onClick={props.openModal}><i className="bi bi-play-fill"/></a>
                </div>
                <div className="video-wrapper">
                <a className="popup-video" href="#" onClick={props.openModal}><i className="bi bi-play-fill"/></a>
                </div>
            </Slider>
        </Fragment>
    )
}

export default VideoSliderOne