import React, { useState, useEffect } from 'react';

const PlumbingPublicHealth = () => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) return null;

  const scopeServices = [
    { icon: "🚰", title: "Cold & Hot Water Distribution", description: "Efficient water distribution systems for residential and commercial buildings" },
    { icon: "💧", title: "Hydro-pneumatic Systems", subtitle: "Pressurized Water Systems", description: "Advanced pressurized water supply solutions for multi-story buildings" },
    { icon: "🔧", title: "STP & ETP Solutions", subtitle: "Design, Supply & Erection", description: "Sewage and effluent treatment plants for water management" },
    { icon: "♻️", title: "Grey Water Recycling", description: "Sustainable water recycling systems for environmental conservation" },
    { icon: "🌧️", title: "Rainwater Harvesting", subtitle: "& Drainage Systems", description: "Rainwater collection and drainage solutions for water conservation" },
    { icon: "☀️", title: "Solar Water Heating", description: "Energy-efficient solar water heating systems for sustainable operations" },
    { icon: "🛡️", title: "Water Treatment Systems", subtitle: "RO, UF, Softening Systems", description: "Complete water purification and treatment solutions" },
    { icon: "🏊", title: "Swimming Pool Systems", subtitle: "Filtration & Plumbing", description: "Professional pool filtration and plumbing installations" },
    { icon: "🏥", title: "Hospital-Grade Installations", subtitle: "Sanitary Installations", description: "Specialized sanitary systems for healthcare facilities" },
    { icon: "♿", title: "Accessible Plumbing", subtitle: "Shaft Design with Access Planning", description: "Universal design plumbing solutions with proper access planning" }
  ];

  const executionAspects = [
    { icon: "🔗", title: "Advanced Piping Systems", subtitle: "HDPE, CPVC, PPR, GI piping", description: "High-quality piping materials for durable water distribution" },
    { icon: "🔍", title: "Civil Integration", subtitle: "Manhole & Inspection Chambers", description: "Seamless integration with civil infrastructure and inspection systems" }
  ];

  return (
    <div className='w-full bg-gradient-to-br from-teal-50 to-cyan-50 py-12 min-h-screen'>
      <div className='max-w-[1400px] mx-auto px-6'>
        {/* Header Section */}
        <div className='text-center mb-6'>
          <h1 className='text-4xl md:text-5xl font-bold text-[#2c3e50] mb-4'>
            🚰 Plumbing & Public Health Engineering
          </h1>
          <div className='w-32 h-1 bg-gradient-to-r from-teal-400 to-cyan-600 mx-auto mb-6'></div>
          <p className='text-base text-gray-600 max-w-5xl mx-auto leading-relaxed'>
            We deliver water systems aligned with LEED & IGBC green building norms, ensuring quality water management, hygiene, and resource conservation.
          </p>
        </div>

        {/* Main Services Section */}
        <div className='mb-16'>
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

        {/* Execution Aspects Section */}
        <div className='mb-12'>
          <h2 className='text-2xl font-bold text-[#2c3e50] mb-8 text-center'>
            Execution Aspects:
          </h2>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto'>
            {executionAspects.map((aspect, index) => (
              <div
                key={index}
                className='group relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100'
              >
                {/* Background gradient on hover */}
                <div className='absolute inset-0 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>

                {/* Content */}
                <div className='relative z-10 text-center'>
                  <div className='text-4xl mb-4 group-hover:scale-110 transition-transform duration-300'>
                    {aspect.icon}
                  </div>
                  <h3 className='text-xl font-semibold text-[#2c3e50] group-hover:text-white transition-colors duration-300 mb-3'>
                    {aspect.title}
                  </h3>
                  {aspect.subtitle && (
                    <p className='text-sm text-purple-600 group-hover:text-purple-100 transition-colors duration-300 mb-3'>
                      {aspect.subtitle}
                    </p>
                  )}
                  <p className='text-gray-600 group-hover:text-gray-100 transition-colors duration-300 leading-relaxed'>
                    {aspect.description}
                  </p>
                </div>

                {/* Decorative elements */}
                <div className='absolute top-4 right-4 w-3 h-3 bg-purple-100 rounded-full opacity-50 group-hover:opacity-0 transition-opacity duration-300'></div>
                <div className='absolute bottom-4 left-4 w-2 h-2 bg-pink-100 rounded-full opacity-30 group-hover:opacity-0 transition-opacity duration-300'></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlumbingPublicHealth;