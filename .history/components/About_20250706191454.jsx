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
    <div id='about' className='w-full bg-gradient-to-br from-teal-50 to-cyan-50 py-16'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        
        {/* Header Section */}
        <div className='text-center mb-16'>
          <div className='flex items-center justify-center mb-6'>
            <h1 className='text-4xl md:text-5xl font-bold text-[#2c3e50] mr-4'>
              About Us
            </h1>
            <div className='flex items-center'>
              <div className='w-12 h-12 bg-gradient-to-br from-teal-400 to-cyan-600 rounded-lg flex items-center justify-center mr-3'>
                <span className='text-white font-bold text-xl'>P</span>
              </div>
              <div>
                <div className='text-[#2c3e50] font-bold text-lg'>Paul Delta Arc</div>
                <div className='text-teal-600 text-sm'>MEP Solutions Company</div>
              </div>
            </div>
          </div>
          <div className='w-32 h-1 bg-gradient-to-r from-teal-400 to-cyan-600 mx-auto mb-6'></div>
        </div>

        {/* Main Content Section */}
        <div className='grid lg:grid-cols-2 gap-12 items-center mb-16'>
          
          {/* Left Side - Image */}
          <div className='w-full'>
            <div className='relative group'>
              <div className='absolute inset-0 bg-gradient-to-br from-teal-400 to-cyan-600 rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform duration-300'></div>
              <div className='relative bg-white rounded-2xl p-2 shadow-xl'>
                <div className='w-full h-80 bg-gradient-to-br from-teal-100 to-cyan-100 rounded-xl flex items-center justify-center'>
                  <div className='text-center text-teal-600'>
                    <Building className='w-24 h-24 mx-auto mb-4' />
                    <h3 className='text-2xl font-bold'>MEP Engineering</h3>
                    <p className='text-teal-500'>Professional Solutions</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className='space-y-6'>
            <div>
              <h2 className='text-3xl font-bold text-[#2c3e50] mb-4'>
                Leading MEP Solutions Provider
              </h2>
              <p className='text-gray-600 text-lg leading-relaxed'>
                Paul Delta Arc is a Kolkata-headquartered, turnkey MEP (Mechanical, Electrical, Plumbing) solutions company providing highly specialized engineering services across India. We work with developers, builders, government bodies, and infrastructure operators to execute large-scale and mid-sized projects across public, private, residential, commercial, and industrial sectors.
              </p>
            </div>

            <div>
              <p className='text-gray-600 text-lg leading-relaxed'>
                Our service delivery model spans the complete EPC (Engineering, Procurement, and Construction) lifecycle—ensuring that from concept to commissioning, every aspect is executed with engineering rigor, code compliance, and long-term reliability.
              </p>
            </div>

            <div className='bg-white rounded-xl p-6 shadow-lg'>
              <h3 className='text-xl font-bold text-[#2c3e50] mb-4 flex items-center'>
                <Target className='w-6 h-6 mr-2 text-teal-600' />
                We are driven by
              </h3>
              <ul className='space-y-3'>
                {drivingForces.map((force, index) => (
                  <li key={index} className='flex items-start'>
                    <CheckCircle className='w-5 h-5 text-teal-500 mt-1 mr-3 flex-shrink-0' />
                    <span className='text-gray-700'>{force}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
          {services.map((service, index) => (
            <div
              key={index}
              className='group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 p-6 cursor-pointer'
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center shadow-lg mb-4 transform transition-all duration-300 ${
                hoveredCard === index ? 'scale-110 rotate-3' : ''
              }`}>
                <service.icon className='w-8 h-8 text-white' />
              </div>
              <h3 className='text-lg font-bold text-[#2c3e50] mb-2'>
                {service.title}
              </h3>
              <p className='text-gray-600 text-sm'>
                {service.description}
              </p>
              <div className={`w-8 h-1 bg-gradient-to-r ${service.color} rounded-full mt-4 transform transition-all duration-300 ${
                hoveredCard === index ? 'scale-x-100' : 'scale-x-0'
              } origin-left`}></div>
            </div>
          ))}
        </div>

        {/* Bottom Stats Section */}
        <div className='mt-16 bg-white rounded-2xl shadow-xl p-8'>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8 text-center'>
            <div className='space-y-2'>
              <div className='w-16 h-16 bg-gradient-to-br from-teal-400 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4'>
                <Users className='w-8 h-8 text-white' />
              </div>
              <h3 className='text-2xl font-bold text-[#2c3e50]'>Pan-India</h3>
              <p className='text-gray-600'>Service Coverage</p>
            </div>
            <div className='space-y-2'>
              <div className='w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4'>
                <Award className='w-8 h-8 text-white' />
              </div>
              <h3 className='text-2xl font-bold text-[#2c3e50]'>Complete EPC</h3>
              <p className='text-gray-600'>Lifecycle Solutions</p>
            </div>
            <div className='space-y-2'>
              <div className='w-16 h-16 bg-gradient-to-br from-orange-400 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4'>
                <Shield className='w-8 h-8 text-white' />
              </div>
              <h3 className='text-2xl font-bold text-[#2c3e50]'>Multi-Sector</h3>
              <p className='text-gray-600'>Expertise</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;