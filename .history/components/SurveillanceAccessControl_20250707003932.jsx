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
    <div className='w-full bg-gradient-to-br from-teal-50 to-cyan-50 py-10 min-h-screen text-sm'>
      <div className='max-w-[1300px] mx-auto px-6'>
        {/* Header Section */}
        <div className='text-center mb-8'>
          <h1 className='text-3xl md:text-4xl font-bold text-[#2c3e50] mb-3'>🔒 Surveillance, Intercom & Access Control</h1>
          <div className='w-28 h-1 bg-gradient-to-r from-teal-400 to-cyan-600 mx-auto mb-4'></div>
          <p className='text-gray-600 max-w-3xl mx-auto leading-relaxed text-sm'>
            We offer modern surveillance solutions for safety, control, and property protection.
          </p>
        </div>

        {/* Visual Section */}
        <div className='mb-10'>
          <div className='bg-white rounded-2xl shadow p-8 relative overflow-hidden'>
            {/* Background Pattern */}
            <div className='absolute inset-0 opacity-5'>
              <div className='grid grid-cols-8 grid-rows-6 h-full'>
                {[...Array(48)].map((_, i) => (
                  <div key={i} className='border border-teal-200'></div>
                ))}
              </div>
            </div>

            <div className='relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch'>
              {scopeServices.map((service, index) => (
                <div key={index} className='group relative h-44'>
                  <div className='bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-3 border border-gray-100 group-hover:border-teal-200 h-full flex flex-col items-center justify-center text-center'>
                    <div className='text-3xl mb-2 group-hover:scale-110 transition-transform duration-300'>{service.icon}</div>
                    <h3 className='text-sm font-semibold text-[#2c3e50] group-hover:text-teal-600 transition-colors duration-300'>{service.title}</h3>
                  </div>

                  {/* Hover State */}
                  <div className='absolute inset-0 bg-gradient-to-br from-teal-400 via-cyan-500 to-teal-600 rounded-xl opacity-0 group-hover:opacity-95 transition-all duration-300 flex items-center justify-center shadow-xl transform scale-100 group-hover:scale-105'>
                    <div className='text-white text-center p-6'>
                      <div className='text-3xl mb-3 animate-pulse'>{service.icon}</div>
                      <h4 className='font-bold text-base mb-2'>{service.title}</h4>
                      <p className='text-sm opacity-90 leading-snug'>{service.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SurveillanceAccessControl;
