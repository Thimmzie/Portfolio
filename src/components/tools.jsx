import React, { useEffect } from 'react';
import Reactt from '../assets/images/reactt.png';
import Javascript from '../assets/images/javascript.png';
import Next from '../assets/images/nextt.png';
import Git from '../assets/images/git.png';
import Github from '../assets/images/githubb.png';
import Figma from '../assets/images/figma.png';
import Gsapp from '../assets/images/gsap.png';
import Reduxx from '../assets/images/redux.png';
import Zustand from '../assets/images/zustand.jpeg';
import Vanilla from '../assets/images/vanillacss.png';
import Tailwind from '../assets/images/tailwind.png';
import Typescript from '../assets/images/typescript.png';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

const tools = () => {
  useEffect(() => {
    gsap.fromTo(
      '.tech',
      { y: 80, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: 'back.out(1.7)',
        stagger: 0.15,
        scrollTrigger: {
          trigger: '.tech',
          start: 'top 90%',
          toggleActions: 'play none none reverse',
        },
      }
    );
  }, []);
  return (
    <div className="mb-[5rem] -mt-[4rem]">
      <div className="flex flex-col items-center text-[#000000] text-[1.5rem] font-[600] z-50">
        <h1>Tools & Technologies</h1>
      </div>
      <div className="mt-[3rem] px-[2rem] grid grid-cols-3 md:grid-cols-4 gap-7 gap-y-[3.2rem] lg:grid-cols-6 lg:px-[15rem] place-items-center">
        <div className="flex flex-col items-center tech">
          <img className="w-[3rem] rounded-[7px]" src={Reactt} />
          <p className="text-[#2c2c2c] text-[1rem] mt-2">React JS</p>
        </div>
        <div className="flex flex-col items-center tech">
          <img className="w-[4.7rem] rounded-[7px]" src={Next} />
          <p className="text-[#2c2c2c] text-[1rem] mt-2">Next JS</p>
        </div>
        <div className="flex flex-col items-center tech">
          <img className="w-[2.8rem] rounded-[7px]" src={Javascript} />
          <p className="text-[#2c2c2c] text-[1rem] mt-2">JavaScript</p>
        </div>
        <div className="flex flex-col items-center tech">
          <img className="w-[3rem] rounded-[7px]" src={Tailwind} />
          <p className="text-[#2c2c2c] text-[1rem] mt-2">Tailwind</p>
        </div>
        <div className="flex flex-col items-center tech">
          <img className="w-[3rem] rounded-[7px]" src={Gsapp} />
          <p className="text-[#2c2c2c] text-[1rem] mt-2">Gsap</p>
        </div>
        <div className="flex flex-col items-center tech">
          <img className="w-[3rem] rounded-[7px]" src={Reduxx} />
          <p className="text-[#2c2c2c] text-[1rem] mt-2">Redux</p>
        </div>
        <div className="flex flex-col items-center tech">
          <img className="w-[3rem] rounded-[7px]" src={Typescript} />
          <p className="text-[#2c2c2c] text-[1rem] mt-2">TypeScript</p>
        </div>
        <div className="flex flex-col items-center tech">
          <img className="w-[3rem] rounded-[7px]" src={Zustand} />
          <p className="text-[#2c2c2c] text-[1rem] mt-2">Zustand</p>
        </div>
        <div className="flex flex-col items-center tech">
          <img className="w-[3rem] rounded-[7px]" src={Figma} />
          <p className="text-[#2c2c2c] text-[1rem] mt-2">Figma</p>
        </div>
        <div className="flex flex-col items-center tech">
          <img className="w-[3rem] rounded-[7px]" src={Vanilla} />
          <p className="text-[#2c2c2c] text-[1rem] mt-2">CSS </p>
        </div>
        <div className="flex flex-col items-center tech">
          <img className="w-[3rem] rounded-[7px]" src={Git} />
          <p className="text-[#2c2c2c] text-[1rem] mt-2">Git</p>
        </div>
        <div className="flex flex-col items-center tech">
          <img className="w-[3rem] rounded-[7px]" src={Github} />
          <p className="text-[#2c2c2c] text-[1rem] mt-2">Github</p>
        </div>
      </div>
    </div>
  );
};

export default tools;
