import React from 'react';
import Hero from '../../Components/Hero/Hero';
import ContactContent from './ContactContent/ContactContent';

const Contact = () => {
    return (
        <div>
            <Hero content='Contact Us'></Hero>
            <ContactContent></ContactContent>
        </div>
    );
};

export default Contact;