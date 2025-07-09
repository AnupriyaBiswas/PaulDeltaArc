import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-br from-teal-50 to-cyan-50 border-t border-gray-100 relative z-50 block">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-gradient-to-br from-teal-50 to-cyan-50">
        <div className="flex flex-col items-center space-y-4">
          
          {/* Copyright and Credits */}
          <div className="text-center space-y-2">
            <p className="text-gray-700 font-semibold text-sm">
              Copyright © 2025 Paul Delta Arc
            </p>
            <p className="text-gray-600 text-sm">
              Website Designed, Hosted, and Maintained by: 
              <span className="font-medium text-teal-700 hover:text-teal-800 transition-colors duration-300">
                {' '}Anupriya Biswas & Suman Prasad
              </span>
            </p>
          </div>

          {/* Decorative line */}
          <div className="w-24 h-0.5 bg-gradient-to-r from-teal-400 to-cyan-400 rounded-full"></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;