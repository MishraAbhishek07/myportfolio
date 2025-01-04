import React from 'react';
import SkillsBar from './SkillsBar';

function SkillsSection({ skills, isScrolled }) {
  return (
    <div className="space-y-4">
      {skills.map((skill, index) => (
        <SkillsBar
          key={`${skill.name}-${index}`}
          skill={skill.name}
          value={skill.value}
          isScrolled={isScrolled}
        />
      ))}
    </div>
  );
}

export default SkillsSection;
