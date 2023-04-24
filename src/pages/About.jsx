import React, { useState, useRef } from "react";
import "./about.css";
import image from "../assets/web-development-programmer-engineering-coding-website-augmented-reality-interface-screens-developer-project-engineer-programming-software-application-design-cartoon-illustration_107791-3863-removebg-p.png";
import { skills } from "../skillsData";

export default function About() {

    const skillsRef = useRef(null);
  
  
    const handleClick = async () => {
      await skillsRef.current.scrollIntoView({ behavior: 'smooth' });
    };

  const [hover, setHover] = useState(false);
  return (
    <div className="z-1 text-white bg-[#1F0A3A]">
      <br />
      <span className="ml-64 text-[34px]">About Me</span>
      <div className="lg:mt-[-88px] flex flex-wrap justify-between items-center">
        <div className="text-div m-4 ml-12 mt-24 p-5 w-[650px] text-lg">
          {/* I am passionate junior Web developer with a desire to learn and
          grow in a collaborative team environment. I'm Skilled in various
          programming languages and technologies <span onClick={handleClick} className="cursor-pointer text-[22px] underline font-bold">( see the list below )</span>. I Excel at creating
          pixel-perfect designs, Websites with diverse functionality and working with cross-browser compatibility
          issues. */}
          I am passionate Frontend/Full Stack Developer Web developer with a desire to learn and grow in a collaborative team environment. I'm Skilled in various programming languages and technologies, mostly in Javascript language, especially in react and its ecosystem.
          <br />
          <br />
          As a web developer, I have had the opportunity to develop and architect solutions for web projects using modern JavaScript frameworks while adhering to industry best practices and standards. I have experience in both frontend architecture and development of client web applications and websites, as well as full-stack applications using the MERN stack and NextJS.
        </div>
        <div className="image-div lg:ml-[-300px]">
          <img
            className="contrast-150 mr-[-5px] mt-[-30px] mb-[20px] w-[530px] h-[420px] m-10 object-contain"
            src={image}
            alt=""
          />
        </div>
      </div>
      <h1 ref={skillsRef} className="text-center mx-auto text-[44px]">Skills:</h1>
      <div className="pr-9 md:mx-auto my-8 w-[600px] grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 lg:gap-x-14 lg:gap-y-5">
        
        {/* <div className="
        flex justify-center items-center rounded-full w-16 h-16 bg-[#1A0B2E] 
        transition duration-1000 hover:scale-125 cursor-pointer">
          <img
            className="w-12 h-12 "
            src="https://o.remove.bg/downloads/33a34428-9e03-42be-875a-6b0dc3d49bbe/images-removebg-preview.png"
            alt="HTML"
          />
        </div> */}
        {skills.map((skill) => {
          return(
            <div 
            key={skill.id}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            className="
            flex justify-center items-center rounded-full w-16 h-16 bg-[#1A0B2E] 
            transition duration-1000 hover:scale-125 cursor-pointer">
              <img
                className="w-12 h-12 relative"
                src={skill.image}
                alt={skill.name}
              />
              <span className="absolute top-[-25px] width-[100px] transition duration-500">{hover && skill.name}</span>
            </div>
          )
        })}
      </div>
      <br />
    </div>
  );
}
