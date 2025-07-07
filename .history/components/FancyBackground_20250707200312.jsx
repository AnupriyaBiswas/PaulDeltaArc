// components/FancyBackground.jsx
import React from 'react';

const FancyBackground = ({ children }) => {
  return (
    <div className="w-full overflow-x-hidden">
      <div className='relative w-full min-h-screen overflow-hidden bg-gradient-to-br from-cyan-50 via-white to-teal-50'>
        {/* Animated blobs */}
        <div className='absolute -top-32 -left-32 w-[400px] h-[400px] bg-teal-200 rounded-full mix-blend-multiply filter blur-2xl opacity-50 animate-blob' />
        <div className='absolute -bottom-32 -right-32 w-[400px] h-[400px] bg-cyan-300 rounded-full mix-blend-multiply filter blur-2xl opacity-40 animate-blob animation-delay-2000' />
        <div className='absolute top-1/3 left-1/3 w-[300px] h-[300px] bg-purple-200 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob animation-delay-4000' />

        {/* Foreground content */}
        <div className='relative z-10 w-full max-w-[1400px] mx-auto px-4 py-10'>
          {children}
        </div>
      </div>
    </div>
  );
};


export default FancyBackground;
