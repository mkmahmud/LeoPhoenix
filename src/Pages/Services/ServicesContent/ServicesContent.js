import React from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';

import image1 from '../../../Assets/icons/1.png';
import image2 from '../../../Assets/icons/2.png';
import image3 from '../../../Assets/icons/3.png';
import image4 from '../../../Assets/icons/4.png';
import './ServicesContent.css'
import ServiceWhyChooseUs from '../ServiceWhyChooseUs/ServiceWhyChooseUs';

const ServicesContent = () => {


    const whyChooseData = [
        {
            "id": "1",
            "icon": image1,
            "title": "The greatest in the world",
            "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
        },
        {
            "id": "2",
            "icon": image2,
            "title": "World class designer and developers ",
            "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
        },
        {
            "id": "3",
            "icon": image3,
            "title": "Dedicated support team",
            "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
        },
        {
            "id": "4",
            "icon": image4,
            "title": "Focused on making ",
            "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
        },
        {
            "id": "5",
            "icon": image4,
            "title": "Focused on making a ",
            "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
        },
        {
            "id": "6",
            "icon": image4,
            "title": "Focused on making",
            "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
        }
    ]

    return (
        <div className='relative pb-[100px] '>
            <div className='about-page-shadow-left rounded-full  md:-top-[300px] -left-[353px] -z-10'></div>
            <div className='about-background-shadow absolute  left-1/2 top-[200px] -z-20'></div>
            {/* <div className='about-page-shadow-right rounded-full -bottom-[300px] -right-[300px]  md:-right-[250px]'></div> */}
            
            {/* <div className='about-background-shadow-bottom absolute left-0 -bottom-[500px] -z-10'></div> */}

            <div className=' '>
                <SectionTitle content='Why Choose Us ?'></SectionTitle>
                <p className='mx-auto w-full md:w-1/2 mt-[52px] '>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mx-auto mt-6 '>
                    {
                        whyChooseData.map(data => <ServiceWhyChooseUs data={data}></ServiceWhyChooseUs>)
                    }
                </div>
            </div>
        </div>
    );
};

export default ServicesContent;