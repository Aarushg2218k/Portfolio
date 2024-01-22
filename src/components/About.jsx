import React from 'react';
import { FaHtml5 ,FaCss3 ,FaNodeJs,FaReact,FaGithub,FaBootstrap } from "react-icons/fa";
import { DiJavascript,DiMongodb } from "react-icons/di";
import { SiAngularjs,SiTailwindcss } from "react-icons/si";
import { TbBrandVscode,TbBrandMysql } from "react-icons/tb";

const About = () => {

  return (
    <div className='px-7 md:px-10 sm:-mt-24' id="about">
      <h1 className='text-3xl text-primary font-semibold mt-10 md:mt-1'>About me</h1>
      <p className='text-white my-2 md:w-4/5 leading-[2] text-xl'>
        Hi, my name is Aarush Goyal, i am a fullstack web developer. I have honed my skills in web development and now am doing MERN stack Course to enhance my skills for being a MERN stack web developer.
      </p>
      {/* skills */}
      
      <h3 className='text-3xl text-primary font-semibold mt-10 md:mt-18'>Skills :- </h3>
    <div className='flex flex-wrap grid grid-cols-2 md:grid-cols-6'>
    <div className="w-40 h-40 bg-gradient-to-b from-primary to-white rounded-md overflow-hidden shadow-lg m-4 hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-1">
      <div className="flex items-center justify-center h-full">
        <div className="text-black text-center">
          <div className="font-bold text-sm mb-2 "> <FaHtml5 size={70} /></div>
          <p className="text-xs font-semibold text-lg">Html 5</p>
        </div>
      </div>
    </div>
    <div className="w-40 h-40 bg-gradient-to-b from-primary to-white rounded-md overflow-hidden shadow-lg m-4 hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-1">
      <div className="flex items-center justify-center h-full">
        <div className="text-black text-center">
          <div className="font-bold text-sm mb-2 "> <FaCss3 size={70} /></div>
          <p className="text-xs font-semibold text-lg">Css</p>
        </div>
      </div>
    </div>
    <div className="w-40 h-40 bg-gradient-to-b from-primary to-white rounded-md overflow-hidden shadow-lg m-4 hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-1">
      <div className="flex items-center justify-center h-full">
        <div className="text-black text-center">
          <div className="font-bold text-sm mb-2 place-content-center "> <DiJavascript size={70} /></div>
          <p className="text-xs font-semibold text-lg">Javascript</p>
        </div>
      </div>
    </div>
    <div className="w-40 h-40 bg-gradient-to-b from-primary to-white rounded-md overflow-hidden shadow-lg m-4 hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-1">
      <div className="flex items-center justify-center h-full">
        <div className="text-black text-center">
          <div className="font-bold text-sm mb-2 "> <FaNodeJs size={70} /></div>
          <p className="text-xs font-semibold text-lg">Node js</p>
        </div>
      </div>
    </div>
    <div className="w-40 h-40 bg-gradient-to-b from-primary to-white rounded-md overflow-hidden hidden md:block shadow-lg m-4 hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-1">
      <div className="flex items-center justify-center h-full">
        <div className="text-black text-center">
          <div className="font-bold text-sm mb-2 "> <SiAngularjs size={70} /></div>
          <p className="text-xs font-semibold text-lg">Angular js</p>
        </div>
      </div>
    </div>
    <div className="w-40 h-40 bg-gradient-to-b from-primary to-white rounded-md overflow-hidden hidden md:block shadow-lg m-4 hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-1">
      <div className="flex items-center justify-center h-full">
        <div className="text-black text-center">
          <div className="font-bold text-sm mb-2 "> <FaNodeJs size={70} /></div>
          <p className="text-xs font-semibold text-lg">Express js</p>
        </div>
      </div>
    </div>
    <div className="w-40 h-40 bg-gradient-to-b from-primary to-white rounded-md overflow-hidden shadow-lg m-4 hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-1">
      <div className="flex items-center justify-center h-full">
        <div className="text-black text-center">
          <div className="font-bold text-sm mb-2 "> <FaReact size={70} /></div>
          <p className="text-xs font-semibold text-lg">React</p>
        </div>
      </div>
    </div>
    <div className="w-40 h-40 bg-gradient-to-b from-primary to-white rounded-md overflow-hidden shadow-lg m-4 hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-1">
      <div className="flex items-center justify-center h-full">
        <div className="text-black text-center">
          <div className="font-bold text-sm mb-2 "> <FaGithub size={70} /></div>
          <p className="text-xs font-semibold text-lg">Github</p>
        </div>
      </div>
    </div>
    <div className="w-40 h-40 bg-gradient-to-b from-primary to-white rounded-md overflow-hidden shadow-lg m-4 hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-1">
      <div className="flex items-center justify-center h-full">
        <div className="text-black text-center">
          <div className="font-bold text-sm mb-2 "> <TbBrandMysql size={70} /></div>
          <p className="text-xs font-semibold text-lg">Mysql</p>
        </div>
      </div>
    </div>
    <div className="w-40 h-40 bg-gradient-to-b from-primary to-white rounded-md overflow-hidden shadow-lg m-4 hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-1">
      <div className="flex items-center justify-center h-full">
        <div className="text-black text-center">
          <div className="font-bold text-sm mb-2 "> <DiMongodb size={70} /></div>
          <p className="text-xs font-semibold text-lg">Mongodb</p>
        </div>
      </div>
    </div>
    <div className="w-40 h-40 bg-gradient-to-b from-primary to-white rounded-md overflow-hidden hidden md:block shadow-lg m-4 hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-1">
      <div className="flex items-center justify-center h-full">
        <div className="text-black text-center">
          <div className="font-bold text-sm mb-2 "> <FaBootstrap size={70} /></div>
          <p className="text-xs font-semibold text-lg">Bootstrap</p>
        </div>
      </div>
    </div>
    <div className="w-40 h-40 bg-gradient-to-b from-primary to-white rounded-md overflow-hidden shadow-lg m-4 hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-1">
      <div className="flex items-center justify-center h-full">
        <div className="text-black text-center">
          <div className="font-bold text-sm mb-2 "> <SiTailwindcss size={70} /></div>
          <p className="text-xs font-semibold text-lg">Tailwind</p>
        </div>
      </div>
    </div>

    </div>
    </div>
  );
};

export default About;