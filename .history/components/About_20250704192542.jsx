import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
// import AboutImg from '../public/assets/about.jpg';
import AboutImg from '../public/assets/mypic.jpg';

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-[#5651e5]'>
            About Us
          </p>
          <p className='py-2 text-gray-600'>
          Paul Delta Arc is a Kolkata-headquartered, turnkey MEP (Mechanical, Electrical, Plumbing) solutions company providing highly specialized engineering services across India. We work with developers, builders, government bodies, and infrastructure operators to execute large-scale and mid-sized projects across public, private, residential, commercial, and industrial sectors.<br></br><br></br>

          Our service delivery model spans the complete EPC (Engineering, Procurement, and Construction) lifecycle—ensuring that from concept to commissioning, every aspect is executed with engineering rigor, code compliance, and long-term reliability.

          We are driven by
          <li>
            <ul>Technical excellence in design and execution</ul>
          </li>
          </p>
          <Link href='/#projects'>
            <p className='py-2 text-gray-600 underline cursor-pointer'>
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image src={AboutImg} className='rounded-xl' alt='/' />
        </div>
      </div>
    </div>
  );
};

export default About;
