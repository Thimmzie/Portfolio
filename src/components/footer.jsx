import React, { useState, useEffect } from 'react';
import { socials } from '../../constants/index.js';

const footer = () => {
  const [time, setTime] = useState('');

  useEffect(() => {
    const update = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      );
    };
    update();
    const interval = setInterval(update, 1000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="h-[100vh] bg-[#1c1d20] pt-[3.5rem] px-[1.5rem]">
      <div>
        <h2 className="text-[#ffffff] text-[2.3rem] tracking-wide pl-3">
          Let's work <span className="block -ml-[1.3rem]">together</span>
        </h2>
      </div>
      <div className="flex justify-end pr-[1.3rem] -mt-2.5">
        <button className="footer-btn">
          <a href="#">Get in touch</a>
        </button>
      </div>
      <div className="horizontal"></div>
      <div className="mt-[10rem] flex justify-center">
        <button className="mail-btn">
          <a href="#">thimmzieayodeji@gmail.com</a>
        </button>
      </div>
      <div className="flex gap-8 mt-[6rem] justify-center">
        {socials.map((med) => (
          <div key={med.id}>
            <a href="#">
              {' '}
              <med.media size={38} className=" text-[white]" />
            </a>
          </div>
        ))}
      </div>
      <div className="flex justify-between mt-18">
        <p className="text-[#eff0f5] text-[0.9rem]">
          &copy; 2025 Ayodeji - Engineered
        </p>
        <p className="text-[#eff0f5] text-[0.9rem]">{time}</p>
      </div>
    </div>
  );
};

export default footer;
