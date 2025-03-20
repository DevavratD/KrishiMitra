import { useState } from "react";
import { RiRobot2Line } from "react-icons/ri";
import { WiDayCloudy } from "react-icons/wi";
import { IoHomeOutline } from "react-icons/io5";
import { PiPlant } from "react-icons/pi";
import { ImNewspaper } from "react-icons/im";
import { Link } from "react-router-dom";

export default function SoilHealthAnalysis() {
  const [customIrrigation, setCustomIrrigation] = useState(false);
  const [moistureLevel, setMoistureLevel] = useState(100);

  return (
    <div className="min-h-screen w-full bg-[#eae7e7] flex flex-col items-center p-4">
     

      {/* Soil Health Analysis Section */}
      <section className="bg-white p-6 rounded-lg shadow-md mt-4 w-full max-w-md text-center">
        <h2 className="text-xl font-bold text-green-700">SOIL HEALTH ANALYSIS</h2>
        <div className="mt-4">
          <p className="text-gray-600 font-semibold">Soil Conditions</p>
          <div className="mt-2 space-y-3">
            <div>
              <p className="text-sm">Moisture Level: 75%</p>
              <div className="w-full bg-gray-300 rounded-full h-2.5 mb-1">
                <div
                  className="bg-orange-500 h-2.5 rounded-full"
                  style={{ width: "75%" }}
                ></div>
              </div>
            </div>
            <div>
              <p className="text-sm">pH Level: 6.5</p>
              <div className="w-full bg-gray-300 rounded-full h-2.5 mb-1">
                <div
                  className="bg-orange-500 h-2.5 rounded-full"
                  style={{ width: "65%" }}
                ></div>
              </div>
            </div>
            <div>
              <p className="text-sm">Nitrogen (N): 80%</p>
              <div className="w-full bg-gray-300 rounded-full h-2.5 mb-1">
                <div
                  className="bg-orange-500 h-2.5 rounded-full"
                  style={{ width: "80%" }}
                ></div>
              </div>
            </div>
            <div>
              <p className="text-sm">Phosphorus (P): 60%</p>
              <div className="w-full bg-gray-300 rounded-full h-2.5">
                <div
                  className="bg-orange-500 h-2.5 rounded-full"
                  style={{ width: "60%" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Irrigation */}
      <section className="bg-white p-4 rounded-lg shadow-md mt-4 w-full max-w-md flex justify-between items-center">
        <span className="font-semibold text-gray-700">Custom Irrigation</span>
        <input
          type="checkbox"
          checked={customIrrigation}
          onChange={() => setCustomIrrigation(!customIrrigation)}
          className="toggle-checkbox"
        />
      </section>

      {customIrrigation && (
        <section className="bg-white p-4 rounded-lg shadow-md mt-4 w-full max-w-md flex justify-between items-center">
          <select
            value={moistureLevel}
            onChange={(e) => setMoistureLevel(e.target.value)}
            className="p-2 border rounded-lg"
          >
            <option value={100}>100%</option>
            <option value={75}>75%</option>
            <option value={50}>50%</option>
          </select>
          <span className="text-gray-700">Select custom moisture level</span>
        </section>
      )}

     
    </div>
  );
}
