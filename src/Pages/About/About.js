import React from 'react';
import Hero from '../../Components/Hero/Hero';
import OurTeam from '../../Components/OurTeam/OurTeam';
import Testimonial from '../../Components/Testimonial/Testimonial';
import WhyChooseUs from '../../Components/WhyChooseUs.js/WhyChooseUs';
import AboutContent from './AboutContent/AboutContent';

import Awards from './Awards/Awards';
import OurClient from './OurClient/OurClient';

const About = () => {
    return (
        <div>
            <Hero content='About Us'></Hero>
            <AboutContent></AboutContent>
            <WhyChooseUs></WhyChooseUs>
            <Testimonial></Testimonial>
            <Awards></Awards>
            <OurTeam></OurTeam>
            <OurClient></OurClient>
        </div>
    );
};

export default About;