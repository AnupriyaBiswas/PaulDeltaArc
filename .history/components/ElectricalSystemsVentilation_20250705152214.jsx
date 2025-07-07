import React, { useState, useEffect } from 'react';

const ElectricalSystemsVentilation = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const scopeItems = [
    "HT & LT Panel Design & Installation",
    "Main/Sub Switchboards (PCC, MCC, APFC panels)",
    "Cabling: Laying, Jointing & Termination",
    "Earthing: Conventional & Chemical",
    "Transformers, DGs, Synchronization Panels",
    "Internal & External Electrification",
    "Lighting Layouts, Emergency Lights",
    "Exhaust & Ventilation Systems: Kitchens, Basements, Toilets",
    "Energy-Saving Systems & UPS Integration"
  ];

  const specializationItems = [
    "Stairwell Pressurization Systems",
    "Smart metering & remote-controlled panels"
  ];

  const cardClasses = isClient 
    ? 'p-6 bg-gradient-to-br from-teal-400 to-teal-600 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'
    : 'p-6 bg-gradient-to-br from-teal-400 to-teal-600 shadow-xl rounded-xl';

  return (
    <div id='electrical-systems-ventilation' className='w-full bg-gray-50 py-16'>
      <div className='max-w-[1240px] mx-auto px-4'>
        {/* Header */}
        <div className='mb-12'>
          <h2 className='text-4xl font-bold text-[#2c3e50] mb-2'>Electrical Systems & Ventilation</h2>
          <div className='w-11 h-1 bg-[#2c3e50]'></div>
        </div>

        {/* Description */}
        <div className='mb-12'>
          <p className='text-lg text-gray-700 leading-relaxed'>
            We offer comprehensive HT/LT electrical services backed by licensed 
            professionals and advanced load/energy calculations.
          </p>
        </div>

        {/* Scope Section */}
        <div className='mb-12'>
          <h3 className='text-2xl font-bold text-[#2c3e50] mb-6'>Scope Includes:</h3>
          <div className='bg-gradient-to-br from-teal-400 to-teal-600 rounded-lg shadow-xl overflow-hidden relative p-8'>
            {/* Background pattern overlay */}
            <div className='absolute inset-0 opacity-10 pointer-events-none'>
              <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/20 to-transparent'></div>
              <div className='absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full'></div>
              <div className='absolute -bottom-10 -left-10 w-40 h-40 bg-white/10 rounded-full'></div>
            </div>
            
            <div className='relative'>
              <ul className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                {scopeItems.map((item, index) => (
                  <li key={index} className='flex items-start'>
                    <div className='w-2 h-2 bg-white rounded-full mr-3 flex-shrink-0 mt-2'></div>
                    <p className='text-white font-medium leading-relaxed'>{item}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Specialization Section */}
        <div className='mb-12'>
          <h3 className='text-2xl font-bold text-[#2c3e50] mb-6'>Specialization In:</h3>
          <div className='bg-gradient-to-br from-teal-400 to-teal-600 rounded-lg shadow-xl overflow-hidden relative p-8'>
            {/* Background pattern overlay */}
            <div className='absolute inset-0 opacity-10 pointer-events-none'>
              <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/20 to-transparent'></div>
              <div className='absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full'></div>
              <div className='absolute -bottom-10 -left-10 w-40 h-40 bg-white/10 rounded-full'></div>
            </div>
            
            <div className='relative'>
              <ul className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                {specializationItems.map((item, index) => (
                  <li key={index} className='flex items-start'>
                    <div className='w-2 h-2 bg-white rounded-full mr-3 flex-shrink-0 mt-2'></div>
                    <p className='text-white font-medium leading-relaxed'>{item}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Key Features Cards */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          <div className={cardClasses}>
            <div className='text-center'>
              <div className='text-white text-4xl mb-4'>⚡</div>
              <h4 className='text-white font-bold text-lg mb-2'>HT/LT Systems</h4>
              <p className='text-white/90 text-sm'>Complete high and low tension electrical solutions</p>
            </div>
          </div>
          
          <div className={cardClasses}>
            <div className='text-center'>
              <div className='text-white text-4xl mb-4'>🔧</div>
              <h4 className='text-white font-bold text-lg mb-2'>Licensed Professionals</h4>
              <p className='text-white/90 text-sm'>Backed by certified electrical engineers</p>
            </div>
          </div>
          
          <div className={cardClasses}>
            <div className='text-center'>
              <div className='text-white text-4xl mb-4'>💨</div>
              <h4 className='text-white font-bold text-lg mb-2'>Smart Ventilation</h4>
              <p className='text-white/90 text-sm'>Advanced exhaust and pressurization systems</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ElectricalSystemsVentilation;