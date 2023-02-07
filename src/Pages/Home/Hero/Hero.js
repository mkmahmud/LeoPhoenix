import React from 'react';
import heroImages from '../../../Assets/images/pro.png';
import background from '../../../Assets/bg.png';
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
        <div className='h-full  text-white md:flex justify-around items-center md:py-5' style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover', backgroundPosition: 'center', fontFamily: `'Poppins', sans-serif`, paddingBottom:'15%' }}>
            <div className='h-[300px] mx-2 md:w-2/3 rounded-xl text-left py-4 px-2 md:py-10 md:px-6 md:mx-6 md:h-[500px] ' style={{ backgroundImage: `url(${heroImages})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <h2 className='text-3xl font-bold md:py-4'>Grow Your <br /> Buisness To The <br /> Peak.</h2>
                <p className='leading-none md:my-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                <div className='my-6'>
                    <MainButton content='Learn More'></MainButton>
                    <SecondButton content='Contact Us'></SecondButton>
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
                            <h2 className='border-t-2 border-b-2 border-dashed py-2'>Get a response <br />
                                within 24 hours</h2>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='circle-custom-mobile' >
                            <h2 className='border-t-2 border-b-2 border-dashed py-2'>Get a response <br />
                                within 24 hours</h2>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='circle-custom-mobile' >
                            <h2 className='border-t-2 border-b-2 border-dashed py-2'>Get a response <br />
                                within 24 hours</h2>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
            <div className='hidden md:block md:1/3 '>
                <div className='mx-auto  h-64 w-64 border border-[3px] rounded-full overflow-hidden flex items-center justify-center' >
                    <h2 className='border-t-2 border-b-2 border-dashed py-2'>Get a response <br />
                        within 24 hours</h2>
                </div>
                <div className='circle-custom' >
                    <h2 className='border-t-2 border-b-2 border-dashed py-2'>Get a response <br />
                        within 24 hours</h2>
                </div>
                <div className='circle-custom' >
                    <h2 className='border-t-2 border-b-2 border-dashed py-2'>Get a response <br />
                        within 24 hours</h2>
                </div>
            </div>

        </div>
    );
};

export default Hero;