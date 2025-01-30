import React from "react";
import { Link } from "react-router-dom";

export default function FeaturedDeals({ showTitle = true }) {
  return (
    <div className="my-16">
      {showTitle && (
        <h2 className="md:text-left text-center md:text-3xl text-2xl mb-8 font-bold text-zinc-800">
          Hurry Up Deals
        </h2>
      )}
      <div className="flex flex-col lg:flex-row gap-4">
        <div
          className="lg:w-1/2 w-full flex gap-4 sm:gap-0 justify-between items-center px-8 py-4 lg:py-0 rounded-xl"
          style={{
            backgroundImage: 'url("images/banner-bg-1.jpg")',
            backgroundSize: "cover",
          }}
        >
          <div className="text-left">
            <h2 className="font-bold md:text-4xl text-2xl text-white leading-7 md:leading-10 mb-4">
              AirPods <br /> Experience
            </h2>
            <Link to="/shop">
              <span className="inline-block bg-white font-bold text-sm md:text-base  text-indigo-600 hover:text-zinc-800 md:px-7 px-6 md:py-[11px] py-2 rounded-full ">
                Shop Now
              </span>
            </Link>
          </div>
          <div>
            <img src="images/banner-img-1.png" alt="" />
          </div>
        </div>
        <div className="bg-violet-100 lg:w-1/2 w-full flex md:gap-4 gap-2 sm:gap-0 rounded-xl text-left md:p-4 p-2 items-center">
          <div className="py-6 md:px-8 px-4">
            <h2 className="font-bold md:text-4xl text-xl text-zinc-800 leading-7 md:leading-10 mb-4">
              New 3 in 1 <br /> Wireless <br /> Charger
            </h2>
            <p className="text-neutral-500 mb-4 md:block hidden">
              Save up to 50% off on new arrivals.
            </p>
            <Link to="/shop">
              {" "}
              <span className="inline-block bg-white font-bold md:text-base text-sm text-indigo-600 hover:text-zinc-800 md:px-7 px-6 md:py-[11px] py-2 rounded-full ">
                Shop Now
              </span>
            </Link>
          </div>
          <div>
            <img
              src="images/banner-img-2.png"
              className="w-32 md:w-full"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
