import React from "react";

export default function FilterSidebar() {
  return (
    <div className="fixed w-80 left-0 top-0 h-full z-[9999] bg-white pb-6 pt-10 px-6 cart-overflow overflow-y-scroll">
      <span className="absolute -right-8 top-4 cursor-pointer text-black text-lg">
        <GrClose />
      </span>
      <h4 className="text-sm text-left font-bold uppercase text-zinc-800 mb-4">
        All Categories
      </h4>
      <ul>
        <li className="text-left uppercase py-2 text-neutral-500 text-[12px]">
          Cables
        </li>
        <li className="text-left uppercase py-2 text-neutral-500 text-[12px]">
          MagSafe
        </li>
        <li className="text-left uppercase py-2 text-neutral-500 text-[12px]">
          Chargers
        </li>
        <li className="text-left uppercase py-2 text-neutral-500 text-[12px]">
          Cases
        </li>
        <li className="text-left uppercase py-2 text-neutral-500 text-[12px]">
          Screen Protectors
        </li>
        <li className="text-left uppercase py-2 text-neutral-500 text-[12px]">
          Power Banks
        </li>
        <li className="text-left uppercase py-2 text-neutral-500 text-[12px]">
          Headphones
        </li>
      </ul>
      <h4 className="text-sm text-left font-bold uppercase text-zinc-800 mt-4">
        Select Price
      </h4>
      <div className="flex flex-col   bg-white  z-20 space-y-2 mt-4 ">
        <div className="flex space-x-2 items-center mb-2">
          <input
            type="number"
            placeholder="Min"
            className="w-full px-2 py-1 border border-neutral-200"
          />{" "}
          <span> - </span>
          <input
            type="number"
            placeholder="Max"
            className="w-full px-2 py-1 border border-neutral-200"
          />
        </div>

        <button className="bg-neutral-100 w-full text-zinc-800 text-sm font-light uppercase py-2  px-4 hover:text-white hover:bg-indigo-500 duration-300">
          Filter
        </button>
      </div>
    </div>
  );
}
