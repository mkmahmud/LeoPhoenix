import React from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import quotaion from '../../../Assets/icons/Quotations.png';
import { FaAngleDoubleRight, FaAngleRight } from 'react-icons/fa';
import './Testimonial.css'

const Testimonial = () => {
    return (
        <div className='relative md:-mt-[150px]'>
            <div className='testimonial-shadow-left rounded-full -top-[300px] md:-top-[100px] -left-[200px]'></div>
            <div className='testimonial-shadow-right rounded-full -bottom-[300px] -right-[300px]  md:-right-[250px]'></div>

            <div className='background-shadow absolute  inset-1/2 -z-10'></div>
            <div className='h-full w-full px-2 md:px-10 py-16  top-0 md:flex justify-around items-center  '>
                <div className='w-full md:w-1/2  '>
                    <img src={quotaion} className=' mt-4 md:mt-48 block mx-auto' alt="" />
                    <Link to='/' className='flex items-center justify-center pt-24 text-[#FF5B00] text-lg font-bold'><span className='px-4'>React All Testimonials</span> <FaAngleDoubleRight></FaAngleDoubleRight></Link>
                </div>
                <div className='w-full md:w-1/2'>
                    <div className='text-center md:w-[500px] mx-auto mt-60 md:mt-2  '>
                        <div className='mt-24'>
                            <SectionTitle content='Testimonials'></SectionTitle>
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

export default Testimonial;