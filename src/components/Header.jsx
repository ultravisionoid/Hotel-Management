import React, { useState } from "react";
import { Link } from "react-router-dom";
import avatar from "../assets/avatar.png";
function Header() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className="bg-blue-600 text-white p-4 flex justify-between items-center">
      {/* Logo and Title */}
      <h1 className="text-xl font-bold ml-10">Hotel Management</h1>

      {/* Profile Section */}
      <div className="relative">
        <button
          onClick={() => setDropdownOpen(!dropdownOpen)}
          className="flex items-center gap-2 focus:outline-none"
        >
          <img src={avatar} alt="Profile" className="w-10 h-10 rounded-full" />
        </button>

        {/* Dropdown Menu */}
        {dropdownOpen && (
          <div className="absolute right-0 mt-2 w-40 bg-white text-black rounded shadow-lg z-10">
            <ul>
              <li className="hover:bg-gray-100 p-2">
                {/* <Link to="/profile">View Profile</Link> */}
              </li>
              <Link to="/login" onClick={() => setDropdownOpen(!dropdownOpen)}>
                <li className="hover:bg-gray-100 p-2">Login</li>
              </Link>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
