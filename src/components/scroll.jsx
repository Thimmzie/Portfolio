// import React from 'react';
// import { useEffect, useRef } from 'react';
// import Keys from '../assets/images/cloudd.jpg';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/all';
// import { Flip } from 'gsap/all';
// import Lenis from 'lenis';

// gsap.registerPlugin(ScrollTrigger, Flip);
// const scroll = () => {
//   const navbarBgRef = useRef(null);
//   const navbarItemsRef = useRef(null);
//   const navbarLogoRef = useRef(null);

//   useEffect(() => {
//     const lenis = new Lenis();

//     lenis.on('scroll', ScrollTrigger.update);

//     gsap.ticker.add((time) => {
//       lenis.raf(time * 1000);
//     });

//     gsap.ticker.lagSmoothing(0);

//     const initNavbarAnimations = () => {
//       const navbarBg = navbarBgRef.current;
//       const navbarItems = navbarItemsRef.current;
//       const navbarLogo = navbarLogoRef.current;

//       if (!navbarBg || !navbarItems || !navbarLogo) return;

//       const viewportWidth = window.innerWidth;
//       const viewportHeight = window.innerHeight;

//       const initialWidth = navbarBg.offsetWidth;
//       const initialHeight = navbarBg.offsetHeight;

//       const state = Flip.getState(navbarLogo);

//       navbarLogo.classList.add('navbar-logo-pinned');

//       gsap.set(navbarLogo, { width: 250 });

//       const flip = Flip.from(state, {
//         duration: 1,
//         ease: 'none',
//         paused: true,
//       });

//       ScrollTrigger.create({
//         trigger: '.navbar-backdrop',
//         start: 'top top',
//         end: `+=${viewportHeight}`,
//         scrub: 1,
//         onUpdate: (self) => {
//           const progress = self.progress;

//           gsap.set([navbarBg, navbarItems], {
//             width: gsap.utils.interpolate(
//               initialWidth,
//               viewportWidth,
//               progress,
//             ),
//             height: gsap.utils.interpolate(
//               initialHeight,
//               viewportHeight,
//               progress,
//             ),
//           });

//           flip.progress(progress);
//         },
//       });
//     };

//     initNavbarAnimations();

//     let timer;

//     const handleResize = () => {
//       clearTimeout(timer);

//       timer = setTimeout(() => {
//         ScrollTrigger.getAll().forEach((t) => t.kill());

//         gsap.set(
//           [navbarBgRef.current, navbarItemsRef.current, navbarLogoRef.current],
//           { clearProps: 'all' },
//         );

//         navbarLogoRef.current.classList.remove('navbar-logo-pinned');

//         initNavbarAnimations();
//         ScrollTrigger.refresh();
//       }, 250);
//     };

//     window.addEventListener('resize', handleResize);

//     return () => {
//       window.removeEventListener('resize', handleResize);
//       ScrollTrigger.getAll().forEach((t) => t.kill());
//       lenis.destroy();
//     };
//   }, []);
//   return (
//     <div>
//       <div className="navbar-backdrop">
//         <div className="navbar-img">
//           <img className="my-key" src={Keys} />
//         </div>
//         <div ref={navbarBgRef} className="navbar-bg"></div>
//       </div>
//       <div ref={navbarItemsRef} className="navbar-items">
//         <div>
//           <button
//             //   onClick={handleClick}

//             className="hamburger"
//           >
//             <span className="bar" />
//             <span className="bar" />
//           </button>
//         </div>
//         <div ref={navbarLogoRef} className="navbar-logo">
//           <h1 className="text-4xl">Ayodeji</h1>
//         </div>
//       </div>

//       <section className="hero">
//         <h4 className="text-[black] pb-[0.6rem] text-[1.1rem] lg:text-[1.3rem] font-[400] founder">
//           Hi Founder,
//         </h4>
//         <h2 className="pb-[0.6rem] text-[black] text-[1.5rem] font-[900] lg:text-[2rem] [font-family:var(--font-fira)] title">
//           Looking to take your brand <br className="hidden lg:block"></br> or
//           project to the{' '}
//           <span className="text-[#455ce9] [font-family:var(--font-nunito)] tracking-wider font-extrabold">
//             next level
//           </span>
//           ?
//         </h2>
//         <h4 className="text-[black] text-[1.1rem] lg:text-[1.3rem] leading-9 lg:text-justify font-[400] max-w-[900px] body">
//           I help brands stand out in the digital era. Together, we will set{' '}
//           <br className="hidden lg:block"></br>
//           the pace for what's ahead with modern, and high speed{' '}
//           <br className="hidden lg:block"></br> websites built for performance
//           and great SEO.
//         </h4>
//       </section>
//     </div>
//   );
// };

// export default scroll;
