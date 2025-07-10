import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const Services = () => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) return null;

  const features = [
    { icon: "🔥", title: "Fire Protection & Detection Systems", href: "/FireProtectionSystems" },
    { icon: "⚡", title: "Electrical Systems & Ventilation", href: "/ElectricalSystemsVentilation" },
    { icon: "🛁", title: "Plumbing & Public Health Engineering", href: "/PlumbingPublicHealth" },
    { icon: "💼", title: "Building Automation & Smart Controls", href: "/BuildingAutomation" },
    { icon: "🔐", title: "Surveillance, Intercom & Access Control", href: "/SurveillanceAccessControl" },
    { icon: "📄", title: "Annual Maintenance Contracts", href: "/AnnualMaintenanceContracts" }
  ];

  return (
    <div id='services' className='w-full bg-gradient-to-br from-teal-50 to-cyan-50 py-16 min-h-screen flex items-center'>
      <div className='max-w-[1400px] mx-auto px-6 w-full'>
        
        {/* Header */}
        <div className='text-center mb-14'>
          <h2 className='text-4xl font-bold text-[#2c3e50] mb-4 tracking-wide'>⚙️ Our Services</h2>
          <div className='w-24 h-1 bg-gradient-to-r from-teal-400 to-cyan-600 rounded-full mx-auto'></div>
          <p className='mt-4 text-gray-600 max-w-3xl mx-auto text-sm sm:text-base'>
            Explore our specialized MEP offerings designed for safety, efficiency, and smart infrastructure integration.
          </p>
        </div>

        {/* Cards Grid */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
          {features.map((feature, index) => (
            <Link key={index} href={feature.href}>
              <a className='group relative p-8 bg-white shadow-lg rounded-2xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 block'>
                
                {/* Background hover */}
                <div className='absolute inset-0 bg-gradient-to-br from-teal-400 to-teal-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>

                {/* Card Content */}
                <div className='relative z-10 flex flex-col items-center text-center'>
                  <div className='text-4xl mb-4 group-hover:scale-110 transition-transform duration-300'>
                    {feature.icon}
                  </div>
                  <h3 className='text-lg font-semibold text-[#2c3e50] group-hover:text-white transition-colors duration-300 leading-tight'>
                    {feature.title}
                  </h3>
                </div>

                {/* Decorative Dots */}
                <div className='absolute top-4 right-4 w-6 h-6 bg-teal-100 rounded-full opacity-50 group-hover:opacity-0 transition-opacity duration-300'></div>
                <div className='absolute bottom-4 left-4 w-4 h-4 bg-cyan-50 rounded-full opacity-30 group-hover:opacity-0 transition-opacity duration-300'></div>
              </a>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
