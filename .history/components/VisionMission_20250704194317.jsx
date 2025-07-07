import React from 'react';
import Image from 'next/image';
// import Link from 'next/link';
// import AboutImg from '../public/assets/about.jpg';
import AboutImg from '../public/assets/aboutus.jpg';

const VisionMission = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-[#5651e5]'>
            <b>Vision & Mission</b>
          </p>
          <p className='py-2 text-gray-600'>
          Paul Delta Arc is a Kolkata-headquartered, turnkey MEP (Mechanical, Electrical, Plumbing) solutions company providing highly specialized engineering services across India. We work with developers, builders, government bodies, and infrastructure operators to execute large-scale and mid-sized projects across public, private, residential, commercial, and industrial sectors.<br></br><br></br>

          Our service delivery model spans the complete EPC (Engineering, Procurement, and Construction) lifecycle—ensuring that from concept to commissioning, every aspect is executed with engineering rigor, code compliance, and long-term reliability.<br></br><br></br>

          <h3>We are driven by</h3>
          <li>Technical excellence in design and execution</li>
          <li>Strong coordination between civil and architectural teams</li>
          <li>Deep compliance with safety, sustainability, and efficiency norms</li>
          <li>Robust after-sales and AMC systems to maintain uptime</li>
          </p>
          
        </div>
        
      </div>
    </div>
  );
};

export default VisionMission;
