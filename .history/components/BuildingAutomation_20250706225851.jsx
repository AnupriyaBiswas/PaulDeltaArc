import React, { useState, useEffect } from 'react';
import { Building, Thermometer, Network, Monitor, BarChart3, Settings, Zap, Smartphone, Target } from 'lucide-react';

const BuildingAutomation = () => {
  const [hasMounted, setHasMounted] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) return null;

  const scopeServices = [
    { icon: Building, title: "Building Management Systems (BMS)", description: "Centralized control and monitoring of building operations", color: "from-blue-500 to-cyan-500" },
    { icon: Thermometer, title: "HVAC Integration & Remote Monitoring", description: "Smart climate control with real-time monitoring capabilities", color: "from-teal-500 to-green-500" },
    { icon: Network, title: "IBMS (Integrated Building Management System)", description: "Unified platform for all building systems integration", color: "from-purple-500 to-pink-500" },
    { icon: Monitor, title: "SCADA/GUI Interfaces for Control", description: "User-friendly control interfaces for system management", color: "from-orange-500 to-red-500" },
    { icon: BarChart3, title: "Energy Monitoring Dashboards", description: "Real-time energy consumption tracking and analytics", color: "from-indigo-500 to-purple-500" },
    { icon: Settings, title: "Smart HVAC/VFD Drives", description: "Variable frequency drives for efficient HVAC operations", color: "from-yellow-500 to-orange-500" },
    { icon: Zap, title: "IoT Sensor Integration", description: "Smart sensors for environmental monitoring", color: "from-green-500 to-teal-500" },
    { icon: Smartphone, title: "Mobile Control Apps", description: "Remote building control via mobile applications", color: "from-cyan-500 to-blue-500" },
    { icon: Target, title: "Predictive Maintenance", description: "AI-powered maintenance scheduling and alerts", color: "from-pink-500 to-rose-500" },
    { icon: Monitor, title: "Real-time Analytics", description: "Live data visualization and reporting", color: "from-violet-500 to-indigo-500" }
  ];

  const platforms = [
    { name: "Honeywell", specialty: "Industrial Control", color: "from-emerald-500 to-teal-500" },
    { name: "Siemens", specialty: "Building Technologies", color: "from-amber-500 to-orange-500" }
  ];

  return (
    <div className='w-full bg-gradient-to-br from-teal-50 to-cyan-50 py-8 px-4 min-h-screen flex items-center'>
      <div className='max-w-7xl mx-auto w-full'>
        {/* Header Section */}
        <div className='text-center mb-6'>
          <h1 className='text-3xl md:text-4xl font-bold text-[#2c3e50] mb-2'>
            🏗️ Building Automation & Smart Controls
          </h1>
          <div className='w-24 h-1 bg-gradient-to-r from-teal-400 to-cyan-600 mx-auto mb-3'></div>
          <p className='text-sm text-gray-600 max-w-4xl mx-auto'>
            We design and install intelligent systems that connect fire, HVAC, access, lighting, and energy metering into a single controllable environment.
          </p>
        </div>

        {/* Main Content */}
        <div className='grid md:grid-cols-5 gap-6'>
          {/* Left Column - 10 Services in 5 Rows */}
          <div className='md:col-span-3 space-y-4'>
            {Array.from({ length: 5 }, (_, rowIndex) => (
              <div key={rowIndex} className='grid grid-cols-2 gap-4'>
                {scopeServices.slice(rowIndex * 2, rowIndex * 2 + 2).map((service, index) => {
                  const cardIndex = rowIndex * 2 + index;
                  return (
                    <div
                      key={cardIndex}
                      className='group bg-white rounded-xl shadow p-4 hover:shadow-lg transition duration-200'
                      onMouseEnter={() => setHoveredCard(cardIndex)}
                      onMouseLeave={() => setHoveredCard(null)}
                    >
                      <div className='flex items-start space-x-3'>
                        <div className={`w-10 h-10 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${
                          hoveredCard === cardIndex ? 'scale-110 rotate-3' : ''
                        }`}>
                          <service.icon className='w-5 h-5 text-white' />
                        </div>
                        <div className='flex-1'>
                          <h4 className='text-sm font-bold text-[#2c3e50] mb-1'>{service.title}</h4>
                          <p className='text-xs text-gray-600'>{service.description}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            ))}
          </div>

          {/* Right Column - 2 Bigger Platform Cards */}
          <div className='md:col-span-2 flex flex-col justify-between space-y-4'>
            {platforms.map((platform, index) => (
              <div
                key={index}
                className='bg-gradient-to-br from-teal-100 to-cyan-100 rounded-xl p-6 hover:shadow-lg transition duration-200 flex-1'
                onMouseEnter={() => setHoveredCard(index + 20)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className='flex flex-col items-center text-center h-full'>
                  <div className={`w-16 h-16 bg-gradient-to-br ${platform.color} rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 mb-4 ${
                    hoveredCard === index + 20 ? 'scale-110 rotate-3' : ''
                  }`}>
                    <Building className='w-8 h-8 text-white' />
                  </div>
                  <div className='flex-1 flex flex-col justify-center'>
                    <h4 className='text-lg font-bold text-[#2c3e50] mb-2'>{platform.name}</h4>
                    <p className='text-sm text-teal-600 mb-3 font-semibold'>Platform Integration</p>
                    <p className='text-sm text-gray-600'>{platform.specialty}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Feature Stats */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mt-6'>
          <div className='bg-gradient-to-br from-teal-400 to-cyan-600 text-white p-4 rounded-xl text-center'>
            <div className='text-2xl mb-2'>🎯</div>
            <h3 className='text-sm font-bold mb-1'>Precision Control</h3>
            <p className='text-xs opacity-90'>Advanced algorithms for optimal building performance</p>
          </div>

          <div className='bg-gradient-to-br from-purple-400 to-pink-500 text-white p-4 rounded-xl text-center'>
            <div className='text-2xl mb-2'>📱</div>
            <h3 className='text-sm font-bold mb-1'>Remote Access</h3>
            <p className='text-xs opacity-90'>Monitor and control from anywhere, anytime</p>
          </div>

          <div className='bg-gradient-to-br from-emerald-400 to-teal-500 text-white p-4 rounded-xl text-center'>
            <div className='text-2xl mb-2'>💡</div>
            <h3 className='text-sm font-bold mb-1'>Smart Analytics</h3>
            <p className='text-xs opacity-90'>Data-driven insights for better decisions</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuildingAutomation;