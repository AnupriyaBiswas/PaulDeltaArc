import React, { useState, useEffect } from 'react';

const SurveillanceAccessControl = () => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) return null;

  const scopeServices = [
    { icon: "📹", title: "IP/Analog CCTV Systems", description: "High-definition surveillance with network connectivity and analog support" },
    { icon: "💾", title: "NVR/DVR Storage & GUI Access", description: "Centralized recording systems with user-friendly interface access" },
    { icon: "🔐", title: "Biometric & RFID Access Control", description: "Advanced identification systems for secure facility access" },
    { icon: "🚧", title: "Boom Barriers, Bollards, Turnstiles", description: "Physical security barriers and pedestrian access control" },
    { icon: "📞", title: "Video Door Phones & Intercom", description: "Two-way communication systems with video capabilities" },
    { icon: "🔍", title: "Baggage Scanners, Metal Detectors", description: "Security screening equipment for threat detection" },
    { icon: "🌐", title: "Data Networking & Server Rack Integration", description: "Complete network infrastructure and server management" }
  ];

  return (
    <div className='w-full bg-gradient-to-br from-teal-50 to-cyan-50 py-12 min-h-screen'>
      <div className='max-w-[1400px] mx-auto px-6'>
        {/* Header Section */}
        <div className='text-center mb-8'>
          <h1 className='text-4xl md:text-5xl font-bold text-[#2c3e50] mb-4'>
            🔒 Surveillance, Intercom & Access Control
          </h1>
          <div className='w-32 h-1 bg-gradient-to-r from-teal-400 to-cyan-600 mx-auto mb-6'></div>
          <p className='text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed'>
            We offer modern surveillance solutions for safety, control, and property protection.
          </p>
        </div>

        {/* Hero Visual Section */}
        <div className='mb-12'>
          <div className='bg-white rounded-3xl shadow-2xl p-8 relative overflow-hidden'>
            {/* Background Pattern */}
            <div className='absolute inset-0 opacity-5'>
              <div className='grid grid-cols-12 grid-rows-8 h-full'>
                {[...Array(96)].map((_, i) => (
                  <div key={i} className='border border-teal-200'></div>
                ))}
              </div>
            </div>
            
            <div className='relative z-10'>
              {/* Services Grid */}
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {scopeServices.map((service, index) => (
                  <div key={index} className='group relative'>
                    {/* Default State - Icon and Title Only */}
                    <div className='bg-white p-6 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 border border-gray-100 group-hover:border-teal-200 h-40 flex flex-col items-center justify-center'>
                      <div className='text-4xl mb-3 group-hover:scale-110 transition-transform duration-300'>
                        {service.icon}
                      </div>
                      <h3 className='text-lg font-semibold text-[#2c3e50] text-center group-hover:text-teal-600 transition-colors duration-300'>{service.title}</h3>
                    </div>
                    
                    {/* Hover State - Full Card with Description */}
                    <div className='absolute inset-0 bg-gradient-to-br from-teal-400 via-cyan-500 to-teal-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center shadow-2xl transform scale-95 group-hover:scale-100'>
                      <div className='text-white text-center p-6'>
                        <div className='text-4xl mb-4 animate-pulse'>{service.icon}</div>
                        <h4 className='font-bold text-lg mb-3'>{service.title}</h4>
                        <p className='text-sm opacity-90 leading-relaxed'>{service.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SurveillanceAccessControl;