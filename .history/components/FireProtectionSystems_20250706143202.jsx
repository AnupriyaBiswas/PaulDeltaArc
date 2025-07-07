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
    <div id='fire-protection-systems' className='w-full bg-gray-50 py-8 min-h-screen flex items-center'>
      <div className='max-w-[1400px] mx-auto px-4 w-full'>
        {/* Header */}
        <div className='text-center mb-8'>
          <h2 className='text-3xl font-bold text-[#2c3e50] mb-2'>Fire Protection & Detection Systems</h2>
          <div className='w-20 h-1 bg-gradient-to-r from-red-400 to-orange-600 mx-auto mb-4'></div>
          <p className='text-gray-600 text-base max-w-4xl mx-auto'>
            We specialize in integrated fire protection and life safety solutions with compliance to NFPA, NBC, IS, and local Fire Directorate norms.
          </p>
        </div>

        {/* Services Grid - 3 per row */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8'>
          {services.map((service, index) => (
            <div 
              key={index} 
              className='group relative p-6 bg-white shadow-lg rounded-2xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 min-w-[320px]'
            >
              {/* Background gradient on hover */}
              <div className='absolute inset-0 bg-gradient-to-br from-red-400 to-orange-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
              
              {/* Content */}
              <div className='relative z-10 text-center'>
                <div className='text-3xl mb-3 group-hover:scale-110 transition-transform duration-300'>
                  {service.icon}
                </div>
                <h3 className='text-sm font-semibold text-[#2c3e50] group-hover:text-white transition-colors duration-300 leading-tight'>
                  {service.title}
                </h3>
              </div>

              {/* Decorative elements */}
              <div className='absolute top-4 right-4 w-6 h-6 bg-red-100 rounded-full opacity-50 group-hover:opacity-0 transition-opacity duration-300'></div>
              <div className='absolute bottom-4 left-4 w-4 h-4 bg-orange-50 rounded-full opacity-30 group-hover:opacity-0 transition-opacity duration-300'></div>
            </div>
          ))}
        </div>

        {/* Target Clients Section */}
        <div className='text-center'>
          <div className='bg-gradient-to-r from-teal-400 to-teal-600 rounded-2xl p-6 shadow-lg border border-gray-100'>
            <h3 className='text-xl font-bold text-white mb-2'>Target Clients:</h3>
            <p className='text-white text-sm font-medium'>
              🏢 Residential Towers | 🏭 Industrial Plants | 🖥️ Data Centers | 🏥 Hospitals | 🛍️ Malls
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FireProtectionSystems;