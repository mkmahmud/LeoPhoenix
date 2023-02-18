import React from 'react';
import Hero from '../../Components/Hero/Hero';
import { ScrollToTopOnMount } from '../../Helpers/ScrollToTop';
import TestimonialContent from './TestimonialContent/TestimonialContent';

const Testimonial = () => {
    return (
        <div>
            <Hero content='Our Testimonials'></Hero>
            <TestimonialContent></TestimonialContent>
            <ScrollToTopOnMount></ScrollToTopOnMount>
        </div>
    );
};

export default Testimonial;