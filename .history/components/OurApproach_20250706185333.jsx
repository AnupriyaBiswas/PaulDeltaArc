import React, { useState } from 'react';
import { Zap, Settings, Users, FileText, ChevronRight, CheckCircle } from 'lucide-react';

const OurApproach = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const approaches = [
    {
      title: "Design-Led Execution",
      description: "Layouts that reduce retrofit errors and material wastage.",
      icon: Zap,
      color: "from-blue-500 to-cyan-500",
      details: [
        "Precision-engineered layouts",
        "Minimized retrofit requirements",
        "Optimized material utilization",
        "Error-free implementation"
      ]
    },
    {
      title: "Value Engineering",
      description: "Better performance using fewer components, reducing costs.",
      icon: Settings,
      color: "from-teal-500 to-green-500",
      details: [
        "Component optimization",
        "Cost-effective solutions",
        "Enhanced performance metrics",
        "Streamlined system design"
      ]
    },
    {
      title: "Trained Execution Team",
      description: "From supervisors to pipe fitters and panel technicians, our team is process-driven.",
      icon: Users,
      color: "from-purple-500 to-pink-500",
      details: [
        "Skilled supervisors",
        "Expert pipe fitters",
        "Certified panel technicians",
        "Process-driven methodology"
      ]
    },
    {
      title: "Documentation & Handover",
      description: "As-built drawings, O&M Manuals, and training post-handover.",
      icon: FileText,
      color: "from-orange-500 to-red-500",
      details: [
        "Comprehensive as-built drawings",
        "Detailed O&M manuals",
        "Post-handover training",
        "Complete documentation package"
      ]
    }
  ];

  return (
    <div className='w-full bg-gradient-to-br from-teal-50 to-cyan-50 min-h-screen pt-20 pb-8'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Header Section */}
        <div className='text-center mb-16'>
          <div className='flex items-center justify-center mb-6'>
            <h1 className='text-4xl md:text-5xl font-bold text-[#2c3e50] mr-4'>
              Our Approach
            </h1>
            
          </div>
          <div className='w-32 h-1 bg-gradient-to-r from-teal-400 to-cyan-600 mx-auto mb-6'></div>
          <p className='text-lg text-gray-600 max-w-xl mx-auto'>
            Our systematic approach ensures excellence in every project through proven methodologies and expert execution
          </p>
        </div>

        {/* Main Content Grid */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12'>
          {approaches.map((approach, index) => (
            <div
              key={index}
              className='group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 overflow-hidden cursor-pointer'
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Card Header */}
              <div className='relative p-8 pb-6'>
                <div className='flex items-start justify-between mb-6'>
                  <div className={`w-16 h-16 bg-gradient-to-br ${approach.color} rounded-2xl flex items-center justify-center shadow-lg transform transition-all duration-300 ${
                    hoveredCard === index ? 'scale-110 rotate-3' : ''
                  }`}>
                    <approach.icon className='w-8 h-8 text-white' />
                  </div>
                  <div className={`transform transition-all duration-300 ${
                    hoveredCard === index ? 'translate-x-0 opacity-100' : 'translate-x-2 opacity-0'
                  }`}>
                    <ChevronRight className='w-6 h-6 text-teal-600' />
                  </div>
                </div>

                <h3 className='text-2xl font-bold text-[#2c3e50] mb-4 group-hover:text-teal-600 transition-colors duration-300'>
                  {approach.title}
                </h3>
                <p className='text-gray-600 text-base leading-relaxed mb-6'>
                  {approach.description}
                </p>

                {/* Feature List */}
                <div className='space-y-3'>
                  {approach.details.map((detail, detailIndex) => (
                    <div key={detailIndex} className='flex items-center'>
                      <CheckCircle className={`w-5 h-5 mr-3 text-teal-500 flex-shrink-0`} />
                      <span className='text-gray-700 text-sm'>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Accent */}
              <div className={`h-2 bg-gradient-to-r ${approach.color} transform transition-all duration-300 ${
                hoveredCard === index ? 'scale-x-100' : 'scale-x-0'
              } origin-left`}></div>

              {/* Hover Effect Border */}
              <div className={`absolute inset-0 border-2 border-transparent group-hover:border-teal-400 rounded-2xl transition-all duration-300`}></div>
            </div>
          ))}
        </div>

        {/* Process Flow Section */}
        <div className='bg-white rounded-3xl shadow-xl p-8 mb-12'>
          <h2 className='text-3xl font-bold text-[#2c3e50] text-center mb-8'>
            Our Process Flow
          </h2>
          <div className='flex flex-col md:flex-row items-center justify-between'>
            {approaches.map((approach, index) => (
              <div key={index} className='flex flex-col items-center text-center mb-6 md:mb-0'>
                <div className={`w-20 h-20 bg-gradient-to-br ${approach.color} rounded-full flex items-center justify-center shadow-lg mb-4`}>
                  <approach.icon className='w-10 h-10 text-white' />
                </div>
                <h4 className='text-lg font-semibold text-[#2c3e50] mb-2'>
                  {approach.title}
                </h4>
                <div className='w-16 h-1 bg-gradient-to-r from-teal-400 to-cyan-600 rounded-full mb-2'></div>
                <span className='text-sm text-gray-500 font-medium'>Step {index + 1}</span>
                {index < approaches.length - 1 && (
                  <div className='hidden md:block absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-8'>
                    <ChevronRight className='w-6 h-6 text-teal-400' />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className='text-center'>
          <div className='bg-gradient-to-r from-teal-400 to-cyan-600 rounded-2xl p-8 text-white'>
            <h3 className='text-2xl font-bold mb-4'>
              Ready to Experience Our Approach?
            </h3>
            <p className='text-teal-100 mb-6 max-w-2xl mx-auto'>
              Let us demonstrate how our systematic approach can deliver exceptional results for your fire safety project
            </p>
            <button className='bg-white text-teal-600 px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105'>
              Start Your Project
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurApproach;