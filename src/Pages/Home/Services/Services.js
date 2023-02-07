import React from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import ServiceCard from './ServiceCard/ServiceCard';
import './Services.css'

const Services = () => {
    return (
        <div className='relative ' style={{ fontFamily: `'Poppins', sans-serif` }}>
            <div className='background-shadow absolute top-[50%] inset-1/2 -z-10'></div>
            <SectionTitle content='Services We Provide'></SectionTitle>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4 md:px-10'>
                <ServiceCard></ServiceCard>
                <ServiceCard></ServiceCard>
                <ServiceCard></ServiceCard>
            </div>
        </div>
    );
};

export default Services;