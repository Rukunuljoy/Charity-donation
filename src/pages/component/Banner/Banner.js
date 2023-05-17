import React from 'react';
import BannerItem from './BannerItem';


const bannerData = [
  {
      image: 'https://i.ibb.co/mtRMhJH/yannis-h-ua-Pa-EM7-Mi-QQ-unsplash.jpg',
      prev: 6,
      id: 1,
      next: 2
  },
  {
      image: 'https://i.ibb.co/mtRMhJH/yannis-h-ua-Pa-EM7-Mi-QQ-unsplash.jpg',
      prev: 1,
      id: 2,
      next: 3
  },
  {
      image: 'https://i.ibb.co/mtRMhJH/yannis-h-ua-Pa-EM7-Mi-QQ-unsplash.jpg',
      prev: 2,
      id: 3,
      next: 4
  },
  {
      image: 'https://i.ibb.co/mtRMhJH/yannis-h-ua-Pa-EM7-Mi-QQ-unsplash.jpg',
      prev: 3,
      id: 4,
      next: 5
  },
  {
      image: 'https://i.ibb.co/mtRMhJH/yannis-h-ua-Pa-EM7-Mi-QQ-unsplash.jpg',
      prev: 4,
      id: 5,
      next: 6
  },
  {
      image: 'https://i.ibb.co/mtRMhJH/yannis-h-ua-Pa-EM7-Mi-QQ-unsplash.jpg',
      prev: 5,
      id: 6,
      next: 1
  }
]

const Banner = () => {
    return (
        <div className="carousel w-full py-10">
          {
            bannerData.map(slide => <BannerItem
              key={slide.id}
              slide ={slide}
            
            ></BannerItem>)
          }
        </div>
    );
};

export default Banner;