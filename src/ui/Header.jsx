import React from "react";
import { FaRegHeart, FaRegUser } from "react-icons/fa";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { IoIosSearch } from "react-icons/io";

export default function Header() {
  return (
    <div className="container mx-auto mb-10">
      <div className="flex justify-between">
        <div className="inline">
          <img
            src="images/logo.png"
            className="w-32 h-8 inline"
            alt="Porto Logo"
          />
        </div>
        <div className="inline">
          <form action="" className="inline">
            <span className="relative">
              <input
                type="text"
                placeholder="search"
                className="border-neutral-200 border-solid rounded-3xl inline shadow-sm border py-2 pl-3 pr-32"
              />
              <span className="absolute right-2 top-0 text-2xl">
                <IoIosSearch />
              </span>
            </span>
          </form>
        </div>
        <div className="flex justify-between gap-4">
          <span className="flex items-center gap-2">
            <span className="text-2xl">
              <FaRegHeart />
            </span>{" "}
            Wishlist
          </span>
          <span className="flex items-center gap-2">
            <span className="text-2xl">
              <FaRegUser />
            </span>
            My Account
          </span>
          <span className="flex items-center relative">
            <span className="text-2xl">
              <HiOutlineShoppingBag />
            </span>
            <span className="absolute top-1 right-0 rounded-full text-xs bg-indigo-600 text-white w-4 h-4 leading-4 radius-md">
              0
            </span>
          </span>
        </div>
      </div>
    </div>
  );
}
