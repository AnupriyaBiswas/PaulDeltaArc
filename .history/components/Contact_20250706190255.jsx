import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, User, MessageCircle, Building, Clock, ArrowUp, Linkedin, Github, FileText } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    company: '',
    subject: '',
    message: ''
  });

  const [hoveredCard, setHoveredCard] = useState(null);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      content: "+91 98765 43210",
      subContent: "Mon-Fri 9AM-6PM",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Mail,
      title: "Email Us",
      content: "info@pauldeltaarc.com",
      subContent: "We respond within 24 hours",
      color: "from-teal-500 to-green-500"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      content: "Hyderabad, Telangana",
      subContent: "India",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Clock,
      title: "Business Hours",
      content: "Mon - Fri: 9AM - 6PM",
      subContent: "Sat: 10AM - 4PM",
      color: "from-orange-500 to-red-500"
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      name: "LinkedIn",
      url: "https://www.linkedin.com/company/pauldeltaarc",
      color: "from-blue-600 to-blue-700"
    },
    {
      icon: Mail,
      name: "Email",
      url: "mailto:info@pauldeltaarc.com",
      color: "from-teal-600 to-teal-700"
    },
    {
      icon: FileText,
      name: "Brochure",
      url: "#",
      color: "from-purple-600 to-purple-700"
    }
  ];

  return (
    <div className='w-full bg-gradient-to-br from-teal-50 to-cyan-50 min-h-screen pt-20 pb-8'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Header Section */}
        <div className='text-center mb-16'>
          <div className='flex items-center justify-center mb-6'>
            <h1 className='text-4xl md:text-5xl font-bold text-[#2c3e50] mr-4'>
              Contact Us
            </h1>
            <div className='flex items-center'>
              <div className='w-12 h-12 bg-gradient-to-br from-teal-400 to-cyan-600 rounded-lg flex items-center justify-center mr-3'>
                <span className='text-white font-bold text-xl'>P</span>
              </div>
              <div>
                <div className='text-[#2c3e50] font-bold text-lg'>Paul Delta Arc</div>
                <div className='text-teal-600 text-sm'>Powering Precision, Delivering Reliability</div>
              </div>
            </div>
          </div>
          <div className='w-32 h-1 bg-gradient-to-r from-teal-400 to-cyan-600 mx-auto mb-6'></div>
          <p className='text-lg text-gray-600 max-w-3xl mx-auto'>
            Ready to discuss your fire safety project? We're here to help you every step of the way.
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16'>
          {contactInfo.map((info, index) => (
            <div
              key={index}
              className='group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 p-6 cursor-pointer'
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${info.color} rounded-2xl flex items-center justify-center shadow-lg mb-4 transform transition-all duration-300 ${
                hoveredCard === index ? 'scale-110 rotate-3' : ''
              }`}>
                <info.icon className='w-8 h-8 text-white' />
              </div>
              <h3 className='text-lg font-bold text-[#2c3e50] mb-2'>
                {info.title}
              </h3>
              <p className='text-gray-700 font-medium mb-1'>
                {info.content}
              </p>
              <p className='text-sm text-gray-500'>
                {info.subContent}
              </p>
              <div className={`w-8 h-1 bg-gradient-to-r ${info.color} rounded-full mt-4 transform transition-all duration-300 ${
                hoveredCard === index ? 'scale-x-100' : 'scale-x-0'
              } origin-left`}></div>
            </div>
          ))}
        </div>

        {/* Main Contact Section */}
        <div className='grid lg:grid-cols-5 gap-8 mb-16'>
          {/* Left Side - Company Info */}
          <div className='col-span-3 lg:col-span-2 w-full'>
            <div className='bg-white rounded-2xl shadow-xl p-8 h-full'>
              <div className='mb-8'>
                <div className='w-full h-48 bg-gradient-to-br from-teal-400 to-cyan-600 rounded-xl mb-6 flex items-center justify-center'>
                  <div className='text-center text-white'>
                    <Building className='w-16 h-16 mx-auto mb-4' />
                    <h3 className='text-2xl font-bold'>Fire Safety Experts</h3>
                    <p className='text-teal-100'>Professional Solutions</p>
                  </div>
                </div>
                
                <h2 className='text-2xl font-bold text-[#2c3e50] mb-4'>
                  Paul Delta Arc
                </h2>
                <p className='text-gray-600 mb-6'>
                  Leading fire safety consultants providing comprehensive solutions for industrial, commercial, and residential projects across India.
                </p>
                <p className='text-gray-600 mb-6'>
                  We are available for project consultations and system installations. Contact us to discuss your fire safety requirements.
                </p>
              </div>

              <div className='border-t pt-6'>
                <p className='text-sm font-semibold text-gray-700 mb-4 uppercase tracking-wide'>
                  Connect With Us
                </p>
                <div className='flex items-center gap-4'>
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target='_blank'
                      rel='noreferrer'
                      className='group'
                    >
                      <div className={`w-12 h-12 bg-gradient-to-br ${social.color} rounded-full flex items-center justify-center shadow-lg cursor-pointer transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                        <social.icon className='w-6 h-6 text-white' />
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className='col-span-3 w-full'>
            <div className='bg-white rounded-2xl shadow-xl p-8'>
              <h3 className='text-2xl font-bold text-[#2c3e50] mb-6'>
                Get In Touch
              </h3>
              <div className='space-y-6'>
                <div className='grid md:grid-cols-2 gap-6'>
                  <div>
                    <label className='block text-sm font-semibold text-gray-700 mb-2 uppercase tracking-wide'>
                      Name *
                    </label>
                    <input
                      type='text'
                      name='name'
                      value={formData.name}
                      onChange={handleInputChange}
                      className='w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-teal-500 focus:outline-none transition-colors duration-300'
                      placeholder='Your full name'
                    />
                  </div>
                  <div>
                    <label className='block text-sm font-semibold text-gray-700 mb-2 uppercase tracking-wide'>
                      Phone Number *
                    </label>
                    <input
                      type='tel'
                      name='phone'
                      value={formData.phone}
                      onChange={handleInputChange}
                      className='w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-teal-500 focus:outline-none transition-colors duration-300'
                      placeholder='Your phone number'
                    />
                  </div>
                </div>

                <div className='grid md:grid-cols-2 gap-6'>
                  <div>
                    <label className='block text-sm font-semibold text-gray-700 mb-2 uppercase tracking-wide'>
                      Email *
                    </label>
                    <input
                      type='email'
                      name='email'
                      value={formData.email}
                      onChange={handleInputChange}
                      className='w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-teal-500 focus:outline-none transition-colors duration-300'
                      placeholder='your.email@example.com'
                    />
                  </div>
                  <div>
                    <label className='block text-sm font-semibold text-gray-700 mb-2 uppercase tracking-wide'>
                      Company
                    </label>
                    <input
                      type='text'
                      name='company'
                      value={formData.company}
                      onChange={handleInputChange}
                      className='w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-teal-500 focus:outline-none transition-colors duration-300'
                      placeholder='Your company name'
                    />
                  </div>
                </div>

                <div>
                  <label className='block text-sm font-semibold text-gray-700 mb-2 uppercase tracking-wide'>
                    Subject *
                  </label>
                  <input
                    type='text'
                    name='subject'
                    value={formData.subject}
                    onChange={handleInputChange}
                    className='w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-teal-500 focus:outline-none transition-colors duration-300'
                    placeholder='Project inquiry, consultation, etc.'
                  />
                </div>

                <div>
                  <label className='block text-sm font-semibold text-gray-700 mb-2 uppercase tracking-wide'>
                    Message *
                  </label>
                  <textarea
                    name='message'
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    className='w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-teal-500 focus:outline-none transition-colors duration-300 resize-none'
                    placeholder='Tell us about your fire safety requirements...'
                  />
                </div>

                <button
                  onClick={handleSubmit}
                  className='w-full bg-gradient-to-r from-teal-400 to-cyan-600 text-white py-4 px-6 rounded-lg font-semibold text-lg hover:shadow-lg transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2'
                >
                  <Send className='w-5 h-5' />
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Back to Top */}
        <div className='flex justify-center'>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className='bg-white rounded-full shadow-lg p-4 cursor-pointer hover:shadow-xl transition-all duration-300 hover:scale-110 group'
          >
            <ArrowUp className='w-6 h-6 text-teal-600 group-hover:text-teal-700' />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;