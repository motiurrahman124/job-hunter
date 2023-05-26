import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import vector from "../../assets/images/vector.png"
import vectorOne from "../../assets/images/vector-one.png"
import AppliedJobsCard from './AppliedJobsCard';

const AppliedJobs = () => {
    const savedJob = useLoaderData();
    const [jobs, setJobs] = useState(savedJob);

    const handleSortRemote =()=>{
        const sortByRemote = savedJob.filter(job => job.job_type.toLowerCase() === "remote")
        setJobs(sortByRemote);
    }

    const handleSortOnsite =()=>{
        const sortByOnsite = savedJob.filter(job => job.job_type.toLowerCase() === "onsite")
        setJobs(sortByOnsite);
    }
    
    return (
        <div className=''>
            <div className='bg-gradient-to-r from-[#F8F9FF] to-[#FAF8FF] pb-[140px] pt-[40px] relative'>
                <h1 className='text-center font-extrabold text-[#1A1919] text-[32px]'>Applied Jobs</h1>
                <img className='absolute left-0 bottom-0 w-auto' src={vector} alt="" />
            </div>
            <img className='absolute right-0 top-0 w-auto' src={vectorOne} alt="" />
            
            <div className='max-w-[1320px] mx-auto my-[130px]'>
                {   
                    jobs.length>0 &&
                    <div className='mt-4 flex gap-x-4 justify-end'>
                        <button onClick={handleSortRemote} className='capitalize text-base font-extrabold py-[10px] px-[20px] rounded-lg border border-[#7E90FE] text-[#7E90FE]'>Remote</button>
                        <button onClick={handleSortOnsite} className='capitalize text-base font-extrabold py-[10px] px-[20px] rounded-lg border border-[#7E90FE] text-[#7E90FE]'>Onsite</button>
                    </div>
                }
                <div>
                    {
                        jobs.map(job => <AppliedJobsCard key={job.id} jobs={job}></AppliedJobsCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default AppliedJobs;