import React, { useEffect, useState } from 'react';
import vector from "../../../assets/images/vector.png"
import vectorOne from "../../../assets/images/vector-one.png"
import { useLoaderData, useParams } from 'react-router-dom';
import { BiCalendar, BiDollarCircle } from 'react-icons/bi';
import { BsEnvelope, BsTelephone } from 'react-icons/bs';
import { TfiLocationPin } from 'react-icons/tfi';
import { addToDb } from '../../../utilities/fakedb';

const Job = () => {
    const {id} = useParams();
    const allJobs = useLoaderData();
    const [singleJob, setSingleJob] = useState({});

    useEffect(()=>{
        const findSingleJob = allJobs.find(allJob => allJob.id==id);
        setSingleJob(findSingleJob);
    },[])

    const handleAddToJob = (job) =>
    {
        addToDb(job.id);
    }

    return (
        <div className='mb-[130px] md:px-0 px-2'>
            <div className='bg-gradient-to-r from-[#F8F9FF] to-[#FAF8FF] pb-[140px] pt-[40px] relative'>
                <h1 className='text-center font-extrabold text-[#1A1919] text-[32px]'>Job Details</h1>
                <img className='absolute left-0 bottom-0' src={vector} alt="" />
            </div>
            <img className='absolute right-0 top-0' src={vectorOne} alt="" />

            <div className='max-w-[1320px] mx-auto mt-[130px] grid md:grid-cols-3 gap-6'>
                <div className='col-span-2'>
                    <p className='text-[#757575] text-base font-medium'><span className='text-[#1A1919] font-extrabold text-base'>Job Description: </span>{singleJob.job_description}</p>
                    <p className='text-[#757575] text-base font-medium mt-8'><span className='text-[#1A1919] font-extrabold text-base'>Job Responsibility: </span>{singleJob.job_responsibility}</p>
                    <p className='text-[#1A1919] font-extrabold text-base mt-6'>Educational Requirements:</p>
                    <p className='text-[#757575] text-base font-medium mt-4'>{singleJob.job_responsibility}</p>
                    <p className='text-[#1A1919] font-extrabold text-base mt-6'>Experiences:</p>
                    <p className='text-[#757575] text-base font-medium mt-4'>{singleJob.experience}</p>
                </div>
                <div>
                    <div className='col-span-1 p-[30px] bg-[#7E90FE] bg-opacity-10 rounded-lg'>
                        <h2 className='text-[#1A1919] text-xl font-extrabold border-b pb-6 border-[#7E90FE] border-opacity-30'>Job Details</h2>
                        <p className='flex items-center gap-x-2 text-[#757575] font-medium text-xl mt-6'><span className='text-[#7E90FE]'><BiDollarCircle /></span><span className='text-[#474747] font-bold'>Salary: </span>{singleJob.salary_range}</p>
                        <div className='mb-8  text-[#757575] font-medium text-xl mt-6'>
                            <div className='flex gap-x-2'>
                                <p className='text-[#7E90FE]'><BiCalendar /></p>
                                <p className='text-[#474747] font-bold'>Job Title : <span className='text-[#757575] font-medium'>{singleJob.title}</span> </p>
                            </div>
                            <p></p>
                        </div>
                        <h2 className='text-[#1A1919] text-xl font-extrabold border-b pb-6 border-[#7E90FE] border-opacity-30'>Contact Information</h2>
                        <div className='mb-8  text-[#757575] font-medium text-xl mt-6'>
                            <div className='flex items-center gap-x-2'>
                                <p className='text-[#7E90FE]'><BsTelephone /></p>
                                <p className='text-[#474747] font-bold'>Phone :<span className='text-[#757575] font-medium'>{singleJob.phone}</span> </p>
                            </div>
                            <p></p>
                        </div>
                        <div className='mb-8  text-[#757575] font-medium text-xl mt-6'>
                            <div className='flex items-center gap-x-2'>
                                <p className='text-[#7E90FE]'><BsEnvelope /></p>
                                <p className='text-[#474747] font-bold'>Email : <span className='text-[#757575] font-medium'>{singleJob.email}</span> </p>
                            </div>
                            <p></p>
                        </div>
                        <div className='mb-8 text-[#757575] font-medium text-xl mt-6'>
                            <div className='flex items-center gap-x-2'>
                                <p className='text-[#7E90FE]'><TfiLocationPin /></p>
                                <p className='text-[#474747] font-bold'>Address : <span className='text-[#757575] font-medium'>{singleJob.location}</span> </p>
                            </div>
                            <p></p>
                        </div>
                        
                    </div>
                    <div>
                        <button onClick={()=>handleAddToJob(singleJob)} className='bg-[#7E90FE] font-extrabold text-xl text-white rounded-lg py-[19px] w-full mt-6'>Apply Now</button>
                        </div>
                </div>
                
            </div>
        </div>
    );
};

export default Job;