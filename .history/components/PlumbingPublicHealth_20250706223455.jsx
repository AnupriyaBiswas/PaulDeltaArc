import React, { useState, useEffect } from 'react';
import { Droplets, Wrench, Recycle, CloudRain, Sun, Shield, Waves, Building, Users, Settings } from 'lucide-react';

const PlumbingPublicHealth = () => {
  const [hasMounted, setHasMounted] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) return null;

  const scopeServices = [
    { icon: Droplets, title: "Cold & Hot Water Distribution", description: "Efficient water distribution systems", color: "from-blue-500 to-cyan-500" },
    { icon: Settings, title: "Hydro-pneumatic Systems", description: "Pressurized water supply solutions", color: "from-teal-500 to-green-500" },
    { icon: Wrench, title: "STP & ETP Solutions", description: "Sewage and effluent treatment plants", color: "from-purple-500 to-pink-500" },
    { icon: Recycle, title: "Grey Water Recycling", description: "Sustainable water recycling systems", color: "from-orange-500 to-red-500" },
    { icon: CloudRain, title: "Rainwater Harvesting", description: "Rainwater collection and drainage", color: "from-indigo-500 to-purple-500" },
    { icon: Sun, title: "Solar Water Heating", description: "Energy-efficient solar systems", color: "from-yellow-500 to-orange-500" },
    { icon: Shield, title: "Water Treatment Systems", description: "RO, UF, Softening Systems", color: "from-green-500 to-teal-500" },
    { icon: Waves, title: "Swimming Pool Systems", description: "Filtration & plumbing installations", color: "from-cyan-500 to-blue-500" },
    { icon: Building, title: "Hospital-Grade Installations", description: "Specialized sanitary systems", color: "from-pink-500 to-rose-500" },
    { icon: Users, title: "Accessible Plumbing", description: "Universal design solutions", color: "from-violet-500 to-indigo-500" }
  ];

  const executionAspects = [
    { icon: Settings, title: "Advanced Piping Systems", subtitle: "HDPE, CPVC, PPR, GI piping", description: "High-quality piping materials", color: "from-emerald-500 to-teal-500" },
    { icon: Building, title: "Civil Integration", subtitle: "Manhole & Inspection Chambers", description: "Seamless infrastructure integration", color: "from-amber-500 to-orange-500" }
  ];

  return (
    <div className='w-full bg-gradient-to-br from-teal-50 to-cyan-50 py-8 px-4 min-h-screen flex items-center'>
      <div className='max-w-7xl mx-auto w-full'>
        {/* Header Section */}
        <div className='text-center mb-6'>
          <h1 className='text-3xl md:text-4xl font-bold text-[#2c3e50] mb-2'>
            Plumbing & Public Health Engineering
          </h1>
          <div className='w-24 h-1 bg-gradient-to-r from-teal-400 to-cyan-600 mx-auto mb-3'></div>
          <p className='text-sm text-gray-600 max-w-4xl mx-auto'>
            We deliver water systems aligned with LEED & IGBC green building norms, ensuring quality water management, hygiene, and resource conservation.
          </p>
        </div>

        {/* Main Content */}
        <div className='grid md:grid-cols-3 gap-6'>
          {/* Left Column - First 4 Services */}
          <div className='space-y-4'>
            {scopeServices.slice(0, 4).map((service, index) => (
              <div
                key={index}
                className='group bg-white rounded-xl shadow p-4 hover:shadow-lg transition duration-200'
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className='flex items-start space-x-3'>
                  <div className={`w-10 h-10 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${
                    hoveredCard === index ? 'scale-110 rotate-3' : ''
                  }`}>
                    <service.icon className='w-5 h-5 text-white' />
                  </div>
                  <div className='flex-1'>
                    <h4 className='text-sm font-bold text-[#2c3e50] mb-1'>{service.title}</h4>
                    <p className='text-xs text-gray-600'>{service.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Center Column - Middle 3 Services + Execution Aspects */}
          <div className='space-y-4'>
            {scopeServices.slice(4, 7).map((service, index) => (
              <div
                key={index + 4}
                className='group bg-white rounded-xl shadow p-4 hover:shadow-lg transition duration-200'
                onMouseEnter={() => setHoveredCard(index + 4)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className='flex items-start space-x-3'>
                  <div className={`w-10 h-10 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${
                    hoveredCard === index + 4 ? 'scale-110 rotate-3' : ''
                  }`}>
                    <service.icon className='w-5 h-5 text-white' />
                  </div>
                  <div className='flex-1'>
                    <h4 className='text-sm font-bold text-[#2c3e50] mb-1'>{service.title}</h4>
                    <p className='text-xs text-gray-600'>{service.description}</p>
                  </div>
                </div>
              </div>
            ))}
            
            {/* Execution Aspects in Center Column */}
            <div className='bg-gradient-to-br from-teal-100 to-cyan-100 rounded-xl p-4'>
              <h3 className='text-sm font-bold text-[#2c3e50] mb-3 text-center'>Execution Aspects</h3>
              <div className='space-y-3'>
                {executionAspects.map((aspect, index) => (
                  <div
                    key={index}
                    className='group bg-white rounded-lg shadow p-3 hover:shadow-md transition duration-200'
                    onMouseEnter={() => setHoveredCard(index + 20)}
                    onMouseLeave={() => setHoveredCard(null)}
                  >
                    <div className='flex items-start space-x-3'>
                      <div className={`w-8 h-8 bg-gradient-to-br ${aspect.color} rounded-lg flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${
                        hoveredCard === index + 20 ? 'scale-110 rotate-3' : ''
                      }`}>
                        <aspect.icon className='w-4 h-4 text-white' />
                      </div>
                      <div className='flex-1'>
                        <h4 className='text-xs font-bold text-[#2c3e50] mb-1'>{aspect.title}</h4>
                        <p className='text-xs text-teal-600 mb-1'>{aspect.subtitle}</p>
                        <p className='text-xs text-gray-600'>{aspect.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Last 3 Services */}
          <div className='space-y-4'>
            {scopeServices.slice(7, 10).map((service, index) => (
              <div
                key={index + 7}
                className='group bg-white rounded-xl shadow p-4 hover:shadow-lg transition duration-200'
                onMouseEnter={() => setHoveredCard(index + 7)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className='flex items-start space-x-3'>
                  <div className={`w-10 h-10 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${
                    hoveredCard === index + 7 ? 'scale-110 rotate-3' : ''
                  }`}>
                    <service.icon className='w-5 h-5 text-white' />
                  </div>
                  <div className='flex-1'>
                    <h4 className='text-sm font-bold text-[#2c3e50] mb-1'>{service.title}</h4>
                    <p className='text-xs text-gray-600'>{service.description}</p>
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

export default PlumbingPublicHealth;