import React from 'react';
import { Link } from 'react-router-dom';

const SecondButton = ({path, content }) => {
    return (
        <Link to={path} style={{ fontFamily: `'Inter', sans-serif` }} className='flex mx-2 relative inline-flex items-center justify-start px-7 py-[3px] bg-white text-[18px] text-main rounded-[10px] leading-[48px] h-[46px] font-semibold'>
            <span>{content}</span>
        </Link>
    );
};

export default SecondButton; 