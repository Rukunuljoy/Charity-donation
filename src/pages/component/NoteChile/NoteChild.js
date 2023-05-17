import React from 'react';
import Button from '../../shared/Button/Button';

const NoteChild = () => {
    return (
        <div>
             <div className="hero min-h-screen mb-20 mt-20" style={{ backgroundImage: `url(https://i.ibb.co/NLGDKxr/hub-12-18-charity-Hero-1200x900.jpg)` }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div data-aos="fade-right" data-aos-duration="2000" className="text-white">
            <p className='text-xl font-semibold font-sans'>Save Children From Hunger</p>
            <h1 className="my-2 text-2xl text-orange-400 font-serif font-bold">BECAME A PART OF THE WORLD LOREM IPSUM</h1>
            <p className='text-lg'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam quaerat atque, dolore. Amido ipsum <br/> dolor sit amet, consectetur
adipisicing elit.</p>
            <div className='mt-10 items-center justify-center gap-3 flex'>
            <button className='btn btn-outline bg-orange-500 hover:bg-stone-600 h-12 w-52 hover:border-2 hover:border-white text-white rounded-full'>Read more</button>
            <Button/>
            </div>
            
          </div>
        </div>
      </div>
        </div>
    );
};

export default NoteChild;