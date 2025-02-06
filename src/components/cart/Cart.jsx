import React from "react";
import { IoClose } from "react-icons/io5";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
} from "../../redux/slices/cartSlice";
import { HiMiniMinus, HiMiniPlus } from "react-icons/hi2";

export default function Cart() {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  return (
    <>
      <div className="md:flex inline-block justify-center flex-col items-center py-6 ">
        <div className="text-center text-neutral-400 text-xs flex md:flex-row flex-col justify-center items-center mb-4 md:mb-0">
          <span className="text-2xl font-semibold  text-indigo-500">
            <Link to="/">Shopping Cart</Link>
          </span>{" "}
          <span className="text-2xl">
            <MdKeyboardArrowRight />
          </span>{" "}
          <span className="text-2xl font-semibold ">Checkout</span>
          <span className="text-2xl">
            <MdKeyboardArrowRight />
          </span>{" "}
          <span className="text-2xl font-semibold ">Order Complete</span>
        </div>
      </div>

      <div className="mb-16 md:flex block gap-6">
        <div className=" md:w-2/3 w-full md:mb-0 mb-6">
          <div className="md:flex mt-8 mb-2 hidden ">
            <ul className="flex justify-around items-center w-full">
              <li className="w-full flex-[2] text-center text-sm uppercase text-zinc-800 font-semibold">
                Product
              </li>
              <li className="w-full flex-1 text-left text-sm uppercase text-zinc-800 font-semibold">
                Price
              </li>
              <li className="w-full flex-1 text-left text-sm uppercase text-zinc-800 font-semibold">
                Quantity
              </li>
              <li className="w-full flex-1 text-left text-sm uppercase text-zinc-800 font-semibold">
                Subtotal
              </li>
            </ul>
          </div>
          <hr className="md:block hidden" />
          {cartItems.map((item) => (
            <div className="flex mt-8">
              <ul className="flex justify-around items-center md:flex-row flex-col gap-2 w-full wishlist md:px-0 px-3 md:py-0 py-8">
                <li className="w-full flex-[2] md:text-md text-sm md:text-left text-center flex md:flex-row flex-col items-center md:gap-2 gap-4">
                  <span className=" relative">
                    <span
                      className="absolute -right-1 -top-2 cursor-pointer rounded-full z-[99999] p-[2px] text-sm"
                      style={{ boxShadow: "0 2px 6px 0 rgba(0,0,0,0.4)" }}
                      onClick={() => dispatch(removeFromCart({ id: item.id }))}
                    >
                      <IoClose />
                    </span>
                    <img src={item.image} className="w-[96px]" alt="" />
                  </span>
                  {item.name}
                </li>
                <li className="w-full flex-1 md:text-left md:text-md text-sm text-center text-neutral-500">
                  ${item.price.toFixed(2)}
                </li>
                <li className="flex gap-2 items-center px-1 leading-7 border-zinc-200 border-[1px]">
                  <span
                    className="border-zinc-200 border-r-[1px] pr-1 cursor-pointer"
                    onClick={() => dispatch(decreaseQuantity({ id: item.id }))}
                    style={{ display: "ruby" }}
                  >
                    <HiMiniMinus />
                  </span>
                  <span className="px-[2px]">{item.quantity}</span>
                  <span
                    className="border-zinc-200 border-l-[1px] pl-1 cursor-pointer ruby"
                    onClick={() => dispatch(increaseQuantity({ id: item.id }))}
                    style={{ display: "ruby" }}
                  >
                    <HiMiniPlus />
                  </span>
                </li>
                <li className="w-full flex-1 md:text-left text-center">
                  <span className="  md:w-auto w-full uppercase md:text-md text-sm ">
                    26
                  </span>
                </li>
              </ul>
            </div>
          ))}
        </div>
        <div className="md:w-1/3 w-full text-left p-7 border-2 border-neutral-200">
          <h4 className="uppercase font-semibold mb-6 text-zinc-800">
            Cart Totals
          </h4>
          <div className="flex justify-between border-b-[1px] border-neutral-300 pb-3 mb-3">
            <h5 className=" text-zinc-800 text-sm font-semibold">Subtotal</h5>
            <span className="font-light text-neutral-500 text-sm">$126.00</span>
          </div>
          <div>
            <h5 className="text-zinc-800 font-semibold mb-3">Shipping</h5>
            <span className="text-sm mb-3 block text-neutral-500">
              Flat Rate
            </span>
            <span className="text-sm text-neutral-500 mb-3 block">
              Shipping to NY.
            </span>
            <input
              type="text"
              placeholder="United States (US)"
              className="border-neutral-300 placeholder:text-sm pl-3 border-[1px] w-full py-2 rounded-md mb-2"
            />
            <input
              type="text"
              placeholder="New York"
              className="border-neutral-300 placeholder:text-sm pl-3 border-[1px] w-full py-2 rounded-md mb-2"
            />
            <input
              type="text"
              placeholder="Town / City"
              className="border-neutral-300 placeholder:text-sm pl-3 border-[1px] w-full py-2 rounded-md mb-2"
            />
            <input
              type="text"
              placeholder="ZIP Code"
              className="border-neutral-300 placeholder:text-sm pl-3 border-[1px] w-full py-2 rounded-md mb-2"
            />
            <button className="bg-neutral-100 text-sm font-semibold uppercase py-2 px-2 mt-2 mb-4">
              <Link>Update Totals</Link>
            </button>
          </div>
          <hr />
          <div className="mt-3 flex justify-between">
            <span className="font-semibold text-zinc-800">Total</span>
            <span className="text-xl font-semibold text-zinc-800">$126.00</span>
          </div>
          <button className="mt-5 bg-zinc-800 text-white py-3 w-full uppercase font-semibold">
            <Link to="/checkout">Proceed To Checkout</Link>
          </button>
        </div>
      </div>
    </>
  );
}
