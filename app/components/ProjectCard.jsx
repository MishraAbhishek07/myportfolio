"use client";
import React from "react";

const ProjectCard = ({ name, description, repoUrl, stars, languages, lastUpdated }) => {
  return (
    <div className=" shadow-2xl bg-white  shadow-gray-400 dark:shadow-black border border-gray-300 rounded-lg p-4 transform transition duration-300 ease-in-out hover:-translate-y-2">
      <div className= "dark:bg-gray-800  rounded-lg p-6  ">
        <div>
          <h5 className="text-xl  mb-2 text-gray-900 dark:text-gray-100">{name}</h5>
       
          <div className="flex flex-col lg:flex-row  lg:space-x-4 mb-4">
            <a
              href={`${repoUrl}/archive/master.zip`}
              className="bg-white border  border-gray-400 hover:text-white dark:bg-gray-700 text-gray-500 dark:text-gray-200  py-2 px-4 rounded-lg hover:bg-gray-700 dark:hover:bg-gray-600 mb-2"
            >
              <i className="fab fa-github" /> Clone Project
            </a>
            <a
              href={repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white border border-gray-400  dark:bg-gray-700 text-gray-500 dark:text-gray-200  py-2 px-4 rounded-lg hover:bg-gray-700 hover:text-white dark:hover:bg-gray-600 mb-2"
            >
              <i className="fab fa-github" /> Repo
            </a>
          </div>
          <hr className="my-4 border-gray-300 dark:border-gray-600" />
          <div className="pb-3">
            Languages:{" "}
            {languages.length ? languages.map((language, index) => (
               <a key={index} href="">
                 <span
                
                className="bg-gray-100 dark:bg-gray-700 text-black font-medium text-sm dark:text-gray-200 rounded  py-1 mx-1"
              >
                {language}
              </span>
               </a>
             
            )) : "No languages available"}
          </div>
          <div className="text-gray-700 dark:text-gray-300">
            <a
              href={`${repoUrl}/stargazers`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 dark:text-gray-200 mr-4"
            >
              <i className="fab fa-github" /> Stars{" "}
             
              
            </a>
            <small className="text-gray-600 dark:text-gray-400">Updated on {lastUpdated}</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
