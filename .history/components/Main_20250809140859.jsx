import React, { useEffect, useRef } from 'react';

const Main = () => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const beamsRef = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Enhanced Beam class for more professional look
    class Beam {
      constructor() {
        this.reset();
        this.opacity = Math.random() * 0.3 + 0.1; // Reduced opacity for subtlety
        this.width = Math.random() * 1.5 + 0.5; // Smaller, more refined beams
        this.speed = Math.random() * 1.5 + 0.5; // Slower, more elegant movement
        this.color = this.getRandomColor();
      }

      reset() {
        // Start from random edge
        const edge = Math.floor(Math.random() * 4);
        switch(edge) {
          case 0: // top
            this.x = Math.random() * canvas.width;
            this.y = -50;
            this.vx = (Math.random() - 0.5) * 2; // Reduced movement speed
            this.vy = Math.random() * 1.5 + 0.5;
            break;
          case 1: // right
            this.x = canvas.width + 50;
            this.y = Math.random() * canvas.height;
            this.vx = -(Math.random() * 1.5 + 0.5);
            this.vy = (Math.random() - 0.5) * 2;
            break;
          case 2: // bottom
            this.x = Math.random() * canvas.width;
            this.y = canvas.height + 50;
            this.vx = (Math.random() - 0.5) * 2;
            this.vy = -(Math.random() * 1.5 + 0.5);
            break;
          case 3: // left
            this.x = -50;
            this.y = Math.random() * canvas.height;
            this.vx = Math.random() * 1.5 + 0.5;
            this.vy = (Math.random() - 0.5) * 2;
            break;
        }
        this.trail = [];
        this.trailLength = Math.random() * 15 + 8; // Shorter trails
      }

      getRandomColor() {
        const colors = [
          '#0F172A', // Professional dark blue
          '#1E293B', // Slate-800
          '#334155', // Slate-600
          '#475569', // Slate-500
          '#64748B', // Slate-400
          '#94A3B8', // Slate-300
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

        // Reset if out of bounds
        if (this.x < -100 || this.x > canvas.width + 100 || 
            this.y < -100 || this.y > canvas.height + 100) {
          this.reset();
        }
      }

      draw(ctx) {
        // Draw subtle trail
        for (let i = 0; i < this.trail.length; i++) {
          const point = this.trail[i];
          const trailOpacity = (i / this.trail.length) * this.opacity * 0.6;
          const trailWidth = (i / this.trail.length) * this.width * 0.8;
          
          ctx.beginPath();
          ctx.arc(point.x, point.y, trailWidth, 0, Math.PI * 2);
          ctx.fillStyle = `${this.color}${Math.floor(trailOpacity * 255).toString(16).padStart(2, '0')}`;
          ctx.fill();
        }

        // Draw main beam with subtle glow
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.width, 0, Math.PI * 2);
        ctx.fillStyle = `${this.color}${Math.floor(this.opacity * 255).toString(16).padStart(2, '0')}`;
        ctx.fill();
      }

      checkCollision(other) {
        const dx = this.x - other.x;
        const dy = this.y - other.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        return distance < 25;
      }

      collide(other) {
        // Subtle collision effect
        const tempVx = this.vx;
        const tempVy = this.vy;
        this.vx = other.vx * 0.8;
        this.vy = other.vy * 0.8;
        other.vx = tempVx * 0.8;
        other.vy = tempVy * 0.8;
      }
    }

    // Initialize fewer beams for cleaner look
    const beams = [];
    for (let i = 0; i < 5; i++) {
      beams.push(new Beam());
    }
    beamsRef.current = beams;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw beams
      for (let i = 0; i < beams.length; i++) {
        beams[i].update();
        beams[i].draw(ctx);

        // Check collisions
        for (let j = i + 1; j < beams.length; j++) {
          if (beams[i].checkCollision(beams[j])) {
            beams[i].collide(beams[j]);
          }
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
  }, []);

  return (
    <div id='home' className='w-full h-screen relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900'>
      {/* Video Background (optional) */}
      {/* Uncomment if you want to use the hero.mp4 video
      <video
        className='absolute inset-0 w-full h-full object-cover opacity-20'
        autoPlay
        loop
        muted
        playsInline
        style={{ zIndex: 1 }}
      >
        <source src="/assets/hero.mp4" type="video/mp4" />
      </video>
      */}

      {/* Animated Background Canvas */}
      <canvas
        ref={canvasRef}
        className='absolute inset-0 w-full h-full pointer-events-none'
        style={{ zIndex: 2 }}
      />
      
      {/* Professional grid overlay */}
      <div 
        className='absolute inset-0 opacity-5'
        style={{
          backgroundImage: `
            linear-gradient(rgba(148, 163, 184, 0.4) 1px, transparent 1px),
            linear-gradient(90deg, rgba(148, 163, 184, 0.4) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
          zIndex: 3
        }}
      />

      {/* Subtle gradient overlay for depth */}
      <div className='absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-slate-800/60' style={{ zIndex: 4 }} />

      {/* Main Content */}
      <div className='max-w-7xl w-full h-full mx-auto px-6 flex justify-center items-center relative z-10'>
        <div className='text-center max-w-4xl'>
          {/* Professional subtitle */}
          <div className='mb-6'>
            <span className='inline-block px-4 py-2 bg-slate-700/50 backdrop-blur-sm border border-slate-600/30 rounded-full text-slate-300 text-xs md:text-sm font-medium tracking-wide uppercase'>
              Electromechanical Engineering & Contracting
            </span>
          </div>

          {/* Main heading with professional typography */}
          <h1 className='mb-6 text-white'>
            <div className='text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight'>
              Turnkey <span className='text-slate-300'>MEP</span>
            </div>
            <div className='text-3xl md:text-5xl lg:text-6xl font-light tracking-wide text-slate-300 mt-2'>
              engineering solutions
            </div>
          </h1>
          
          {/* Professional description */}
          <p className='mb-8 text-slate-400 text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto'>
            Powering Precision, Delivering Reliability
          </p>
          
          {/* Professional CTA button */}
          <div className='flex justify-center'>
            <a
              href='#contact'
              className='group inline-block'
            >
              <button className='px-8 py-4 bg-slate-700/80 hover:bg-slate-600/90 text-white font-medium text-sm md:text-base rounded-lg border border-slate-600/50 hover:border-slate-500/70 transition-all duration-300 ease-in-out backdrop-blur-sm hover:shadow-lg hover:shadow-slate-900/50 hover:-translate-y-0.5 tracking-wide uppercase'>
                Discover More
              </button>
            </a>
          </div>
        </div>
      </div>

      {/* Professional corner accents */}
      <div className='absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-slate-600/20 to-transparent' style={{ zIndex: 5 }} />
      <div className='absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-slate-600/20 to-transparent' style={{ zIndex: 5 }} />
    </div>
  );
};

export default Main;
