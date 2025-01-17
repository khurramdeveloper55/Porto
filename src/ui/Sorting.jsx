import React from "react";
import { BsGrid3X3GapFill } from "react-icons/bs";
import { FaAngleDown, FaList } from "react-icons/fa";

export default function Sorting() {
  return (
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
  );
}
