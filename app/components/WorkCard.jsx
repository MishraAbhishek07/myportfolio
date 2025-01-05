import Image from 'next/image';
import React from 'react';

const WorkCard = ({ job }) => {
  console.log(job)
  return (
    <div className="flex flex-col items-center justify-center  p-4">
      <div className="mb-1">
        <Image 
          src={job.companylogo} 
          alt={`${job.company} logo`} 
          className="w-[300px] rounded-full" 
        />
      </div>
      <div className="text-center ">
        <h3 className="text-xl font-thin mb-2">{job.role}</h3>
        <p className="text-gray-600">{job.date}</p>
      </div>
    </div>
  );
};

export default WorkCard;
