import React from 'react';
import Hero from '../../Components/Hero/Hero';
import { ScrollToTopOnMount } from '../../Helpers/ScrollToTop';
import TeamsContent from './TeamsContent/TeamsContent';


const Teams = () => {
    return (
        <div>
            <Hero content='Our Teams'></Hero>
            <TeamsContent></TeamsContent>
            <ScrollToTopOnMount></ScrollToTopOnMount>
        </div>
    );
};

export default Teams;