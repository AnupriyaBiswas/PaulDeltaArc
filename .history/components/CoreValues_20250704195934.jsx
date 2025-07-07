import React from 'react';

const CoreValues = () => {
  const coreValues = [
    {
      value: "Excellence",
      description: "Every installation, every circuit, every pipe—done right the first time."
    },
    {
      value: "Integrity",
      description: "Full transparency in designs, billing, and material sourcing."
    },
    {
      value: "Accountability",
      description: "We own your outcome—from Day 1 through AMC completion."
    },
    {
      value: "Innovation",
      description: "Smart buildings, efficient systems, energy-saving integrations."
    },
    {
      value: "Relationships",
      description: "Trusted partnerships built on consistency, delivery, and honesty."
    }
  ];

  return (
    <div id='core-values' className='w-full bg-gray-50 py-16'>
      <div className='max-w-[1240px] mx-auto px-4'>
        {/* Header */}
        <div className='mb-12'>
          <h2 className='text-4xl font-bold text-[#2c3e50] mb-2'>Core Values</h2>
          <div className='w-50 h-1 bg-[#2c3e50]'></div>
        </div>

        {/* Table Container */}
        <div className='bg-gradient-to-br from-teal-400 to-teal-600 rounded-lg shadow-xl overflow-hidden relative'>
          {/* Background pattern overlay */}
          <div className='absolute inset-0 opacity-10 pointer-events-none'>
            <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/20 to-transparent'></div>
            <div className='absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full'></div>
            <div className='absolute -bottom-10 -left-10 w-40 h-40 bg-white/10 rounded-full'></div>
          </div>

          {/* Actual Table */}
          <div className='relative p-8'>
            <table className='w-full'>
              <thead>
                <tr className='border-b-2 border-white/30'>
                  <th className='text-left py-4 px-6 text-xl font-bold text-white w-1/3'>Value</th>
                  <th className='text-left py-4 px-6 text-xl font-bold text-white w-2/3'>Description</th>
                </tr>
              </thead>
              <tbody>
                {coreValues.map((item, index) => (
                  <tr key={index} className='border-b border-white/20 last:border-b-0 hover:bg-white/5 transition-colors duration-200'>
                    <td className='py-4 px-6 text-lg font-semibold text-white align-top'>{item.value}</td>
                    <td className='py-4 px-6 text-white/95 leading-relaxed'>{item.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoreValues;