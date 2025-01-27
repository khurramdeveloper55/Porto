import React from "react";

export default function Footer() {
  return (
    <div className="flex md:flex-row flex-col gap-8 md:gap-6 text-left mt-12 items-start justify-between">
      <div>
        <img src="images/footer-logo.png" className="w-24 mb-3" alt="" />
        <p>Address: 1234 Street, Suite 500, New York, NY</p>
        <p>Get Directions</p>
        <p>Email: email.com</p>
        <p>Phone: 123 456 7890</p>
      </div>
      <div>
        <h3 className="text-2xl font-semibold mb-3">Company</h3>
        <p>About Us</p>
        <p>Shop</p>
        <p>Contact Us</p>
        <p>Blog</p>
      </div>
      <div>
        <h3 className="text-2xl font-semibold mb-3">Support</h3>
        <p>Help & FAQ's</p>
        <p>Login / Register</p>
        <p>Track Your Order</p>
        <p>Shipping & Returns</p>
      </div>
      <div>
        <h3 className="text-2xl font-semibold mb-3">
          Subscribe to Our Newsletter
        </h3>
        <div className="inline">
          <form action="" className="inline">
            <span className="relative">
              <input
                type="text"
                placeholder="Email Address..."
                className="border-neutral-200 border-solid rounded-3xl inline shadow-sm border py-2 pl-3 pr-32"
              />
              <span className="absolute right-4 -top-[6px] bg-zinc-800 text-white rounded-md px-2 py-1">
                Subscribe
              </span>
            </span>
          </form>
        </div>
        <p className="mt-2">
          By subscribing you agree to our terms of use and privacy policy
        </p>
      </div>
    </div>
  );
}
