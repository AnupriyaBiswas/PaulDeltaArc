import React, { useState } from 'react';
import {
  Zap,
  Settings,
  Users,
  FileText,
  ChevronRight,
  CheckCircle,
} from 'lucide-react';

const OurApproach = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const approaches = [
    {
      title: 'Design-Led Execution',
      description: 'Layouts that reduce retrofit errors and material wastage.',
      icon: Zap,
      color: 'from-blue-500 to-cyan-500',
      details: [
        'Precision-engineered layouts',
        'Minimized retrofit requirements',
        'Optimized material utilization',
        'Error-free implementation',
      ],
    },
    {
      title: 'Value Engineering',
      description:
        'Better performance using fewer components, reducing costs.',
      icon: Settings,
      color: 'from-teal-500 to-green-500',
      details: [
        'Component optimization',
        'Cost-effective solutions',
        'Enhanced performance metrics',
        'Streamlined system design',
      ],
    },
    {
      title: 'Trained Execution Team',
      description:
        'From supervisors to pipe fitters and panel technicians, our team is process-driven.',
      icon: Users,
      color: 'from-purple-500 to-pink-500',
      details: [
        'Skilled supervisors',
        'Expert pipe fitters',
        'Certified panel technicians',
        'Process-driven methodology',
      ],
    },
    {
      title: 'Documentation & Handover',
      description:
        'As-built drawings, O&M Manuals, and training post-handover.',
      icon: FileText,
      color: 'from-orange-500 to-red-500',
      details: [
        'Comprehensive as-built drawings',
        'Detailed O&M manuals',
        'Post-handover training',
        'Complete documentation package',
      ],
    },
  ];

  return (
    <div className='w-full bg-gradient-to-br from-teal-50 to-cyan-50 h-screen pt-24 px-2 md:px-6'>
      <div className='max-w-7xl mx-auto h-full flex flex-col justify-between'>
        {/* Header */}
        <div className='text-center'>
          <h1 className='text-2xl sm:text-3xl md:text-4xl font-bold text-[#2c3e50]'>
            🧩 Our Approach
          </h1>
          <div className='w-20 h-1 bg-gradient-to-r from-teal-400 to-cyan-600 mx-auto my-2' />
          <p className='text-xs sm:text-sm text-gray-600 max-w-4xl mx-auto px-2 mb-2'>

            Our systematic approach ensures excellence in every project through
            proven methodologies and expert execution.
          </p>
        </div>

        {/* Cards */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-1 px-1'>
          {approaches.map((approach, index) => (
            <div
              key={index}
              className='group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 overflow-hidden cursor-pointer p-4 flex flex-col justify-between'
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Top Section with Icon + Text Side-by-Side */}
              <div className='flex items-start justify-between mb-4'>
                <div className='flex items-start space-x-3'>
                  <div
                    className={`w-12 h-12 bg-gradient-to-br ${approach.color} rounded-xl flex items-center justify-center shadow-md`}
                  >
                    <approach.icon className='w-6 h-6 text-white' />
                  </div>
                  <div>
                    <h3 className='text-base font-bold text-[#2c3e50]'>
                      {approach.title}
                    </h3>
                    <p className='text-sm text-gray-600'>{approach.description}</p>
                  </div>
                </div>
                <ChevronRight
                  className={`w-5 h-5 text-teal-600 transform transition-all duration-300 ${
                    hoveredCard === index
                      ? 'translate-x-0 opacity-100'
                      : 'translate-x-2 opacity-0'
                  }`}
                />
              </div>

              {/* Feature List */}
              <div className='space-y-2'>
                {approach.details.map((detail, detailIndex) => (
                  <div
                    key={detailIndex}
                    className='flex items-start text-sm text-gray-700'
                  >
                    <CheckCircle className='w-4 h-4 mr-2 mt-[2px] text-teal-500' />
                    {detail}
                  </div>
                ))}
              </div>

              {/* Bottom Accent */}
              <div
                className={`h-1 mt-4 bg-gradient-to-r ${approach.color} transform transition-all duration-300 ${
                  hoveredCard === index ? 'scale-x-100' : 'scale-x-0'
                } origin-left`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurApproach;
