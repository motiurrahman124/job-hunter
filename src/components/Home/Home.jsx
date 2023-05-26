import React from 'react';
import Hero from '../Hero/Hero';
import JobCategory from './JobCategory/JobCategory';
import FeaturedJobs from './FeaturedJobs/FeaturedJobs';

const Home = () => {
    return (
        <div className='md:px-0 px-2'>
            <Hero/>
            <JobCategory/>
            <FeaturedJobs/>
        </div>
    );
};

export default Home;