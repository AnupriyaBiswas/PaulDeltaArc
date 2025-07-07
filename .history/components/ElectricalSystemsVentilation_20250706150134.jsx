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
    <div className='w-full bg-gradient-to-br from-teal-50 to-cyan-50 py-12 min-h-screen'>
      <div className='max-w-[1400px] mx-auto px-6'>
        {/* Header Section */}
        <div className='text-center mb-12'>
          <h1 className='text-4xl md:text-5xl font-bold text-[#2c3e50] mb-4'>
           ⚡ Electrical Systems & Ventilation
          </h1>
          <div className='w-32 h-1 bg-gradient-to-r from-teal-400 to-cyan-600 mx-auto mb-6'></div>
          <p className='text-lg text-gray-600 max-w-6xl mx-auto leading-relaxed'>
            We offer comprehensive HT/LT electrical services backed by licensed professionals and advanced load/energy calculations.
          </p>
        </div>

        {/* Main Services Section */}
        <div className='mb-16'>
          <h2 className='text-2xl font-bold text-[#2c3e50] mb-8 text-center'>
            Scope Includes:
          </h2>
          
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {scopeServices.map((service, index) => (
              <div 
                key={index}
                className='group relative bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100'
              >
                {/* Background gradient on hover */}
                <div className='absolute inset-0 bg-gradient-to-br from-teal-400 to-cyan-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                
                {/* Content */}
                <div className='relative z-10'>
                  <div className='flex items-center mb-4'>
                    <div className='text-3xl mr-3 group-hover:scale-110 transition-transform duration-300'>
                      {service.icon}
                    </div>
                    <div>
                      <h3 className='text-lg font-semibold text-[#2c3e50] group-hover:text-white transition-colors duration-300'>
                        {service.title}
                      </h3>
                      {service.subtitle && (
                        <p className='text-sm text-teal-600 group-hover:text-teal-100 transition-colors duration-300'>
                          {service.subtitle}
                        </p>
                      )}
                    </div>
                  </div>
                  
                  <p className='text-sm text-gray-600 group-hover:text-gray-100 transition-colors duration-300 leading-relaxed'>
                    {service.description}
                  </p>
                </div>

                {/* Decorative elements */}
                <div className='absolute top-4 right-4 w-2 h-2 bg-teal-200 rounded-full opacity-50 group-hover:opacity-0 transition-opacity duration-300'></div>
                <div className='absolute bottom-4 left-4 w-3 h-3 bg-cyan-100 rounded-full opacity-30 group-hover:opacity-0 transition-opacity duration-300'></div>
              </div>
            ))}
          </div>
        </div>

        {/* Specializations Section */}
        <div className='mb-12'>
          <h2 className='text-2xl font-bold text-[#2c3e50] mb-8 text-center'>
            Specialization In:
          </h2>
          
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto'>
            {specializations.map((spec, index) => (
              <div 
                key={index}
                className='group relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100'
              >
                {/* Background gradient on hover */}
                <div className='absolute inset-0 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                
                {/* Content */}
                <div className='relative z-10 text-center'>
                  <div className='text-4xl mb-4 group-hover:scale-110 transition-transform duration-300'>
                    {spec.icon}
                  </div>
                  <h3 className='text-xl font-semibold text-[#2c3e50] group-hover:text-white transition-colors duration-300 mb-3'>
                    {spec.title}
                  </h3>
                  <p className='text-gray-600 group-hover:text-gray-100 transition-colors duration-300 leading-relaxed'>
                    {spec.description}
                  </p>
                </div>

                {/* Decorative elements */}
                <div className='absolute top-4 right-4 w-3 h-3 bg-purple-100 rounded-full opacity-50 group-hover:opacity-0 transition-opacity duration-300'></div>
                <div className='absolute bottom-4 left-4 w-2 h-2 bg-pink-100 rounded-full opacity-30 group-hover:opacity-0 transition-opacity duration-300'></div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className='text-center bg-white p-8 rounded-2xl shadow-lg'>
          <h3 className='text-2xl font-bold text-[#2c3e50] mb-4'>
            Ready to Power Your Project?
          </h3>
          <p className='text-gray-600 mb-6 max-w-2xl mx-auto'>
            Get professional electrical solutions tailored to your needs. Our licensed professionals ensure compliance with all safety standards.
          </p>
          <button className='bg-gradient-to-r from-teal-500 to-cyan-600 text-white px-8 py-3 rounded-full font-semibold hover:from-teal-600 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 shadow-lg'>
            Get Quote Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ElectricalSystemsVentilation;