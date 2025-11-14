import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

const cloud = () => {
  useEffect(() => {
    gsap.from('.cloud', {
      opacity: 0,
      duration: 1,
      stagger: {
        each: 0.4,
        from: 'random',
      },
      ease: 'power1.out',
      scrollTrigger: {
        trigger: '.cloud-container',
        start: 'top 80%',
        toggleActions: 'play none play none',
        once: true,
      },
    });
  }, {});
  return (
    <div className="mb-[50rem] flex flex-col">
      <h1 className="flex justify-center text-[1.3rem]">
        Before the Transformation
      </h1>
      <div className="relative mt-[2rem] flex flex-col items-center justify-center h-[100vh] w-full max-w-[900px] mx-auto cloud-container">
        <p className="absolute top-[0rem] text-[1.1rem] text-[#449b57] cloud">
          "It's slow and unresponsive"
        </p>

        <p className="absolute top-[5%] left-[15%] text-[0.9rem] text-[#485ee9] md:top-[9%] lg:text-[1.1rem] cloud">
          "Poor mobile experience"
        </p>

        <p className="absolute top-[10%] left-[40%] text-[1.2rem] text-[#e63b3b] sm:left-[60%] md:top-[9%] lg:text-[1.6rem] cloud">
          "Poor SEO ranking"
        </p>

        <p className="absolute top-[15%] left-[5%] text-[1.1rem] text-[#2b2b2b] md:left-[28%] cloud">
          "It feels outdated"
        </p>

        <p className="absolute top-[20%] text-[1.3rem] text-[#573379] md:top-[17%] md:left-[50%] cloud">
          "Performance bottlenecks"
        </p>

        <p className="absolute top-[27%] text-[1rem] text-[#084116] text-center md:top-[25%] lg:text-[1.5rem] cloud">
          “The site works fine on Chrome, but completely breaks in Safari or
          Edge.”
        </p>
        <p className="absolute top-[37%] left-[20%] text-[0.9rem] text-[#110d1b] md:top-[32%] lg:text-[1.1rem] cloud">
          "Low conversion rate"
        </p>
        <p className="absolute top-[42%] text-[1.6rem] text-[#e016d6] md:top-[34%] md:left-[42%]">
          "Confusing navigation"
        </p>
        <p className="absolute top-[50%] left-[5%] text-[1rem] text-[#2260d3] text-center md:top-[42%] lg:text-[1.6rem] cloud">
          “We don’t have real data on user behavior or what’s working.”
        </p>
        <p className="absolute top-[60%] left-[15%] text-[1.2rem] text-[#d3223a] md:top-[49%]">
          "Lack of automation"
        </p>
        <p className="absolute top-[67%]  text-[0.9rem] text-[#0a0c0f] text-center md:top-[52%] md:left-[42%] lg:text-[1.1rem] cloud">
          “Certain pages crash or freeze whenever traffic spikes.”
        </p>

        <p className="absolute top-[75%]  text-[1.3rem] text-[#9b22d3] md:top-[58%] cloud">
          "Poor or Bad documentation"
        </p>

        <p className="absolute top-[82%] text-[1.2rem] text-[#084fa0] text-center md:top-[65%] lg:text-[1rem] cloud">
          “Accessibility wasn’t considered, and now some users can’t even use
          the site.”
        </p>
      </div>
    </div>
  );
};

export default cloud;
