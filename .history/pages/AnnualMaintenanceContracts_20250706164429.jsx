import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';

const AnnualMaintenanceContracts = () => {
  const [hasMounted, setHasMounted] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    setHasMounted(true);
  }, []);

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

  // Auto-play effect
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % amcServices.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying, amcServices.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % amcServices.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + amcServices.length) % amcServices.length);
  };

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  if (!hasMounted) return null;

  return (
    <div className='w-full bg-gradient-to-br from-teal-50 to-cyan-50 py-12 min-h-screen'>
      <div className='max-w-[1400px] mx-auto px-6'>
        {/* Header Section */}
        <div className='text-center mb-12'>
          <h1 className='text-4xl md:text-5xl font-bold text-[#2c3e50] mb-4'>📄 Annual Maintenance Contracts</h1>
          <div className='w-32 h-1 bg-gradient-to-r from-teal-400 to-cyan-600 mx-auto mb-6'></div>
        </div>

        {/* Services Section - Auto Carousel */}
        <div className='mb-12'>
          <div className='relative flex items-center justify-center'>
            <button
              onClick={prevSlide}
              className='absolute left-0 z-20 w-10 h-10 bg-gradient-to-br from-teal-400 to-cyan-600 text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-lg'
            >
              <ChevronLeft size={20} />
            </button>

            <div className='w-72 mx-auto'>
              <div
                className='flex transition-transform duration-500 ease-in-out'
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {amcServices.map((service, index) => (
                  <div
                    key={index}
                    className='w-full flex-shrink-0'
                  >
                    <div className='bg-white p-6 rounded-2xl shadow-lg text-center border border-gray-200 h-64 flex flex-col'>
                      <div className='w-14 h-14 mx-auto bg-gradient-to-br from-teal-400 to-cyan-600 text-white flex items-center justify-center rounded-full text-2xl mb-4'>
                        {service.icon}
                      </div>
                      <h3 className='text-lg font-semibold text-[#2c3e50] mb-2 min-h-[3rem] flex items-center justify-center'>{service.title}</h3>
                      <p className='text-sm text-gray-600 flex-1 flex items-center justify-center'>{service.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={nextSlide}
              className='absolute right-0 z-20 w-10 h-10 bg-gradient-to-br from-teal-400 to-cyan-600 text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-lg'
            >
              <ChevronRight size={20} />
            </button>
          </div>

          {/* Slider Controls */}
          <div className='flex items-center justify-center mt-6 space-x-4'>
            {/* Play/Pause Button */}
            <button
              onClick={toggleAutoPlay}
              className='flex items-center justify-center w-10 h-10 bg-gradient-to-br from-teal-400 to-cyan-600 text-white rounded-full hover:scale-110 transition-transform duration-300 shadow-lg'
            >
              {isAutoPlaying ? <Pause size={16} /> : <Play size={16} />}
            </button>

            {/* Slide Indicators */}
            <div className='flex space-x-2'>
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
          </div>

          {/* Progress Bar */}
          <div className='w-full max-w-md mx-auto mt-4 bg-gray-200 rounded-full h-1'>
            <div 
              className='bg-gradient-to-r from-teal-400 to-cyan-600 h-1 rounded-full transition-all duration-300'
              style={{ width: `${((currentSlide + 1) / amcServices.length) * 100}%` }}
            />
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