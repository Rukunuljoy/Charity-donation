import React from 'react';
import { useState } from 'react';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';

const ProjectReview = () => {
    const [counterOn , setCounterOn] = useState(false)
    return (
        <ScrollTrigger onEnter={()=>setCounterOn(true)} 
          onExit={()=>setCounterOn(false)}
          >
         <div className="flex my-8 text-white relative justify-around items-center bg-[url('https://i.ibb.co/NLGDKxr/hub-12-18-charity-Hero-1200x900.jpg')] py-16 md:py-16" style={{
            backgroundRepeat:'no-repeat', backgroundSize:'cover', 
         }}
         >
            <div className='w-full absolute top-0 left-0 bg-opacity-75 h-full '></div>
         <div className='flex z-10 bg-slate-900 border px-10 py-5 flex-col items-center'>
            {counterOn && <CountUp className='text-5xl md:text-6xl font-bold' start={0} end={10} duration={2} delay={0}/>}
            <p className='text-xl md:text-2xl'>Team Members</p>
         
         </div>
         <div className='flex z-10 bg-slate-900 border px-10 py-5 flex-col items-center'>
            {counterOn && <CountUp className='text-5xl md:text-6xl font-bold' start={0} end={35} duration={2} delay={0}/>}
            <p className='text-xl md:text-2xl'>Winning Awards</p>
         
         </div>
         <div className='flex z-10 bg-slate-900 border px-10 py-5 flex-col items-center'>
            {counterOn && <CountUp className='text-5xl md:text-6xl font-bold' start={0} end={99} duration={2} delay={0}/>}
            <p className='text-xl md:text-2xl'>Experienced</p>
         
         </div>
         <div className='flex z-10 bg-slate-900 px-10 py-5 border flex-col items-center'>
            {counterOn && <CountUp className='text-5xl md:text-6xl font-bold' start={0} end={100} duration={2} delay={0}/>}
            <p className='text-xl md:text-2xl'>Projects Done</p>
         
         </div>
         </div>
          </ScrollTrigger>
    );
};

export default ProjectReview;