import React from 'react';

import image1 from '../../Assets/icons/1.png';
import image2 from '../../Assets/icons/2.png';
import image3 from '../../Assets/icons/3.png';
import image4 from '../../Assets/icons/4.png';
import SectionTitle from '../SectionTitle/SectionTitle';
import WhyChooseUsCard from '../Cards/WhyChooseUsCard';
import './WhyChooseUs.css'


const WhyChooseUs = () => {

    const whyChooseData = [
        {
            "id": "1",
            "icon": image1,
            "title": "The greatest in the world, committed to you.",
            "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
        },
        {
            "id": "2",
            "icon": image2,
            "title": "World class designer and developers for every client.",
            "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
        },
        {
            "id": "3",
            "icon": image3,
            "title": "Dedicated support team for every problem that occurs.",
            "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
        },
        {
            "id": "4",
            "icon": image4,
            "title": "Focused on making a big and quantifiable difference.",
            "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
        }
    ]

    return (
        <div className=' why-choose-us relative h-[1370px] overflow-hidden z-10 -mt-[100px]'>
            <div className='mt-[250px]'>
                <SectionTitle content='Why Choose Us ?'></SectionTitle>
                <p className='mx-auto w-full pt-[56px] pb-[37px] px-4 '>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor <br /> incididunt ut labore et dolore magna aliqua. </p>
                <div className='grid grid-cols-1 md:grid-cols-2  mx-auto '>
                    {
                        whyChooseData.map(data => <WhyChooseUsCard data={data}></WhyChooseUsCard>)
                    }
                </div>
            </div>
        </div>

    );
};

export default WhyChooseUs;