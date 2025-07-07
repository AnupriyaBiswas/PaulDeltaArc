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
    { icon: "📊", title: "System Health Checks & Reports", description: "Comprehensive system diagnostics and reporting" },
    { icon: "🚨", title: "Fire Drill, Safety Trainings, Mock Evacuations", description: "Emergency preparedness and safety protocols" },
    { icon: "⚡", title: "Emergency Response within 24-48 hrs", description: "Rapid response for critical system issues" },
    { icon: "🔩", title: "OEM Spare Replacement", description: "Genuine parts replacement and maintenance" },
    { icon: "📋", title: "Detailed AMC Log Reports", description: "Comprehensive maintenance documentation" }
  ];

  const benefits = [
    { 
      icon: "🛡️", 
      title: "Peace of Mind", 
      description: "Reliable system performance with professional maintenance",
      color: "from-green-400 to-teal-500"
    },
    { 
      icon: "⚡", 
      title: "Uninterrupted Operations", 
      description: "Minimize downtime with proactive maintenance",
      color: "from-blue-400 to-cyan-500"
    },
    { 
      icon: "💰", 
      title: "Lower Long-term Costs", 
      description: "Prevent expensive repairs through regular maintenance",
      color: "from-purple-400 to-pink-500"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % amcServices.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + amcServices.length) % amcServices.length);
  };

  return (
    <div className='w-full bg-gradient-to-br from-teal-50 to-cyan-50 py-12 min-h-screen'>
      <div className='max-w-[1400px] mx-auto px-6'>
        {/* Header Section */}
        <div className='text-center mb-12'>
          <h1 className='text-4xl md:text-5xl font-bold text-[#2c3e50] mb-4'>📄 Annual Maintenance Contracts</h1>
          <div className='w-32 h-1 bg-gradient-to-r from-teal-400 to-cyan-600 mx-auto mb-6'></div>
        </div>

        {/* Services Section - Simple Carousel */}
        <div className='mb-12'>
          <div className='relative flex items-center justify-center'>
            <button
              onClick={prevSlide}
              className='absolute left-0 z-20 w-10 h-10 bg-gradient-to-br from-teal-400 to-cyan-600 text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-lg'
            >
              <ChevronLeft size={20} />
            </button>

            <div className='flex space-x-6 overflow-hidden px-16'>
              {amcServices.map((service, index) => (
                <div
                  key={index}
                  className={`transition-all duration-500 ease-in-out transform w-72 shrink-0`}
                >
                  <div className='bg-white p-6 rounded-2xl shadow-lg text-center border border-gray-200'>
                    <div className='w-14 h-14 mx-auto bg-gradient-to-br from-teal-400 to-cyan-600 text-white flex items-center justify-center rounded-full text-2xl mb-4'>
                      {service.icon}
                    </div>
                    <h3 className='text-lg font-semibold text-[#2c3e50] mb-2'>{service.title}</h3>
                    <p className='text-sm text-gray-600'>{service.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={nextSlide}
              className='absolute right-0 z-20 w-10 h-10 bg-gradient-to-br from-teal-400 to-cyan-600 text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-lg'
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Benefits Static Grid */}
        <div className='mb-12'>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className='bg-white p-6 rounded-2xl shadow-lg text-center border border-gray-200 hover:shadow-xl transition-shadow duration-300'
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
    </div>
  );
};

export default AnnualMaintenanceContracts;
