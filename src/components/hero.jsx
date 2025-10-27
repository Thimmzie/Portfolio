import React from 'react';
import { useState, useEffect } from 'react';
import gsap from 'gsap';
import Deji from '../assets/images/dejicpy.JPG';

const hero = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-[3rem] mt-[3rem] w-full mb-[40rem]">
      <div className="px-[1.3rem]">
        <p className="text-[#4c4c4c] pb-[1rem] text-[1.1rem]">Hi Founder,</p>
        <h2 className="pb-[1rem] text-[#1a1919] text-[1.7rem] font-[800]">
          Looking to take your brand or project to the{' '}
          <span className="text-[#455ce9] [font-family:var(--font-nunito)] tracking-wider italic font-extrabold">
            next level
          </span>
          ?
        </h2>
        <h4 className="text-[#4c4c4c] text-[1.1rem]">
          I help brands stand out in the digital era. Collaborately, we will set
          the pace for what's ahead. I build modern, high-performing websites
          that help you grow faster combining clean design, optimized speed, and
          smart technology to turn your ideas into polished digital experiences.
        </h4>
      </div>
      <div
        div
        className="flex flex-col items-center gap-[1.2rem] w-full max-w-[600px]"
      >
        <button className="btn2">Get in touch</button>

        <button className="btn3">My CV</button>
      </div>
      <div className="img">
        <img
          className="w-[20rem] h-[20rem] rounded-3xl object-cover"
          src={Deji}
        />
      </div>
    </div>
  );
};

export default hero;
