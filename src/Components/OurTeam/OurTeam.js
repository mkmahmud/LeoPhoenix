import React from 'react';
import MoreButton from '../MoreButton/MoreButton';
import SectionTitle from '../SectionTitle/SectionTitle';
import teamProfile from '../../Assets/team/1.png';
import './OurTeam.css'

const OurTeam = () => {
    return (
        <div className='py-24 relative -mt-24'>
            <div className='our-team-shadow-left -z-10 top-0 -left-[50%] md:-left-[200px]'></div>
            <div className='our-team-shadow-right -z-10 bottom-0 -right-[200px] md:top-[150px] '></div>
            <div>
                <SectionTitle content='Meet Our Teams'></SectionTitle>
                <p className='text-lg text-center pb-10   '>
                    Whatever your aim for you future, we have the perfect program to get you there.
                </p>
                <div className='md:bg-white py-16 px-4 md:flex justify-around items-center rounded-xl md:mx-10 '>
                    <div className='my-24 md:my-0'>
                        <img className='block mx-auto' src={teamProfile} alt="" />
                        <h2 className='text-lg font-bold py-2'>Jhon C</h2>
                        <p className='text-[#678398]'>UI/UXDesigner</p>
                    </div>
                    <div className='my-24 md:my-0'>
                        <img className='block mx-auto' src={teamProfile} alt="" />
                        <h2 className='text-lg font-bold py-2'>Jhon C</h2>
                        <p className='text-[#678398]'>UI/UXDesigner</p>
                    </div>
                    <div className='my-24 md:my-0'>
                        <img className='block mx-auto' src={teamProfile} alt="" />
                        <h2 className='text-lg font-bold py-2'>Jhon C</h2>
                        <p className='text-[#678398]'>UI/UXDesigner</p>
                    </div>
                    <div className='my-24 md:my-0'>
                        <img className='block mx-auto' src={teamProfile} alt="" />
                        <h2 className='text-lg font-bold py-2'>Jhon C</h2>
                        <p className='text-[#678398]'>UI/UXDesigner</p>
                    </div>
                </div>
            </div>
            <div>
                <MoreButton content='View All Teams' path=''></MoreButton>
            </div>
        </div>
    );
};

export default OurTeam;