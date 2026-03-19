import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';
import { Mobilemenu } from '../../constants/index.js';
import { Link, useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import transition from '../components/transition.jsx';
import Keys from '../assets/images/cloudd.jpg';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { Flip } from 'gsap/all';
import Lenis from 'lenis';
import Hero from '../components/hero';
import Cloud from '../components/cloud';
import Project from '../components/projects';
import Tool from '../components/tools';
import Faq from '../components/faq';
import Footer from '../components/footer';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay } from 'swiper/modules';
import { LuDot } from 'react-icons/lu';

gsap.registerPlugin(ScrollTrigger, Flip);

const home = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [sidemenu, setSidemenu] = useState(false);
  const handleClick = () => setSidemenu(!sidemenu);
  const [showFloatingHamburger, setShowFloatingHamburger] = useState(false);
  const [menuClass, setMenuClass] = useState('fly-out');
  const [menuVisible, setMenuVisible] = useState(false);
  const lenisRef = useRef(null);
  const nameRef = useRef(null);
  const navbarBgRef = useRef(null);
  const navbarItemsRef = useRef(null);
  const navbarLogoRef = useRef(null);
  const [navbarReady, setNavbarReady] = useState(false);
  const swiperRef = useRef(null);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024);

  // useEffect(() => {
  //   const mediaQuery = window.matchMedia('(min-width: 1024px)');

  //   const handleChange = (e) => {
  //     setIsDesktop(e.matches);
  //   };

  //   mediaQuery.addEventListener('change', handleChange);

  //   return () => {
  //     mediaQuery.removeEventListener('change', handleChange);
  //   };
  // }, []);

  useEffect(() => {
    let timer;
    if (sidemenu) {
      setMenuVisible(true);
      setMenuClass('fly-out');
      timer = setTimeout(() => {
        setMenuClass('fly-in');
      }, 500);
    } else {
      setMenuClass('fly-out');
      timer = setTimeout(() => {
        setMenuVisible(false);
      }, 650);
    }
    return () => clearTimeout(timer);
  }, [sidemenu]);

  useLayoutEffect(() => {
    gsap.set(nameRef.current, { opacity: 0 });
  }, []);

  useLayoutEffect(() => {
    gsap.set(nameRef.current, { opacity: 1 });

    if (sidemenu) {
      gsap.fromTo(
        '.ayo',
        { y: 25, opacity: 0 },
        { y: 0, opacity: 1, ease: 'back.inOut', duration: 0.4 },
      );
    } else {
      gsap.fromTo(
        '.ayo-title',
        { y: -25, opacity: 0 },
        { y: 0, opacity: 1, ease: 'back.inOut', duration: 0.4, delay: 0.8 },
      );
    }
  }, [sidemenu]);

  useEffect(() => {
    if (!isDesktop) return;

    lenisRef.current = new Lenis();
    lenisRef.current.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((time) => {
      lenisRef.current.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);

    const initNavbarAnimations = () => {
      const navbarBg = navbarBgRef.current;
      const navbarItems = navbarItemsRef.current;
      const navbarLogo = navbarLogoRef.current;

      if (!navbarBg || !navbarItems || !navbarLogo) return;

      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;

      const initialWidth = navbarBg.offsetWidth;
      const initialHeight = navbarBg.offsetHeight;

      const state = Flip.getState(navbarLogo);

      navbarLogo.classList.add('navbar-logo-pinned');
      gsap.set(navbarLogo, { width: 550 });

      const flip = Flip.from(state, {
        duration: 1,
        ease: 'none',
        paused: true,
      });

      ScrollTrigger.create({
        trigger: '.navbar-backdrop',
        start: 'top top',
        end: `+=${viewportHeight}`,
        scrub: 1,
        onUpdate: (self) => {
          const progress = self.progress;

          gsap.set([navbarBg, navbarItems], {
            width: gsap.utils.interpolate(
              initialWidth,
              viewportWidth,
              progress,
            ),
            height: gsap.utils.interpolate(
              initialHeight,
              viewportHeight,
              progress,
            ),
          });

          flip.progress(progress);

          if (progress > 0.99) setNavbarReady(true);
          else setNavbarReady(false);

          if (swiperRef.current) {
            gsap.set(swiperRef.current, {
              y: 2 * progress,
              opacity: 1 - progress,
            });
          }
        },
      });
    };

    initNavbarAnimations();

    let timer;
    const handleResize = () => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        if (!window.matchMedia('(min-width: 1024px)').matches) return;

        ScrollTrigger.getAll().forEach((t) => t.kill());

        gsap.set(
          [navbarBgRef.current, navbarItemsRef.current, navbarLogoRef.current],
          { clearProps: 'all' },
        );

        navbarLogoRef.current.classList.remove('navbar-logo-pinned');

        initNavbarAnimations();
        ScrollTrigger.refresh();
      }, 250);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      ScrollTrigger.getAll().forEach((t) => t.kill());
      lenisRef.current?.destroy();
      // gsap.ticker.remove(raf);
    };
  }, []);

  useEffect(() => {
    if (!lenisRef.current) return;

    if (sidemenu) lenisRef.current.stop();
    else lenisRef.current.start();
  }, [sidemenu]);

  useEffect(() => {
    if (sidemenu) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
  }, [sidemenu]);

  return (
    <div>
      <div>
        <div className="navbar-backdrop">
          <div className="navbar-img">
            <img className="my-key" src={Keys} />
          </div>
          <div ref={navbarBgRef} className="navbar-bg "></div>
        </div>

        <div className="navbar-wrapper">
          <div ref={navbarItemsRef} className="navbar-items">
            <div className="nav-top-row relative">
              {!sidemenu && (!isDesktop || navbarReady) && (
                <div className="absolute inset-0 bg-gray-800/60 backdrop-blur-md z-0 pointer-events-none" />
              )}
              <div className="relative z-10">
                <div
                  className={`flex mobile-nav-box px-[1.2rem] items-center sm:px-[1.8rem] lg:px-[0.2rem] z-[1200] relative overflow-y-hidden transition-all duration-500 ${
                    sidemenu && showFloatingHamburger
                      ? 'opacity-0 pointer-events-none absolute -top-[6rem] -right-[5rem] scale-[0.98]'
                      : 'opacity-100 pointer-events-auto relative top-0 right-0 scale-[1]'
                  }`}
                >
                  {sidemenu ? (
                    <button
                      onClick={() => {
                        if (isDesktop && !navbarReady) return;
                        handleClick();
                      }}
                      aria-expanded={sidemenu}
                      className={`hamburger-side ${sidemenu ? 'active' : ''}`}
                    >
                      <span className="bar-side" />
                      <span className="bar-side" />
                    </button>
                  ) : (
                    <button
                      onClick={() => {
                        if (isDesktop && !navbarReady) return;
                        handleClick();
                      }}
                      aria-expanded={sidemenu}
                      className={`hamburger ${sidemenu ? 'active' : ''}`}
                    >
                      <span className="bar" />
                      <span className="bar" />
                    </button>
                  )}
                </div>
              </div>
              <div>
                {sidemenu ? (
                  <button
                    className="bg-[#192781] w-[10rem] h-[8vh] rounded-3xl hidden sm:block lg:block hover:cursor-pointer lg:z-[1100] ctatwo-btn "
                    data-hover="Get in touch"
                    onClick={() => navigate('/contact')}
                  >
                    <span>Get in touch</span>
                  </button>
                ) : (
                  <button
                    className="bg-[#192781] w-[10rem] h-[8vh] rounded-3xl hidden sm:block lg:block hover:cursor-pointer sm:z-[1100000000000] cta-btn "
                    data-hover="Get in touch"
                    onClick={() => navigate('/contact')}
                  >
                    <span>Get in touch</span>
                  </button>
                )}
              </div>
            </div>

            <div ref={navbarLogoRef} className="navbar-logo">
              <div
                ref={nameRef}
                className="block lg:flex absolute left-1/2 transform -translate-x-1/2"
              >
                {sidemenu ? (
                  <h1 className="text-[#ffff] [font-family:var(--font-fira)] text-[1.4rem] z-[1200] ayo">
                    Ayodeji!
                  </h1>
                ) : (
                  <p className="text-[1.4rem] text-[#ffff] [font-family:var(--font-bebas)] lg:text-[1.6rem] font-[600] z-[100] ayo-title">
                    Ayodeji Olupinla
                  </p>
                )}
              </div>
            </div>
            <div
              ref={swiperRef}
              className="absolute bottom-0 bg-[#455ce9] w-full h-10 hidden lg:flex lg:items-center"
            >
              <Swiper
                modules={[Autoplay]}
                speed={2000}
                slidesPerView={8}
                loop={true}
                autoplay={{ delay: 1, disableOnInteraction: false }}
                freemodemomentum="false"
              >
                {[...Array(20)].map((_, i) => (
                  <SwiperSlide key={i}>
                    {i % 2 === 0 ? (
                      <p className="text-[0.6rem] md:text-[0.8rem] text-[#d1d1d1]">
                        scroll up
                      </p>
                    ) : (
                      <LuDot className="text-[#d1d1d1]" size={17} />
                    )}
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>

        {menuVisible && (
          <div
            className={`fixed inset-0 z-[1000] transition-opacity duration-300 ${menuVisible ? 'opacity-100' : 'opacity-0'} bg-black`}
          >
            <div className="flex flex-col items-center">
              <div className="cont">
                <ul
                  className={`flex flex-col items-center mobile lg:flex-row lg:gap-[5rem] lg:mt-[13rem] mt-[8.5rem] ul ${menuClass}`}
                >
                  {Mobilemenu.map((nav) => (
                    <li key={nav.id} className="py-2 hover:cursor-pointer">
                      <Link
                        className={`text-[2.8rem] [font-family:var(--font-bebas)] font-[700] hover:cursor-pointer hover:text-[#ffffff] lg:text-[2.7rem] transition duration-300 ${
                          location.pathname === nav.path
                            ? 'text-[#ffffff]'
                            : 'text-[#818181]'
                        }`}
                        to={nav.path}
                      >
                        {nav.title}
                      </Link>
                    </li>
                  ))}

                  <button
                    className="bg-[white] w-[15rem] h-[7vh] text-[black] rounded-full mt-[2rem] text-[1.5rem] sm:hidden lg:hidden reach-btn [font-family:var(--font-bebas)] tracking-wider"
                    onClick={() => navigate('/contact')}
                  >
                    Get in touch
                  </button>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>

      <Hero />
      <Cloud />
      <Project />
      <Tool />
      <Faq />
      <Footer />
    </div>
  );
};

export default transition(home);
