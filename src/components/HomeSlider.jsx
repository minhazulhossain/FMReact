import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import React from 'react';
import Slider from 'react-slick';

import LoaderDot from './LoaderDot';

export default function HomeSlider(props){

    const sliderSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    }

    return (

        <section className="home-carousel mt-4">
        <div className="container">
            <div className="row">
                <div className="col-sm-12 flex-fill">
                    <div className='homeSlider'>
                    {
                        props.isLoading ? 
                        <LoaderDot/> : 
                        <Slider {...sliderSettings}>
                        {(props.sliders).map(slide => (
                            <img key={slide.id} src={`https://fairmartslive.s3.ap-south-1.amazonaws.com/public/assets/images/sliders/${slide.photo}`} />
                        ))}
                        </Slider>
                    }
                    </div>
                </div>
                <div className="col-sm-3 flex-fill d-none d-lg-block">
                    {/* <div className="row row-cols-1 gy-2">
                        <div className="col"><img src="assets/images/essentials/fairmart-DGk97nTA.FairMart_500.gif" alt="" className="w-100"></div>
                        <div className="col"><img src="assets/images/homeslider/7u8gysxh.fairmart_0_EMI_web_1629270043.jpg" alt="" className="w-100"></div>
                    </div> */}
                </div>
            </div>
        </div>
    </section> 

    )

}