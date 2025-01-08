import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { LuMessageCircleQuestion } from "react-icons/lu";
import { RiShareBoxFill } from "react-icons/ri";

export default function Cta() {
  return (
    <div className="flex lg:flex-row flex-col gap-6 mt-16">
      <div className="bg-violet-500 lg:w-1/2 w-full rounded-xl flex lg:flex-row flex-col items-center lg:gap-10 gap-4 px-12 py-6">
        <div className="hidden lg:inline">
          <img src="images/slide-dots-block.png" alt="" />
        </div>
        <div className="text-7xl text-white">
          <LuMessageCircleQuestion />
        </div>
        <div className="text-left">
          <h2 className="text-3xl mb-1 font-medium text-white">
            Need Any Help?
          </h2>
          <p className="text-white">
            We are here to help you with any question.
          </p>
        </div>
      </div>
      <div className="border-gray-200 border-2 flex items-center gap-4 lg:gap-0 lg:flex-row flex-col justify-around py-4 px-12 w-full  rounded-lg lg:w-1/2">
        <div>
          <h2 className="flex items-center text-xl gap-2 font-semibold text-zinc-800">
            <FaPhoneAlt /> 123 456 7890
          </h2>
          <button className="flex items-center gap-1 mt-1 bg-indigo-50 text-zinc-800 px-4 py-2 rounded-lg">
            Online Help <RiShareBoxFill />
          </button>
        </div>
        <div className="text-left">
          <p className="text-neutral-500">Monday to Saturday - 8am - 6pm</p>
          <span className="text-violet-500 underline">
            Frequently Asked Questions
          </span>
        </div>
      </div>
    </div>
  );
}
