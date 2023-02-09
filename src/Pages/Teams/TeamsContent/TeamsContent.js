import React from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import teamProfile from '../../../Assets/team/1.png';
import './TeamsContent.css';

const TeamsContent = () => {
    return (
        <div className='relative md:my-24 '>
            <div className='team-page-shadow-left rounded-full top-0  md:-top-[400px] left-0 md:-left-[400px] -z-10'></div>

            <div className='teams-shadow-right rounded-full bottom-0 md:-bottom-[500px] right-0 md:-right-[300px]  md:-right-[250px]'></div>
            <div className='background-shadow absolute hidden md:block  inset-1/2 -z-10'></div>

            <div>
                <div>
                    <SectionTitle content='Meet Our Teams'></SectionTitle>
                    <p className='text-lg text-center pb-10   '>
                        Whatever your aim for you future, we have the perfect program to get you there.
                    </p>
                    <div className='md:bg-white py-16 px-4 md:flex justify-around items-center rounded-xl md:mx-10 my-10'>
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
                    <div className='md:bg-white py-16 px-4 md:flex justify-around items-center rounded-xl md:mx-10 my-10'>
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
            </div>
        </div>
    );
};

export default TeamsContent;