import React, { useState, useEffect, useRef } from 'react';
import Deji from '../assets/images/deji.jpg';
import { HiOutlineMenuAlt4 } from 'react-icons/hi';
import { IoCloseSharp } from 'react-icons/io5';
import mobilemenu from '../../constants/index.js';
import gsap from 'gsap';
import { useLocation } from 'react-router-dom';

const Navbar = () => {
  const [sidemenu, setSidemenu] = useState(false);
  const menuRef = useRef();
  const tl = useRef();

  const handleClick = () => {
    setSidemenu(!sidemenu);
  };
  useEffect(() => {
    // if (sidemenu && menuRef.current) {
    //   gsap.fromTo(
    //     menuRef.current.querySelectorAll('li, .reach-btn'),
    //     { y: 50, opacity: 0 },
    //     {
    //       y: 0,
    //       opacity: 1,
    //       duration: 1.2,
    //       ease: 'expo.out',
    //       stagger: 0.2,
    //     }
    //   );
    // }
    gsap.fromTo(
      '.ayo',
      { y: 20, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        ease: 'back.inOut',
      }
    );
  }, [sidemenu]);

  useEffect(() => {
    tl.current = gsap.timeline({ paused: true })
    .fromTo(
      menuRef.current,
      { opacity: 0, scale: 0.2, z: 100 },
      {
        opacity: 1,
        scale: 1,
        z: 0,
        duration: 0.8,
        ease: 'back.inOut',
        delay: 0.3,
      }
    );
  }, [sidemenu]);

  useEffect(() => {
    if (tl.current) {
      sidemenu ? tl.current.play() : tl.current.reverse();
    }
  }, [sidemenu]);
  const location = useLocation();
  return (
    <div>
      <nav>
        <div className="flex mobile-nav-box px-[1.2rem] pt-[1.7rem] items-center sm:px-[1.8rem] lg:px-[2.5rem] z-[999] relative">
          <div
            onClick={handleClick}
            className={`hamburger ${sidemenu ? 'active' : ''}`}
          >
            <span className="bar"></span>
            <span className="bar"></span>
          <div className="">
            <p className="text-[1.2rem] text-[#1f1e1e] lg:text-[1rem]">
              Ayodeji Olupinla
            </p>
          </div>
          <div className="lg:hidden text-[#f5f5f5]">hd</div>
          {/* <div>
            <button
              className="bg-[#1f4282] w-[15rem] h-[7vh] rounded-4xl  reach-btn hidden lg:block hover:cursor-pointer cta-btn"
              data-hover="Go Ahead 😎"
            >
              <a href="#">Reach out to me</a>
            </button>
          </div> */}
          {/* <div onClick={handleClick} className="cursor-pointer block lg:hidden">
            {!sidemenu ? (
              <HiOutlineMenuAlt4 size={29} />
            ) : (
              <IoCloseSharp size={29} />
            )}
          </div> */}

          {/* <div className="hidden lg:block">
            <ul
              ref={menuRef}
              className="bg-[#f5f5f5] p-4 mobile flex gap-[2rem]"
            >
              {mobilemenu.map((nav) => (
                <li key={nav.id} className="py-2">
                  <a
                    className="text-[1rem] text-[#1b1b1b] font-[500] hover:text-[#345186] transition-[1.2s]"
                    href={`#${nav.id}`}
                  >
                    {nav.title}
                  </a>
                </li>
              ))} */}

          {/* <button className="bg-[#1f4282] w-[20rem] h-[7vh] text-[white] rounded-4xl mt-[2rem] reach-btn block lg:hidden">
                <a href="#">Reach out to me</a>
              </button>
            </ul>
          </div> */}
          <button
            className="bg-[#192781] w-[12rem] h-[8vh] rounded-4xl  reach-btn hidden lg:block hover:cursor-pointer cta-btn"
            data-hover="Go Ahead 😎"
          >
            <a href="#">Get in touch</a>
          </button>
        </div>
        <div>
          {sidemenu && (
            <div className="block inset-0 h-[100vh] z-[1000] absolute top-0 left-0 right-0 px-[1.2rem] pt-[1.7rem] menu-div">
              <div className="flex items-center">
                <div
                  onClick={handleClick}
                  className={`hamburger ${sidemenu ? 'active' : ''}`}
                >
                  <span className="bar"></span>
                  <span className="bar"></span>
                </div>
                {/* <div className="mx-auto">
                  <h1 className="text-[#ffff] [font-family:var(--font-fira)] text-[1.3rem]">
                    Ayodeji!✨
                  </h1>
                </div> */}
              </div>
              <div className=" flex flex-col items-center">
                <h1 className="text-[#ffff] [font-family:var(--font-fira)] text-[1.4rem] mt-[-2.5rem] ayo">
                  Ayodeji!
                </h1>
                <ul
                  ref={menuRef}
                  className=" flex flex-col items-center mobile lg:hidden mt-[3.5rem] ul"
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

                  <button className="bg-[white] w-[15rem] h-[7vh] text-[black] rounded-4xl mt-[2rem] text-[1.1rem] reach-btn">
                    Get in touch
                  </button>
                </ul>
              </div>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
