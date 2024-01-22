import React from "react";
import { FaLinkedinIn ,FaGithub } from "react-icons/fa";
import { RiInstagramLine } from "react-icons/ri";
import { CgMail } from "react-icons/cg";
const Footer = () => {
  return (
    <div className="md:px-10 px-7 mt-24">
      <div className="text-white opacity-50 flex flex-col md:flex-row justify-between items-center my-5">
        <p>@ Copyright 2024 | Aarush Goyal</p>
        <p className="hidden sm:block">MERNstack Developer</p>
        <p className="hidden sm:block">Java Developer</p>
      </div>
      {/* social media */}
      <div className='flex'>
        <a href="https://www.instagram.com/goyal_9610_/" className='ml-4 text-primary'><RiInstagramLine size={32} /></a>
        <a href="https://www.linkedin.com/in/aarush-goyal-403b55272/" className='ml-4 text-primary'><FaLinkedinIn size={32} /></a>
        <a href="https://github.com/Aarushg2218k" className='ml-4 text-primary'><FaGithub size={32}/></a> 
        <a href="mailto:Aarushgoyal1011@gmail.com" className='ml-4 text-primary'><CgMail size={32}/></a> 
      </div>
    </div>
  );
};

export default Footer;
