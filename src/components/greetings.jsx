import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { motion } from 'framer-motion';
import transition from './transition';

const Greetings = ({ onFinish }) => {
  const pleasantries = [
    'Hello 👋',
    'Hola 👋',
    'Ciao 👋',
    'Bonjour 👋',
    'Hallo 👋',
    '你好 👋',
    'Olá 👋',
    'Enle 👋',
    'Ndewo 👋',
    'Sannu 👋',
  ];

  const [index, setIndex] = useState(0);
  const textRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const el = textRef.current;
    if (!el) return;

    const interval = setInterval(() => {
      gsap.to(el, {
        opacity: 0,
        duration: 0.1,
        onComplete: () => {
          setIndex((prev) => (prev + 1) % pleasantries.length);
          gsap.to(el, { opacity: 1, duration: 0.1 });
        },
      });
    }, 230);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      const container = containerRef.current;
      if (!container) return;

      gsap.fromTo(
        container,
        {
          z: -200,
          opacity: 0,
          scale: 0.6,
          transformOrigin: 'center center',
        },
        {
          scale: 1,
          opacity: 0,
          ease: 'back.inOut',
          rotateY: 0,
          duration: 0.6,
          onComplete: () => {
            if (typeof onFinish === 'function') onFinish();
          },
        },
      );
    }, 2300);

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div ref={containerRef} className="perspective-wrapper">
      <div className="bg-[#000000] h-[100vh] flex flex-col items-center justify-center text-[2rem] md:text-[2.5rem] text-[white] lg:text-[2rem] greeting-container">
        <span ref={textRef} className="pleasantries-text">
          {pleasantries[index]}
        </span>
      </div>
    </div>
  );
};

export default Greetings;
