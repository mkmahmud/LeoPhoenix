import React from 'react';
import GetStarted from '../../Components/GetStarted/GetStarted';
import OurTeam from '../../Components/OurTeam/OurTeam';
import Testimonial from '../../Components/Testimonial/Testimonial';
import WhyChooseUs from '../../Components/WhyChooseUs.js/WhyChooseUs';
import AboutContent from './AboutContent/AboutContent';
import AboutHero from './AboutHero/AboutHero';
import Awards from './Awards/Awards';

const About = () => {
    return (
        <div>
            <AboutHero></AboutHero>
            <AboutContent></AboutContent>
            <WhyChooseUs></WhyChooseUs>
            <Testimonial></Testimonial>
            <Awards></Awards>
            <OurTeam></OurTeam>
            <GetStarted></GetStarted>
        </div>
    );
};

export default About;