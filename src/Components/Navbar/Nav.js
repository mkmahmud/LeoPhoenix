import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../Assets/logo.png';
import MainButton from '../Buttons/MainButton';
import { FaBars } from 'react-icons/fa';
import './Nav.css'

const Nav = () => {

  const [mobileMenu, setMobileMenu] = useState(false);
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 50) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  return (
    <div className={`nav h-24  md:flex w-full justify-between items-center md:px-10 navbar ${sticky ? "sticky" : ""} `}>
      <div className="logo flex items-center justify-between">
        <Link to='/' className='flex items-center'>
          <img src={logo} alt="" className='' />
          <h2 className='text-xl font-bold hidden md:block'>LeoPhoneix Tech</h2>
        </Link>
        <div>

          {

            mobileMenu
              ?
              <FaBars onClick={() => setMobileMenu(!mobileMenu)} className='mx-5 rotate-90 md:hidden' />
              :
              <FaBars onClick={() => setMobileMenu(!mobileMenu)} className='mx-5 text-2xl  md:hidden' />
          }
        </div>
      </div>
      <div className={`menus w-full bg-white md:bg-transparent absolute py-5 z-10 ${!mobileMenu && '-translate-y-[500px] ease-[cubic-bezier(0.95,0.05,0.795,0.035)]'} md:static md:-translate-y-[0px] md:w-1/2`}>
        <ul className='md:flex justify-between items-center text-base font-bold space-y-4 md:space-y-0  md:space-x-4 '>
          <li> <Link to='/'>Home</Link></li>
          <li> <Link to='/about'>About</Link></li>
          <li> <Link to='/services'>Services</Link></li>
          <li> <Link to='/teams'>Teams</Link></li>
          <li> <Link to='#'>Blog</Link></li>
          <li> <Link to='/testimonial'>Testimonial</Link></li>
          <li> <MainButton path='/contact' content='Contact'></MainButton></li>
        </ul>


      </div>
    </div>
  );
};

export default Nav;