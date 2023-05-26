import React from 'react';


const JobCategoryCard = ({data}) => {
    const {icon, title, subtitle} = data;

    return (
        <div className='bg-gradient-to-r from-[#F8F9FF] to-[#FAF8FF] p-10 rounded-lg'>
            <div className='text-start'>
                <img src={icon} alt="" />
                <h2 className='text-[#474747] font-extrabold text-xl mt-8'>{title}</h2>
                <p className='text-[#A3A3A3] font-medium text-base mt-2'>{subtitle}</p>
            </div>
        </div>
    );
};

export default JobCategoryCard;