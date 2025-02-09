import React from "react";
import { Link } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";
import useCategories from "../../hooks/useCategories";
import Loader from "./Loader";

export default function Navigation() {
  const { categories, isLoading } = useCategories();
  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <ul className="lg:flex hidden lg:space-x-2 xl:space-x-2 items-center mb-5 gap-10 font-semibold text-zinc-800 lg:text-md xl:text-lg">
          {categories?.map((category) => (
            <li
              key={category.id}
              className="flex items-center gap-2 hover:text-indigo-500"
            >
              <Link
                to={`/${encodeURIComponent(
                  category.name.toLowerCase().replace(/\s+/g, "-")
                )}`}
              >
                {category.name}
              </Link>
            </li>
          ))}
          <li className="relative group hover:text-indigo-500">
            <Link>
              <span className="flex items-center gap-1">
                More{" "}
                <span className="text-sm">
                  <FaChevronDown />
                </span>
              </span>
            </Link>
            <div className="absolute list-more  z-[99]  text-sm text-neutral-500 font-light leading-7 right-[-30px] top-[35px] w-[300px] py-4 text-left pl-6 transform translate-y-[-20px] opacity-0 group-hover:opacity-100 group-hover:translate-y-2 duration-300 ease-out  visibility-hidden group-hover:visible ">
              <ul>
                <li className="hover:text-indigo-500">
                  <Link>Straps / Bands - 40mm</Link>
                </li>
                <li className="hover:text-indigo-500">
                  <Link>Straps / Bands - 44mm</Link>
                </li>
                <li className="hover:text-indigo-500">
                  <Link>Tripods & Mounts</Link>
                </li>
                <li className="hover:text-indigo-500">
                  <Link>Cradles & Holders</Link>
                </li>
                <li className="hover:text-indigo-500">
                  <Link>Stands</Link>
                </li>
                <li className="hover:text-indigo-500">
                  <Link>Car Kits</Link>
                </li>
                <li className="hover:text-indigo-500">
                  <Link>Adaptors</Link>
                </li>
                <li className="hover:text-indigo-500">
                  <Link>Cleaning</Link>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      )}
    </div>
  );
}
