import React, { useState, useEffect, useLayoutEffect, useRef } from 'react';
import { socials } from '../../constants/index.js';
import gsap from 'gsap/all';
import { ScrollTrigger } from 'gsap/all';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const footer = ({ appReady }) => {
  const [time, setTime] = useState('');
  const footerRef = useRef(null);
  const btnRef = useRef(null);
  const mailRef = useRef(null);

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

  // useLayoutEffect(() => {
  //   if (!appReady) return;

  //   const ctx = gsap.context(() => {
  //     gsap.set('.footer-btn', { x: -120, opacity: 1 });
  //     gsap.set('.mail-btn', { y: 110, opacity: 0 });

  //     gsap.to('.footer-btn', {
  //       x: 0,
  //       ease: 'none',
  //       scrollTrigger: {
  //         trigger: '.footer-btn',
  //         start: 'top 90%',
  //         end: '+=600',
  //         scrub: 1.5,
  //       },
  //     });

  //     gsap.to('.mail-btn', {
  //       y: 0,
  //       opacity: 1,
  //       duration: 0.7,
  //       ease: 'back.out(1.7)',
  //       scrollTrigger: {
  //         trigger: '.mail-btn',
  //         start: 'top 90%',
  //         toggleActions: 'play none none reverse',
  //       },
  //     });
  //   }, footerRef);

  //   ScrollTrigger.refresh();

  //   return () => ctx.revert();
  // }, [appReady]);

  useLayoutEffect(() => {
    if (!appReady) return;

    const ctx = gsap.context(() => {
      gsap.set(btnRef.current, { x: -120 });
      gsap.set(mailRef.current, { y: 110, opacity: 0 });

      ScrollTrigger.create({
        trigger: btnRef.current,
        start: 'top 85%',
        end: () => `+=${window.innerHeight * 0.8}`, // 🔥 key fix
        scrub: 1.2,
        animation: gsap.to(btnRef.current, {
          x: 0,
          ease: 'none',
        }),
      });

      gsap.to(mailRef.current, {
        y: 0,
        opacity: 1,
        duration: 0.7,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: mailRef.current,
          start: 'top 90%',
          toggleActions: 'play none none reverse',
        },
      });
    }, footerRef);

    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);

    return () => ctx.revert();
  }, [appReady]);

  // useLayoutEffect(() => {
  //   if (!appReady) return;

  //   const raf = requestAnimationFrame(() => {
  //     const ctx = gsap.context(() => {
  //       const btn = footerRef.current.querySelector('.footer-btn');
  //       const mail = footerRef.current.querySelector('.mail-btn');

  //       // IMPORTANT: scrub animation ONLY uses gsap.to
  //       gsap.to(btn, {
  //         x: 0,
  //         ease: 'none',
  //         scrollTrigger: {
  //           trigger: btn,
  //           start: 'top 90%',
  //           end: '+=600',
  //           scrub: 1.5,
  //         },
  //       });

  //       // normal scroll animation
  //       gsap.from(mail, {
  //         y: 110,
  //         opacity: 0,
  //         duration: 0.7,
  //         ease: 'back.out(1.7)',
  //         scrollTrigger: {
  //           trigger: mail,
  //           start: 'top 90%',
  //           toggleActions: 'play none none reverse',
  //         },
  //       });
  //     }, footerRef);

  //     ScrollTrigger.refresh(true);

  //     return () => ctx.revert();
  //   });

  //   return () => cancelAnimationFrame(raf);
  // }, [appReady]);

  const navigate = useNavigate();

  return (
    <div ref={footerRef} className="footer-wrapper">
      <div className="min-h-screen lg:h-screen bg-[#1c1d20] pt-[3.5rem] px-[1.5rem] footer mb-0">
        <div>
          <h2 className="text-[#ffffff] text-[2.3rem] tracking-wide pl-7 sm:pl-14 sm:text-[2.8rem] md:pl-35 lg:text-[3.2rem] lg:pl-78">
            Let's work{' '}
            <span className="block -ml-[1.3rem] lg:-ml-[3.8rem]">together</span>
          </h2>
        </div>
        <div className="flex justify-end pr-[1.3rem] -mt-2 sm:pr-[6rem] md:pr-[15rem] lg:pr-[21rem]">
          <button
            ref={btnRef}
            className="footer-btn"
            data-hover="Get in touch"
            onClick={() => navigate('/contact')}
          >
            Get in touch
          </button>
        </div>
        <div className="horizontal mx-auto"></div>
        <div className="mt-[10rem] flex justify-center">
          <button
            ref={mailRef}
            className="mail-btn"
            data-hover="thimmzieayodeji@gmail.com"
          >
            <a href="mailto:thimmzieayodeji@gmail.com">
              <span>thimmzieayodeji@gmail.com</span>
            </a>
          </button>
        </div>
        <div className=" flex flex-col lg:flex-row-reverse lg:justify-between ">
          <div className="flex gap-7 mt-[6rem]">
            {socials.map((med) => {
              return (
                <div key={med.id}>
                  <a
                    href={med.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white"
                  >
                    <med.media size={27} />
                  </a>
                </div>
              );
            })}
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
