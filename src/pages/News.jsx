import { RiRobot2Line } from "react-icons/ri";
import { WiDayCloudy } from "react-icons/wi";
import { IoHomeOutline } from "react-icons/io5";
import { PiPlant } from "react-icons/pi";
import { ImNewspaper } from "react-icons/im";
import { Link } from "react-router-dom";

export default function NewsApp() {
  return (
    <div className="min-h-screen w-full bg-[#eae7e7] overflow-auto flex flex-col items-center p-4">
     

      {/* News Section */}
      <section className="bg-white p-6 rounded-lg shadow-md mt-4 w-full max-w-md text-center">
        <h2 className="text-xl font-bold text-green-700">NEWS</h2>
        <p className="text-gray-600 mt-2">
          Stay informed about agricultural news, including government subsidies,
          new technologies, policies, and market trends.
        </p>
      </section>

      {/* News Articles */}
      <section className="mt-4 w-full max-w-md space-y-4">
        <article className="bg-white p-4 rounded-lg shadow-md flex items-start space-x-4">
          <div className="flex-1">
            <h3 className="font-bold text-gray-800">
              Pune: Expansion of Banana Cultivation
            </h3>
            <p className="text-gray-600 text-sm">
              The district agriculture office has planned to expand banana cultivation in
              Pune district to 3,000 hectares from 611 hectares. "We are harvesting
              67,600 tonnes annually, aiming for 2 lakh tonnes in five years."
            </p>
          </div>
          <img
            src="/banana.jpg"
            alt="Banana Farm"
            className="w-16 h-16 rounded-lg object-cover"
          />
        </article>

        <article className="bg-white p-4 rounded-lg shadow-md flex items-start space-x-4">
          <img
            src="/ai-farming.jpg"
            alt="AI Farming"
            className="w-16 h-16 rounded-lg object-cover"
          />
          <div className="flex-1">
            <h3 className="font-bold text-gray-800">
              AI-driven Farming in Baramati
            </h3>
            <p className="text-gray-600 text-sm">
              Baramati’s AI-driven farming experiment boosts sugarcane yield by 40% while cutting
              costs by 30%.
            </p>
          </div>
        </article>
        <article className="bg-white p-4 rounded-lg  shadow-md flex items-start space-x-4">
          <img
            src="/ai-farming.jpg"
            alt="AI Farming"
            className="w-16 h-16 rounded-lg object-cover"
          />
          <div className="flex-1">
            <h3 className="font-bold text-gray-800">
              AI-driven Farming in Baramati
            </h3>
            <p className="text-gray-600 text-sm">
              Baramati’s AI-driven farming experiment boosts sugarcane yield by 40% while cutting
              costs by 30%.
            </p>
          </div>
        </article>
      </section>
      <div className="h-12"></div>

      
    </div>
  );
}
