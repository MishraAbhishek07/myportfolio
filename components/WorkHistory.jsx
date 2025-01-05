import React from 'react';
import WorkCard from './WorkCard';

const WorkHistory = ({ jobs }) => {
  // console.log(first)
  return (
    <section className="py-12 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="bg-white dark:bg-gray-900 shadow-md rounded-lg p-6">
          <h2 className="text-6xl font-light mb-6 text-center text-gray-800 dark:text-gray-200">
            {jobs.heading}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {jobs.data.map((job, idx) => (
              <WorkCard key={idx} job={job} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkHistory;
