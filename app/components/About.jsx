"use client";
import React from 'react';
import Image from 'next/image';
import { About } from '@/assets/assets';
import Logo from '@/assets/profile.jpg';

const AboutMe = () => {
  const { show, imgSize, heading, message, resume } = About;

  return (
    <div id="aboutme" className=" bg-gray-100 lg:px-16 py-8">
      <div className="  w-[90vw] h-[90vh] flex flex-wrap gap-14 items-center lg:flex-nowrap">
        {show && (
          <div className="w-full lg:w-4/12  hidden  flex justify-center lg:block lg:justify-center  mt- mb-8 lg:mb-0">
            <Image
              className="border border-gray-400 rounded-full"
              src={Logo}
              alt="profile picture"
              width={imgSize}
              height={imgSize}
            //   layout="intrinsic"
            />
          </div>
        )}
        <div className={`w-full lg:w-${show ? "7/12" : "full"} flex flex-col items-center lg:items-start px-4 lg:px-8`}>
          <h2 className="text-4xl mb-5 text-center lg:text-left">{heading}</h2>
          <p className="text-xl text-center lg:text-left">{message}</p>
          {resume && (
            <p className="text-xl text-center lg:text-left mt-4">
              <a
                className="inline-block px-8 py-3 text-lg font-bold text-blue-500 border border-blue-500 rounded-lg hover:bg-blue-500 hover:text-white transition"
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

export default AboutMe;
