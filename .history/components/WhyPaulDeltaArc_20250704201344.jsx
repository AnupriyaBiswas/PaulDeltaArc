import React from 'react';
import { Flag, Cog, Users, Globe, Clock, Wrench, FileCheck } from 'lucide-react';

const WhyPaulDeltaArc = () => {
  const features = [
    {
      icon: <Flag className="w-12 h-12" />,
      title: "MSME Registered"
    },
    {
      icon: <Cog className="w-12 h-12" />,
      title: "End-to-End EPC Expertise"
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "In-house Technical & Design Team"
    },
    {
      icon: <Globe className="w-12 h-12" />,
      title: "PAN India Project Delivery"
    },
    {
      icon: <Clock className="w-12 h-12" />,
      title: "Timely Delivery, No Cost Overruns"
    },
    {
      icon: <Wrench className="w-12 h-12" />,
      title: "AMC & Emergency Maintenance Backing"
    },
    {
      icon: <FileCheck className="w-12 h-12" />,
      title: "Statutory Compliance: IS, NBC, NFPA, TAC, etc."
    }
  ];

  return (
    <div id='why-paul-delta-arc' className='w-full lg:h-screen p-2'>
      <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Why Choose Us
        </p>
        <h2 className='py-4 font-bold text-3xl'>Why 'Paul Delta Arc'?</h2>
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-8'>
          {features.map((feature, index) => (
            <div key={index} className='p-6 bg-gradient-to-br from-teal-400 to-teal-600 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
              <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto text-white'>
                  {feature.icon}
                </div>
                <div className='flex flex-col items-center justify-center'>
                  <h3 className='text-center text-sm font-medium text-white'>{feature.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyPaulDeltaArc;