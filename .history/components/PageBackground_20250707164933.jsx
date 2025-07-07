// components/PageBackground.jsx
import React from 'react';

const PageBackground = ({ children, variant = 'default' }) => {
  // Define styles for different background variants
  const variants = {
    default: {
      className: 'bg-gradient-to-br from-cyan-50 via-white to-teal-50',
      style: {
        backgroundImage: 'url("/textures/noise.png")',
        backgroundBlendMode: 'soft-light',
        backgroundRepeat: 'repeat',
      },
    },
    purple: {
      className: 'bg-gradient-to-br from-purple-100 via-white to-pink-100',
      style: {
        backgroundImage: 'url("/textures/noise.png")',
        backgroundBlendMode: 'soft-light',
        backgroundRepeat: 'repeat',
      },
    },
    dark: {
      className: 'bg-gradient-to-br from-gray-800 via-gray-900 to-black text-white',
      style: {},
    },
    lightPattern: {
      className: 'bg-[#f5faff]',
      style: {
        backgroundImage:
          'radial-gradient(circle at 1px 1px, #e0f2f1 1px, transparent 0)',
        backgroundSize: '20px 20px',
      },
    },
  };

  const selected = variants[variant] || variants.default;

  return (
    <div
      className={`w-full min-h-screen py-4 flex items-center ${selected.className}`}
      style={{
        paddingTop: '80px',
        ...selected.style,
      }}
    >
      <div className='w-full max-w-[1400px] mx-auto px-4'>{children}</div>
    </div>
  );
};

export default PageBackground;
