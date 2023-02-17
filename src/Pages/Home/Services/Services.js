import React from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import ServiceCard from './ServiceCard/ServiceCard';
import './Services.css'

const Services = () => {
    return (
        <div className='relative bg-red-500 mt-5' style={{ fontFamily: `'Poppins', sans-serif` }}>
            <div className='services-background-shadow absolute  inset-1/2 -z-10'></div>
            <SectionTitle content='Services We Provide'></SectionTitle>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4 md:px-10 mt-[79px]'>
                <ServiceCard></ServiceCard>
                <ServiceCard></ServiceCard>
                <ServiceCard></ServiceCard>
            </div>
        </div>
    );
};

export default Services;