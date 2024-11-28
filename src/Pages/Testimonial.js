import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { dataTestimonial } from './Data/Testimonials_data'

const Testimonial = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 200,
        slidesToShow: 4,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    }

    return (
        <div id="testimonial">
            <div className="testimonial-content">
                <div className="testimonial-container container">
                    <Slider {...settings}>
                        {dataTestimonial.map((item, index) => (
                            <div className="testimonial-card card">
                                <div className='testimonial-card-image'>
                                    <img src={item.image} alt=""/>

                                </div>
                                <div className='testimonial-card-name'>
                                    <h4>{item.name}</h4>
                                </div>
                                <div className='testimonial-card-komen'>
                                    <h5>{item.comment}</h5>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    );
}
export default Testimonial;