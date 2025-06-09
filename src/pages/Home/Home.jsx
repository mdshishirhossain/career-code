import React, { Suspense } from 'react';
import Banner from './Banner';
import HotJobs from './HotJobs';
import Loading from '../../shared/components/Loading';

const jobsPromise = fetch('http://localhost:3000/jobs').then(res => res.json())

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <section className='max-w-7xl mx-auto'>
                <Suspense fallback= {<Loading></Loading>}>
                    <HotJobs jobsPromise={jobsPromise}></HotJobs>
                </Suspense>
            </section>
        </div>
    );
};

export default Home;