import React from 'react';
import './AboutContent.css';
import aboutContent from '../../../Assets/images/aboutContent.png'

const AboutContent = () => {
    return (
        <div className='relative  pb-[100px]'>
            <div className='about-page-shadow-left rounded-full  md:-top-[300px] -left-[353px] -z-10'></div>
            {/* <div className='about-page-shadow-right rounded-full -bottom-[300px] -right-[300px]  md:-right-[250px]'></div> */}
            <div className='about-background-shadow absolute  left-1/2 top-[200px] -z-10'></div>
            
            <div className='about-background-shadow-bottom absolute left-0 -bottom-[500px] -z-10'></div>

            <div className='h-full w-full px-2 md:px-10 top-0 md:flex justify-around items-start  '>
                <div className='w-full md:w-1/2'>
                    <div className='text-center md:w-[500px] mx-auto mt-32  '>
                        <h2 className='text-title text-center font-bold mb-10 '>
                            We assist companies in developing innovative digital goods and experiences.
                        </h2>
                        <p className='text-left py-10 font-normal'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                </div>
                <div className='w-full md:w-1/2  '>
                    <img src={aboutContent} className=' mt-4  block mx-auto' alt="" />
                </div>
            </div>
        </div>
    );
};

export default AboutContent;