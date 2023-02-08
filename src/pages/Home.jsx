import React from "react";
import image1 from "../assets/Web-Developer-skill-removebg-preview.png";
import TypedText from "../HomeComponents/TypedText";
import './home.css';

export default function Home() {
  return (
    // bg-[#1A0B26]
    <div className="bg-[#1F0A3A]  w-[100vw] min-h-[88vh] overflow-hidden">
      {/* <div className="relative text-3xl text-white py-5 px-2">
        <div className="name-div absolute text-center lg:w-[500px] lg:ml-[30%] text-2xl md:text-[40px]">
            Hello, I am Luka Barbakadze
        </div>
      </div> */}
      <div className="ml-5 scale-[0.95] flex flex-wrap justify-center items-center gap-x-2 gap-y-0">
        <div className="brightness-125 contrast-110 w-[550px] h-[550px]">
          <img
            className="image w-[550px] h-[550px] lg:my-[-45px] md:ml-[-50px] object-contain "
            src={image1}
            alt="image"
          />
        </div>
        <div className="">
          <TypedText />
        </div>
      </div>
    </div>
  );
}
