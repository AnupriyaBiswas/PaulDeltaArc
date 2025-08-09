import React, { useEffect, useRef, useState } from 'react';

const Main = () => {
  const videoRef = useRef(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.addEventListener('loadeddata', () => setIsVideoLoaded(true));
      video.addEventListener('error', () => setIsVideoLoaded(false));
    }
  }, []);

  return (
    <div id='home' className='w-full h-screen relative overflow-hidden'>
      {/* Hero Video Background */}
      <div className='absolute inset-0 z-0'>
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className='w-full h-full object-cover'
          style={{ opacity: isVideoLoaded ? 0.3 : 0 }}
        >
          <source src="/assets/hero.mp4" type="video/mp4" />
        </video>
        
        {/* Fallback gradient if video doesn't load */}
        <div 
          className={`absolute inset-0 bg-gradient-to-br from-slate-900 via-teal-900 to-slate-800 transition-opacity duration-1000 ${
            isVideoLoaded ? 'opacity-0' : 'opacity-100'
          }`}
        />
        
        {/* Overlay for better text readability */}
        <div className='absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/50 to-slate-900/80' />
      </div>

      {/* Geometric Pattern Overlay */}
      <div className='absolute inset-0 z-10'>
        <div 
          className='absolute inset-0 opacity-10'
          style={{
            backgroundImage: `
              linear-gradient(30deg, rgba(20, 184, 166, 0.1) 12%, transparent 12.5%, transparent 87%, rgba(20, 184, 166, 0.1) 87.5%, rgba(20, 184, 166, 0.1)),
              linear-gradient(150deg, rgba(20, 184, 166, 0.1) 12%, transparent 12.5%, transparent 87%, rgba(20, 184, 166, 0.1) 87.5%, rgba(20, 184, 166, 0.1)),
              linear-gradient(30deg, rgba(168, 85, 247, 0.1) 12%, transparent 12.5%, transparent 87%, rgba(168, 85, 247, 0.1) 87.5%, rgba(168, 85, 247, 0.1)),
              linear-gradient(150deg, rgba(168, 85, 247, 0.1) 12%, transparent 12.5%, transparent 87%, rgba(168, 85, 247, 0.1) 87.5%, rgba(168, 85, 247, 0.1))
            `,
            backgroundSize: '80px 80px'
          }}
        />
      </div>

      {/* Main Content */}
      <div className='relative z-20 flex items-center justify-center h-full'>
        <div className='max-w-5xl mx-auto px-6 text-center'>
          
          {/* Company Badge */}
          <div className='inline-flex items-center px-4 py-2 mb-6 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full'>
            <span className='w-2 h-2 bg-teal-400 rounded-full mr-2 animate-pulse'></span>
            <span className='text-white/90 text-sm font-medium tracking-wide'>ELECTROMECHANICAL ENGINEERING & CONTRACTING</span>
          </div>

          {/* Main Heading */}
          <h1 className='mb-6'>
            <span className='block text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-2 tracking-tight'>
              Turnkey MEP
            </span>
            <span className='block text-3xl md:text-5xl lg:text-6xl font-light text-transparent bg-gradient-to-r from-teal-400 via-cyan-300 to-purple-400 bg-clip-text'>
              engineering solutions
            </span>
          </h1>

          {/* Subtitle */}
          <p className='text-xl md:text-2xl text-white/80 font-light max-w-3xl mx-auto mb-8 leading-relaxed'>
            Delivering precision-engineered MEP systems with uncompromising reliability and innovative solutions for modern infrastructure
          </p>

          {/* Feature Pills */}
          <div className='flex flex-wrap justify-center gap-3 mb-10'>
            {['Design & Engineering', 'Installation Services', 'Project Management', 'Maintenance Solutions'].map((feature, index) => (
              <div 
                key={index}
                className='px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white/90 text-sm font-medium'
              >
                {feature}
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <a
              href='#contact'
              className='group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-teal-500 to-cyan-500 text-white font-semibold rounded-lg shadow-2xl shadow-teal-500/25 hover:shadow-teal-500/40 transition-all duration-300 hover:scale-105 hover:from-teal-400 hover:to-cyan-400'
            >
              Get Quote
              <svg className='ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17 8l4 4m0 0l-4 4m4-4H3' />
              </svg>
            </a>
            
            <a
              href='#projects'
              className='inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/30 text-white font-semibold rounded-lg hover:bg-white/20 transition-all duration-300 hover:scale-105'
            >
              View Projects
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className='absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-900 to-transparent z-15'></div>

      {/* Floating Elements */}
      <div className='absolute top-20 left-10 w-20 h-20 border border-teal-400/30 rounded-lg rotate-45 animate-pulse opacity-20'></div>
      <div className='absolute top-40 right-20 w-16 h-16 border border-purple-400/30 rounded-full animate-bounce opacity-20' style={{animationDuration: '3s'}}></div>
      <div className='absolute bottom-40 left-20 w-12 h-12 border border-cyan-400/30 rounded-lg rotate-12 animate-pulse opacity-20' style={{animationDelay: '1s'}}></div>
    </div>
  );
};

export default Main;
