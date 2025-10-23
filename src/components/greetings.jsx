import React from 'react';
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

const Greetings = () => {
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
    'こんにちは 👋',
    'Sannu 👋',
    '안녕하세요 👋',
  ];
  const [index, setIndex] = useState(0);
  const textRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const el = textRef.current;
    const interval = setInterval(() => {
      gsap.to(el, {
        opacity: 0,
        duration: 0.1,
        onComplete: () => {
          setIndex((prev) => (prev + 1) % pleasantries.length);
          gsap.to(el, { opacity: 1, duration: 0.1 });
        },
      });
    }, 250);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    return () => {
      const container = containerRef.current;
      gsap.to(container, {
        y: '-100%',
        scaleY: 0.1,
        borderRadius: '0 0 10% 10%',
        ease: 'power2.inOut',
        duration: 0.5,
      });
    };
  }, []);
  return (
    <div
      className="bg-[#000000] h-[100vh] flex flex-col items-center justify-center text-[2rem] md:text-[2.5rem] text-[white] lg:text-[3.5arem] greeting-container"
      ref={containerRef}
    >
      <span ref={textRef} className="pleasantries-text">
        {pleasantries[index]}
      </span>
    </div>
  );
};

export default Greetings;
