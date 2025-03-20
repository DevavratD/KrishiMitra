import { FaRegSun } from "react-icons/fa";
import { RiRobot2Line } from "react-icons/ri";
import { WiDayCloudy } from "react-icons/wi";
import { IoHomeOutline } from "react-icons/io5";
import { PiPlant } from "react-icons/pi";
import { ImNewspaper } from "react-icons/im";
import { Link } from "react-router-dom";

export default function WeatherApp() {
  return (
    <div className="min-h-screen w-full bg-[#eae7e7] flex flex-col items-center p-4">
     

      {/* Weather Info */}
      <section className="bg-white p-6 rounded-lg shadow-md mt-4 w-full max-w-md text-center">
        <h2 className="text-xl font-bold text-green-700">WEATHER</h2>
        <div className="flex justify-center items-center mt-2">
          <span className="text-5xl font-bold">19&deg;</span>
          <FaRegSun className="text-yellow-500 text-4xl ml-2" />
        </div>
        <p className="text-gray-600 mt-2">Sunny day | 26&deg; / 11&deg;</p>
        <p className="text-gray-500">Feels like 21&deg;</p>
        <div className="flex justify-around mt-4 text-gray-600 text-sm">
          <div>☀ 7:23am</div>
          <div>🌙 7:56pm</div>
          <div>💨 13 km/h</div>
        </div>
        <p className="text-gray-600 mt-2">
          ☁ It's currently cloudy, 19&deg; and the sun sets in 7 hours
        </p>
      </section>

     
    </div>
  );
}
