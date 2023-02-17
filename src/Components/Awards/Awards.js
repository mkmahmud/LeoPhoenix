import React from 'react';
import background from '../../Assets/awards.png';
import './Awards.css';

const Awards = () => {
    return (
        <div className=' md:flex  items-center  mt-32' style={{ fontFamily: `'Inter', sans-serif`, backgroundImage: `url(${background})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            {/* <div className='background-shadow absolute  inset-1/2 -z-10'></div> */}
            <div className='awards-box rounded-full bg-white flex flex-col items-center justify-center mx-auto my-4 border-[#FF5B00] border-4 '>
                <h2 className='text-[32px] leading-[40px] text-[#FF5B00] font-semibold'>150+</h2>
                <p className='text-[15px] leading-[40px] font-semibold'>Happy clients</p>
            </div>
            <div className='awards-box rounded-full bg-white flex flex-col items-center justify-center mx-auto my-4 border-[#FF5B00] border-4 '>
                <h2 className='text-[32px] leading-[40px] text-[#FF5B00] font-semibold'>150+</h2>
                <p className='text-[15px] leading-[40px] font-semibold'>Happy clients</p>
            </div>
            <div className='awards-box rounded-full bg-white flex flex-col items-center justify-center mx-auto my-4 border-[#FF5B00] border-4 '>
                <h2 className='text-[32px] leading-[40px] text-[#FF5B00] font-semibold'>150+</h2>
                <p className='text-[15px] leading-[40px] font-semibold'>Happy clients</p>
            </div>
            <div className='awards-box rounded-full bg-white flex flex-col items-center justify-center mx-auto my-4 border-[#FF5B00] border-4 '>
                <h2 className='text-[32px] leading-[40px] text-[#FF5B00] font-semibold'>150+</h2>
                <p className='text-[15px] leading-[40px] font-semibold'>Happy clients</p>
            </div>
        </div>
    );
};

export default Awards;