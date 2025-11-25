import React, { useEffect } from 'react';
import { FullProjects } from '../../constants/index.js';
import { MdArrowOutward } from 'react-icons/md';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

const pojectdeji = () => {
  useEffect(() => {
    gsap.utils.toArray('.project').forEach((item) => {
      gsap.fromTo(
        item,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.45,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: item,
            start: 'top 80%',
            toggleActions: 'play reverse play reverse',
          },
        }
      );
    });
  }, []);
  const colors = ['#e6f9ff', '#f5f5f5', '#e6fff9', '#f5f5f5'];
  return (
    <div className="mt-[3rem] mb-[5rem]">
      <h2 className="text-center text-[1.5rem] font-[600]">
        A collection of my work
      </h2>
      <div className="mt-[4rem] flex flex-col gap-12">
        {FullProjects.map((detail, i) => (
          <div
            className=" px-6 py-8 rounded-[10px] w-[90%] lg:w-[70%] mx-auto flex flex-col lg:flex-row lg:gap-4 border-1 border-[#dddddd] project"
            style={{ backgroundColor: colors[i % colors.length] }}
            key={detail.id}
          >
            <div className="lg:w-[120%]">
              <h2 className="text-[1.3rem] font-[600]">{detail.title}</h2>
              <p className="py-4 text-[0.9rem] text-[#535353] font-[400] leading-7">
                {detail.about}
              </p>
              <p className="text-[1rem] text-[#6d6d6d] lg:text-[0.9rem] lg:text-[#252525]">
                {detail.stack}
              </p>
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
            <div className="lg:mt-[2rem]">
              <img className="rounded-[8px] " src={detail.img} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default pojectdeji;
