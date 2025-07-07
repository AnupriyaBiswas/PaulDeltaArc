import React, { useState, useEffect } from 'react';

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
    { name: "Honeywell", icon: "honeywell.svg", specialty: "Industrial Control" },
    { name: "Siemens", icon: "siemens.png", specialty: "Building Technologies" },
    { name: "Schneider", icon: "Schneider.png", specialty: "Energy Management" },
    { name: "Johnson Controls", icon: "johnson_controls.png", specialty: "Smart Buildings" }
  ];

  return (
    <div className='w-full bg-gradient-to-br from-teal-50 to-cyan-50 py-12 min-h-screen'>
      <div className='max-w-[1400px] mx-auto px-6'>
        {/* Header Section */}
        <div className='text-center mb-6'>
          <h1 className='text-4xl md:text-5xl font-bold text-[#2c3e50] mb-4'>
            🏗️ Building Automation & Smart Controls
          </h1>
          <div className='w-32 h-1 bg-gradient-to-r from-teal-400 to-cyan-600 mx-auto mb-6'></div>
          <p className='text-base text-gray-600 max-w-5xl mx-auto leading-relaxed'>
            We design and install intelligent systems that connect fire, HVAC, access, lighting, and energy metering into a single controllable environment.
          </p>
        </div>

        {/* Hero Feature Section - Large Card Layout */}
        <div className='mb-12'>
          <div className='bg-white rounded-3xl shadow-2xl p-8 relative overflow-hidden'>
            {/* Background Pattern */}
            <div className='absolute inset-0 opacity-5'>
              <div className='grid grid-cols-8 grid-rows-6 h-full'>
                {[...Array(48)].map((_, i) => (
                  <div key={i} className='border border-teal-200'></div>
                ))}
              </div>
            </div>
            
            <div className='relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center'>
              <div>
                <h2 className='text-3xl font-bold text-[#2c3e50] mb-4'>
                  Complete Building Intelligence
                </h2>
                <p className='text-gray-600 mb-6'>
                  Transform your building into a smart, efficient, and sustainable environment with our integrated automation solutions.
                </p>
                <div className='flex flex-wrap gap-2'>
                  <span className='px-3 py-1 bg-teal-100 text-teal-800 rounded-full text-sm'>IoT Enabled</span>
                  <span className='px-3 py-1 bg-cyan-100 text-cyan-800 rounded-full text-sm'>Energy Efficient</span>
                  <span className='px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm'>Remote Control</span>
                </div>
              </div>
              
              <div className='grid grid-cols-2 gap-4'>
                {scopeServices.slice(0, 4).map((service, index) => (
                  <div key={index} className='bg-gradient-to-br from-teal-100 to-cyan-100 p-4 rounded-xl text-center'>
                    <div className='text-2xl mb-2'>{service.icon}</div>
                    <h3 className='text-sm font-semibold text-[#2c3e50]'>{service.title}</h3>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Services Timeline Layout */}
        <div className='mb-12'>
          <h2 className='text-2xl font-bold text-[#2c3e50] mb-8 text-center'>
            Our Automation Solutions
          </h2>
          
          <div className='space-y-6'>
            {scopeServices.map((service, index) => (
              <div key={index} className='flex items-start group'>
                {/* Timeline dot */}
                <div className='flex-shrink-0 w-12 h-12 bg-gradient-to-br from-teal-400 to-cyan-600 rounded-full flex items-center justify-center text-white text-xl mr-6 group-hover:scale-110 transition-transform duration-300'>
                  {service.icon}
                </div>
                
                {/* Content */}
                <div className='flex-1 bg-white p-6 rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-1'>
                  <h3 className='text-xl font-semibold text-[#2c3e50] mb-2'>{service.title}</h3>
                  <p className='text-gray-600'>{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Platforms Section - Unique Card Grid */}
        <div className='mb-12'>
          <h2 className='text-2xl font-bold text-[#2c3e50] mb-8 text-center'>
            Platforms We Support
          </h2>
          
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
            {platforms.map((platform, index) => (
              <div key={index} className='group relative'>
                {/* Main Card */}
                <div className='bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2'>
                  <div className='text-center'>
                    <div className='text-4xl mb-4 group-hover:scale-110 transition-transform duration-300'>
                      {platform.icon}
                    </div>
                    <h3 className='text-xl font-bold text-[#2c3e50] mb-2'>{platform.name}</h3>
                    <p className='text-sm text-gray-600'>{platform.specialty}</p>
                  </div>
                </div>
                
                {/* Hover Overlay */}
                <div className='absolute inset-0 bg-gradient-to-br from-teal-400 to-cyan-600 rounded-2xl opacity-0 group-hover:opacity-95 transition-opacity duration-300 flex items-center justify-center'>
                  <div className='text-white text-center'>
                    <div className='text-3xl mb-2'>{platform.icon}</div>
                    <h4 className='font-bold text-lg'>{platform.name}</h4>
                    <p className='text-sm opacity-90'>Expert Integration</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Stats/Features Section */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          <div className='bg-gradient-to-br from-teal-400 to-cyan-600 text-white p-6 rounded-2xl text-center'>
            <div className='text-3xl mb-2'>🎯</div>
            <h3 className='text-xl font-bold mb-2'>Precision Control</h3>
            <p className='text-sm opacity-90'>Advanced algorithms for optimal building performance</p>
          </div>
          
          <div className='bg-gradient-to-br from-purple-400 to-pink-500 text-white p-6 rounded-2xl text-center'>
            <div className='text-3xl mb-2'>📱</div>
            <h3 className='text-xl font-bold mb-2'>Remote Access</h3>
            <p className='text-sm opacity-90'>Monitor and control from anywhere, anytime</p>
          </div>
          
          <div className='bg-gradient-to-br from-emerald-400 to-teal-500 text-white p-6 rounded-2xl text-center'>
            <div className='text-3xl mb-2'>💡</div>
            <h3 className='text-xl font-bold mb-2'>Smart Analytics</h3>
            <p className='text-sm opacity-90'>Data-driven insights for better decisions</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuildingAutomation;