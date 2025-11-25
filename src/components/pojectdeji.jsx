import React from 'react';
import { FullProjects } from '../../constants/index.js';
import { MdArrowOutward } from 'react-icons/md';

const pojectdeji = () => {
  return (
    <div className="mt-[3rem] mb-[50rem]">
      <h2 className="text-center text-[1.5rem] font-[600]">
        A collection of my work
      </h2>
      <div className="mt-[4rem] flex flex-col gap-8">
        {FullProjects.map((detail) => (
          <div
            className=" px-4 py-8 rounded-[10px] w-[90%] bg-[#e6f9ff] mx-auto flex flex-col"
            key={detail.id}
          >
            <div>
              <h2 className="text-[1.3rem] font-[600]">{detail.title}</h2>
              <p className="py-4 text-[1.1rem] text-[#535353] font-[400] leading-7">
                {detail.about}
              </p>
              <p className="text-[1rem] text-[#6d6d6d]">{detail.stack}</p>
              <button className="flex gap-1 bg-[white] border-1  mt-4 mb-6 text-[0.8rem] tracking-wider rounded-[30px] py-2 px-4 border-[#aaaaaa] hover:bg-[#f3f3f3] cursor-pointer transition-all duration-300">
                <a
                  href={detail.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#2b2b2b] text-[0.8rem]  tracking-wider "
                >
                  View Project
                </a>
                <MdArrowOutward className="text-[#2b2b2b] " size={17} />
              </button>
            </div>
            <div>
              <img className="rounded-[8px]" src={detail.img} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default pojectdeji;
