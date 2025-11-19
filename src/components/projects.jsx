import React, { useEffect } from 'react';
import { Projects } from '../../constants/index.js';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { MdArrowOutward } from 'react-icons/md';

gsap.registerPlugin(ScrollTrigger);

const projects = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const mm = gsap.matchMedia();
    mm.add('(max-width: 768px)', () => {
      gsap.utils.toArray('.project').forEach((card) => {
        gsap.fromTo(
          card,
          { y: 80, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      });
    });

    mm.add('(min-width: 769px)', () => {
      gsap.fromTo(
        '.project',
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: 'power3.out',
          stagger: 0.25,
          scrollTrigger: {
            trigger: '.project',
            start: 'top 90%',
            toggleActions: 'play reverse play reverse',
          },
        }
      );
    });

    // gsap.from('.view-btn', {
    //   y: 70,
    //   opacity: 0,
    //   duration: 0.5,
    //   ease: 'back.out(1.7)',
    //   scrollTrigger: {
    //     trigger: '.view-btn',
    //     start: 'top 95%',
    //     toggleActions: 'play none none reverse',
    //   },
    // });

    window.addEventListener('load', () => {
      ScrollTrigger.refresh();
    });

    return () => mm.revert();
  }, []);

  const colors = ['#e3f2fd', '#e3f2fd'];

  return (
    <div className="mb-[2rem] bg-[#ffffff] pt-[5rem] pb-[7rem] lg:mt-[4rem] flex flex-col items-center">
      <h1 className="text-[#000000] text-[1.5rem] font-[600]">
        Recent Projects
      </h1>
      <div>
        <div className="flex flex-col mt-[3rem] items-center gap-[2rem] md:flex-row md:px-4 lg:px-[4rem]">
          {Projects.map((detail, i) => {
            return (
              <div
                className="  w-[90%] rounded-[20px] border-1 border-[#c7c7c7] px-5 h-[53%] pt-[2rem] pb-[1rem] lg:h-[85vh] project"
                style={{ backgroundColor: colors[i % colors.length] }}
                key={detail.id}
              >
                <p className="text-[1.2rem] font-[600]">{detail.title}</p>
                <p className="text-[0.9rem] text-[#313131] font-[200] pt-3 tracking-wider lg:tracking-wide lg:text-[0.9rem] line-clamp-2">
                  {detail.about}
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
                <img
                  className="rounded-[8px] mt-[1rem] h-[24vh] mx-auto lg:w-[100%] lg:h-[65%]"
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
