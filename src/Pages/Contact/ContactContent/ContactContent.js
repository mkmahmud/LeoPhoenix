import React from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import './ContactContent.css'

const ContactContent = () => {
    return (
        <div className='relative  '>

            <div className='md:flex justify-between items-center md:px-10'>
                <div className='w-full md:w-1/2 p-4'>
                    <div className='border-b-2 border-black mx-4 my-10 p-2 text-left pl-10'>
                        <h2 className='text-[32px] leading-[40px] font-semibold'>Email</h2>
                        <p className='text-[15px] leading-[40px] font-light'>developer@gmail.gom</p>
                    </div>
                    <div className='border-b-2 border-black mx-4 my-10 p-2 text-left pl-10'>
                        <h2 className='text-[32px] leading-[40px] font-semibold'>Contact</h2>
                        <p className='text-[15px] leading-[40px] font-light'>+123-456-7890</p>
                    </div>
                    <div className='border-b-2 border-black mx-4 my-10 p-2 text-left pl-10'>
                        <h2 className='text-[32px] leading-[40px] font-semibold'>Address</h2>
                        <p className='text-[15px] leading-[40px] font-light'>California 770, San Diego, USA</p>
                    </div>
                </div>
                <div className=' w-full md:w-1/2 p-4'>
                    <form className='bg-[#FFFFFF] m-2 p-4 rounded-xl'>
                        <div className='w-full my-4'>
                            <p className='font-bold my-2 text-left px-2'>Full Name</p>
                            <input className='w-full p-2 bg-[#e9e5e569]  border border-black' type="text" placeholder='Full Name' name="" id="" />
                        </div>
                        <div className='w-full my-4'>
                            <p className='font-bold my-2 text-left px-2'>Email</p>
                            <input className='w-full p-2 bg-[#e9e5e569]  border border-black' type="email" placeholder='Email' name="" id="" />
                        </div>
                        <div className='w-full my-4'>
                            <p className='font-bold my-2 text-left px-2'>Subject</p>
                            <input className='w-full p-2 bg-[#e9e5e569]  border border-black' type="text" placeholder='Subject' name="" id="" />
                        </div>
                        <div className='w-full my-4'>
                            <p className='font-bold my-2 text-left px-2'>Message(optional)</p>
                            <textarea className='w-full p-2 bg-[#e9e5e569]  border border-black' placeholder='Your Message' name="" id="" cols="30" rows="5"></textarea>
                        </div>
                        <button className='bg-[#FF5B00] w-full rounded-xl text-white py-2 '>Send Message</button>
                    </form>
                </div>
            </div>
            <div className='bg-[#777] h-[50vh] mx-2 md:mx-16 my-48 rounded'>
                MAP
            </div>
        </div>
    );
};

export default ContactContent;