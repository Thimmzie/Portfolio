import React, { useState, useEffect } from 'react';
import mobilemenu from '../../constants/index.js';
import gsap from 'gsap';
import { useLocation } from 'react-router-dom';

const Navbar = () => {
  const [sidemenu, setSidemenu] = useState(false);
  const handleClick = () => setSidemenu((sidemenu) => !sidemenu);

  const [menuClass, setMenuClass] = useState('fly-out');

  useEffect(() => {
    if (sidemenu) {
      setMenuClass('fly-out');
      const timer = setTimeout(() => {
        setMenuClass('fly-in');
      }, 500);
      return () => clearTimeout(timer);
    } else {
      setMenuClass('fly-out');
    }
  }, [sidemenu]);

  useEffect(() => {
    if (sidemenu) {
      gsap.fromTo(
        '.ayo',
        { y: 15, opacity: 0 },
        { y: 0, opacity: 1, ease: 'back.inOut', duration: 0.6 }
      );
    } else {
      gsap.fromTo(
        '.ayo-title',
        { y: -15, opacity: 0 },
        { y: 0, opacity: 1, ease: 'back.inOut', duration: 0.6 }
      );
    }
  }, [sidemenu]);

  const location = useLocation();

  return (
    <div>
      <nav>
        <div className="flex mobile-nav-box px-[1.2rem] pt-[1.7rem] items-center sm:px-[1.8rem] lg:px-[2.5rem] z-[999] relative">
          <button
            onClick={handleClick}
            aria-expanded={sidemenu}
            aria-label="Toggle menu"
            className={`hamburger ${sidemenu ? 'active' : ''}`}
          >
            <span className="bar" />
            <span className="bar" />
          </button>

          <button
            className="bg-[#192781] w-[12rem] h-[8vh] rounded-3xl reach-btn hidden lg:block hover:cursor-pointer cta-btn"
            data-hover="Go Ahead 😎"
          >
            <a href="#">Get in touch</a>
          </button>
        </div>

        <div
          className={`inset-0 h-[100vh] z-[1000] fixed top-0 left-0 right-0 px-[1.2rem] pt-[1.7rem] menu-div transition-opacity duration-300 pointer-events-none ${
            sidemenu
              ? 'opacity-100 visible pointer-events-auto'
              : 'opacity-0 invisible'
          }`}
          aria-hidden={!sidemenu}
        >
          <div className="flex items-center">
            <button
              onClick={handleClick}
              aria-label="Close menu"
              className={`hamburger ${sidemenu ? 'active' : ''}`}
            >
              <span className="bar" />
              <span className="bar" />
            </button>
          </div>

          <div className="flex flex-col items-center">
            {/* <h1 className="text-[#ffff] [font-family:var(--font-fira)] text-[1.4rem] mt-[-2.5rem] ayo">
              Ayodeji!
            </h1> */}

            <div className="cont ">
              <ul
                className={`flex flex-col items-center mobile lg:hidden mt-[3.5rem] ul ${menuClass}
                }`}
              >
                {mobilemenu.map((nav) => (
                  <li key={nav.id} className="py-2">
                    <a
                      className={`text-[1.5rem] [font-family:var(--font-nunito)] font-[700] transition duration-300 ${
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

                <button className="bg-[white] w-[15rem] h-[7vh] text-[black] rounded-3xl mt-[2rem] text-[1.1rem] reach-btn">
                  Get in touch
                </button>
              </ul>
            </div>
          </div>
        </div>
      </nav>

      <div className="flex justify-center ">
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
