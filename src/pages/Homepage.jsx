import { FaSearch, FaMicrophone } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FiCloud } from "react-icons/fi";
import { IoNewspaperOutline } from "react-icons/io5";
import { FcIdea } from "react-icons/fc";
import { RiRobot2Line } from "react-icons/ri";
import { WiDayCloudy } from "react-icons/wi";
import { PiPlant } from "react-icons/pi";
import { ImNewspaper } from "react-icons/im";
import logo from "../assets/applogo.png";
import Navbar from "../components/NavBar";

export default function Homepage() {
  return (
    <div className="min-h-screen w-full bg-[#eae7e7] overflow-auto">
      {/* Header Section */}
      <div className="flex flex-col items-center w-full h-[35vh] sm:h-[30vh] bg-[#525629] text-white rounded-b-[60px] relative">
        <div className="flex justify-between items-center w-full px-4 pt-4">
          <div className="flex flex-col">
            <h1 className="text-2xl sm:text-[2.5rem] font-bold">
              Hello, <span>User</span>
            </h1>
            <p className="text-lg sm:text-[1.5rem] text-black font-bold">
              Welcome to Krishi Mitra
            </p>
          </div>
          <div className="w-14 h-14 sm:w-16 sm:h-16 bg-white rounded-full flex justify-center items-center">
            <img
              src={logo}
              alt="Logo"
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        {/* Search Bar */}
        <div className="flex items-center justify-center w-[90%] sm:w-[80%] bg-gray-200 rounded-full p-2 mt-4 shadow-sm">
          <FaSearch className="text-gray-600 ml-2" />
          <input
            type="text"
            placeholder="Search..."
            className="flex-grow h-10 text-black px-2 bg-transparent outline-none"
          />
          <FaMicrophone className="text-gray-600 mr-2" />
        </div>
      </div>

      {/* Weather Card */}
      <div className="flex flex-col bg-white rounded-[40px] shadow-md p-4 mx-4 sm:mx-6 mt-7 relative -top-12">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-semibold">Pune</h2>
          <FiCloud className="text-yellow-500 text-2xl" />
        </div>
        <div className="flex items-center gap-4 pb-3 mt-2">
          <div className="text-4xl font-bold">+17°C</div>
          <div className="flex flex-col text-gray-500 text-sm">
            <div>H: 23°C</div>
            <div>L: 14°C</div>
          </div>
        </div>
        <div className="border-dashed border-b-2 border-gray-400"></div>
        <div className="flex justify-between mt-4 text-sm">
          <p className="flex flex-col">
            Humidity: <span className="font-semibold">40%</span>
          </p>
          <p className="flex flex-col">
            Precipitation: <span className="font-semibold">5.1ml</span>
          </p>
          <p className="flex flex-col">
            Pressure: <span className="font-semibold">450 hpa</span>
          </p>
          <p className="flex flex-col">
            Wind: <span className="font-semibold">23m/s</span>
          </p>
        </div>
        <div className="flex justify-between mt-4 text-xs text-gray-500 items-center">
          <div className="text-center">
            <p>5:25 am</p>
            <p>Sunrise</p>
          </div>
          <div className="flex-grow mx-2 border-t-2 border-dashed border-gray-400"></div>
          <div className="text-center">
            <p>8:04 am</p>
            <p>Sunset</p>
          </div>
          <div className="w-6 h-5 rounded-full bg-yellow-400"></div>
        </div>
      </div>

      {/* News & Updates Section */}
      <div className="mt-6 px-4">
        <h3 className="pb-4 font-semibold">Know more about</h3>
        <div className="bg-gray-100 p-3 rounded-lg shadow-md flex items-center mb-3">
          <IoNewspaperOutline className="text-3xl text-blue-600" />
          <p className="ml-3 font-semibold">NEWS & UPDATES</p>
        </div>

        <div className="bg-gray-100 p-3 rounded-lg shadow-md flex items-center mb-3">
          <FcIdea className="text-3xl" />
          <p className="ml-3 font-semibold">AGRICULTURAL TIPS</p>
        </div>

        <div className="bg-gray-100 p-3 rounded-lg shadow-md flex items-center">
          <IoNewspaperOutline className="text-3xl text-blue-600" />
          <p className="ml-3 font-semibold">SOIL CONDITIONS</p>
        </div>
      </div>

      {/* Navbar */}
      <Navbar />
    </div>
  );
}
