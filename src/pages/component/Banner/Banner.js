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
      image: 'https://i.ibb.co/tBq3knn/nathan-dumlao-Xavq7l-Kj5j8-unsplash.jpg',
      prev: 1,
      id: 2,
      next: 3
  },
  {
      image: 'https://i.ibb.co/vmc0JH2/larm-rmah-AEa-TUnvneik-unsplash.jpg',
      prev: 2,
      id: 3,
      next: 4
  },
  {
      image: 'https://i.ibb.co/8zV4c1Y/johann-walter-bantz-wo-E5-G6zz-FQo-unsplash.jpg',
      prev: 3,
      id: 4,
      next: 1
  },
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