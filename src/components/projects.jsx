import React, { useEffect } from 'react';
import { Projects } from '../../constants/index.js';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

const projects = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    let mm = gsap.matchMedia();
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
          stagger: 0.25, // second box animates slower
          scrollTrigger: {
            trigger: '.project',
            start: 'top 90%',
            toggleActions: 'play reverse play reverse',
          },
        }
      );
    });

    return () => mm.revert();
  }, []);

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
                className="bg-[#f8f8f8] w-[90%] rounded-[20px] border-1 border-[#c7c7c7] px-5 h-[53%] pt-[2rem] pb-[1rem] lg:h-[80vh] project"
                key={detail.id}
              >
                <p className="text-[1.2rem] font-[600]">{detail.title}</p>
                <p className="text-[0.9rem] font-[200] pt-3 tracking-wide lg:text-[0.9rem] line-clamp-2">
                  {detail.about}
                </p>
                <a
                  href={detail.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#455ce9] mt-4 text-[0.8rem] mb-6 tracking-wider"
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
