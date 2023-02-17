import React from 'react';
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaMailBulk, FaPhone } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from '../../Assets/logo.png'

const Footer = () => {
    return (
        <div className='bg-white py-10 px-2 md:px-[120px] text-left md:flex'  style={{ fontFamily: `'Inter', sans-serif` }}>
         
            <div className='my-10 md:my-2 w-full md:w-1/3'>
                <div className='flex items-center'>
                    <img src={logo} alt="" className='' />
                    <h2 className='text-[40px] leading-[44px] font-normal ' style={{ fontFamily: `'Quattrocento', serif` }}>LeoPhoneix</h2>
                </div>
                <p className='p-2'>We assist companies in developing innovative digital goods and experiences.</p>
                <div className='flex items-center my-4'>
                    <FaMailBulk></FaMailBulk> <span className='px-2'>contact@yourwebsite.com</span>
                </div>
                <div className='flex items-center my-4'>
                    <FaPhone></FaPhone> <span className='px-2'>123-456-7890</span>
                </div>
            </div>
            <div className='w-full md:w-2/3 md:grid grid-cols-3 text-footerText font-medium'>
                <div className='my-10 md:my-2'>
                    <p className='font-semibold text-[18px]'>The Company</p>
                    <ul className='py-4'>
                        <li className='py-2'><Link to='/'> Web Design</Link></li>
                        <li className='py-2'><Link to='/'> Marketing & SEO</Link></li>
                        <li className='py-2'><Link to='/'> Branding</Link></li>
                        <li className='py-2'><Link to='/'> Packaging</Link></li>
                        <li className='py-2'><Link to='/'> Product Launch</Link></li>
                    </ul>
                </div>
                <div className='my-10 md:my-2'>
                    <p className='font-semibold text-[18px]'>Services</p>
                    <ul className='py-4'>
                        <li className='py-2'><Link to='/'> Terms of use</Link></li>
                        <li className='py-2'><Link to='/'> Privacy Policy</Link></li>
                    </ul>
                </div>
                <div className='my-10 md:my-2'>
                    <p className='font-semibold text-[18px]'>Social</p>
                    <ul className='py-4 flex '>
                        <li className='py-2 mx-2'><a className='text-[20px]' href='/'><FaLinkedin></FaLinkedin> </a></li>
                        <li className='py-2 mx-2'><a className='text-[20px]' href='/'> <FaInstagram></FaInstagram></a></li>
                        <li className='py-2 mx-2'><a className='text-[20px]' href='/'> <FaFacebook></FaFacebook></a></li>
                        <li className='py-2 mx-2'><a className='text-[20px]' href='/'> <FaGithub></FaGithub></a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Footer;