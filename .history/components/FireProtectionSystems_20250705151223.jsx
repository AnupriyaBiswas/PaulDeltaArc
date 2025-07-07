import React, { useState, useEffect } from 'react';

const FireProtectionSystems = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const scopeItems = [
    "Fire Hydrant & Wet Riser Systems",
    "Sprinkler Systems & Deluge Valves",
    "Gas-Based Suppression: FM200, CO2, Inergen, Novec 1230",
    "Kitchen Hood Fire Suppression",
    "Passive Fire Protection: Doors, Dampers, Cable Coatings",
    "Fire Detection: Addressable & Conventional",
    "VESDA (Very Early Smoke Detection Apparatus)",
    "BMS/SCADA Integration",
    "Fire Alarm Annunciation, Strobes, PA Interface"
  ];

  const targetClients = [
    "Residential Towers",
    "Industrial Plants",
    "Data Centers",
    "Hospitals",
    "Malls"
  ];

  const cardClasses = isClient 
    ? 'p-6 bg-gradient-to-br from-teal-400 to-teal-600 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'
    : 'p-6 bg-gradient-to-br from-teal-400 to-teal-600 shadow-xl rounded-xl';

  return (
    <div id='fire-protection-systems' className='w-full bg-gray-50 py-16'>
      <div className='max-w-[1240px] mx-auto px-4'>
        {/* Header */}
        <div className='mb-12'>
          <h2 className='text-4xl font-bold text-[#2c3e50] mb-2'>Fire Protection & Detection Systems</h2>
          <div className='w-11 h-1 bg-[#2c3e50]'></div>
        </div>

        {/* Description */}
        <div className='mb-12'>
          <p className='text-lg text-gray-700 leading-relaxed'>
            We specialize in integrated fire protection and life safety solutions with 
            compliance to NFPA, NBC, IS, and local Fire Directorate norms.
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

        {/* Target Clients Section */}
        <div className='mb-12'>
          <h3 className='text-2xl font-bold text-[#2c3e50] mb-6'>Target Clients:</h3>
          <div className='bg-gradient-to-br from-teal-400 to-teal-600 rounded-lg shadow-xl overflow-hidden relative p-8'>
            {/* Background pattern overlay */}
            <div className='absolute inset-0 opacity-10 pointer-events-none'>
              <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/20 to-transparent'></div>
              <div className='absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full'></div>
              <div className='absolute -bottom-10 -left-10 w-40 h-40 bg-white/10 rounded-full'></div>
            </div>
            
            <div className='relative flex flex-wrap gap-4 justify-center'>
              {targetClients.map((client, index) => (
                <div key={index} className='flex items-center'>
                  <span className='text-white font-semibold text-lg'>{client}</span>
                  {index < targetClients.length - 1 && (
                    <span className='text-white/70 mx-4 text-2xl'>|</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Key Features Cards */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          <div className={cardClasses}>
            <div className='text-center'>
              <div className='text-white text-4xl mb-4'>🔥</div>
              <h4 className='text-white font-bold text-lg mb-2'>NFPA Compliant</h4>
              <p className='text-white/90 text-sm'>Full compliance with international fire safety standards</p>
            </div>
          </div>
          
          <div className={cardClasses}>
            <div className='text-center'>
              <div className='text-white text-4xl mb-4'>⚡</div>
              <h4 className='text-white font-bold text-lg mb-2'>Advanced Detection</h4>
              <p className='text-white/90 text-sm'>VESDA and addressable fire detection systems</p>
            </div>
          </div>
          
          <div className={cardClasses}>
            <div className='text-center'>
              <div className='text-white text-4xl mb-4'>🏢</div>
              <h4 className='text-white font-bold text-lg mb-2'>Integrated Solutions</h4>
              <p className='text-white/90 text-sm'>BMS/SCADA integration for complete building management</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FireProtectionSystems;