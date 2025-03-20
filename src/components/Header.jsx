import React from "react";

export default function Header() {
  return (
    <header className="w-full max-w-md flex items-center justify-between bg-gray-200 p-4 rounded-lg">
      <div className="text-green-700 font-bold text-lg">KRISHI MITRA</div>
      <div className="flex items-center space-x-2">
        <span className="text-gray-700">User name</span>
        <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
      </div>
    </header>
  );
}
