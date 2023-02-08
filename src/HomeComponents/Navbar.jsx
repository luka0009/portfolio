import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="z-99 flex justify-between items-center py-5 px-4 mb-0 inset-0 bg-[#1A0B2E] shadow-sm text-white text-md md:text-xl">
      <Link to="/">
      <div className="cursor-pointer"> Luka Barbakadze </div>
      </Link>
      <div className="flex justify-center gap-4">
        <Link to='/'>
          <span className="cursor-pointer">Home</span>
        </Link>
        <Link to="/about">
          <span className="cursor-pointer">About</span>
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
