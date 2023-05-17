import React from 'react';
import Button from '../../shared/Button/Button';

const DonateService = () => {
        return (
          <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="flex flex-col mb-6 lg:justify-between lg:flex-row md:mb-8">
              <h2 className="max-w-lg mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none md:mb-6 group">
              URGENT <span className='text-orange-600'>CAUSE</span></h2>
              <Button/>
            </div>
            <div className="grid gap-6 row-gap-5 mb-8 lg:grid-cols-3 sm:row-gap-6 md:grid-cols-2 sm:grid-cols-1">
              <a href="/" aria-label="View Item" className='border'>
                <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
                  <img
                    className="object-cover w-full h-56 md:h-64 xl:h-80"
                    src="https://i.ibb.co/s98Q5sP/1.jpg"
                    alt=""
                  />
                  <div className="absolute inset-x-0 bottom-0 px-6 py-4 bg-black bg-opacity-75">
                    <p className="text-sm font-medium tracking-wide text-white">
                      Sed ut perspiciatis unde omnis iste natus error
                    </p>
                  </div>
                  
                </div>
                <div className='p-5'>
                <input type="range" min="0" max="100" value="40" className="range my-5" />
                <h3 className='text-xl font-semibold my-2'>Childrens to get their home</h3>
                <p>Reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
                <hr className='my-5'/>
                <div className='flex justify-between'>
                  <p>Goal: $75000</p>
                  <p>Raised: $58000</p>
                </div>
                </div>
              </a>
              <a href="/" aria-label="View Item" className='border'>
                <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
                  <img
                    className="object-cover w-full h-56 md:h-64 xl:h-80"
                    src="https://i.ibb.co/Nxvxspt/2.jpg"
                    alt=""
                  />
                  <div className="absolute inset-x-0 bottom-0 px-6 py-4 bg-black bg-opacity-75">
                    <p className="text-sm font-medium tracking-wide text-white">
                      Leverage agile frameworks to provide a robust synopsis
                    </p>
                  </div>
                </div>
                <div className='p-5'>
                <input type="range" min="0" max="100" value="75" className="range my-5" />
                <h3 className='text-xl font-semibold my-2'>Childrens to get their home</h3>
                <p>Reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
                <hr className='my-5'/>
                <div className='flex justify-between'>
                  <p>Goal: $75000</p>
                  <p>Raised: $58000</p>
                </div>
                </div>
              </a>
              <a href="/" aria-label="View Item"  className='border'>
                <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
                  <img
                    className="object-cover w-full h-56 md:h-64 xl:h-80"
                    src="https://i.ibb.co/v1Yc2cH/3.jpg"
                    alt=""
                  />
                  <div className="absolute inset-x-0 bottom-0 px-6 py-4 bg-black bg-opacity-75">
                    <p className="text-sm font-medium tracking-wide text-white">
                      Dingy I'm tellin' you rhubaahb Bangah Jo-Jeezly
                    </p>
                  </div>
                </div>
                <div className='p-5'>
                <input type="range" min="0" max="100" value="50" className="range my-5" />
                <h3 className='text-xl font-semibold my-2'>Childrens to get their home</h3>
                <p>Reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
                <hr className='my-5'/>
                <div className='flex justify-between'>
                  <p>Goal: $75000</p>
                  <p>Raised: $58000</p>
                </div>
                </div>
              </a>
            </div>
            <div className="text-center">
              <a
                href="/"
                aria-label=""
                className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
              >
                See more
                <svg
                  className="inline-block w-3 ml-2"
                  fill="currentColor"
                  viewBox="0 0 12 12"
                >
                  <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                </svg>
              </a>
            </div>
          </div>
        );
      };

export default DonateService;