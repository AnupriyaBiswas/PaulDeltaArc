import React, { useState, useEffect } from 'react';

const Services = () => {
  const [hasMounted, setHasMounted] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);

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
    <div id='services' className='w-full bg-gradient-to-br from-teal-50 to-cyan-50 py-20 min-h-screen flex items-center relative overflow-hidden'>
      {/* Floating Background Elements */}
      <div className='absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-teal-200/20 to-cyan-200/20 rounded-full blur-xl'></div>
      <div className='absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-br from-cyan-200/20 to-teal-200/20 rounded-full blur-xl'></div>
      <div className='absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-br from-teal-300/10 to-cyan-300/10 rounded-full blur-lg'></div>
      
      <div className='max-w-7xl mx-auto px-4 relative z-10'>
        {/* Header */}
        <div className='text-center mb-16'>
          <h2 className='text-4xl font-bold text-[#2c3e50] mb-4 tracking-wide'>⚙️ Our Services</h2>
          <div className='w-24 h-1 bg-gradient-to-r from-teal-400 to-cyan-600 rounded-full mx-auto'></div>
          <p className='mt-4 text-gray-600 max-w-3xl mx-auto text-base'>
            Our specialized services blend technology and precision for reliable, compliant, and scalable MEP solutions.
          </p>
        </div>
        
        {/* Services Grid */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
          {features.map((feature, index) => (
            <div 
              key={index}
              className='group relative cursor-pointer'
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Main Card */}
              <div className='relative p-8 bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-white/50'>
                
                {/* Animated Background Gradient */}
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br from-teal-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                
                {/* Floating Icon Container */}
                <div className='relative z-10 flex items-center justify-center mb-6'>
                  <div className='relative'>
                    <div className='w-20 h-20 rounded-2xl bg-gradient-to-br from-teal-100 to-cyan-100 flex items-center justify-center text-3xl shadow-lg group-hover:shadow-xl transition-all duration-500 group-hover:scale-110'>
                      {feature.icon}
                    </div>
                    {/* Pulsing Ring */}
                    <div className={`absolute inset-0 rounded-2xl border-2 border-teal-300 opacity-0 group-hover:opacity-100 transition-all duration-500 ${hoveredCard === index ? 'animate-pulse' : ''}`}></div>
                  </div>
                </div>
                
                {/* Title */}
                <h3 className='relative z-10 text-lg font-semibold text-center text-[#2c3e50] group-hover:text-teal-600 transition-colors duration-300 leading-snug mb-4'>
                  {feature.title}
                </h3>
                
                {/* Explore Button */}
                <div className='relative z-10 flex justify-center'>
                  <div className='px-6 py-2 bg-gradient-to-r from-teal-500 to-cyan-500 text-white text-sm rounded-full opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 shadow-md hover:shadow-lg'>
                    Explore Service
                  </div>
                </div>
                
                {/* Decorative Elements */}
                <div className='absolute top-4 right-4 w-3 h-3 bg-teal-400 rounded-full opacity-20 group-hover:opacity-60 transition-opacity duration-300'></div>
                <div className='absolute bottom-4 left-4 w-2 h-2 bg-cyan-400 rounded-full opacity-20 group-hover:opacity-60 transition-opacity duration-300'></div>
                
                {/* Card Number */}
                <div className='absolute top-4 left-4 w-8 h-8 bg-gradient-to-br from-teal-500/10 to-cyan-500/10 rounded-full flex items-center justify-center text-sm font-bold text-teal-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                  {index + 1}
                </div>
                
                {/* Shine Effect */}
                <div className='absolute inset-0 rounded-3xl bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform -skew-x-12 translate-x-full group-hover:translate-x-[-100%] group-hover:duration-700'></div>
              </div>
              
              {/* Shadow Card */}
              <div className='absolute inset-0 bg-gradient-to-br from-teal-200/20 to-cyan-200/20 rounded-3xl transform translate-y-2 translate-x-2 -z-10 group-hover:translate-y-1 group-hover:translate-x-1 transition-transform duration-300'></div>
            </div>
          ))}
        </div>
        
        {/* Bottom CTA */}
        <div className='text-center mt-16'>
          <div className='inline-flex items-center gap-2 px-8 py-4 bg-white/60 backdrop-blur-sm rounded-full shadow-lg border border-white/30 hover:bg-white/80 transition-all duration-300 cursor-pointer group'>
            <span className='text-[#2c3e50] font-semibold'>Ready to get started?</span>
            <div className='w-8 h-8 bg-gradient-to-r from-teal-400 to-cyan-400 rounded-full flex items-center justify-center text-white text-sm transform group-hover:scale-110 transition-transform duration-300'>
              →
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;