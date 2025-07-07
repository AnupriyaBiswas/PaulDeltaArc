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
    { icon: "🏢", title: "Building Management Systems (BMS)", description: "Centralized control and monitoring of building operations" },
    { icon: "🌡️", title: "HVAC Integration & Remote Monitoring", description: "Smart climate control with real-time monitoring capabilities" },
    { icon: "🔗", title: "IBMS (Integrated Building Management System)", description: "Unified platform for all building systems integration" },
    { icon: "💻", title: "SCADA/GUI Interfaces for Control", description: "User-friendly control interfaces for system management" },
    { icon: "📊", title: "Energy Monitoring Dashboards", description: "Real-time energy consumption tracking and analytics" },
    { icon: "⚙️", title: "Smart HVAC/VFD Drives", description: "Variable frequency drives for efficient HVAC operations" }
  ];

  const platforms = [
    { name: "Honeywell", icon: Honeywell, specialty: "Industrial Control" },
    { name: "Siemens", icon: Siemens, specialty: "Building Technologies" },
    { name: "Schneider", icon: Schneider, specialty: "Energy Management" },
    { name: "Johnson Controls", icon: Johnson, specialty: "Smart Buildings" }
  ];

  return (
    <div className='w-full bg-gradient-to-br from-teal-50 to-cyan-50 py-8 min-h-screen text-sm'>
      <div className='max-w-[1300px] mx-auto px-4'>
        {/* Header Section */}
        <div className='text-center mb-4'>
          <h1 className='text-2xl md:text-3xl font-bold text-[#2c3e50] mb-2'>🏗️ Building Automation & Smart Controls</h1>
          <div className='w-24 h-1 bg-gradient-to-r from-teal-400 to-cyan-600 mx-auto mb-3'></div>
          <p className='text-gray-600 max-w-5xl mx-auto leading-relaxed text-xs'>
            We design and install intelligent systems that connect fire, HVAC, access, lighting, and energy metering into a single controllable environment.
          </p>
        </div>

        {/* Hero Feature Section */}
        <div className='mb-8'>
          <div className='bg-white rounded-2xl shadow p-6 relative overflow-hidden'>
            <div className='absolute inset-0 opacity-5'>
              <div className='grid grid-cols-8 grid-rows-6 h-full'>
                {[...Array(48)].map((_, i) => (
                  <div key={i} className='border border-teal-200'></div>
                ))}
              </div>
            </div>

            <div className='relative z-10 grid grid-cols-1 md:grid-cols-2 gap-4 items-center'>
              <div>
                <h2 className='text-xl font-bold text-[#2c3e50] mb-2'>Complete Building Intelligence</h2>
                <p className='text-gray-600 mb-3 text-xs'>
                  Transform your building into a smart, efficient, and sustainable environment with our integrated automation solutions.
                </p>
                <div className='flex flex-wrap gap-1'>
                  <span className='px-2 py-1 bg-teal-100 text-teal-800 rounded-full text-xs'>IoT Enabled</span>
                  <span className='px-2 py-1 bg-cyan-100 text-cyan-800 rounded-full text-xs'>Energy Efficient</span>
                  <span className='px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs'>Remote Control</span>
                </div>
              </div>

              <div className='grid grid-cols-2 gap-2'>
                {scopeServices.slice(0, 4).map((service, index) => (
                  <div key={index} className='bg-gradient-to-br from-teal-100 to-cyan-100 p-3 rounded-xl text-center'>
                    <div className='text-xl mb-1'>{service.icon}</div>
                    <h3 className='text-xs font-semibold text-[#2c3e50]'>{service.title}</h3>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Services Timeline */}
        <div className='mb-8'>
          <h2 className='text-lg font-bold text-[#2c3e50] mb-4 text-center'>Our Automation Solutions</h2>
          <div className='space-y-4'>
            {scopeServices.map((service, index) => (
              <div key={index} className='flex items-start group'>
                <div className='flex-shrink-0 w-10 h-10 bg-gradient-to-br from-teal-400 to-cyan-600 rounded-full flex items-center justify-center text-white text-base mr-4 group-hover:scale-110 transition-transform duration-300'>
                  {service.icon}
                </div>
                <div className='flex-1 bg-white p-4 rounded-xl shadow group-hover:shadow-md transition-all duration-300 transform group-hover:-translate-y-1'>
                  <h3 className='text-sm font-semibold text-[#2c3e50] mb-1'>{service.title}</h3>
                  <p className='text-xs text-gray-600'>{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Platforms Section */}
        <div className='mb-8'>
          <h2 className='text-lg font-bold text-[#2c3e50] mb-4 text-center'>Platforms We Support</h2>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
            {platforms.map((platform, index) => (
              <div key={index} className='group relative'>
                <div className='bg-white p-4 rounded-xl shadow hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1'>
                  <div className='text-center'>
                    <div className='mb-2 group-hover:scale-110 transition-transform duration-300'>
                      <Image
                        src={platform.icon}
                        alt={`${platform.name} logo`}
                        width={40}
                        height={40}
                        className='mx-auto'
                      />
                    </div>
                    <h3 className='text-sm font-bold text-[#2c3e50] mb-1'>{platform.name}</h3>
                    <p className='text-xs text-gray-600'>{platform.specialty}</p>
                  </div>
                </div>

                {/* Hover Overlay */}
                <div className='absolute inset-0 bg-gradient-to-br from-teal-400 to-cyan-600 rounded-xl opacity-0 group-hover:opacity-95 transition-opacity duration-300 flex items-center justify-center'>
                  <div className='text-white text-center'>
                    <Image
                      src={platform.icon}
                      alt={`${platform.name} logo`}
                      width={30}
                      height={30}
                      className='mx-auto mb-1'
                    />
                    <h4 className='font-bold text-sm'>{platform.name}</h4>
                    <p className='text-xs opacity-90'>Expert Integration</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Feature Stats */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
          <div className='bg-gradient-to-br from-teal-400 to-cyan-600 text-white p-4 rounded-xl text-center'>
            <div className='text-2xl mb-1'>🎯</div>
            <h3 className='text-sm font-bold mb-1'>Precision Control</h3>
            <p className='text-xs opacity-90'>Advanced algorithms for optimal building performance</p>
          </div>

          <div className='bg-gradient-to-br from-purple-400 to-pink-500 text-white p-4 rounded-xl text-center'>
            <div className='text-2xl mb-1'>📱</div>
            <h3 className='text-sm font-bold mb-1'>Remote Access</h3>
            <p className='text-xs opacity-90'>Monitor and control from anywhere, anytime</p>
          </div>

          <div className='bg-gradient-to-br from-emerald-400 to-teal-500 text-white p-4 rounded-xl text-center'>
            <div className='text-2xl mb-1'>💡</div>
            <h3 className='text-sm font-bold mb-1'>Smart Analytics</h3>
            <p className='text-xs opacity-90'>Data-driven insights for better decisions</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuildingAutomation;