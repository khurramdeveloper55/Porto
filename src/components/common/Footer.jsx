import React from "react";

export default function Footer() {
  return (
    <div className="flex md:flex-row flex-col gap-8 md:gap-6 text-left mt-16 items-start justify-between">
      <div>
        <img src="images/footer-logo.png" className="w-24 mb-5" alt="" />
        <p className="text-neutral-500 font-medium text-sm">
          Address: 1234 Street, Suite 500, New York, NY
        </p>
        <p className="underline text-sm">Get Directions</p>
        <p className="mt-4 text-sm text-neutral-500">
          Email: <span className="text-zinc-800">you@porto.com</span>
        </p>
        <p className="mt-4 text-sm text-neutral-500">
          Phone: <span className="text-zinc-800">123 456 7890</span>
        </p>
      </div>
      <div>
        <h3 className="text-xl font-semibold text-zinc-800 mb-3">Company</h3>
        <p className="text-neutral-600 text-sm mb-2">About Us</p>
        <p className="text-neutral-600 text-sm mb-2">Shop</p>
        <p className="text-neutral-600 text-sm mb-2">Contact Us</p>
        <p className="text-neutral-600 text-sm mb-2">Blog</p>
      </div>
      <div>
        <h3 className="text-xl font-semibold text-zinc-800 mb-3">Support</h3>
        <p className="text-neutral-600 text-sm mb-2">Help & FAQ's</p>
        <p className="text-neutral-600 text-sm mb-2">Login / Register</p>
        <p className="text-neutral-600 text-sm mb-2">Track Your Order</p>
        <p className="text-neutral-600 text-sm mb-2">Shipping & Returns</p>
      </div>
      <div>
        <h3 className="text-xl font-semibold text-zinc-800 mb-3">
          Subscribe to Our Newsletter
        </h3>
        <div className="inline">
          <form action="" className="inline">
            <span className="relative">
              <input
                type="text"
                placeholder="Email Address..."
                className="border-neutral-200 placeholder:text-sm  focus-visible:outline-0 placeholder:font-light border-solid rounded-3xl inline shadow-sm border py-2 pl-3 pr-32"
              />
              <span className="absolute right-2 -top-[4px] bg-zinc-800 text-white rounded-full text-sm px-2 py-1">
                Subscribe
              </span>
            </span>
          </form>
        </div>
        <p className="mt-2 text-sm text-neutral-500">
          By subscribing you agree to our{" "}
          <span className="underline">terms of use</span> and{" "}
          <span className="underline">privacy policy</span>
        </p>
      </div>
    </div>
  );
}
