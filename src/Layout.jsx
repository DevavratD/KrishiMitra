// Layout.jsx
import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header"; // Your header component
import Navbar from "./components/NavBar"; // Your navbar component

export default function Layout() {
  return (
    <div className="min-h-screen bg-[#eae7e7] flex flex-col items-center p-4">
      {/* Header Section */}
      <Header />

      {/* Page Content */}
      <main className="w-full max-w-md mt-4 flex-grow">
        <Outlet />
      </main>

      {/* Navbar Section */}
      <Navbar />
    </div>
  );
}
