import React, { useEffect, useState } from 'react';

const Loader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [exitPhase, setExitPhase] = useState('loading'); // 'loading', 'shrinking', 'fading'

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          setIsComplete(true);
          
          // Start sophisticated exit sequence
          setTimeout(() => {
            setExitPhase('shrinking');
            setTimeout(() => {
              setExitPhase('fading');
              setTimeout(() => {
                onComplete();
              }, 600);
            }, 400);
          }, 300);
          
          return 100;
        }
        return prev + 1.5;
      });
    }, 40);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div 
      className={`fixed inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-teal-900 flex items-center justify-center transition-all duration-600 ease-in-out ${
        exitPhase === 'shrinking' 
          ? 'scale-95 opacity-90' 
          : exitPhase === 'fading'
            ? 'scale-110 opacity-0 blur-md'
            : 'scale-100 opacity-100'
      }`}
    >
      {/* Animated Background Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-1 h-1 bg-teal-400 rounded-full transition-all duration-1000 ${
              exitPhase === 'shrinking' ? 'animate-pulse opacity-30' : 'animate-pulse'
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      {/* Background Pattern with Fade Effect */}
      <div 
        className={`absolute inset-0 transition-opacity duration-800 ${
          exitPhase === 'fading' ? 'opacity-0' : 'opacity-10'
        }`}
        style={{
          backgroundImage: `
            linear-gradient(rgba(20, 184, 166, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(20, 184, 166, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
      />

      {/* Main Loader Content */}
      <div 
        className={`relative z-10 text-center transition-all duration-600 ease-out ${
          exitPhase === 'shrinking' 
            ? 'scale-90 opacity-80' 
            : exitPhase === 'fading'
              ? 'scale-75 opacity-0 translate-y-8'
              : 'scale-100 opacity-100 translate-y-0'
        }`}
      >
        {/* Company Logo/Name with Morphing Effect */}
        <div className='mb-8'>
          <h1 
            className={`text-4xl md:text-5xl font-bold text-white mb-2 transition-all duration-800 ${
              isComplete ? 'tracking-wider' : 'tracking-normal'
            }`}
          >
            <span className={`bg-gradient-to-r from-teal-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent transition-all duration-1000 ${
              isComplete ? 'animate-pulse' : ''
            }`}>
              Wait a Sec...
            </span>
          </h1>
        </div>

        {/* Enhanced Progress Bar */}
        <div className='w-64 mx-auto mb-8'>
          <div className='bg-slate-700/50 rounded-full h-2 backdrop-blur-sm border border-slate-600/30 overflow-hidden'>
            <div 
              className={`h-full bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full transition-all duration-300 ease-out shadow-lg ${
                isComplete 
                  ? 'shadow-teal-500/50 animate-pulse' 
                  : 'shadow-teal-500/30'
              }`}
              style={{ width: `${progress}%` }}
            >
              {/* Shimmer effect on progress bar */}
              <div className="h-full w-full relative overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform translate-x-[-100%] transition-transform duration-1000 ${
                  progress > 0 ? 'animate-pulse' : ''
                }`} />
              </div>
            </div>
          </div>
          <div className={`flex justify-between mt-2 text-xs text-gray-400 transition-opacity duration-400 ${
            exitPhase === 'fading' ? 'opacity-0' : 'opacity-100'
          }`}>
            <span>Loading</span>
            <span>{Math.round(progress)}%</span>
          </div>
        </div>

        
        {/* Dynamic Loading Text */}
        <p 
          className={`text-gray-300 text-sm transition-all duration-500 ${
            isComplete 
              ? 'text-teal-300 animate-pulse' 
              : 'animate-pulse'
          } ${exitPhase === 'fading' ? 'opacity-0' : 'opacity-100'}`}
        >
          {progress < 30 
            ? 'Initializing systems...' 
            : progress < 60 
              ? 'Loading engineering solutions...' 
              : progress < 90 
                ? 'Preparing interface...' 
                : 'Welcome to Paul Delta Arc'
          }
        </p>
      </div>
    </div>
  );
};

export default Loader;
