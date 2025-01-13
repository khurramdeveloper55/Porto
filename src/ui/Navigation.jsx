import React from "react";
import { FaAngleDown } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <div>
      <ul className="lg:flex hidden lg:space-x-2 xl:space-x-2 items-center mb-5 gap-9 font-semibold text-zinc-800 lg:text-md xl:text-lg">
        <span className="flex items-center  gap-2">
          <Link to="/cases">Cases </Link>
          <span>
            <FaAngleDown />
          </span>
        </span>
        <Link to="/screenprotectors">Screen Protectors</Link>
        <Link to="/cables">Cables</Link>
        <Link to="/chargers">Chargers</Link>
        <Link to="/headphones">HeadPhones</Link>
        <Link to="/magsafe">MagSafe</Link>
        <Link to="/powerbank">PowerBank</Link>
        <span className="flex items-center  gap-2">
          <Link to="/">More </Link>
          <span>
            <FaAngleDown />
          </span>
        </span>
      </ul>
    </div>
  );
}
