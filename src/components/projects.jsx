import React from 'react';
import { Projects } from '../../constants/index.js';

const projects = () => {
  return (
    <div className="mb-[20rem] bg-[#f7f7f7] pt-[2rem] pb-[20rem]">
      <h1 className="text-[#000000] text-[1.5rem] pl-[2rem]">
        Recent Projects
      </h1>
      <div>
        <div className="flex flex-col mt-[1.4rem] items-center gap-[2rem]">
          {Projects.map((detail) => {
            return (
              <div
                className="bg-[#ffffff] w-[90%] rounded-[20px] border-1 border-[#c7c7c7] px-5 h-[47vh] flex flex-col justify-center"
                key={detail.id}
              >
                <p className="text-[1.2rem] font-[600]">{detail.title}</p>
                <p className="text-[0.9rem] font-light pt-3 ">{detail.about}</p>
                <a
                  href={detail.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#455ce9] mt-1 text-[0.8rem] mb-3"
                >
                  View Project
                </a>
                <img className="rounded-[8px]" src={detail.img} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default projects;
