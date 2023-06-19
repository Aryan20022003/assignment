import React from 'react';
import { useState } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';


const Carousel = ({ data }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const handlePrevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === 0 ? data.length - 1 : prevSlide - 1));
    };

    const handleNextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === data.length - 1 ? 0 : prevSlide + 1));
    };

    const handleDotClick = (index) => {
        setCurrentSlide(index);
    };

    return (
        <div className="carousel relative">
            <button className="absolute left-0 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-indigo-200 hover:bg-indigo-600 text-slate-50 hover:text-white focus:outline-none" onClick={handlePrevSlide}>
                <IoIosArrowBack className="text-softPink" />
            </button>
            {data[currentSlide]}
            <button className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-indigo-200 hover:bg-indigo-600 hover:text-white focus:outline-none text-slate-50" onClick={handleNextSlide}>
                <IoIosArrowForward className="text-white" />
            </button>
            <div className="carousel-dots absolute bottom-2 left-0 right-0 flex justify-center">
                {data.map((_, index) => (
                    <button
                        key={index}
                        className={`carousel-dot mx-1 w-3 h-3 rounded-full ${index === currentSlide ? 'bg-indigo-600' : 'bg-gray-300'}`}
                        onClick={() => handleDotClick(index)}
                    ></button>
                ))}
            </div>
        </div>
    );
};

export default Carousel;
