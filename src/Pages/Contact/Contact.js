import React from 'react';
import Hero from '../../Components/Hero/Hero';
import { ScrollToTopOnMount } from '../../Helpers/ScrollToTop';
import ContactContent from './ContactContent/ContactContent';

const Contact = () => {
    return (
        <div>
            <Hero content='Contact Us'></Hero>
            <ContactContent></ContactContent>
            <ScrollToTopOnMount></ScrollToTopOnMount>
        </div>
    );
};

export default Contact;