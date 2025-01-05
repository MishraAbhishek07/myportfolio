import React from 'react';
import SkillProgressBar from './SkillProgressBar';

function SkillCategory({ skills, isScrolled }) {
  return (
    <div className="space-y-4">
      {skills.map((skill, index) => (
        <SkillProgressBar
          key={`${skill.name}-${index}`}
          skill={skill.name}
          value={skill.value}
          isScrolled={isScrolled}
        />
      ))}
    </div>
  );
}

export default SkillCategory;
