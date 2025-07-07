import React, { useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState('rgba(147, 51, 234, 0.95)'); // Purple background
  const [linkColor, setLinkColor] = useState('#ffffff');
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
          ? 'fixed w-full h-16 shadow-2xl z-[100] ease-in-out duration-300 backdrop-blur-md border-b border-purple-300/30'
          : 'fixed w-full h-16 z-[100] backdrop-blur-md border-b border-purple-200/20'
      }
    >
      <div className='flex justify-between items-center w-full h-full px-4 2xl:px-16'>
        <a href='/' className='hover:scale-105 transition-transform duration-300'>
          <div className='w-20 h-12 bg-gradient-to-r from-purple-300 to-purple-100 rounded-lg flex items-center justify-center'>
            <span className='text-purple-800 font-bold text-lg'>LOGO</span>
          </div>
        </a>

        {/* Desktop Menu */}
        <div>
          <ul style={{ color: `${linkColor}` }} className='hidden md:flex items-center'>
            <li className='ml-6 text-sm font-semibold uppercase hover:text-purple-200 transition-all duration-300'>
              <a href='/' className='py-2 px-2 relative group'>
                Home
                <span className='absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-300 to-purple-100 transition-all duration-300 group-hover:w-full rounded-full'></span>
              </a>
            </li>
            <li className='ml-6 text-sm font-semibold uppercase hover:text-purple-200 transition-all duration-300'>
              <a href='/#about' className='py-2 px-2 relative group'>
                About
                <span className='absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-300 to-purple-100 transition-all duration-300 group-hover:w-full rounded-full'></span>
              </a>
            </li>

            {/* Dropdown */}
            <li
              className='ml-6 text-sm font-semibold uppercase relative group cursor-pointer'
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <div className='flex items-center gap-1 py-2 px-2 hover:text-purple-200 transition-all duration-300 relative group'>
                Services 
                <svg className={`w-4 h-4 transition-transform duration-300 ${dropdownOpen ? 'rotate-180' : ''}`} fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
                <span className='absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-300 to-purple-100 transition-all duration-300 group-hover:w-full rounded-full'></span>
              </div>
              
              {/* Dropdown Menu */}
              <div 
                className={`absolute top-full left-0 mt-1 w-80 bg-purple-50/95 backdrop-blur-md shadow-2xl rounded-2xl overflow-hidden text-purple-800 z-50 border border-purple-200/50 transition-all duration-300 ${
                  dropdownOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-2 invisible'
                }`}
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <div className='py-3'>
                  {services.map((item, idx) => (
                    <a href={item.link} key={idx} className='block px-6 py-3 hover:bg-gradient-to-r hover:from-purple-100/80 hover:to-purple-200/80 hover:text-purple-900 transition-all duration-300 text-sm font-medium border-b border-purple-200/50 last:border-b-0 hover:shadow-sm'>
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </li>

            <li className='ml-6 text-sm font-semibold uppercase hover:text-purple-200 transition-all duration-300'>
              <a href='/#industries-we-serve' className='py-2 px-2 relative group'>
                Industries
                <span className='absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-300 to-purple-100 transition-all duration-300 group-hover:w-full rounded-full'></span>
              </a>
            </li>
            <li className='ml-6 text-sm font-semibold uppercase hover:text-purple-200 transition-all duration-300'>
              <a href='/#approach' className='py-2 px-2 relative group'>
                Approach
                <span className='absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-300 to-purple-100 transition-all duration-300 group-hover:w-full rounded-full'></span>
              </a>
            </li>
            <li className='ml-6 text-sm font-semibold uppercase hover:text-purple-200 transition-all duration-300'>
              <a href='/#contact' className='py-2 px-2 relative group'>
                Contact
                <span className='absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-300 to-purple-100 transition-all duration-300 group-hover:w-full rounded-full'></span>
              </a>
            </li>
          </ul>

          {/* Hamburger */}
          <div
            style={{ color: `${linkColor}` }}
            onClick={handleNav}
            className='md:hidden p-2 rounded-xl hover:bg-purple-800/50 transition-all duration-300 hover:shadow-lg'
          >
            <AiOutlineMenu size={24} />
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70 z-50' : ''}>
        {/* Side Drawer */}
        <div
          className={
            nav
              ? 'fixed left-0 top-0 w-[85%] sm:w-[70%] md:w-[50%] h-screen bg-gradient-to-br from-purple-50 to-purple-100 p-8 ease-in duration-500 shadow-2xl'
              : 'fixed left-[-100%] top-0 p-8 ease-in duration-500'
          }
        >
          <div>
            <div className='flex w-full items-center justify-between'>
              <a href='/'>
                <div className='w-20 h-12 bg-gradient-to-r from-purple-600 to-purple-400 rounded-lg flex items-center justify-center'>
                  <span className='text-white font-bold text-lg'>LOGO</span>
                </div>
              </a>
              <div
                onClick={handleNav}
                className='rounded-full shadow-lg shadow-purple-400 p-3 cursor-pointer hover:scale-105 hover:shadow-xl transition-all duration-300 bg-purple-500 text-white'
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className='border-b border-purple-300 my-6'>
              <p className='w-[85%] md:w-[90%] py-4 text-purple-700 font-medium'>
                Let&#39;s build something legendary together
              </p>
            </div>
          </div>

          <div className='py-4 flex flex-col'>
            <ul className='uppercase'>
              <li onClick={() => setNav(false)} className='py-4 text-sm font-medium hover:text-purple-600 transition-colors duration-300 border-b border-purple-200 cursor-pointer text-purple-800'>
                <a href='/'>Home</a>
              </li>
              <li onClick={() => setNav(false)} className='py-4 text-sm font-medium hover:text-purple-600 transition-colors duration-300 border-b border-purple-200 cursor-pointer text-purple-800'>
                <a href='/#about'>About</a>
              </li>

              {/* Mobile Dropdown */}
              <li 
                onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)} 
                className='py-4 text-sm font-medium hover:text-purple-600 transition-colors duration-300 border-b border-purple-200 cursor-pointer flex items-center justify-between text-purple-800'
              >
                Services 
                <span className={`transform transition-transform duration-300 ${mobileDropdownOpen ? 'rotate-180' : ''}`}>
                  ▼
                </span>
              </li>
              {mobileDropdownOpen && (
                <ul className='pl-4 text-sm bg-purple-200/50 rounded-lg mx-2 mb-2'>
                  {services.map((item, idx) => (
                    <li key={idx} onClick={() => setNav(false)} className='py-3 px-4 hover:text-purple-600 transition-colors duration-300 border-b border-purple-300 last:border-b-0 cursor-pointer font-medium text-purple-800'>
                      <a href={item.link}>{item.name}</a>
                    </li>
                  ))}
                </ul>
              )}

              <li onClick={() => setNav(false)} className='py-4 text-sm font-medium hover:text-purple-600 transition-colors duration-300 border-b border-purple-200 cursor-pointer text-purple-800'>
                <a href='/#industries-we-serve'>Industries</a>
              </li>
              <li onClick={() => setNav(false)} className='py-4 text-sm font-medium hover:text-purple-600 transition-colors duration-300 border-b border-purple-200 cursor-pointer text-purple-800'>
                <a href='/#approach'>Approach</a>
              </li>
              <li onClick={() => setNav(false)} className='py-4 text-sm font-medium hover:text-purple-600 transition-colors duration-300 border-b border-purple-200 cursor-pointer text-purple-800'>
                <a href='/#contact'>Contact</a>
              </li>
            </ul>

            {/* Social Icons */}
            <div className='pt-16'>
              <p className='uppercase tracking-widest text-purple-600 font-semibold text-sm'>Let&#39;s Connect</p>
              <div className='flex items-center justify-between my-6 w-full sm:w-[80%]'>
                <a href='https://www.linkedin.com/in/sumanitian/' target='_blank' rel='noreferrer'>
                  <div className='rounded-full shadow-lg shadow-purple-400 p-4 cursor-pointer hover:scale-110 hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-purple-500 to-purple-600 text-white'>
                    <FaLinkedinIn size={18} />
                  </div>
                </a>
                <a href='https://github.com/sumanitian' target='_blank' rel='noreferrer'>
                  <div className='rounded-full shadow-lg shadow-purple-400 p-4 cursor-pointer hover:scale-110 hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-purple-600 to-purple-700 text-white'>
                    <FaGithub size={18} />
                  </div>
                </a>
                <a href='/#contact'>
                  <div onClick={() => setNav(false)} className='rounded-full shadow-lg shadow-purple-400 p-4 cursor-pointer hover:scale-110 hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-purple-400 to-purple-500 text-white'>
                    <AiOutlineMail size={18} />
                  </div>
                </a>
                <a href='/resume'>
                  <div onClick={() => setNav(false)} className='rounded-full shadow-lg shadow-purple-400 p-4 cursor-pointer hover:scale-110 hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-purple-700 to-purple-800 text-white'>
                    <BsFillPersonLinesFill size={18} />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;