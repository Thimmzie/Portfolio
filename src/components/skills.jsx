import React from 'react';
import { Skills } from '../../constants/index.js';
import gsap from 'gsap';
import { useEffect, useRef, useLayoutEffect } from 'react';
import { ScrollTrigger } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger);

const skills = ({ appReady }) => {
  const skillsRef = useRef(null);

  // useLayoutEffect(() => {
  //   if (!appReady) return;

  //   let ctx;

  //   const raf = requestAnimationFrame(() => {
  //     ctx = gsap.context(() => {
  //       const items = gsap.utils.toArray('.skill-item');

  //       gsap.fromTo(
  //         items,
  //         { opacity: 0, y: 50, scale: 0.3 },
  //         {
  //           opacity: 1,
  //           y: 0,
  //           scale: 1,
  //           stagger: 0.06,
  //           duration: 0.6,
  //           ease: 'power3.out',
  //           scrollTrigger: {
  //             trigger: skillsRef.current,
  //             start: 'top 70%',
  //             once: true,
  //             invalidateOnRefresh: true,
  //           },
  //         },
  //       );
  //     }, skillsRef);

  //     ScrollTrigger.refresh();
  //   });

  //   return () => {
  //     cancelAnimationFrame(raf);
  //     ctx?.revert();
  //   };
  // }, [appReady]);

  useLayoutEffect(() => {
    if (!appReady) return;

    let ctx;
    let raf = requestAnimationFrame(() => {
      ctx = gsap.context(() => {
        const items = skillsRef.current.querySelectorAll('.skill-item');

        gsap.fromTo(
          items,
          { opacity: 0, y: 50, scale: 0.3 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            stagger: 0.06,
            duration: 0.6,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: skillsRef.current,
              start: 'top 75%',
              once: true,
              invalidateOnRefresh: true,
            },
          },
        );
      }, skillsRef);

      ScrollTrigger.refresh();
    });

    return () => {
      cancelAnimationFrame(raf);
      ctx?.revert();
    };
  }, [appReady]);

  // useEffect(() => {
  //   if (!appReady) return;

  //   const timeout = setTimeout(() => {
  //     const ctx = gsap.context(() => {
  //       gsap.fromTo(
  //         skillsRef.current.querySelectorAll('.skill-item'),
  //         { opacity: 0, y: 50, scale: 0.3 },
  //         {
  //           opacity: 1,
  //           y: 0,
  //           scale: 1,
  //           stagger: 0.06,
  //           duration: 0.6,
  //           ease: 'power3.out',
  //           scrollTrigger: {
  //             trigger: skillsRef.current,
  //             start: 'top 60%',
  //             once: true,
  //             invalidateOnRefresh: true,
  //           },
  //         },
  //       );
  //     }, skillsRef);

  //     ScrollTrigger.refresh();

  //     return () => ctx.revert();
  //   }, 100);

  //   return () => clearTimeout(timeout);
  // }, [appReady]);

  return (
    <div ref={skillsRef} className="mb-[5rem] px-3 sm:px-6 md:px-10 lg:px-56">
      <h1 className="text-[#ffffff] text-[1.5rem] font-[600] text-center">
        Constraints Resolvedoooooo
      </h1>
      <div className="flex flex-wrap gap-2 sm:gap-4 mt-8">
        {Skills.map((skill) => {
          return (
            <div
              key={skill.id}
              className="flex gap-2 py-1.5 sm:py-1 skill-item"
            >
              <p className="text-white text-[0.8rem] px-4 py-3 lg:px-6 lg:py-5 lg:text-[1rem] rounded-4xl border border-[#f0eeee] bg-black  max-w-full break-words">
                {skill.problem}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default skills;
