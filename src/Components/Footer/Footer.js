import React from 'react';
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaMailBulk, FaPhone } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from '../../Assets/logo.png'

const Footer = () => {
    return (
        <div className='bg-white py-10 px-2 md:px-10 text-left md:flex'>
            <div className='my-10 md:my-2 w-full md:w-1/3'>
                <div className='flex items-center'>
                    <img src={logo} alt="" className='' />
                    <h2 className='text-xl font-bold '>LeoPhoneix Tech</h2>
                </div>
                <p className='py-2'>We assist companies in developing innovative digital goods and experiences.</p>
                <div className='flex items-center my-4'>
                    <FaMailBulk></FaMailBulk> <span className='px-2'>contact@yourwebsite.com</span>
                </div>
                <div className='flex items-center my-4'>
                    <FaPhone></FaPhone> <span className='px-2'>123-456-7890</span>
                </div>
            </div>
            <div className='w-full md:w-2/3 md:grid grid-cols-3'>
                <div className='my-10 md:my-2'>
                    <p className='font-bold'>The Company</p>
                    <ul className='py-4'>
                        <li className='py-2'><Link to='/'> Web Design</Link></li>
                        <li className='py-2'><Link to='/'> Marketing & SEO</Link></li>
                        <li className='py-2'><Link to='/'> Branding</Link></li>
                        <li className='py-2'><Link to='/'> Packaging</Link></li>
                        <li className='py-2'><Link to='/'> Product Launch</Link></li>
                    </ul>
                </div>
                <div className='my-10 md:my-2'>
                    <p className='font-bold'>Services</p>
                    <ul className='py-4'>
                        <li className='py-2'><Link to='/'> Terms of use</Link></li>
                        <li className='py-2'><Link to='/'> Privacy Policy</Link></li>
                    </ul>
                </div>
                <div className='my-10 md:my-2'>
                    <p className='font-bold'>Social</p>
                    <ul className='py-4 flex justify-between'>
                        <li className='py-2'><Link to='/'><FaLinkedin></FaLinkedin> </Link></li>
                        <li className='py-2'><Link to='/'> <FaInstagram></FaInstagram></Link></li>
                        <li className='py-2'><Link to='/'> <FaFacebook></FaFacebook></Link></li>
                        <li className='py-2'><Link to='/'> <FaGithub></FaGithub></Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Footer;