import React from 'react';
import Hero from './Hero/Hero';
import Services from './Services/Services';

const Home = () => {
    return (
        <div className='w-full relative'>
            <Hero></Hero>
            <Services></Services>
        </div>
    );
};

export default Home;