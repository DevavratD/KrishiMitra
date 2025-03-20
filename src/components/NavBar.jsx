import { RiRobot2Line } from "react-icons/ri";
import { WiDayCloudy } from "react-icons/wi";
import { IoHomeOutline } from "react-icons/io5";
import { PiPlant } from "react-icons/pi";
import { ImNewspaper } from "react-icons/im";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="fixed bottom-0 w-full bg-white shadow-md">
      <div className="max-w-md mx-auto flex justify-between items-center h-[7vh]">
        {/* Left Navigation */}
        <div className="flex items-center w-1/3 justify-evenly">
          <Link to="/home" className="flex flex-col items-center text-gray-600">
            <IoHomeOutline />
            <span className="text-xs">Home</span>
          </Link>
          <Link
            to="/crop-care"
            className="flex flex-col items-center text-gray-600"
          >
            <PiPlant />
            <span className="text-xs">Crop Care</span>
          </Link>
        </div>

        {/* Center Chatbot Button */}
        <div className="relative">
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
            <div className="w-16 h-16 bg-white rounded-full shadow-lg flex justify-center items-center">
              <Link
                to="/chatbot"
                className="flex flex-col items-center text-gray-600"
              >
                <RiRobot2Line className="text-2xl" />
                <span className="text-xs">CHATBOT</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Right Navigation */}
        <div className="flex items-center w-1/3 justify-evenly">
          <Link
            to="/weather"
            className="flex flex-col items-center text-gray-600"
          >
            <WiDayCloudy className="text-2xl" />
            <span className="text-xs">Weather</span>
          </Link>
          <Link to="/news" className="flex flex-col items-center text-gray-600">
            <ImNewspaper />
            <span className="text-xs">News</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
