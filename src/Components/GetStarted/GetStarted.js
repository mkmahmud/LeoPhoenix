import React from 'react';
import { Link } from 'react-router-dom';
import { FaAngleDoubleRight } from 'react-icons/fa';
import './Getstarted.css';

const GetStarted = () => {
    return ( 
        <div className='relative getstarted md:pl-[120px] z-20'>
            
            <div className='px-2 py-10 h-full z-10 text-left'>
                <h2 className='text-[32px] leading-[38px] font-bold my-24' style={{ fontFamily: `'Inter', sans-serif` }}>What are you waiting <br /> for ? Let’s discuss your <br /> next project.</h2>
                <p className='w-full md:w-1/2'>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.”</p>
                <div className='w-full md:w-1/2'>
                    
                    <Link to='/' className='flex items-center justify-left pt-24 text-[#FF5B00] text-linkText font-semibold'><span className='px-4'>Let’s Get Started</span> <FaAngleDoubleRight></FaAngleDoubleRight> </Link>
                </div>
            </div>
        </div>
    );
};

export default GetStarted;