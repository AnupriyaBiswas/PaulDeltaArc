import React, { useState, useEffect } from 'react';
import { Check, Shield, Zap, DollarSign, Clock, FileText, AlertTriangle } from 'lucide-react';

const AnnualMaintenanceContracts = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const amcServices = [
    { 
      icon: "🔧", 
      title: "Regular Preventive Maintenance", 
      description: "Scheduled maintenance to prevent system failures",
      details: "Our comprehensive preventive maintenance program ensures your fire safety systems operate at peak efficiency. We conduct regular inspections, cleaning, and calibration of all components.",
      features: ["Monthly system checks", "Component calibration", "Performance optimization", "Detailed inspection reports"]
    },
    { 
      icon: "📊", 
      title: "System Health Checks & Reports", 
      description: "Comprehensive system diagnostics and reporting",
      details: "Advanced diagnostic tools and detailed reporting provide complete visibility into your system's health, helping you make informed decisions about maintenance and upgrades.",
      features: ["Real-time diagnostics", "Performance analytics", "Trend analysis", "Compliance reporting"]
    },
    { 
      icon: "🚨", 
      title: "Fire Drill, Safety Trainings, Mock Evacuations", 
      description: "Emergency preparedness and safety protocols",
      details: "Regular training sessions and mock evacuations ensure your team is prepared for any emergency situation. Our certified trainers provide hands-on experience with safety protocols.",
      features: ["Quarterly fire drills", "Staff safety training", "Emergency response protocols", "Evacuation plan updates"]
    },
    { 
      icon: "⚡", 
      title: "Emergency Response within 24-48 hrs", 
      description: "Rapid response for critical system issues",
      details: "Our dedicated emergency response team is available 24/7 to address critical system failures and ensure your safety systems are restored quickly.",
      features: ["24/7 emergency hotline", "Rapid response team", "Priority service calls", "Emergency repair services"]
    },
    { 
      icon: "🔩", 
      title: "OEM Spare Replacement", 
      description: "Genuine parts replacement and maintenance",
      details: "We maintain an extensive inventory of genuine OEM parts to ensure quick replacements and maintain system integrity with manufacturer-approved components.",
      features: ["Genuine OEM parts", "Quick replacement service", "Parts warranty", "Inventory management"]
    },
    { 
      icon: "📋", 
      title: "Detailed AMC Log Reports", 
      description: "Comprehensive maintenance documentation",
      details: "Complete documentation of all maintenance activities, including detailed logs, photographs, and recommendations for optimal system performance.",
      features: ["Digital maintenance logs", "Photo documentation", "Compliance certificates", "Performance recommendations"]
    }
  ];

  const benefits = [
    { 
      icon: Shield, 
      title: "Peace of Mind", 
      description: "Reliable system performance with professional maintenance",
      color: "from-green-400 to-teal-500"
    },
    { 
      icon: Zap, 
      title: "Uninterrupted Operations", 
      description: "Minimize downtime with proactive maintenance",
      color: "from-blue-400 to-cyan-500"
    },
    { 
      icon: DollarSign, 
      title: "Lower Long-term Costs", 
      description: "Prevent expensive repairs through regular maintenance",
      color: "from-purple-400 to-pink-500"
    }
  ];

  // Auto-play effect
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setActiveTab(prev => (prev + 1) % amcServices.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, amcServices.length]);

  return (
    <div className='w-full bg-gradient-to-br from-teal-50 to-cyan-50 py-12 min-h-screen'>
      <div className='max-w-8xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Header Section */}
        <div className='text-center mb-16'>
          <h1 className='text-4xl md:text-6xl font-bold text-[#2c3e50] mb-6'>
            📄 Annual Maintenance Contracts
          </h1>
          <div className='w-32 h-1 bg-gradient-to-r from-teal-400 to-cyan-600 mx-auto mb-8'></div>
          <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
            Comprehensive maintenance solutions to keep your fire safety systems running at peak performance
          </p>
        </div>

        {/* Services Section - Interactive Tabs */}
        <div className='mb-16'>
          <div className='flex flex-col lg:flex-row gap-8'>
            {/* Tab Navigation */}
            <div className='lg:w-1/3'>
              <div className='sticky top-6'>
                <div className='flex items-center justify-between mb-6'>
                  <h2 className='text-2xl font-bold text-[#2c3e50]'>Our Services</h2>
                  <button
                    onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      isAutoPlaying 
                        ? 'bg-gradient-to-r from-teal-400 to-cyan-600 text-white' 
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                  >
                    {isAutoPlaying ? 'Auto Playing' : 'Auto Play Off'}
                  </button>
                </div>
                
                <div className='space-y-3'>
                  {amcServices.map((service, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveTab(index)}
                      className={`w-full text-left p-4 rounded-xl transition-all duration-300 ${
                        activeTab === index
                          ? 'bg-gradient-to-r from-teal-400 to-cyan-600 text-white shadow-lg transform scale-105'
                          : 'bg-white text-gray-700 hover:bg-gray-50 hover:shadow-md'
                      }`}
                    >
                      <div className='flex items-center space-x-3'>
                        <span className='text-2xl'>{service.icon}</span>
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
            </div>

            {/* Tab Content */}
            <div className='lg:w-2/3'>
              <div className='bg-white rounded-2xl shadow-xl p-8 min-h-[800px]'>
                <div className='flex items-center space-x-4 mb-6'>
                  <div className='w-16 h-16 bg-gradient-to-br from-teal-400 to-cyan-600 rounded-full flex items-center justify-center text-3xl'>
                    {amcServices[activeTab].icon}
                  </div>
                  <div>
                    <h3 className='text-2xl font-bold text-[#2c3e50] mb-2'>
                      {amcServices[activeTab].title}
                    </h3>
                    <p className='text-gray-600'>{amcServices[activeTab].description}</p>
                  </div>
                </div>

                <div className='border-t pt-6'>
                  <p className='text-gray-700 text-lg mb-6 leading-relaxed'>
                    {amcServices[activeTab].details}
                  </p>

                  <h4 className='text-xl font-semibold text-[#2c3e50] mb-4'>Key Features:</h4>
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                    {amcServices[activeTab].features.map((feature, index) => (
                      <div key={index} className='flex items-center space-x-3'>
                        <Check className='w-5 h-5 text-teal-500' />
                        <span className='text-gray-700'>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Progress Bar */}
                <div className='mt-8 pt-6 border-t'>
                  <div className='flex justify-between items-center mb-2'>
                    <span className='text-sm text-gray-500'>Service {activeTab + 1} of {amcServices.length}</span>
                    <span className='text-sm text-gray-500'>
                      {isAutoPlaying ? 'Auto advancing...' : 'Manual navigation'}
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
        </div>

        {/* Benefits Section */}
        <div className='mb-16'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl font-bold text-[#2c3e50] mb-4'>Why Choose Our AMC Services?</h2>
            <p className='text-gray-600 max-w-2xl mx-auto'>
              Experience the peace of mind that comes with professional maintenance and support
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className='group bg-white p-8 rounded-2xl shadow-lg border border-gray-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2'
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${benefit.color} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <benefit.icon className='w-8 h-8 text-white' />
                </div>
                <h4 className='text-xl font-semibold text-[#2c3e50] mb-4 text-center'>{benefit.title}</h4>
                <p className='text-gray-600 text-center leading-relaxed'>{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className='text-center bg-gradient-to-r from-teal-400 to-cyan-600 rounded-2xl p-12 text-white'>
          <h2 className='text-3xl font-bold mb-4'>Ready to Get Started?</h2>
          <p className='text-xl mb-8 text-cyan-100'>
            Contact us today to discuss your maintenance requirements and get a customized AMC plan
          </p>
          <button className='bg-white text-teal-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors duration-300 shadow-lg'>
            Request Quote
          </button>
        </div>
      </div>
    </div>
  );
};

export default AnnualMaintenanceContracts;