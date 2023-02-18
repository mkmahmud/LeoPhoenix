import React from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import './Content.css';

const Content = ({ heading, subheading }) => {
    return (
        <div className='relative  '>
            <div className='content-page-shadow-left rounded-full  md:-top-[300px] -left-[353px] -z-10'></div>
            <div className='background-shadow absolute  left-1/2 top-[200px] -z-20'></div>

            <div className='z-30 pb-[100px]'>
                <SectionTitle content={heading}></SectionTitle>
                <p className='mx-auto w-full md:w-1/2 mt-[52px] '>{subheading}</p>

            </div>
        </div>
    );
};

export default Content;