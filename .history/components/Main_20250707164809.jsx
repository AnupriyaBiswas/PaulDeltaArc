import Link from 'next/link';
import React from 'react';
import { FaGithub, FaLinkedinIn, FaMedium, FaYoutube } from 'react-icons/fa';
import PageBackground from '../components/PageBackground';

const Main = () => {
  return (
    <PageBackground>
      <div id='home' className='w-full text-center'>
        <div className='w-full h-full flex justify-center items-center py-10'>
          <div>
            {/* Main Heading */}
            <h1 className='text-3xl md:text-4xl font-bold text-[#2c3e50] mb-4'>
              Paul Delta Arc
            </h1>

            {/* Tagline */}
            <p className='text-gray-600 text-sm sm:max-w-[80%] mx-auto mb-6'>
              Powering Precision, Delivering Reliability
            </p>

            {/* Social Icons */}
            <div className='flex items-center justify-center flex-wrap gap-4 py-4'>
              <a
                href='https://www.linkedin.com/in/sumanitian/'
                target='_blank'
                rel='noreferrer'
              >
                <div className='rounded-full shadow-md shadow-cyan-200 p-4 bg-white hover:scale-110 hover:bg-gradient-to-br from-cyan-100 to-teal-100 transition-all duration-300'>
                  <FaLinkedinIn className='text-teal-700' />
                </div>
              </a>
              <a
                href='https://github.com/sumanitian'
                target='_blank'
                rel='noreferrer'
              >
                <div className='rounded-full shadow-md shadow-cyan-200 p-4 bg-white hover:scale-110 hover:bg-gradient-to-br from-cyan-100 to-teal-100 transition-all duration-300'>
                  <FaGithub className='text-teal-700' />
                </div>
              </a>
              <a
                href='https://medium.com/@sumanitian'
                target='_blank'
                rel='noreferrer'
              >
                <div className='rounded-full shadow-md shadow-cyan-200 p-4 bg-white hover:scale-110 hover:bg-gradient-to-br from-cyan-100 to-teal-100 transition-all duration-300'>
                  <FaMedium className='text-teal-700' />
                </div>
              </a>
              <a
                href='https://www.youtube.com/@sumanitian'
                target='_blank'
                rel='noreferrer'
              >
                <div className='rounded-full shadow-md shadow-cyan-200 p-4 bg-white hover:scale-110 hover:bg-gradient-to-br from-cyan-100 to-teal-100 transition-all duration-300'>
                  <FaYoutube className='text-teal-700' />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </PageBackground>
  );
};

export default Main;
