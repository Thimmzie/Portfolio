import React, { useEffect, useLayoutEffect, useRef } from 'react';
import { Projects } from '../../constants/index.js';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { MdArrowOutward } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const projects = ({ appReady }) => {
  const containerRef = useRef(null);
  // useEffect(() => {
  //   gsap.registerPlugin(ScrollTrigger);

  //   const mm = gsap.matchMedia();
  //   mm.add('(max-width: 768px)', () => {
  //     gsap.utils.toArray('.project').forEach((card) => {
  //       gsap.fromTo(
  //         card,
  //         { y: 80, opacity: 0 },
  //         {
  //           y: 0,
  //           opacity: 1,
  //           duration: 0.6,
  //           ease: 'power3.out',
  //           scrollTrigger: {
  //             trigger: card,
  //             start: 'top 85%',
  //             toggleActions: 'play none none reverse',
  //           },
  //         },
  //       );
  //     });
  //   });

  //   mm.add('(min-width: 769px)', () => {
  //     gsap.fromTo(
  //       '.project',
  //       { y: 80, opacity: 0 },
  //       {
  //         y: 0,
  //         opacity: 1,
  //         duration: 0.7,
  //         ease: 'power3.out',
  //         stagger: 0.25,
  //         scrollTrigger: {
  //           trigger: '.project',
  //           start: 'top 90%',
  //           toggleActions: 'play reverse play reverse',
  //         },
  //       },
  //     );
  //   });

  //   gsap.fromTo(
  //     '.view-btn',
  //     {
  //       y: 110,
  //       opacity: 0,
  //     },
  //     {
  //       y: 0,
  //       opacity: 1,
  //       ease: 'back.out(1.7)',
  //       duration: 0.7,
  //       scrollTrigger: {
  //         trigger: '.view-btn',
  //         start: 'top 90%',
  //         toggleActions: 'play none none reverse',
  //       },
  //     },
  //   );

  //   window.addEventListener('load', () => {
  //     ScrollTrigger.refresh();
  //   });

  //   return () => mm.revert();
  // }, []);

  useLayoutEffect(() => {
    if (!appReady) return;

    let ctx;
    let raf1 = requestAnimationFrame(() => {
      let raf2 = requestAnimationFrame(() => {
        ctx = gsap.context(() => {
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
                  },
                },
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
                stagger: 0.25,
                scrollTrigger: {
                  trigger: '.project',
                  start: 'top 90%',
                },
              },
            );
          });

          gsap.fromTo(
            '.view-btn',
            { y: 110, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              scrollTrigger: {
                trigger: '.view-btn',
                start: 'top 90%',
              },
            },
          );
        }, containerRef);

        ScrollTrigger.refresh();
      });
    });

    return () => {
      cancelAnimationFrame(raf1);
      ctx?.revert();
    };
  }, [appReady]);

  const colors = ['#e3f2fd', '#e3f2fd'];

  const navigate = useNavigate();

  return (
    <div
      ref={containerRef}
      className="mb-[2rem] bg-[#000000] flex flex-col items-center need"
    ></div>
  );
};

export default projects;
