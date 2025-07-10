import React from 'react';
import Image from 'next/image';

const platforms = [
  { name: "Honeywell", icon: "/assets/honeywell.svg", specialty: "Industrial Control" },
  { name: "Siemens", icon: "/assets/siemens.png", specialty: "Building Technologies" },
  { name: "Schneider", icon: "/assets/Schneider.png", specialty: "Energy Management" },
  { name: "Johnson Controls", icon: "/assets/johnson_controls.png", specialty: "Smart Buildings" }
];

const PlatformSection = () => {
  return (
    <div className="w-full py-10 bg-white">
      <div className="max-w-[1240px] mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-[#2c3e50] mb-2">💼 Our Platform Expertise</h2>
        <div className="w-20 h-1 bg-gradient-to-r from-teal-400 to-cyan-600 mx-auto mb-6" />
        <p className="text-sm text-gray-600 mb-8">
          We integrate seamlessly with industry-leading platforms to ensure reliable, scalable, and secure systems.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {platforms.map((platform, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-gray-50 to-white p-4 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition duration-300 hover:-translate-y-1"
            >
              <div className="relative mb-2">
                <Image
                  src={platform.icon}
                  alt={`${platform.name} logo`}
                  width={100}
                  height={60}
                  className="mx-auto object-contain transition-transform group-hover:scale-105"
                />
              </div>
              <h3 className="text-sm font-semibold text-[#2c3e50]">{platform.name}</h3>
              <p className="text-xs text-gray-500">{platform.specialty}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlatformSection;
