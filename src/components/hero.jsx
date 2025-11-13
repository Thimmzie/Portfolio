import React from 'react';
import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import Deji from '../assets/images/dejicpy.JPG';
import Dejitwo from '../assets/images/dejji.JPG';
import Dejithree from '../assets/images/ddeji.JPG';
gsap.registerPlugin(ScrollTrigger);

const hero = () => {
  // const trackRef = useRef(null);
  // const tweenRef = useRef(null);
  // const resizeObserverRef = useRef(null);
  const scrollTriggerRef = useRef(null);

  // useEffect(() => {
  //   const track = trackRef.current;
  //   if (!track) return;

  //   const children = Array.from(track.children);
  //   if (children.length < 1) {
  //     track.innerHTML = track.innerHTML + track.innerHTML;
  //   }

  //   const setupTween = () => {
  //     gsap.set(track, { x: 0 });

  //     const totalWidth = track.scrollWidth;
  //     const halfWidth = totalWidth / 2;

  //     if (!halfWidth) return;

  //     tweenRef.current?.kill();

  //     tweenRef.current = gsap.to(track, {
  //       x: -halfWidth,
  //       ease: 'linear',
  //       duration: Math.max(8, halfWidth / 150),
  //       repeat: -1,
  //       modifiers: {
  //         x: (x) => `${parseFloat(x)}px`,
  //       },
  //     });

  //     tweenRef.current.timeScale(1);
  //   };

  //   setupTween();

  //   const onResize = () => {
  //     setupTween();
  //   };

  //   if ('ResizeObserver' in window) {
  //     resizeObserverRef.current = new ResizeObserver(onResize);
  //     resizeObserverRef.current.observe(track);
  //     resizeObserverRef.current.observe(track.parentElement || document.body);
  //   } else {
  //     window.addEventListener('resize', onResize);
  //   }

  //   scrollTriggerRef.current = ScrollTrigger.create({
  //     start: 0,
  //     end: 'max',
  //     onUpdate(self) {
  //       const velocity = Math.abs(self.getVelocity());
  //       const speedFactor = 1 + velocity / 1200;
  //       const dir = self.direction === 1 ? 1 : -1;

  //       if (tweenRef.current) {
  //         gsap.to(tweenRef.current, {
  //           timeScale: dir * speedFactor,
  //           duration: 0.25,
  //           ease: 'power1.out',
  //           overwrite: true,
  //         });
  //       }
  //     },
  //   });

  //   return () => {
  //     tweenRef.current?.kill();
  //     if (resizeObserverRef.current) {
  //       resizeObserverRef.current.disconnect();
  //     } else {
  //       window.removeEventListener('resize', onResize);
  //     }
  //     scrollTriggerRef.current?.kill();
  //     ScrollTrigger.killAll();
  //   };
  // }, []);

  const containerRef = useRef(null);
  const imgWrap1 = useRef(null);
  const imgWrap2 = useRef(null);
  const imgWrap3 = useRef(null);

  useEffect(() => {
    gsap.set([imgWrap1.current, imgWrap2.current, imgWrap3.current], {
      position: 'absolute',
      transformStyle: 'preserve-3d',
    });

    gsap.fromTo(
      imgWrap3.current,
      {
        z: -700,
        opacity: 0,
        rotateY: 15,
        transformOrigin: 'center center',
      },
      {
        z: 0,
        opacity: 1,
        rotateY: 0,
        duration: 0.4,
        ease: 'power2.out',
        delay: 0.8,
      }
    );
    gsap.fromTo(
      imgWrap2.current,
      {
        z: 700,
        opacity: 0,
        rotateY: 15,
        transformOrigin: 'center center',
      },
      {
        z: 0,
        opacity: 1,
        rotateY: 0,
        duration: 0.4,
        ease: 'power2.out',
        delay: 1.2,
      }
    );
    gsap.fromTo(
      imgWrap1.current,
      {
        z: 700,
        opacity: 0,
        rotateY: 15,
        transformOrigin: 'center center',
      },
      {
        z: 0,
        opacity: 1,
        rotateY: 0,
        delay: 1.6,
        duration: 0.4,
        ease: 'power2.out',
      }
    );

    gsap.fromTo(
      '.founder',
      {
        y: -80,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        ease: 'back.out(1.7)',
        duration: 0.7,
      }
    );
    gsap.fromTo(
      '.title',
      {
        z: 700,
        opacity: 0,
      },
      {
        z: 0,
        opacity: 1,
        ease: 'back.out(1.7)',
        duration: 0.7,
        delay: 0.5,
      }
    );
    gsap.fromTo(
      '.body',
      {
        y: 110,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        ease: 'back.out(1.7)',
        duration: 0.7,
      }
    );
    gsap.fromTo(
      '.button',
      {
        y: 110,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        ease: 'back.out(1.7)',
        duration: 0.7,
        delay: 2.2,
      }
    );
  }, []);

  return (
    <div className="mb-[16rem] lg:mb-[0rem] mt-[3.5rem] lg:mt-[2.5rem]">
      <div className="flex flex-col gap-2 mt-[2rem] lg:flex-row lg:gap-[10rem] lg:mt-[2rem] xl:gap-[13rem]">
        <div className="px-[1.3rem] md:px-[3rem] lg:mt-[5rem]">
          <div className="title-container">
            <h4 className="text-[black] pb-[0.6rem] text-[1.1rem] lg:text-[1.3rem] font-[500] founder">
              Hi Founder,
            </h4>
            <h2 className="pb-[0.6rem] text-[black] text-[1.5rem] font-[900] lg:text-[2rem] [font-family:var(--font-fira)] title">
              Looking to take your brand <br className="hidden lg:block"></br>{' '}
              or project to the{' '}
              <span className="text-[#455ce9] [font-family:var(--font-nunito)] tracking-wider font-extrabold">
                next level
              </span>
              ?
            </h2>
            <h4 className="text-[black] text-[1.1rem] lg:text-[1.3rem] leading-8 lg:text-justify font-[500] body">
              I help brands stand out in the digital era. Together, we will set{' '}
              <br className="hidden lg:block"></br>
              the pace for what's ahead with modern, and high speed{' '}
              <br className="hidden lg:block"></br> websites built for
              performance and great SEO.
            </h4>
          </div>
          <div className="flex flex-col items-center gap-[1.2rem] w-full max-w-[600px] mt-[2rem] md:mx-auto lg:flex-row button">
            <button className="btn2" data-hover="Get in touch">
              <a href="#">
                <span>Get in touch</span>
              </a>
            </button>

            <button className="btn3" data-hover="My CV">
              <a href="#">
                <span>My CV</span>
              </a>
            </button>
          </div>
        </div>
        <div className="flex justify-center items-center mt-[3rem] sm:mt-[6.5rem] lg:mt-10">
          <div
            ref={containerRef}
            className="relative h-[40vh] sm:h-[60vh] md:h-[90vh] w-fit max-w-[90vw] mx-auto"
          >
            <div className="relative w-[20rem] sm:w-[30rem] md:w-[35rem] lg:w-[19rem] xl:w-[20rem] title-container">
              <div
                ref={imgWrap1}
                className="absolute top-0 left-0 z-40 will-change-transform "
              >
                <img src={Deji} className="w-full rounded-3xl" />
              </div>

              <div
                ref={imgWrap2}
                className="absolute top-0 left-[1.5rem] z-30 rotate-[7deg] will-change-transform "
              >
                <img src={Dejitwo} className="w-full rounded-3xl" />
              </div>

              <div
                ref={imgWrap3}
                className="absolute top-0 right-[1.5rem] z-20 rotate-[-7deg] will-change-transform "
              >
                <img src={Dejithree} className="w-full rounded-3xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <section ref={trackRef} className="relative py-10 w-full ">
        <div className="flex whitespace-nowrap w-max text-[2rem] lg:text-[5rem] text-[#4d4c4c] bg-[#fafafa] py-[2rem] tracking-wider [font-family:var(--font-fira)] overflow-hidden">
          <span className="mx-10 inline-block">Frontend Engineer</span>
          <span className="mx-10 inline-block">Technical Writer</span>
          <span className="mx-10 inline-block">Problem Solver</span>
          <span className="mx-10 inline-block">React Dev</span>

          <span className="mx-10 inline-block">Frontend Engineer</span>
          <span className="mx-10 inline-block">Technical Writer</span>
          <span className="mx-10 inline-block">Problem Solver</span>
          <span className="mx-10 inline-block">React Dev</span>
        </div>
      </section> */}
    </div>
  );
};

export default hero;
