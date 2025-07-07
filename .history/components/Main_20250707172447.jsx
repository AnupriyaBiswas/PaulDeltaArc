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

    // Beam class
    class Beam {
      constructor() {
        this.reset();
        this.opacity = Math.random() * 0.5 + 0.2;
        this.width = Math.random() * 2 + 1;
        this.speed = Math.random() * 2 + 1;
        this.color = this.getRandomColor();
      }

      reset() {
        // Start from random edge
        const edge = Math.floor(Math.random() * 4);
        switch(edge) {
          case 0: // top
            this.x = Math.random() * canvas.width;
            this.y = -50;
            this.vx = (Math.random() - 0.5) * 4;
            this.vy = Math.random() * 3 + 1;
            break;
          case 1: // right
            this.x = canvas.width + 50;
            this.y = Math.random() * canvas.height;
            this.vx = -(Math.random() * 3 + 1);
            this.vy = (Math.random() - 0.5) * 4;
            break;
          case 2: // bottom
            this.x = Math.random() * canvas.width;
            this.y = canvas.height + 50;
            this.vx = (Math.random() - 0.5) * 4;
            this.vy = -(Math.random() * 3 + 1);
            break;
          case 3: // left
            this.x = -50;
            this.y = Math.random() * canvas.height;
            this.vx = Math.random() * 3 + 1;
            this.vy = (Math.random() - 0.5) * 4;
            break;
        }
        this.trail = [];
        this.trailLength = Math.random() * 20 + 10;
      }

      getRandomColor() {
        const colors = [
          '#A0D2EB', // Main theme color
          '#60A5FA', // Blue
          '#34D399', // Green
          '#F472B6', // Pink
          '#FBBF24', // Yellow
          '#A78BFA', // Purple
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
        // Draw trail
        for (let i = 0; i < this.trail.length; i++) {
          const point = this.trail[i];
          const trailOpacity = (i / this.trail.length) * this.opacity;
          const trailWidth = (i / this.trail.length) * this.width;
          
          ctx.beginPath();
          ctx.arc(point.x, point.y, trailWidth, 0, Math.PI * 2);
          ctx.fillStyle = `${this.color}${Math.floor(trailOpacity * 255).toString(16).padStart(2, '0')}`;
          ctx.fill();
        }

        // Draw main beam
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.width, 0, Math.PI * 2);
        ctx.fillStyle = `${this.color}${Math.floor(this.opacity * 255).toString(16).padStart(2, '0')}`;
        ctx.fill();

        // Add glow effect
        ctx.shadowBlur = 10;
        ctx.shadowColor = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.width * 0.5, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      checkCollision(other) {
        const dx = this.x - other.x;
        const dy = this.y - other.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        return distance < 30;
      }

      collide(other) {
        // Create collision effect
        const midX = (this.x + other.x) / 2;
        const midY = (this.y + other.y) / 2;
        
        // Create particles
        for (let i = 0; i < 5; i++) {
          const particle = {
            x: midX,
            y: midY,
            vx: (Math.random() - 0.5) * 6,
            vy: (Math.random() - 0.5) * 6,
            life: 30,
            color: this.color
          };
          particles.push(particle);
        }

        // Bounce off each other
        const tempVx = this.vx;
        const tempVy = this.vy;
        this.vx = other.vx;
        this.vy = other.vy;
        other.vx = tempVx;
        other.vy = tempVy;

        // Add some randomness
        this.vx += (Math.random() - 0.5) * 2;
        this.vy += (Math.random() - 0.5) * 2;
        other.vx += (Math.random() - 0.5) * 2;
        other.vy += (Math.random() - 0.5) * 2;
      }
    }

    // Initialize beams
    const beams = [];
    const particles = [];
    for (let i = 0; i < 8; i++) {
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

      // Update and draw particles
      for (let i = particles.length - 1; i >= 0; i--) {
        const particle = particles[i];
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.life--;
        particle.vx *= 0.99;
        particle.vy *= 0.99;

        if (particle.life <= 0) {
          particles.splice(i, 1);
          continue;
        }

        const alpha = particle.life / 30;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, 2, 0, Math.PI * 2);
        ctx.fillStyle = `${particle.color}${Math.floor(alpha * 255).toString(16).padStart(2, '0')}`;
        ctx.fill();
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
    <div id='home' className='w-full h-screen text-center relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black'>
      {/* Animated Background Canvas */}
      <canvas
        ref={canvasRef}
        className='absolute inset-0 w-full h-full pointer-events-none'
        style={{ zIndex: 1 }}
      />
      
      {/* Subtle grid overlay */}
      <div 
        className='absolute inset-0 opacity-10'
        style={{
          backgroundImage: `
            linear-gradient(rgba(160, 210, 235, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(160, 210, 235, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          zIndex: 2
        }}
      />

      {/* Main Content */}
      <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center relative z-10'>
        <div>
          <h1 className='py-4 text-white text-5xl md:text-6xl font-bold tracking-wide drop-shadow-2xl'>
            <span className='inline-block animate-pulse bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent'>Paul Delta Arc</span>
          </h1>
          
          <p className='py-4 text-gray-300 sm:max-w-[80%] m-auto text-sm md:text-base font-light tracking-wide'>
            Powering Precision, Delivering Reliability
          </p>
          
          <div className='flex justify-center py-6'>
            <a
              // href='/contact'
              className='group'
            >
              <button id='contact' className='px-6 py-3 bg-gradient-to-r from-orange-500 to-pink-500 text-white font-medium text-sm rounded-full shadow-lg shadow-orange-500/30 hover:scale-110 hover:shadow-orange-500/60 transition-all duration-300 ease-in-out hover:from-pink-500 hover:to-orange-500 border border-orange-400/50 hover:border-pink-400/50'>
                Get Quote
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;