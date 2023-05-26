import React from 'react';
import banner from "../../assets/images/man.png";

const Hero = () => {
    return (
        <div className='bg-gradient-to-r from-[#F8F9FF] to-[#FAF8FF]'>
            <div className='max-w-[1320px] mx-auto md:flex md:flex-row flex flex-col-reverse items-center'>
                <div className='md:mr-[70px]'>
                    <h1 className='text-[#1A1919] font-extrabold md:text-[80px] text-[40px] md:leading-[100px]'>One Step Closer To Your <span className='text-[#7E90FE]'>Dream Job</span></h1>
                    <p className='text-[#757575] font-medium text-lg mt-6'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                    <button className='px-7 py-5 bg-[#7E90FE] rounded-lg font-extrabold text-white mt-8'>Get Started</button>
                </div>
                <div className='md:h-auto md:min-w-[676px] w-[250px]'>
                    <img className='w-full mx-auto' src={banner} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Hero;