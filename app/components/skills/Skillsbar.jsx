import React from 'react';

function SkillsBar({ skill, value, isScrolled }) {
  return (
    <div className="w-full p-4 border border-gray-200 rounded-lg shadow-md">
      <p className="text-lg mb-1 font-semibold text-gray-800">{skill}</p>
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div
          className={`h-2.5 rounded-full ${isScrolled ? 'bg-blue-500 transition-all duration-700' : 'bg-gray-300'}`}
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
}

export default SkillsBar;
