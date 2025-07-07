import React, { useState, useEffect } from 'react';
import Image from 'next/image';

import Schneider from '../public/assets/Schneider.png';
import Honeywell from '../public/assets/honeywell.svg';
import Siemens from '../public/assets/siemens.png';
import Johnson from '../public/assets/johnson_controls.png';

const BuildingAutomation = () => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) return null;

  const scopeServices = [
    { icon: "🏢", title: "Building Management Systems (BMS)" },
    { icon: "🌡️", title: "HVAC Integration & Remote Monitoring" },
    { icon: "🔗", title: "IBMS (Integrated Building Management System)" },
    { icon: "💻", title: "SCADA/GUI Interfaces for Control" },
    { icon: "📊", title: "Energy Monitoring Dashboards" },
    { icon: "⚙️", title: "Smart HVAC/VFD Drives" }
  ];

  const platforms = [
    { name: "Honeywell", icon: Honeywell, specialty: "Industrial Control" },
    { name: "Siemens", icon: Siemens, specialty: "Building Technologies" },
    { name: "Schneider", icon: Schneider, specialty: "Energy Management" },
    { name: "Johnson Controls", icon: Johnson, specialty: "Smart Buildings" }
  ];

  return (
    <div className='w-full bg-gradient-to-br from-teal-50 to-cyan-50 py-6 min-h-screen text-xs'>
      <div className='max-w-[1300px] mx-auto px-4'>
        {/* Header Section */}
        <div className='text-center mb-4'>
          <h1 className='text-xl md:text-2xl font-bold text-[#2c3e50] mb-2'>🏗️ Building Automation & Smart Controls</h1>
          <div className='w-20 h-1 bg-gradient-to-r from-teal-400 to-cyan-600 mx-auto mb-3'></div>
          <p className='text-gray-600 max-w-3xl mx-auto leading-relaxed text-xs'>
            Intelligent systems that connect fire, HVAC, access, lighting, and metering into one controllable environment.
          </p>
        </div>

        {/* Hero Feature Section */}
        <div className='mb-6'>
          <div className='bg-white rounded-2xl shadow p-4 relative overflow-hidden'>
            <div className='absolute inset-0 opacity-5'>
              <div className='grid grid-cols-8 grid-rows-6 h-full'>
                {[...Array(48)].map((_, i) => (
                  <div key={i} className='border border-teal-200'></div>
                ))}
              </div>
            </div>

            <div className='relative z-10 grid grid-cols-1 md:grid-cols-2 gap-4 items-center'>
              <div>
                <h2 className='text-lg font-bold text-[#2c3e50] mb-2'>Complete Building Intelligence</h2>
                <p className='text-gray-600 mb-3 text-xs'>
                  Make your building smart, efficient, and sustainable with our automation solutions.
                </p>
                <div className='flex flex-wrap gap-1'>
                  <span className='px-2 py-1 bg-teal-100 text-teal-800 rounded-full text-xs'>IoT Enabled</span>
                  <span className='px-2 py-1 bg-cyan-100 text-cyan-800 rounded-full text-xs'>Energy Efficient</span>
                  <span className='px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs'>Remote Control</span>
                </div>
              </div>

              <div className='grid grid-cols-2 md:grid-cols-3 gap-2'>
                {scopeServices.map((service, index) => (
                  <div key={index} className='bg-gradient-to-br from-teal-100 to-cyan-100 p-3 rounded-xl text-center h-24 flex flex-col justify-center items-center'>
                    <div className='text-lg mb-1'>{service.icon}</div>
                    <h3 className='text-[10px] font-semibold text-[#2c3e50] text-center'>{service.title}</h3>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Platforms Section */}
        <div className='mb-6'>
          <h2 className='text-sm font-bold text-[#2c3e50] mb-4 text-center'>Platforms We Support</h2>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-3'>
            {platforms.map((platform, index) => (
              <div key={index} className='group relative'>
                <div className='bg-white p-3 rounded-xl shadow hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1'>
                  <div className='text-center'>
                    <div className='mb-2 group-hover:scale-110 transition-transform duration-300'>
                      <Image
                        src={platform.icon}
                        alt={`${platform.name} logo`}
                        width={130}
                        height={60}
                        className='mx-auto object-contain'
                      />
                    </div>
                    <h3 className='text-xs font-bold text-[#2c3e50] mb-1'>{platform.name}</h3>
                    <p className='text-[10px] text-gray-600'>{platform.specialty}</p>
                  </div>
                </div>

                {/* Hover Overlay */}
                <div className='absolute inset-0 bg-gradient-to-br from-teal-400 to-cyan-600 rounded-xl opacity-0 group-hover:opacity-95 transition-opacity duration-300 flex items-center justify-center'>
                  <div className='text-white text-center'>
                    <Image
                      src={platform.icon}
                      alt={`${platform.name} logo`}
                      width={100}
                      height={50}
                      className='mx-auto mb-1 object-contain'
                    />
                    <h4 className='font-bold text-xs'>{platform.name}</h4>
                    <p className='text-[10px] opacity-90'>Expert Integration</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuildingAutomation;
