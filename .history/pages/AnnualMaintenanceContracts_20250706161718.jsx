import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const AnnualMaintenanceContracts = () => {
  const [hasMounted, setHasMounted] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentBenefitSlide, setBenefitSlide] = useState(0);

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

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const nextBenefitSlide = () => {
    setBenefitSlide((prev) => (prev + 1) % benefits.length);
  };

  const prevBenefitSlide = () => {
    setBenefitSlide((prev) => (prev - 1 + benefits.length) % benefits.length);
  };

  const goToBenefitSlide = (index) => {
    setBenefitSlide(index);
  };

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

        {/* Services Section - Horizontal Slider */}
        <div className='mb-12'>
          <div className='bg-white rounded-3xl shadow-2xl p-8 relative overflow-hidden'>
            {/* Slider Container */}
            <div className='relative h-64 flex items-center justify-center'>
              {/* Navigation Buttons */}
              <button
                onClick={prevSlide}
                className='absolute left-4 z-20 w-10 h-10 bg-gradient-to-br from-teal-400 to-cyan-600 text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-lg'
              >
                <ChevronLeft size={20} />
              </button>
              
              <button
                onClick={nextSlide}
                className='absolute right-4 z-20 w-10 h-10 bg-gradient-to-br from-teal-400 to-cyan-600 text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-lg'
              >
                <ChevronRight size={20} />
              </button>

              {/* Service Card */}
              <div className='w-full max-w-md mx-auto px-12'>
                <div className='bg-gradient-to-br from-teal-50 to-cyan-50 p-6 rounded-2xl shadow-lg border-l-4 border-teal-400 transform transition-all duration-500 hover:shadow-xl'>
                  <div className='flex flex-col items-center text-center space-y-4'>
                    <div className='w-16 h-16 bg-gradient-to-br from-teal-400 to-cyan-600 rounded-full flex items-center justify-center text-white text-2xl'>
                      {amcServices[currentSlide].icon}
                    </div>
                    <div>
                      <h3 className='text-lg font-semibold text-[#2c3e50] mb-2'>{amcServices[currentSlide].title}</h3>
                      <p className='text-sm text-gray-600'>{amcServices[currentSlide].description}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Slide Indicators */}
            <div className='flex justify-center space-x-2 mt-6'>
              {amcServices.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide 
                      ? 'bg-gradient-to-r from-teal-400 to-cyan-600 scale-125' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>

            {/* Slide Counter */}
            <div className='text-center mt-4'>
              <span className='text-sm text-gray-500'>
                {currentSlide + 1} of {amcServices.length}
              </span>
            </div>
          </div>
        </div>

        {/* Benefits Section - Horizontal Slider with Partial Views */}
        <div className='relative'>
          <div className='p-6 relative'>
            {/* Benefits Slider Container */}
            <div className='relative z-10 h-48 flex items-center justify-center overflow-hidden'>
              {/* Navigation Buttons */}
              <button
                onClick={prevBenefitSlide}
                className='absolute left-2 z-30 w-8 h-8 bg-gradient-to-br from-teal-400 to-cyan-600 text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-lg'
              >
                <ChevronLeft size={16} />
              </button>
              
              <button
                onClick={nextBenefitSlide}
                className='absolute right-2 z-30 w-8 h-8 bg-gradient-to-br from-teal-400 to-cyan-600 text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-lg'
              >
                <ChevronRight size={16} />
              </button>

              {/* Cards Container */}
              <div className='flex items-center justify-center w-full px-8'>
                {benefits.map((benefit, index) => {
                  const distance = Math.abs(index - currentBenefitSlide);
                  const isPrevious = index === (currentBenefitSlide - 1 + benefits.length) % benefits.length;
                  const isNext = index === (currentBenefitSlide + 1) % benefits.length;
                  const isCurrent = index === currentBenefitSlide;
                  
                  let cardClass = 'absolute transition-all duration-500 ease-in-out';
                  let cardStyle = {};
                  
                  if (isCurrent) {
                    cardClass += ' scale-100 opacity-100 z-20';
                    cardStyle = { transform: 'translateX(0px)' };
                  } else if (isPrevious) {
                    cardClass += ' scale-75 opacity-60 z-10';
                    cardStyle = { transform: 'translateX(-120px)' };
                  } else if (isNext) {
                    cardClass += ' scale-75 opacity-60 z-10';
                    cardStyle = { transform: 'translateX(120px)' };
                  } else {
                    cardClass += ' scale-50 opacity-0 z-0';
                    cardStyle = { transform: 'translateX(0px)' };
                  }
                  
                  return (
                    <div
                      key={index}
                      className={cardClass}
                      style={cardStyle}
                      onClick={() => goToBenefitSlide(index)}
                    >
                      <div className='w-64 bg-white p-6 rounded-2xl shadow-lg text-center cursor-pointer hover:shadow-xl transition-shadow duration-300 border border-gray-200'>
                        <div className={`w-12 h-12 bg-gradient-to-br ${benefit.color} rounded-full flex items-center justify-center mx-auto mb-4 transition-transform duration-300 ${isCurrent ? 'hover:scale-110' : ''}`}>
                          <span className='text-xl text-white'>{benefit.icon}</span>
                        </div>
                        <h4 className='text-lg font-semibold text-[#2c3e50] mb-2'>{benefit.title}</h4>
                        <p className='text-sm text-gray-600'>{benefit.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Slide Indicators */}
            <div className='relative z-10 flex justify-center space-x-2 mt-4'>
              {benefits.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToBenefitSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentBenefitSlide 
                      ? 'bg-gradient-to-r from-teal-400 to-cyan-600 scale-125' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>

            {/* Slide Counter */}
            <div className='relative z-10 text-center mt-2'>
              <span className='text-xs text-gray-500'>
                {currentBenefitSlide + 1} of {benefits.length}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnnualMaintenanceContracts;