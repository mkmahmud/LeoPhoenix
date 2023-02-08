import React from 'react';
import { FaAngleDoubleRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const MoreButton = ({content, path}) => {
    return (
        <Link to={path} className='flex items-center justify-center pt-24 text-[#FF5B00] text-lg font-bold'><span className='px-4'>{content}</span> <FaAngleDoubleRight></FaAngleDoubleRight> </Link>
    );
};

export default MoreButton;