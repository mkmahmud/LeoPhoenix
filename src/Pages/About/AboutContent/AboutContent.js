import React from 'react';
import './AboutContent.css';
import aboutContent from '../../../Assets/images/aboutContent.png'

const AboutContent = () => {
    return (
        <div className='relative md:my-24 '>
          <div className='about-page-shadow-left rounded-full -top-[300px] md:-top-[100px] -left-[350px] -z-10'></div>
            {/* <div className='about-page-shadow-right rounded-full -bottom-[300px] -right-[300px]  md:-right-[250px]'></div> */}
            <div className='background-shadow absolute hidden md:block  inset-1/2 -z-10'></div>
            <div className='h-full w-full px-2 md:px-10 md:-mt-[300px] py-10 -mt-[200px] md:mt-0 top-0 md:flex justify-around items-center  '>
                <div className='w-full md:w-1/2'>
                    <div className='text-center md:w-[500px] mx-auto mt-60 md:mt-2  '>
                        <h2 className='text-3xl text-center font-bold mb-10 '>
                            We assist companies in developing innovative digital goods and experiences.
                        </h2>
                        <p className='text-left py-10'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                </div>
                <div className='w-full md:w-1/2  '>
                    <img src={aboutContent} className=' mt-4 md:mt-48 block mx-auto' alt="" />
                </div>
            </div>
        </div>
    );
};

export default AboutContent;