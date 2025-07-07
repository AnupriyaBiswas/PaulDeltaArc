import React, { useState, useEffect } from 'react';

const WhyPaulDeltaArc = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const features = [
    {
      icon: "🏆",
      title: "MSME Registered"
    },
    {
      icon: "⚙️",
      title: "End-to-End EPC Expertise"
    },
    {
      icon: "👥",
      title: "In-house Technical & Design Team"
    },
    {
      icon: "🌍",
      title: "PAN India Project Delivery"
    },
    {
      icon: "⏰",
      title: "Timely Delivery, No Cost Overruns"
    },
    {
      icon: "🔧",
      title: "AMC & Emergency Maintenance Backing"
    },
    {
      icon: "📋",
      title: "Statutory Compliance: IS, NBC, NFPA, TAC, etc."
    }
  ];

  // Determine grid classes based on client state
  const gridClasses = isClient ? 'grid grid-cols-2 lg:grid-cols-4 gap-8' : 'grid grid-cols-2 gap-8';
  const cardClasses = isClient 
    ? 'p-6 bg-gradient-to-br from-teal-400 to-teal-600 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'
    : 'p-6 bg-gradient-to-br from-teal-400 to-teal-600 shadow-xl rounded-xl';

  return (
    <div id='why-paul-delta-arc' className='w-full bg-gray-50 py-16'>
      <div className='max-w-[1240px] mx-auto px-4'>
        {/* Header */}
        <div className='mb-12'>
          <h2 className='text-4xl font-bold text-[#2c3e50] mb-2'>Why 'Paul Delta Arc'?</h2>
          <div className='w-11 h-1 bg-[#2c3e50]'></div>
        </div>

        <div className={gridClasses}>
          {features.map((feature, index) => (
            <div key={index} className={cardClasses}>
              <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto text-white text-2xl'>
                  {feature.icon}
                </div>
                <div className='flex flex-col items-center justify-center'>
                  <h3 className='text-center text-sm font-medium text-white'>{feature.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyPaulDeltaArc;