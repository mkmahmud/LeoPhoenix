import React from 'react';
import background from '../../Assets/bg.png';
import aboutImage from '../../Assets/images/pro.png';
import './Hero.css';


const Hero = ({ content }) => {
    return (
        <div className='h-[901px]'>
            <div className='hero-component h-full  text-white relative '>
                <div className='h-[300px] mx-2 md:w-full rounded-xl text-left  md:mx-0 md:h-[635px] flex justify-center items-center' style={{ backgroundImage: `url(${aboutImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                    <h2 className='text-[64px] leading-[96px] font-bold'>{content}</h2>
                </div>
            </div>
        </div>
    );
};

export default Hero;