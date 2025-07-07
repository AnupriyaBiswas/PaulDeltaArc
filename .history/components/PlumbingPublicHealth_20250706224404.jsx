{/* Main Content */}
        <div className='grid md:grid-cols-5 gap-6'>
          {/* Left Column - 10 Services in 5 Rows */}
          <div className='md:col-span-3 space-y-4'>
            {Array.from({ length: 5 }, (_, rowIndex) => (
              <div key={rowIndex} className='grid grid-cols-2 gap-4'>
                {scopeServices.slice(rowIndex * 2, rowIndex * 2 + 2).map((service, index) => {
                  const cardIndex = rowIndex * 2 + index;
                  return (
                    <div
                      key={cardIndex}
                      className='group bg-white rounded-xl shadow p-4 hover:shadow-lg transition duration-200'
                      onMouseEnter={() => setHoveredCard(cardIndex)}
                      onMouseLeave={() => setHoveredCard(null)}
                    >
                      <div className='flex items-start space-x-3'>
                        <div className={`w-10 h-10 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${
                          hoveredCard === cardIndex ? 'scale-110 rotate-3' : ''
                        }`}>
                          <service.icon className='w-5 h-5 text-white' />
                        </div>
                        <div className='flex-1'>
                          <h4 className='text-sm font-bold text-[#2c3e50] mb-1'>{service.title}</h4>
                          <p className='text-xs text-gray-600'>{service.description}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            ))}
          </div>

          {/* Right Column - 2 Bigger Execution Cards */}
          <div className='md:col-span-2 space-y-4'>
            {executionAspects.map((aspect, index) => (
              <div
                key={index}
                className='bg-gradient-to-br from-teal-100 to-cyan-100 rounded-xl p-6 hover:shadow-lg transition duration-200'
                onMouseEnter={() => setHoveredCard(index + 20)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className='flex items-start space-x-4'>
                  <div className={`w-14 h-14 bg-gradient-to-br ${aspect.color} rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${
                    hoveredCard === index + 20 ? 'scale-110 rotate-3' : ''
                  }`}>
                    <aspect.icon className='w-7 h-7 text-white' />
                  </div>
                  <div className='flex-1'>
                    <h4 className='text-lg font-bold text-[#2c3e50] mb-2'>{aspect.title}</h4>
                    <p className='text-sm text-teal-600 mb-3 font-semibold'>{aspect.subtitle}</p>
                    <p className='text-sm text-gray-600'>{aspect.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>