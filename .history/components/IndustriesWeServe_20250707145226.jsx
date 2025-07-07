import React from 'react';
import {
  Building,
  ShoppingCart,
  Heart,
  GraduationCap,
  Shield,
  Factory,
  Hotel,
  Warehouse,
  BusFront,
} from 'lucide-react';

const industries = [
  {
    title: 'Residential Communities',
    icon: Building,
    description: 'Fire safety systems for residential towers & gated communities',
    color: 'from-blue-500 to-cyan-500',
    bgPattern: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  },
  {
    title: 'Business Parks',
    icon: Building,
    description: 'Secure fire protection for commercial offices & business hubs',
    color: 'from-teal-500 to-green-500',
    bgPattern: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
  },
  {
    title: 'Retail & Malls',
    icon: ShoppingCart,
    description: 'Fire suppression and evacuation for retail & shopping areas',
    color: 'from-purple-500 to-pink-500',
    bgPattern: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
  },
  {
    title: 'Hospitals',
    icon: Heart,
    description: 'Life-critical fire safety for healthcare facilities',
    color: 'from-red-500 to-orange-500',
    bgPattern: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
  },
  {
    title: 'Colleges & Hostels',
    icon: GraduationCap,
    description: 'Fire safety for educational campuses & hostels',
    color: 'from-indigo-500 to-purple-500',
    bgPattern: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
  },
  {
    title: 'Govt. Complexes',
    icon: Shield,
    description: 'Compliance-driven safety for government buildings',
    color: 'from-gray-600 to-gray-700',
    bgPattern: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
  },
  {
    title: 'Manufacturing Plants',
    icon: Factory,
    description: 'Industrial-grade fire protection for manufacturing units',
    color: 'from-orange-500 to-red-500',
    bgPattern: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
  },
  {
    title: 'Hotels & Resorts',
    icon: Hotel,
    description: 'Guest safety systems for hotels, resorts & banquets',
    color: 'from-emerald-500 to-teal-500',
    bgPattern: 'linear-gradient(135deg, #a8caba 0%, #5d4e75 100%)',
  },
  {
    title: 'Warehouses & Data',
    icon: Warehouse,
    description: 'Fire detection for storage, cold chains & data centers',
    color: 'from-cyan-500 to-blue-500',
    bgPattern: 'linear-gradient(135deg, #dad299 0%, #b0dab9 100%)',
  },
  {
    title: 'Transportation Infra',
    icon: BusFront,
    description: 'Fire safety for airports, metro, rail & transit systems',
    color: 'from-yellow-500 to-orange-600',
    bgPattern: 'linear-gradient(135deg, #89f7fe 0%, #66a6ff 100%)',
  },
];

const IndustriesWeServe = () => {
  return (
    <div className="w-full bg-gradient-to-br from-teal-50 to-cyan-50 py-6 px-2 md:px-10 min-h-screen flex flex-col justify-center items-center">
      {/* Header */}
      <div className="text-center mb-6">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#2c3e50]">
          🏭 Industries We Serve
        </h1>
        <div className="w-20 h-1 bg-gradient-to-r from-teal-400 to-cyan-600 mx-auto my-2" />
        <p className="text-xs sm:text-sm text-gray-600 max-w-xl mx-auto">
          Fire safety solutions tailored for every sector, with trusted expertise.
        </p>
      </div>

      {/* Grid - Optimized for better card proportions */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 w-full max-w-7xl">
        {industries.map((industry, index) => (
          <div
            key={index}
            className="group bg-white rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 overflow-hidden cursor-pointer flex flex-col"
            style={{ aspectRatio: '3/4' }}
          >
            {/* Visual Header with Pattern Background */}
            <div 
              className="relative h-[55%] w-full flex-shrink-0 overflow-hidden flex items-center justify-center"
              style={{ 
                background: industry.bgPattern,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              {/* Large Icon as Visual Focus */}
              <div className="relative z-10 w-16 h-16 sm:w-20 sm:h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform duration-300">
                <industry.icon className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
              </div>
              
              {/* Subtle overlay for better text readability */}
              <div className="absolute inset-0 bg-black bg-opacity-10 group-hover:bg-opacity-5 transition-all duration-300" />
            </div>

            {/* Content Section - Optimized Height */}
            <div className={`flex flex-col justify-start p-3 sm:p-4 bg-gradient-to-br ${industry.color} text-white flex-1`}>
              <div className="flex items-start gap-2 mb-2">
                <div className="w-4 h-4 sm:w-5 sm:h-5 bg-white bg-opacity-20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <industry.icon className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" />
                </div>
                <h3 className="text-xs sm:text-sm font-semibold leading-tight">{industry.title}</h3>
              </div>
              <p className="text-xs opacity-90 leading-tight line-clamp-3 overflow-hidden">
                {industry.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IndustriesWeServe;