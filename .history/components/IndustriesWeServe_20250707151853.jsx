import React from 'react';
import Image from 'next/image';

import ResidentialImage from '../public/assets/Industries/residential_towers_gated_communities.jpg';
import CommercialImage from '../public/assets/Industries/commercial_offices_business_parks.jpg';
import RetailImage from '../public/assets/Industries/retail_chains_malls_showrooms.jpg';
import HospitalImage from '../public/assets/Industries/hospitals_healthcare_buildings.jpg';
import CollegeImage from '../public/assets/Industries/colleges_universities_hostels.jpg';
import GovernmentImage from '../public/assets/Industries/government_psu_complexes.jpg';
import IndustrialImage from '../public/assets/Industries/industrial_manufacturing_plants.jpg';
import HotelImage from '../public/assets/Industries/hotels_resorts_banquet_spaces.jpg';
import WarehouseImage from '../public/assets/Industries/warehouses_cold_storage_data_centers.jpg';
import TransportImage from '../public/assets/Industries/transportation_infrastructure.jpg';

const industries = [
  {
    title: 'Residential Communities',
    description: 'Fire safety systems for residential towers & gated communities',
    color: 'from-blue-500 to-cyan-500',
    image: ResidentialImage,
  },
  {
    title: 'Business Parks',
    description: 'Secure fire protection for commercial offices & business hubs',
    color: 'from-teal-500 to-green-500',
    image: CommercialImage,
  },
  {
    title: 'Retail & Malls',
    description: 'Fire suppression and evacuation for retail & shopping areas',
    color: 'from-purple-500 to-pink-500',
    image: RetailImage,
  },
  {
    title: 'Hospitals',
    description: 'Life-critical fire safety for healthcare facilities',
    color: 'from-red-500 to-orange-500',
    image: HospitalImage,
  },
  {
    title: 'Colleges & Hostels',
    description: 'Fire safety for educational campuses & hostels',
    color: 'from-indigo-500 to-purple-500',
    image: CollegeImage,
  },
  {
    title: 'Govt. Complexes',
    description: 'Compliance-driven safety for government buildings',
    color: 'from-gray-600 to-gray-700',
    image: GovernmentImage,
  },
  {
    title: 'Manufacturing Plants',
    description: 'Industrial-grade fire protection for manufacturing units',
    color: 'from-orange-500 to-red-500',
    image: IndustrialImage,
  },
  {
    title: 'Hotels & Resorts',
    description: 'Guest safety systems for hotels, resorts & banquets',
    color: 'from-emerald-500 to-teal-500',
    image: HotelImage,
  },
  {
    title: 'Warehouses & Data',
    description: 'Fire detection for storage, cold chains & data centers',
    color: 'from-cyan-500 to-blue-500',
    image: WarehouseImage,
  },
  {
    title: 'Transportation Infra',
    description: 'Fire safety for airports, metro, rail & transit systems',
    color: 'from-yellow-500 to-orange-600',
    image: TransportImage,
  },
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

      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 w-full max-w-7xl">
        {industries.map((industry, index) => (
          <div
            key={index}
            className="group bg-white rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 overflow-hidden cursor-pointer flex flex-col"
            style={{ aspectRatio: '4/4.5' }}
          >
            {/* Image Section */}
            <div className="relative h-[60%] w-full">
              <Image
                src={industry.image}
                alt={industry.title}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-10 group-hover:bg-opacity-5 transition-all duration-300" />
            </div>

            {/* Text Section */}
            <div
              className={`flex flex-col justify-start px-3 py-2 sm:px-4 sm:py-3 bg-gradient-to-br ${industry.color} text-white flex-1`}
            >
              <h3 className="text-xs sm:text-sm font-semibold leading-tight mb-1">
                {industry.title}
              </h3>
              <p className="text-[10px] sm:text-xs opacity-90 leading-tight line-clamp-3 overflow-hidden">
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