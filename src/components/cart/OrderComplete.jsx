import React from "react";

export default function OrderComplete() {
  return (
    <>
      <div>
        <h2 className="text-xl font-semibold mt-10 border-2 py-6 mb-6 border-emerald-500 text-zinc-800">
          Thank you. Your order has been received.
        </h2>
      </div>
      <div className="flex justify-around mb-8 md:gap-0 gap-4 md:flex-row flex-col">
        <span className="text-sm text-neutral-500 font-light leading-6">
          Order Number <br />{" "}
          <span className="font-bold text-zinc-800">5571</span>
        </span>
        <span className="text-sm text-neutral-500 font-light leading-6">
          Status <br /> <span className="font-bold text-zinc-800">On Hold</span>
        </span>
        <span className="text-sm text-neutral-500 font-light leading-6">
          Date <br />{" "}
          <span className="font-bold text-zinc-800">February 5, 2025</span>
        </span>
        <span className="text-sm text-neutral-500 font-light leading-6">
          Total <br /> <span className="font-bold text-zinc-800">$41.00</span>
        </span>
        <span className="text-sm text-neutral-500 font-light leading-6">
          Payment Method: <br />{" "}
          <span className="font-bold text-zinc-800">Direct bank transfer</span>
        </span>
      </div>
      <div className="border-2 p-8 border-neutral-300">
        <h3 className="text-lg font-semibold text-left text-zinc-800">
          Your order
        </h3>
        <h3 className="my-4 uppercase text-md pb-3 text-left border-b-[1px] border-b-neutral-300 font-semibold text-zinc-800">
          Product
        </h3>
        <div className="flex justify-between text-zinc-800 font-semibold mb-6">
          <div className="text-left pr-2">
            <span>Galaxy S24 Ultra S Pen - Black × 11</span>
          </div>
          <div className="text-right">
            <span>$33.00</span>
          </div>
        </div>
        <div className="flex justify-between pb-3 mb-3 font-normal border-b-[1px] border-b-neutral-300 text-neutral-500 ">
          <div>
            <span className="text-zinc-800">Subtotal:</span>
          </div>
          <div>
            <span>$33.00</span>
          </div>
        </div>
        <div className="flex justify-between pb-3 mb-3 font-normal border-b-[1px] border-b-neutral-300 text-neutral-500 ">
          <div>
            <span className="text-zinc-800">Shipping:</span>
          </div>
          <div>
            <span>Flat rate</span>
          </div>
        </div>
        <div className="flex justify-between pb-3 mb-3 font-normal border-b-[1px] border-b-neutral-300 text-neutral-500 ">
          <div className=" text-left">
            <span className="text-zinc-800">Payment method:</span>
          </div>
          <div className="text-right">
            <span>Direct bank transfer</span>
          </div>
        </div>
        <div className="flex justify-between text-zinc-800 font-semibold">
          <div>
            <span>Total:</span>
          </div>
          <div>
            <span className="text-2xl">$41.00</span>
          </div>
        </div>
      </div>
    </>
  );
}
