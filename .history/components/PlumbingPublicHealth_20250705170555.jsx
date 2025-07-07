import React, { useState, useEffect } from 'react';

const PlumbingPublicHealth = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const scopeItems = [
    "Cold & Hot Water Distribution",
    "Hydro-pneumatic Pressurized Water Systems",
    "STP & ETP Design, Supply & Erection",
    "Grey Water Recycling",
    "Rainwater Harvesting & Drainage",
    "Solar Water Heating",
    "RO, UF, Softening Systems",
    "Swimming Pool Filtration & Plumbing",
    "Hospital-Grade Sanitary Installations",
    "Plumbing Shaft Design with Access Planning"
  ];

  const executionItems = [
    "HDPE, CPVC, PPR, GI piping systems",
    "Manhole & inspection chamber civil integration"
  ];

  const cardClasses = isClient 
    ? 'p-6 bg-gradient-to-br from-teal-400 to-teal-600 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'
    : 'p-6 bg-gradient-to-br from-teal-400 to-teal-600 shadow-xl rounded-xl';

  return (
    <div id='plumbing-public-health' className='w-full bg-gray-50 py-16'>
      <div className='max-w-[1240px] mx-auto px-4'>
        {/* Header */}
        <div className='mb-12'>
          <h2 className='text-4xl font-bold text-[#2c3e50] mb-2'>Plumbing & Public Health Engineering</h2>
          <div className='w-11 h-1 bg-[#2c3e50]'></div>
        </div>

        {/* Description */}
        <div className='mb-12'>
          <p className='text-lg text-gray-700 leading-relaxed'>
            We deliver water systems aligned with LEED & IGBC green building norms, 
            ensuring quality water management, hygiene, and resource conservation.
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

        {/* Execution Aspects Section */}
        <div className='mb-12'>
          <h3 className='text-2xl font-bold text-[#2c3e50] mb-6'>Execution Aspects:</h3>
          <div className='bg-gradient-to-br from-teal-400 to-teal-600 rounded-lg shadow-xl overflow-hidden relative p-8'>
            {/* Background pattern overlay */}
            <div className='absolute inset-0 opacity-10 pointer-events-none'>
              <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/20 to-transparent'></div>
              <div className='absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full'></div>
              <div className='absolute -bottom-10 -left-10 w-40 h-40 bg-white/10 rounded-full'></div>
            </div>
            
            <div className='relative'>
              <ul className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                {executionItems.map((item, index) => (
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
              <div className='text-white text-4xl mb-4'>💧</div>
              <h4 className='text-white font-bold text-lg mb-2'>LEED Compliant</h4>
              <p className='text-white/90 text-sm'>Green building water systems aligned with LEED & IGBC norms</p>
            </div>
          </div>
          
          <div className={cardClasses}>
            <div className='text-center'>
              <div className='text-white text-4xl mb-4'>♻️</div>
              <h4 className='text-white font-bold text-lg mb-2'>Water Conservation</h4>
              <p className='text-white/90 text-sm'>Rainwater harvesting and grey water recycling systems</p>
            </div>
          </div>
          
          <div className={cardClasses}>
            <div className='text-center'>
              <div className='text-white text-4xl mb-4'>🏥</div>
              <h4 className='text-white font-bold text-lg mb-2'>Hospital Grade</h4>
              <p className='text-white/90 text-sm'>High-quality sanitary installations for healthcare facilities</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlumbingPublicHealth;