import React from "react";

export default function CartItems() {
  return (
    <div className="fixed w-64 right-0 top-0 h-full z-[9999] bg-white py-10 px-8">
      <div className="flex justify-between text-sm font-medium text-zinc-800 border-b-[1px] pb-3 border-b-neutral-300">
        <span>0 ITEMS</span> <span>VIEW CART</span>
      </div>
    </div>
  );
}
