import React from 'react';
import { useLoaderData } from 'react-router';

const JobDetails = () => {
    const job = useLoaderData()
    const { _id, title, location, jobType, category, applicationDeadline, description, salaryRange, company, requirements, company_logo } = job
    console.log(job)
    return (
        <div>
            <h2>Job Details</h2>
        </div>
    );
};

export default JobDetails;