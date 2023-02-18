import React from 'react';
import Content from '../../Components/Content/Content';
import Hero from '../../Components/Hero/Hero';
import { ScrollToTopOnMount } from '../../Helpers/ScrollToTop';
import TestimonialContent from './TestimonialContent/TestimonialContent';
import './Testimonial.css';

const Testimonial = () => {
    return (
        <div>
            <Hero content='Our Testimonials'></Hero>
            <Content heading='Meet Our Teams' subheading='Whatever your aim for you future, we have the perfect program to get you there.'></Content>
            <TestimonialContent></TestimonialContent>
            <div className='relative'>
                <div className='testimonial-bottom-backgound rounded-full -top-[900px] -right-[250px] -z-10'></div>
            </div>
            <ScrollToTopOnMount></ScrollToTopOnMount>
        </div>
    );
};

export default Testimonial;