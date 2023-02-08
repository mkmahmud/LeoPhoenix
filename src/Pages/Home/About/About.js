import React from 'react';
import about from '../../../Assets/images/about.png';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import './About.css'
import MoreButton from '../../../Components/MoreButton/MoreButton';


const About = () => {
    return (
        <div className='relative my-24'>
            <div className='about-shadow-left rounded-full -top-[300px] md:-top-[100px] -left-[200px]'></div>
            <div className='about-shadow-right rounded-full -bottom-[300px] -right-[300px]  md:-right-[250px]'></div>
            <div className='background-shadow absolute hidden md:block  inset-1/2 -z-10'></div>
            <div className='h-full w-full px-2 md:px-10 py-10 top-0 md:flex justify-around items-center  '>
                <div className='w-full md:w-1/2  '>
                    <img src={about} className=' mt-4 md:mt-48 block mx-auto' alt="" />
                    <MoreButton content='Learn More' path='/'></MoreButton>
                </div>
                <div className='w-full md:w-1/2'>
                    <div className='text-center md:w-[500px] mx-auto mt-60 md:mt-2  '>
                        <div className='mt-24'>
                            <SectionTitle content='About Us'></SectionTitle>
                        </div>
                        <h2 className='text-3xl text-left font-bold mb-10 '>
                            We assist companies in developing innovative digital goods and experiences.
                        </h2>
                        <p className='text-left'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        <div className='flex justify-around my-16'>
                            <div>
                                <h2 className='text-3xl font-bold py-2 px-4 border-b-2 border-[#FF5B00] '>500 <span className='text-[#FF5B00]'>+</span></h2>
                                <p className='py-4 font-bold'>Website User</p>
                            </div>
                            <div>
                                <h2 className='text-3xl font-bold py-2 px-4 border-b-2 border-[#FF5B00] '>500 <span className='text-[#FF5B00]'>+</span></h2>
                                <p className='py-4 font-bold'>Website User</p>
                            </div>
                            <div>
                                <h2 className='text-3xl font-bold py-2 px-4 border-b-2 border-[#FF5B00] '>500 <span className='text-[#FF5B00]'>+</span></h2>
                                <p className='py-4 font-bold'>Website User</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;