import React, {Fragment} from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const BrandLogo = [
    {
        img: 'brand-1',
    },
    {
        img: 'brand-2',
    },
    {
        img: 'brand-3',
    },
    {
        img: 'brand-4',
    },
    {
        img: 'brand-5',
    },
    {
        img: 'brand-6',
    },
    {
        img: 'brand-2',
    },
    {
        img: 'brand-4',
    },
    {
        img: 'brand-1',
    },
    {
        img: 'brand-3',
    },
];

const BrandTwo = () => {
    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed:2000,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 4,
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
      };
    return (
        <Fragment>
            <Slider {...settings} className="brand-slider-one">
                {BrandLogo.map((val, i)=>(
                    <div className="brand-logo" key={i}>
                        <a href="#"><img src={`assets/img/brand/${val.img}.svg`} alt="brand"/></a>
                    </div>
                ))}
            </Slider>
        </Fragment>
    )
}

export default BrandTwo