import React from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import teamProfile from '../../../Assets/team/1.png';
import './TeamsContent.css';

const TeamsContent = () => {
    return (
        <div className='relative  '>
            <div className='team-page-shadow-left rounded-full  md:-top-[300px] -left-[353px] -z-10'></div>
            <div className='background-shadow absolute  left-1/2 top-[200px] -z-20'></div>
            {/* <div className='team-page-shadow-left rounded-full top-0  md:-top-[400px] left-0 md:-left-[400px] -z-10'></div>

            <div className='teams-shadow-right rounded-full bottom-0 md:-bottom-[500px] right-0 md:-right-[300px]  md:-right-[250px]'></div>
            <div className='background-shadow absolute hidden md:block  inset-1/2 -z-10'></div> */}

            <div>
                <div className='z-30 pb-[100px]'>
                    <SectionTitle content='Meet Our Teams'></SectionTitle>
                    <p className='mx-auto w-full md:w-1/2 mt-[52px] '>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>

                    <div className='md:bg-white py-16 px-4 md:flex justify-around items-center rounded-xl md:mx-10 mt-[133px] mb-[70px]'>
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
                    <div className='md:bg-white py-16 px-4 md:flex justify-around items-center rounded-xl md:mx-10 mb-[133px]'>
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