import React from 'react';
import Shapes from '../../Components/Shapes/Shapes';
import About from './About/About';
import Awards from './Awards/Awards';
import Hero from './Hero/Hero';
import Services from './Services/Services';
import Testimonial from './Testimonial/Testimonial';
import WhyChooseUs from './WhyChooseUs/WhyChooseUs';

const Home = () => {
    return (
        <div className='w-full relative '>
            <Hero></Hero>
            <Services></Services>
            <About></About>
            <WhyChooseUs></WhyChooseUs>
            <Testimonial></Testimonial>
            <Awards></Awards>
        </div>
    );
};

export default Home;