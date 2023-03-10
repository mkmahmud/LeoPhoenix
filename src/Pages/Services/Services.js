import React from 'react';
import Awards from '../../Components/Awards/Awards';
import Hero from '../../Components/Hero/Hero';
import Testimonial from '../../Components/Testimonial/Testimonial';
import { ScrollToTopOnMount } from '../../Helpers/ScrollToTop';
import OurClient from './OurClient/OurClient';
import ServicesContent from './ServicesContent/ServicesContent';

const Services = () => {
    return (
        <div>
            <ScrollToTopOnMount></ScrollToTopOnMount>
            <Hero content='Our Services'></Hero>
            <ServicesContent></ServicesContent>
            <div className='py-[200px]'>
                <Testimonial></Testimonial>
            </div>
            <OurClient></OurClient>
            <div className='relative mt-[-300px] z-30 md:pb-32'>
                <Awards></Awards>
                
            </div>
        </div>
    );
};

export default Services;