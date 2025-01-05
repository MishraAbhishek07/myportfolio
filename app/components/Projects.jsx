"use client";
import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const projectData = [
    {
      name: "myportfolio",
      repoUrl: "https://github.com/MishraAbhishek07/myportfolio",
      stars: 123,
      languages: ["JavaScript: 78.8 %", "CSS: 19 %", "HTML: 2.1%"],
      lastUpdated: "January 17, 2024",
    },
    {
      name: "Ecommerce-Book",
      repoUrl: "https://github.com/MishraAbhishek07/E-Commerce-Books",
      stars: 200,
      languages: ["JavaScript: 73.8 %", "CSS: 23 %", "HTML: 4.1%"],
      lastUpdated: "April 4, 2024",
    },
    {
      name: "GetDataBack",
      repoUrl: "https://github.com/MishraAbhishek07/getdata",
      stars: 150,
      languages: ["JavaScript: 80.8 %", "CSS: 14 %", "HTML: 4.3%"],
      lastUpdated: "March 1, 2024",
    },
    {
      name: "CineMate",
      repoUrl: "https://github.com/MishraAbhishek07/cinemate",
      stars: 80,
      languages: ["JavaScript: 51.5 %", "CSS: 45.3 %", "HTML: 3%"],
      lastUpdated: "February 7, 2024",
    },
  ];

  return (
    <div id="projects" className="bg-slate-100 dark:bg-gray-900  relative">

      <div className="text-center font-thin mb-8 text-6xl text-gray-900 dark:text-gray-100"> Recent Projects</div>
      <div className="container w-[85vw] mx-auto p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projectData.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
