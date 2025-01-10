import React from "react";
import Deals from "../Deals";
import { MdKeyboardArrowRight } from "react-icons/md";
import { IoMdHome } from "react-icons/io";
import ProductDeals from "../ProductDeals";
import { FaAngleDown, FaList } from "react-icons/fa";
import { BsGrid3X3GapFill } from "react-icons/bs";

export default function MagSafe() {
  return (
    <>
      <div className="flex justify-between items-center">
        <div className="text-left">
          <div className="text-left text-neutral-400 text-xs flex items-center mb-4">
            <span className="text-lg">
              <IoMdHome />
            </span>{" "}
            <span className="text-lg">
              <MdKeyboardArrowRight />
            </span>{" "}
            SHOP{" "}
            <span className="text-lg">
              <MdKeyboardArrowRight />
            </span>
            MAGSAFE
          </div>
          <h2 className="text-5xl text-zinc-800 font-bold">MagSafe</h2>
        </div>
        <div>
          <img src="images/cat-magsafe.png" alt="" />
        </div>
      </div>
      <Deals />
      <div className="flex justify-between">
        <div className="flex gap-4">
          <span className="text-neutral-400 bg-neutral-100 flex w-40 justify-between items-center p-2">
            All Categories{" "}
            <span className="font-normal text-black">
              <FaAngleDown />
            </span>
          </span>
          <span className="text-neutral-400 bg-neutral-100 flex w-40 justify-between items-center p-2">
            Select Price
            <span className="font-normal text-black">
              <FaAngleDown />
            </span>
          </span>
          <span className="text-neutral-400 bg-neutral-100 flex w-40 justify-between items-center p-2">
            Select Colors
            <span className="font-normal text-black">
              <FaAngleDown />
            </span>
          </span>
        </div>
        <div className="flex gap-4">
          <span className="text-black bg-neutral-100 flex w-40 justify-between items-center p-2">
            Default Sorting
            <span className="font-normal text-black">
              <FaAngleDown />
            </span>
          </span>
          <span className="text-black bg-neutral-100 flex w-16 justify-between items-center p-2">
            12
            <span className="font-normal text-black">
              <FaAngleDown />
            </span>
          </span>
          <span className="text-indigo-500 text-xl bg-neutral-100 flex justify-between items-center py-2 px-3">
            <BsGrid3X3GapFill />
          </span>
          <span className="text-black text-xl bg-neutral-100 flex justify-between items-center py-2 px-3">
            <FaList />
          </span>
        </div>
      </div>
      <ProductDeals />
    </>
  );
}
