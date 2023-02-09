import React from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import client1 from '../../../Assets/clients/1.png';
import client2 from '../../../Assets/clients/2.png';
import client3 from '../../../Assets/clients/3.png';
import client4 from '../../../Assets/clients/4.png';
import client5 from '../../../Assets/clients/5.png';
import client6 from '../../../Assets/clients/6.png';
import background from '../../../Assets/service-page-client-bg.png';
import backgroundMobile from '../../../Assets/service-page-client-bg-mobile.png';


const OurClient = () => {
    return (
        <div className=' h-full md:h-screen md:my-0 relative  py-24 md:py-0 -mt-[100px] md:mt-48   z-10'>
              <img src={background} className='absolute hidden md:block -z-10 h-full w-full' alt="" />
              <img src={backgroundMobile} className='absolute block md:hidden -z-10 h-full w-full' alt="" />
            <div className='py-24'>
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