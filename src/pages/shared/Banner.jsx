import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import first from "../../assets/1.jpg";
import second from "../../assets/2.jpg";
import { Link } from 'react-router-dom';
import banner from "../../assets/banner.jpg"

const Banner = () => {
    return (
        <div style={{backgroundImage:`url(${banner})`, backgroundPosition:"center", backgroundSize:"cover"}} className='flex justify-between gap-6 p-6 items-center '>
            <div className='w-1/2'>
                <h1 className='text-6xl font-bold text-white mb-4'>Welcome</h1>
                <p className='text-md text-white mb-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis recusandae ea odit et hic fugit veniam sed id. Veniam, animi! Molestiae debitis velit sint, nam culpa est rerum laudantium?</p>
                <Link className='bg-white px-16 py-3 hover:bg-red-800 text-white'>Shop Now</Link>
            </div>
            <div className='w-[60%] border-4'>
                <Carousel className='text-center' showThumbs={false} emulateTouch>
                    <div className='relative'>
                        <img src={first} className='object-cover object-right-bottom' />
                    </div>
                    <div className='relative'>
                        <img src={second} className='object-cover object-bottom' />
                    </div>
                </Carousel>
            </div>
        </div>
    );
};

export default Banner;