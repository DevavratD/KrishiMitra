import { FaArrowLeftLong } from "react-icons/fa6";
import { RiRobot2Line } from "react-icons/ri";
import { IoSend } from "react-icons/io5";
import { AiOutlinePlus } from "react-icons/ai";

export default function Chatbot() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center p-4 pb-24">
      {/* Header */}
      <div className="w-full flex items-center justify-between bg-gray-200 p-4 rounded-lg">
        <FaArrowLeftLong className="text-green-700 text-2xl" />
        <div className="text-green-700 font-bold text-lg">AI CHATBOT</div>
        <RiRobot2Line className="text-green-700 text-2xl" />
      </div>

      {/* Chatbox */}
      <div className="bg-white p-6 rounded-lg shadow-md mt-4 w-full max-w-md flex items-center justify-center flex-grow">
        <h2 className="text-xl font-bold text-green-700">
          What Can I help with?
        </h2>
      </div>

      {/* Message Input */}
      <div className="fixed bottom-0 left-0 right-0 bg-white p-4 flex items-center justify-between shadow-md border-t max-w-md w-full mx-auto rounded-t-lg">
        <AiOutlinePlus className="text-green-700 text-2xl" />
        <input
          type="text"
          placeholder="Message CHATBOT"
          className="flex-grow mx-2 p-2 border rounded-lg outline-none"
        />
        <IoSend className="text-green-700 text-2xl" />
      </div>
    </div>
  );
}
