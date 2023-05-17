import React from 'react';
import './banner.css'

const BannerItem = ({slide}) => {
    const {image, id, prev ,next} = slide;
    return (
        <div id={`slide${id}`} className="carousel-item  relative w-full">
    <div className='carousel-img w-full bg-gray-900 bg-opacity-75'>
    <img src={image} alt="" className="w-full bg-gray-900 bg-opacity-75 rounded-xl"/>
    </div>
    <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-2/4">
      <h1 className='lg:text-6xl md:text-xl sm:text-xl font-bold text-white'>
        Change children's life & <br/> save
      </h1>
    </div>
    <div className="absolute flex justify-end transform -translate-y-1/2 w-2/5 left-24 top-2/3">
      <p className='text-white text-xl '>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
    </div>
    <div className="absolute flex justify-start transform -translate-y-1/2 w-2/5 left-24 top-3/4">
    <button className="btn text-white hover:bg-orange-500 hover:border-none btn-outline mr-5">Donate Us</button>
    <button className="btn text-white hover:bg-orange-500 hover:border-none btn-outline">Our Causes</button>
    </div>
    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
      <a href={`#slide${prev}`} className="btn btn-circle mr-5">❮</a> 
      <a href={`#slide${next}`} className="btn btn-circle">❯</a>
    </div>
  </div> 
    );
};

export default BannerItem;