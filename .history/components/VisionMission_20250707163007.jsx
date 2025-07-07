import React from 'react';

const VisionMission = () => {
  return (
    <div id='vision-mission' className='w-full bg-gray-50 py-4 min-h-screen flex items-center' style={{ paddingTop: '80px' }}>
      <div className='max-w-[1400px] mx-auto px-4 w-full'>
        
        {/* Header Section */}
        <div className='text-center mb-4'>
          <h2 className='text-3xl font-bold text-[#2c3e50] mb-2'>🎯 Vision & Mission</h2>
          <div className='w-20 h-1 bg-gradient-to-r from-teal-400 to-cyan-600 mx-auto mb-3'></div>
          <p className='text-gray-600 text-sm max-w-4xl mx-auto'>
            Our guiding principles that shape our commitment to excellence and innovation in MEP contracting.
          </p>
        </div>

        {/* Vision & Mission Cards */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch'>

          {/* Vision Card */}
          <div>
            <div className='group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 overflow-hidden h-[440px]'>
              {/* Gradient Overlay */}
              <div className='absolute inset-0 bg-gradient-to-br from-teal-400 to-cyan-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>

              {/* Content */}
              <div className='relative z-10 p-6 h-full flex flex-col justify-center'>
                <div className='text-center mb-4'>
                  <div className='text-4xl mb-2 group-hover:scale-110 transition-transform duration-300'>
                    🔭
                  </div>
                  <h3 className='text-sm font-bold text-[#2c3e50] group-hover:text-white transition-colors duration-300 mb-2'>
                    Our Vision
                  </h3>
                </div>
                <p className='text-xs text-gray-600 group-hover:text-gray-100 transition-colors duration-300 text-center leading-relaxed'>
                  To become the most trusted MEP contracting partner in India, delivering high-performance engineering systems that enhance safety, sustainability, and service life across built environments.
                </p>
              </div>

              {/* Decorations */}
              <div className='absolute top-4 right-4 w-5 h-5 bg-teal-100 rounded-full opacity-50 group-hover:opacity-0 transition-opacity duration-300'></div>
              <div className='absolute bottom-4 left-4 w-3 h-3 bg-cyan-50 rounded-full opacity-30 group-hover:opacity-0 transition-opacity duration-300'></div>
            </div>
          </div>

          {/* Mission Card */}
          <div>
            <div className='group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 overflow-hidden h-[440px]'>
              {/* Gradient Overlay */}
              <div className='absolute inset-0 bg-gradient-to-br from-teal-400 to-cyan-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>

              {/* Content */}
              <div className='relative z-10 p-6 h-full flex flex-col'>
                <div className='text-center mb-4'>
                  <div className='text-4xl mb-2 group-hover:scale-110 transition-transform duration-300'>
                    🎯
                  </div>
                  <h3 className='text-sm font-bold text-[#2c3e50] group-hover:text-white transition-colors duration-300 mb-2'>
                    Our Mission
                  </h3>
                </div>

                <div className='flex-1 space-y-3 flex flex-col justify-center'>
                  {[
                    "Deliver world-class MEP contracting solutions built on innovation, speed, and reliability",
                    "Ensure full compliance with national and international engineering codes (IS/NBC/NFPA/IGBC/LEED)",
                    "Embrace smart systems and integrated automation",
                    "Foster long-term partnerships through transparent pricing, exceptional project management, and reliable AMC support"
                  ].map((point, i) => (
                    <div key={i} className='flex items-start'>
                      <div className='w-3 h-3 bg-teal-500 rounded-full mt-1 mr-3 flex-shrink-0 group-hover:bg-white transition-colors duration-300'></div>
                      <p className='text-xs text-gray-600 group-hover:text-gray-100 transition-colors duration-300 leading-relaxed'>
                        {point}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Decorations */}
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
