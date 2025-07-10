import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-900/20 to-cyan-900/20"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(14,165,233,0.1),transparent_70%)]"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          
          {/* Copyright and Credits */}
          <div className="space-y-4 mb-8">
            <p className="text-gray-400 font-semibold text-sm">
              Copyright © 2025 Paul Delta Arc
            </p>
            <p className="text-gray-400 text-sm">
              Website Designed, Hosted, and Maintained by: 
              <span className="font-medium text-teal-400 hover:text-teal-300 transition-colors duration-300">
                {' '}
                <a
                  href="https://www.linkedin.com/in/anupriya-biswas/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  Anupriya Biswas
                </a>{' '}
                &amp;{' '}
                <a
                  href="https://sumanprasad.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  Suman Prasad
                </a>
              </span>
            </p>
          </div>

          {/* Decorative line */}
          <div className="w-24 h-0.5 bg-gradient-to-r from-teal-400 to-cyan-400 rounded-full mx-auto"></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
