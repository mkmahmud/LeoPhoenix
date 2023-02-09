import React from 'react';
import background from '../../Assets/awards.png'

const Awards = () => {
    return (
        <div className='py-10 md:flex justify-between items-center md:py-4 mt-32' style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className='background-shadow absolute  inset-1/2 -z-10'></div>
            <div className='h-40 w-40 rounded-full bg-white flex flex-col items-center justify-center mx-auto my-4 border-[#FF5B00] border-4 '>
                <h2 className='text-3xl text-[#FF5B00] font-bold'>150+</h2>
                <p className='text-base font-bold'>Happy clients</p>
            </div>
            <div className='h-40 w-40 rounded-full bg-white flex flex-col items-center justify-center mx-auto my-4 border-[#FF5B00] border-4'>
                <h2 className='text-3xl text-[#FF5B00] font-bold'>150+</h2>
                <p className='text-base font-bold'>Happy clients</p>
            </div>
            <div className='h-40 w-40 rounded-full bg-white flex flex-col items-center justify-center mx-auto my-4 border-[#FF5B00] border-4'>
                <h2 className='text-3xl text-[#FF5B00] font-bold'>150+</h2>
                <p className='text-base font-bold'>Happy clients</p>
            </div>
            <div className='h-40 w-40 rounded-full bg-white flex flex-col items-center justify-center mx-auto my-4 border-[#FF5B00] border-4'>
                <h2 className='text-3xl text-[#FF5B00] font-bold'>150+</h2>
                <p className='text-base font-bold'>Happy clients</p>
            </div>
        </div>
    );
};

export default Awards;