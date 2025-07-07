import React, { useState, useEffect, useRef } from 'react';
import { Check, Shield, Zap, DollarSign } from 'lucide-react';

const AnnualMaintenanceContracts = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const serviceRefs = useRef([]);
  const scrollContainerRef = useRef(null);
  const componentRef = useRef(null);

  const amcServices = [
    { icon: "🔧", title: "Regular Preventive Maintenance", description: "Scheduled maintenance to prevent system failures", details: "Our comprehensive preventive maintenance program ensures your fire safety systems operate at peak efficiency. We conduct regular inspections, cleaning, and calibration of all components.", features: ["Monthly system checks", "Component calibration", "Performance optimization", "Detailed inspection reports"] },
    { icon: "📊", title: "System Health Checks & Reports", description: "Comprehensive system diagnostics and reporting", details: "Advanced diagnostic tools and detailed reporting provide complete visibility into your system's health, helping you make informed decisions about maintenance and upgrades.", features: ["Real-time diagnostics", "Performance analytics", "Trend analysis", "Compliance reporting"] },
    { icon: "🚨", title: "Fire Drill, Safety Trainings, Mock Evacuations", description: "Emergency preparedness and safety protocols", details: "Regular training sessions and mock evacuations ensure your team is prepared for any emergency situation. Our certified trainers provide hands-on experience with safety protocols.", features: ["Quarterly fire drills", "Staff safety training", "Emergency response protocols", "Evacuation plan updates"] },
    { icon: "⚡", title: "Emergency Response within 24-48 hrs", description: "Rapid response for critical system issues", details: "Our dedicated emergency response team is available 24/7 to address critical system failures and ensure your safety systems are restored quickly.", features: ["24/7 emergency hotline", "Rapid response team", "Priority service calls", "Emergency repair services"] },
    { icon: "🔩", title: "OEM Spare Replacement", description: "Genuine parts replacement and maintenance", details: "We maintain an extensive inventory of genuine OEM parts to ensure quick replacements and maintain system integrity with manufacturer-approved components.", features: ["Genuine OEM parts", "Quick replacement service", "Parts warranty", "Inventory management"] },
    { icon: "📋", title: "Detailed AMC Log Reports", description: "Comprehensive maintenance documentation", details: "Complete documentation of all maintenance activities, including detailed logs, photographs, and recommendations for optimal system performance.", features: ["Digital maintenance logs", "Photo documentation", "Compliance certificates", "Performance recommendations"] }
  ];

  const benefits = [
    { icon: Shield, title: "Peace of Mind", description: "Reliable system performance with professional maintenance", color: "from-green-400 to-teal-500" },
    { icon: Zap, title: "Uninterrupted Operations", description: "Minimize downtime with proactive maintenance", color: "from-blue-400 to-cyan-500" },
    { icon: DollarSign, title: "Lower Long-term Costs", description: "Prevent expensive repairs through regular maintenance", color: "from-purple-400 to-pink-500" }
  ];

  // Intersection Observer to detect if component is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
        // Turn off autoplay when component is not visible to prevent unwanted scrolling
        if (!entry.isIntersecting) {
          setIsAutoPlaying(false);
        }
      },
      { 
        threshold: 0.3, // Require 30% visibility to consider it "in view"
        rootMargin: '-50px 0px' // Add some margin to be more strict about visibility
      }
    );

    if (componentRef.current) {
      observer.observe(componentRef.current);
    }

    return () => {
      if (componentRef.current) {
        observer.unobserve(componentRef.current);
      }
    };
  }, []);

  // Page visibility change handler - stops autoplay when page/tab is hidden
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        setIsAutoPlaying(false);
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  // Cleanup on unmount - ensure autoplay is stopped
  useEffect(() => {
    return () => {
      setIsAutoPlaying(false);
    };
  }, []);

  // Auto play only when component is visible and page is active
  useEffect(() => {
    if (!isAutoPlaying || !isVisible || document.hidden) return;
    
    const interval = setInterval(() => {
      // Double-check visibility before updating to prevent scrolling to hidden components
      if (isVisible && !document.hidden) {
        setActiveTab(prev => (prev + 1) % amcServices.length);
      }
    }, 4000);
    
    return () => clearInterval(interval);
  }, [isAutoPlaying, isVisible, amcServices.length]);

  // Pause auto-play when user interacts
  const handleTabClick = (index) => {
    setActiveTab(index);
    setIsAutoPlaying(false);
    // Resume auto-play after 10 seconds of inactivity (only if still visible)
    setTimeout(() => {
      if (isVisible && !document.hidden) {
        setIsAutoPlaying(true);
      }
    }, 10000);
  };

  // Scroll active tab into view (only if component is visible and in viewport)
  useEffect(() => {
    if (isVisible && serviceRefs.current[activeTab] && scrollContainerRef.current) {
      // Only scroll within the container, not the entire page
      serviceRefs.current[activeTab].scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center'
      });
    }
  }, [activeTab, isVisible]);

  return (
    <div id='annual-maintenance-contracts' ref={componentRef} className='w-full bg-gradient-to-br from-teal-50 to-cyan-50 py-6 text-sm'>
      <div className='max-w-7xl mx-auto px-4'>
        {/* Heading */}
        <div className='text-center mb-4'>
          <h1 className='text-3xl md:text-4xl font-bold text-[#2c3e50] mb-2'>📄 Annual Maintenance Contracts</h1>
          <div className='w-20 h-1 bg-gradient-to-r from-teal-400 to-cyan-600 mx-auto'></div>
        </div>

        {/* Services & Details */}
        <div className='mb-8 flex flex-col lg:flex-row gap-4'>
          {/* Left Scrollable Section */}
          <div className='lg:w-1/2 max-h-[340px] overflow-y-auto pr-2' ref={scrollContainerRef}>
            <div className='sticky top-0 bg-teal-50 z-10 pb-2'>
              <div className='flex items-center justify-between mb-3'>
                <h2 className='text-base font-bold text-[#2c3e50]'>Our Services</h2>
                <button
                  onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                  className={`px-4 py-1 rounded-full text-xs font-medium transition-all duration-300 ${
                    isAutoPlaying 
                      ? 'bg-gradient-to-r from-teal-400 to-cyan-600 text-white' 
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  {isAutoPlaying ? 'Auto Playing' : 'Auto Play Off'}
                </button>
              </div>
            </div>
            <div className='space-y-3'>
              {amcServices.map((service, index) => (
                <button
                  key={index}
                  ref={el => serviceRefs.current[index] = el}
                  onClick={() => handleTabClick(index)}
                  className={`w-full text-left p-3 rounded-xl transition-all duration-300 ${
                    activeTab === index
                      ? 'bg-gradient-to-r from-teal-400 to-cyan-600 text-white shadow-md'
                      : 'bg-white text-gray-700 hover:bg-gray-50 hover:shadow-sm'
                  }`}
                >
                  <div className='flex items-center space-x-3'>
                    <span className='text-xl'>{service.icon}</span>
                    <div>
                      <h3 className='font-semibold text-sm'>{service.title}</h3>
                      <p className={`text-xs mt-1 ${
                        activeTab === index ? 'text-cyan-100' : 'text-gray-500'
                      }`}>
                        {service.description}
                      </p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Right Details Section */}
          <div className='lg:w-1/2'>
            <div className='bg-white rounded-xl shadow-md p-5 min-h-[340px] h-full'>
              <div className='flex items-center space-x-4 mb-3'>
                <div className='w-10 h-10 bg-gradient-to-br from-teal-400 to-cyan-600 rounded-full flex items-center justify-center text-lg'>
                  {amcServices[activeTab].icon}
                </div>
                <div>
                  <h3 className='text-lg font-bold text-[#2c3e50] mb-1'>{amcServices[activeTab].title}</h3>
                  <p className='text-sm text-gray-600'>{amcServices[activeTab].description}</p>
                </div>
              </div>

              <div className='border-t pt-3'>
                <p className='text-sm text-gray-700 mb-3 leading-relaxed'>{amcServices[activeTab].details}</p>
                <h4 className='text-sm font-semibold text-[#2c3e50] mb-2'>Key Features:</h4>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
                  {amcServices[activeTab].features.map((feature, index) => (
                    <div key={index} className='flex items-center space-x-2'>
                      <Check className='w-4 h-4 text-teal-500' />
                      <span className='text-xs text-gray-700'>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className='mt-4 pt-3 border-t'>
                <div className='flex justify-between items-center mb-2'>
                  <span className='text-xs text-gray-500'>Service {activeTab + 1} of {amcServices.length}</span>
                  <span className='text-xs text-gray-500'>
                    {isAutoPlaying && isVisible ? 'Auto advancing...' : 'Manual navigation'}
                  </span>
                </div>
                <div className='w-full bg-gray-200 rounded-full h-2'>
                  <div 
                    className='bg-gradient-to-r from-teal-400 to-cyan-600 h-2 rounded-full transition-all duration-300'
                    style={{ width: `${((activeTab + 1) / amcServices.length) * 100}%` }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div>
          <div className='text-center mb-4'>
            <h2 className='text-2xl font-bold text-[#2c3e50]'>Why Choose Our AMC Services?</h2>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className='group bg-white p-4 rounded-xl shadow border border-gray-200 hover:shadow-md transition-all duration-300 hover:-translate-y-1'
              >
                <div className={`w-10 h-10 bg-gradient-to-br ${benefit.color} rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-105 transition-transform duration-300`}>
                  <benefit.icon className='w-5 h-5 text-white' />
                </div>
                <h4 className='text-sm font-semibold text-[#2c3e50] mb-2 text-center'>{benefit.title}</h4>
                <p className='text-xs text-gray-600 text-center leading-snug'>{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnnualMaintenanceContracts;