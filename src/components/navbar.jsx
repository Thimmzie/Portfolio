import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';
import { Mobilemenu } from '../../constants/index.js';
import gsap from 'gsap';
import { Link, useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const [sidemenu, setSidemenu] = useState(false);
  const handleClick = () => setSidemenu(!sidemenu);
  const [showFloatingHamburger, setShowFloatingHamburger] = useState(false);
  const [menuClass, setMenuClass] = useState('fly-out');
  const [menuVisible, setMenuVisible] = useState(false);
  const navbarRef = useRef(null);
  const floatRef = useRef(null);
  const observerRef = useRef(null);
  const nameRef = useRef(null);

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
      el.classList.remove('is-hidden');
      el.classList.add('is-visible');

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
          duration: 0.8,
          ease: 'back.out(2.5)',
          force3D: true,
        }
      );
    } else {
      gsap.to(el, {
        z: -800,
        opacity: 0,
        scale: 0.8,
        duration: 0.6,
        ease: 'power2.inOut',
        force3D: true,
        onComplete: () => {
          el.classList.remove('is-visible');
          el.classList.add('is-hidden');
        },
      });
    }

    return () => {
      gsap.killTweensOf(el);
    };
  }, [showFloatingHamburger]);

  useEffect(() => {
    const navEl = navbarRef.current;
    if (!navEl) return;

    if (observerRef.current) {
      observerRef.current.disconnect();
      observerRef.current = null;
    }

    const io = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];

        const shouldShowFloating = !entry.isIntersecting;
        setShowFloatingHamburger((prev) => {
          if (prev !== shouldShowFloating) return shouldShowFloating;
          return prev;
        });
      },
      {
        root: null,
        threshold: 0,
      }
    );

    io.observe(navEl);
    observerRef.current = io;

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
        observerRef.current = null;
      }
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
      const scrollY = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.left = '0';
      document.body.style.right = '0';
      document.body.style.overflowY = 'scroll';
      document.body.style.width = '100%';
    } else {
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

  const navigate = useNavigate();
  return (
    <div>
      <div
        ref={floatRef}
        className={`fixed top-18 right-9 z-[13000] floating-wrapper is-hidden`}
        aria-hidden={!showFloatingHamburger}
      >
        <button
          onClick={handleClick}
          aria-expanded={sidemenu}
          id="float"
          className={`hamburger ${sidemenu ? 'active' : ''}`}
          type="button"
        >
          <span className="float-overlay" aria-hidden="true" />
          <span className="bar" />
          <span className="bar" />
        </button>
      </div>

      <nav ref={navbarRef}>
        <div
          className={`flex mobile-nav-box px-[1.2rem] pt-[1.7rem] items-center sm:px-[1.8rem] lg:px-[1.8rem] z-[1200] relative overflow-y-hidden transition-all duration-500 ${
            sidemenu && showFloatingHamburger
              ? 'opacity-0 pointer-events-none absolute -top-[6rem] -right-[5rem] scale-[0.98]'
              : 'opacity-100 pointer-events-auto relative top-0 right-0 scale-[1]'
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
          <div
            ref={nameRef}
            className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2"
          >
            {sidemenu ? (
              <h1 className="text-[#ffff] [font-family:var(--font-fira)] text-[1.4rem] z-[1200] ayo">
                Ayodeji!
              </h1>
            ) : (
              <p className="text-[1.2rem] text-[#1f1e1e] lg:text-[1rem] font-[600] z-[1200] ayo-title">
                Ayodeji Olupinla
              </p>
            )}
          </div>
          <div>
            {sidemenu ? (
              <button
                className="bg-[#192781] w-[10rem] h-[8vh] rounded-3xl hidden sm:block lg:block hover:cursor-pointer lg:z-[1100] ctatwo-btn"
                data-hover="Get in touch"
                onClick={() => navigate('/contact')}
              >
                <span>Get in touch</span>
              </button>
            ) : (
              <button
                className="bg-[#192781] w-[10rem] h-[8vh] rounded-3xl hidden sm:block lg:block hover:cursor-pointer lg:z-[1100] cta-btn"
                data-hover="Get in touch"
                onClick={() => navigate('/contact')}
              >
                <span>Get in touch</span>
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
                {Mobilemenu.map((nav) => (
                  <li key={nav.id} className="py-2 hover:cursor-pointer">
                    <Link
                      className={`text-[1.5rem] [font-family:var(--font-nunito)] font-[700] hover:cursor-pointer hover:text-[#ffffff] lg:text-[1.7rem] transition duration-300 ${
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

                <button className="bg-[white] w-[15rem] h-[7vh] text-[black] rounded-full mt-[2rem] text-[1.1rem] sm:hidden lg:hidden reach-btn">
                  <Link to="/contact">Get in touch</Link>
                </button>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <div ref={nameRef} className="flex justify-center lg:hidden">
        {sidemenu ? (
          <h1 className="text-[#ffff] [font-family:var(--font-fira)] text-[1.4rem] mt-[-2.5rem] z-[1200] ayo">
            Ayodeji!
          </h1>
        ) : (
          <p className="text-[1.2rem] text-[#1f1e1e] font-[600] mt-[-2.5rem] z-[1200] ayo-title">
            Ayodeji Olupinla
          </p>
        )}
      </div>
    </div>
  );
};

export default Navbar;
