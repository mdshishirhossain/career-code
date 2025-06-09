import React, { use } from 'react';
import JobCard from '../../shared/components/JobCard';

const HotJobs = ({jobsPromise}) => {

    const jobs = use(jobsPromise)
    
    return (
        <div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
                {jobs.map(job => <JobCard key={job._id} job={job}></JobCard>)}
            </div>
        </div>
    );
};

export default HotJobs;