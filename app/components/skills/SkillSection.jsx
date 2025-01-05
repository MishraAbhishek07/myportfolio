"use client";
import React, { useEffect, useState } from "react";
import SkillsList from "./SkillsList";

const SkillSection = ({ sectionTitle, technicalSkills, interpersonalSkills }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSkillSet, setActiveSkillSet] = useState("technical");

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.5 }
    );
    const target = document.getElementById("skills");
    if (target) observer.observe(target);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      id="skills"
      className={`flex justify-center items-center min-h-screen transition-opacity duration-700 ${
        isVisible ? "opacity-100" : "opacity-0"
      } bg-gray-100 dark:bg-gray-800`}
    >
      <div className="bg-white dark:bg-gray-900 w-[80vw] rounded-lg shadow-lg m-5 p-5">
        <div className="text-center pb-10">
          <h2 className="text-6xl font-thin text-gray-800 dark:text-gray-100">
            {sectionTitle}
          </h2>
        </div>
        <div className="flex justify-between mb-10">
  <button
    className={`flex-1 px-4 py-2 text-center rounded-sm transition duration-300 ${
      activeSkillSet === "technical"
        ? "border-t-2  border-r-2 text-blue-600  border-gray-400"
        : "border-b-2 hover:border-t-2  hover:border-l-2  border-gray-400"
    }`}
    onClick={() => setActiveSkillSet("technical")}
  >
    Technical Skills
  </button>
  <button
    className={`flex-1 px-4 py-2 text-center transition duration-300 ${
      activeSkillSet === "interpersonal"
        ? "border-t-2 border-l-2  text-blue-600  border-gray-400"
        : "border-b-2 hover:border-t-2 hover:border-r-2 border-gray-400 "
    }`}
    onClick={() => setActiveSkillSet("interpersonal")}
  >
    Soft Skills
  </button>
</div>



        {activeSkillSet === "technical" ? (
          <SkillsList skills={technicalSkills} isScrolled={isVisible} />
        ) : (
          <SkillsList skills={interpersonalSkills} isScrolled={isVisible} />
        )}
      </div>
    </div>
  );
};

export default SkillSection;
