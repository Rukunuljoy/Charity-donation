import React from 'react';

const HeroSection = () => {
    return (
        <div className="hero min-h-screen bg-slate-700 mb-20 mt-20" >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div data-aos="fade-right" data-aos-duration="2000" className="text-white">
            <p className='text-xl font-semibold'>ARE YOU READY FOR THIS OFFER</p>
            <h1 className="mb-2 text-6xl font-bold">50% Offer For Very First 50</h1>
            <h2 className='text-5xl font-lg'>Sellers & customers</h2>
            <div className='mt-10'>
            <button className="btn font-serif btn-outline hover:bg-zinc-900 border-none mr-10">Get Started</button>
            </div>
            
          </div>
        </div>
      </div>
    );
};

export default HeroSection;