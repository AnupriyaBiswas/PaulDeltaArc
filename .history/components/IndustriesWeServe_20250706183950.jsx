import React, { useState } from 'react';
import { Building, ShoppingCart, Heart, GraduationCap, Shield, Factory, Hotel, Warehouse, ArrowRight } from 'lucide-react';

// Industry Images
import ResidentialImage from '../public/assets/Industries/residential_towers_gated_communities.jpg';
import CommercialImage from '../public/assets/Industries/commercial_offices_business_parks.jpg';
import RetailImage from '../public/assets/Industries/retail_chains_malls_showrooms.jpg';
import HospitalImage from '../public/assets/Industries/hospitals_healthcare_buildings.jpg';
import CollegeImage from '../public/assets/Industries/colleges_universities_hostels.jpg';
import GovernmentImage from '../public/assets/Industries/government_psu_complexes.jpg';
import IndustrialImage from '../public/assets/Industries/industrial_manufacturing_plants.jpg';
import HotelImage from '../public/assets/Industries/hotels_resorts_banquet_spaces.jpg';
import WarehouseImage from '../public/assets/Industries/warehouses_cold_storage_data_centers.jpg';

const IndustriesWeServe = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const industries = [
    {
      title: "Residential Towers & Gated Communities",
      description: "Comprehensive fire safety solutions for residential complexes",
      icon: Building,
      image: ResidentialImage,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Commercial Offices & Business Parks",
      description: "Professional fire safety systems for corporate environments",
      icon: Building,
      image: CommercialImage,
      color: "from-teal-500 to-green-500"
    },
    {
      title: "Retail Chains, Malls & Showrooms",
      description: "Advanced protection for retail and commercial spaces",
      icon: ShoppingCart,
      image: RetailImage,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Hospitals & Healthcare Buildings",
      description: "Critical fire safety for healthcare facilities",
      icon: Heart,
      image: HospitalImage,
      color: "from-red-500 to-orange-500"
    },
    {
      title: "Colleges, Universities, Hostels",
      description: "Educational institution fire safety solutions",
      icon: GraduationCap,
      image: CollegeImage,
      color: "from-indigo-500 to-purple-500"
    },
    {
      title: "Government & PSU Complexes",
      description: "Secure fire protection for government facilities",
      icon: Shield,
      image: GovernmentImage,
      color: "from-gray-600 to-gray-700"
    },
    {
      title: "Industrial Manufacturing Plants",
      description: "Heavy-duty fire safety for industrial environments",
      icon: Factory,
      image: IndustrialImage,
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Hotels, Resorts & Banquet Spaces",
      description: "Hospitality fire safety and protection systems",
      icon: Hotel,
      image: HotelImage,
      color: "from-emerald-500 to-teal-500"
    },
    {
      title: "Warehouses, Cold Storage, Data Centers",
      description: "Specialized protection for storage and data facilities",
      icon: Warehouse,
      image: WarehouseImage,
      color: "from-cyan-500 to-blue-500"
    }
  ];

  return (
    <div className='w-full bg-gradient-to-br from-teal-50 to-cyan-50 min-h-screen pt-20 pb-8'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full'>
        {/* Header Section */}
        <div className='text-center mb-12'>
          <div className='flex items-center justify-center mb-6'>
            <h1 className='text-4xl md:text-5xl font-bold text-[#2c3e50] mr-4'>
              🏭 Industries We Serve
            </h1>
            
          </div>
          <div className='w-32 h-1 bg-gradient-to-r from-teal-400 to-cyan-600 mx-auto mb-6'></div>
          <p className='text-lg text-gray-600 max-w-3xl mx-auto'>
            Comprehensive fire safety solutions tailored for diverse industries and applications
          </p>
        </div>

        {/* Industries Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-h-[calc(100vh-280px)] overflow-y-auto'>
          {industries.map((industry, index) => (
            <div
              key={index}
              className='group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden cursor-pointer'
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Image Container */}
              <div className='relative h-48 overflow-hidden'>
                <img 
                  src={industry.image} 
                  alt={industry.title}
                  className='w-full h-full object-cover transition-transform duration-300 group-hover:scale-110'
                />
                
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t ${industry.color} opacity-20 group-hover:opacity-30 transition-opacity duration-300`}></div>
                
                {/* Icon Overlay */}
                <div className='absolute top-4 right-4'>
                  <div className={`w-12 h-12 bg-gradient-to-br ${industry.color} rounded-full flex items-center justify-center shadow-lg`}>
                    <industry.icon className='w-6 h-6 text-white' />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className='p-6'>
                <h3 className='text-lg font-bold text-[#2c3e50] mb-3 group-hover:text-teal-600 transition-colors duration-300'>
                  {industry.title}
                </h3>
                <p className='text-gray-600 text-sm mb-4 leading-relaxed'>
                  {industry.description}
                </p>
                
                {/* Action Button */}
                <div className='flex items-center justify-between'>
                  <div className={`w-8 h-1 bg-gradient-to-r ${industry.color} rounded-full`}></div>
                  <div className={`transform transition-all duration-300 ${
                    hoveredCard === index ? 'translate-x-0 opacity-100' : 'translate-x-2 opacity-0'
                  }`}>
                    <ArrowRight className='w-5 h-5 text-teal-600' />
                  </div>
                </div>
              </div>

              {/* Hover Effect Border */}
              <div className={`absolute inset-0 border-2 border-transparent group-hover:border-teal-400 rounded-2xl transition-all duration-300`}></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className='text-center mt-8'>
          <button className='bg-gradient-to-r from-teal-400 to-cyan-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105'>
            Get Industry-Specific Solutions
          </button>
        </div>
      </div>
    </div>
  );
};

export default IndustriesWeServe;