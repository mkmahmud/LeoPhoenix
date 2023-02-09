import React from 'react';
import Hero from '../../Components/Hero/Hero';
import TestimonialContent from './TestimonialContent/TestimonialContent';

const Testimonial = () => {
    return (
        <div>
            <Hero content='Our Testimonials'></Hero>
            <TestimonialContent></TestimonialContent>
        </div>
    );
};

export default Testimonial;