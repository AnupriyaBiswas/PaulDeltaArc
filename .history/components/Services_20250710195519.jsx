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
    <div id='services' className='w-full bg-gradient-to-br from-teal-50 to-cyan-50 py-20 min-h-screen flex items-center'>
      <div className='max-w-7xl mx-auto px-4'>
        
        {/* Header */}
        <div className='text-center mb-16'>
          <h2 className='text-4xl font-bold text-[#2c3e50] mb-4 tracking-wide'>⚙️ Our Services</h2>
          <div className='w-24 h-1 bg-gradient-to-r from-teal-400 to-cyan-600 rounded-full mx-auto'></div>
          <p className='mt-4 text-gray-600 max-w-3xl mx-auto text-base'>
            Our specialized services blend technology and precision for reliable, compliant, and scalable MEP solutions.
          </p>
        </div>

        {/* Grid */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
          {features.map((feature, index) => (
            <Link key={index} href={feature.href}>
              <a className='group relative p-8 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-t-4 border-transparent hover:border-teal-500'>
                {/* Icon */}
                <div className='flex items-center justify-center mb-6'>
                  <div className='w-16 h-16 rounded-full bg-gradient-to-br from-teal-100 to-cyan-100 flex items-center justify-center text-3xl'>
                    {feature.icon}
                  </div>
                </div>

                {/* Title */}
                <h3 className='text-lg font-semibold text-center text-[#2c3e50] group-hover:text-teal-600 transition-colors duration-300 leading-snug'>
                  {feature.title}
                </h3>

                {/* Glow Dots */}
                <div className='absolute top-4 right-4 w-5 h-5 bg-teal-100 rounded-full opacity-40 group-hover:opacity-0 transition-opacity duration-300'></div>
                <div className='absolute bottom-4 left-4 w-4 h-4 bg-cyan-100 rounded-full opacity-30 group-hover:opacity-0 transition-opacity duration-300'></div>
              </a>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
