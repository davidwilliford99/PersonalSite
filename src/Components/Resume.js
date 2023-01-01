import React from "react";
import resume from './../assets/Resume.png';
import resumePDF from './../assets/ResumeDOCX.docx';
import { motion } from "framer-motion";


function Resume() {
    return (
        <div className="h-screen*2 bg-canvas">
            <motion.div 
                className="flex flex-col items-center pb-40"
                initial={{ opacity: .1, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }} 
                >
                <h1 className='lg:text-7xl text-5xl text-white text-center pt-32 xl:mt-0 mb-12'>My Resume</h1>
                <div class='button w-10/12 sm:w-auto h-16 bg-yellow-600 rounded-lg cursor-pointer select-none
                                        active:translate-y-2  active:[box-shadow:0_0px_0_0_#7c3aed,0_0px_0_0_#7c3aed]
                                        active:border-b-[0px]
                                        transition-all duration-150 [box-shadow:0_10px_0_0_#854d0e,0_15px_0_0_#27272a]
                                        border-b-[1px] border-yellow-700 mx-10 px-10 my-6 sm:my-0'>
                                        <a href={resumePDF} download="DavidWilliford-Resume" class='flex flex-col justify-center items-center h-full text-white font-bold text-lg'>Download Resume</a>
                </div>
                <img src={resume} alt='resume screenshot' className="object-fill w-11/12 md:w-2/5 pb-10 mt-16"></img>
            </motion.div>
        </div>
    );
}

export default Resume;