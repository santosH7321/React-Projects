import React from "react";
const Navbar = () => {
  return (
    <div className="navbar flex justify-between items-center bg-gray-800 text-white p-4 overflow-hidden">
      <div className="flex items-center text-2xl font-bold">
        <h1>FOOD</h1>
      </div>
      <div className="navbar-items">
        <ul className="flex space-x-8 font-semibold ">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Price</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
