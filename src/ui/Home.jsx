import React from "react";
import { CiDollar } from "react-icons/ci";
import { FaLock } from "react-icons/fa";
import { TbClock24, TbTruckDelivery } from "react-icons/tb";
import PopularCategories from "./PopularCategories";
import ProductDeals from "./ProductDeals";

export default function Home() {
  return (
    <>
      <div className="py-16 flex justify-around">
        <div className="flex items-center">
          <span className="text-4xl">
            <TbTruckDelivery />
          </span>
          <p className="pl-2 text-xl font-bold">Free Shipping & Returns</p>
        </div>
        <div className="flex items-center">
          <span className="text-4xl">
            <CiDollar />
          </span>
          <p className="pl-2 text-xl font-bold">Money Back Guarantee</p>
        </div>
        <div className="flex items-center">
          <span className="text-4xl">
            <TbClock24 />
          </span>
          <p className="pl-2 text-xl font-bold">Online Support 24/7</p>
        </div>
        <div className="flex  items-center">
          <span className="text-4xl">
            <FaLock />
          </span>
          <p className="pl-2 text-xl font-bold">Secure Payment</p>
        </div>
      </div>
      <PopularCategories />
      <ProductDeals />
    </>
  );
}
