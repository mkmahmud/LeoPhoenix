import React from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import './TestimonialContent.css';
import profileImg from '../../../Assets/icons/profile.png';
import Quotation from '../../../Assets/icons/Quotations-colored.png';

const TestimonialContent = () => {
    return (
        <div className='relative md:my-24 '>
            <div className='testimonial-page-shadow-left rounded-full top-0  md:-top-[400px] left-0 md:-left-[400px] -z-10'></div>

            <div className='testimonial-shadow-right rounded-full bottom-0 md:-bottom-[500px] right-0 md:-right-[300px]  md:-right-[250px]'></div>
            <div className='background-shadow absolute hidden md:block  inset-1/2 -z-10'></div>

            <div>
                <div>
                    <SectionTitle content='Meet Our Teams'></SectionTitle>
                    <p className='text-lg text-center pb-10   '>
                        Whatever your aim for you future, we have the perfect program to get you there.
                    </p>
                    <div className='grid grid-cols-1 grid-cols-2 gap-4 md:px-48 relative '>
                        <img src={Quotation} className='absolute top-16 left-0 -z-10 block mx-auto md:left-[15%]' alt="" />
                        <div className='bg-[#ffffff69] py-4 px-2 m-2 rounded-xl' >
                            <p> “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.”</p>
                            <div className='flex items-center justify-center mt-4'>
                                <img src={profileImg} alt="" />
                                <div className='mx-4'>
                                    <h2>Jhon C</h2>
                                    <p> Developer</p>
                                </div>
                            </div>
                        </div>
                        <div className='bg-[#ffffff69] py-4 px-2 m-2 rounded-xl' >
                            <p> “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.”</p>
                            <div className='flex items-center justify-center mt-4'>
                                <img src={profileImg} alt="" />
                                <div className='mx-4'>
                                    <h2>Jhon C</h2>
                                    <p> Developer</p>
                                </div>
                            </div>
                        </div>
                        <div className='bg-[#ffffff69] py-4 px-2 m-2 rounded-xl' >
                            <p> “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.”</p>
                            <div className='flex items-center justify-center mt-4'>
                                <img src={profileImg} alt="" />
                                <div className='mx-4'>
                                    <h2>Jhon C</h2>
                                    <p> Developer</p>
                                </div>
                            </div>
                        </div>
                        <div className='bg-[#ffffff69] py-4 px-2 m-2 rounded-xl' >
                            <p> “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.”</p>
                            <div className='flex items-center justify-center mt-4'>
                                <img src={profileImg} alt="" />
                                <div className='mx-4'>
                                    <h2>Jhon C</h2>
                                    <p> Developer</p>
                                </div>
                            </div>
                        </div>
                        <div className='bg-[#ffffff69] py-4 px-2 m-2 rounded-xl' >
                            <p> “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.”</p>
                            <div className='flex items-center justify-center mt-4'>
                                <img src={profileImg} alt="" />
                                <div className='mx-4'>
                                    <h2>Jhon C</h2>
                                    <p> Developer</p>
                                </div>
                            </div>
                        </div>
                        <div className='bg-[#ffffff69] py-4 px-2 m-2 rounded-xl' >
                            <p> “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.”</p>
                            <div className='flex items-center justify-center mt-4'>
                                <img src={profileImg} alt="" />
                                <div className='mx-4'>
                                    <h2>Jhon C</h2>
                                    <p> Developer</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>


        </div>
    );
};

export default TestimonialContent;