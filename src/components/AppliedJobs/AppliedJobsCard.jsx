import React from 'react';
import { GrLocation } from 'react-icons/gr';
import { BiDollarCircle } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const AppliedJobsCard = ({jobs}) => {
    return (
        <div className='border p-[30px] mt-6 rounded-lg md:flex justify-between items-center'>
            <div className='md:flex items-center gap-x-8'>
                <div className='w-[240px] h-[240px] flex justify-center items-center rounded-lg bg-[#F4F4F4]'>
                    <img src={jobs.image} alt="" />
                </div>
                <div>
                    <h1 className='text-[#474747] font-extrabold text-2xl'>{jobs.title}</h1>
                    <h2 className='text-[#757575] font-semibold text-xl mt-2'>{jobs.subtitle}</h2>
                    <div className='mt-4 flex gap-x-4'>
                        <button className='capitalize text-base font-extrabold py-[10px] px-[20px] rounded-lg border border-[#7E90FE] text-[#7E90FE]'>{jobs.job_type}</button>
                        <button className='capitalize text-base font-extrabold py-[10px] px-[20px] rounded-lg border border-[#7E90FE] text-[#7E90FE]'>{jobs.time}</button>
                    </div>
                    <div className='text-[#757575] font-semibold text-xl mt-4 flex gap-x-7 items-center'>
                        <div className='flex gap-x-2 items-center'>
                            <GrLocation />
                            <p>{jobs.location}</p>
                        </div>
                        <div className='flex gap-x-2 items-center'>
                            <BiDollarCircle />
                            <p>Salary : {jobs.salary_range}</p>
                        </div>
                    </div>
                </div>
                
            </div>
            <div>
                <Link to={`/job/${jobs.id}`}>
                    <button className='mt-6 py-[11px] px-[18px] bg-[#7E90FE] font-extrabold text-xl text-white rounded-lg'>View Details</button>
                </Link>
            </div>
        </div>
    );
};

export default AppliedJobsCard;