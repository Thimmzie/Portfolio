import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';
import { Mobilemenu } from '../../constants/index.js';
import gsap from 'gsap';
import { Link, useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const [sidemenu, setSidemenu] = useState(false);
  const handleClick = () => setSidemenu(!sidemenu);
  const [menuClass, setMenuClass] = useState('fly-out');
  const [menuVisible, setMenuVisible] = useState(false);
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
    if (sidemenu) {
      const scrollbarWidth =
        window.innerWidth - document.documentElement.clientWidth;

      document.body.style.overflowY = 'hidden';
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    } else {
      document.body.style.overflowY = '';
      document.body.style.paddingRight = '';
    }
  }, [sidemenu]);

  const navigate = useNavigate();

  return (
    <>
      <div
        className={`fixed top-0 left-0 w-full z-[2000] ${
          sidemenu
            ? 'bg-transparent backdrop-blur-0'
            : 'bg-gray-800/60 backdrop-blur-md'
        }`}
      >
        <div className="flex justify-between items-center  px-[1.2rem] sm:px-[1.8rem] lg:px-[1.4rem] py-[0.5rem] relative">
          <div>
            <button
              onClick={handleClick}
              aria-expanded={sidemenu}
              className={`hamburger ${sidemenu ? 'active' : ''}`}
            >
              <span className="bar" />
              <span className="bar" />
            </button>
          </div>

          <div
            ref={nameRef}
            className="absolute left-1/2 transform -translate-x-1/2 text-center"
          >
            {sidemenu ? (
              <h1 className="text-white text-[1.4rem] [font-family:var(--font-fira)] ayo">
                Ayodeji!
              </h1>
            ) : (
              <p className="text-white text-[1.4rem] lg:text-[1.6rem] font-[600] [font-family:var(--font-bebas)] ayo-title">
                Ayodeji Olupinla
              </p>
            )}
          </div>

          <div>
            {sidemenu ? (
              <button
                className="bg-[#192781] w-[10rem] h-[8vh] rounded-3xl hidden sm:block lg:block hover:cursor-pointer lg:z-[1100] ctatwo-btn "
                data-hover="Home"
                onClick={() => navigate('/')}
              >
                <span> Home</span>
              </button>
            ) : (
              <button
                className="bg-[#192781] w-[10rem] h-[8vh] rounded-3xl hidden sm:block lg:block hover:cursor-pointer sm:z-[1100000000000] cta-btn "
                data-hover="Home"
                onClick={() => navigate('/')}
              >
                <span> Home</span>
              </button>
            )}
          </div>
        </div>
      </div>
      <div className="h-[5.5rem]" />

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
                  Home
                </button>
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
