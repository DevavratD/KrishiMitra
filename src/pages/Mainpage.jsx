import React from "react";
import logo from "../assets/applogo.png";
import bgimg from "../assets/bgimg.png";
import { FaArrowRightLong } from "react-icons/fa6";
import { useNavigate } from "react-router";

export default function Mainpage() {
  const navigate = useNavigate();
  return (
    <div className="relative flex flex-col min-h-screen w-full justify-evenly items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-[-1]">
        <img src={bgimg} alt="Background" className="w-full h-full object-cover" />
      </div>
      {/* Logo */}
      <div className="flex justify-center items-center w-full h-[20vh]">
        <img src={logo} alt="Logo" className="h-full object-contain" />
      </div>
      {/* Headings & Subtext */}
      <div className="flex flex-col items-center text-center px-4">
        <h1 className="text-3xl sm:text-4xl text-[#69B601] font-bold mb-4">
          THE NEW ERA OF
        </h1>
        <h1 className="text-2xl sm:text-[2.5rem] text-[#525629] font-serif font-bold mb-4">
          AGRICULTURE
        </h1>
        <p className="text-base sm:text-lg font-sans">
          Sustainable farming solutions
        </p>
        <p className="text-base sm:text-lg font-sans">
          for a better tomorrow
        </p>
      </div>
      {/* Get Started Button */}
      <div className="w-full px-4">
        <button
          onClick={() => navigate("/signup")}
          className="w-full max-w-md mx-auto flex justify-center items-center text-center bg-white/30 backdrop-blur-md py-3 rounded-full shadow-md font-bold"
        >
          GET STARTED
          <span className="ml-4">
            <FaArrowRightLong className="text-2xl" />
          </span>
        </button>
      </div>
    </div>
  );
}
