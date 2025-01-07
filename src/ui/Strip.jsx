import React from "react";
import Marquee from "react-fast-marquee";

export default function Strip() {
  return (
    <div className="my-16 bg-indigo-600 py-5 ">
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
