import React, { useEffect, useRef, useState } from 'react';

const Main = () => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const beamsRef = useRef([]);
  const videoRef = useRef(null);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [transitionComplete, setTransitionComplete] = useState(false);

  useEffect(() => {
    // Enhanced visibility timing for smooth loader transition
    const timer = setTimeout(() => {
      setIsVisible(true);
      // Mark transition as complete after all animations settle
      setTimeout(() => {
        setTransitionComplete(true);
      }, 2000);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Beam class with enhanced performance
    class Beam {
      constructor() {
        this.reset();
        this.opacity = Math.random() * 0.3 + 0.1;
        this.width = Math.random() * 1.5 + 0.5;
        this.speed = Math.random() * 1.5 + 0.5;
        this.color = this.getRandomColor();
      }

      reset() {
        const edge = Math.floor(Math.random() * 4);
        switch(edge) {
          case 0: // top
            this.x = Math.random() * canvas.width;
            this.y = -50;
            this.vx = (Math.random() - 0.5) * 2;
            this.vy = Math.random() * 2 + 0.5;
            break;
          case 1: // right
            this.x = canvas.width + 50;
            this.y = Math.random() * canvas.height;
            this.vx = -(Math.random() * 2 + 0.5);
            this.vy = (Math.random() - 0.5) * 2;
            break;
          case 2: // bottom
            this.x = Math.random() * canvas.width;
            this.y = canvas.height + 50;
            this.vx = (Math.random() - 0.5) * 2;
            this.vy = -(Math.random() * 2 + 0.5);
            break;
          case 3: // left
            this.x = -50;
            this.y = Math.random() * canvas.height;
            this.vx = Math.random() * 2 + 0.5;
            this.vy = (Math.random() - 0.5) * 2;
            break;
        }
        this.trail = [];
        this.trailLength = Math.random() * 15 + 8;
      }

      getRandomColor() {
        const colors = [
          '#14B8A6', // Teal-500
          '#0D9488', // Teal-600
          '#0F766E', // Teal-700
          '#134E4A', // Teal-800
          '#1E40AF', // Blue-700
          '#1D4ED8', // Blue-700
        ];
        return colors[Math.floor(Math.random() * colors.length)];
      }

      update() {
        this.trail.push({x: this.x, y: this.y});
        if (this.trail.length > this.trailLength) {
          this.trail.shift();
        }

        this.x += this.vx;
        this.y += this.vy;

        if (this.x < -100 || this.x > canvas.width + 100 || 
            this.y < -100 || this.y > canvas.height + 100) {
          this.reset();
        }
      }

      draw(ctx) {
        // Performance optimization: only draw if visible
        if (!isVisible) return;
        
        for (let i = 0; i < this.trail.length; i++) {
          const point = this.trail[i];
          const trailOpacity = (i / this.trail.length) * this.opacity;
          const trailWidth = (i / this.trail.length) * this.width;
          
          ctx.beginPath();
          ctx.arc(point.x, point.y, trailWidth, 0, Math.PI * 2);
          ctx.fillStyle = `${this.color}${Math.floor(trailOpacity * 255).toString(16).padStart(2, '0')}`;
          ctx.fill();
        }

        ctx.beginPath();
        ctx.arc(this.x, this.y, this.width, 0, Math.PI * 2);
        ctx.fillStyle = `${this.color}${Math.floor(this.opacity * 255).toString(16).padStart(2, '0')}`;
        ctx.fill();

        ctx.shadowBlur = 8;
        ctx.shadowColor = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.width * 0.3, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      checkCollision(other) {
        const dx = this.x - other.x;
        const dy = this.y - other.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        return distance < 25;
      }

      collide(other) {
        const midX = (this.x + other.x) / 2;
        const midY = (this.y + other.y) / 2;
        
        for (let i = 0; i < 3; i++) {
          const particle = {
            x: midX,
            y: midY,
            vx: (Math.random() - 0.5) * 4,
            vy: (Math.random() - 0.5) * 4,
            life: 20,
            color: this.color
          };
          particles.push(particle);
        }

        const tempVx = this.vx;
        const tempVy = this.vy;
        this.vx = other.vx;
        this.vy = other.vy;
        other.vx = tempVx;
        other.vy = tempVy;

        this.vx += (Math.random() - 0.5) * 1;
        this.vy += (Math.random() - 0.5) * 1;
        other.vx += (Math.random() - 0.5) * 1;
        other.vy += (Math.random() - 0.5) * 1;
      }
    }

    // Initialize beams
    const beams = [];
    const particles = [];
    for (let i = 0; i < 6; i++) {
      beams.push(new Beam());
    }
    beamsRef.current = beams;

    const animate = () => {
      if (!canvas || !ctx) return;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Only animate if component is visible
      if (isVisible) {
        for (let i = 0; i < beams.length; i++) {
          beams[i].update();
          beams[i].draw(ctx);

          for (let j = i + 1; j < beams.length; j++) {
            if (beams[i].checkCollision(beams[j])) {
              beams[i].collide(beams[j]);
            }
          }
        }

        for (let i = particles.length - 1; i >= 0; i--) {
          const particle = particles[i];
          particle.x += particle.vx;
          particle.y += particle.vy;
          particle.life--;
          particle.vx *= 0.98;
          particle.vy *= 0.98;

          if (particle.life <= 0) {
            particles.splice(i, 1);
            continue;
          }

          const alpha = particle.life / 20;
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, 1.5, 0, Math.PI * 2);
          ctx.fillStyle = `${particle.color}${Math.floor(alpha * 255).toString(16).padStart(2, '0')}`;
          ctx.fill();
        }
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isVisible]);

  // Handle video loading for better integration with loader
  const handleVideoLoad = () => {
    setVideoLoaded(true);
  };

  const handleVideoError = () => {
    console.log('Video failed to load, continuing without it');
    setVideoLoaded(true); // Still mark as "loaded" to continue
  };

  return (
    <div 
      id='home' 
      className={`w-full h-screen relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-teal-900 transition-all duration-1200 ease-out ${
        isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
      }`}
    >
      {/* Background Video with enhanced loading state */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        onLoadedData={handleVideoLoad}
        onError={handleVideoError}
        className={`absolute inset-0 w-full h-full object-cover transition-all duration-1500 ease-out ${
          videoLoaded && isVisible ? 'opacity-20 scale-100' : 'opacity-0 scale-105'
        }`}
        style={{ zIndex: 1 }}
      >
        <source src="/assets/hero.mp4" type="video/mp4" />
        {/* Fallback for browsers that don't support video */}
        Your browser does not support the video tag.
      </video>

      {/* Animated Background Canvas */}
      <canvas
        ref={canvasRef}
        className={`absolute inset-0 w-full h-full pointer-events-none transition-opacity duration-1000 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ zIndex: 2 }}
      />
      
      {/* Professional grid overlay with fade-in */}
      <div 
        className={`absolute inset-0 transition-opacity duration-1000 delay-200 ${
          isVisible ? 'opacity-10' : 'opacity-0'
        }`}
        style={{
          backgroundImage: `
            linear-gradient(rgba(20, 184, 166, 0.4) 1px, transparent 1px),
            linear-gradient(90deg, rgba(20, 184, 166, 0.4) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
          zIndex: 3
        }}
      />

      {/* Gradient Overlay for Better Text Readability */}
      <div 
        className={`absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-slate-900/60 transition-opacity duration-1000 delay-400 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`} 
        style={{ zIndex: 4 }} 
      />

      {/* Main Content with enhanced sequential animations */}
      <div className='max-w-[1240px] w-full h-full mx-auto p-4 flex justify-center items-center relative z-10'>
        <div className='text-center max-w-4xl'>
          {/* Professional Badge with sophisticated entrance */}
          <div className={`inline-flex items-center px-4 py-2 mb-6 bg-teal-500/10 border border-teal-500/20 rounded-full backdrop-blur-sm transition-all duration-1200 ease-out delay-600 ${
            isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
          }`}>
            <span className='text-teal-400 text-sm font-medium tracking-wider uppercase'>
              Electromechanical Engineering & Contracting
            </span>
          </div>

          {/* Main Heading with sophisticated staggered animation */}
          <h1 className='mb-6 text-white'>
            <div className={`text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight mb-4 transition-all duration-1200 ease-out delay-800 ${
              isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-95'
            }`}>
              <span className='block bg-gradient-to-r from-white via-teal-100 to-white bg-clip-text text-transparent'>
                Paul Delta Arc
              </span>
              {/* Reduced size for MEP Solutions */}
              <span className={`block text-3xl md:text-4xl lg:text-5xl bg-gradient-to-r from-teal-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent transition-all duration-1200 ease-out delay-1000 ${
                isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
              } ${transitionComplete ? 'animate-pulse' : ''}`}>
                MEP Solutions
              </span>
            </div>
          </h1>
          
          {/* Professional Tagline with smooth entrance */}
          <p className={`text-xl md:text-2xl text-gray-300 font-light tracking-wide mb-8 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 ease-out delay-1200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}>
            Powering Precision, Delivering Reliability
          </p>

          {/* Professional Description with elegant fade-in */}
          <p className={`text-gray-400 text-base md:text-lg font-light max-w-2xl mx-auto mb-8 leading-relaxed transition-all duration-1000 ease-out delay-1400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            Comprehensive mechanical, electrical, and plumbing solutions engineered for optimal performance and sustainability
          </p>
          
          {/* CTA Button with sophisticated hover-ready animation */}
          <div className={`flex justify-center transition-all duration-1000 ease-out delay-1600 ${
            isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-6 scale-95'
          }`}>
            <a
              href='#contact'
              className='group relative'
            >
              <button className={`relative px-8 py-4 bg-gradient-to-r from-teal-600 to-teal-500 text-white font-semibold text-base rounded-lg shadow-2xl shadow-teal-500/25 hover:shadow-teal-500/40 transition-all duration-500 ease-out hover:scale-110 border border-teal-400/30 hover:border-teal-300/50 overflow-hidden ${
                transitionComplete ? 'hover:shadow-2xl' : ''
              }`}>
                <span className='relative z-10'>Get Professional Quote</span>
                <div className='absolute inset-0 bg-gradient-to-r from-teal-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-all duration-500'></div>
              </button>
            </a>
          </div>

          {/* Professional Trust Indicators with final flourish */}
          <div className={`mt-12 flex flex-wrap justify-center items-center gap-8 text-gray-400 text-sm transition-all duration-1000 ease-out delay-1800 ${
            isVisible ? 'opacity-70 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            <span className={`flex items-center gap-2 transition-all duration-300 ${transitionComplete ? 'hover:text-teal-400' : ''}`}>
              <div className='w-2 h-2 bg-teal-500 rounded-full animate-pulse'></div>
              Licensed & Certified
            </span>
            <span className={`flex items-center gap-2 transition-all duration-300 ${transitionComplete ? 'hover:text-teal-400' : ''}`}>
              <div className='w-2 h-2 bg-teal-500 rounded-full animate-pulse'></div>
              Quality Assured
            </span>
            <span className={`flex items-center gap-2 transition-all duration-300 ${transitionComplete ? 'hover:text-teal-400' : ''}`}>
              <div className='w-2 h-2 bg-teal-500 rounded-full animate-pulse'></div>
              24/7 Support
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
