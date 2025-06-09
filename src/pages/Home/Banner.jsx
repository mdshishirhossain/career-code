import React from 'react';
import { color, motion, scale } from "motion/react"
import team1 from "../../assets/team/team1.jpg"
import team2 from "../../assets/team/team2.jpg"

const Banner = () => {
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse max-w-6xl ">
                <div className='flex-1 place-items-end'>
                    <motion.img
                    animate={{y: [50, 70, 50], transition: {duration: 2, repeat: Infinity}}}
                     src={team1} className="max-w-md border-blue-600 border-s-8 border-b-8 rounded-t-[40px] rounded-r-[40px] shadow-2xl" alt="" />
                    <motion.img
                    animate={{x: [0, 100, 0], transition: {duration: 10, repeat: Infinity}}}
                     src={team2} className="max-w-xs border-blue-600 border-s-8 border-b-8 rounded-t-[40px] rounded-r-[40px] shadow-2xl" alt="" />
                </div>
                <div className='flex-1'>
                    <motion.h1 
                    initial={{scale: 0}}
                    animate= {{scale: 1, transition: {duration: 1}}}
                     className="text-5xl font-bold">Remote <motion.span animate={{color: ['#ff5733', '#3346ff', '#ff33e3'], transition: {duration: 2, repeat: Infinity} }}>Jobs</motion.span> For You!</motion.h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;