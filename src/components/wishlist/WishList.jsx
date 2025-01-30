import React from "react";
import { FaFacebook, FaPinterest, FaShare } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { MdEmail, MdKeyboardArrowRight } from "react-icons/md";
import { RiTwitterXLine } from "react-icons/ri";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function WishList() {
  const wishlist = useSelector((state) => state.wishlist.items);
  return (
    <>
      <div className=" w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]  relative">
        <div className="flex justify-center flex-col items-center bg-neutral-100 py-16 ">
          <div className="text-center text-neutral-400 text-xs flex flex-row justify-center items-center mb-0">
            <span className="text-md uppercase text-indigo-500">
              <Link to="/">Home</Link>
            </span>{" "}
            <span className="text-lg">
              <MdKeyboardArrowRight />
            </span>{" "}
            <span className="text-md uppercase">Wishlist</span>
          </div>
          <h2 className="block text-center text-3xl font-bold">Wishlist</h2>
        </div>
      </div>

      <div className="my-16">
        <h2 className="text-3xl text-left">My Wishlist</h2>
        <div className="md:flex mt-8 mb-2 hidden ">
          <ul className="flex justify-around items-center w-full">
            <li className="w-full flex-[2] text-center text-sm uppercase text-zinc-800 font-semibold">
              Product
            </li>
            <li className="w-full flex-1 text-left text-sm uppercase text-zinc-800 font-semibold">
              Price
            </li>
            <li className="w-full flex-1 text-left text-sm uppercase text-zinc-800 font-semibold">
              Stock Status
            </li>
            <li className="w-full flex-1 text-left text-sm uppercase text-zinc-800 font-semibold">
              Actions
            </li>
          </ul>
        </div>
        <hr className="md:block hidden" />
        {wishlist.map((item, index) => (
          <div className="flex mt-8" key={index}>
            <ul className="flex justify-around items-center md:flex-row flex-col gap-2 w-full wishlist md:px-0 px-3 md:py-0 py-8">
              <li className="w-full flex-[2] md:text-md text-sm md:text-left text-center flex md:flex-row flex-col items-center md:gap-2 gap-4">
                <span className=" relative">
                  <span
                    className="absolute -right-1 -top-2 cursor-pointer rounded-full z-[99999] p-[2px] text-sm"
                    style={{ boxShadow: "0 2px 6px 0 rgba(0,0,0,0.4)" }}
                  >
                    <IoClose />
                  </span>
                  <img src={item.image} className="w-24" alt="" />
                </span>
                {item.name}
              </li>
              <li className="w-full flex-1 md:text-left md:text-md text-sm text-center text-neutral-500">
                {`$${Math.min(
                  ...item.price.map((color) => JSON.parse(color).price)
                ).toFixed(2)} - $${Math.max(
                  ...item.price.map((color) => JSON.parse(color).price)
                ).toFixed(2)}`}
              </li>
              <li className="w-full flex-1 md:text-left md:text-md text-sm text-center">
                In Stock
              </li>
              <li className="w-full flex-1 md:text-left text-center">
                <button className=" bg-zinc-800 md:w-auto w-full uppercase md:text-md text-sm text-white px-6 py-3">
                  <Link to={`/product/${item.id}`}>Select Options</Link>
                </button>
              </li>
            </ul>
          </div>
        ))}
      </div>

      <div className="my-16  text-left flex items-center gap-5">
        <h2 className="text-2xl text-zinc-800 flex gap-2 items-center">
          <FaShare /> Share on:
        </h2>
        <div className="text-2xl flex gap-3">
          <span className="text-blue-700">
            <Link>
              <FaFacebook />
            </Link>
          </span>
          <span className="text-sky-400">
            <Link>
              <RiTwitterXLine />
            </Link>
          </span>
          <span className="text-red-700">
            <Link>
              <FaPinterest />
            </Link>
          </span>
          <span className="text-amber-400">
            <Link>
              <MdEmail />
            </Link>
          </span>
        </div>
      </div>
      <hr />
    </>
  );
}
