import React from 'react';

const VisionMission = () => {
  return (
    <div id='vision-mission' className='w-full bg-gray-50 py-16'>
      <div className='max-w-[1240px] mx-auto px-4'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5] text-center mb-12'>
          <b>Vision & Mission</b>
        </p>
        
        <div className='grid grid-cols-1 gap-8'>
          {/* Vision Card */}
          <div className='relative bg-gradient-to-br from-teal-400 to-teal-600 rounded-lg shadow-xl overflow-hidden'>
            {/* Background pattern overlay */}
            <div className='absolute inset-0 opacity-10'>
              <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/20 to-transparent'></div>
              <div className='absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full'></div>
              <div className='absolute -bottom-10 -left-10 w-40 h-40 bg-white/10 rounded-full'></div>
            </div>
            
            <div className='relative p-8'>
              <h2 className='text-3xl font-bold text-white mb-6'>Vision</h2>
              <p className='text-white/95 text-lg leading-relaxed'>
                To become the most trusted MEP contracting partner in India, 
                delivering high-performance engineering systems that enhance 
                safety, sustainability, and service life across built environments.
              </p>
            </div>
          </div>

          {/* Mission Card */}
          <div className='relative bg-gradient-to-br from-teal-400 to-teal-600 rounded-lg shadow-xl overflow-hidden'>
            {/* Background pattern overlay */}
            <div className='absolute inset-0 opacity-10'>
              <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/20 to-transparent'></div>
              <div className='absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full'></div>
              <div className='absolute -bottom-10 -left-10 w-40 h-40 bg-white/10 rounded-full'></div>
            </div>
            
            <div className='relative p-8'>
              <h2 className='text-3xl font-bold text-white mb-6'>Mission</h2>
              <ul className='text-white/95 text-lg space-y-4'>
                <li className='flex items-start'>
                  <span className='text-white mr-3 mt-1'>•</span>
                  <span>To deliver world-class MEP contracting solutions built on innovation, speed, and reliability</span>
                </li>
                <li className='flex items-start'>
                  <span className='text-white mr-3 mt-1'>•</span>
                  <span>To ensure full compliance with national and international engineering codes (IS/NBC/NFPA/IGBC/LEED)</span>
                </li>
                <li className='flex items-start'>
                  <span className='text-white mr-3 mt-1'>•</span>
                  <span>To embrace smart systems and integrated automation</span>
                </li>
                <li className='flex items-start'>
                  <span className='text-white mr-3 mt-1'>•</span>
                  <span>To foster long-term partnerships with clients through transparent pricing, exceptional project management, and reliable AMC support</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisionMission;