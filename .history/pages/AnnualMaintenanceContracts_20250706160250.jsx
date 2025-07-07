import React, { useState, useEffect } from 'react';

const AnnualMaintenanceContracts = () => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) return null;

  const amcServices = [
    { icon: "🔧", title: "Regular Preventive Maintenance", description: "Scheduled maintenance to prevent system failures" },
    { icon: "📊", title: "System Health Checks & Reports", description: "Comprehensive system diagnostics and reporting" },
    { icon: "🚨", title: "Fire Drill, Safety Trainings, Mock Evacuations", description: "Emergency preparedness and safety protocols" },
    { icon: "⚡", title: "Emergency Response within 24-48 hrs", description: "Rapid response for critical system issues" },
    { icon: "🔩", title: "OEM Spare Replacement", description: "Genuine parts replacement and maintenance" },
    { icon: "📋", title: "Detailed AMC Log Reports", description: "Comprehensive maintenance documentation" }
  ];

  const contractTypes = [
    { type: "Comprehensive", description: "Full coverage including parts and labor", color: "from-teal-500 to-cyan-600" },
    { type: "Non-Comprehensive", description: "Service coverage with separate part costs", color: "from-cyan-500 to-blue-600" }
  ];

  return (
    <div className='w-full bg-gradient-to-br from-teal-50 to-cyan-50 py-12 min-h-screen'>
      <div className='max-w-[1400px] mx-auto px-6'>
        {/* Header Section */}
        <div className='text-center mb-12'>
          <h1 className='text-4xl md:text-5xl font-bold text-[#2c3e50] mb-4'>
            📄 Annual Maintenance Contracts
          </h1>
          <div className='w-32 h-1 bg-gradient-to-r from-teal-400 to-cyan-600 mx-auto mb-6'></div>
        </div>

        {/* Contract Types Section */}
        <div className='mb-12'>
          <div className='bg-white rounded-3xl shadow-2xl p-8 relative overflow-hidden'>
            {/* Background Pattern */}
            <div className='absolute inset-0 opacity-5'>
              <div className='grid grid-cols-10 grid-rows-6 h-full'>
                {[...Array(60)].map((_, i) => (
                  <div key={i} className='border border-teal-200'></div>
                ))}
              </div>
            </div>
            
            <div className='relative z-10'>
              <h2 className='text-2xl font-bold text-[#2c3e50] mb-6 text-center'>
                We offer both Comprehensive & Non-Comprehensive AMCs that cover:
              </h2>
              
              {/* Contract Types */}
              <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-8'>
                {contractTypes.map((contract, index) => (
                  <div key={index} className={`bg-gradient-to-br ${contract.color} text-white p-6 rounded-xl text-center`}>
                    <h3 className='text-xl font-bold mb-2'>{contract.type}</h3>
                    <p className='text-sm opacity-90'>{contract.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Services Section - Hexagonal Layout */}
        <div className='mb-12'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
            {/* Left - Services in Staggered Layout */}
            <div className='space-y-6'>
              {amcServices.map((service, index) => (
                <div key={index} className={`transform ${index % 2 === 0 ? 'translate-x-0' : 'translate-x-8'} group`}>
                  <div className='bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-teal-400 hover:border-cyan-500'>
                    <div className='flex items-start space-x-4'>
                      <div className='flex-shrink-0 w-12 h-12 bg-gradient-to-br from-teal-400 to-cyan-600 rounded-full flex items-center justify-center text-white text-xl group-hover:scale-110 transition-transform duration-300'>
                        {service.icon}
                      </div>
                      <div className='flex-1'>
                        <h3 className='text-lg font-semibold text-[#2c3e50] mb-2'>{service.title}</h3>
                        <p className='text-sm text-gray-600'>{service.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Right - Benefits Section */}
            <div className='flex items-center justify-center'>
              <div className='bg-gradient-to-br from-teal-500 to-cyan-600 text-white p-8 rounded-3xl shadow-2xl transform hover:scale-105 transition-all duration-300'>
                <div className='text-center'>
                  <div className='text-4xl mb-4'>🎯</div>
                  <h3 className='text-2xl font-bold mb-4'>Benefit to Client:</h3>
                  <div className='w-16 h-1 bg-white/50 mx-auto mb-6'></div>
                  <p className='text-lg leading-relaxed'>
                    Peace of mind, uninterrupted operations, and lower long-term costs.
                  </p>
                  
                  {/* Decorative Elements */}
                  <div className='mt-8 flex justify-center space-x-4'>
                    <div className='w-3 h-3 bg-white/30 rounded-full'></div>
                    <div className='w-3 h-3 bg-white/50 rounded-full'></div>
                    <div className='w-3 h-3 bg-white/30 rounded-full'></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Features Section - Circular Layout */}
        <div className='relative'>
          <div className='bg-white rounded-3xl shadow-2xl p-12 relative overflow-hidden'>
            {/* Central Element */}
            <div className='absolute inset-0 flex items-center justify-center'>
              <div className='w-32 h-32 bg-gradient-to-br from-teal-400 to-cyan-600 rounded-full flex items-center justify-center opacity-10'>
                <span className='text-4xl text-white'>🔧</span>
              </div>
            </div>
            
            {/* Surrounding Benefits */}
            <div className='relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-center'>
              <div className='group'>
                <div className='w-16 h-16 bg-gradient-to-br from-green-400 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300'>
                  <span className='text-2xl text-white'>🛡️</span>
                </div>
                <h4 className='text-lg font-semibold text-[#2c3e50] mb-2'>Peace of Mind</h4>
                <p className='text-sm text-gray-600'>Reliable system performance with professional maintenance</p>
              </div>
              
              <div className='group'>
                <div className='w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300'>
                  <span className='text-2xl text-white'>⚡</span>
                </div>
                <h4 className='text-lg font-semibold text-[#2c3e50] mb-2'>Uninterrupted Operations</h4>
                <p className='text-sm text-gray-600'>Minimize downtime with proactive maintenance</p>
              </div>
              
              <div className='group'>
                <div className='w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300'>
                  <span className='text-2xl text-white'>💰</span>
                </div>
                <h4 className='text-lg font-semibold text-[#2c3e50] mb-2'>Lower Long-term Costs</h4>
                <p className='text-sm text-gray-600'>Prevent expensive repairs through regular maintenance</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnnualMaintenanceContracts;