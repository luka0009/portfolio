import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="bg-[#1A0B2E] w-full h-fit py-5 px-4 text-white flex justify-between items-center text-sm sm:text-base md:text-lg">
      <div className="hidden md:block">
        <Link to="/">Luka Barbakadze</Link>
      </div>
      <div className="block md:hidden">
        <Link to="/">Luka</Link>
      </div>
      <div className="flex justify-center items-center gap-3">
        <Link to="/">
          <span className="cursor-pointer">Home</span>
        </Link>
        <Link to="/about">
          <span className="cursor-pointer">About/Skills</span>
        </Link>
        <Link to="/projects">
          <span className="cursor-pointer">Projects</span>
        </Link>
        <Link to="/contact">
          <span className="cursor-pointer">Contact</span>
        </Link>
      </div>
    </div>
  );
}
