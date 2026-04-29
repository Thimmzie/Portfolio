import React from 'react';
import { useRef, useLayoutEffect } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import Deji from '../assets/images/dejicpy.jpg';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
gsap.registerPlugin(ScrollTrigger);

const hero = ({ appReady }) => {
  const containerRef = useRef(null);
  const imgWrap1 = useRef(null);
  const imgWrap2 = useRef(null);
  const imgWrap3 = useRef(null);
  const heroRef = useRef(null);

  // useLayoutEffect(() => {
  //   const ctx = gsap.context(() => {
  //     gsap.set(heroRef.current, { opacity: 0 });
  //     gsap.set([imgWrap1.current, imgWrap2.current, imgWrap3.current], {
  //       position: 'absolute',
  //       transformStyle: 'preserve-3d',
  //       opacity: 0,
  //     });

  //     gsap.to(heroRef.current, { opacity: 1, duration: 0.01 });

  //     gsap.fromTo(
  //       imgWrap3.current,
  //       { z: -700, opacity: 0, rotateY: 15 },
  //       {
  //         z: 0,
  //         opacity: 1,
  //         rotateY: 0,
  //         duration: 0.4,
  //         ease: 'power2.out',
  //         delay: 0.8,
  //       },
  //     );
  //     gsap.fromTo(
  //       imgWrap2.current,
  //       { z: 700, opacity: 0, rotateY: 15 },
  //       {
  //         z: 0,
  //         opacity: 1,
  //         rotateY: 0,
  //         duration: 0.4,
  //         ease: 'power2.out',
  //         delay: 1.2,
  //       },
  //     );
  //     gsap.fromTo(
  //       imgWrap1.current,
  //       { z: 700, opacity: 0, rotateY: 15 },
  //       {
  //         z: 0,
  //         opacity: 1,
  //         rotateY: 0,
  //         duration: 0.4,
  //         ease: 'power2.out',
  //         delay: 1.6,
  //       },
  //     );
  //     gsap.fromTo(
  //       '.founder',
  //       { y: -80, opacity: 0 },
  //       { y: 0, opacity: 1, duration: 0.7, ease: 'back.out(1.7)', delay: 1.2 },
  //     );
  //     gsap.fromTo(
  //       '.title',
  //       { z: 700, opacity: 0 },
  //       { z: 0, opacity: 1, duration: 0.7, ease: 'back.out(1.7)', delay: 1.5 },
  //     );
  //     gsap.fromTo(
  //       '.body',
  //       { y: 110, opacity: 0 },
  //       { y: 0, opacity: 1, duration: 0.7, ease: 'back.out(1.7)', delay: 1.8 },
  //     );
  //     gsap.fromTo(
  //       '.button',
  //       { y: 110, opacity: 0 },
  //       { y: 0, opacity: 1, duration: 0.7, ease: 'back.out(1.7)', delay: 2.2 },
  //     );
  //   }, heroRef);

  //   const tl = gsap.timeline({
  //     delay: 2.2,
  //   });

  //   return () => ctx.revert();
  // }, []);

  useLayoutEffect(() => {
    if (!appReady) return;

    let ctx;

    const raf1 = requestAnimationFrame(() => {
      const raf2 = requestAnimationFrame(() => {
        ctx = gsap.context(() => {
          gsap.set(heroRef.current, { opacity: 0 });

          gsap.set(['.founder', '.body', '.button', '.img'], {
            opacity: 0,
            y: 40,
          });

          const tl = gsap.timeline();

          tl.to(heroRef.current, {
            opacity: 1,
            duration: 0.7,
          });

          tl.to(
            ['.founder', '.body', '.button', '.img'],
            {
              opacity: 1,
              y: 0,
              duration: 0.6,
              ease: 'power3.out',
              stagger: 0.22,
            },
            '+=0.55',
          );
        }, heroRef);
      });
    });

    return () => {
      cancelAnimationFrame(raf1);
      ctx?.revert();
    };
  }, [appReady]);

  const navigate = useNavigate();
  return (
    <div
      ref={heroRef}
      className="mb-[7rem] lg:mb-[5rem] mt-[3.5rem] lg:mt-[2.5rem] hero"
    >
      <div className="flex flex-col gap-2 mt-[2rem] md:flex-row md:gap-2 lg:gap-[15rem] md:justify-center lg:mt-[2rem] xl:gap-[13rem]">
        <div className="px-[1.3rem] lg:mt-[5rem] md:max-w-md lg:max-w-lg">
          <div className="title-container">
            <h4 className="text-[#ffffff] pb-[0.6rem] text-[2rem] lg:text-[3rem] font-[400] font-bebas founder">
              Software Engineer
            </h4>

            <h4 className="text-[#ffffff] text-[1rem] lg:text-[0.9rem] leading-9 font-[400] lg:max-w-[800] body">
              I enjoy building fast, scalable web applications with a strong
              focus on performance and user experience. I really can't help but
              pay attention to details.
            </h4>

            <h4 className="text-[#ffffff] text-[1rem] lg:text-[0.9rem] leading-9 font-[400] max-w-[900px] pt-5 body">
              Currently expanding into backend engineering, system design, and
              computer science fundamentals to create systems that are not just
              functional but built to last.
            </h4>
          </div>
          <div className="flex flex-col items-center gap-[1.2rem] w-full max-w-[600px] mt-[2rem] mx-auto sm:flex-row md:mx-auto lg:flex-row button">
            <button
              className="btn3"
              data-hover="Get in touch"
              onClick={() => navigate('/contact')}
            >
              <span>Get in touch</span>
            </button>

            <button
              className="btn3"
              data-hover="My CV"
              onClick={() =>
                window.open('/001_Ayodeji_Olupinla_CV.pdf', '_blank')
              }
            >
              <span>My CV</span>
            </button>
          </div>
        </div>
        <div className="flex justify-center items-center mt-[3rem] md:mt-0 sm:mt-[6.5rem] lg:mt-10 img">
          <div className=" w-fit max-w-sm lg:max-w-sm mx-auto">
            <div className="px-4 md:mt-10">
              <div className="">
                {/* <div className="flex items-center gap-2 py-3">
                  <span className="w-3 h-3 rounded-full bg-red-500"></span>
                  <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
                  <span className="w-3 h-3 rounded-full bg-green-500"></span>
                </div> */}
                <img src={Deji} className="w-full h-auto" />
              </div>

              {/* <div
                ref={imgWrap2}
                className="absolute top-0 left-[1.5rem] z-30 rotate-[7deg] will-change-transform "
              >
                <img src={Dejitwo} className="w-full rounded-3xl" />
              </div> */}

              {/* <div
                ref={imgWrap3}
                className="absolute top-0 right-[1.5rem] z-20 rotate-[-7deg] will-change-transform "
              >
                <img src={Dejithree} className="w-full rounded-3xl" />
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default hero;
