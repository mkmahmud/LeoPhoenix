import React from 'react';
import './Tests.css';
import heroImages from '../../Assets/images/pro.png';

import about from '../../Assets/images/about.png';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";



import { Autoplay, Pagination, Navigation } from "swiper";
import MainButton from '../../Components/Buttons/MainButton';
import SecondButton from '../../Components/Buttons/SecondButton';
import MoreButton from '../../Components/MoreButton/MoreButton';
import SectionTitle from '../../Components/SectionTitle/SectionTitle';
import WhyChooseUsCard from '../../Components/Cards/WhyChooseUsCard';
import image1 from '../../Assets/icons/1.png';
import image2 from '../../Assets/icons/2.png';
import image3 from '../../Assets/icons/3.png';
import image4 from '../../Assets/icons/4.png';


const Test = () => {




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






        <div className=' why-choose-us relative h-[1370px] overflow-hidden'>
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




        // <div className='about relative  h-full w-full px-2 md:px-10 py-10 top-0 md:flex justify-around items-center  '>
        //     <div className='w-full md:w-1/2  '>
        //         <img src={about} className=' mt-4 md:mt-48 block mx-auto' alt="" />
        //         <div className='flex ml-[25%]'>
        //             <MoreButton content='Learn More' path='/'></MoreButton>
        //         </div>
        //     </div>
        //     <div className='w-full md:w-1/2'>
        //         <div className='text-center md:w-[500px] mx-auto mt-60 md:mt-2  '>
        //             <div className='mt-24'>
        //                 <SectionTitle content='About Us'></SectionTitle>
        //             </div>
        //             <h2 className='text-title text-left font-bold mb-10 pt-[82px] '>
        //                 We assist companies in developing innovative digital goods and experiences.
        //             </h2>
        //             <p className='text-left'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        //             <div className='flex justify-around my-16' style={{ fontFamily: `'Inter', sans-serif` }}>
        //                 <div>
        //                     <h2 className='text-title font-semibold  px-4 border-b-2 border-[#FF5B00] '>500 <span className='text-[#FF5B00]'>+</span></h2>
        //                     <p className='py-4 font-semibold'>Website User</p>
        //                 </div>
        //                 <div>
        //                     <h2 className='text-title font-semibold  px-4 border-b-2 border-[#FF5B00] '>500 <span className='text-[#FF5B00]'>+</span></h2>
        //                     <p className='py-4 font-semibold'>Website User</p>
        //                 </div>
        //                 <div>
        //                     <h2 className='text-title font-semibold  px-4 border-b-2 border-[#FF5B00] '>500 <span className='text-[#FF5B00]'>+</span></h2>
        //                     <p className='py-4 font-semibold'>Website User</p>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>





        // <div className=' relative h-screen w-full '>
        //     <div className='background text-white md:flex justify-around '>
        //         <div className='h-[300px] mx-2 md:w-2/3 rounded-xl text-left py-4 px-2 md:py-10 md:px-6 md:mx-6 md:h-[500px] ' style={{ backgroundImage: `url(${heroImages})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        //             <h2 className='text-3xl font-bold md:py-4'>Grow Your <br /> Buisness To The <br /> Peak.</h2>
        //             <p className='leading-none md:my-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
        //             <div className='my-6'>
        //                 <MainButton path='/' content='Learn More'></MainButton>
        //                 <SecondButton content='Contact Us'></SecondButton>
        //             </div>
        //         </div>
        //         <div className='mx-auto md:hidden'>
        //             <Swiper
        //                 spaceBetween={30}
        //                 centeredSlides={true}
        //                 autoplay={{
        //                     delay: 1500,
        //                     disableOnInteraction: false,
        //                 }}
        //                 modules={[Autoplay, Pagination, Navigation]}
        //                 className="mySwiper"
        //             >
        //                 <SwiperSlide>
        //                     <div className='circle-custom-mobile' >
        //                         <h2 className='border-t-2 border-b-2 border-dashed py-2'>Get a response <br />
        //                             within 24 hours</h2>
        //                     </div>
        //                 </SwiperSlide>
        //                 <SwiperSlide>
        //                     <div className='circle-custom-mobile' >
        //                         <h2 className='border-t-2 border-b-2 border-dashed py-2'>Get a response <br />
        //                             within 24 hours</h2>
        //                     </div>
        //                 </SwiperSlide>
        //                 <SwiperSlide>
        //                     <div className='circle-custom-mobile' >
        //                         <h2 className='border-t-2 border-b-2 border-dashed py-2'>Get a response <br />
        //                             within 24 hours</h2>
        //                     </div>
        //                 </SwiperSlide>
        //             </Swiper>
        //         </div>
        //         <div className='hidden md:block md:1/3 '>
        //             <div className='mx-auto  h-64 w-64 border border-[3px] rounded-full overflow-hidden flex items-center justify-center' >
        //                 <h2 className='border-t-2 border-b-2 border-dashed py-2'>Get a response <br />
        //                     within 24 hours</h2>
        //             </div>
        //             <div className='circle-custom' >
        //                 <h2 className='border-t-2 border-b-2 border-dashed py-2'>Get a response <br />
        //                     within 24 hours</h2>
        //             </div>
        //             <div className='circle-custom' >
        //                 <h2 className='border-t-2 border-b-2 border-dashed py-2'>Get a response <br />
        //                     within 24 hours</h2>
        //             </div>
        //         </div>
        //     </div>
        // </div>

        // <div>
        //     <MainButton path='/'></MainButton>
        // </div>




    );
};

export default Test;