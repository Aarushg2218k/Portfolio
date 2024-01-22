import React from 'react';
import heroimg from '../assets/mypic.jpg';
import Typewriter from 'typewriter-effect';
const Home = () => {
    return (
        <div className='px-7 md:px-10 my-15 md:h-screen bg-[#1a1a29]' id='home'>
            <div className='w-full flex flex-col md:flex-row items-center justify-between'>
                {/* text */}
                <div className='text-white'>
                    <h6 className='text-5xl mt-12 '>Hello, I'm</h6>
                    <h1 className='font-semibold text-3xl md:text-7xl my-4'>Aarush Goyal</h1>
                    <div className='container'>
                    <p className='md:w-12/12 text-3xl text-primary'><Typewriter
                    onInit={(typewriter) => {
                    typewriter
                        .typeString("A Java Developer")
                        .pauseFor(1000)
                        .deleteAll()
                        .typeString("A Student")
                        .pauseFor(1000)
                        .deleteAll()
                        .typeString("A MERN Stack Developer")
                        .start();
                        }}
            /></p>
                    </div>
                    {/* buttons */}

                    <div className='mt-5'>
                        <button className='btn bg-primary py-2 px-4 text-white rounded hover:bg-white hover:text-primary transition-all duration-500' id='about'>About me</button>
                        <button  className='btn outline px-6 py-1.5 rounded border-none text-white ml-5' id='projects'>Projects</button>
                    </div>
                </div>
                {/* img */}
                <div className='order-first md:order-last relative md:my-7'>
                    <img src={heroimg} alt="" style={{borderRadius:"50%"}} />
                </div>
                </div>
                {/* divider */}
                <div className='w-full h-20 bg-[#181b24] mx-auto absolute hidden md:block'>
            </div>
        </div>
    );
};

export default Home;