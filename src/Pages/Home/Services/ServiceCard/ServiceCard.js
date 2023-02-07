import React from 'react';
import { FaCircle, FaMobile } from 'react-icons/fa';

const ServiceCard = () => {
    return (
        <div className='p-4'>
            <h2 className='text-xl font-bold py-5 '>Design Solutions</h2>
            <div className="icons border-b-2 border-[#00C897] flex justify-center py-5 w-1/2 mx-auto">
                    <FaCircle></FaCircle>
                    <FaMobile></FaMobile>
                    <FaCircle></FaCircle>
            </div>
            <p className='py-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
        </div>
    );
};

export default ServiceCard;