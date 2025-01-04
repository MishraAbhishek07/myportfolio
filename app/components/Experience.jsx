import React from 'react';
import ExperienceCard from './ExperienceCard';

const Experience = ({ experiences }) => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-4xl font-bold mb-5 text-center">{experiences.heading}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {experiences.data.map((data, index) => (
              <ExperienceCard key={index} data={data} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
