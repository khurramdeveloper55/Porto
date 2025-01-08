import React from "react";
import { Link } from "react-router-dom";

export default function Deals() {
  return (
    <div className="my-16">
      <h2 className="text-left text-3xl mb-6 font-bold text-zinc-800">
        Hurry Up Deals
      </h2>
      <div className="flex flex-col lg:flex-row gap-4">
        <div
          className="lg:w-1/2 w-full flex flex-col sm:flex-row  gap-4 sm:gap-0 justify-between items-center px-8 py-4 lg:py-0 rounded-xl"
          style={{
            backgroundImage: 'url("images/banner-bg-1.jpg")',
            backgroundSize: "cover",
          }}
        >
          <div className="text-left">
            <h2 className="font-bold text-4xl text-white leading-10 mb-4">
              AirPods <br /> Experience
            </h2>
            <span className="inline-block bg-white font-bold text-lg text-indigo-600 px-8 py-3 rounded-full ">
              <Link>Shop Now</Link>
            </span>
          </div>
          <div>
            <img src="images/banner-img-1.png" alt="" />
          </div>
        </div>
        <div className="bg-violet-100 lg:w-1/2 w-full flex flex-col sm:flex-row gap-4 sm:gap-0 rounded-xl text-left p-4 items-center">
          <div className="py-6 px-8">
            <h2 className="font-bold text-4xl text-zinc-800 leading-10 mb-4">
              New 3 in 1 <br /> Wireless <br /> Charger
            </h2>
            <p className="text-neutral-500 mb-4">
              Save up to 50% off on new arrivals.
            </p>
            <span className="inline-block bg-indigo-600 font-bold text-lg text-white px-8 py-3 rounded-full ">
              <Link>Shop Now</Link>
            </span>
          </div>
          <div>
            <img src="images/banner-img-2.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
