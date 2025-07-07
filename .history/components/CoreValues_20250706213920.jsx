import React from 'react';

const CoreValues = () => {
  const coreValues = [
    {
      icon: "🏆",
      value: "Excellence",
      description: "Every installation, every circuit, every pipe—done right the first time."
    },
    {
      icon: "🤝",
      value: "Integrity",
      description: "Full transparency in designs, billing, and material sourcing."
    },
    {
      icon: "✅",
      value: "Accountability",
      description: "We own your outcome—from Day 1 through AMC completion."
    },
    {
      icon: "💡",
      value: "Innovation",
      description: "Smart buildings, efficient systems, energy-saving integrations."
    },
    {
      icon: "❤️",
      value: "Relationships",
      description: "Trusted partnerships built on consistency, delivery, and honesty."
    }
  ];

  return (
    <div id='core-values' className='w-full bg-gray-50 py-4 min-h-screen flex items-center' style={{paddingTop: '80px'}}>
      <div className='max-w-[1400px] mx-auto px-4 w-full'>
        {/* Header Section */}
        <div className='text-center mb-4'>
          <h2 className='text-3xl font-bold text-[#2c3e50] mb-2'>
            💎 Core Values
          </h2>
          <div className='w-20 h-1 bg-gradient-to-r from-teal-400 to-cyan-600 mx-auto mb-3'></div>
          <p className='text-gray-600 text-sm max-w-5xl mx-auto'>
            Our foundational principles that guide every project, partnership, and professional relationship we build.
          </p>
        </div>

        {/* Core Values Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
          {coreValues.map((item, index) => (
            <div
              key={index}
              className='group relative bg-white p-4 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100'
            >
              {/* Background gradient on hover */}
              <div className='absolute inset-0 bg-gradient-to-br from-teal-400 to-cyan-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>

              {/* Content */}
              <div className='relative z-10 text-center'>
                <div className='text-4xl mb-3 group-hover:scale-110 transition-transform duration-300'>
                  {item.icon}
                </div>
                <h3 className='text-lg font-bold text-[#2c3e50] group-hover:text-white transition-colors duration-300 mb-2'>
                  {item.value}
                </h3>
                <p className='text-xs text-gray-600 group-hover:text-gray-100 transition-colors duration-300 leading-relaxed'>
                  {item.description}
                </p>
              </div>

              {/* Decorative elements */}
              <div className='absolute top-3 right-3 w-4 h-4 bg-teal-100 rounded-full opacity-50 group-hover:opacity-0 transition-opacity duration-300'></div>
              <div className='absolute bottom-3 left-3 w-3 h-3 bg-cyan-50 rounded-full opacity-30 group-hover:opacity-0 transition-opacity duration-300'></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoreValues;