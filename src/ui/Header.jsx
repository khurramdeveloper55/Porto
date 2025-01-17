import React from "react";
import { FaRegHeart, FaRegUser } from "react-icons/fa";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { IoIosSearch } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="container mx-auto mb-10">
      <div
        className="flex justify-between items-center mb-[100px] lg:mb-0 relative
      "
      >
        <div className="lg:inline inline-flex items-center gap-4">
          <span className="lg:hidden inline sm:text-2xl text-xl bg-indigo-50 sm:p-3 p-2 rounded-md">
            <RxHamburgerMenu />
          </span>
          <Link to="/">
            <img
              src="images/logo.png"
              className="sm:w-36  w-24  inline"
              alt="Porto Logo"
            />
          </Link>
        </div>
        <div className="inline lg:w-auto w-full lg:relative absolute lg:top-0 top-[65px] ">
          <form action="" className="inline">
            <span className="relative ">
              <input
                type="text"
                placeholder="Search for products..."
                className=" placeholder:text-sm w-full lg:w-96 border-neutral-200 border-solid rounded-3xl inline shadow-custom border py-3 pl-3 "
              />
              <span className="absolute right-3 -top-[1.5px] text-2xl text-neutral-800">
                <IoIosSearch />
              </span>
            </span>
          </form>
        </div>
        <div className="flex justify-between sm:gap-4 gap-2">
          <span className="items-center gap-2 hidden sm:flex">
            <span className="text-2xl bg-indigo-50 p-3 rounded-md">
              <FaRegHeart />
            </span>{" "}
            <span className="hidden lg:inline">Wishlist</span>
          </span>
          <span className="flex items-center gap-2">
            <span className="sm:text-2xl text-xl bg-indigo-50 sm:p-3 p-2 rounded-md">
              <FaRegUser />
            </span>
            <span className="hidden lg:inline">My Account</span>
          </span>
          <span className="flex items-center relative">
            <span className="lg:text-3xl sm:text-2xl text-xl bg-indigo-50 lg:p-4 sm:p-3 p-2 rounded-md">
              <HiOutlineShoppingBag />
            </span>
            <span className="absolute lg:top-3 sm:top-2 top-1 lg:right-3 sm:right-2 right-1 rounded-full text-xs bg-indigo-600 text-white w-4 h-4 leading-4 radius-md">
              0
            </span>
          </span>
        </div>
      </div>
    </div>
  );
}
