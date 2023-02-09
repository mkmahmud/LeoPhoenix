import React from 'react';
import WhyChooseUsCard from '../../../Components/Cards/WhyChooseUsCard';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';

import image1 from '../../../Assets/icons/1.png';
import image2 from '../../../Assets/icons/2.png';
import image3 from '../../../Assets/icons/3.png';
import image4 from '../../../Assets/icons/4.png';
import './ServicesContent.css'

const ServicesContent = () => {


    const whyChooseData = [
        {
            "id":"1",
            "icon":image1,
            "title":"The greatest in the world, committed to you.",
            "text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
        },
        {
            "id":"2",
            "icon":image2,
            "title":"World class designer and developers for every client.",
            "text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
        },
        {
            "id":"3",
            "icon":image3,
            "title":"Dedicated support team for every problem that occurs.",
            "text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
        },
        {
            "id":"4",
            "icon":image4,
            "title":"Focused on making a big and quantifiable difference.",
            "text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
        },
        {
            "id":"5",
            "icon":image4,
            "title":"Focused on making a big and quantifiable difference.",
            "text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
        },
        {
            "id":"6",
            "icon":image4,
            "title":"Focused on making a big and quantifiable difference.",
            "text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
        }
    ]

    return (
        <div className='relative md:my-24 '>
            <div className='about-page-shadow-left rounded-full -top-[300px] md:-top-[150px] -left-[350px] -z-10'></div>
            {/* <div className='about-page-shadow-right rounded-full -bottom-[300px] -right-[300px]  md:-right-[250px]'></div> */}
            <div className='background-shadow absolute hidden md:block  inset-1/2 -z-10'></div>
            <div className='py-10 md:-mt-[250px]'>
                <SectionTitle content='Why Choose Us ?'></SectionTitle>
                <p className='mx-auto w-full py-2 px-4 '>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mx-auto mt-6 '>
                    {
                        whyChooseData.map(data => <WhyChooseUsCard data={data}></WhyChooseUsCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default ServicesContent;