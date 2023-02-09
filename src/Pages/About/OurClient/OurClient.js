import React from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import './OurClient.css';
import client1 from '../../../Assets/clients/1.png';
import client2 from '../../../Assets/clients/2.png';
import client3 from '../../../Assets/clients/3.png';
import client4 from '../../../Assets/clients/4.png';
import client5 from '../../../Assets/clients/5.png';
import client6 from '../../../Assets/clients/6.png';

const OurClient = () => {
    return (
        <div className='relative py-24'>
            <div className='our-client-shadow-left rounded-full -top-[300px] md:-top-[100px] -left-[200px]'></div>
            <div className='our-client-shadow-right rounded-full -bottom-[300px] -right-[300px]  md:-right-[250px]'></div>

            <div className='py-10'>
                <SectionTitle content='Our Clients'></SectionTitle>
                <p className='mx-auto w-full py-2 px-4 '>We have worked with these beautiful client to create awesome product.</p>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-6 md:py-10 mx-auto mt-6  '>

                    <div><img className='block mx-auto' src={client1} alt="" /></div>
                    <div><img className='block mx-auto' src={client2} alt="" /></div>
                    <div><img className='block mx-auto' src={client3} alt="" /></div>
                    <div><img className='block mx-auto' src={client4} alt="" /></div>
                    <div><img className='block mx-auto' src={client5} alt="" /></div>
                    <div><img className='block mx-auto' src={client6} alt="" /></div>
                </div>
            </div>
        </div>
    );
};

export default OurClient;