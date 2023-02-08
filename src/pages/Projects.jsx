import React from 'react';
import { projects } from '../Data';
import Project from '../projectComponents/Project';
import './projects.css';

export default function Projects() {
  return (
    <div className='mb-[-200px] text-center bg-[#1F0A3A] p-10'>
     <div className='header-container'>
      <span className='mt-[100px] text-[48px] text-white'> 
      <br />
      Personal Projects 
      </span>
      </div>
     <hr className='mt-7 -mb-6'/>
      <div className='projects-div mx-[50px] my-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-24 gap-y-24'>
        {projects.map((project) => {
            return <Project key={project.id} project={project}/>
        })}
      </div>
    </div>
  )
};
