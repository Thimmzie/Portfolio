import React from 'react';
import Oneimg from '../assets/images/imgone.png';
import Twoimg from '../assets/images/imgfourr.png';
import Threeimg from '../assets/images/imgthree.png';
import Fourimg from '../assets/images/imgfour.png';

const aboutdeji = () => {
  return (
    <div className="mb-[3rem] mt-[3rem] ">
      <p className="px-[1.5rem] tracking-wide lg:px-[14.5rem]">
        I’m Ayodeji Olupinla, a Software Developer passionate about building
        smooth and cutting-edge digital experiences. I specialize in React and
        Next.js, building fast, scalable products that convert and solve actual
        problems.
        <span className="block pt-3.5">
          Alongside development, I’m a technical writer, creating guides,
          articles, and content that help developers and tech enthusiasts
          understand technology, science, and everyday tech concepts. I’m
          currently open to Frontend Engineering roles and freelance
          opportunities.
        </span>{' '}
        <span className="block pt-3.5">
          {' '}
          Outside work, I’m a skilled drummer, and rhythm inspires a lot of my
          approach to engineering. I also unwind by playing video games, where I
          slay human bots like they are bugs.
        </span>
      </p>
      <div className="grid grid-cols-2 mt-[3rem] px-[1.5rem] gap-x-3.5">
        <img className="rounded-[6px] pt-[3rem]" src={Oneimg} />
        <img className="rounded-[6px] -mt-[1.5rem]" src={Fourimg} />
        <img className="rounded-[6px] pt-[0.7rem]" src={Threeimg} />
        <img className="rounded-[6px] -mt-[3rem]" src={Twoimg} />
      </div>
    </div>
  );
};

export default aboutdeji;
