import React from "react";
import { CiDollar } from "react-icons/ci";
import { FaLock } from "react-icons/fa";
import { TbClock24, TbTruckDelivery } from "react-icons/tb";

export default function ChooseUs() {
  return (
    <div className="py-16 flex md:flex-row flex-col justify-around items-center md:gap-0 gap-4 text-center">
      <div className="flex items-center">
        <span className="relative text-3xl text-indigo-600 before:content-[''] before:absolute before:w-8 before:h-8 before:bg-gray-100 before:rounded-full before:-z-10 before:top-[10px] before:-right-[22px] before:transform before:-translate-x-1/2 before:-translate-y-1/2">
          <TbTruckDelivery />
        </span>
        <p className="pl-2 text-xl font-bold">Free Shipping & Returns</p>
      </div>
      <div className="flex items-center">
        <span className="relative text-3xl text-indigo-600 before:content-[''] before:absolute before:w-8 before:h-8 before:bg-gray-100 before:rounded-full before:-z-10 before:top-[10px] before:-right-[22px] before:transform before:-translate-x-1/2 before:-translate-y-1/2">
          <CiDollar />
        </span>
        <p className="pl-2 text-xl font-bold">Money Back Guarantee</p>
      </div>
      <div className="flex items-center">
        <span className="relative text-3xl text-indigo-600 before:content-[''] before:absolute before:w-8 before:h-8 before:bg-gray-100 before:rounded-full before:-z-10 before:top-[10px] before:-right-[22px] before:transform before:-translate-x-1/2 before:-translate-y-1/2">
          <TbClock24 />
        </span>
        <p className="pl-2 text-xl font-bold">Online Support 24/7</p>
      </div>
      <div className="flex  items-center">
        <span className="relative text-3xl text-indigo-600 before:content-[''] before:absolute before:w-8 before:h-8 before:bg-gray-100 before:rounded-full before:-z-10 before:top-[10px] before:-right-[22px] before:transform before:-translate-x-1/2 before:-translate-y-1/2">
          <FaLock />
        </span>

        <p className="pl-2 text-xl font-bold">Secure Payment</p>
      </div>
    </div>
  );
}
