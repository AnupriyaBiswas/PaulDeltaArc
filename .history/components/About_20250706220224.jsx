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
    <div id='about' className='w-full bg-gradient-to-br from-teal-50 to-cyan-50 py-8 px-4 min-h-screen flex items-center'>
      <div className='max-w-7xl mx-auto w-full'>
        {/* Header */}
        <div className='text-center mb-8'>
          <h1 className='text-3xl md:text-4xl font-bold text-[#2c3e50] mb-2'>About Us</h1>
          <div className='w-24 h-1 bg-gradient-to-r from-teal-400 to-cyan-600 mx-auto'></div>
        </div>

        {/* Main Section */}
        <div className='grid md:grid-cols-2 gap-6 items-center mb-8'>
          {/* Visual */}
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

          {/* Text Content */}
          <div className='space-y-3'>
            <h2 className='text-xl font-bold text-[#2c3e50]'>Leading MEP Solutions Provider</h2>
            <p className='text-gray-600 text-sm'>
              Paul Delta Arc is a Kolkata-headquartered, turnkey MEP solutions company delivering specialized engineering services across India. We work with developers, builders, government bodies, and infrastructure operators across sectors.
            </p>
            <p className='text-gray-600 text-sm'>
              Our delivery spans the EPC lifecycle—from concept to commissioning—with engineering rigor, compliance, and long-term reliability.
            </p>
          </div>
        </div>

        {/* Driving Forces and Services Combined */}
        <div className='grid md:grid-cols-2 gap-6'>
          {/* Left Column - Driving Forces and Stats */}
          <div className='space-y-4'>
            {/* Driving Forces */}
            <div className='bg-white rounded-xl p-4 shadow'>
              <h3 className='text-lg font-bold text-[#2c3e50] flex items-center mb-2'>
                <Target className='w-5 h-5 mr-2 text-teal-600' /> We are driven by
              </h3>
              <ul className='space-y-1'>
                {drivingForces.map((force, idx) => (
                  <li key={idx} className='flex items-start text-xs text-gray-700'>
                    <CheckCircle className='w-3 h-3 text-teal-500 mt-1 mr-2 flex-shrink-0' />
                    {force}
                  </li>
                ))}
              </ul>
            </div>

            {/* Stats Section */}
            <div className='grid grid-cols-3 gap-3'>
              <div className='bg-white rounded-xl p-3 shadow text-center'>
                <div className='w-8 h-8 bg-gradient-to-br from-teal-400 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-2'>
                  <Users className='w-4 h-4 text-white' />
                </div>
                <h4 className='text-sm font-bold text-[#2c3e50]'>Pan-India</h4>
                <p className='text-xs text-gray-600'>Service Coverage</p>
              </div>
              <div className='bg-white rounded-xl p-3 shadow text-center'>
                <div className='w-8 h-8 bg-gradient-to-br from-purple-400 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-2'>
                  <Award className='w-4 h-4 text-white' />
                </div>
                <h4 className='text-sm font-bold text-[#2c3e50]'>Complete EPC</h4>
                <p className='text-xs text-gray-600'>Lifecycle Solutions</p>
              </div>
              <div className='bg-white rounded-xl p-3 shadow text-center'>
                <div className='w-8 h-8 bg-gradient-to-br from-orange-400 to-red-600 rounded-full flex items-center justify-center mx-auto mb-2'>
                  <Shield className='w-4 h-4 text-white' />
                </div>
                <h4 className='text-sm font-bold text-[#2c3e50]'>Multi-Sector</h4>
                <p className='text-xs text-gray-600'>Expertise</p>
              </div>
            </div>
          </div>

          {/* Services - Right Half */}
          <div className='grid grid-cols-2 gap-3'>
            {services.map((service, i) => (
              <div
                key={i}
                className='group bg-white rounded-xl shadow p-4 hover:shadow-lg transition duration-200'
                onMouseEnter={() => setHoveredCard(i)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className={`w-10 h-10 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-3 transition-transform duration-300 ${
                  hoveredCard === i ? 'scale-110 rotate-3' : ''
                }`}>
                  <service.icon className='w-5 h-5 text-white' />
                </div>
                <h4 className='text-sm font-bold text-[#2c3e50] mb-1'>{service.title}</h4>
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