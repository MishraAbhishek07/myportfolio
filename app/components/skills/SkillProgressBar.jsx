import React, { useEffect, useState } from 'react';

function SkillProgressBar({ skill, value, isScrolled }) {
  const [currentValue, setCurrentValue] = useState(0);
//  console.log(value)
  // When the section is scrolled into view, animate the width
  useEffect(() => {
    if (isScrolled) {
      setCurrentValue(value);
    }
  }, [isScrolled, value]);

  return (
    <div className="w-full p-4 border border-gray-200 rounded-lg shadow-md">
      <p className="text-lg mb-1 font-semibold text-gray-800">{skill}</p>
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div
          className={`h-2.5 rounded-full transition-all duration-700 ${
            isScrolled ? 'bg-blue-500' : 'bg-gray-300'
          }`}
          style={{ width: `${currentValue}%` }} // Animated width
        />
      </div>
    </div>
  );
}

export default SkillProgressBar;
