import React from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import './ContactContent.css'

const ContactContent = () => {
    return (
        <div className='relative md:my-24 '>
            <div className='contact-page-shadow-left rounded-full top-0  md:-top-[400px] left-0 md:-left-[400px] -z-10'></div>
            <div className='contact-shadow-right rounded-full bottom-0 md:-bottom-[600px] right-0 md:-right-[300px]  md:-right-[250px]'></div>
            <div className='background-shadow absolute hidden md:block  inset-1/2 -z-10'></div>

            <div>
                <SectionTitle content='Get In Touch ✋'></SectionTitle>
                <p className='text-lg text-center pb-10   '>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
            </div>
            <div className='md:flex justify-between items-center md:px-16'>
                <div className='w-full md:w-1/2 p-4'>
                    <div className='border-b-2 border-black mx-4 my-10 p-2 text-left pl-10'>
                        <h2 className='text-3xl font-bold'>Email</h2>
                        <p className='py-2'>developer@gmail.gom</p>
                    </div>
                    <div className='border-b-2 border-black mx-4 my-10 p-2 text-left pl-10'>
                        <h2 className='text-3xl font-bold'>Contact</h2>
                        <p className='py-2'>+123-456-7890</p>
                    </div>
                    <div className='border-b-2 border-black mx-4 my-10 p-2 text-left pl-10'>
                        <h2 className='text-3xl font-bold'>Address</h2>
                        <p className='py-2'>California 770, San Diego, USA</p>
                    </div>
                </div>
                <div className='my-16 w-full md:w-1/2 p-4'>
                    <form className='bg-[#ffffff69] m-2 p-4 rounded-xl'>
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
            <div className='bg-red-200 h-[50vh] mx-2 md:mx-16 my-48 rounded'>
                MAP
            </div>
        </div>
    );
};

export default ContactContent;