import React from 'react';
import joyride from '../assets/projects/joyride.png';

const Projects = () => {
  const projects = [
    {title:"Joy Ride",
    photo:joyride,
    description:"Connect unemployed vehicle owners with job opportunities and commuters seamlessly. Users register, add their vehicles, and post jobs or ride requests.Technologies: HTML, CSS, JavaScript, Bootstrap, AngularJS, Node.js, MySQL, jQuery. Enhance employment prospects and streamline commuting with DriveLink.",
    link:"https://github.com/Aarushg2218k/joyride"
    },
    {title:"Heal Hub",
    photo:"./src/assets/projects/landing page.png",
    description:"Heal Hub is a compassionate initiative connecting donors with spare medicines to individuals in need. Through a user-friendly platform, donors can easily list available medicines, while recipients can search and connect directly with dono's mobile number. Using HTML, CSS, JavaScript, Bootstrap, AngularJS, Node.js, MySQL, and jQuery.",
    link:"https://github.com/Aarushg2218k/heal-hub"
    },
    {title:"Gift Gallery",
    photo:"./src/assets/projects/Landing-page.png",
    description:"Gift Gallery is a user-friendly project designed to provide a seamless product browsing and ordering experience. Visitors can easily explore products and place orders by entering their details. Built with Java, this platform prioritizes simplicity, allowing users to swiftly navigate and complete orders, enhancing overall user satisfaction.",
    link:"https://github.com/Aarushg2218k/Gift-Galary"
  },
    {title:"To-Do App",
    photo:"./src/assets/projects/Starting page.png",
    description:"To-Do is a straightforward and intuitive todo list application built with React. Seamlessly manage your tasks, add new items, mark them as complete, and delete when done. With a clean and responsive interface, offering a user-friendly experience for keeping your day organized and productive.",
    link:"https://todo-nine-cyan.vercel.app/"
  },
    {title:"Tour-Planner",
    photo:"./src/assets/projects/tour-planner.png",
    description:"Tour-planner, a user-friendly front-end tour exploration application developed with React. Explore captivating destinations and their corresponding costs per head. ReactTourExplorer simplifies the process, allowing users to focus on the joy of discovering new destinations and their associated costs.",
    link:"https://tour-planner-eta.vercel.app/"
  },
    {title:"Tic-Tac-Toe",
    photo:"./src/assets/projects/Tic-Tac-Toe.png",
    description:"Experience the timeless joy of Tic Tac Toe in a modern context with this React-based implementation. Enjoy the nostalgic gameplay as you compete against a friend or challenge an AI opponent. The clean user interface enhances the gaming experience, providing a enjoyable way to relive this classic game.",
    link:"https://aarushg2218k.github.io/tic-tac-toe/"
  },
  ];
  return (
    <div className='px-7 md:px-10 my-8' id='projects'>
      <h1 className='text-3xl text-primary font-semibold mt-10 md:mt-1'>Projects</h1>
      <p className='text-white my-2 md:w-4/5 leading-[2] text-xl'>
        I have worked on many projects over the courses of being a MERN Stack web developer, here are a few of my live,real-world projects. 
      </p>
      {/* featured projects */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-6 items-center justify-center">
  {projects.map((project, index) => (
    <div
      key={index}
      className="flex flex-col bg-[#2A2A33] p-6 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:shadow-lg hover:bg-[#3A3A45] border border-primary hover:border-secondary h-[600px]"
    >
      <h3 className="text-primary font-semibold text-lg mb-2 text-center">
        {project.title}
      </h3>
      <a
        href={project.photo}
        target="_blank"
        rel="noreferrer"
        className="mb-4"
      >
        <img
          src={project.photo}
          alt={project.title}
          className="rounded-lg hover:opacity-90 transition-opacity"
        />
      </a>
      <p className="text-primary text-1xl font-semibold mb-2">Description:</p>
      <p className="text-white">{project.description}</p>
      <div className="mt-4 text-center">
        <a href={project.link}><button className="btn bg-primary py-2 px-6 rounded-full text-white hover:bg-secondary transition-bg">
          Explore
        </button></a>
      </div>
    </div>
  ))}
</div>

    </div>
  );
};

export default Projects;