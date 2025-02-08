import React, { useEffect, useState } from "react";
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
        <div className="inline lg:w-auto w-full lg:relative absolute lg:top-0 top-[65px] ">
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
              className="absolute bg-white w-full lg:w-80 h-80 overflow-scroll cart-overflow mt-2 z-10 px-4"
              style={{ boxShadow: "0 10px 20px 5px #0000000f" }}
            >
              {searchResults.map((product) => (
                <Link key={product.id} to={`/product/${product.id}`}>
                  <div className="flex items-center gap-2 justify-around py-2 border-b-[1px] border-neutral-200">
                    <div>
                      <img
                        src={product.image}
                        alt=""
                        className="w-20 rounded-full"
                      />
                    </div>
                    <div className="text-neutral-500 text-sm text-left">
                      {product.name}
                    </div>
                    <div className="text-neutral-500 text-sm">
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
            <span className="lg:text-3xl sm:text-2xl text-xl bg-indigo-50 duration-300  hover:text-indigo-600 lg:p-3 sm:p-3 p-2 rounded-md">
              <BiShoppingBag />
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
