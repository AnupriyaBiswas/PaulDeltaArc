import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const AnnualMaintenanceContracts = () => {
  const [hasMounted, setHasMounted] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) return null;

  const amcServices = [
    { icon: "🔧", title: "Regular Preventive Maintenance", description: "Scheduled maintenance to prevent system failures" },
    { icon: "📈", title: "System Health Checks & Reports", description: "Comprehensive system diagnostics and reporting" },
    { icon: "🚨", title: "Fire Drill, Safety Trainings, Mock Evacuations", description: "Emergency preparedness and safety protocols" },
    { icon: "⚡", title: "Emergency Response within 24-48 hrs", description: "Rapid response for critical system issues" },
    { icon: "🔩", title: "OEM Spare Replacement", description: "Genuine parts replacement and maintenance" },
    { icon: "📋", title: "Detailed AMC Log Reports", description: "Comprehensive maintenance documentation" }
  ];

  const contractTypes = [
    { type: "Comprehensive", description: "Full coverage including parts and labor", color: "from-teal-500 to-cyan-600" },
    { type: "Non-Comprehensive", description: "Service coverage with separate part costs", color: "from-cyan-500 to-blue-600" }
  ];

  const benefits = [
    { icon: "🛡️", title: "Peace of Mind", description: "Reliable system performance with professional maintenance", color: "from-green-400 to-teal-500" },
    { icon: "⚡", title: "Uninterrupted Operations", description: "Minimize downtime with proactive maintenance", color: "from-blue-400 to-cyan-500" },
    { icon: "💰", title: "Lower Long-term Costs", description: "Prevent expensive repairs through regular maintenance", color: "from-purple-400 to-pink-500" }
  ];

  return (
    <div className='w-full bg-gradient-to-br from-teal-50 to-cyan-50 py-12 min-h-screen'>
      <div className='max-w-[1400px] mx-auto px-6'>
        <div className='text-center mb-12'>
          <h1 className='text-4xl md:text-5xl font-bold text-[#2c3e50] mb-4'>
            📄 Annual Maintenance Contracts
          </h1>
          <div className='w-32 h-1 bg-gradient-to-r from-teal-400 to-cyan-600 mx-auto mb-6'></div>
        </div>

        {/* Contract Types Section */}
        <div className='mb-12'>
          <div className='relative z-10'>
            <h2 className='text-2xl font-bold text-[#2c3e50] mb-6 text-center'>
              We offer both Comprehensive & Non-Comprehensive AMCs that cover:
            </h2>
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

        {/* Services Section - Faded Multi View */}
        <div className='mb-12 relative overflow-x-auto'>
          <div className='flex space-x-4 px-4'>
            {amcServices.map((service, index) => {
              const distance = Math.abs(index - currentSlide);
              const opacity = distance === 0 ? 'opacity-100' : distance === 1 ? 'opacity-70' : 'opacity-40';
              return (
                <div
                  key={index}
                  className={`transition-all duration-300 transform ${opacity} flex-shrink-0 w-72`}
                  onClick={() => setCurrentSlide(index)}
                >
                  <div className='bg-gradient-to-br from-teal-50 to-cyan-50 p-6 rounded-2xl shadow-md border-l-4 border-teal-400'>
                    <div className='flex flex-col items-center text-center space-y-4'>
                      <div className='w-16 h-16 bg-gradient-to-br from-teal-400 to-cyan-600 rounded-full flex items-center justify-center text-white text-2xl'>
                        {service.icon}
                      </div>
                      <div>
                        <h3 className='text-lg font-semibold text-[#2c3e50] mb-2'>{service.title}</h3>
                        <p className='text-sm text-gray-600'>{service.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Benefits Section - Static Grid */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className='w-full bg-white p-6 rounded-2xl shadow-lg text-center border border-gray-200 hover:shadow-xl transition-shadow duration-300'
            >
              <div className={`w-12 h-12 bg-gradient-to-br ${benefit.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                <span className='text-xl text-white'>{benefit.icon}</span>
              </div>
              <h4 className='text-lg font-semibold text-[#2c3e50] mb-2'>{benefit.title}</h4>
              <p className='text-sm text-gray-600'>{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AnnualMaintenanceContracts;
