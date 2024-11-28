import React from 'react';
import './css/Slider.css';
import { MdChevronLeft,MdChevronRight } from 'react-icons/md';
import { Rating } from '@mui/material';

const ReactCardSlider2 =(props)=>{
    const slideLeft =()=>{
        var slider = document.getElementById("slider2");
        slider.scrollLeft = slider.scrollLeft - 500;
    }

    const slideRight =()=>{
        var slider = document.getElementById("slider2");
        slider.scrollLeft = slider.scrollLeft + 500;
    }

    return(
        <div id="main-slider-container">
            <MdChevronLeft size={40} className="slider-icon left" onClick={slideLeft}/>
            <div id="slider2">
                { 
                props.slides.map((slide,index)=>{
                        return(
                            <div className="slider-card" key={index} onClick={() => slide.clickEvent()}>
                                <div className="slider-card-image" style={{ backgroundImage: `url(${slide.Images})`, backgroundSize: 'cover' }}></div>
                                <p className="slider-card-title">{slide.Name}</p>
                                <p className="slider-card-description">{slide.Name}</p>
                                <Rating className='slider-card-rating' name="read-only" value={slide.Rating} readOnly />
                            </div>
                        )
                    })
                }
            </div>
            <MdChevronRight size={40} className="slider-icon right" onClick={slideRight}/>
        </div>
    )
}
export default ReactCardSlider2;
