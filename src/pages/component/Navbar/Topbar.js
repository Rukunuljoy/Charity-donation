import React from 'react';
import { FaFacebook,FaLinkedin,FaInstagram,FaTwitter,FaPhoneAlt } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { Link } from 'react-router-dom';
const Topbar = () => {
    return (
        <div className='md:flex justify-between bg-gray-200 py-4 border-b px-4 sm:px-10 lg:px-20 hidden font-jost overflow-hidden'>
            <div className='flex items-center'>
                <div className='flex  gap-8 items-center'>
                    <p className='text-[14px]'><span className='flex justify-center hover:text-orange-500 text-md gap-2 items-center'><SiGmail size={30}/>rukunuljoypub58@gmail.com</span></p>
                    <p className='text-[14px]'><span className='flex justify-center hover:text-orange-500 text-md gap-2 items-center'><FaPhoneAlt size={30}/>(+880)01721345499</span></p>
                </div>
            </div>
            <div className='flex gap-4 text-lg justify-center items-center'>
                <Link><FaFacebook size={25} className='hover:text-orange-500'/></Link>
                <Link><FaLinkedin size={25} className='hover:text-orange-500'/></Link>
                <Link><FaInstagram size={25} className='hover:text-orange-500'/></Link>
                <Link><FaTwitter size={25} className='hover:text-orange-500'/></Link>
            </div>
        </div>
    );
};

export default Topbar;