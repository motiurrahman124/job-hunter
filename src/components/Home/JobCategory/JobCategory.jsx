import React, { useEffect, useState } from 'react';
import JobCategoryCard from './JobCategoryCard';
import calculator from '../../../assets/images/icon/accounts.png'
import business from '../../../assets/images/icon/business.png'
import social from '../../../assets/images/icon/social-media.png'
import chip from '../../../assets/images/icon/chip.png'

const JobCategory = () => {
    const [jobCategory, setJobCategory] = useState([])

    useEffect(()=>{
        fetch("jobCategory.json")
        .then(res => res.json())
        .then(data => setJobCategory(data))
    },[])
    
    return (
        <div className='max-w-[1320px] mx-auto mt-[130px] text-center'>
            <h1 className='font-extrabold text-[#1A1919] text-5xl'>Job Category List</h1>
            <p className='text-base font-medium text-[#757575] mt-4'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className='mt-8 grid md:grid-cols-4 gap-6'>
                {
                    jobCategory.map(job => <JobCategoryCard key={job.id} data={job}></JobCategoryCard>)
                }
            </div>
        </div>
    );
};

export default JobCategory;