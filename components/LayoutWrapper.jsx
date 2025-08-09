import React, { useState, useEffect } from 'react';
import Loader from './Loader';
import Navbar from './Navbar';

const LayoutWrapper = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [assetsLoaded, setAssetsLoaded] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [transitionPhase, setTransitionPhase] = useState('loading'); // 'loading', 'transitioning', 'complete'

  useEffect(() => {
    const preloadAssets = async () => {
      const promises = [];
      
      // Preload video
      if (typeof window !== 'undefined') {
        const video = document.createElement('video');
        video.src = '/assets/hero.mp4';
        promises.push(
          new Promise((resolve) => {
            video.addEventListener('loadeddata', resolve);
            video.addEventListener('error', resolve);
          })
        );

        // Preload images
        const images = ['/assets/mainLogo.png'];
        images.forEach(src => {
          const img = new Image();
          img.src = src;
          promises.push(
            new Promise((resolve) => {
              img.onload = resolve;
              img.onerror = resolve;
            })
          );
        });

        const timeoutPromise = new Promise(resolve => setTimeout(resolve, 3000));
        
        try {
          await Promise.race([Promise.all(promises), timeoutPromise]);
        } catch (error) {
          console.log('Some assets failed to load, but continuing...');
        }
      }
      
      setAssetsLoaded(true);
    };

    preloadAssets();
  }, []);

  useEffect(() => {
    if (assetsLoaded) {
      // Minimum loading time for better UX
      const minLoadTime = new Promise(resolve => setTimeout(resolve, 2500));
      
      minLoadTime.then(() => {
        setTransitionPhase('transitioning');
        
        // Start the sophisticated transition
        setTimeout(() => {
          setIsLoading(false);
          setTimeout(() => {
            setShowContent(true);
          }, 200);
        }, 800);
      });
    }
  }, [assetsLoaded]);

  const handleLoadComplete = () => {
    setTransitionPhase('complete');
  };

  return (
    <>
      {/* Enhanced Loader with Transition */}
      {isLoading && (
        <div 
          className={`fixed inset-0 z-[200] transition-all duration-1000 ease-in-out ${
            transitionPhase === 'transitioning' 
              ? 'opacity-0 scale-110 blur-sm' 
              : 'opacity-100 scale-100 blur-0'
          }`}
        >
          <Loader onComplete={handleLoadComplete} />
        </div>
      )}

      {/* Transition Overlay */}
      <div 
        className={`fixed inset-0 z-[150] bg-gradient-to-br from-slate-900 via-slate-800 to-teal-900 transition-all duration-1200 ease-out ${
          transitionPhase === 'complete' 
            ? 'opacity-0 pointer-events-none scale-95' 
            : transitionPhase === 'transitioning'
              ? 'opacity-60 scale-100'
              : 'opacity-0 pointer-events-none'
        }`}
      />

      {/* Main Content with Staggered Animation */}
      <div 
        className={`transition-all duration-1000 ease-out ${
          showContent 
            ? 'opacity-100 translate-y-0 scale-100' 
            : 'opacity-0 translate-y-4 scale-98'
        }`}
      >
        {/* Navbar with Delayed Entrance */}
        <div 
          className={`transition-all duration-800 delay-300 ease-out ${
            showContent 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 -translate-y-4'
          }`}
        >
          <Navbar />
        </div>

        {/* Children Components with Sequential Animation */}
        <div 
          className={`transition-all duration-1000 delay-500 ease-out ${
            showContent 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-6'
          }`}
        >
          {children}
        </div>
      </div>
    </>
  );
};

export default LayoutWrapper;
