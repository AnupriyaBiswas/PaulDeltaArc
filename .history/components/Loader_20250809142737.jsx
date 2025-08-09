import React, { useEffect, useState } from 'react';

const Loader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          setIsComplete(true);
          setTimeout(() => {
            onComplete();
          }, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div 
      className={`fixed inset-0 z-[200] bg-gradient-to-br from-slate-900 via-slate-800 to-teal-900 flex items-center justify-center transition-opacity duration-1000 ${
        isComplete ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Background Pattern */}
      <div 
        className='absolute inset-0 opacity-10'
        style={{
          backgroundImage: `
            linear-gradient(rgba(20, 184, 166, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(20, 184, 166, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
      />

      <div className='relative z-10 text-center'>
        {/* Company Logo/Name */}
        <div className='mb-8'>
          <h1 className='text-4xl md:text-5xl font-bold text-white mb-2'>
            <span className='bg-gradient-to-r from-teal-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent'>
              Paul Delta Arc
            </span>
          </h1>
          <p className='text-gray-400 text-sm uppercase tracking-wider'>
            MEP Engineering Solutions
          </p>
        </div>

        {/* Animated Progress Bar */}
        <div className='w-64 mx-auto mb-8'>
          <div className='bg-slate-700/50 rounded-full h-2 backdrop-blur-sm border border-slate-600/30'>
            <div 
              className='h-full bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full transition-all duration-300 ease-out shadow-lg shadow-teal-500/30'
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className='flex justify-between mt-2 text-xs text-gray-400'>
            <span>Loading</span>
            <span>{progress}%</span>
          </div>
        </div>

        {/* Animated Dots */}
        <div className='flex justify-center space-x-2'>
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className='w-3 h-3 bg-teal-500 rounded-full animate-pulse'
              style={{ 
                animationDelay: `${i * 0.2}s`,
                animationDuration: '1.5s'
              }}
            />
          ))}
        </div>

        {/* Loading Text */}
        <p className='text-gray-300 text-sm mt-6 animate-pulse'>
          Preparing your engineering solutions...
        </p>
      </div>
    </div>
  );
};

export default Loader;
