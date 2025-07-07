import React from 'react';
import Image from 'next/image';
import { Building, ShoppingCart, Heart, GraduationCap, Shield, Factory, Hotel, Warehouse, BusFront } from 'lucide-react';

import ResidentialImage from '../public/assets/Industries/residential_towers_gated_communities.jpg';
import CommercialImage from '../public/assets/Industries/commercial_offices_business_parks.jpg';
import RetailImage from '../public/assets/Industries/retail_chains_malls_showrooms.jpg';
import HospitalImage from '../public/assets/Industries/hospitals_healthcare_buildings.jpg';
import CollegeImage from '../public/assets/Industries/colleges_universities_hostels.jpg';
import GovernmentImage from '../public/assets/Industries/government_psu_complexes.jpg';
import IndustrialImage from '../public/assets/Industries/industrial_manufacturing_plants.jpg';
import HotelImage from '../public/assets/Industries/hotels_resorts_banquet_spaces.jpg';
import WarehouseImage from '../public/assets/Industries/warehouses_cold_storage_data_centers.jpg';
import TransportImage from '../public/assets/Industries/transportation_infrastructure.jpg'; // Add this image

const industries = [
  { title: "Residential Communities", icon: Building, image: ResidentialImage },
  { title: "Business Parks", icon: Building, image: CommercialImage },
  { title: "Retail & Malls", icon: ShoppingCart, image: RetailImage },
  { title: "Hospitals", icon: Heart, image: HospitalImage },
  { title: "Colleges & Hostels", icon: GraduationCap, image: CollegeImage },
  { title: "Govt. Complexes", icon: Shield, image: GovernmentImage },
  { title: "Manufacturing Plants", icon: Factory, image: IndustrialImage },
  { title: "Hotels & Resorts", icon: Hotel, image: HotelImage },
  { title: "Warehouses & Data", icon: Warehouse, image: WarehouseImage },
  { title: "Transportation Infra", icon: BusFront, image: TransportImage },
];

const IndustriesWeServe = () => {
  return (
    <div className="w-full bg-gradient-to-br from-teal-50 to-cyan-50 py-4 px-2 md:px-10 min-h-screen flex flex-col justify-center items-center">
      {/* Header */}
      <div className="text-center mb-4">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#2c3e50]">
          🏭 Industries We Serve
        </h1>
        <div className="w-20 h-1 bg-gradient-to-r from-teal-400 to-cyan-600 mx-auto my-2" />
        <p className="text-xs sm:text-sm text-gray-600 max-w-xl mx-auto">
          Fire safety solutions tailored for every sector, with trusted expertise.
        </p>
      </div>

      {/* Industry Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 w-full max-w-7xl">
        {industries.map((industry, index) => (
          <div
            key={index}
            className='group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden cursor-pointer'
          >
            {/* Image container */}
            <div className='relative h-60 overflow-hidden'>
              <Image
                src={industry.image}
                alt={industry.title}
                fill
                className='object-cover transition-transform duration-300 group-hover:scale-105'
              />
              <div className={`absolute inset-0 bg-gradient-to-t ${industry.color} opacity-30`} />
              <div className='absolute inset-0 flex flex-col justify-end p-4'>
                <div className={`w-10 h-10 bg-gradient-to-br ${industry.color} rounded-full flex items-center justify-center shadow-lg mb-2`}>
                  <industry.icon className='w-5 h-5 text-white' />
                </div>
                <h3 className='text-xs sm:text-sm font-semibold text-white leading-snug'>
                  {industry.title}
                </h3>
                <p className='text-[10px] sm:text-xs text-white opacity-90 mt-1'>
                  {industry.description}
                </p>
              </div>
            </div>
          </div>

        ))}
      </div>
    </div>
  );
};

export default IndustriesWeServe;
