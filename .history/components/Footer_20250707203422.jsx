import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn, FaMapMarkerAlt } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { ChevronUpIcon } from '@heroicons/react/20/solid';

import FooterLogo from '../public/assets/mainLogo.png';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="w-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-900/20 to-cyan-900/20"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(14,165,233,0.1),transparent_70%)]"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          
          {/* Logo */}
          <Link href='/'>
            <a className="inline-block mb-8 hover:scale-105 transition-transform duration-300">
              <Image
                src={FooterLogo}
                alt="Paul Delta Arc Logo"
                width="120"
                height="95"
                className="cursor-pointer"
              />
            </a>
          </Link>

          {/* Tagline */}
          <p className="text-xl font-medium text-gray-300 mb-12">
            Powering Precision, Delivering Reliability
          </p>

          {/* Copyright and Credits */}
          <div className="space-y-4 mb-8">
            <p className="text-gray-400 font-semibold text-sm">
              Copyright © 2025 Paul Delta Arc
            </p>
            <p className="text-gray-400 text-sm">
              Website Designed, Hosted, and Maintained by: 
              <span className="font-medium text-teal-400 hover:text-teal-300 transition-colors duration-300">
                {' '}Anupriya Biswas & Suman Prasad
              </span>
            </p>
          </div>

          {/* Decorative line */}
          <div className="w-24 h-0.5 bg-gradient-to-r from-teal-400 to-cyan-400 rounded-full mx-auto mb-8"></div>

          {/* Social Icons */}
          <div className="flex justify-center items-center gap-6">
            <a href='https://www.linkedin.com/in/sumanitian/' target='_blank' rel='noreferrer'>
              <div className="rounded-full shadow-lg shadow-gray-900/50 p-4 cursor-pointer hover:scale-110 hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-blue-500 to-blue-600 text-white">
                <FaLinkedinIn size={20} />
              </div>
            </a>
            <a href='https://github.com/sumanitian' target='_blank' rel='noreferrer'>
              <div className="rounded-full shadow-lg shadow-gray-900/50 p-4 cursor-pointer hover:scale-110 hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-gray-700 to-gray-800 text-white">
                <FaGithub size={20} />
              </div>
            </a>
            <Link href='/#contact'>
              <div className="rounded-full shadow-lg shadow-gray-900/50 p-4 cursor-pointer hover:scale-110 hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-teal-500 to-teal-600 text-white">
                <AiOutlineMail size={20} />
              </div>
            </Link>
            <Link href='/resume'>
              <div className="rounded-full shadow-lg shadow-gray-900/50 p-4 cursor-pointer hover:scale-110 hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-purple-500 to-purple-600 text-white">
                <BsFillPersonLinesFill size={20} />
              </div>
            </Link>
          </div>

          {/* Scroll to Top Button */}
          <button
            onClick={scrollToTop}
            className="mt-8 mx-auto flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-teal-500 to-teal-600 text-white shadow-lg shadow-gray-900/50 hover:scale-110 hover:shadow-xl transition-all duration-300 group"
          >
            <ChevronUpIcon className="w-6 h-6 group-hover:animate-bounce" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;