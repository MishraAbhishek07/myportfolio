"use client";
import React from 'react';
import Link from 'next/link';
import { Typewriter } from 'react-simple-typewriter';
import { herosectiondata } from '@/assets/assets';

const Herosection = () => {
  const { firstName, message, lastName, icons } = herosectiondata

  return (
    <div
      id="home"
      className="flex items-center justify-center min-h-screen text-center bg-gradient-animation"
    >
      <div id="stars" className="absolute inset-0 w-full h-full"></div>
      <div className="relative container mx-auto px-4">
        <h1 className="text-8xl font-thin text-white">
          {firstName} {lastName}
        </h1>
        <div className="text-xl my-4 text-white">
          <Typewriter
            words={[message]}
            loop={1}
         
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </div>
        <div className="flex justify-center items-center space-x-4 mt-14">
          {icons.map((icon, index) => (
            <Link
              key={`social-icon-${index}`}
             
              rel="noopener noreferrer"
              href={icon.url}
              aria-label={`My ${icon.image.split('-')[1]}`}
              className="text-white hover:text-black"
            >
              <i className={`fab ${icon.image} fa-3x`} />
            </Link>
          ))}
        </div>
        <Link
          href="#aboutme"
          className="inline-block border mt-10 px-8 py-3 text-lg  text-white bg-transparent rounded-lg hover:bg-white hover:text-black transition-colors duration-300"
        >
          More about me
        </Link>
      </div>
    </div>
  );
};

export default Herosection;
