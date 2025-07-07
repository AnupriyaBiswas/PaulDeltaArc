import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { ChevronDownIcon } from '@heroicons/react/20/solid'; // NEW

import NavLogo from '../public/assets/mainLogo.png';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState('#ecf0f3');
  const [linkColor, setLinkColor] = useState('#1f2937');
  const [dropdownOpen, setDropdownOpen] = useState(false); // Desktop dropdown
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false); // Mobile submenu

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
    { name: 'Fire Protection & Detection Systems', link: '/services/fire-protection' },
    { name: 'Electrical Systems & Ventilation', link: '/services/electrical' },
    { name: 'Plumbing & Public Health Engineering', link: '/services/plumbing' },
    { name: 'Building Automation & Smart Controls', link: '/services/automation' },
    { name: 'Surveillance, Intercom & Access Control', link: '/services/security' },
    { name: 'Annual Maintenance Contracts', link: '/services/amc' },
  ];

  return (
    <div
      style={{ backgroundColor: `${navBg}` }}
      className={
        shadow
          ? 'fixed w-full h-20 shadow-xl z-[100] ease-in-out duration-300'
          : 'fixed w-full h-20 z-[100]'
      }
    >
      <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
        <Link href='/'>
          <a>
            <Image
              src={NavLogo}
              alt='Logo'
              width='100'
              height='80'
              className='cursor-pointer'
            />
          </a>
        </Link>

        {/* Desktop Menu */}
        <div>
          <ul style={{ color: `${linkColor}` }} className='hidden md:flex'>
            <li className='ml-10 text-sm uppercase hover:border-b'>
              <Link href='/'>Home</Link>
            </li>
            <li className='ml-10 text-sm uppercase hover:border-b'>
              <Link href='/#about'>About</Link>
            </li>

            {/* Dropdown */}
            <li
              className='ml-10 text-sm uppercase relative group cursor-pointer'
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <div className='flex items-center gap-1 hover:border-b pb-1'>
                Services <ChevronDownIcon className='w-4 h-4' />
              </div>
              {dropdownOpen && (
                <ul className='absolute top-full left-0 mt-2 w-72 bg-white shadow-lg rounded-md overflow-hidden text-gray-800 z-50'>
                  {services.map((item, idx) => (
                    <li key={idx} className='px-4 py-2 hover:bg-gray-100 whitespace-nowrap'>
                      <Link href={item.link}>{item.name}</Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            <li className='ml-10 text-sm uppercase hover:border-b'>
              <Link href='/#projects'>Projects</Link>
            </li>
            <li className='ml-10 text-sm uppercase hover:border-b'>
              <Link href='/resume'>Resume</Link>
            </li>
            <li className='ml-10 text-sm uppercase hover:border-b'>
              <Link href='/#youtube'>Youtube</Link>
            </li>
            <li className='ml-10 text-sm uppercase hover:border-b'>
              <Link href='/#contact'>Contact</Link>
            </li>
          </ul>

          {/* Hamburger */}
          <div
            style={{ color: `${linkColor}` }}
            onClick={handleNav}
            className='md:hidden'
          >
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''}>
        {/* Side Drawer */}
        <div
          className={
            nav
              ? ' fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500'
              : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'
          }
        >
          <div>
            <div className='flex w-full items-center justify-between'>
              <Link href='/'>
                <a>
                  <Image src={NavLogo} width='87' height='35' alt='Logo' />
                </a>
              </Link>
              <div
                onClick={handleNav}
                className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className='border-b border-gray-300 my-4'>
              <p className='w-[85%] md:w-[90%] py-4'>
                Let&#39;s build something legendary together
              </p>
            </div>
          </div>

          <div className='py-4 flex flex-col'>
            <ul className='uppercase'>
              <Link href='/'><li onClick={() => setNav(false)} className='py-4 text-sm'>Home</li></Link>
              <Link href='/#about'><li onClick={() => setNav(false)} className='py-4 text-sm'>About</li></Link>

              {/* Mobile Dropdown */}
              <li onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)} className='py-4 text-sm cursor-pointer'>
                Services {mobileDropdownOpen ? '▲' : '▼'}
              </li>
              {mobileDropdownOpen && (
                <ul className='pl-4 text-sm'>
                  {services.map((item, idx) => (
                    <Link href={item.link} key={idx}>
                      <li onClick={() => setNav(false)} className='py-2'>
                        {item.name}
                      </li>
                    </Link>
                  ))}
                </ul>
              )}

              <Link href='/#projects'><li onClick={() => setNav(false)} className='py-4 text-sm'>Projects</li></Link>
              <Link href='/resume'><li onClick={() => setNav(false)} className='py-4 text-sm'>Resume</li></Link>
              <Link href='/#youtube'><li onClick={() => setNav(false)} className='py-4 text-sm'>Youtube</li></Link>
              <Link href='/#contact'><li onClick={() => setNav(false)} className='py-4 text-sm'>Contact</li></Link>
            </ul>

            {/* Social Icons */}
            <div className='pt-40'>
              <p className='uppercase tracking-widest text-[#5651e5]'>Let&#39;s Connect</p>
              <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                <a href='https://www.linkedin.com/in/sumanitian/' target='_blank' rel='noreferrer'>
                  <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                    <FaLinkedinIn />
                  </div>
                </a>
                <a href='https://github.com/sumanitian' target='_blank' rel='noreferrer'>
                  <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                    <FaGithub />
                  </div>
                </a>
                <Link href='/#contact'>
                  <div onClick={() => setNav(false)} className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                    <AiOutlineMail />
                  </div>
                </Link>
                <Link href='/resume'>
                  <div onClick={() => setNav(false)} className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                    <BsFillPersonLinesFill />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
