import React from 'react';
import { useLocation } from 'react-router-dom';

const Gallery = () => {
  const location = useLocation();
  const galleryData = [
    {
      id:1,
      img:'https://i.ibb.co/mtRMhJH/yannis-h-ua-Pa-EM7-Mi-QQ-unsplash.jpg',
      des:'Painted between 1503 and 1517, Da Vinci’s alluring portrait hasbeen dogged by two questions since the day it was made: Who’s the subject and why is she smiling?'
    },
    {
      id:2,
      img:'https://i.ibb.co/7bPxWBC/about2.jpg',
      des:'Painted between 1503 and 1517, Da Vinci’s alluring portrait hasbeen dogged by two questions since the day it was made: Who’s the subject and why is she smiling?'
    },
    {
      id:3,
      img:'https://i.ibb.co/vmc0JH2/larm-rmah-AEa-TUnvneik-unsplash.jpg',
      des:'Painted between 1503 and 1517, Da Vinci’s alluring portrait hasbeen dogged by two questions since the day it was made: Who’s the subject and why is she smiling?'
    },
    {
      id:4,
      img:'https://i.ibb.co/tBq3knn/nathan-dumlao-Xavq7l-Kj5j8-unsplash.jpg',
      des:'Painted between 1503 and 1517, Da Vinci’s alluring portrait hasbeen dogged by two questions since the day it was made: Who’s the subject and why is she smiling?'
    },
    {
      id:5,
      img:'https://i.ibb.co/8zV4c1Y/johann-walter-bantz-wo-E5-G6zz-FQo-unsplash.jpg',
      des:'Painted between 1503 and 1517, Da Vinci’s alluring portrait hasbeen dogged by two questions since the day it was made: Who’s the subject and why is she smiling?'
    },
    {
      id:6,
      img:'https://i.ibb.co/mtRMhJH/yannis-h-ua-Pa-EM7-Mi-QQ-unsplash.jpg',
      des:'Painted between 1503 and 1517, Da Vinci’s alluring portrait hasbeen dogged by two questions since the day it was made: Who’s the subject and why is she smiling?'
    },
    {
      id:7,
      img:'https://i.ibb.co/7bPxWBC/about2.jpg',
      des:'Painted between 1503 and 1517, Da Vinci’s alluring portrait hasbeen dogged by two questions since the day it was made: Who’s the subject and why is she smiling?'
    },
    {
      id:8,
      img:'https://i.ibb.co/mtRMhJH/yannis-h-ua-Pa-EM7-Mi-QQ-unsplash.jpg',
      des:'Painted between 1503 and 1517, Da Vinci’s alluring portrait hasbeen dogged by two questions since the day it was made: Who’s the subject and why is she smiling?'
    },
    {
      id:9,
      img:'https://i.ibb.co/8zV4c1Y/johann-walter-bantz-wo-E5-G6zz-FQo-unsplash.jpg',
      des:'Painted between 1503 and 1517, Da Vinci’s alluring portrait hasbeen dogged by two questions since the day it was made: Who’s the subject and why is she smiling?'
    },
  ]
    return (
        <>
           <div className='text-center lg:mt-16 md:mt-12 sm:mt-10'>
           <h2 className='text-3xl font-semibold my-2'>Our valuable <span className='text-orange-500'>memories</span></h2>
            <p>"Class is dead", says Foucault; however, according to Reicher, it is not so much class that <br/> is dead, it is not so much class that is dead,</p>
           </div>
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-6 row-gap-5 mb-8 lg:grid-cols-3 sm:row-gap-6 sm:grid-cols-1">
        {
          location.pathname === '/' ? 
          (galleryData.length > 0  && galleryData?.slice(0, 3).map((gallery)=>(<a key={gallery.id} href="/" aria-label="View Item">
          <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
            <img
              className="object-cover w-full h-56 md:h-64 xl:h-80"
              src={gallery.img}
              alt=""
            />
            <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
              <p className="text-sm tracking-wide text-gray-300">
                {gallery.des}
              </p>
            </div>
          </div>
        </a>))):(galleryData.map((gallery)=>(<a key={gallery.id} href="/" aria-label="View Item">
          <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
            <img
              className="object-cover w-full h-56 md:h-64 xl:h-80"
              src={gallery.img}
              alt=""
            />
            <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
              <p className="text-sm tracking-wide text-gray-300">
                {gallery.des}
              </p>
            </div>
          </div>
        </a>)))
        }:
      </div>
      {
          location.pathname === '/' ? 
          (
            <div className="text-center">
            <a
              href="/gallery"
              aria-label=""
              className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              View gallery
              <svg
                className="inline-block w-3 ml-2"
                fill="currentColor"
                viewBox="0 0 12 12"
              >
                <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
              </svg>
            </a>
          </div>
          ):(
            <>
            
            </>
          )
      }
      
    </div>
        </>
    );
};

export default Gallery;