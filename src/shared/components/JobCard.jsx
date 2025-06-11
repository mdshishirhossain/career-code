import React from 'react';
import { CiLocationOn } from 'react-icons/ci';
import { Link } from 'react-router';

// {
//     "_id": "6846564904209ee337e59125",
//     "title": "Software Engineer",
//     "location": "Halishohor, Chittagong",
//     "jobType": "Hybrid",
//     "category": "Engineering",
//     "applicationDeadline": "2024-12-31",
//     "salaryRange": {
//       "min": 40000,
//       "max": 60000,
//       "currency": "bdt"
//     },
//     "description": "We are seeking a skilled Software Engineer to join our dynamic team. The candidate will work on diverse projects and contribute to innovative solutions.",
//     "company": "Favorite IT",
//     "requirements": [
//       "JavaScript",
//       "React",
//       "Node.js",
//       "MongoDB"
//     ],
//     "responsibilities": [
//       "Develop and maintain software",
//       "Collaborate with the team",
//       "Participate in code reviews"
//     ],
//     "status": "active",
//     "hr_email": "hr@techsolutions.com",
//     "hr_name": "Farhan Rahman",
//     "company_logo": "https://i.ibb.co/mXD5MNf/facebook.png"
//   },

const JobCard = ({ job }) => {
    const { _id, title, location, description, salaryRange, company, requirements, company_logo } = job
    return (
        <div className="card bg-base-100 shadow-sm">
            <div className='flex gap-3 p-5 items-center'>
                <figure>
                    <img className='w-16'
                        src={company_logo}
                        alt="Shoes" />
                </figure>

                <div>
                    <h3 className='font-bold text-2xl'>{company}</h3>
                    <p className='text-accent text-sm flex items-center gap-1'><span><CiLocationOn /></span> {location}</p>
                </div>
            </div>
            <div className="card-body">
                <h2 className="card-title">
                    {title}
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <p className=''><span className='font-semibold'>Salary:</span> {salaryRange.min} - {salaryRange.max} {salaryRange.currency}</p>
                <p className='text-accent'>{description}</p>
                <div className="card-actions">
                    {
                        requirements.map((skill, index) => <div key={index} className="badge badge-outline">{skill}</div>)
                    }
                </div>

                <div className="justify-end card-actions mt-5">
                    <Link to={`/jobs/${_id}`}  className="relative inline-block px-4 py-2 font-medium group">
                        <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                        <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
                        <span className="relative text-black group-hover:text-white">Show Details</span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default JobCard;