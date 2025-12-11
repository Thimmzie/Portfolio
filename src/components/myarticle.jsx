import React from 'react';
import { Writing } from '../../constants/index.js';

const myarticle = () => {
  return (
    <div className="mb-[5rem] mt-[3rem]">
      <div className="flex flex-col items-center ">
        <p className="pb-[0.5rem] font-[500] text-[1.1rem] text-center">
          {' '}
          Welcome to my collection of articles!
        </p>
        <p className="px-[1.3rem] md:w-[60%] lg:w-[40%] text-center text-[1rem] lg:text-[0.9rem]">
          Here, I share insights, tutorials, and deep dives into the science of
          innovation, technology, and modern software development.
        </p>
      </div>
      <div className="mt-[3rem] lg:mt-[5rem] flex justify-center lg:justify-center ">
        {Writing.map((art) => {
          return (
            <div
              key={art.id}
              className=" bg-[#ebebeb] w-[80%] sm:w-[65%] md:w-[60%] lg:w-[30%] border-1 border-[#d1cece] rounded-[7px] "
            >
              <img className="" src={art.img} />
              <div className="px-3 pt-4 ">
                <h2 className=" text-[1rem] lg:text-[0.9rem]">{art.title}</h2>
                <p className="text-[0.9rem] lg:text-[0.8rem] line-clamp-3 pt-3 font-[400]">
                  {art.excerpt}
                </p>
                <div className="flex justify-between pr-[2rem] lg:pr-[5rem]">
                  <p className="text-[0.9rem] lg:text-[0.7rem] pt-3">
                    {art.date}
                  </p>
                  <p className="text-[0.9rem] lg:text-[0.7rem] pt-3">
                    {art.time}
                  </p>
                </div>
                <button className="pt-[1.3rem] pb-[2rem]">
                  <a
                    href={art.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#1f0f79] text-[0.8rem] tracking-wider "
                  >
                    Read article...
                  </a>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default myarticle;
