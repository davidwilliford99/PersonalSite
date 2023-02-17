import React from 'react';
// ACP Pictures
import ACP1 from './../assets/ACP1.png';
import ACP2 from './../assets/ACP2.png';
import ACP3 from './../assets/ACP3.png';
// TextArt Pictures
import TA1 from './../assets/TextArt1.png';
import TA2 from './../assets/TextArt2.png';
import TA3 from './../assets/TextArt3.png';
// Resume Site Pictures
import RS1 from './../assets/RS1.png';
import RS2 from './../assets/RS2.png';
import RS3 from './../assets/RS3.png';
// CollegeMajors pictures
import CM1 from './../assets/CM1.png';
import CM4 from './../assets/CM4.png';
import CM5 from './../assets/CM5.png';

import { motion } from "framer-motion";



function Works() {
  return (
    <div className='h-full bg-canvas 2xl:px-10 pb-20'>

        <motion.div 
                className='flex flex-col items-center justify-center xl:px-10 2xl:px-20 py-14'
                initial={{ opacity: .1, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }} 
                >


            <div className='w-full flex flex-col items-center xl:flex-row pt-20 2xl:pt-20'>
                <div id='text-description' className='w-full xl:w-1/2 flex flex-col items-center justify-center mb-10'>
                    <h2 className='w-11/12 text-7xl text-white'>My Works</h2>
                </div>
            </div>

            {/* Work Divider ======================================================================================= */}


            <div className='w-full flex flex-col items-center xl:flex-row mb-30 border-b 2xl:pt-10 pb-20'>
                <div id='text-description' className='xl:w-1/2 flex flex-col items-center justify-center mb-10 xl:mr-12'>
                    <h2 className='w-11/12 text-3xl text-white'>ACP Web-App</h2>
                    <h3 className='w-11/12 text-xl text-white my-5'>Angular, Typescript, Java Spring, Git</h3>
                    <p className='text-xl text-gray-400 w-11/12 mxl:w-auto leading-8'>During my internship at Autonomic Solutions, I worked on the ACP webapp. ACP stands for "Autonomic Computing Platform". This application simplifies the process of creating and managing cloud infrastrucures. I worked under 2 senior devs and along 2 other interns, and gathered equal experience with frontend and backend web development (Angular & Java Spring). I was very fortunate to work along with these people, and the senior devs made sure that us interns got plenty of hands on experience. Sadly I can not share the repository for this application, since I do not own the software.</p>
                </div>
                <div id='images' className='xl:w-1/2 flex flex-col items-center justify-center'>
                    <div id='row1' className='flex flex-col 2xl:flex-row  items-center justify-center'>
                        <img src={ACP1} alt='ACP1' className='w-10/12 xl:h-48 xl:w-96 m-4'></img>
                        <img src={ACP2} alt='ACP2' className='w-10/12 xl:h-48 xl:w-96 m-4'></img>
                    </div>

                    <div id='row2' className='flex flex-col 2xl:flex-row items-center justify-center'>
                        <img src={ACP3} alt='ACP3' className='w-10/12 xl:h-48 xl:w-96 m-4'></img>
                    </div>
                </div>
            </div>


            {/* Work Divider ======================================================================================= */}


            
            <div className='w-full flex flex-col xl:flex-row mb-30 border-b'>
                <div id='text-description' className='xl:w-1/2 flex flex-col items-center justify-center pt-10 xl:mr-10'>
                    <h2 className='w-11/12 text-3xl text-white'>MajorStatistics Web-App</h2>
                    <h3 className='w-11/12 text-xl text-white my-5'>React, Spring Boot, MySQL</h3>
                    <div class='button w-10/12 sm:w-auto h-16 bg-yellow-600 rounded-lg cursor-pointer select-none
                                        active:translate-y-2  active:[box-shadow:0_0px_0_0_#7c3aed,0_0px_0_0_#7c3aed]
                                        active:border-b-[0px]
                                        transition-all duration-150 [box-shadow:0_10px_0_0_#854d0e,0_15px_0_0_#27272a]
                                        border-b-[1px] border-yellow-700 mx-5 px-10 my-6 sm:my-0
                                    '>
                                        <a rel="noreferrer" target="_blank" href='https://github.com/davidwilliford99/CollegeMajors' class='flex flex-col justify-center items-center h-full text-white font-bold text-lg '>Github Repo</a>
                    </div>
                    <p className='text-xl text-gray-400 mx-20 w-11/12 mxl:w-auto leading-8 mt-10'>
                        This full-stack web application displays statistics and graphical representation of different undergraduate majors in the US. These statistics mainly display salaries, employment and popularity. It is built using a React UI, Spring Boot REST API and a MySQL database. This was built as a solo project, and will be deployed soon. I plan on adding a functioning "forum" section for users to discuss their experience with these majors. Until then, feel free to check out the repository!
                    </p>
                </div>
                <div id='images' className='xl:w-1/2 flex flex-col items-center justify-center py-20'>
                    <div id='row1' className='flex flex-col 2xl:flex-row items-center justify-center'>
                        <img src={CM1} alt='CM1' className='w-11/12 xl:h-48 xl:w-96 m-4'></img>
                        <img src={CM4} alt='CM2' className='w-11/12 xl:h-48 xl:w-96 m-4'></img>
                    </div>

                    <div id='row2' className=' flex flex-col 2xl:flex-row items-center justify-center'>
                        <img src={CM5} alt='CM3' className='w-11/12 xl:h-48 xl:w-96 m-4'></img>
                    </div>
                </div>
            </div>


            {/* Work Divider ======================================================================================= */}


            <div className='w-full flex flex-col xl:flex-row mb-30 border-b'>
                <div id='text-description' className='w-11/12 xl:w-1/2 flex flex-col items-center justify-center py-20 xl:mr-10'>
                    <h2 className='w-11/12 text-3xl text-white'>TextArt (CSCI-2530)</h2>
                    <h3 className='w-11/12 text-xl text-white my-5'>C/C++, Visual Studio</h3>
                    <div class='button w-10/12 sm:w-auto h-16 bg-yellow-600 rounded-lg cursor-pointer select-none
                                        active:translate-y-2  active:[box-shadow:0_0px_0_0_#7c3aed,0_0px_0_0_#7c3aed]
                                        active:border-b-[0px]
                                        transition-all duration-150 [box-shadow:0_10px_0_0_#854d0e,0_15px_0_0_#27272a]
                                        border-b-[1px] border-yellow-700 mx-5 px-10 my-6 sm:my-0
                                    '>
                                        <a rel="noreferrer" target="_blank" href='https://github.com/davidwilliford99/TextArt' class='flex flex-col justify-center items-center h-full text-white font-bold text-lg '>Github Repo</a>
                    </div>
                    <p className='text-xl text-gray-400 mx-20 w-11/12 mxl:w-auto leading-8 mt-10'>This terminal application can create, store, and manipulate text art. This gives people a full open canvas for text art, allowing them to delete characters, undo, redo, and more. This application can also create and store textart animations! TextArt includes a ton of DS&A material, such as linked lists, recursion, multi-dimensional arrays, trees, and graphs. Feel free to give it a go!</p>
                </div>
                <div id='images' className='xl:w-1/2 flex flex-col items-center justify-center py-20'>
                    <div id='row1' className='flex flex-col 2xl:flex-row items-center justify-center'>
                        <img src={TA1} alt='TextArt1' className='w-11/12 xl:h-48 xl:w-96 m-4'></img>
                        <img src={TA2} alt='TextArt2' className='w-11/12 xl:h-48 xl:w-96 m-4'></img>
                    </div>

                    <div id='row2' className=' flex flex-col 2xl:flex-row items-center justify-center'>
                        <img src={TA3} alt='TextArt3' className='w-11/12 xl:h-48 xl:w-96 m-4'></img>
                    </div>
                </div>
            </div>


            {/* Work Divider ======================================================================================= */}




            <div className='w-full flex flex-col xl:flex-row items-center mb-30'>
                <div id='text-description' className='xl:w-1/2 flex flex-col items-center justify-center py-20 xl:mr-10'>
                    <h2 className='w-11/12 text-3xl text-white'>My Personal Website</h2>
                    <h3 className='w-11/12 text-xl text-white my-5'>React, Tailwind CSS</h3>
                    <div class='button w-10/12 sm:w-auto h-16 bg-yellow-600 rounded-lg cursor-pointer select-none
                                        active:translate-y-2  active:[box-shadow:0_0px_0_0_#7c3aed,0_0px_0_0_#7c3aed]
                                        active:border-b-[0px]
                                        transition-all duration-150 [box-shadow:0_10px_0_0_#854d0e,0_15px_0_0_#27272a]
                                        border-b-[1px] border-yellow-700 mx-5 px-10 my-6 sm:my-0
                                    '>
                                        <a rel="noreferrer" target="_blank" href='https://github.com/davidwilliford99/PersonalSite' class='flex flex-col justify-center items-center h-full text-white font-bold text-lg '>Github Repo</a>
                    </div>
                    <p className='text-xl text-gray-400 mx-20 w-11/12 mxl:w-auto leading-8 mt-10'>The site you are currently on :)<br/>This website is fully responsive, try it out! This was super fun to make, and I learned so much about React and frontend development in the process. I am very excited to have my own portfolio site, and to share my creations with others. Thank you for visiting!</p>
                </div>
                <div id='images' className='xl:w-1/2 flex flex-col items-center justify-center xl:py-20'>
                    <div id='row1' className='flex flex-col 2xl:flex-row items-center justify-center'>
                        <img src={RS1} alt='TextArt1' className='w-11/12 xl:h-48 xl:w-96 m-4'></img>
                        <img src={RS2} alt='TextArt2' className='w-11/12 xl:h-48 xl:w-96 m-4'></img>
                    </div>

                    <div id='row2' className=' flex flex-col 2xl:flex-row items-center justify-center'>
                        <img src={RS3} alt='TextArt3' className='w-11/12 xl:h-48 xl:w-96 m-4'></img>
                    </div>
                </div>
            </div>



            {/* Work Divider ======================================================================================= */}



        </motion.div>
    </div>
  );
}

export default Works;