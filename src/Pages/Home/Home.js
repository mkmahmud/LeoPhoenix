import React from 'react';
import Awards from '../../Components/Awards/Awards';
import OurTeam from '../../Components/OurTeam/OurTeam';
import Testimonial from '../../Components/Testimonial/Testimonial';
import WhyChooseUs from '../../Components/WhyChooseUs.js/WhyChooseUs';
import About from './About/About';
import Hero from './Hero/Hero';
import Services from './Services/Services';


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
        </div>
    );
};

export default Home;