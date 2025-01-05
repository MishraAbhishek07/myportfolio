"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

const SliderShowcase = ({ title, description, slides }) => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  
  useEffect(() => {
    const slideTimer = setInterval(() => {
      setActiveSlideIndex((prevIndex) =>
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);
    return () => clearInterval(slideTimer);
  }, [slides]);

  const moveToPreviousSlide = () => {
    setActiveSlideIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const moveToNextSlide = () => {
    setActiveSlideIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="w-full h-full flex flex-col  dark:bg-gray-800">
    
      <div className="text-center p-6 sm:p-8">
        <h2 className="text-6xl font-thin text-black dark:text-white">
          {title}
        </h2>
      </div>

    
      <div className="flex flex-col md:flex-row w-full">
    
        <div className="w-full md:w-1/2 flex justify-center items-center p-4 sm:p-8 text-center">
          <p className="text-xl font-thin text-left lg:px-8 leading-7 text-gray-700 dark:text-gray-300">
            {description}
          </p>
        </div>

     
        <div className="w-full md:w-1/2 flex justify-center  relative">
          <div className="relative w-full max-w-[90%] sm:max-w-[80%] lg:max-w-[80%] h-[30vh] sm:h-[40vh] md:h-[50vh] lg:h-[70vh]">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`absolute inset-0 w-full h-full transition-opacity duration-700 ease-in-out ${
                  index === activeSlideIndex ? "opacity-100 z-10" : "opacity-0 z-0"
                }`}
              >
                <Image
                  src={slide.img}
                  alt="slide"
                  fill
                  style={{ objectFit: "contain" }} 
                  priority={index === activeSlideIndex} 
                />
                <div className="absolute bottom-0 w-full bg-black bg-opacity-50 text-white py-3 px-4">
                  <h3 className="text-lg">{slide.title}</h3>
                  <p className="text-sm">{slide.description}</p>
                </div>
              </div>
            ))}

           
            <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-3 z-50">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveSlideIndex(index)}
                  className={`w-5 h-1  ${
                    index === activeSlideIndex
                      ? "bg-blue-500"
                      : "bg-gray-400 dark:bg-gray-600"
                  }`}
                ></button>
              ))}
            </div>

          
            <button
              onClick={moveToPreviousSlide}
              className="absolute top-1/2 left-0 transform -translate-y-1/2 text-white w-10 h-10 flex justify-center items-center rounded-full z-50"
            >
              <svg
                className="w-4 h-4"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  d="M5 1 1 5l4 4"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="sr-only">Previous</span>
            </button>

            <button
              onClick={moveToNextSlide}
              className="absolute top-1/2 right-0 transform -translate-y-1/2 text-white w-10 h-10 flex justify-center items-center rounded-full z-50"
            >
              <svg
                className="w-4 h-4"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  d="M1 9l4-4-4-4"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="sr-only">Next</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SliderShowcase;
