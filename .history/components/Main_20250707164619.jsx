import Link from 'next/link';
import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';

import { FaGithub, FaLinkedinIn, AiFillMediumCircle, FaMedium, FaYoutube } from 'react-icons/fa';

import PageBackground from '../components/PageBackground'

const Main = () => {
  return (
    <PageBackground>
      <div id='home' className='w-full h-screen text-center'>
      <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
        <div>
          {/* <p className='uppercase text-sm tracking-widest text-gray-600'>
            LET&#39;S BUILD SOMETHING TOGETHER
          </p> */}
          <h1 className='py-4 text-[#A0D2EB]'>
            Paul Delta Arc
          </h1>
          
          <p className='py-4 text-gray-600 sm:max-w-[80%] m-auto'>
            Powering Precision, Delivering Reliability
          </p>
          <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
            <a
              href='https://www.linkedin.com/in/sumanitian/'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaLinkedinIn />
              </div>
            </a>
            <a
              href='https://github.com/sumanitian'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaGithub />
              </div>
            </a>
            <a href="https://medium.com/@sumanitian"
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                {/* <i className="fa-brands fa-medium"></i> */}
                <FaMedium />
              </div>
            </a>
            <a href="https://www.youtube.com/@sumanitian"
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                {/* <i className="fa-brands fa-medium"></i> */}
                <FaYoutube />
              </div>
            </a>
            {/* <Link href='/resume'>
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <BsFillPersonLinesFill />
              </div>
            </Link> */}
          </div>
        </div>
      </div>
    </div>
    </PageBackground>
  );
};

export default Main;
