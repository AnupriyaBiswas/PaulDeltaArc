import React from 'react';

const VisionMission = () => {
  return (
    <div id='vision-mission' className='w-full bg-gradient-to-br from-teal-50 to-cyan-50 py-8 min-h-screen flex items-center' style={{paddingTop: '80px'}}>
      <div className='max-w-[1400px] mx-auto px-6 w-full'>
        {/* Header Section */}
        <div className='text-center mb-8'>
          <h2 className='text-4xl font-bold text-[#2c3e50] mb-4'>
            🎯 Vision & Mission
          </h2>
          <div className='w-24 h-1 bg-gradient-to-r from-teal-400 to-cyan-600 mx-auto mb-4'></div>
          <p className='text-gray-600 text-base max-w-5xl mx-auto'>
            Our guiding principles that shape our commitment to excellence and innovation in MEP contracting.
          </p>
        </div>

        {/* Vision & Mission Layout */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch'>
          {/* Vision Section */}
          <div className='order-1 lg:order-1'>
            <div className='group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 overflow-hidden h-full'>
              {/* Background gradient on hover */}
              <div className='absolute inset-0 bg-gradient-to-br from-teal-400 to-cyan-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
              
              {/* Content */}
              <div className='relative z-10 p-8 h-full flex flex-col justify-between min-h-[400px]'>
                <div className='text-center mb-6'>
                  <div className='text-5xl mb-4 group-hover:scale-110 transition-transform duration-300'>
                    🔭
                  </div>
                  <h3 className='text-2xl font-bold text-[#2c3e50] group-hover:text-white transition-colors duration-300 mb-6'>
                    Our Vision
                  </h3>
                </div>
                <div className='flex-1 flex items-center justify-center'>
                  <p className='text-gray-600 group-hover:text-gray-100 transition-colors duration-300 leading-relaxed text-center text-lg'>
                    To become the most trusted MEP contracting partner in India, 
                    delivering high-performance engineering systems that enhance 
                    safety, sustainability, and service life across built environments.
                  </p>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className='absolute top-4 right-4 w-5 h-5 bg-teal-100 rounded-full opacity-50 group-hover:opacity-0 transition-opacity duration-300'></div>
              <div className='absolute bottom-4 left-4 w-3 h-3 bg-cyan-50 rounded-full opacity-30 group-hover:opacity-0 transition-opacity duration-300'></div>
            </div>
          </div>

          {/* Mission Section */}
          <div className='order-2 lg:order-2'>
            <div className='group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 overflow-hidden h-full'>
              {/* Background gradient on hover */}
              <div className='absolute inset-0 bg-gradient-to-br from-teal-400 to-cyan-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
              
              {/* Content */}
              <div className='relative z-10 p-8 h-full flex flex-col min-h-[400px]'>
                <div className='text-center mb-6'>
                  <div className='text-5xl mb-4 group-hover:scale-110 transition-transform duration-300'>
                    🎯
                  </div>
                  <h3 className='text-2xl font-bold text-[#2c3e50] group-hover:text-white transition-colors duration-300 mb-6'>
                    Our Mission
                  </h3>
                </div>
                <div className='flex-1 space-y-4 flex flex-col justify-center'>
                  <div className='flex items-start group-hover:text-gray-100 transition-colors duration-300'>
                    <div className='w-3 h-3 bg-teal-500 rounded-full mt-2 mr-4 flex-shrink-0 group-hover:bg-white transition-colors duration-300'></div>
                    <p className='text-gray-600 group-hover:text-gray-100 transition-colors duration-300 leading-relaxed'>
                      Deliver world-class MEP contracting solutions built on innovation, speed, and reliability
                    </p>
                  </div>
                  <div className='flex items-start group-hover:text-gray-100 transition-colors duration-300'>
                    <div className='w-3 h-3 bg-teal-500 rounded-full mt-2 mr-4 flex-shrink-0 group-hover:bg-white transition-colors duration-300'></div>
                    <p className='text-gray-600 group-hover:text-gray-100 transition-colors duration-300 leading-relaxed'>
                      Ensure full compliance with national and international engineering codes (IS/NBC/NFPA/IGBC/LEED)
                    </p>
                  </div>
                  <div className='flex items-start group-hover:text-gray-100 transition-colors duration-300'>
                    <div className='w-3 h-3 bg-teal-500 rounded-full mt-2 mr-4 flex-shrink-0 group-hover:bg-white transition-colors duration-300'></div>
                    <p className='text-gray-600 group-hover:text-gray-100 transition-colors duration-300 leading-relaxed'>
                      Embrace smart systems and integrated automation
                    </p>
                  </div>
                  <div className='flex items-start group-hover:text-gray-100 transition-colors duration-300'>
                    <div className='w-3 h-3 bg-teal-500 rounded-full mt-2 mr-4 flex-shrink-0 group-hover:bg-white transition-colors duration-300'></div>
                    <p className='text-gray-600 group-hover:text-gray-100 transition-colors duration-300 leading-relaxed'>
                      Foster long-term partnerships through transparent pricing, exceptional project management, and reliable AMC support
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className='absolute top-4 right-4 w-5 h-5 bg-teal-100 rounded-full opacity-50 group-hover:opacity-0 transition-opacity duration-300'></div>
              <div className='absolute bottom-4 left-4 w-3 h-3 bg-cyan-50 rounded-full opacity-30 group-hover:opacity-0 transition-opacity duration-300'></div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default VisionMission;