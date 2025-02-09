import React, { useEffect, useRef, useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { GrClose } from "react-icons/gr";
import { Link } from "react-router-dom";
import useCategories from "../../hooks/useCategories";

export default function SideMenu({ showMenu, setShowMenu }) {
  const { categories, isLoading } = useCategories();
  const [isExpanded, setIsExpanded] = useState(false);
  const contentRef = useRef(null);
  const [menuClosing, setMenuClosing] = useState(false);
  const [menuTransitioning, setMenuTransitioning] = useState(false);

  const toggleMenu = () => {
    setIsExpanded(!isExpanded);
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";

    if (showMenu) {
      setMenuTransitioning(true);
    } else {
      setTimeout(() => setMenuTransitioning(false), 500);
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [showMenu]);

  const handleMenuClose = () => {
    setMenuClosing(true);
    setTimeout(() => {
      setShowMenu(false);
    }, 500);
  };
  return (
    <>
      <div
        onClick={handleMenuClose}
        className={`fixed inset-0 bg-black bg-opacity-40 z-[9998] transition-opacity duration-500 ${
          menuTransitioning && showMenu && !menuClosing
            ? "opacity-100"
            : "opacity-0 pointer-events-none"
        }`}
      ></div>
      <div
        className={`fixed w-64 left-0 top-0 h-full z-[9999] bg-white py-6 cart-overflow transform transition-transform duration-500 ease-in-out ${
          menuTransitioning && showMenu && !menuClosing
            ? "translate-x-0"
            : "-translate-x-full"
        }`}
      >
        <span
          className={`absolute w-10 -right-12 top-4 cursor-pointer text-white text-lg ${
            showMenu ? "block" : "hidden"
          } `}
          onClick={handleMenuClose}
        >
          <GrClose />
        </span>
        <ul className="overflow-y-scroll cart-overflow">
          {categories?.map((category) => (
            <li
              key={category.id}
              className="text-left border-b-[1px] py-3 text-zinc-800 text-sm px-6"
            >
              <Link
                onClick={handleMenuClose}
                to={`/${encodeURIComponent(
                  category.name.toLowerCase().replace(/\s+/g, "-")
                )}`}
              >
                {category.name}
              </Link>
            </li>
          ))}
          <li className="text-left  py-3 text-zinc-800 text-sm px-6">
            <span
              className="flex items-center justify-between cursor-pointer"
              onClick={toggleMenu}
            >
              More{" "}
              <span className="text-sm">
                {isExpanded ? <FaChevronUp /> : <FaChevronDown />}
              </span>
            </span>
            <div
              ref={contentRef}
              style={{
                height: isExpanded
                  ? `${contentRef.current.scrollHeight}px`
                  : "0px",
                overflow: "hidden",
                transition: "height 0.3s ease",
              }}
            >
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
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}
