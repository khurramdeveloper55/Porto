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
  const subtotal = useSelector((state) => state.cart.subtotal);
  const dispatch = useDispatch();
  return (
    <>
      <div className="md:flex inline-block justify-center flex-col items-center py-6 ">
        <div className="text-center text-neutral-400 text-xs flex md:flex-row flex-col justify-center items-center mb-4 md:mb-0">
          <span className="text-2xl font-semibold  text-indigo-500">
            <Link to="/cart">Shopping Cart</Link>
          </span>{" "}
          <span className="text-2xl">
            <MdKeyboardArrowRight />
          </span>{" "}
          <span className="text-2xl font-semibold ">
            <Link to="/checkout">Checkout</Link>
          </span>
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
          {cartItems.length === 0 ? (
            <div className="text-center flex flex-col items-center gap-2 mt-8 text-xl text-zinc-600">
              <h2 className="text-8xl text-neutral-300">
                <svg
                  className="w-64 h-64 mb-3 fill-neutral-300"
                  fill="#000000"
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  width="64px"
                  height="64px"
                  viewBox="704.081 796 200 200"
                  enable-background="new 704.081 796 200 200"
                  xml:space="preserve"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path d="M891.876,977.909l-6.938-125.811h-34.661v-10.157c0-25.333-20.608-45.941-45.94-45.941s-45.94,20.609-45.94,45.941v10.157 h-36.161l-5.969,126.355l-0.006,0.219c-0.049,4.547,1.758,9.01,4.955,12.239c3.198,3.233,7.641,5.089,12.19,5.089h141.351 c4.688,0,9.228-1.953,12.453-5.36C890.434,987.233,892.135,982.593,891.876,977.909z M770.379,841.941 c0-18.725,15.233-33.959,33.958-33.959c18.724,0,33.958,15.234,33.958,33.959v10.157h-67.917V841.941z M878.507,982.402 c-0.973,1.026-2.339,1.615-3.751,1.615H733.405c-1.37,0-2.707-0.558-3.672-1.534c-0.942-0.95-1.483-2.257-1.492-3.597l5.423-114.806 h24.731v15.173c0,3.309,2.682,5.991,5.991,5.991c3.309,0,5.991-2.682,5.991-5.991v-15.173h67.917v15.173 c0,3.309,2.682,5.991,5.991,5.991c3.309,0,5.99-2.682,5.99-5.991v-15.173h23.321l6.313,114.49 C879.99,979.98,879.478,981.377,878.507,982.402z"></path>{" "}
                  </g>
                </svg>
              </h2>
              <p className="text-sm font-semibold text-neutral-500">
                {" "}
                No products added to the cart
              </p>
              <span>
                <Link
                  to="/shop"
                  className="uppercase bg-neutral-800 px-7 py-3 block text-white text-sm mt-3"
                >
                  Go Shopping
                </Link>
              </span>
            </div>
          ) : (
            cartItems.map((item) => (
              <div className="flex mt-8">
                <ul className="flex justify-around items-center md:flex-row flex-col gap-2 w-full wishlist md:px-0 px-3 md:py-0 py-8">
                  <li className="w-full flex-[2] md:text-md text-sm md:text-left text-center flex md:flex-row flex-col items-center md:gap-2 gap-4">
                    <span className=" relative">
                      <span
                        className="absolute -right-1 -top-2 cursor-pointer rounded-full z-[99999] p-[2px] text-sm"
                        style={{ boxShadow: "0 2px 6px 0 rgba(0,0,0,0.4)" }}
                        onClick={() =>
                          dispatch(removeFromCart({ id: item.id }))
                        }
                      >
                        <IoClose />
                      </span>
                      <img src={item.image} className="max-w-16" alt="" />
                    </span>
                    {item.name}
                  </li>
                  <li className="w-full flex-1 md:text-left md:text-md text-sm text-center text-neutral-500">
                    ${item.price.toFixed(2)}
                  </li>
                  <li className="flex gap-2 w-full flex-1 items-center md:justify-normal justify-center px-1 leading-7 ">
                    <span className="border-[1px] border-zinc-200">
                      <span
                        className="border-zinc-200 border-r-[1px]  p-[5px] cursor-pointer"
                        onClick={() =>
                          dispatch(decreaseQuantity({ id: item.id }))
                        }
                        style={{ display: "ruby" }}
                      >
                        <HiMiniMinus />
                      </span>
                      <span className="px-[6px]">{item.quantity}</span>
                      <span
                        className="border-zinc-200 border-l-[1px] p-[5px] cursor-pointer ruby"
                        onClick={() =>
                          dispatch(increaseQuantity({ id: item.id }))
                        }
                        style={{ display: "ruby" }}
                      >
                        <HiMiniPlus />
                      </span>
                    </span>
                  </li>
                  <li className="w-full flex-1 md:text-left text-center">
                    <span className="  md:w-auto w-full uppercase md:text-md text-sm ">
                      ${(item.price * item.quantity).toFixed(2)}
                    </span>
                  </li>
                </ul>
              </div>
            ))
          )}
        </div>
        <div className="md:w-1/3 w-full text-left p-7 border-2 border-neutral-200">
          <h4 className="uppercase font-semibold mb-6 text-zinc-800">
            Cart Totals
          </h4>
          <div className="flex justify-between border-b-[1px] border-neutral-300 pb-3 mb-3">
            <h5 className=" text-zinc-800 text-sm font-semibold">Subtotal</h5>
            <span className="font-light text-neutral-500 text-sm">
              ${subtotal.toFixed(2)}
            </span>
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
            <span className="text-xl font-semibold text-zinc-800">
              ${subtotal.toFixed(2)}
            </span>
          </div>
          <Link to="/checkout">
            <button className="mt-5 bg-zinc-800 text-white py-3 w-full uppercase font-semibold">
              Proceed To Checkout
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
