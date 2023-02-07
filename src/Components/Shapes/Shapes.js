import React from 'react';
import './Shapes.css';
import about from '../../Assets/images/about.png'
import SectionTitle from '../SectionTitle/SectionTitle';
import { Link } from 'react-router-dom';
import { FaAngleRight } from 'react-icons/fa';

const Shapes = () => {
    return (
        <div className='relative md:my-48 h-screen ' style={{ fontFamily: `'Poppins', sans-serif` }}>
            <div className='h-[1600px] md:h-screen pt-[40%] md:flex justify-between relative mt-[200px] md:mt-0 '>
                <div className='w-full md:w-1/3 relative rounded-full  '>
                    {/* <img src={about} className='absolute top[-100px] left-[100px] z-10' alt="" /> */}
                    <div className=' left-outter-shadow h-px w-px absolute top-[50px] md:-top-[150px] left-[50%] md:left-64'>
                        <div className=' left-inner-shadow h-px w-px rounded-full'>
                        </div>
                    </div>
                </div>
                <div className='w-full md:w-2/3 -z-10'>
                    <div className='h-[1000px] w-[1000px] md:h-[1000px] md:w-[1000px] rounded-full bg-[#23cd9e87] absolute overflow-hidden  bottom-0 md:top-0 -right-[100px]'>
                        <div className='shadow-right-inner absolute top-[500px] left-[500px]'>
                        </div>
                    </div>
                </div>
            </div>
            <div className='h-full w-full px-2 md:px-10 absolute top-0 md:flex justify-around items-center  '>
                <div className='w-full md:w-1/2  '>
                    <img src={about} className=' mt-4 md:mt-48 block mx-auto' alt="" />
                    <Link to='/' className='flex items-center justify-center pt-24 text-[#FF5B00] text-lg font-bold'><span className='px-4'>Learn More</span> <FaAngleRight></FaAngleRight> </Link>
                </div>
                <div className='w-full md:w-1/2'>
                    <div className='text-center md:w-[500px] mx-auto mt-60 md:mt-2  '>
                        <div className='mt-24'>
                            <SectionTitle content='About Us'></SectionTitle>
                        </div>
                        <h2 className='text-3xl text-left font-bold mb-10 '>
                            We assist companies in developing innovative digital goods and experiences.
                        </h2>
                        <p className='text-left'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        <div className='flex justify-around my-16'>
                            <div>
                                <h2 className='text-3xl font-bold py-2 px-4 border-b-2 border-[#FF5B00] '>500 <span className='text-[#FF5B00]'>+</span></h2>
                                <p className='py-4 font-bold'>Website User</p>
                            </div>
                            <div>
                                <h2 className='text-3xl font-bold py-2 px-4 border-b-2 border-[#FF5B00] '>500 <span className='text-[#FF5B00]'>+</span></h2>
                                <p className='py-4 font-bold'>Website User</p>
                            </div>
                            <div>
                                <h2 className='text-3xl font-bold py-2 px-4 border-b-2 border-[#FF5B00] '>500 <span className='text-[#FF5B00]'>+</span></h2>
                                <p className='py-4 font-bold'>Website User</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Shapes;