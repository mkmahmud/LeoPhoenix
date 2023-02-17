import React from 'react';

const WhyChooseUsCard = ({data}) => {
    
    const {icon, title, text} = data;
    
    return (
        <div className='h-[275px] w-[534px] bg-white text-left my-7 shadow-[0px 0px 0px rgba(0, 0, 0, 0.25)] rounded-[20px] mx-auto pl-[53px] pr-[23px]' >
            <img className='mt-[19px]' src={icon} alt="" />
            <h2 className='font-bold pt-5  text-cardTitle' style={{ fontFamily: `'Inter', sans-serif` }}>{title}</h2>
            <p className='text-cardText pt-[10px]'>{text}</p>
        </div>
    );
};

export default WhyChooseUsCard;