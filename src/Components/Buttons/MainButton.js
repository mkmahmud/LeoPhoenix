import React from 'react';
import { Link } from 'react-router-dom';

const MainButton = ({ content, path }) => {
    return (
        <Link to={path} style={{ fontFamily: `'Inter', sans-serif` }} className='flex  relative inline-flex items-center justify-start px-7 py-[3px] bg-main text-[18px] text-[#FFFFFF] rounded-[10px] leading-[48px] h-[46px] font-semibold'>
            <span>{content}</span>
        </Link>
    );
};

export default MainButton;