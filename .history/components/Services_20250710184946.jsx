import React, { useState, useEffect } from 'react';
import Link from 'next/link'

const Services = () => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) return null;

  // Include the route IDs
  const features = [
    { icon: "🔥", title: "Fire Protection & Detection Systems", href: "/fire-protection-systems" },
    { icon: "⚡", title: "Electrical Systems & Ventilation", href: "/electrical-systems-ventilation" },
    { icon: "🛁", title: "Plumbing & Public Health Engineering", href: "/plumbing-public-health" },
    { icon: "💼", title: "Building Automation & Smart Controls", href: "/building-automation" },
    { icon: "🔐", title: "Surveillance, Intercom & Access Control", href: "/surveillance-intercom-access-control" },
    { icon: "📄", title: "Annual Maintenance Contracts", href: "/annual-maintenance-contracts" }
  ];

  return (
    <div id='services' className='w-full bg-gradient-to-br from-teal-50 to-cyan-50 py-8 min-h-screen flex items-center'>
      <div className='max-w-[1400px] mx-auto px-4 w-full'>
        {/* Header */}
        <div className='text-center mb-8'>
          <h2 className='text-3xl font-bold text-[#2c3e50] mb-2'>⚙️ Our Services</h2>
          <div className='w-20 h-1 bg-gradient-to-r from-teal-400 to-teal-600 mx-auto'></div>
        </div>

        {/* Cards Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8'>
          {features.map((feature, index) => (
            <a 
              href={feature.href} 
              key={index} 
              className='group relative p-6 bg-white shadow-lg rounded-2xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 min-w-[320px] cursor-pointer block'
            >
              {/* Background gradient on hover */}
              <div className='absolute inset-0 bg-gradient-to-br from-teal-400 to-teal-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
              
              {/* Content */}
              <div className='relative z-10 text-center'>
                <div className='text-3xl mb-3 group-hover:scale-110 transition-transform duration-300'>
                  {feature.icon}
                </div>
                <h3 className='text-base font-semibold text-[#2c3e50] group-hover:text-white transition-colors duration-300 whitespace-nowrap'>
                  {feature.title}
                </h3>
              </div>

              {/* Decorative elements */}
              <div className='absolute top-4 right-4 w-6 h-6 bg-teal-100 rounded-full opacity-50 group-hover:opacity-0 transition-opacity duration-300'></div>
              <div className='absolute bottom-4 left-4 w-4 h-4 bg-teal-50 rounded-full opacity-30 group-hover:opacity-0 transition-opacity duration-300'></div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
