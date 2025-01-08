import React from "react";
import { Link } from "react-router-dom";
function Hero() {
  return (
    <div>
      <section className="bg-gray-200 text-center py-20">
        <h1 className="text-4xl font-bold">
          Welcome to the Hotel Staff Management System
        </h1>
        <p className="mt-4 text-lg">
          Manage rooms efficiently and improve staff coordination.
        </p>
        <button className="mt-6 px-6 py-2 bg-blue-600 text-white rounded">
          <Link to="/login">Login to Dashboard </Link>
        </button>
      </section>
    </div>
  );
}

export default Hero;
