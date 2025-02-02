import React from "react";
import { FaChevronDown } from "react-icons/fa";
import { GrClose } from "react-icons/gr";
import { Link } from "react-router-dom";

export default function SideMenu() {
  return (
    <div className="fixed w-80 left-0 top-0 h-full z-[9999] bg-white py-6 cart-overflow overflow-y-scroll">
      <span className="absolute -right-8 top-4 cursor-pointer text-black text-lg">
        <GrClose />
      </span>
      <ul>
        <li className="text-left border-b-[1px] py-3 text-zinc-800 text-sm px-6">
          Cables
        </li>
        <li className="text-left border-b-[1px] py-3 text-zinc-800 text-sm px-6">
          MagSafe
        </li>
        <li className="text-left border-b-[1px] py-3 text-zinc-800 text-sm px-6">
          Chargers
        </li>
        <li className="text-left border-b-[1px] py-3 text-zinc-800 text-sm px-6">
          Cases
        </li>
        <li className="text-left border-b-[1px] py-3 text-zinc-800 text-sm px-6">
          Screen Protectors
        </li>
        <li className="text-left border-b-[1px] py-3 text-zinc-800 text-sm px-6">
          Power Banks
        </li>
        <li className="text-left border-b-[1px] py-3 text-zinc-800 text-sm px-6">
          Headphones
        </li>
        <li className="text-left  py-3 text-zinc-800 text-sm px-6">
          <span className="flex items-center justify-between">
            More{" "}
            <span className="text-sm">
              <FaChevronDown />
            </span>
          </span>

          <ul className="pt-3">
            <li className="text-left border-b-[1px] py-3 text-zinc-800 text-sm ">
              <Link>Straps / Bands - 40mm</Link>
            </li>
            <li className="text-left border-b-[1px] py-3 text-zinc-800 text-sm ">
              <Link>Straps / Bands - 44mm</Link>
            </li>
            <li className="text-left border-b-[1px] py-3 text-zinc-800 text-sm ">
              <Link>Tripods & Mounts</Link>
            </li>
            <li className="text-left border-b-[1px] py-3 text-zinc-800 text-sm ">
              <Link>Cradles & Holders</Link>
            </li>
            <li className="text-left border-b-[1px] py-3 text-zinc-800 text-sm ">
              <Link>Stands</Link>
            </li>
            <li className="text-left border-b-[1px] py-3 text-zinc-800 text-sm ">
              <Link>Car Kits</Link>
            </li>
            <li className="text-left border-b-[1px] py-3 text-zinc-800 text-sm ">
              <Link>Adaptors</Link>
            </li>
            <li className="text-left border-b-[1px] py-3 text-zinc-800 text-sm ">
              <Link>Cleaning</Link>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}
