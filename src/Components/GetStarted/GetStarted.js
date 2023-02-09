import React from 'react';
import getStartBg from '../../Assets/getStartedBg.png'
import getStartBgMobile from '../../Assets/getStartMobile.png'
import { Link } from 'react-router-dom';
import { FaAngleDoubleRight } from 'react-icons/fa';

const GetStarted = () => {
    return (
        <div className='relative'>
            <img src={getStartBg} className='absolute -z-10 hidden md:block' alt="" />
            <img src={getStartBgMobile} className='absolute -z-10 md:hidden' alt="" />
            <div className='px-2 py-10 md:p-10 h-full z-10 text-left'>
                <h2 className='text-3xl font-bold my-24'>What are you waiting <br /> for ? Let’s discuss your <br /> next project.</h2>
                <p className='w-full md:w-1/2'>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.”</p>
                <div className='w-full md:w-1/2'>
                    
                    <Link to='/' className='flex items-center justify-start pt-24 text-[#FF5B00] text-lg font-bold'><span className='px-4'>Let’s Get Started</span> <FaAngleDoubleRight></FaAngleDoubleRight> </Link>
                </div>
            </div>
        </div>
    );
};

export default GetStarted;