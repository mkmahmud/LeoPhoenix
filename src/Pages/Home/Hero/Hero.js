import React from 'react';
import heroImages from '../../../Assets/images/pro.png';
import MainButton from '../../../Components/Buttons/MainButton';
import SecondButton from '../../../Components/Buttons/SecondButton';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import './Hero.css'

import { Autoplay, Pagination, Navigation } from "swiper";

const Hero = () => {
    return (
        <div className='relative h-[901px] w-full'>
            <div className='Hero text-white md:flex justify-around items-center md:py-5 ' >
                <div className='h-[434px] mx-2 md:w-2/3 rounded-xl flex flex-col justify-center text-left py-4 px-2 md:py-10 md:px-6 md:mx-6 md:h-[434px] ' style={{ backgroundImage: `url(${heroImages})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                    <h2 className='text-[48px] font-bold  md:py-4'>Grow Your <br /> Buisness To The <br /> Peak.</h2>
                    <p className='leading-none md:my-5 text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                    <div className='my-6'>
                        <MainButton path='/' content='Learn More'></MainButton>
                        <SecondButton path='/' content='Contact Us'></SecondButton>
                    </div>
                </div>
                <div className='mx-auto md:hidden'>
                    <Swiper
                        spaceBetween={30}
                        centeredSlides={true}
                        autoplay={{
                            delay: 1500,
                            disableOnInteraction: false,
                        }}
                        modules={[Autoplay, Pagination, Navigation]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <div className='circle-custom-mobile' >
                                <h2 className='border-t-2 border-b-2 border-dashed py-2 text-xl font-normal leading-[30px] px-8'>Get a response <br />
                                    within 24 hours</h2>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='circle-custom-mobile' >
                                <h2 className='border-t-2 border-b-2 border-dashed py-2 text-xl font-normal leading-[30px] px-8'>Get a response <br />
                                    within 24 hours</h2>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='circle-custom-mobile' >
                                <h2 className='border-t-2 border-b-2 border-dashed py-2 text-xl font-normal leading-[30px] px-8'>Get a response <br />
                                    within 24 hours</h2>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
                <div className='hidden md:block md:1/3 '>
                    <div className='mx-auto  h-[250px] w-[250px] border border-[3px] rounded-full overflow-hidden flex items-center justify-center' >
                        <h2 className='border-t-2 border-b-2 border-dashed py-2 text-xl font-normal leading-[30px] px-8'>Get a response <br />
                            within 24 hours</h2>
                    </div>
                    <div className='circle-custom' >
                        <h2 className='border-t-2 border-b-2 border-dashed py-2 text-xl font-normal leading-[30px] px-8'>Get a response <br />
                            within 24 hours</h2>
                    </div>
                    <div className='circle-custom' >
                        <h2 className='border-t-2 border-b-2 border-dashed py-2 text-xl font-normal leading-[30px] px-8'>Get a response <br />
                            within 24 hours</h2>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Hero;