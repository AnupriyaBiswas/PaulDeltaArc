import React, { useState, useEffect } from 'react';

const WhyPaulDeltaArc = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
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

  if (!isMounted) {
    return (
      <div id='why-paul-delta-arc' className='w-full min-h-screen p-2'>
        <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
          <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
            Why Choose Us
          </p>
          <h2 className='py-4 font-bold text-3xl'>Why 'Paul Delta Arc'?</h2>
          <div className='grid grid-cols-2 gap-8'>
            {features.map((feature, index) => (
              <div key={index} className='p-6 bg-gradient-to-br from-teal-400 to-teal-600 shadow-xl rounded-xl'>
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
  }

  return (
    <div id='why-paul-delta-arc' className='w-full lg:h-screen p-2'>
      <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
        
        <h2 className='py-4 font-bold text-3xl'>Why 'Paul Delta Arc'?</h2>
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-8'>
          {features.map((feature, index) => (
            <div key={index} className='p-6 bg-gradient-to-br from-teal-400 to-teal-600 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
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