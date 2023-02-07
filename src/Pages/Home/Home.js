import React from 'react';
import Shapes from '../../Components/Shapes/Shapes';
import Hero from './Hero/Hero';
import Services from './Services/Services';
import WhyChooseUs from './WhyChooseUs/WhyChooseUs';

const Home = () => {
    return (
        <div className='w-full relative '>
            <Hero></Hero>
            <Services></Services>
            <Shapes></Shapes>
            <WhyChooseUs></WhyChooseUs>
        </div>
    );
};

export default Home;