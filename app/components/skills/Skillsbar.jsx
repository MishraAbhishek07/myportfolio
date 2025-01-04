import React from 'react';
import { Progress } from '@headlessui/react';
import { skills } from '@/assets/assets';
function SkillsBar() {
    const{ skill, value, isScrolled }=skills
  return (
    <div className="w-11/12">
      <p className="text-lg mb-1 mt-2">{skill}</p>
      <Progress
        className={!isScrolled ? "bg-gray-300 h-2" : "bg-blue-500 h-2 transition-all duration-700"}
        value={value}
      />
    </div>
  );
}

export default SkillsBar;
