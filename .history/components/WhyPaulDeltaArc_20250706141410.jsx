import React, { useState, useEffect } from 'react';

const WhyPaulDeltaArc = () => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) return null;

  const features = [
    { icon: "🏆", title: "MSME Registered" },
    { icon: "⚙️", title: "End-to-End EPC Expertise" },
    { icon: "👥", title: "In-house Technical & Design Team" },
    { icon: "🌍", title: "PAN India Project Delivery" },
    { icon: "⏰", title: "Timely Delivery, No Cost Overruns" },
    { icon: "🔧", title: "AMC & Emergency Maintenance Backing" },
    { icon: "📋", title: "Statutory Compliance: IS, NBC, NFPA, TAC, etc." }
  ];

  return (
    <div id='why-paul-delta-arc' className='w-full bg-gray-50 py-16'>
      <div className='max-w-[1240px] mx-auto px-4'>
        {/* Header */}
        <div className='text-center mb-12'>
          <h2 className='text-4xl font-bold text-[#2c3e50] mb-4'>Why 'Paul Delta Arc'?</h2>
          <div className='w-20 h-1 bg-gradient-to-r from-teal-400 to-teal-600 mx-auto mb-4'></div>
          <p className='text-gray-600 text-lg max-w-3xl mx-auto'>
            Delivering excellence in electrical solutions with unmatched expertise and reliability
          </p>
        </div>

        {/* Cards Grid - 3 per row */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {features.map((feature, index) => (
            <div 
              key={index} 
              className='group relative p-8 bg-white shadow-lg rounded-2xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100'
            >
              {/* Background gradient on hover */}
              <div className='absolute inset-0 bg-gradient-to-br from-teal-400 to-teal-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
              
              {/* Content */}
              <div className='relative z-10 text-center'>
                <div className='text-4xl mb-4 group-hover:scale-110 transition-transform duration-300'>
                  {feature.icon}
                </div>
                <h3 className='text-lg font-semibold text-[#2c3e50] group-hover:text-white transition-colors duration-300'>
                  {feature.title}
                </h3>
              </div>

              {/* Decorative elements */}
              <div className='absolute top-4 right-4 w-8 h-8 bg-teal-100 rounded-full opacity-50 group-hover:opacity-0 transition-opacity duration-300'></div>
              <div className='absolute bottom-4 left-4 w-6 h-6 bg-teal-50 rounded-full opacity-30 group-hover:opacity-0 transition-opacity duration-300'></div>
            </div>
          ))}
        </div>

        {/* Additional Info Section */}
        <div className='mt-16 text-center'>
          <div className='bg-white rounded-2xl p-8 shadow-lg border border-gray-100'>
            <h3 className='text-2xl font-bold text-[#2c3e50] mb-4'>Your Trusted Partner in Electrical Solutions</h3>
            <p className='text-gray-600 text-lg max-w-3xl mx-auto'>
              From initial consultation to project completion and ongoing maintenance, Paul Delta Arc ensures 
              seamless execution with industry-leading standards and customer satisfaction at the forefront.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyPaulDeltaArc;