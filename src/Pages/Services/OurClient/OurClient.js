import React from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import client1 from '../../../Assets/clients/1.png';
import client2 from '../../../Assets/clients/2.png';
import client3 from '../../../Assets/clients/3.png';
import client4 from '../../../Assets/clients/4.png';
import client5 from '../../../Assets/clients/5.png';
import client6 from '../../../Assets/clients/6.png';

import './OurClient.css'

const OurClient = () => {
    return (
        <div className=''>
            <div className='OurClient relative py-[250px]'>
                <div className='py-24'>
                    <SectionTitle content='Our Clients'></SectionTitle>
                    <p className='mx-auto w-full text-cardTitle my-[43px]' style={{ fontFamily: `'Inter', sans-serif` }}>We have worked with these beautiful client to create awesome product.</p>
                    <div className='flex justify-evenly  '>
                        <div><img className='block mx-auto my-[30px]' src={client1} alt="" /></div>
                        <div><img className='block mx-auto my-[30px]' src={client2} alt="" /></div>
                        <div><img className='block mx-auto my-[30px]' src={client3} alt="" /></div>
                    </div>
                    <div className='flex justify-evenly  '>
                        <div><img className='block mx-auto my-[30px]' src={client4} alt="" /></div>
                        <div><img className='block mx-auto my-[30px]' src={client5} alt="" /></div>
                        <div><img className='block mx-auto my-[30px]' src={client6} alt="" /></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurClient;