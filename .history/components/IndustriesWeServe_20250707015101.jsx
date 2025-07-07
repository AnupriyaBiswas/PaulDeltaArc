import React, { useState } from 'react';
import Image from 'next/image';
import {
  Building, ShoppingCart, Heart, GraduationCap,
  Shield, Factory, Hotel, Warehouse, ArrowRight
} from 'lucide-react';

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
      description: "Fire safety solutions for residential complexes",
      icon: Building,
      image: ResidentialImage,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Commercial Offices & Business Parks",
      description: "Fire safety for corporate environments",
      icon: Building,
      image: CommercialImage,
      color: "from-teal-500 to-green-500"
    },
    {
      title: "Retail Chains, Malls & Showrooms",
      description: "Protection for retail spaces",
      icon: ShoppingCart,
      image: RetailImage,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Hospitals & Healthcare Buildings",
      description: "Critical safety for healthcare",
      icon: Heart,
      image: HospitalImage,
      color: "from-red-500 to-orange-500"
    },
    {
      title: "Colleges, Universities, Hostels",
      description: "Safety for educational institutes",
      icon: GraduationCap,
      image: CollegeImage,
      color: "from-indigo-500 to-purple-500"
    },
    {
      title: "Government & PSU Complexes",
      description: "Protection for government facilities",
      icon: Shield,
      image: GovernmentImage,
      color: "from-gray-600 to-gray-700"
    },
    {
      title: "Industrial Manufacturing Plants",
      description: "Heavy-duty safety for industries",
      icon: Factory,
      image: IndustrialImage,
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Hotels, Resorts & Banquet Spaces",
      description: "Hospitality protection systems",
      icon: Hotel,
      image: HotelImage,
      color: "from-emerald-500 to-teal-500"
    },
    {
      title: "Warehouses, Cold Storage, Data Centers",
      description: "Specialized safety for storage & data",
      icon: Warehouse,
      image: WarehouseImage,
      color: "from-cyan-500 to-blue-500"
    }
  ];

  return (
    <div className='w-full bg-gradient-to-br from-teal-50 to-cyan-50 pt-16 pb-10'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Header */}
        <div className='text-center mb-6'>
          <h1 className='text-2xl md:text-3xl font-bold text-[#2c3e50]'>
            🏭 Industries We Serve
          </h1>
          <div className='w-20 h-1 bg-gradient-to-r from-teal-400 to-cyan-600 mx-auto my-3'></div>
          <p className='text-sm text-gray-600 max-w-2xl mx-auto'>
            Fire safety solutions tailored for diverse industries
          </p>
        </div>

        {/* Grid */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
          {industries.map((industry, index) => (
            <div
              key={index}
              className='group relative bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer'
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Image */}
              <div className='relative h-36 rounded-t-xl overflow-hidden'>
                <Image
                  src={industry.image}
                  alt={industry.title}
                  fill
                  className='object-cover transition-transform duration-300 group-hover:scale-110'
                  style={{ objectFit: 'cover' }}
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${industry.color} opacity-20 group-hover:opacity-30 transition-opacity duration-300`} />
                <div className='absolute top-3 right-3'>
                  <div className={`w-8 h-8 bg-gradient-to-br ${industry.color} rounded-full flex items-center justify-center`}>
                    <industry.icon className='w-4 h-4 text-white' />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className='p-4'>
                <h3 className='text-sm font-semibold text-[#2c3e50] mb-1 group-hover:text-teal-600 transition-colors duration-300'>
                  {industry.title}
                </h3>
                <p className='text-xs text-gray-600 leading-snug mb-3'>
                  {industry.description}
                </p>

                {/* Action Indicator */}
                <div className='flex items-center justify-between'>
                  <div className={`w-6 h-1 bg-gradient-to-r ${industry.color} rounded-full`} />
                  <ArrowRight
                    className={`w-4 h-4 text-teal-600 transform transition-all duration-300 ${
                      hoveredCard === index ? 'translate-x-0 opacity-100' : 'translate-x-1 opacity-0'
                    }`}
                  />
                </div>
              </div>

              {/* Hover Border */}
              <div className={`absolute inset-0 border-2 border-transparent group-hover:border-teal-400 rounded-xl transition-all duration-300`} />
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className='text-center mt-6'>
          <button className='bg-gradient-to-r from-teal-400 to-cyan-600 text-white px-6 py-2 rounded-full text-sm font-semibold hover:shadow-md transition-all duration-300 hover:scale-105'>
            Get Industry-Specific Solutions
          </button>
        </div>
      </div>
    </div>
  );
};

export default IndustriesWeServe;
