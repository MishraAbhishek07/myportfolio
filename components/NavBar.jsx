"use client";
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import Logo from "@/assets/hamburger-menu.svg";

function NavBar() {
  const [navbar, setNavbar] = useState(false);
  const [bgColor, setBgColor] = useState('bg-transparent');
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setBgColor(darkMode ? 'bg-gray-900' : 'bg-slate-300');
      } else {
        setBgColor('bg-transparent');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  const toggleNavbar = () => {
    if (window.innerWidth < 768) {
      setNavbar(!navbar);
    }
  };

  return (
    <div className={`${darkMode ? 'dark' : ''}`}>
      <nav
        className={`w-full fixed top-0 left-0 right-0 z-50 ${
          navbar && window.innerWidth < 768 ? 'bg-gray-400' : bgColor
        } transition-colors duration-500`}
      >
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              <Link href="/">
                <h2 className="text-xl text-black">&lt; Abhishek/ &gt;</h2>
              </Link>
              <div className="md:hidden flex items-center">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={toggleNavbar}
                >
                  <Image src={Logo} width={30} height={30} alt="logo" />
                </button>
                <button
                  className="ml-4 p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={toggleDarkMode}
                >
                  <FontAwesomeIcon
                    icon={darkMode ? faSun : faMoon}
                    className="text-xl"
                  />
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`${
                navbar ? 'block h-auto' : 'hidden'
              } md:block flex-1 justify-self-center pb-3 mt-4 md:pb-0 md:mt-0`}
            >
              <ul
                className={`${
                  navbar ? 'space-y-1' : 'space-y-0'
                } md:space-y-0 md:flex items-center justify-center`}
              >
                <li className="py-2 px-4 md:px-6 text-center text-xl md:text-base text-white hover:bg-purple-600 md:hover:bg-transparent md:hover:text-purple-600">
                  <Link href="#projects" onClick={toggleNavbar}>
                    Projects
                  </Link>
                </li>
                <li className="py-2 px-4 md:px-6 text-center text-xl md:text-base text-white hover:bg-purple-600 md:hover:bg-transparent md:hover:text-purple-600">
                  <Link
                    href="https://drive.google.com/file/d/1wIK_ZlKEiPsnwl7MTBwVsl25WB36iQVu/view?usp=drive_link"
                    onClick={toggleNavbar}
                  >
                    Resume
                  </Link>
                </li>
                <li className="py-2 px-4 md:px-6 text-center text-xl md:text-base text-white hover:bg-purple-600 md:hover:bg-transparent md:hover:text-purple-600">
                  <Link href="#aboutme" onClick={toggleNavbar}>
                    About
                  </Link>
                </li>
                <li className="py-2 px-4 md:px-6 text-center text-xl md:text-base text-white hover:bg-purple-600 md:hover:bg-transparent md:hover:text-purple-600">
                  <Link href="#skills" onClick={toggleNavbar}>
                    Skills
                  </Link>
                </li>
                <li className="py-2 px-4 md:px-6 text-center">
                  <button
                    className="p-2 text-gray-700 dark:text-gray-300 rounded-md outline-none focus:border-gray-400 focus:border"
                    onClick={toggleDarkMode}
                  >
                    <FontAwesomeIcon
                      icon={darkMode ? faSun : faMoon}
                      className="text-xl"
                    />
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
