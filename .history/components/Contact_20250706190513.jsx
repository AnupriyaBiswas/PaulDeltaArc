import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Linkedin, FileText } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className='w-full h-screen bg-gradient-to-br from-teal-50 to-cyan-50 flex items-center justify-center p-4'>
      <div className='max-w-6xl w-full bg-white rounded-3xl shadow-2xl overflow-hidden'>
        <div className='grid lg:grid-cols-2 h-full'>
          {/* Left Side - Company Info */}
          <div className='bg-gradient-to-br from-teal-400 to-cyan-600 p-8 lg:p-12 flex flex-col justify-center text-white relative overflow-hidden'>
            <div className='absolute top-0 right-0 w-32 h-32 bg-white opacity-5 rounded-full -translate-y-16 translate-x-16'></div>
            <div className='absolute bottom-0 left-0 w-24 h-24 bg-white opacity-5 rounded-full translate-y-12 -translate-x-12'></div>
            
            <div className='relative z-10'>
              <div className='flex items-center mb-6'>
                <div className='w-12 h-12 bg-white bg-opacity-20 rounded-xl flex items-center justify-center mr-4'>
                  <span className='text-white font-bold text-xl'>P</span>
                </div>
                <div>
                  <h1 className='text-2xl font-bold'>Paul Delta Arc</h1>
                  <p className='text-teal-100 text-sm'>Fire Safety Experts</p>
                </div>
              </div>
              
              <h2 className='text-3xl font-bold mb-4'>Get In Touch</h2>
              <p className='text-teal-100 mb-8 leading-relaxed'>
                Ready to discuss your fire safety project? We're here to provide comprehensive solutions for your industrial, commercial, and residential needs.
              </p>
              
              <div className='space-y-4'>
                <div className='flex items-center'>
                  <div className='w-10 h-10 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mr-4'>
                    <Phone className='w-5 h-5' />
                  </div>
                  <div>
                    <p className='font-medium'>+91 98765 43210</p>
                    <p className='text-sm text-teal-100'>Mon-Fri 9AM-6PM</p>
                  </div>
                </div>
                
                <div className='flex items-center'>
                  <div className='w-10 h-10 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mr-4'>
                    <Mail className='w-5 h-5' />
                  </div>
                  <div>
                    <p className='font-medium'>info@pauldeltaarc.com</p>
                    <p className='text-sm text-teal-100'>24 hour response</p>
                  </div>
                </div>
                
                <div className='flex items-center'>
                  <div className='w-10 h-10 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mr-4'>
                    <MapPin className='w-5 h-5' />
                  </div>
                  <div>
                    <p className='font-medium'>Hyderabad, Telangana</p>
                    <p className='text-sm text-teal-100'>India</p>
                  </div>
                </div>
              </div>
              
              <div className='flex items-center gap-4 mt-8'>
                <a href="https://www.linkedin.com/company/pauldeltaarc" target="_blank" rel="noreferrer" className='w-10 h-10 bg-white bg-opacity-20 rounded-lg flex items-center justify-center hover:bg-opacity-30 transition-all duration-300'>
                  <Linkedin className='w-5 h-5' />
                </a>
                <a href="mailto:info@pauldeltaarc.com" className='w-10 h-10 bg-white bg-opacity-20 rounded-lg flex items-center justify-center hover:bg-opacity-30 transition-all duration-300'>
                  <Mail className='w-5 h-5' />
                </a>
                <a href="#" className='w-10 h-10 bg-white bg-opacity-20 rounded-lg flex items-center justify-center hover:bg-opacity-30 transition-all duration-300'>
                  <FileText className='w-5 h-5' />
                </a>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className='p-8 lg:p-12 flex flex-col justify-center'>
            <h3 className='text-2xl font-bold text-gray-800 mb-6'>Send us a message</h3>
            
            <div className='space-y-4'>
              <div>
                <input
                  type='text'
                  name='name'
                  value={formData.name}
                  onChange={handleInputChange}
                  className='w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-teal-500 focus:outline-none transition-colors duration-300'
                  placeholder='Your Name *'
                />
              </div>
              
              <div className='grid md:grid-cols-2 gap-4'>
                <input
                  type='email'
                  name='email'
                  value={formData.email}
                  onChange={handleInputChange}
                  className='w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-teal-500 focus:outline-none transition-colors duration-300'
                  placeholder='Email Address *'
                />
                <input
                  type='tel'
                  name='phone'
                  value={formData.phone}
                  onChange={handleInputChange}
                  className='w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-teal-500 focus:outline-none transition-colors duration-300'
                  placeholder='Phone Number *'
                />
              </div>
              
              <div>
                <textarea
                  name='message'
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className='w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-teal-500 focus:outline-none transition-colors duration-300 resize-none'
                  placeholder='Tell us about your fire safety requirements... *'
                />
              </div>
              
              <button
                onClick={handleSubmit}
                className='w-full bg-gradient-to-r from-teal-400 to-cyan-600 text-white py-3 px-6 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2'
              >
                <Send className='w-5 h-5' />
                Send Message
              </button>
            </div>
            
            <div className='mt-6 p-4 bg-gray-50 rounded-lg'>
              <p className='text-sm text-gray-600 text-center'>
                <span className='font-medium'>Powering Precision, Delivering Reliability</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;