import React from 'react';
import profile from '../../Assets/icons/profile.png';
import quotaion from '../../Assets/icons/Quotations.png';


// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import 'swiper/css/pagination';
import "swiper/css/navigation";


import { Autoplay, Pagination, Navigation } from "swiper";
import MoreButton from '../MoreButton/MoreButton';
import SectionTitle from '../SectionTitle/SectionTitle';
import './Testimonial.css';


const Testimonial = () => {
    return (
        <div className='relative md:-mt-[150px]'>
            <div className='testimonial-component-shadow-left rounded-full -top-[300px] md:-top-[100px] -left-[200px]'></div>
            <div className='testimonial-component-shadow-right rounded-full -bottom-[300px] -right-[300px]  md:-right-[250px]'></div>
          

            <div className='h-full w-full px-2 md:px-10 py-16  top-0 md:flex justify-around items-center  '>
                <div className=''>
                    <div className='relative'>
                        <img src={quotaion} className=' mt-4 md:mt-48 block mx-auto' alt="" />
                        <h2 className='absolute top-0 text-[32px] leading-[39px] font-bold pl-20 text-left ' style={{ fontFamily: `'Inter', sans-serif` }}>The voice of our customers speaks for itself</h2>
                        <MoreButton content='Read All Testimonials' path='/'></MoreButton>
                    </div>
                </div>
                <div className=''>
                    <div className='text-center md:w-[500px] mx-auto mt-60 md:mt-2  '>
                        <div className='mt-32'>
                            <SectionTitle content='Testimonials'></SectionTitle>
                        </div>
                        <div className='mt-[36px]'>

                            <Swiper
                                spaceBetween={30}
                                centeredSlides={true}
                                autoplay={{
                                    delay: 2500,
                                    disableOnInteraction: false,
                                }}
                                pagination={{
                                    clickable: true,
                                }}
                                modules={[Autoplay, Pagination, Navigation]}
                                className="mySwiper"

                            >
                                <SwiperSlide>
                                    <div>
                                        <img className='h-16 w-16 rounded-full block mx-auto' src={profile} alt="" />
                                        <div className='mt-[16px]' style={{ fontFamily: `'Inter', sans-serif` }}>
                                            <h2 className='text-linkText font-semibold '>Jhon C - Product Manager</h2>
                                            <p className=''>Twister design</p>
                                        </div>
                                        <p className='mt-[44px]'>"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni possimus, autem natus mollitia neque reprehenderit nemo totam eum? Inventore dolor saepe dolorem dignissimos hic, quod ab voluptas suscipit quae! Nisi?"</p>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div>
                                        <img className='h-16 w-16 rounded-full block mx-auto' src={profile} alt="" />
                                        <div className='mt-[16px]' style={{ fontFamily: `'Inter', sans-serif` }}>
                                            <h2 className='text-linkText font-semibold '>Jhon C - Product Manager</h2>
                                            <p className=''>Twister design</p>
                                        </div>
                                        <p className='mt-[44px]'>"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni possimus, autem natus mollitia neque reprehenderit nemo totam eum? Inventore dolor saepe dolorem dignissimos hic, quod ab voluptas suscipit quae! Nisi?"</p>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div>
                                        <img className='h-16 w-16 rounded-full block mx-auto' src={profile} alt="" />
                                        <div className='mt-[16px]' style={{ fontFamily: `'Inter', sans-serif` }}>
                                            <h2 className='text-linkText font-semibold '>Jhon C - Product Manager</h2>
                                            <p className=''>Twister design</p>
                                        </div>
                                        <p className='mt-[44px]'>"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni possimus, autem natus mollitia neque reprehenderit nemo totam eum? Inventore dolor saepe dolorem dignissimos hic, quod ab voluptas suscipit quae! Nisi?"</p>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;