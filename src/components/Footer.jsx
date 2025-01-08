import React from "react";

function Footer() {
  return (
    <div>
      <footer className="bg-gray-800 text-white p-4 text-center ">
        <p className="text-sm">
          © {new Date().getFullYear()} Hotel Management. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
}

export default Footer;
