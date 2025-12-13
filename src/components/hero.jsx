import React from 'react';
import { useRef, useLayoutEffect } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import Deji from '../assets/images/dejicpy.jpg';
import Dejitwo from '../assets/images/dejji.JPG';
import Dejithree from '../assets/images/ddeji.JPG';
import { useNavigate } from 'react-router-dom';
gsap.registerPlugin(ScrollTrigger);

const hero = () => {
  const containerRef = useRef(null);
  const imgWrap1 = useRef(null);
  const imgWrap2 = useRef(null);
  const imgWrap3 = useRef(null);
  const heroRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(heroRef.current, { opacity: 0 });
      gsap.set([imgWrap1.current, imgWrap2.current, imgWrap3.current], {
        position: 'absolute',
        transformStyle: 'preserve-3d',
        opacity: 0,
      });

      gsap.to(heroRef.current, { opacity: 1, duration: 0.01 });

      gsap.fromTo(
        imgWrap3.current,
        { z: -700, opacity: 0, rotateY: 15 },
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
        { z: 700, opacity: 0, rotateY: 15 },
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
        { z: 700, opacity: 0, rotateY: 15 },
        {
          z: 0,
          opacity: 1,
          rotateY: 0,
          duration: 0.4,
          ease: 'power2.out',
          delay: 1.6,
        }
      );
      gsap.fromTo(
        '.founder',
        { y: -80, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, ease: 'back.out(1.7)', delay: 0.2 }
      );
      gsap.fromTo(
        '.title',
        { z: 700, opacity: 0 },
        { z: 0, opacity: 1, duration: 0.7, ease: 'back.out(1.7)', delay: 0.5 }
      );
      gsap.fromTo(
        '.body',
        { y: 110, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, ease: 'back.out(1.7)', delay: 0.8 }
      );
      gsap.fromTo(
        '.button',
        { y: 110, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, ease: 'back.out(1.7)', delay: 2.2 }
      );
    }, heroRef);
    return () => ctx.revert();
  }, []);

  const navigate = useNavigate();
  return (
    <div
      ref={heroRef}
      className="mb-[16rem] lg:mb-[0rem] mt-[3.5rem] lg:mt-[2.5rem] hero"
    >
      <div className="flex flex-col gap-2 mt-[2rem] lg:flex-row lg:gap-[10rem] lg:mt-[2rem] xl:gap-[13rem]">
        <div className="px-[1.3rem] md:px-[3rem] lg:mt-[5rem]">
          <div className="title-container">
            <h4 className="text-[black] pb-[0.6rem] text-[1.1rem] lg:text-[1.3rem] font-[400] founder">
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
            <h4 className="text-[black] text-[1.1rem] lg:text-[1.3rem] leading-9 lg:text-justify font-[400] max-w-[900px] body">
              I help brands stand out in the digital era. Together, we will set{' '}
              <br className="hidden lg:block"></br>
              the pace for what's ahead with modern, and high speed{' '}
              <br className="hidden lg:block"></br> websites built for
              performance and great SEO.
            </h4>
          </div>
          <div className="flex flex-col items-center gap-[1.2rem] w-full max-w-[600px] mt-[2rem] md:mx-auto lg:flex-row button">
            <button
              className="btn2"
              data-hover="Get in touch"
              onClick={() => navigate('/contact')}
            >
              <span>Get in touch</span>
            </button>

            <button
              className="btn3"
              data-hover="My CV"
              onClick={() => window.open('/AyodejiCv.pdf', '_blank')}
            >
              <span>My CV</span>
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
    </div>
  );
};

export default hero;
