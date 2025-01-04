import React, { useState } from 'react';

function Tabs({ children }) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div>
      <div className="flex  justify-center space-x-1 bg-blue-900/20 p-1 rounded-lg">
        {React.Children.map(children, (child, index) => (
          <button
            className={`px-4 py-2 rounded-lg ${index === activeTab ? 'bg-white text-blue-900 shadow' : 'text-blue-900'}`}
            onClick={() => setActiveTab(index)}
          >
            {child.props.title}
          </button>
        ))}
      </div>
      <div className="mt-4">
        {React.Children.toArray(children)[activeTab]}
      </div>
    </div>
  );
}

function Tab({ children }) {
  return <div>{children}</div>;
}

export { Tabs, Tab };
