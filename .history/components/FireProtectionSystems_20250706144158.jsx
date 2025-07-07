import React, { useState, useEffect } from 'react';

const FireProtectionSystems = () => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) return null;

  const services = [
    { icon: "🚰", title: "Fire Hydrant & Wet Riser Systems" },
    { icon: "💨", title: "Gas-Based Suppression: FM200, CO2, Inergen, Novec 1230" },
    { icon: "🛡️", title: "Passive Fire Protection: Doors, Dampers, Cable Coatings" },
    { icon: "🔍", title: "VESDA (Very Early Smoke Detection Apparatus)" },
    { icon: "🔔", title: "Fire Alarm Annunciation, Strobes, PA Interface" },
    { icon: "🌧️", title: "Sprinkler Systems & Deluge Valves" },
    { icon: "🍳", title: "Kitchen Hood Fire Suppression" },
    { icon: "🔥", title: "Fire Detection: Addressable & Conventional" },
    { icon: "📡", title: "BMS/SCADA Integration" }
  ];

  return (
    <div id='fire-protection-systems' className='w-full bg-gray-50 py-4 min-h-screen flex items-center' style={{paddingTop: '80px'}}>
      <div className='max-w-[1400px] mx-auto px-4 w-full'>
        {/* Header */}
        <div className='text-center mb-6'>
          <h2 className='text-2xl font-bold text-[#2c3e50] mb-2'>Fire Protection & Detection Systems</h2>
          <div className='w-20 h-1 bg-gradient-to-r from-red-400 to-orange-600 mx-auto mb-2'></div>
          <p className='text-gray-600 text-sm max-w-4xl mx-auto'>
            We specialize in integrated fire protection and life safety solutions with compliance to NFPA, NBC, IS, and local Fire Directorate norms.
          </p>
        </div>

        {/* Services Grid - 3 per row */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6'>
          {services.map((service, index) => (
            <div 
              key={index} 
              className='group relative p-4 bg-white shadow-lg rounded-2xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 min-w-[280px]'
            >
              {/* Background gradient on hover */}
              <div className='absolute inset-0 bg-gradient-to-br from-teal-400 to-teal-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
              
              {/* Content */}
              <div className='relative z-10 text-center'>
                <div className='text-2xl mb-2 group-hover:scale-110 transition-transform duration-300'>
                  {service.icon}
                </div>
                <h3 className='text-xs font-semibold text-[#2c3e50] group-hover:text-white transition-colors duration-300 leading-tight'>
                  {service.title}
                </h3>
              </div>

              {/* Decorative elements */}
              <div className='absolute top-3 right-3 w-4 h-4 bg-red-100 rounded-full opacity-50 group-hover:opacity-0 transition-opacity duration-300'></div>
              <div className='absolute bottom-3 left-3 w-3 h-3 bg-orange-50 rounded-full opacity-30 group-hover:opacity-0 transition-opacity duration-300'></div>
            </div>
          ))}
        </div>

        {/* Target Clients Section */}
        <div className='flex justify-center'>
          <div className='group relative p-8 bg-white shadow-lg rounded-2xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 w-full max-w-[calc(100%-2rem)] lg:max-w-[calc(100%-4rem)]'>
            {/* Background gradient on hover */}
            <div className='absolute inset-0 bg-gradient-to-br from-teal-400 to-teal-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
            
            {/* Content */}
            <div className='relative z-10 text-center'>
              <h3 className='text-sm font-bold text-[#2c3e50] group-hover:text-white transition-colors duration-300 mb-3'>Target Clients:</h3>
              
              {/* Client Icons */}
              <div className='flex justify-center items-center gap-8 mb-2'>
                <div className='text-2xl group-hover:scale-110 transition-transform duration-300'>🏢</div>
                <div className='text-2xl group-hover:scale-110 transition-transform duration-300'>🏭</div>
                <div className='text-2xl group-hover:scale-110 transition-transform duration-300'>🖥️</div>
                <div className='text-2xl group-hover:scale-110 transition-transform duration-300'>🏥</div>
                <div className='text-2xl group-hover:scale-110 transition-transform duration-300'>🛍️</div>
              </div>
              
              {/* Client Text */}
              <p className='text-xs font-medium text-gray-600 group-hover:text-white transition-colors duration-300'>
                Residential Towers | Industrial Plants | Data Centers | Hospitals | Malls
              </p>
            </div>

            {/* Decorative elements */}
            <div className='absolute top-3 right-3 w-4 h-4 bg-teal-100 rounded-full opacity-50 group-hover:opacity-0 transition-opacity duration-300'></div>
            <div className='absolute bottom-3 left-3 w-3 h-3 bg-teal-50 rounded-full opacity-30 group-hover:opacity-0 transition-opacity duration-300'></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FireProtectionSystems;