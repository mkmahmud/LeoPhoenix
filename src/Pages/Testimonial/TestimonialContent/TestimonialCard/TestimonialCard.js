import React from 'react';
import profileImg from '../../../../Assets/icons/profile.png';

const TestimonialCard = () => {
    return (
        <div className='bg-[#FFFFFF] w-[534px] pt-[42px] px-[17px] rounded-[20px]' >
            <p> “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.”</p>
            <div className='flex items-center justify-evenly mt-[36px] mb-[19px]'>
                <img src={profileImg} className=' ' alt="" />
                <div className='mx-4'>
                    <h2>Lisa Deskh</h2>
                    <p> Product Manager, Twister Design</p>
                </div>
            </div>
        </div>
    );
};

export default TestimonialCard;