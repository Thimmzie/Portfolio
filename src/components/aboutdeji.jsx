import React, { useEffect } from 'react';
import Oneimg from '../assets/images/imgone.png';
import Twoimg from '../assets/images/imgfourr.png';
import Threeimg from '../assets/images/imgthree.png';
import Fourimg from '../assets/images/imgfour.png';
import gsap from 'gsap/all';

const aboutdeji = () => {
  useEffect(() => {
    gsap.fromTo(
      '.card-img',
      {
        opacity: 0,
        scale: 0.6,
        rotationX: 45,
        transformOrigin: 'center center',
      },
      {
        opacity: 1,
        scale: 1,
        rotationX: 0,
        duration: 0.5,
        ease: 'power4.out',
        stagger: 0.22,
      }
    );
  }, []);

  return (
    <div className="mb-[3rem] mt-[3rem]">
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
          Outside work, I’m a skilled drummer, rhythm inspires a lot of my
          approach to engineering. I also unwind by playing video games, where I
          slay human bots like they are bugs.
        </span>
      </p>
      <div className="grid grid-cols-2 mt-[4rem] px-[1.5rem] gap-y-4 gap-x-3.5 md:grid-cols-4 md:px-[3rem] lg:px-[4rem] lg:mt-[8rem] card-img-container">
        <div className="pt-[5rem] md:-mt-[4.5rem]">
          <img className="rounded-[10px] card-img" src={Oneimg} />
        </div>
        <div className="md:-mt-[3rem]">
          <img className="rounded-[10px] card-img" src={Fourimg} />
        </div>
        <div className="">
          <img className="rounded-[10px] card-img" src={Threeimg} />
        </div>
        <div className="-mt-[3.8rem] sm:-mt-[3.2rem]">
          <img className="rounded-[10px] card-img" src={Twoimg} />
        </div>
      </div>
    </div>
  );
};

export default aboutdeji;
