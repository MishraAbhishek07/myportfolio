"use client";
import React, { useState, useRef } from 'react';
import SkillsTab from './SkillsTab';
import { useScrollPosition } from '../../hooks/useScrollPosition';
import { Tabs, Tab } from './Tabs'; // Using our custom Tabs component

const Skills = ({ heading, hardSkills, softSkills }) => {
  const skillsTabRef = useRef(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useScrollPosition(
    ({ prevPos, currPos }) => {
      if (!isScrolled && currPos.y - 400 < 0) setIsScrolled(true);
    },
    [],
    skillsTabRef
  );

  return (
    <div className="flex justify-center items-center min-h-screen  bg-gray-100">
      <div ref={skillsTabRef} className="bg-gray-50 w-[80vw]  rounded-lg shadow-lg m-5 p-5" id="skills">
        <div className="text-center pb-5">
          <h2 className="text-4xl font-bold text-gray-800">{heading}</h2>
        </div>
        <Tabs>
          <Tab title="Technical Skills">
            <div className="pt-3 px-1">
              <SkillsTab skills={hardSkills} isScrolled={isScrolled} />
            </div>
          </Tab>
          <Tab title="Soft Skills">
            <div className="pt-3 px-1">
              <SkillsTab skills={softSkills} isScrolled={isScrolled} />
            </div>
          </Tab>
        </Tabs>
      </div>
    </div>
  );
};

export default Skills;
