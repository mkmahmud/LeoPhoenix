import React from 'react';
import secBg from '../../../Assets/secBg.png';
import secBgMobile from '../../../Assets/secBgMobile.png';
import WhyChooseUsCard from '../../../Components/Cards/WhyChooseUsCard';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import './WhyChooseUs.css'

import image1 from '../../../Assets/icons/1.png';
import image2 from '../../../Assets/icons/2.png';
import image3 from '../../../Assets/icons/3.png';
import image4 from '../../../Assets/icons/4.png';


const WhyChooseUs = () => {


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
        }
    ]

    return (
        <div className='h-full md:h-screen md:my-0 relative  py-24 md:py-0 -mt-[200px] md:mt-0 ' >
            
            <img src={secBg} className='absolute hidden md:block -z-10 h-full w-full' alt="" />
            <img src={secBgMobile} className='absolute block md:hidden -z-10 h-full w-full' alt="" />
            
            <div className='py-10'>
                <SectionTitle content='Why Choose Us ?'></SectionTitle>
                <p className='mx-auto w-full py-2 px-4 '>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mx-auto mt-6 '>
                    {
                        whyChooseData.map(data => <WhyChooseUsCard data={data}></WhyChooseUsCard>)
                    }
                </div>
            </div>
            {/* <img className='absolute h-full w-full hidden md:block top-0   -z-10' src={secBg} alt="" />
            <img className='absolute h-full w-full  md:hidden  top-0 -z-10' src={secBgMobile} alt="" /> */}
        </div>
    );
};

export default WhyChooseUs;