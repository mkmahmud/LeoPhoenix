import React from 'react';
import About from './About/About';
import Awards from './Awards/Awards';
import GetStarted from './GetStarted/GetStarted';
import Hero from './Hero/Hero';
import OurTeam from './OurTeam/OurTeam';
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
            <OurTeam></OurTeam>
            <GetStarted></GetStarted>
        </div>
    );
};

export default Home;