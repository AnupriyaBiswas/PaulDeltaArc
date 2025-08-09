import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';

import NavLogo from '../public/assets/mainLogo.png';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [linkColor, setLinkColor] = useState('#f8fafc');

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

  return (
    <div
      className={
        shadow
          ? 'fixed w-full h-16 z-[100] ease-in-out duration-500 bg-slate-900/80 backdrop-blur-xl border-b border-teal-500/20 shadow-2xl shadow-slate-900/20'
          : 'fixed w-full h-16 z-[100] bg-slate-900/60 backdrop-blur-xl border-b border-slate-700/30'
      }
    >
      <div className='flex justify-between items-center w-full h-full px-6 2xl:px-20'>
        {/* Logo */}
        <Link href='/'>
          <a className='hover:scale-105 transition-all duration-300 group'>
            <div className='relative'>
              <Image
                src={NavLogo}
                alt='Paul Delta Arc Logo'
                width='70'
                height='55'
                className='cursor-pointer filter brightness-110'
              />
              <div className='absolute inset-0 bg-gradient-to-r from-teal-400/0 via-teal-400/10 to-teal-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg'></div>
            </div>
          </a>
        </Link>

        {/* Desktop Menu */}
        <div>
          <ul style={{ color: `${linkColor}` }} className='hidden md:flex items-center space-x-8'>
            <li className='relative group'>
              <Link href='/'>
                <a className='py-3 px-4 text-sm font-medium uppercase tracking-wider hover:text-teal-400 transition-all duration-300 relative overflow-hidden'>
                  <span className='relative z-10'>Home</span>
                  <div className='absolute inset-0 bg-gradient-to-r from-teal-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg'></div>
                  <span className='absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-teal-400 to-cyan-400 transition-all duration-300 group-hover:w-full group-hover:left-0'></span>
                </a>
              </Link>
            </li>
            <li className='relative group'>
              <Link href='/#about'>
                <a className='py-3 px-4 text-sm font-medium uppercase tracking-wider hover:text-teal-400 transition-all duration-300 relative overflow-hidden'>
                  <span className='relative z-10'>About</span>
                  <div className='absolute inset-0 bg-gradient-to-r from-teal-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg'></div>
                  <span className='absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-teal-400 to-cyan-400 transition-all duration-300 group-hover:w-full group-hover:left-0'></span>
                </a>
              </Link>
            </li>
            <li className='relative group'>
              <Link href='/#services'>
                <a className='py-3 px-4 text-sm font-medium uppercase tracking-wider hover:text-teal-400 transition-all duration-300 relative overflow-hidden'>
                  <span className='relative z-10'>Services</span>
                  <div className='absolute inset-0 bg-gradient-to-r from-teal-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg'></div>
                  <span className='absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-teal-400 to-cyan-400 transition-all duration-300 group-hover:w-full group-hover:left-0'></span>
                </a>
              </Link>
            </li>
            <li className='relative group'>
              <Link href='/#industries-we-serve'>
                <a className='py-3 px-4 text-sm font-medium uppercase tracking-wider hover:text-teal-400 transition-all duration-300 relative overflow-hidden'>
                  <span className='relative z-10'>Industries</span>
                  <div className='absolute inset-0 bg-gradient-to-r from-teal-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg'></div>
                  <span className='absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-teal-400 to-cyan-400 transition-all duration-300 group-hover:w-full group-hover:left-0'></span>
                </a>
              </Link>
            </li>
            <li className='relative group'>
              <Link href='/#approach'>
                <a className='py-3 px-4 text-sm font-medium uppercase tracking-wider hover:text-teal-400 transition-all duration-300 relative overflow-hidden'>
                  <span className='relative z-10'>Approach</span>
                  <div className='absolute inset-0 bg-gradient-to-r from-teal-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg'></div>
                  <span className='absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-teal-400 to-cyan-400 transition-all duration-300 group-hover:w-full group-hover:left-0'></span>
                </a>
              </Link>
            </li>
            <li className='relative group'>
              <Link href='/#contact'>
                <a className='py-2 px-6 text-sm font-semibold uppercase tracking-wider bg-gradient-to-r from-teal-600 to-teal-500 text-white rounded-full hover:from-teal-500 hover:to-cyan-500 transition-all duration-300 shadow-lg hover:shadow-teal-500/25 hover:scale-105 border border-teal-400/30'>
                  Contact
                </a>
              </Link>
            </li>
          </ul>

          {/* Hamburger Menu */}
          <div
            style={{ color: `${linkColor}` }}
            onClick={handleNav}
            className='md:hidden p-3 rounded-xl hover:bg-slate-800/50 transition-all duration-300 backdrop-blur-sm border border-slate-600/30 hover:border-teal-500/50'
          >
            <AiOutlineMenu size={24} />
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-slate-900/80 backdrop-blur-sm z-50' : ''}>
        {/* Side Drawer */}
        <div
          className={
            nav
              ? 'fixed left-0 top-0 w-[85%] sm:w-[70%] md:w-[50%] h-screen bg-slate-900/95 backdrop-blur-xl p-8 ease-in duration-500 shadow-2xl border-r border-slate-700/50'
              : 'fixed left-[-100%] top-0 p-8 ease-in duration-500'
          }
        >
          <div>
            {/* Mobile Header */}
            <div className='flex w-full items-center justify-between'>
              <Link href='/'>
                <a>
                  <Image src={NavLogo} width='80' height='50' alt='Paul Delta Arc Logo' className='filter brightness-110' />
                </a>
              </Link>
              <div
                onClick={handleNav}
                className='rounded-full bg-slate-800/50 backdrop-blur-sm p-3 cursor-pointer hover:scale-105 hover:bg-slate-700/50 transition-all duration-300 border border-slate-600/50 hover:border-teal-500/50'
              >
                <AiOutlineClose className='text-white' size={20} />
              </div>
            </div>

            {/* Mobile Tagline */}
            <div className='border-b border-slate-700/50 my-6'>
              <p className='w-[85%] md:w-[90%] py-4 text-gray-300 font-medium text-sm'>
                Electromechanical Excellence in Every Project
              </p>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className='py-4 flex flex-col'>
            <ul className='uppercase space-y-2'>
              <Link href='/'>
                <li 
                  onClick={() => setNav(false)} 
                  className='py-4 px-4 text-sm font-medium text-gray-200 hover:text-teal-400 hover:bg-slate-800/50 transition-all duration-300 border-b border-slate-700/30 cursor-pointer rounded-lg backdrop-blur-sm'
                >
                  Home
                </li>
              </Link>
              <Link href='/#about'>
                <li 
                  onClick={() => setNav(false)} 
                  className='py-4 px-4 text-sm font-medium text-gray-200 hover:text-teal-400 hover:bg-slate-800/50 transition-all duration-300 border-b border-slate-700/30 cursor-pointer rounded-lg backdrop-blur-sm'
                >
                  About
                </li>
              </Link>
              <Link href='/#services'>
                <li
                  onClick={() => setNav(false)}
                  className='py-4 px-4 text-sm font-medium text-gray-200 hover:text-teal-400 hover:bg-slate-800/50 transition-all duration-300 border-b border-slate-700/30 cursor-pointer rounded-lg backdrop-blur-sm'
                >
                  Services
                </li>
              </Link>
              <Link href='/#industries-we-serve'>
                <li 
                  onClick={() => setNav(false)} 
                  className='py-4 px-4 text-sm font-medium text-gray-200 hover:text-teal-400 hover:bg-slate-800/50 transition-all duration-300 border-b border-slate-700/30 cursor-pointer rounded-lg backdrop-blur-sm'
                >
                  Industries
                </li>
              </Link>
              <Link href='/#approach'>
                <li 
                  onClick={() => setNav(false)} 
                  className='py-4 px-4 text-sm font-medium text-gray-200 hover:text-teal-400 hover:bg-slate-800/50 transition-all duration-300 border-b border-slate-700/30 cursor-pointer rounded-lg backdrop-blur-sm'
                >
                  Approach
                </li>
              </Link>
              <Link href='/#contact'>
                <li 
                  onClick={() => setNav(false)} 
                  className='py-4 px-4 mt-2 text-sm font-semibold bg-gradient-to-r from-teal-600 to-teal-500 text-white hover:from-teal-500 hover:to-cyan-500 transition-all duration-300 cursor-pointer rounded-lg shadow-lg'
                >
                  Contact
                </li>
              </Link>
            </ul>

            {/* Social Icons */}
            <div className='pt-12'>
              <p className='uppercase tracking-widest text-teal-400 font-semibold text-sm mb-6'>
                Let&#39;s Connect
              </p>
              <div className='flex items-center justify-between w-full sm:w-[80%] space-x-4'>
                <a href='https://www.linkedin.com/in/sumanitian/' target='_blank' rel='noreferrer'>
                  <div className='rounded-full bg-slate-800/50 backdrop-blur-sm p-4 cursor-pointer hover:scale-110 hover:bg-blue-600/20 transition-all duration-300 border border-slate-600/50 hover:border-blue-400/50 group'>
                    <FaLinkedinIn size={18} className='text-gray-300 group-hover:text-blue-400' />
                  </div>
                </a>
                <a href='https://github.com/sumanitian' target='_blank' rel='noreferrer'>
                  <div className='rounded-full bg-slate-800/50 backdrop-blur-sm p-4 cursor-pointer hover:scale-110 hover:bg-gray-600/20 transition-all duration-300 border border-slate-600/50 hover:border-gray-400/50 group'>
                    <FaGithub size={18} className='text-gray-300 group-hover:text-gray-300' />
                  </div>
                </a>
                <Link href='/#contact'>
                  <div 
                    onClick={() => setNav(false)} 
                    className='rounded-full bg-slate-800/50 backdrop-blur-sm p-4 cursor-pointer hover:scale-110 hover:bg-teal-600/20 transition-all duration-300 border border-slate-600/50 hover:border-teal-400/50 group'
                  >
                    <AiOutlineMail size={18} className='text-gray-300 group-hover:text-teal-400' />
                  </div>
                </Link>
                <Link href='/resume'>
                  <div 
                    onClick={() => setNav(false)} 
                    className='rounded-full bg-slate-800/50 backdrop-blur-sm p-4 cursor-pointer hover:scale-110 hover:bg-purple-600/20 transition-all duration-300 border border-slate-600/50 hover:border-purple-400/50 group'
                  >
                    <BsFillPersonLinesFill size={18} className='text-gray-300 group-hover:text-purple-400' />
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
