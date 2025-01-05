"use client";
import React from 'react';
import Image from 'next/image';
import { About as Aboutme } from '@/assets/assets';
import Logo from '@/assets/profile.jpg';


const About = () => {
  const { show, imgSize, heading, message, resume } = Aboutme;

  return (
    <div id="aboutme" className="content-section bg-gray-200 dark:bg-gray-800 lg:px-16 py-8">
     
      <div  className="lg:w-[90vw] w-full h-[90vh] flex flex-wrap gap-14 items-center lg:flex-nowrap">
        {show && (
          <div className="w-full lg:w-6/12 hidden flex justify-center lg:block lg:justify-center mb-8 lg:mb-0">
            <Image
              className="border border-gray-400 dark:border-gray-600 rounded-full"
              src={Logo}
              alt="profile picture"
              width={imgSize}
              height={imgSize}
            />
          </div>
        )}
        <div className={`w-full lg:w-${show ? "7/12" : "full"} flex flex-col items-center  px-4 lg:px-8`}>
          <h2 className="text-6xl font-thin mb-10 text-center   text-gray-800 dark:text-gray-100">{heading}</h2>
          <p className="text-xl text-center py-5 lg:text-left text-gray-700 dark:text-gray-300">{message}</p>
          {resume && (
            <p className="text-xl text-center lg:text-left mt-4">
              <a
                className="inline-block  px-8 py-3 text-lg  text-black dark:text-blue-400 border border-black opacity-80 dark:border-blue-400 rounded-lg hover:bg-black  dark:hover:bg-blue-400 hover:text-white dark:hover:text-gray-900 transition"
                href={resume}
                target="_blank"
                rel="noreferrer noopener"
                role="button"
                aria-label="Resume/CV"
              >
                Resume
              </a>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default About;
