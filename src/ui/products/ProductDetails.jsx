import React from "react";
import { FaCcPaypal, FaCcVisa, FaGooglePay, FaStar } from "react-icons/fa";
import { FiHeart } from "react-icons/fi";
import { IoMdHome } from "react-icons/io";
import { MdKeyboardArrowRight } from "react-icons/md";

export default function ProductDetails() {
  return (
    <>
      <div className="text-left text-neutral-400 text-xs flex items-center mb-4">
        <span className="text-lg">
          <IoMdHome />
        </span>{" "}
        <span className="text-lg">
          <MdKeyboardArrowRight />
        </span>{" "}
        SHOP{" "}
        <span className="text-lg">
          <MdKeyboardArrowRight />
        </span>
        HEADPHONES{" "}
        <span className="text-lg">
          <MdKeyboardArrowRight />
        </span>{" "}
        JBL TUNE 720BT
      </div>
      <div className="flex md:flex-row flex-col gap-6">
        <div className="md:w-1/2 w-full">
          <img
            src="images/product-2-1-600x600.jpg"
            className="rounded-lg"
            alt=""
          />
        </div>
        <div className="md:w-1/2 w-full">
          <div className="text-left">
            <h2 className="text-3xl font-bold text-zinc-800">JBL Tune 720BT</h2>
            <div className="flex items-center gap-4 mb-4">
              <span className="flex gap-[1px]">
                <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
              </span>{" "}
              <span>3 customer reviews</span> <span>Add a review</span>
            </div>
            <div>
              <h3 className="text-2xl font-medium text-zinc-800">
                $80.00 - $100.00
              </h3>
            </div>
            <p className="text-neutral-500 my-4">
              Enhance your Galaxy A35 5G experience with the sleek and stylish
              Galaxy A35 5G Silicone Case. This premium accessory is designed to
              provide superior protection while maintaining the elegant look of
              your smartphone.
            </p>
            <p className="text-neutral-500 text-sm">SKU: 1234567811</p>
            <p className="text-neutral-500 text-sm">Category: HEADPHONES</p>
            <div className="bg-indigo-50 w-full my-4 rounded-lg text-center py-8">
              <span>Color:</span>
              <div className="flex gap-2 mt-2 mb-5 justify-center">
                <span className="w-10 h-10 rounded-full border-indigo-50 outline-double outline-neutral-200 outline-1 border-4 bg-zinc-800 inline-block "></span>
                <span className="w-10 h-10 rounded-full border-indigo-50 outline-double outline-neutral-200 outline-1 border-4 bg-neutral-500 inline-block "></span>
                <span className="w-10 h-10 rounded-full border-indigo-50 outline-double outline-neutral-200 outline-1 border-4 bg-white inline-block "></span>
              </div>
              <div className="flex justify-center mb-4">
                <button className="bg-white w-32 h-12 px-4 rounded-full flex items-center justify-between">
                  <span>-</span>
                  <span>1</span>
                  <span>+</span>
                </button>
              </div>
              <div className="mb-4">
                <button className="px-16 py-4 bg-zinc-800 text-sm text-white rounded-full">
                  ADD TO CART
                </button>
              </div>
              <div className="flex justify-center my-6">
                <button className="text-sm flex gap-1 items-center">
                  <span className="text-lg">
                    <FiHeart />
                  </span>
                  ADD TO WISHLIST
                </button>
              </div>
              <div className="flex md:flex-row flex-col items-center justify-center gap-2 text-neutral-500">
                Supported payment types:{" "}
                <span className="text-4xl flex gap-2">
                  <FaCcVisa /> <FaCcPaypal /> <FaGooglePay />
                </span>
              </div>
            </div>
            <div className="mt-4">
              <span className="text-neutral-500">
                Order now and your order ships by{" "}
                <span className="text-black">Tue, Mar 12</span>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex lg:flex-row flex-col text-left gap-8 my-16">
        <div className="lg:w-1/2 w-full">
          <h3 className="text-3xl font-bold mb-3">Overview</h3>
          <p className="text-neutral-500 mb-6">
            The Galaxy A35 5G Silicone Case is the perfect blend of style and
            functionality. It not only enhances the look of your smartphone but
            also provides robust protection against daily wear and tear. Whether
            you’re at home, at work, or on the go, this case ensures your Galaxy
            A35 5G remains safe and stylish.
          </p>
          <p className="text-neutral-500">
            Perfect Fit: Custom-made for the Galaxy A35 5G, ensuring a snug and
            secure fit. Precise cutouts allow easy access to all buttons, ports,
            and cameras without removing the case. Premium Silicone Material:
            Crafted from high-quality silicone, this case offers a soft, smooth
            texture that feels great in your hand. It’s also flexible yet
            durable, providing long-lasting protection.
          </p>
        </div>
        <div className="lg:w-1/2 w-full">
          <h3 className="text-3xl font-bold mb-3">Details</h3>
          <div className="bg-neutral-100 rounded-sm text-sm pl-5 py-2">
            SPECIFICATIONS
          </div>
          <div className="py-2 text-sm border-b-neutral-100 border-b-[1px] border-solid flex justify-between">
            <span className="text-neutral-500">Colors</span>
            <span>Multiple color options available</span>
          </div>
          <div className="py-2 text-sm border-b-neutral-100 border-b-[1px] border-solid flex justify-between">
            <span className="text-neutral-500">Compatibility</span>
            <span>Galaxy A35 5G</span>
          </div>
          <div className="py-2 text-sm border-b-neutral-100 border-b-[1px] border-solid flex justify-between">
            <span className="text-neutral-500">Dimensions</span>
            <span>Precisely tailored to fit the Galaxy A35 5G</span>
          </div>
          <div className="py-2 text-sm border-b-neutral-100 border-b-[1px] border-solid flex justify-between">
            <span className="text-neutral-500">Material</span>
            <span>High-quality silicone</span>
          </div>
          <div className="py-2 text-sm border-b-neutral-100 border-b-[1px] border-solid flex justify-between">
            <span className="text-neutral-500">Weight</span>
            <span>Lightweight design for everyday use</span>
          </div>
        </div>
      </div>
    </>
  );
}
