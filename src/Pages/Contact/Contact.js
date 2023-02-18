import React from 'react';
import Content from '../../Components/Content/Content';
import Hero from '../../Components/Hero/Hero';
import { ScrollToTopOnMount } from '../../Helpers/ScrollToTop';
import ContactContent from './ContactContent/ContactContent';
import './Contact.css'

const Contact = () => {
    return (
        <div>
            <Hero content='Contact Us'></Hero>
            <Content heading='Get In Touch ✋' subheading=' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'></Content>
            <ContactContent></ContactContent>
            <div className='relative'>
                <div className='contact-bottom-backgound rounded-full -top-[600px] -right-[250px] -z-10'></div>
            </div>
            <ScrollToTopOnMount></ScrollToTopOnMount>
        </div>
    );
};

export default Contact;