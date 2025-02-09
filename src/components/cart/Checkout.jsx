import React from "react";
import { HiMiniMinus, HiMiniPlus } from "react-icons/hi2";
import { IoClose } from "react-icons/io5";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
} from "../../redux/slices/cartSlice";
import { useForm } from "react-hook-form";

export default function Checkout() {
  const cartItems = useSelector((state) => state.cart.items);
  const subtotal = useSelector((state) => state.cart.subtotal);
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (e, data) => {
    e.preventDefault();
    console.log("Order placed successfully!", data);
  };

  return (
    <>
      <div className="flex justify-center flex-col items-center py-6 ">
        <div className="text-center text-neutral-400 text-xs flex md:flex-row flex-col justify-center items-center mb-4 md:mb-0">
          <span className="text-2xl font-semibold ">
            <Link to="/cart">Shopping Cart</Link>
          </span>{" "}
          <span className="text-2xl">
            <MdKeyboardArrowRight />
          </span>{" "}
          <span className="text-2xl font-semibold text-indigo-500 ">
            <Link to="/">Checkout</Link>
          </span>
          <span className="text-2xl">
            <MdKeyboardArrowRight />
          </span>{" "}
          <span className="text-2xl font-semibold ">Order Complete</span>
        </div>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mb-16 flex md:flex-row flex-col gap-6"
      >
        <div className=" md:w-3/5 w-full">
          <h2 className="text-2xl text-left font-bold text-zinc-800">
            Billing Details
          </h2>

          <div className="mt-4">
            <div className="md:flex inline-block w-full justify-between gap-3">
              <div className="flex flex-col md:w-1/2 w-full text-left gap-1">
                <label htmlFor="" className="text-neutral-500">
                  First name *
                </label>
                <input
                  {...register("firstName", {
                    required: "First name is required",
                  })}
                  type="text"
                  className="border-[1px] border-neutral-200 py-2"
                />
                {errors.firstName && (
                  <span className="text-red-500 text-sm">
                    {errors.firstName.message}
                  </span>
                )}
              </div>
              <div className="flex flex-col md:w-1/2 w-full text-left gap-1">
                <label htmlFor="" className="text-neutral-500">
                  Last name *
                </label>
                <input
                  {...register("lastName", {
                    required: "Last name is required",
                  })}
                  type="text"
                  className="border-[1px] border-neutral-200 py-2"
                />
                {errors.lastName && (
                  <span className="text-red-500 text-sm">
                    {errors.lastName.message}
                  </span>
                )}
              </div>
            </div>
            <div className="w-full flex flex-col gap-1 mt-3 text-left">
              <label htmlFor="" className="text-neutral-500">
                Company name (optional)
              </label>
              <input
                type="text"
                className="border-[1px] border-neutral-200 py-2"
              />
            </div>
            <div className="w-full flex flex-col gap-1 mt-3 text-left">
              <label htmlFor="" className="text-neutral-500">
                Country / Region *
              </label>
              <input
                type="text"
                {...register("country", {
                  required: "Country / Region is required",
                })}
                className="border-[1px] border-neutral-200 py-2"
              />
              {errors.country && (
                <span className="text-red-500 text-sm">
                  {errors.country.message}
                </span>
              )}
            </div>
            <div className="w-full flex flex-col gap-1 mt-3 text-left">
              <label htmlFor="" className="text-neutral-500">
                Street address *
              </label>
              <input
                type="text"
                {...register("address", {
                  required: "Street address is required",
                })}
                className="border-[1px] border-neutral-200 py-2"
              />
              {errors.address && (
                <span className="text-red-500 text-sm">
                  {errors.address.message}
                </span>
              )}
            </div>
            <div className="w-full flex flex-col gap-1 mt-3 text-left">
              <label htmlFor="" className="text-neutral-500">
                Town / City *
              </label>
              <input
                type="text"
                {...register("city", {
                  required: "Town / City is required",
                })}
                className="border-[1px] border-neutral-200 py-2"
              />
              {errors.city && (
                <span className="text-red-500 text-sm">
                  {errors.city.message}
                </span>
              )}
            </div>
            <div className="w-full flex flex-col gap-1 mt-3 text-left">
              <label htmlFor="" className="text-neutral-500">
                State *
              </label>
              <input
                type="text"
                {...register("state", {
                  required: "State is required",
                })}
                className="border-[1px] border-neutral-200 py-2"
              />
              {errors.state && (
                <span className="text-red-500 text-sm">
                  {errors.state.message}
                </span>
              )}
            </div>
            <div className="w-full flex flex-col gap-1 mt-3 text-left">
              <label htmlFor="" className="text-neutral-500">
                Zip Code *
              </label>
              <input
                type="text"
                {...register("zipCode", {
                  required: "Zip Code is required",
                })}
                className="border-[1px] border-neutral-200 py-2"
              />
              {errors.zipCode && (
                <span className="text-red-500 text-sm">
                  {errors.zipCode.message}
                </span>
              )}
            </div>
            <div className="w-full flex flex-col gap-1 mt-3 text-left">
              <label htmlFor="" className="text-neutral-500">
                Phone *
              </label>
              <input
                {...register("phone", {
                  required: "Phone is required",
                  pattern: {
                    value: /^[0-9]+$/,
                    message: "Please enter a valid phone number",
                  },
                })}
                type="text"
                className="border-[1px] border-neutral-200 py-2"
              />
              {errors.phone && (
                <span className="text-red-500 text-sm">
                  {errors.phone.message}
                </span>
              )}
            </div>
          </div>
        </div>

        <div className="md:w-2/5 w-full text-left p-7 border-2 border-neutral-200">
          <h2 className="uppercase font-semibold mb-6 text-zinc-800">
            Your Order
          </h2>
          <div>
            <h2 className="uppercase font-semibold text-zinc-800">Product</h2>
            <div className="mt-2 pt-2 border-t-[1px] flex-col flex justify-between mb-10">
              {cartItems.map((item) => (
                <div className="flex mb-6">
                  <div className="flex gap-3 items-center">
                    <img
                      src={item.image}
                      alt=""
                      className="max-w-12 max-h-12"
                    />
                    <div className="flex flex-col items-start justify-between">
                      <h3 className="text-sm">{item.name} </h3>
                      <div className="flex gap-2 items-center px-1 leading-7 border-zinc-200 border-[1px]">
                        <span
                          className="border-zinc-200 border-r-[1px]  p-[2px] cursor-pointer"
                          onClick={() =>
                            dispatch(decreaseQuantity({ id: item.id }))
                          }
                          style={{ display: "ruby" }}
                        >
                          <HiMiniMinus />
                        </span>
                        <span className="px-[2px]">1</span>
                        <span
                          className="border-zinc-200 border-l-[1px] p-[2px] cursor-pointer ruby"
                          onClick={() =>
                            dispatch(increaseQuantity({ id: item.id }))
                          }
                          style={{ display: "ruby" }}
                        >
                          <HiMiniPlus />
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-end justify-between">
                    <span
                      className="cursor-pointer border-[1px] rounded-full z-[99999] p-[2px] text-sm"
                      onClick={() => dispatch(removeFromCart({ id: item.id }))}
                    >
                      <IoClose />
                    </span>
                    <h3>${(item.price * item.quantity).toFixed(2)}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-between border-b-[1px] border-neutral-300 pb-3 mb-3">
            <h5 className=" text-zinc-800 text-sm font-semibold">Subtotal</h5>
            <span className="font-semibold text-zinc-800 text-sm">
              ${subtotal.toFixed(2)}
            </span>
          </div>
          <div>
            <h5 className="text-zinc-800 text-sm font-semibold mb-3">
              Shipping
            </h5>
            <span className="text-sm font-light mb-3 pb-3 block text-neutral-500 border-b-[1px]">
              Flat Rate
            </span>
            <div className="flex justify-between  pb-3 mb-3">
              <h5 className=" text-zinc-800 text-md font-semibold">Total</h5>
              <span className="font-semibold text-zinc-800 text-xl">
                ${subtotal.toFixed(2)}
              </span>
            </div>

            <Link to="/order">
              <button
                type="submit"
                className="mt-5 bg-zinc-800 text-white py-3 w-full uppercase font-semibold"
              >
                Place Order
              </button>
            </Link>
          </div>
        </div>
      </form>
    </>
  );
}
