import React from 'react';
import bannerImage from '@/assests/images/ironyFit Home Banner.jpg'
import Image from 'next/image';
import './Bannert.css'

const Banner = () => {
    return (
        <div>
{/* Banner Image section  */}
        <div>
            <Image 
            src={bannerImage}
            alt='Banner Image'
            className='w-full lg:h-[700px] md:h-full sm: h-full'
            />
        </div>
        {/* polygen div  */}
        <div>
            <div className='Bannerpolygen'>

            </div>
        </div>
        </div>
    );
};

export default Banner;