import Image from 'next/image';
import React from 'react';


const ExperienceCard = ({ data }) => {
    // console.log(data.companylogo)
  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-md flex flex-col justify-center content-center items-center">
      <div className="mr-4">
         <Image src={data.companylogo} alt={`${data.company} logo`} className="w-[300px] rounded-full" />
      </div>
      <div>
        <h3 className="text-2xl font-semibold mb-2">{data.role}</h3>
        <p className="text-gray-700 mb-1">{data.date}</p>
       
      </div>
    </div>
  );
}

export default ExperienceCard;
