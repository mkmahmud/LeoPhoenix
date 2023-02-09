import React from 'react';
import background from '../../../Assets/bg.png';
import aboutImage from '../../../Assets/images/pro.png'

const AboutHero = () => {
    return (
        <div className='h-full md:h-screen  text-white' style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover', backgroundPosition: 'center', fontFamily: `'Poppins', sans-serif`, paddingBottom: '15%' }}>
            <div className='h-[300px] mx-2 md:w-full rounded-xl text-left  md:mx-0 md:h-[535px] flex justify-center items-center' style={{ backgroundImage: `url(${aboutImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
               <h2 className='text-6xl font-bold'>About Us</h2>
            </div>
        </div>
    );
};

export default AboutHero;