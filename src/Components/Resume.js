import React from "react";
import resume from './../assets/Resume.png';
import resumePDF from './../assets/Resume.pdf';


function Resume() {
    return (
        <div className="h-screen*2 bg-zinc-900 flex flex-col items-center xl:px-20">
            <h1 className='lg:text-7xl text-5xl text-white text-center pt-20 xl:mt-0'>My Resume</h1>
            <a href={resumePDF} download class="text-white text-center text-sm font-semibold px-10 py-4 rounded-lg bg-yellow-600 duration-500 hover:bg-violet-500 m-10">
                Download Resume
            </a>
            <img src={resume} alt='resume screenshot' className="object-fill w-2/5 pb-10"></img>
        </div>

    );
}

export default Resume;