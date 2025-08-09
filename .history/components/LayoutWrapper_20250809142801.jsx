import React, { useState, useEffect } from 'react';
import Loader from './Loader';
import Navbar from './Navbar';

const LayoutWrapper = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [assetsLoaded, setAssetsLoaded] = useState(false);

  useEffect(() => {
    // Preload critical assets
    const preloadAssets = async () => {
      const promises = [];
      
      // Preload video
      if (document.querySelector('video')) {
        const video = document.createElement('video');
        video.src = '/assets/hero.mp4';
        promises.push(
          new Promise((resolve) => {
            video.addEventListener('loadeddata', resolve);
            video.addEventListener('error', resolve); // Still resolve on error
          })
        );
      }

      // Preload images
      const images = [
        '/assets/mainLogo.png',
        // Add other critical images here
      ];

      images.forEach(src => {
        const img = new Image();
        img.src = src;
        promises.push(
          new Promise((resolve) => {
            img.onload = resolve;
            img.onerror = resolve; // Still resolve on error
          })
        );
      });

      // Wait for all assets or timeout after 5 seconds
      const timeoutPromise = new Promise(resolve => setTimeout(resolve, 5000));
      
      try {
        await Promise.race([
          Promise.all(promises),
          timeoutPromise
        ]);
      } catch (error) {
        console.log('Some assets failed to load, but continuing...');
      }
      
      setAssetsLoaded(true);
    };

    preloadAssets();
  }, []);

  useEffect(() => {
    // Ensure minimum loading time for better UX
    const minLoadTime = new Promise(resolve => setTimeout(resolve, 2500));
    
    Promise.all([minLoadTime, assetsLoaded]).then(() => {
      // Add a small delay to ensure smooth transition
      setTimeout(() => {
        setIsLoading(false);
      }, 500);
    });
  }, [assetsLoaded]);

  const handleLoadComplete = () => {
    setIsLoading(false);
  };

  return (
    <>
      {isLoading && <Loader onComplete={handleLoadComplete} />}
      <div className={`transition-opacity duration-1000 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
        <Navbar />
        {children}
      </div>
    </>
  );
};

export default LayoutWrapper;
