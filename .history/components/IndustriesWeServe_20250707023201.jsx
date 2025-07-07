import React from 'react';
import Image from 'next/image';
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
    icon: Building,
    image: ResidentialImage,
    description: 'Fire safety systems for residential towers & gated communities',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'Business Parks',
    icon: Building,
    image: CommercialImage,
    description: 'Secure fire protection for commercial offices & business hubs',
    color: 'from-teal-500 to-green-500',
  },
  {
    title: 'Retail & Malls',
    icon: ShoppingCart,
    image: RetailImage,
    description: 'Fire suppression and evacuation for retail & shopping areas',
    color: 'from-purple-500 to-pink-500',
  },
  {
    title: 'Hospitals',
    icon: Heart,
    image: HospitalImage,
    description: 'Life-critical fire safety for healthcare facilities',
    color: 'from-red-500 to-orange-500',
  },
  {
    title: 'Colleges & Hostels',
    icon: GraduationCap,
    image: CollegeImage,
    description: 'Fire safety for educational campuses & hostels',
    color: 'from-indigo-500 to-purple-500',
  },
  {
    title: 'Govt. Complexes',
    icon: Shield,
    image: GovernmentImage,
    description: 'Compliance-driven safety for government buildings',
    color: 'from-gray-600 to-gray-700',
  },
  {
    title: 'Manufacturing Plants',
    icon: Factory,
    image: IndustrialImage,
    description: 'Industrial-grade fire protection for manufacturing units',
    color: 'from-orange-500 to-red-500',
  },
  {
    title: 'Hotels & Resorts',
    icon: Hotel,
    image: HotelImage,
    description: 'Guest safety systems for hotels, resorts & banquets',
    color: 'from-emerald-500 to-teal-500',
  },
  {
    title: 'Warehouses & Data',
    icon: Warehouse,
    image: WarehouseImage,
    description: 'Fire detection for storage, cold chains & data centers',
    color: 'from-cyan-500 to-blue-500',
  },
  {
    title: 'Transportation Infra',
    icon: BusFront,
    image: TransportImage,
    description: 'Fire safety for airports, metro, rail & transit systems',
    color: 'from-yellow-500 to-orange-600',
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

      {/* Industry Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 w-full max-w-7xl">
        {industries.map((industry, index) => (
          <div
            key={index}
            className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden cursor-pointer aspect-[4/5]"
          >
            <div className="relative w-full h-full">
              <Image
                src={industry.image}
                alt={industry.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div
                className={`absolute inset-0 bg-gradient-to-t ${industry.color} opacity-30`}
              />
              <div className="absolute inset-0 flex flex-col justify-end p-4">
                <div className="flex items-center gap-2 mb-1">
                  <div
                    className={`w-9 h-9 bg-gradient-to-br ${industry.color} rounded-full flex items-center justify-center shadow-md`}
                  >
                    <industry.icon className="w-4 h-4 text-white" />
                  </div>
                  <h3 className="text-xs sm:text-sm font-semibold text-white leading-tight">
                    {industry.title}
                  </h3>
                </div>
                <p className="text-[10px] sm:text-xs text-white opacity-90">
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
