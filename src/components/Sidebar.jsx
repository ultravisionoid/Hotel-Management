import React, { useState } from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  const [isOpen, setOpen] = useState(false);

  return (
    <div
      className={`fixed inset-0 h-screen bg-gray-800 text-white transition-all duration-300 flex flex-col  ${
        isOpen ? "w-64" : "w-0"
      }`}
    >
      {/* Toggle Button */}
      <button
        onClick={() => setOpen(!isOpen)}
        className={`p-2 bg-blue-600 hover:bg-blue-500 text-white absolute rounded-full shadow-lg focus:outline-none transition-all duration-300 ${
          isOpen ? "left-[12rem]" : "left-2"
        } top-4`}
      >
        {isOpen ? "☰" : "☰"}
      </button>

      {/* Sidebar Header */}
      <div className="flex items-center justify-center py-4">
        <h2 className={`text-xl font-bold ${!isOpen ? "hidden" : ""}`}>Menu</h2>
      </div>

      {/* Links */}
      <ul className="flex flex-col gap-4 mt-6">
        <li>
          <Link
            to="/"
            className="flex items-center gap-4 p-2 hover:bg-gray-700 rounded"
            onClick={() => setOpen(!isOpen)}
          >
            <span className={`${!isOpen && "hidden"}`}>
              <span role="img" aria-label="Home">
                🏠
              </span>
              Home
            </span>
          </Link>
        </li>
        <li>
          <Link
            to="/dashboard"
            className="flex items-center gap-4 p-2 hover:bg-gray-700 rounded"
            onClick={() => setOpen(!isOpen)}
          >
            <span className={`${!isOpen && "hidden"}`}>
              <span role="img" aria-label="Dashboard">
                📊
              </span>
              Dashboard
            </span>
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className="flex items-center gap-4 p-2 hover:bg-gray-700 rounded"
            onClick={() => setOpen(!isOpen)}
          >
            <span className={`${!isOpen && "hidden"}`}>
              <span role="img" aria-label="About">
                ℹ️
              </span>
              About
            </span>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
