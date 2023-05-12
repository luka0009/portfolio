import React, { useState, useRef } from "react";
import "./about.css";
import image from "../assets/web-development-programmer-engineering-coding-website-augmented-reality-interface-screens-developer-project-engineer-programming-software-application-design-cartoon-illustration_107791-3863-removebg-p.png";
import { skills } from "../skillsData";

export default function About() {
  const skillsRef = useRef(null);

  const handleClick = async () => {
    await skillsRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const [hover, setHover] = useState(false);
  return (
    <div className="bg-[#1F0A3A] pb-8 w-full min-h-full h-fit text-white p-2">
      <span className="mx-auto text-lg lg:text-2xl">About Me</span>
      <div className="flex flex-col">
        <div className="flex items-center justify-center">
          <div className="p-3 text-xs md:text-base lg:text-lg">
            <p>
              I am passionate Frontend/Full Stack Developer Web developer with a
              desire to learn and grow in a collaborative team environment. I am
              Skilled in various programming languages and technologies, mostly
              in Javascript language, especially in react and its ecosystem.
            </p>
            <br />
            <p>
              As a web developer, I have had the opportunity to develop and
              architect solutions for web projects using modern JavaScript
              frameworks while adhering to industry best practices and
              standards. I have experience in both frontend architecture and
              development of client web applications and websites, as well as
              full-stack applications using the MERN stack and NextJS.
            </p>
          </div>
          <img
            src={image}
            alt="Picture of the author"
            className="hidden md:block md:w-[400px] md:h-[280px] lg:w-[600px] lg:h-[380px]"
          />
        </div>
        <div className="flex flex-col items-center justify-center">
          <h1 className="mt-6 text-lg lg:text-3xl">Skills</h1>
          <div className="mt-5 grid grid-cols-5 md:grid-cols-7 gap-3">
            {skills.map((skill) => (
              <div
                key={skill.id}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                className="
            flex justify-center items-center rounded-full 
            w-10 h-10 md:w-16 md:h-16 bg-[#1A0B2E] 
            transition duration-1000 
            hover:scale-125 cursor-pointer"
              >
                <img
                  key={skill.id}
                  src={skill.image}
                  alt={skill.name}
                  className="w-6 h-6 md:w-12 md:h-12 relative"
                />
                <span className="absolute top-[-25px] width-[100px] transition duration-500 text-[10px] md:text-base">
                  {hover && skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
