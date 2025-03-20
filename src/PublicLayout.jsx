// PublicLayout.jsx
import React from "react";
import { Outlet } from "react-router-dom";

export default function PublicLayout() {
  return (
    <div className="min-h-screen bg-[#eae7e7] flex flex-col items-center p-4">
      <main className="w-full max-w-md mt-4 flex-grow">
        <Outlet />
      </main>
    </div>
  );
}
