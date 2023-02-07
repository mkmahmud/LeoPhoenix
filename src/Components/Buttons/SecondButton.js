import React from 'react';
import { Link } from 'react-router-dom';

const SecondButton = ({ content }) => {
    return (
        // <button className='bg-[#FF5B00] py-2 px-4 rounded-lg text-white'>{content}</button>
        <Link to="#_" style={{fontFamily:`'Inter', sans-serif`}} class="m-2 relative inline-flex items-center justify-start px-6 py-2 overflow-hidden font-medium transition-all bg-[#FFFFFF] rounded-xl hover:bg-white group">
            <span class="w-48 h-48 rounded rotate-[-40deg] bg-[#FF5B00] absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
            <span class="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">{content}</span>
        </Link>
    );
};

export default SecondButton;