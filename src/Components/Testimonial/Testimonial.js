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
            <div className='testimonial-shadow-left rounded-full -top-[300px] md:-top-[100px] -left-[200px]'></div>
            <div className='testimonial-shadow-right rounded-full -bottom-[300px] -right-[300px]  md:-right-[250px]'></div>

            <div className='background-shadow absolute  inset-1/2 -z-10'></div>
            <div className='h-full w-full px-2 md:px-10 py-16  top-0 md:flex justify-around items-center  '>
                <div className='w-full md:w-1/2  '>
                    <img src={quotaion} className=' mt-4 md:mt-48 block mx-auto' alt="" />
                    <MoreButton content='Read All Testimonials' path='/'></MoreButton>
                </div>
                <div className='w-full md:w-1/2'>
                    <div className='text-center md:w-[500px] mx-auto mt-60 md:mt-2  '>
                        <div className='mt-24'>
                            <SectionTitle content='Testimonials'></SectionTitle>
                        </div>
                        <div>

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
                                        <h2 className='text-lg font-bold py-4'>Jhon C - Product Manager</h2>
                                        <p className='py-4'>Twister design</p>
                                        <p className='py-4'>"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni possimus, autem natus mollitia neque reprehenderit nemo totam eum? Inventore dolor saepe dolorem dignissimos hic, quod ab voluptas suscipit quae! Nisi?"</p>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div>
                                        <img className='h-16 w-16 rounded-full block mx-auto' src={profile} alt="" />
                                        <h2 className='text-lg font-bold py-4'>Jhon C - Product Manager</h2>
                                        <p className='py-4'>Twister design</p>
                                        <p className='py-4'>"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni possimus, autem natus mollitia neque reprehenderit nemo totam eum? Inventore dolor saepe dolorem dignissimos hic, quod ab voluptas suscipit quae! Nisi?"</p>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div>
                                        <img className='h-16 w-16 rounded-full block mx-auto' src={profile} alt="" />
                                        <h2 className='text-lg font-bold py-4'>Jhon C - Product Manager</h2>
                                        <p className='py-4'>Twister design</p>
                                        <p className='py-4'>"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni possimus, autem natus mollitia neque reprehenderit nemo totam eum? Inventore dolor saepe dolorem dignissimos hic, quod ab voluptas suscipit quae! Nisi?"</p>
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