import React, { useState } from 'react';
import { SideBySideData } from './SideBySideData';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';

const ImageSlider = () => {
    const [curr, setCurr] = useState(0);
    const length = SideBySideData.length;

    const nextSlide = () =>{
        setCurr(curr === length - 1 ? 0 : curr + 1)
    };

    const prevSlide = () => {
        setCurr(curr === 0 ? length - 1 : curr - 1)
    }

    if (!Array.isArray(SideBySideData) || SideBySideData.length <= 0) {
        return null;
    };

    return (
        <div className="slider">
            <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
            <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
            {SideBySideData.map((slide, index) => {
                return (
                    <div
                     className={index === curr ? 'slide active' : 'slide'}
                      key={index}>
                          {index === curr && (
                          <img  src={slide.image} alt ={slide.alt}className="image"/>
                          )}
                    </div>
                )

            })}
        </div>
    )
}

export default ImageSlider
