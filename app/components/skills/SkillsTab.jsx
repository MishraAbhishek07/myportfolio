import React from 'react';
import SkillsSection from './SkillTab';



function SkillsTab({ skills, isScrolled }) {
  const half = Math.ceil(skills.length / 2);
  const firstHalf = skills.slice(0, half);
  const secondHalf = skills.slice(half);

  return (
    <div className="flex flex-wrap">
      <div className="w-full md:w-1/2 p-2">
        <SkillsSection
          skills={firstHalf}
          isScrolled={isScrolled}
        />
      </div>
      <div className="w-full md:w-1/2 p-2">
        <SkillsSection
          skills={secondHalf}
          isScrolled={isScrolled}
        />
      </div>
    </div>
  );
}

export default SkillsTab;
