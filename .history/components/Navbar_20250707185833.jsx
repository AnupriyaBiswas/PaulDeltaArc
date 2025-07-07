import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

import NavLogo from '../public/assets/mainLogo.png';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState('#ffffff');
  const [linkColor, setLinkColor] = useState('#1f2937');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener('scroll', handleShadow);
  }, []);

  const services = [
    { name: 'Fire Protection & Detection Systems', link: '/#fire-protection-systems' },
    { name: 'Electrical Systems & Ventilation', link: '/#electrical-systems-ventilation' },
    { name: 'Plumbing & Public Health Engineering', link: '/#plumbing-public-health' },
    { name: 'Building Automation & Smart Controls', link: '/#building-automation' },
    { name: 'Surveillance, Intercom & Access Control', link: '/#surveillance-intercom-access-control' },
    { name: 'Annual Maintenance Contracts', link: '/#annual-maintenance-contracts' },
  ];

  return (
    <div
      style={{ backgroundColor: `${navBg}` }}
      className={
        shadow
          ? 'fixed w-full h-24 shadow-2xl z-[100] ease-in-out duration-300 backdrop-blur-sm border-b border-gray-100'
          : 'fixed w-full h-24 z-[100] backdrop-blur-sm border-b border-gray-50'
      }
    >
      <div className='flex justify-between items-center w-full h-full px-4 2xl:px-16'>
        <Link href='/'>
          <a className='hover:scale-105 transition-transform duration-300'>
            <Image
              src={NavLogo}
              alt='Logo'
              width='110'
              height='88'
              className='cursor-pointer'
            />
          </a>
        </Link>

        {/* Desktop Menu */}
        <div>
          <ul style={{ color: `${linkColor}` }} className='hidden md:flex items-center'>
            <li className='ml-8 text-sm font-medium uppercase hover:text-teal-600 transition-colors duration-300'>
              <Link href='/'>
                <a className='py-2 px-1 relative group'>
                  Home
                  <span className='absolute bottom-0 left-0 w-0 h-0.5 bg-teal-600 transition-all duration-300 group-hover:w-full'></span>
                </a>
              </Link>
            </li>
            <li className='ml-8 text-sm font-medium uppercase hover:text-teal-600 transition-colors duration-300'>
              <Link href='/#about'>
                <a className='py-2 px-1 relative group'>
                  About
                  <span className='absolute bottom-0 left-0 w-0 h-0.5 bg-teal-600 transition-all duration-300 group-hover:w-full'></span>
                </a>
              </Link>
            </li>

            {/* Dropdown */}
            <li
              className='ml-8 text-sm font-medium uppercase relative group cursor-pointer'
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <div className='flex items-center gap-1 py-2 px-1 hover:text-teal-600 transition-colors duration-300 relative group'>
                Services 
                <ChevronDownIcon className={`w-4 h-4 transition-transform duration-300 ${dropdownOpen ? 'rotate-180' : ''}`} />
                <span className='absolute bottom-0 left-0 w-0 h-0.5 bg-teal-600 transition-all duration-300 group-hover:w-full'></span>
              </div>
              
              {/* Dropdown Menu */}
              <div 
                className={`absolute top-full left-0 mt-2 w-80 bg-white shadow-xl rounded-xl overflow-hidden text-gray-800 z-50 border border-gray-100 transition-all duration-300 ${
                  dropdownOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-2 invisible'
                }`}
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <div className='py-2'>
                  {services.map((item, idx) => (
                    <Link href={item.link} key={idx}>
                      <a className='block px-6 py-3 hover:bg-gradient-to-r hover:from-teal-50 hover:to-cyan-50 hover:text-teal-700 transition-all duration-300 text-sm font-medium border-b border-gray-50 last:border-b-0'>
                        {item.name}
                      </a>
                    </Link>
                  ))}
                </div>
              </div>
            </li>

            <li className='ml-8 text-sm font-medium uppercase hover:text-teal-600 transition-colors duration-300'>
              <Link href='/#industries-we-serve'>
                <a className='py-2 px-1 relative group'>
                  Industries
                  <span className='absolute bottom-0 left-0 w-0 h-0.5 bg-teal-600 transition-all duration-300 group-hover:w-full'></span>
                </a>
              </Link>
            </li>
            <li className='ml-8 text-sm font-medium uppercase hover:text-teal-600 transition-colors duration-300'>
              <Link href='/#approach'>
                <a className='py-2 px-1 relative group'>
                  Approach
                  <span className='absolute bottom-0 left-0 w-0 h-0.5 bg-teal-600 transition-all duration-300 group-hover:w-full'></span>
                </a>
              </Link>
            </li>
            <li className='ml-8 text-sm font-medium uppercase hover:text-teal-600 transition-colors duration-300'>
              <Link href='/#contact'>
                <a className='py-2 px-1 relative group'>
                  Contact
                  <span className='absolute bottom-0 left-0 w-0 h-0.5 bg-teal-600 transition-all duration-300 group-hover:w-full'></span>
                </a>
              </Link>
            </li>
          </ul>

          {/* Hamburger */}
          <div
            style={{ color: `${linkColor}` }}
            onClick={handleNav}
            className='md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-300'
          >
            <AiOutlineMenu size={28} />
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70 z-50' : ''}>
        {/* Side Drawer */}
        <div
          className={
            nav
              ? 'fixed left-0 top-0 w-[85%] sm:w-[70%] md:w-[50%] h-screen bg-white p-8 ease-in duration-500 shadow-2xl'
              : 'fixed left-[-100%] top-0 p-8 ease-in duration-500'
          }
        >
          <div>
            <div className='flex w-full items-center justify-between'>
              <Link href='/'>
                <a>
                  <Image src={NavLogo} width='100' height='40' alt='Logo' />
                </a>
              </Link>
              <div
                onClick={handleNav}
                className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 hover:shadow-xl transition-all duration-300'
              >
                <AiOutlineClose />
              </div>
            </div>
          </div>

          <div className='py-4 flex flex-col'>
            <ul className='uppercase'>
              <Link href='/'>
                <li onClick={() => setNav(false)} className='py-4 text-sm font-medium hover:text-teal-600 transition-colors duration-300 border-b border-gray-100 cursor-pointer'>
                  Home
                </li>
              </Link>
              <Link href='/#about'>
                <li onClick={() => setNav(false)} className='py-4 text-sm font-medium hover:text-teal-600 transition-colors duration-300 border-b border-gray-100 cursor-pointer'>
                  About
                </li>
              </Link>

              {/* Mobile Dropdown */}
              <li 
                onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)} 
                className='py-4 text-sm font-medium hover:text-teal-600 transition-colors duration-300 border-b border-gray-100 cursor-pointer flex items-center justify-between'
              >
                Services 
                <span className={`transform transition-transform duration-300 ${mobileDropdownOpen ? 'rotate-180' : ''}`}>
                  ▼
                </span>
              </li>
              {mobileDropdownOpen && (
                <ul className='pl-4 text-sm bg-gray-50 rounded-lg mx-2 mb-2'>
                  {services.map((item, idx) => (
                    <Link href={item.link} key={idx}>
                      <li onClick={() => setNav(false)} className='py-3 px-4 hover:text-teal-600 transition-colors duration-300 border-b border-gray-200 last:border-b-0 cursor-pointer font-medium'>
                        {item.name}
                      </li>
                    </Link>
                  ))}
                </ul>
              )}

              <Link href='/#industries-we-serve'>
                <li onClick={() => setNav(false)} className='py-4 text-sm font-medium hover:text-teal-600 transition-colors duration-300 border-b border-gray-100 cursor-pointer'>
                  Industries
                </li>
              </Link>
              <Link href='/#approach'>
                <li onClick={() => setNav(false)} className='py-4 text-sm font-medium hover:text-teal-600 transition-colors duration-300 border-b border-gray-100 cursor-pointer'>
                  Approach
                </li>
              </Link>
              <Link href='/#contact'>
                <li onClick={() => setNav(false)} className='py-4 text-sm font-medium hover:text-teal-600 transition-colors duration-300 border-b border-gray-100 cursor-pointer'>
                  Contact
                </li>
              </Link>
            </ul>   
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;