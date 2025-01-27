import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function WishList() {
  const wishlist = useSelector((state) => state.wishlist.items);
  return (
    <>
      <div className="flex justify-center flex-col items-center bg-neutral-100 py-16 ">
        <div className="text-center text-neutral-400 text-xs flex flex-row justify-center items-center mb-4">
          <span className="text-md uppercase">Home</span>{" "}
          <span className="text-lg">
            <MdKeyboardArrowRight />
          </span>{" "}
          <span className="text-md uppercase">Wishlist</span>
        </div>
        <h2 className="block text-center text-3xl font-bold">Wishlist</h2>
      </div>
      <div className="mt-16">
        <h2 className="text-3xl text-left">My Wishlist</h2>
        <div className="flex mt-8 mb-2">
          <ul className="flex justify-around items-center w-full">
            <li className="w-full flex-[2] text-left">Product</li>
            <li className="w-full flex-1 text-left">Price</li>
            <li className="w-full flex-1 text-left">Stock Status</li>
            <li className="w-full flex-1 text-left">Actions</li>
          </ul>
        </div>
        <hr />
        {wishlist.map((item, index) => (
          <div className="flex mt-8" key={index}>
            <ul className="flex justify-around items-center w-full">
              <li className="w-full flex-[2] text-left flex items-center gap-2">
                <img src={item.image} className="w-24" alt="" />
                {item.name}
              </li>
              <li className="w-full flex-1 text-left">
                {`$${Math.min(
                  ...item.price.map((color) => JSON.parse(color).price)
                ).toFixed(2)} - $${Math.max(
                  ...item.price.map((color) => JSON.parse(color).price)
                ).toFixed(2)}`}
              </li>
              <li className="w-full flex-1 text-left">In Stock</li>
              <li className="w-full flex-1 text-left">
                <button className=" bg-zinc-800 text-white px-6 py-3">
                  <Link to={`/product/${item.id}`}>Select Options</Link>
                </button>
              </li>
            </ul>
          </div>
        ))}
      </div>
    </>
  );
}
