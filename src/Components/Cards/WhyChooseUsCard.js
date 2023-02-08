import React from 'react';

const WhyChooseUsCard = ({data}) => {
    
    const {icon, title, text} = data;
    
    return (
        <div className='bg-white px-2 py-4 text-left mx-2 rounded-xl  md:p-6 md:mx-16' >
            <img className='my-2' src={icon} alt="" />
            <h2 className='font-bold py-2'>{title}</h2>
            <p className=''>{text}</p>
        </div>
    );
};

export default WhyChooseUsCard;