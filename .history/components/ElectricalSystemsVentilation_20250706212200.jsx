import React, { useState, useEffect } from 'react';

const ElectricalSystemsVentilation = () => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) return null;

  const scopeServices = [
    { icon: "⚡", title: "HT & LT Panel Design & Installation", description: "Complete electrical panel solutions for high and low tension systems" },
    { icon: "🔌", title: "Main/Sub Switchboards", subtitle: "PCC, MCC, APFC panels", description: "Power control centers and motor control centers with APFC integration" },
    { icon: "🔧", title: "Cabling Solutions", subtitle: "Laying, Jointing & Termination", description: "Professional cable installation and termination services" },
    { icon: "🌍", title: "Earthing Systems", subtitle: "Conventional & Chemical", description: "Comprehensive earthing solutions for electrical safety" },
    { icon: "🔄", title: "Power Equipment", subtitle: "Transformers, DGs, Sync Panels", description: "Installation and maintenance of power generation equipment" },
    { icon: "🏢", title: "Internal & External Electrification", description: "Complete electrical infrastructure for buildings and facilities" },
    { icon: "💡", title: "Lighting Solutions", subtitle: "Layouts, Emergency Lights", description: "Efficient lighting design and emergency lighting systems" },
    { icon: "💨", title: "Ventilation Systems", subtitle: "Kitchens, Basements, Toilets", description: "Exhaust and ventilation solutions for all spaces" },
    { icon: "🔋", title: "Energy Systems", subtitle: "Energy-Saving & UPS Integration", description: "Smart energy solutions with UPS backup systems" }
  ];

  const specializations = [
    { icon: "🏗️", title: "Stairwell Pressurization Systems", description: "Advanced fire safety pressurization for emergency exits" },
    { icon: "📱", title: "Smart Metering & Remote Control", description: "IoT-enabled metering with remote monitoring capabilities" }
  ];

  return (
    <div id='electrical-systems-ventilation' className='w-full bg-gray-50 py-4 min-h-screen flex items-center' style={{paddingTop: '80px'}}>
      <div className='max-w-[1400px] mx-auto px-4 w-full'>
        {/* Header Section */}
        <div className='text-center mb-4'>
          <h2 className='text-3xl font-bold text-[#2c3e50] mb-2'>
            ⚡ Electrical Systems & Ventilation
          </h2>
          <div className='w-20 h-1 bg-gradient-to-r from-teal-400 to-cyan-600 mx-auto mb-3'></div>
          <p className='text-gray-600 text-sm max-w-5xl mx-auto'>
            We offer comprehensive HT/LT electrical services backed by licensed professionals and advanced load/energy calculations.
          </p>
        </div>

        {/* Main Services Section */}
        <div className='mb-4'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {scopeServices.map((service, index) => (
              <div
                key={index}
                className='group relative bg-white p-4 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 min-w-[280px]'
              >
                {/* Background gradient on hover */}
                <div className='absolute inset-0 bg-gradient-to-br from-teal-400 to-cyan-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>

                {/* Content */}
                <div className='relative z-10'>
                  <div className='flex items-center mb-3'>
                    <div className='text-3xl mr-3 group-hover:scale-110 transition-transform duration-300'>
                      {service.icon}
                    </div>
                    <div>
                      <h3 className='text-sm font-semibold text-[#2c3e50] group-hover:text-white transition-colors duration-300 leading-tight'>
                        {service.title}
                      </h3>
                      {service.subtitle && (
                        <p className='text-xs text-teal-600 group-hover:text-teal-100 transition-colors duration-300'>
                          {service.subtitle}
                        </p>
                      )}
                    </div>
                  </div>

                  <p className='text-xs text-gray-600 group-hover:text-gray-100 transition-colors duration-300 leading-relaxed'>
                    {service.description}
                  </p>
                </div>

                {/* Decorative elements */}
                <div className='absolute top-3 right-3 w-4 h-4 bg-teal-100 rounded-full opacity-50 group-hover:opacity-0 transition-opacity duration-300'></div>
                <div className='absolute bottom-3 left-3 w-3 h-3 bg-cyan-50 rounded-full opacity-30 group-hover:opacity-0 transition-opacity duration-300'></div>
              </div>
            ))}
          </div>
        </div>

        {/* Specializations Section - Premium Style */}
        <div className='mb-4'>
          {/* Special Header with Premium Styling */}
          <div className='text-center mb-4 relative'>
            <div className='absolute inset-0 bg-gradient-to-r from-transparent via-purple-100 to-transparent h-full'></div>
            <div className='relative z-10 py-2'>
              <h3 className='text-lg font-bold text-[#2c3e50] mb-2'>
                ✨ Premium Specializations
              </h3>
              <div className='w-16 h-1 bg-gradient-to-r from-purple-400 to-pink-500 mx-auto'></div>
            </div>
          </div>

          {/* Horizontal Layout for Specializations */}
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            {specializations.map((spec, index) => (
              <div
                key={index}
                className='group relative bg-gradient-to-br from-purple-50 to-pink-50 p-4 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-2 border-purple-200 hover:border-purple-300'
              >
                {/* Animated Background */}
                <div className='absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>
                
                {/* Sparkle Effects */}
                <div className='absolute top-2 right-2 w-3 h-3 bg-purple-300 rounded-full opacity-70 group-hover:opacity-0 transition-opacity duration-300 animate-pulse'></div>
                <div className='absolute top-6 right-6 w-2 h-2 bg-pink-300 rounded-full opacity-50 group-hover:opacity-0 transition-opacity duration-300 animate-pulse' style={{animationDelay: '0.5s'}}></div>
                <div className='absolute bottom-4 left-2 w-2 h-2 bg-purple-200 rounded-full opacity-60 group-hover:opacity-0 transition-opacity duration-300 animate-pulse' style={{animationDelay: '1s'}}></div>

                {/* Content */}
                <div className='relative z-10 flex items-center'>
                  <div className='text-4xl mr-4 group-hover:scale-110 transition-transform duration-500 filter group-hover:drop-shadow-lg'>
                    {spec.icon}
                  </div>
                  <div className='flex-1'>
                    <h3 className='text-sm font-bold text-[#2c3e50] group-hover:text-white transition-colors duration-300 mb-2 leading-tight'>
                      {spec.title}
                    </h3>
                    <p className='text-xs text-purple-700 group-hover:text-purple-100 transition-colors duration-300 leading-relaxed'>
                      {spec.description}
                    </p>
                  </div>
                </div>

                {/* Premium Badge */}
                <div className='absolute -top-2 -right-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs px-2 py-1 rounded-full shadow-lg group-hover:scale-110 transition-transform duration-300'>
                  Premium
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ElectricalSystemsVentilation;