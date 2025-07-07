import React, { useEffect, useRef } from 'react';
import { FaGithub, FaLinkedinIn, FaMedium, FaYoutube } from 'react-icons/fa';

const Main = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Beam system
    const beams = [];
    const particles = [];
    
    class Beam {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 2;
        this.vy = (Math.random() - 0.5) * 2;
        this.length = Math.random() * 100 + 50;
        this.width = Math.random() * 3 + 1;
        this.opacity = Math.random() * 0.5 + 0.3;
        this.color = `rgba(${Math.random() * 50 + 100}, ${Math.random() * 50 + 200}, ${Math.random() * 50 + 200}, ${this.opacity})`;
      }
      
      update() {
        this.x += this.vx;
        this.y += this.vy;
        
        // Bounce off edges
        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
        
        // Keep in bounds
        this.x = Math.max(0, Math.min(canvas.width, this.x));
        this.y = Math.max(0, Math.min(canvas.height, this.y));
      }
      
      draw() {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(Math.atan2(this.vy, this.vx));
        
        const gradient = ctx.createLinearGradient(0, 0, this.length, 0);
        gradient.addColorStop(0, 'rgba(64, 224, 208, 0)');
        gradient.addColorStop(0.5, this.color);
        gradient.addColorStop(1, 'rgba(64, 224, 208, 0)');
        
        ctx.fillStyle = gradient;
        ctx.fillRect(0, -this.width/2, this.length, this.width);
        ctx.restore();
      }
    }
    
    class Particle {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.vx = (Math.random() - 0.5) * 4;
        this.vy = (Math.random() - 0.5) * 4;
        this.life = 1;
        this.decay = Math.random() * 0.02 + 0.01;
        this.size = Math.random() * 3 + 1;
      }
      
      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.life -= this.decay;
        this.vx *= 0.99;
        this.vy *= 0.99;
      }
      
      draw() {
        ctx.save();
        ctx.globalAlpha = this.life;
        ctx.fillStyle = '#40E0D0';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    }
    
    // Initialize beams
    for (let i = 0; i < 8; i++) {
      beams.push(new Beam());
    }
    
    // Check collision between beams
    const checkCollisions = () => {
      for (let i = 0; i < beams.length; i++) {
        for (let j = i + 1; j < beams.length; j++) {
          const beam1 = beams[i];
          const beam2 = beams[j];
          const dx = beam1.x - beam2.x;
          const dy = beam1.y - beam2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 30) {
            // Create collision particles
            for (let k = 0; k < 5; k++) {
              particles.push(new Particle(
                (beam1.x + beam2.x) / 2,
                (beam1.y + beam2.y) / 2
              ));
            }
            
            // Bounce beams
            beam1.vx += dx * 0.01;
            beam1.vy += dy * 0.01;
            beam2.vx -= dx * 0.01;
            beam2.vy -= dy * 0.01;
          }
        }
      }
    };
    
    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw beams
      beams.forEach(beam => {
        beam.update();
        beam.draw();
      });
      
      // Update and draw particles
      for (let i = particles.length - 1; i >= 0; i--) {
        const particle = particles[i];
        particle.update();
        particle.draw();
        
        if (particle.life <= 0) {
          particles.splice(i, 1);
        }
      }
      
      checkCollisions();
      requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <div id='home' className='relative w-full h-screen overflow-hidden'>
      {/* Animated Background Canvas */}
      <canvas
        ref={canvasRef}
        className='absolute inset-0 w-full h-full'
        style={{
          background: 'linear-gradient(135deg, #0f766e 0%, #134e4a 25%, #115e59 50%, #0f766e 75%, #134e4a 100%)'
        }}
      />
      
      {/* Overlay for better text readability */}
      <div className='absolute inset-0 bg-black bg-opacity-20' />
      
      {/* Content */}
      <div className='relative z-10 w-full h-full flex justify-center items-center'>
        <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
          <div className='text-center'>
            {/* Main Title with Glow Effect */}
            <h1 className='py-4 text-6xl md:text-8xl font-bold text-white relative'>
              <span className='relative z-10 bg-gradient-to-r from-cyan-300 via-white to-cyan-300 bg-clip-text text-transparent animate-pulse'>
                Paul Delta Arc
              </span>
              <span className='absolute inset-0 text-cyan-400 blur-sm opacity-50 animate-pulse'>
                Paul Delta Arc
              </span>
            </h1>
            
            {/* Subtitle with Glass Effect */}
            <div className='relative py-6 mb-8'>
              <div className='absolute inset-0 bg-white bg-opacity-10 backdrop-blur-sm rounded-lg border border-white border-opacity-20' />
              <p className='relative z-10 py-4 text-xl md:text-2xl text-cyan-100 font-medium tracking-wide'>
                Powering Precision, Delivering Reliability
              </p>
            </div>
            
            {/* Social Links with Enhanced Styling */}
            <div className='flex items-center justify-center gap-6 max-w-[400px] mx-auto py-8'>
              <a
                href='https://www.linkedin.com/in/sumanitian/'
                target='_blank'
                rel='noreferrer'
                className='group relative'
              >
                <div className='absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur-md group-hover:blur-lg transition-all duration-300 opacity-75' />
                <div className='relative bg-white bg-opacity-10 backdrop-blur-sm rounded-full p-6 cursor-pointer transition-all duration-300 group-hover:scale-110 group-hover:bg-opacity-20 border border-white border-opacity-20'>
                  <FaLinkedinIn className='text-2xl text-cyan-300 group-hover:text-white transition-colors duration-300' />
                </div>
              </a>
              
              <a
                href='https://github.com/sumanitian'
                target='_blank'
                rel='noreferrer'
                className='group relative'
              >
                <div className='absolute inset-0 bg-gradient-to-r from-gray-400 to-gray-600 rounded-full blur-md group-hover:blur-lg transition-all duration-300 opacity-75' />
                <div className='relative bg-white bg-opacity-10 backdrop-blur-sm rounded-full p-6 cursor-pointer transition-all duration-300 group-hover:scale-110 group-hover:bg-opacity-20 border border-white border-opacity-20'>
                  <FaGithub className='text-2xl text-cyan-300 group-hover:text-white transition-colors duration-300' />
                </div>
              </a>
              
              <a
                href="https://medium.com/@sumanitian"
                target='_blank'
                rel='noreferrer'
                className='group relative'
              >
                <div className='absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full blur-md group-hover:blur-lg transition-all duration-300 opacity-75' />
                <div className='relative bg-white bg-opacity-10 backdrop-blur-sm rounded-full p-6 cursor-pointer transition-all duration-300 group-hover:scale-110 group-hover:bg-opacity-20 border border-white border-opacity-20'>
                  <FaMedium className='text-2xl text-cyan-300 group-hover:text-white transition-colors duration-300' />
                </div>
              </a>
              
              <a
                href="https://www.youtube.com/@sumanitian"
                target='_blank'
                rel='noreferrer'
                className='group relative'
              >
                <div className='absolute inset-0 bg-gradient-to-r from-red-400 to-red-600 rounded-full blur-md group-hover:blur-lg transition-all duration-300 opacity-75' />
                <div className='relative bg-white bg-opacity-10 backdrop-blur-sm rounded-full p-6 cursor-pointer transition-all duration-300 group-hover:scale-110 group-hover:bg-opacity-20 border border-white border-opacity-20'>
                  <FaYoutube className='text-2xl text-cyan-300 group-hover:text-white transition-colors duration-300' />
                </div>
              </a>
            </div>
            
            {/* Decorative Elements */}
            <div className='absolute top-1/4 left-1/4 w-2 h-2 bg-cyan-400 rounded-full animate-ping' />
            <div className='absolute bottom-1/4 right-1/4 w-3 h-3 bg-cyan-300 rounded-full animate-pulse' />
            <div className='absolute top-1/3 right-1/3 w-1 h-1 bg-white rounded-full animate-ping' style={{animationDelay: '0.5s'}} />
            <div className='absolute bottom-1/3 left-1/3 w-2 h-2 bg-cyan-500 rounded-full animate-pulse' style={{animationDelay: '1s'}} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;