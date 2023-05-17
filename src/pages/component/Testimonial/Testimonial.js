import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Pagination , Autoplay, Navigation} from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import { FaStar, FaUser } from 'react-icons/fa';

const Testimonial = () => {

   const TestimonialData=[
    {
        id:1,
        rating:"4.5",
        desc:"Swiper - is the free and most modern mobile touch slider with hardware accelerated transitions and amazing native behavior. It is intended to be used in mobile websites, mobile web apps, and mobile native/hybrid apps.",
        img:"https://i.ibb.co/DYmWN4K/pexels-jonathan-borba-2983101.jpg",
        name:"jonh",
        date:"02-12-2023"

    },
    {
        id:2,
        rating:"3.5",
        desc:"Swiper - is the free and most modern mobile touch slider with hardware accelerated transitions and amazing native behavior. It is intended to be used in mobile websites, mobile web apps, and mobile native/hybrid apps.",
        img:"https://i.ibb.co/DYmWN4K/pexels-jonathan-borba-2983101.jpg",
        name:"daniel",
        date:"02-12-2023"

    },
    {
        id:3,
        rating:"4.0",
        desc:"Swiper - is the free and most modern mobile touch slider with hardware accelerated transitions and amazing native behavior. It is intended to be used in mobile websites, mobile web apps, and mobile native/hybrid apps.",
        img:"https://i.ibb.co/DYmWN4K/pexels-jonathan-borba-2983101.jpg",
        name:"Rock",
        date:"02-12-2023"

    },
    {
        id:4,
        rating:"5",
        desc:"Swiper - is the free and most modern mobile touch slider with hardware accelerated transitions and amazing native behavior. It is intended to be used in mobile websites, mobile web apps, and mobile native/hybrid apps.",
        img:"https://i.ibb.co/DYmWN4K/pexels-jonathan-borba-2983101.jpg",
        name:"vitory",
        date:"02-12-2023"

    },
    {
        id:5,
        rating:"4.5",
        desc:"Swiper - is the free and most modern mobile touch slider with hardware accelerated transitions and amazing native behavior. It is intended to be used in mobile websites, mobile web apps, and mobile native/hybrid apps.",
        img:"https://i.ibb.co/DYmWN4K/pexels-jonathan-borba-2983101.jpg",
        name:"donald",
        date:"02-12-2023"

    },
   ]
    

    return (
        <section>
               <div className='mx-5'>

               <div className='my-10'>
                    <h2 className=" text-4xl md:text-4xl font-bold text-center">
                    Testimonials
                    </h2>
                    <p className='text-center mt-4 '>HAPPY CLIENTS ABOUT US</p>
                </div>
                <Swiper
                    modules={[Pagination ,Navigation, Autoplay]}
                    breakpoints={{
                        360:{
                            slidesPerView:1,
                            spaceBetween:30
                        },
                        768:{
                            slidesPerView:2,
                            spaceBetween:30
                        },
                        991:{
                            slidesPerView:3,
                            spaceBetween:30
                        },
                    }}
                    autoplay={{
                        delay:1500
                    }}
                    navigation
                    loop={true}
                    pagination={{
                    clickable: true,
                    }}
                    className="mySwiper max-w-screen-xl  mx-auto "
                >

                {
                    TestimonialData.map((rvw) => <SwiperSlide key={rvw._id} className='bg-white rounded-lg  text-black p-10 w-96'>
                        <div>
                        <div className='flex justify-center gap-5'>
                                <div className='ml-2'>
                                    <h3 className='text-xl font-medium'>
                                        {rvw.name}
                                    </h3>
                                    <p className='text-xs text-slate-500'>
                                        {rvw.date}
                                    </p>
                                </div>
                            </div>
                            <div className='font-bold text-lg mb-3 flex text-cyan-900'>
                                <div>
                                    Rating: <span className='mx-3'>
                                        {rvw.rating}</span>
                                </div>
                                <div>
                                    <FaStar className='text-orange-700 mt-1'></FaStar>
                                </div>
                            </div>
                            <p className='mb-5 text-md h-36 text-justify'>{rvw.desc.slice(0, 100) + "..."}</p>
                          
                        </div>
                    </SwiperSlide>)
                }
       
                </Swiper>
            </div>
        </section>
    );
};

export default Testimonial;