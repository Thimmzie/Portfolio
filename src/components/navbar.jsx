import React, { useState, useEffect, useRef } from 'react';
import mobilemenu from '../../constants/index.js';
import gsap from 'gsap';
import { useLocation } from 'react-router-dom';

const Navbar = () => {
  const [sidemenu, setSidemenu] = useState(false);
  const handleClick = () => setSidemenu(!sidemenu);
  const [showFloatingHamburger, setShowFloatingHamburger] = useState(false);
  const [menuClass, setMenuClass] = useState('fly-out');
  const [menuVisible, setMenuVisible] = useState(false);
  const navbarRef = useRef(null);
  const floatRef = useRef(null);

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

  useEffect(() => {
    if (sidemenu) {
      gsap.fromTo(
        '.ayo',
        { y: 25, opacity: 0 },
        { y: 0, opacity: 1, ease: 'back.inOut', duration: 0.4 }
      );
    } else {
      gsap.fromTo(
        '.ayo-title',
        { y: -25, opacity: 0 },
        { y: 0, opacity: 1, ease: 'back.inOut', duration: 0.4, delay: 0.8 }
      );
    }
  }, [sidemenu]);

  useEffect(() => {
    const el = floatRef.current;
    if (!el) return;

    gsap.killTweensOf(el);

    if (showFloatingHamburger) {
      gsap.fromTo(
        el,
        {
          z: -800,
          opacity: 0,
          scale: 0.8,
          transformPerspective: 1500,
          transformOrigin: 'center',
        },
        {
          z: 0,
          rotationY: 0,
          rotationX: 0,
          opacity: 1,
          scale: 1,
          duration: 0.6,
          ease: 'power3.out',
          force3D: true,
        }
      );
    } else {
      gsap.to(el, {
        z: -600,
        opacity: 0,
        scale: 0.8,
        duration: 0.6,
        ease: 'power2.inOut',
        force3D: true,
      });
    }

    return () => gsap.killTweensOf(el);
  }, [showFloatingHamburger]);

  useEffect(() => {
    const navEl = navbarRef.current;
    if (!navEl) return;

    let rafId = null;

    const checkNavbar = () => {
      const bottom = navEl.getBoundingClientRect().bottom;

      setShowFloatingHamburger((prev) =>
        bottom < 0 ? (prev ? prev : true) : prev ? false : prev
      );
    };

    const onScroll = () => {
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(checkNavbar);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    checkNavbar();

    return () => {
      window.removeEventListener('scroll', onScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  // this for fixing the sidebar and balancing the width on both states. Ideally, we just locked scroll without removing the scrollbar
  useEffect(() => {
    if (sidemenu && showFloatingHamburger) {
      const scrollY = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.left = '0';
      document.body.style.right = '0';
      document.body.style.overflowY = 'scroll';
      document.body.style.width = '100%';
    } else if (sidemenu) {
      // If menu opened from main navbar (not floating hamburger)
      const scrollY = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.left = '0';
      document.body.style.right = '0';
      document.body.style.overflowY = 'scroll';
      document.body.style.width = '100%';
    } else {
      // Restore scroll
      const scrollY = document.body.style.top;
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.left = '';
      document.body.style.right = '';
      document.body.style.overflowY = '';
      document.body.style.width = '';
      if (scrollY) window.scrollTo(0, parseInt(scrollY || '0') * -1);
    }
  }, [sidemenu, showFloatingHamburger]);

  useEffect(() => {
    if (sidemenu) {
      const scrollBarWidth =
        window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = `${scrollBarWidth}px`;
    } else {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    }
  }, [sidemenu]);

  const location = useLocation();

  return (
    <div>
      {showFloatingHamburger && (
        <div
          ref={floatRef}
          className={`fixed top-5 right-5 z-[13000] floating-hamburger ${
            showFloatingHamburger ? 'visible' : 'hidden'
          }`}
        >
          {sidemenu ? (
            <button
              onClick={handleClick}
              aria-expanded={sidemenu}
              id="float-side"
              className={`hamburger-side ${sidemenu ? 'active' : ''}`}
            >
              <span className="bar-side" />
              <span className="bar-side" />
            </button>
          ) : (
            <button
              onClick={handleClick}
              aria-expanded={sidemenu}
              id="float"
              className={`hamburger ${sidemenu ? 'active' : ''}`}
            >
              <span className="float-overlay" aria-hidden="true" />
              <span className="bar" />
              <span className="bar" />
            </button>
          )}
        </div>
      )}
      <nav ref={navbarRef}>
        <div
          className={`flex mobile-nav-box px-[1.2rem] pt-[1.7rem] items-center sm:px-[1.8rem] lg:px-[1.8rem] z-[1200] relative overflow-y-hidden transition-opacity duration-300 ${
            sidemenu && showFloatingHamburger
              ? 'opacity-0 pointer-events-none invisible hidden'
              : 'opacity-100 block'
          }`}
        >
          <div>
            {sidemenu ? (
              <button
                onClick={handleClick}
                aria-expanded={sidemenu}
                className={`hamburger-side ${sidemenu ? 'active' : ''}`}
              >
                <span className="bar-side" />
                <span className="bar-side" />
              </button>
            ) : (
              <button
                onClick={handleClick}
                aria-expanded={sidemenu}
                className={`hamburger ${sidemenu ? 'active' : ''}`}
              >
                <span className="bar" />
                <span className="bar" />
              </button>
            )}
          </div>
          <div className="hidden lg:block ">
            {sidemenu ? (
              <h1 className="text-[#ffff] [font-family:var(--font-fira)] text-[1.4rem] z-[1200] ayo">
                Ayodeji!
              </h1>
            ) : (
              <p className="text-[1.2rem] text-[#1f1e1e] lg:text-[1rem] z-[1200] ayo-title">
                Ayodeji Olupinla
              </p>
            )}
          </div>
          <div>
            {sidemenu ? (
              <button
                className="bg-[#192781] w-[10rem] h-[8vh] rounded-3xl hidden sm:block lg:block hover:cursor-pointer lg:z-[1100] ctatwo-btn"
                data-hover="Get in touch"
              >
                <a href="#">
                  <span>Get in touch</span>
                </a>
              </button>
            ) : (
              <button
                className="bg-[#192781] w-[10rem] h-[8vh] rounded-3xl hidden sm:block lg:block hover:cursor-pointer lg:z-[1100] cta-btn"
                data-hover="Get in touch"
              >
                <a href="#">
                  <span>Get in touch</span>
                </a>
              </button>
            )}
          </div>
        </div>
        <div
          className={`fixed inset-0 h-[100vh] transition-opacity duration-300 menu-div ${
            menuVisible
              ? 'opacity-100 visible z-[1000]'
              : 'opacity-0 invisible z-[1000]'
          } ${sidemenu && showFloatingHamburger ? 'overflow-hidden' : ''}`}
        >
          <div className="flex flex-col items-center">
            <div className="cont">
              <ul
                className={`flex flex-col items-center mobile lg:flex-row lg:gap-[5rem] lg:mt-[13rem] mt-[8.5rem] ul ${menuClass}`}
              >
                {mobilemenu.map((nav) => (
                  <li key={nav.id} className="py-2 hover:cursor-pointer">
                    <a
                      className={`text-[1.5rem] [font-family:var(--font-nunito)] font-[700] hover:cursor-pointer hover:text-[#ffffff] lg:text-[1.7rem] transition duration-300 ${
                        location.pathname === nav.path
                          ? 'text-[#ffffff]'
                          : 'text-[#818181]'
                      }`}
                      href={nav.path}
                    >
                      {nav.title}
                    </a>
                  </li>
                ))}

                <button className="bg-[white] w-[15rem] h-[7vh] text-[black] rounded-full mt-[2rem] text-[1.1rem] sm:hidden lg:hidden reach-btn">
                  Get in touch
                </button>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <div className="flex justify-center lg:hidden">
        {sidemenu ? (
          <h1 className="text-[#ffff] [font-family:var(--font-fira)] text-[1.4rem] mt-[-2.5rem] z-[1200] ayo">
            Ayodeji!
          </h1>
        ) : (
          <p className="text-[1.2rem] text-[#1f1e1e] lg:text-[1rem] mt-[-2.5rem] z-[1200] ayo-title">
            Ayodeji Olupinla
          </p>
        )}
      </div>
    </div>
  );
};

export default Navbar;
