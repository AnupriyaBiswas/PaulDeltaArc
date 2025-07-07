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
    <div className='w-full bg-gradient-to-br from-teal-50 to-cyan-50 py-8 min-h-screen text-sm'>
      <div className='max-w-[1300px] mx-auto px-4'>
        {/* Header Section */}
        <div className='text-center mb-4'>
          <h1 className='text-2xl md:text-3xl font-bold text-[#2c3e50] mb-2'>🔒 Surveillance, Intercom & Access Control</h1>
          <div className='w-24 h-1 bg-gradient-to-r from-teal-400 to-cyan-600 mx-auto mb-3'></div>
          <p className='text-gray-600 max-w-3xl mx-auto leading-relaxed text-xs'>
            We offer modern surveillance solutions for safety, control, and property protection.
          </p>
        </div>

        {/* Visual Section */}
        <div className='mb-8'>
          <div className='bg-white rounded-2xl shadow p-6 relative overflow-hidden'>
            {/* Background Pattern */}
            <div className='absolute inset-0 opacity-5'>
              <div className='grid grid-cols-8 grid-rows-6 h-full'>
                {[...Array(48)].map((_, i) => (
                  <div key={i} className='border border-teal-200'></div>
                ))}
              </div>
            </div>

            <div className='relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-center'>
              {scopeServices.map((service, index) => (
                <div key={index} className='group relative'>
                  <div className='bg-white p-4 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 group-hover:border-teal-200 h-28 flex flex-col items-center justify-center text-center'>
                    <div className='text-xl mb-1 group-hover:scale-110 transition-transform duration-300'>{service.icon}</div>
                    <h3 className='text-xs font-semibold text-[#2c3e50] group-hover:text-teal-600 transition-colors duration-300'>{service.title}</h3>
                  </div>

                  {/* Hover State */}
                  <div className='absolute inset-0 bg-gradient-to-br from-teal-400 via-cyan-500 to-teal-600 rounded-xl opacity-0 group-hover:opacity-95 transition-all duration-300 flex items-center justify-center shadow-xl transform scale-95 group-hover:scale-100'>
                    <div className='text-white text-center p-4'>
                      <div className='text-xl mb-2 animate-pulse'>{service.icon}</div>
                      <h4 className='font-bold text-sm mb-1'>{service.title}</h4>
                      <p className='text-xs opacity-90 leading-snug'>{service.description}</p>
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
