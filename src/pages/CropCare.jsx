import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { RiRobot2Line } from "react-icons/ri";
import { WiDayCloudy } from "react-icons/wi";
import { IoHomeOutline } from "react-icons/io5";
import { PiPlant } from "react-icons/pi";
import { ImNewspaper } from "react-icons/im";
import { Link } from "react-router-dom";
import logo from "../assets/applogo.png";

export default function CropCare() {
  return (
    <div className="bg-[#e5e3d6] min-h-screen p-4 font-sans">
      {/* Main Card */}
      <div className=" h-[35vh] bg-white shadow-md rounded-xl p-4 text-center">
        <h1 className="text-2xl mb-7 font-bold font-serif text-[#525629]">
          CROP CARE
        </h1>

        <div className="flex justify-center items-center h-40">
          <p className=" text-gray-600">
            "Smart Farming, Healthy Crops!" Empower your farm with AI-driven
            crop care solutions. Get expert advice on crop selection, disease
            detection, fertilizers, and sustainable farming practices—tailored
            just for you!
          </p>

          <div className="  w-200 h-200 rounded-full flex justify-center items-center">
            <img src={logo} />
          </div>
        </div>
      </div>

      {/* Feature Cards */}
      <div className="grid grid-cols-2 gap-4 mt-6">
        <div className="bg-white shadow-md rounded-xl p-4 flex flex-col items-center">
          <img src="remedy_16435627.png" className="w-12 h-12" />
          <span className="mt-2 text-[#525629]">Crop Recommendations</span>
        </div>
        <div className="bg-white shadow-md rounded-xl p-4 flex flex-col items-center">
          <img
            src="archaeological-site_4127293.png"
            alt="Soil Health"
            className="w-12 h-12"
          />
          <span className="mt-2 text-[#525629]">Soil Health Analysis</span>
        </div>
        <div className="bg-white shadow-md rounded-xl p-4 flex flex-col items-center">
          <img
            src="pest-control_4849644.png"
            alt="Crop"
            className="w-12 h-12"
          />
          <span className="mt-2 text-[#525629]">
            Disease and Pest Detection
          </span>
        </div>
        <div className="bg-white shadow-md rounded-xl p-4 flex flex-col items-center">
          <img
            src="fertilizer_1670066.png"
            alt="Soil Health"
            className="w-12 h-12"
          />
          <span className="mt-2 text-[#525629]">
            Fertilizer and Pesticide Guide
          </span>
        </div>
      </div>
    </div>
  );
}
