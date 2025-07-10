import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const Services = () => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) return null;

  const services = [
    { icon: "🔥", title: "Fire Protection & Detection", href: "/FireProtectionSystems", desc: "Integrated fire detection, suppression & alarm systems aligned with global safety codes." },
    { icon: "⚡", title: "Electrical & Ventilation", href: "/ElectricalSystemsVentilation", desc: "Power distribution, emergency backup, and mechanical ventilation solutions." },
    { icon: "🛁", title: "Plumbing & PHE", href: "/PlumbingPublicHealth", desc: "Water supply, drainage, rainwater harvesting and public health engineering." },
    { icon: "💼", title: "Building Automation", href: "/BuildingAutomation", desc: "Smart control systems for HVAC, lighting, and energy optimization." },
    { icon: "🔐", title: "Surveillance & Access Control", href: "/SurveillanceAccessControl", desc: "CCTV, intercoms, and secure access systems for modern infrastructure." },
    { icon: "📄", title: "Annual Maintenance Contracts", href: "/AnnualMaintenanceContracts", desc: "Comprehensive AMC with preventive maintenance and emergency response." }
  ];

  return (
    <div id="services" className="w-full bg-gradient-to-br from-teal-50 to-cyan-50 py-16 min-h-screen flex items-center">
      <div className="max-w-[1400px] mx-auto px-6 w-full">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#2c3e50] mb-4 tracking-wide">⚙️ Our Services</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-400 to-cyan-600 rounded-full mx-auto"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-base">
            Trusted turnkey MEP solutions tailored for safety, sustainability, and automation.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Link key={index} href={service.href}>
              <a className="group relative bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-1 hover:border-transparent hover:bg-gradient-to-br from-teal-400 to-cyan-600">
                {/* Background Dots */}
                <div className="absolute top-3 right-3 w-4 h-4 bg-teal-100 rounded-full opacity-50 group-hover:opacity-0 transition-opacity duration-300"></div>
                <div className="absolute bottom-3 left-3 w-3 h-3 bg-cyan-50 rounded-full opacity-30 group-hover:opacity-0 transition-opacity duration-300"></div>
                
                {/* Icon */}
                <div className="text-4xl mb-4 text-center group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-[#2c3e50] text-center group-hover:text-white transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="mt-3 text-sm text-gray-600 text-center group-hover:text-gray-100 transition-colors duration-300">
                  {service.desc}
                </p>
              </a>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
