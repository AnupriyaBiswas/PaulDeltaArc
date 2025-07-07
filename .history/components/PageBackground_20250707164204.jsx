// components/PageBackground.jsx
import React from 'react';

const PageBackground = ({ children }) => {
  return (
    <div
      className='w-full min-h-screen py-4 flex items-center bg-gradient-to-br from-cyan-50 via-white to-teal-50'
      style={{
        paddingTop: '80px',
        backgroundImage: 'url("/textures/noise.png")',
        backgroundRepeat: 'repeat',
        backgroundBlendMode: 'soft-light',
      }}
    >
      <div className='w-full max-w-[1400px] mx-auto px-4'>
        {children}
      </div>
    </div>
  );
};

export default PageBackground;
