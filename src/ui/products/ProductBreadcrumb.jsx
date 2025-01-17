import React from "react";
import { IoMdHome } from "react-icons/io";
import { MdKeyboardArrowRight } from "react-icons/md";

export default function ProductBreadcrumb() {
  return (
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
  );
}
