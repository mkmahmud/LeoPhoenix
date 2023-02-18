import React from 'react';
import './TestimonialContent.css';
import profileImg from '../../../Assets/icons/profile.png';
import TestimonialCard from './TestimonialCard/TestimonialCard';


const TestimonialContent = () => {
    return (
        <div className='relative pb-[300px]'>
            <div>
                <div className='testimonials-quotation absolute h-[496px] w-full mt-[260px]'>
                    <div className='relative w-1/2 mx-auto  bg-purple'>
                        <h2 className=' text-[40px] leading-[49px] font-bold absolute text-left px-5  ' style={{ fontFamily: `'Inter', sans-serif` }}>The voice of our customers speaks for itself</h2>
                    </div>
                </div>
                <div className=' grid grid-cols-1 md:grid-cols-2  gap-y-[90px]  justify-items-center  relative '>



                    <TestimonialCard></TestimonialCard>
                    <TestimonialCard></TestimonialCard>
                    <TestimonialCard></TestimonialCard>
                    <TestimonialCard></TestimonialCard>
                    <TestimonialCard></TestimonialCard>
                    <TestimonialCard></TestimonialCard>
                    <TestimonialCard></TestimonialCard>
                    <TestimonialCard></TestimonialCard>


                </div>
            </div>
        </div>
    );
};

export default TestimonialContent;