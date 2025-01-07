import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { LuMessageCircleQuestion } from "react-icons/lu";
import { RiShareBoxFill } from "react-icons/ri";

export default function Cta() {
  return (
    <div className="flex gap-6 mt-16">
      <div className="bg-violet-500 w-1/2 rounded-xl flex items-center gap-10 px-12 py-6">
        <div>
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
      <div className="border-gray-200 border-2 flex items-center justify-around py-4 px-12  rounded-lg w-1/2">
        <div>
          <h2 className="flex items-center text-2xl gap-2 font-semibold text-zinc-800">
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
