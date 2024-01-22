import React from 'react';
import { FaLinkedinIn ,FaGithub } from "react-icons/fa";
import { RiInstagramLine } from "react-icons/ri";
import { CgMail } from "react-icons/cg";

const Contact = () => {
  return (
    <div className='px-7 md:px-10 my-10' id='contact'>
      <div className='flex flex-col md:flex-row'>
        {/* text &icons */}
        <div className='md:w-1/2'>
        <h1 className='text-3xl text-primary font-semibold mt-10 md:mt-1'>Connect with me:</h1>
      <p className='text-white my-2 md:w-4/5 leading-[2] text-xl'>
        Specified with me? Please contact me. 
      </p>
      {/* social icons */}
      <div className='flex'>
        <a href="https://www.instagram.com/goyal_9610_/" className='ml-4 text-primary shadow-md shadow-white'><RiInstagramLine size={32} /></a>
        <a href="https://www.linkedin.com/in/aarush-goyal-403b55272/" className='ml-4 text-primary shadow-md shadow-white'><FaLinkedinIn size={32} /></a>
        <a href="https://github.com/Aarushg2218k" className='ml-4 text-primary shadow-md shadow-white'><FaGithub size={32}/></a> 
        <a href="mailto:Aarushgoyal1011@gmail.com" className='ml-4 text-primary shadow-md shadow-white'><CgMail size={32}/></a> 
      </div>
      </div>
      {/* form */}
      <div className='md:w-1/2'>
    <p className='mt-16 text-white text-2xl mb-6'>Contact me, Let's make magic together</p>

    <form>
      <input type="text" name="name" id="name" placeholder='Your Name' className='bg-[#858585] bg-opacity-10 py-3 px-3 w-full md:w-3/4 rounded'/>
      <input type="email" name="email" id="email" placeholder='Your Email' className='bg-[#858585] bg-opacity-10 py-3 px-3 w-full md:w-3/4 rounded mt-4'/>

      <textarea name="message" id="message"  placeholder='Your Message' className='bg-[#858585] bg-opacity-10 py-3 px-3 w-full md:w-3/4 rounded mt-4'></textarea>

      <button className='btn bg-primary mt-2 py-2 px-2 text-white hover:bg-white hover:text-primary block transition-all duration-500'>Send </button>
    </form>
      
        </div>
      </div>
    </div>
  );
};

export default Contact;