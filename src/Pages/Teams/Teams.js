import React from 'react';
import Hero from '../../Components/Hero/Hero';
import { ScrollToTopOnMount } from '../../Helpers/ScrollToTop';
import TeamsContent from './TeamsContent/TeamsContent';
import './Teams.css'

const Teams = () => {
    return (
        <div>
            <Hero content='Our Teams'></Hero>
            <TeamsContent></TeamsContent>
            <div className='relative'>
                <div className='teams-bottom-backgound rounded-full -top-[300px] -right-[250px] -z-10'></div>
                
            </div>
            <ScrollToTopOnMount></ScrollToTopOnMount>
        </div>
    );
};

export default Teams;