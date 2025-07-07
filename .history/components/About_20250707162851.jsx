import React, { useState } from 'react';
import { Building, Zap, Wrench, Shield, CheckCircle, Target, Users, Award } from 'lucide-react';

const About = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const services = [
    {
      icon: Building,
      title: "MEP Solutions",
      description: "Complete Mechanical, Electrical, Plumbing services",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Zap,
      title: "EPC Lifecycle",
      description: "Engineering, Procurement, and Construction",
      color: "from-teal-500 to-green-500"
    },
    {
      icon: Wrench,
      title: "Technical Excellence",
      description: "Design and execution with engineering rigor",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Shield,
      title: "Safety Compliance",
      description: "Code compliance and long-term reliability",
      color: "from-orange-500 to-red-500"
    }
  ];

  const drivingForces = [
    "Technical excellence in design and execution",
    "Strong coordination between civil and architectural teams",
    "Deep compliance with safety, sustainability, and efficiency norms",
    "Robust after-sales and AMC systems to maintain uptime"
  ];

  return (
    <div id='about' className='w-full bg-gray-50 py-4 min-h-screen flex items-center' style={{ paddingTop: '80px' }}>
      <div className='max-w-[1400px] mx-auto px-4 w-full'>

        {/* Header */}
        <div className='text-center mb-4'>
          <h2 className='text-3xl font-bold text-[#2c3e50] mb-2'>📘 About Us</h2>
          <div className='w-20 h-1 bg-gradient-to-r from-teal-400 to-cyan-600 mx-auto mb-3'></div>
        </div>

        {/* Intro Section */}
        <div className='grid md:grid-cols-2 gap-6 items-center mb-6'>
          <div className='relative group'>
            <div className='absolute inset-0 bg-gradient-to-br from-teal-400 to-cyan-600 rounded-xl rotate-2 group-hover:rotate-6 transition-transform duration-300'></div>
            <div className='relative bg-white rounded-xl p-2 shadow-lg'>
              <div className='h-48 bg-gradient-to-br from-teal-100 to-cyan-100 rounded-lg overflow-hidden'>
                <img 
                  src="/assets/AboutUs.jpg" 
                  alt="MEP Engineering Solutions"
                  className='w-full h-full object-cover rounded-lg'
                />
              </div>
            </div>
          </div>
          <div className='space-y-3'>
            <h3 className='text-sm font-semibold text-[#2c3e50]'>Leading MEP Solutions Provider</h3>
            <p className='text-xs text-gray-600'>
              Paul Delta Arc is a Kolkata-headquartered, turnkey MEP solutions company delivering specialized engineering services across India. We work with developers, builders, government bodies, and infrastructure operators across sectors.
            </p>
            <p className='text-xs text-gray-600'>
              Our delivery spans the EPC lifecycle—from concept to commissioning—with engineering rigor, compliance, and long-term reliability.
            </p>
          </div>
        </div>

        {/* Driving Forces + Stats & Services */}
        <div className='grid md:grid-cols-2 gap-6'>
          {/* Left Column */}
          <div className='space-y-4 flex flex-col'>

            {/* Driving Forces */}
            <div className='bg-white rounded-2xl p-4 shadow-lg border border-gray-100'>
              <h3 className='text-sm font-bold text-[#2c3e50] flex items-center mb-2'>
                <Target className='w-4 h-4 mr-2 text-teal-600' /> We are driven by
              </h3>
              <ul className='space-y-1'>
                {drivingForces.map((force, idx) => (
                  <li key={idx} className='flex items-start text-xs text-gray-600'>
                    <CheckCircle className='w-3 h-3 text-teal-500 mt-1 mr-2 flex-shrink-0' />
                    {force}
                  </li>
                ))}
              </ul>
            </div>

            {/* Stats */}
            <div className='grid grid-cols-3 gap-3'>
              {[
                { icon: Users, title: "Pan-India", desc: "Service Coverage", colors: "from-teal-400 to-cyan-600" },
                { icon: Award, title: "Complete EPC", desc: "Lifecycle Solutions", colors: "from-purple-400 to-pink-600" },
                { icon: Shield, title: "Multi-Sector", desc: "Expertise", colors: "from-orange-400 to-red-600" },
              ].map((item, i) => (
                <div key={i} className='bg-white rounded-2xl p-3 shadow text-center border border-gray-100'>
                  <div className={`w-8 h-8 bg-gradient-to-br ${item.colors} rounded-full flex items-center justify-center mx-auto mb-2`}>
                    <item.icon className='w-4 h-4 text-white' />
                  </div>
                  <h4 className='text-sm font-bold text-[#2c3e50]'>{item.title}</h4>
                  <p className='text-xs text-gray-600'>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Services */}
          <div className='grid grid-cols-2 gap-3 h-full'>
            {services.map((service, i) => (
              <div
                key={i}
                className='group bg-white rounded-2xl shadow-lg border border-gray-100 p-4 hover:shadow-2xl transition duration-300 transform hover:-translate-y-2'
                onMouseEnter={() => setHoveredCard(i)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className={`w-10 h-10 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-3 transition-transform duration-300 ${
                  hoveredCard === i ? 'scale-110 rotate-3' : ''
                }`}>
                  <service.icon className='w-5 h-5 text-white' />
                </div>
                <h4 className='text-sm font-semibold text-[#2c3e50] mb-1'>{service.title}</h4>
                <p className='text-xs text-gray-600'>{service.description}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;
