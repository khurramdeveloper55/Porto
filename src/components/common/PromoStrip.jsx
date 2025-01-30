import React from "react";
import Marquee from "react-fast-marquee";

export default function PromoStrip() {
  return (
    <div className="my-16 bg-indigo-600 py-5 w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]  relative">
      <span className="text-white text-xl">
        <Marquee>
          No Minimum Purchase - Free Shipping On All Orders - No Minimum
          Purchase - Free Shipping On All Orders - No Minimum Purchase - Free
          Shipping On All Orders
        </Marquee>
      </span>
    </div>
  );
}
