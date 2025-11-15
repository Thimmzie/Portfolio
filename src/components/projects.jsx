import React from 'react';
import { Projects } from '../../constants/index.js';

const projects = () => {
  return (
    <div className="mb-[20rem] bg-[#e7e7e7] pt-[5rem] pb-[7rem] lg:mt-[4rem]">
      <h1 className="text-[#000000] text-[1.5rem] pl-[2rem] lg:pl-[4.5rem] font-[600]">
        Recent Projects
      </h1>
      <div>
        <div className="flex flex-col mt-[1.4rem] items-center gap-[2rem] md:flex-row md:px-4 lg:px-[4rem]">
          {Projects.map((detail) => {
            return (
              <div
                className="bg-[#f8f8f8] w-[90%] rounded-[20px] border-1 border-[#c7c7c7] px-5 h-[53%] pt-[2rem] pb-[1rem] lg:h-[80vh]"
                key={detail.id}
              >
                <p className="text-[1.2rem] font-[600]">{detail.title}</p>
                <p className="text-[1rem] font-[400] pt-3 tracking-wide lg:text-[0.9rem] ">
                  {detail.about}
                </p>
                <a
                  href={detail.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#455ce9] mt-1 text-[0.8rem] mb-6"
                >
                  View Project
                </a>
                <img
                  className="rounded-[8px] mt-[1rem] h-[24vh] mx-auto lg:w-[100%] lg:h-[72%]"
                  src={detail.img}
                />
              </div>
            );
          })}
        </div>
        <div className="flex flex-col justify-center mt-[4rem]">
          <button className="view-btn" data-hover="View all projects">
            <a href="#">
              <span>View all projects</span>
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default projects;
