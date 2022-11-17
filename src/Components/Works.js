import React from 'react';
// ACP Pictures
import ACP1 from './../assets/ACP1.png';
import ACP2 from './../assets/ACP2.png';
import ACP3 from './../assets/ACP3.png';
import ACP4 from './../assets/ACP4.png';
// TextArt Pictures
import TA1 from './../assets/TextArt1.png';
import TA2 from './../assets/TextArt2.png';
import TA3 from './../assets/TextArt3.png';
// Resume Site Pictures
import RS1 from './../assets/RS1.png';
import RS2 from './../assets/RS2.png';
import RS3 from './../assets/RS3.png';



function Works() {
  return (
    <div className='h-full bg-zinc-900 flex flex-col items-center justify-center xl:px-20'>
        <h1 className='lg:text-7xl text-7xl text-white text-center my-20 lg:my-0 2xl:my-32 xl:pt-20 xl:mt-0'>My Works</h1>


        <div className='w-full flex flex-col xl:flex-row items-center justify-center mb-30 border-b-2'>
            <div id='text-description' className='xl:w-1/2 flex flex-col items-center justify-center pb-20'>
                <h2 className='text-3xl text-center text-white'>ACP Web-App</h2>
                <h3 className='text-xl text-center text-white my-5'>Angular, Typescript, Java Spring, Git</h3>
                <p className='text-xl text-center text-gray-400 mx-20 w-11/12 md:w-auto'>During my internship at Autonomic Solutions, I worked on the ACP webapp. ACP stands for "Autonomic Computing Platform". This application simplifies the process of creating and managing cloud infrastrucures. I worked under 2 senior devs and along 2 other interns, and gathered equal experience with frontend and backend web development (Angular & Java Spring). I was very fortunate to work along with these people, and the senior devs made sure that us interns got plenty of hands on experience. Sadly I can not share the repository for this application, since I do not own the software.</p>
            </div>
            <div id='images' className='xl:w-1/2 flex flex-col items-center justify-center py-20'>
                <div id='row1' className='flex flex-col 2xl:flex-row  items-center justify-center'>
                    <img src={ACP1} alt='ACP1' className='w-10/12 xl:h-48 xl:w-96 m-4'></img>
                    <img src={ACP2} alt='ACP2' className='w-10/12 xl:h-48 xl:w-96 m-4'></img>
                </div>

                <div id='row2' className='flex flex-col 2xl:flex-row items-center justify-center'>
                    <img src={ACP3} alt='ACP3' className='w-10/12 xl:h-48 xl:w-96 m-4'></img>
                    <img src={ACP4} alt='ACP4' className='w-10/12 xl:h-48 xl:w-96 m-4'></img>
                </div>
            </div>
        </div>


        <div className='w-full flex flex-col xl:flex-row items-center justify-center mb-30 border-b-2'>
            <div id='text-description' className='w-11/12 xl:w-1/2 flex flex-col items-center justify-center py-20'>
                <h2 className='text-3xl text-center text-white'>TextArt (CSCI-2530)</h2>
                <h3 className='text-xl text-center text-white my-5'>C/C++, Visual Studio</h3>
                <a rel="noreferrer" target="_blank" href='https://github.com/davidwilliford99/TextArt' className='text-white text-center text-sm font-semibold px-5 py-2 rounded-lg bg-yellow-600 duration-500 hover:bg-violet-500 m-5'>Github Repo</a>
                <p className='text-xl text-center text-gray-400 mx-20 w-11/12 md:w-auto'>This terminal application can create, store, and manipulate text art. This gives people a full open canvas for text art, allowing them to delete characters, undo, redo, and more. This application can also create and store textart animations! TextArt includes a ton of DS&A material, such as linked lists, recursion, multi-dimensional arrays, trees, and graphs. Feel free to give it a go!</p>
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


        <div className='w-full flex flex-col xl:flex-row items-center justify-center mb-30'>
            <div id='text-description' className='xl:w-1/2 flex flex-col items-center justify-center py-20'>
                <h2 className='text-3xl text-center text-white'>My Personal Website (Should Look Familiar)</h2>
                <h3 className='text-xl text-center text-white py-5'>React, Tailwind CSS</h3>
                <a rel="noreferrer" target="_blank" href='https://github.com/davidwilliford99/PersonalSite' className='text-white text-center text-sm font-semibold px-5 py-2 rounded-lg bg-yellow-600 duration-500 hover:bg-violet-500 m-5'>Github Repo</a>
                <p className='text-xl text-center text-gray-400 mx-20 w-11/12 md:w-auto'>The site you are currently on :)<br/>This website is fully responsive, try it out! This was super fun to make, and I learned so much about React and frontend development in the process. I am very excited to have my own portfolio site, and to share my creations with others. Thank you for visiting!</p>
            </div>
            <div id='images' className='xl:w-1/2 flex flex-col items-center justify-center py-20'>
                <div id='row1' className='flex flex-col 2xl:flex-row items-center justify-center'>
                    <img src={RS1} alt='TextArt1' className='w-11/12 xl:h-48 xl:w-96 m-4'></img>
                    <img src={RS2} alt='TextArt2' className='w-11/12 xl:h-48 xl:w-96 m-4'></img>
                </div>

                <div id='row2' className=' flex flex-col 2xl:flex-row items-center justify-center'>
                    <img src={RS3} alt='TextArt3' className='w-11/12 xl:h-48 xl:w-96 m-4'></img>
                </div>
            </div>
        </div>

    </div>
  );
}

export default Works;