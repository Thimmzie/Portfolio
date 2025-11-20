import React, { useState, useEffect } from 'react';
import { socials } from '../../constants/index.js';
import gsap from 'gsap/all';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

const footer = () => {
  const [time, setTime] = useState('');

  useEffect(() => {
    const update = () => {
      const now = new Date();
      const formatted = now.toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
      });
      setTime(formatted);
    };

    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  // useEffect(() => {
  //   const tl = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: '.footer-btn',
  //       start: 'top 90%',
  //       toggleActions: 'restart none none reverse',
  //     },
  //   });

  //   tl.fromTo(
  //     '.footer-btn',
  //     { x: -100, opacity: 1 },
  //     { x: 0, opacity: 1, duration: 1.2, ease: 'none', scrub: true }
  //   ).fromTo(
  //     '.mail-btn',
  //     { y: 110, opacity: 0 },
  //     { y: 0, opacity: 1, duration: 0.7, ease: 'back.out(1.7)' },
  //     '+=0.2'
  //   );
  // }, []);

  useEffect(() => {
    gsap.fromTo(
      '.footer-btn',
      { x: -120, opacity: 1 },
      {
        x: 0,
        opacity: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: '.footer-btn',
          start: 'top 90%',
          end: '+=600',
          scrub: 1.5,
        },
      }
    );
  }, []);

  useEffect(() => {
    gsap.fromTo(
      '.mail-btn',
      { y: 110, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.7,
        ease: 'back.out(1.7)',
        delay: 2.5,
        scrollTrigger: {
          trigger: '.footer-btn',
          start: 'top 90%',
          toggleActions: 'restart none none reverse',
        },
      }
    );
  }, []);

  return (
    <div className="footer-wrapper">
      <div className="min-h-screen lg:h-screen bg-[#1c1d20] pt-[3.5rem] px-[1.5rem] footer mb-0">
        <div>
          <h2 className="text-[#ffffff] text-[2.3rem] tracking-wide pl-7 sm:pl-14 sm:text-[2.8rem] md:pl-35 lg:text-[3.2rem] lg:pl-78">
            Let's work{' '}
            <span className="block -ml-[1.3rem] lg:-ml-[3.8rem]">together</span>
          </h2>
        </div>
        <div className="flex justify-end pr-[1.3rem] -mt-2 sm:pr-[6rem] md:pr-[15rem] lg:pr-[21rem]">
          <button className="footer-btn" data-hover="Get in touch">
            <a href="#">Get in touch</a>
          </button>
        </div>
        <div className="horizontal mx-auto"></div>
        <div className="mt-[10rem] flex justify-center">
          <button className="mail-btn" data-hover="thimmzieayodeji@gmail.com">
            <a href="#">
              <span>thimmzieayodeji@gmail.com</span>
            </a>
          </button>
        </div>
        <div className=" flex flex-col pb-[2rem] lg:flex-row-reverse lg:justify-between lg:pb-[1.5rem]">
          <div className="flex gap-7 mt-[6rem]">
            {socials.map((med) => (
              <div key={med.id}>
                <a href="#">
                  {' '}
                  <med.media size={27} className=" text-[white]" />
                </a>
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-23 lg:gap-10">
            <p className="text-[#eff0f5] text-[0.9rem]">
              &copy; 2025 Ayodeji - Engineered
            </p>
            <p className="text-[#eff0f5] text-[0.9rem]">{time}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default footer;
