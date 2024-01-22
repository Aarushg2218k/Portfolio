import React, { useState } from 'react';
import { Link } from 'react-scroll';
import {Bars3BottomRightIcon , XMarkIcon} from '@heroicons/react/24/solid';
import { Document, Page } from 'react-pdf';
const Header = () => {
  let Links = [
    {name:"Home", link:"home"},
    {name:"About me", link:"about"},
    {name:"Projects", link:"projects"},
    {name:"Contact", link:"contact"}
  ]
  let [open,setopen] = useState(false);
  return (
    <div className='w-full max-w-7xl'>
      <div className='md:flex items-center justify-between py-4 md:px-10 px-7'>
        {/*Logo section*/}
        <div className='font-bold text-2xl cursor-pointer flex items-center gap-1'>
          <span className='text-primary hover:text-white'>Aarush Goyal</span>
        </div>
        {/* mobile menu icon */}
        <div onClick={()=> setopen(!open)} className='w-7 h-7 right-8 top-6 cursor-pointer md:hidden text-white absolute'>
          {
            open ? <XMarkIcon></XMarkIcon>:<Bars3BottomRightIcon></Bars3BottomRightIcon>
          }
        </div>
          {/* Nav Link item */}
          <ul className={`md:flex md:item-center ms-4 md:pb-0 absolute md:static md:z-auto z-10 left-0 w-full md:w-auto mt-4 md:mt-0 md:pl-9 bg-slate-400 sm:bg-slate-400  md:bg-transparent transition-all duration-500 ease-in ${open ? "top-12" : "top-[-490px]"}`}>
              {
                Links.map((link)=>{
                  return(
                  <li key={link.name} className="md:ml-8 md:my-0 my-7 font-semibold">
                  <Link
                  to={link.link}
                  activeClass="active"
                  smooth={true}
                  spy={true}
                  className="text-white transition-all duration-500 hover:text-primary cursor-pointer">{link.name}</Link>
                  </li>
                  )
                })
              }
          </ul>
      </div>
    </div>
  );
};

export default Header;