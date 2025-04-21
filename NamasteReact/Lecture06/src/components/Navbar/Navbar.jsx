import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const listItems = [
    {
      id: 1,
      name: "Home",
    },
    {
      id: 2,
      name: "About",
    },
    {
      id: 3,
      name: "Contact",
    },
    {
      id: 4,
      name: "Services",
    },
    {
      id: 5,
      name: "Login",
    },
  ];

  return (
    <nav className="flex justify-between items-center bg-black shadow-md p-4">
      <div className="flex justify-center items-center">
        <img
          className="w-50 h-15 object-cover"
          src="https://res.cloudinary.com/dutdah0l9/image/upload/v1720058694/Swiggy_logo_bml6he.png"
          alt="Logo"
        />
      </div>
      <div>
        <ul className="flex justify-center items-center gap-8 text-lg list-none font-semibold">
          {listItems.map((item) => {
            return (
              <li key={item.id}>
                <Link
                  to={`/${item.name.toLowerCase()}`}
                  className="text-white hover:text-gray-300"
                >
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
