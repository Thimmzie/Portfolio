import React, { useState, useEffect, useRef } from 'react';
import Deji from '../assets/images/deji.jpg';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoCloseSharp } from 'react-icons/io5';
import mobilemenu from '../../constants/index.js';
import gsap from 'gsap';

const Navbar = () => {
  const [sidemenu, setSidemenu] = useState(false);
  const menuRef = useRef(null);

  const handleClick = () => {
    setSidemenu(!sidemenu);
  };
  useEffect(() => {
    if (sidemenu && menuRef.current) {
      gsap.fromTo(
        menuRef.current.querySelectorAll('li, .reach-btn'),
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'expo.out',
          stagger: 0.2,
        }
      );
    }
  }, [sidemenu]);
  return (
    <div>
      <div className="flex mobile-nav-box px-[1.2rem] h-[12vh] items-center bg-[#f5f5f5] justify-between">
        <div className="flex gap-2 items-center">
          <img src={Deji} alt="profile" className="logo" />
          <p className="text-[1rem] text-[#1f1e1e]">Ayodeji Olupinla</p>
        </div>
        <div onClick={handleClick} className="cursor-pointer">
          {!sidemenu ? (
            <GiHamburgerMenu size={25} />
          ) : (
            <IoCloseSharp size={29} />
          )}
        </div>
      </div>
      {sidemenu && (
        <ul ref={menuRef} className="bg-[#f5f5f5] p-4 mobile">
          {mobilemenu.map((nav) => (
            <li key={nav.id} className="py-2">
              <a
                className="text-[1.2rem] text-[#1b1b1b] font-[500]"
                href={`#${nav.id}`}
              >
                {nav.title}
              </a>
            </li>
          ))}
          <button className="bg-[#1f4282] w-[20rem] h-[7vh] text-[white] rounded-4xl mt-[2rem] reach-btn">
            Reach out to me
          </button>
        </ul>
      )}
    </div>
  );
};

export default Navbar;
