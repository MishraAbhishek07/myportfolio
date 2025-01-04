"use client";
import React, { useRef } from 'react';
import Link from 'next/link';
import { mainBody } from '@/assets/assets';

const MainBody = () => {
  const ref = useRef(null);
  const { gradientColors, firstName, message, lastName, icons } = mainBody;

  return (
    <div
      id="home"
      className="flex items-center justify-center min-h-screen text-center bg-gradient-animation"
    >
      <div id="stars" className="absolute inset-0 w-full h-full"></div>
      <div className="relative container mx-auto px-4">
        <h1 ref={ref} className="text-5xl font-bold text-light">
          {firstName} {lastName}
        </h1>
        <div className="text-2xl my-4 text-light">{message}</div>
        <div className="flex justify-center items-center space-x-4 mt-8">
          {icons.map((icon, index) => (
            <a
              key={`social-icon-${index}`}
              target="_blank"
              rel="noopener noreferrer"
              href={icon.url}
              aria-label={`My ${icon.image.split('-')[1]}`}
              className="text-white"
            >
              <i className={`fab ${icon.image} fa-3x`} />
            </a>
          ))}
        </div>
        <Link href="#aboutme" className="inline-block mt-10 px-8 py-3 text-lg font-bold text-white bg-blue-500 rounded-lg hover:bg-blue-700">
          More about me
        </Link>
      </div>
    </div>
  );
};

export default MainBody;
