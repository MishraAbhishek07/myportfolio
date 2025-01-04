"use client";
import React, { useState } from 'react';
import Image from 'next/image';

const Leadership = ({ heading, message, img }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? img.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === img.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="w-screen h-screen flex flex-col bg-slate-200 md:flex-row">
      {/* Left Side: Text Content */}
      <div className="md:w-1/2 flex flex-col justify-center items-center p-8 text-center">
        <h2 className="text-4xl font-bold mb-4">{heading}</h2>
        <p className="text-lg leading-relaxed max-w-[90%] md:max-w-[80%]">
          {message}
        </p>
      </div>

      {/* Right Side: Carousel */}
      <div className="md:w-1/2 flex justify-center items-center relative">
        <div
          id="default-carousel"
          className="relative w-[90%] h-[50vh] sm:w-[80%] sm:h-[60vh] md:w-[70%] md:h-[70%]"
          data-carousel="slide"
        >
          <div className="relative w-full h-full overflow-hidden">
            {img.map((image, index) => (
              <div
                key={index}
                className={`absolute inset-0 w-full h-full transition-opacity duration-700 ease-in-out ${
                  index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
                }`}
                data-carousel-item
              >
                <Image
                  src={image.img}
                  alt={image.label}
                  fill
                  style={{ objectFit: 'cover' }}
                />
                <div className="absolute bottom-0 left-0 right-0 bg-transparent bg-opacity-50 text-gray-400 py-10 p-4">
                  <h3 className="text-xl font-semibold">{image.label}</h3>
                  <p className="text-sm">{image.paragraph}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2 rtl:space-x-reverse">
            {img.map((_, index) => (
              <button
                key={index}
                type="button"
                className={`w-3 h-3 rounded-full ${
                  index === currentIndex ? 'bg-white' : 'bg-gray-300'
                }`}
                aria-current={index === currentIndex}
                aria-label={`Slide ${index + 1}`}
                onClick={() => setCurrentIndex(index)}
              ></button>
            ))}
          </div>

          <button
            type="button"
            className="absolute top-1/2 left-0 z-30 flex items-center justify-center w-10 h-10 -translate-y-1/2 bg-black/50 rounded-full"
            onClick={prevSlide}
            data-carousel-prev
          >
            <svg
              className="w-4 h-4 text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 1 1 5l4 4"
              />
            </svg>
            <span className="sr-only">Previous</span>
          </button>

          <button
            type="button"
            className="absolute top-1/2 right-0 z-30 flex items-center justify-center w-10 h-10 -translate-y-1/2 bg-black/50 rounded-full"
            onClick={nextSlide}
            data-carousel-next
          >
            <svg
              className="w-4 h-4 text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
            <span className="sr-only">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Leadership;
