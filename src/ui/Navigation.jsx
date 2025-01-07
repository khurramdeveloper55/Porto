import React from "react";
import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <div>
      <ul className="flex space-x-4 mb-5 gap-9 font-bold text-zinc-800 text-lg">
        <Link to="/cases">Cases</Link>
        <Link to="/screenprotectors">Screen Protectors</Link>
        <Link to="/cables">Cables</Link>
        <Link to="/chargers">Chargers</Link>
        <Link to="/headphones">HeadPhones</Link>
        <Link to="/magsafe">MagSafe</Link>
        <Link to="/powerbank">PowerBank</Link>
        <Link to="/">More</Link>
      </ul>
    </div>
  );
}
