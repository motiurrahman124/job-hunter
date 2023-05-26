import React, { useEffect, useState } from 'react';
import FeaturedJobsCard from './FeaturedJobsCard';

const FeaturedJobs = () => {
    const [jobs, setJobs] = useState([]);
    const [showAll, setShowAll] = useState(false);

    useEffect(() => {
        fetch('featuredJobs.json')
            .then(res => res.json())
            .then(data => setJobs(data))
    },[])

    const handleSeeMore = () => {
        setShowAll(true);
      };

    return (
        <div className='max-w-[1320px] mx-auto mt-[130px]'>
            <h1 className='text-[#1A1919] font-extrabold text-[48px] text-center'>Featured Jobs</h1>
            <p className='mt-4 text-[#757575] font-medium text-base text-center'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className='mt-8 grid md:grid-cols-2 gap-6'>
                {
                    jobs.slice(0, showAll ? jobs.length : 4).map(job => <FeaturedJobsCard key={job.id} jobs={job}></FeaturedJobsCard>)
                }
            </div>
            <div className='flex justify-center mb-[130px]'>
                {
                    !showAll && (
                    <button onClick={handleSeeMore} className='mt-[60px] py-[19px] px-7 bg-[#7E90FE] font-extrabold text-xl text-white rounded-lg'>See All Jobs</button>
                )}
            </div>
        </div>
    );
};

export default FeaturedJobs;