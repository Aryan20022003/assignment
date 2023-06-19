import React, { useState, useEffect } from 'react';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';
import { FiCircle } from 'react-icons/fi';
import Data from './CarouselData';

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [imagesLoaded, setImagesLoaded] = useState(false);
    const [transitioning, setTransitioning] = useState(false);

    useEffect(() => {
        const preloadImages = () => {
            const imagePromises = Data.map((item) => {
                return new Promise((resolve, reject) => {
                    const img = new Image();
                    img.src = item.img;
                    img.onload = resolve();
                    img.onerror = reject();
                });
            });

            Promise.all(imagePromises)
                .then(() => {
                    setImagesLoaded(true);
                })
                .catch((error) => {
                    console.error('Error preloading images:', error);
                });
        };

        preloadImages();
    }, []);

    const goToPrevious = () => {
        if (transitioning) return;
        setTransitioning(true);
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? Data.length - 1 : prevIndex - 1
        );
    };

    const goToNext = () => {
        if (transitioning) return;
        setTransitioning(true);
        setCurrentIndex((prevIndex) =>
            prevIndex === Data.length - 1 ? 0 : prevIndex + 1
        );
    };

    const handleTransitionEnd = () => {
        setTransitioning(false);
    };

    return (
        <div className="relative pt-10">
            <button
                className="absolute left-0 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-indigo-200 hover:bg-indigo-600 text-slate-50 hover:text-white focus:outline-none"
                onClick={goToPrevious}
            >
                <IoIosArrowBack className="h-8 w-8" />
            </button>
            <div
                className={`text-center cursoalHero bg-transparent flex flex-col md:flex-row justify-center align-middle gap-4 md:gap-20 md:px-10 md:h-56 transition-opacity ${transitioning ? 'opacity-0' : 'opacity-100'
                    }`}
                onTransitionEnd={handleTransitionEnd}
            >
                {imagesLoaded && (
                    <img
                        src={Data[currentIndex].img}
                        alt="img of cards"
                        className="md:w-3/4 md:h-56 h-52 transition-opacity duration-500"
                    />
                )}
                <div className="flex flex-col md:justify-center md:align-middle md:text-left md:pr-48">
                    <h2 className="font-semibold pb-3 md:text-xl md:font-bold">
                        {Data[currentIndex].heading}
                    </h2>
                    <p className="md:text-base text-slate-500">
                        {Data[currentIndex].para}
                    </p>
                </div>
            </div>
            <div className="flex justify-center mt-4">
                {Data.map((_, index) => (
                    <FiCircle
                        key={index}
                        className={`h-2 w-2 mx-1 ${index === currentIndex ? 'bg-purple-600' : 'bg-purple-200'
                            } cursor-pointer`}
                        onClick={() => setCurrentIndex(index)}
                    />
                ))}
            </div>
            <button
                className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-indigo-200 hover:bg-indigo-600 hover:text-white focus:outline-none text-slate-50"
                onClick={goToNext}
            >
                <IoIosArrowForward className="h-8 w-8" />
            </button>
        </div>
    );
};

export default Carousel;
