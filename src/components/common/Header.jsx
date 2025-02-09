import React, { useEffect, useRef, useState } from "react";
import { IoIosSearch, IoMdHeartEmpty } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { SlUser } from "react-icons/sl";
import { BiShoppingBag } from "react-icons/bi";
import CartSidebar from "../cart/CartSidebar";
import SideMenu from "./SideMenu";
import { searchProducts } from "../../api/apiSearch";

export default function Header() {
  const [showCart, setShowCart] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const cartItems = useSelector((state) => state.cart.items);
  const user = useSelector((state) => state.user.user);
  const totalQuantity = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const searchRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setSearchTerm("");
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (searchTerm.trim() !== "") {
      const fetchData = async () => {
        try {
          const results = await searchProducts(searchTerm);
          setSearchResults(results);
        } catch (error) {
          console.error("Error fetching search results:", error.message);
        }
      };
      fetchData();
    } else {
      setSearchResults([]);
    }
  }, [searchTerm]);

  return (
    <div className="container mx-auto mb-10">
      <div
        className="flex justify-between items-center mb-[55px] lg:mb-0 relative
      "
      >
        <div className="lg:inline inline-flex items-center gap-4">
          <span
            className="lg:hidden inline sm:text-2xl text-xl bg-indigo-50 sm:p-3 p-2 rounded-md"
            onClick={() => setShowMenu((show) => !show)}
          >
            <RxHamburgerMenu />
          </span>
          {showMenu && (
            <SideMenu showMenu={showMenu} setShowMenu={setShowMenu} />
          )}
          <Link to="/">
            <img
              src="images/logo.png"
              className="sm:w-36  w-24  inline"
              alt="Porto Logo"
            />
          </Link>
        </div>
        <div
          className="inline lg:w-auto w-full lg:relative absolute lg:top-0 top-[65px] "
          ref={searchRef}
        >
          <form action="" className="inline">
            <span className="relative ">
              <input
                type="text"
                placeholder="Search for products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className=" placeholder:text-sm focus-visible:outline-0 placeholder:text-neutral-400 placeholder:font-light w-full lg:w-96 border-neutral-200 border-solid rounded-3xl inline shadow-custom border py-3 pl-3 "
              />
              <span className="absolute right-3 -top-[1.5px] text-2xl text-neutral-800">
                <IoIosSearch />
              </span>
            </span>
          </form>
          {searchTerm.trim() !== "" && searchResults.length > 0 && (
            <div
              className="absolute bg-white w-full lg:w-80 h-80 overflow-scroll cart-overflow mt-2 z-10"
              style={{ boxShadow: "0 10px 20px 5px #0000000f" }}
            >
              {searchResults.map((product) => (
                <Link
                  to={`/product/${encodeURIComponent(
                    product.name.toLowerCase().replace(/\s+/g, "-")
                  )}`}
                  state={{ productId: product.id }}
                >
                  <div className="flex md:flex-row flex-col items-center hover:bg-neutral-100 px-4 gap-2 justify-around py-2 border-b-[1px] border-neutral-200">
                    <div>
                      <img
                        src={product.image}
                        alt=""
                        className="max-w-12 rounded-full"
                      />
                    </div>
                    <div className="text-neutral-500 text-sm md:text-left text-center">
                      {product.name}
                    </div>
                    <div className="text-neutral-500 text-sm whitespace-nowrap">
                      {`$${Math.min(
                        ...product.colors.map(
                          (color) => JSON.parse(color).price
                        )
                      ).toFixed(2)} - $${Math.max(
                        ...product.colors.map(
                          (color) => JSON.parse(color).price
                        )
                      ).toFixed(2)}`}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
        <div className="flex justify-between sm:gap-4 gap-2 ">
          <span className="items-center gap-2 hidden sm:flex">
            <Link to="/wishlist">
              <span className="flex items-center gap-2 group">
                <span className="text-3xl bg-indigo-50 p-1 inline-block rounded-md group-hover:-translate-y-1 group-hover:transition-translate duration-300">
                  <IoMdHeartEmpty />
                </span>{" "}
                <span className="hidden lg:inline-block  ">Wishlist</span>
              </span>
            </Link>
          </span>
          <span className="flex items-center">
            <Link to={user ? "/user" : "/login"}>
              <span className="flex items-center gap-2 group cursor-pointer">
                <span className="sm:text-2xl text-xl bg-indigo-50 sm:p-2 p-2 inline-block rounded-md group-hover:-translate-y-1 group-hover:transition-translate duration-300">
                  <SlUser />
                </span>
                <span className="hidden lg:inline">My Account</span>
              </span>
            </Link>
          </span>

          <span
            className="flex items-center relative cursor-pointer"
            onClick={() => setShowCart((show) => !show)}
          >
            <span className="lg:text-3xl group sm:text-2xl text-xl bg-indigo-50 duration-300  hover:text-indigo-600 lg:p-3 sm:p-3 p-2 rounded-md">
              <svg
                className="w-8 h-8 group-hover:fill-indigo-600"
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
            </span>
            <span className="absolute lg:top-2 sm:top-2 top-1 lg:right-2 sm:right-2 right-1 rounded-full text-[10px] bg-indigo-600 text-white w-4 h-4 leading-4 radius-md">
              {totalQuantity}
            </span>
          </span>
          {showCart && (
            <CartSidebar showCart={showCart} setShowCart={setShowCart} />
          )}
        </div>
      </div>
    </div>
  );
}
