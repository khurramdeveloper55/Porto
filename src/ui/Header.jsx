import React from "react";
import { FaRegHeart, FaRegUser } from "react-icons/fa";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { IoIosSearch } from "react-icons/io";

export default function Header() {
  return (
    <div className="container mx-auto mb-10">
      <div className="flex justify-between items-center">
        <div className="inline">
          <img
            src="images/logo.png"
            className="w-36 h-8 inline"
            alt="Porto Logo"
          />
        </div>
        <div className="inline">
          <form action="" className="inline">
            <span className="relative ">
              <input
                type="text"
                placeholder="Search for products..."
                className=" placeholder:text-sm border-neutral-200 border-solid rounded-3xl inline shadow-custom border py-3 pl-3 pr-40"
              />
              <span className="absolute right-3 -top-[1.5px] text-2xl text-neutral-800">
                <IoIosSearch />
              </span>
            </span>
          </form>
        </div>
        <div className="flex justify-between gap-4">
          <span className="flex items-center gap-2">
            <span className="text-2xl bg-indigo-50 p-3 rounded-md">
              <FaRegHeart />
            </span>{" "}
            Wishlist
          </span>
          <span className="flex items-center gap-2">
            <span className="text-2xl bg-indigo-50 p-3 rounded-md">
              <FaRegUser />
            </span>
            My Account
          </span>
          <span className="flex items-center relative">
            <span className="text-3xl bg-indigo-50 p-4 rounded-md">
              <HiOutlineShoppingBag />
            </span>
            <span className="absolute top-3 right-3 rounded-full text-xs bg-indigo-600 text-white w-4 h-4 leading-4 radius-md">
              0
            </span>
          </span>
        </div>
      </div>
    </div>
  );
}
