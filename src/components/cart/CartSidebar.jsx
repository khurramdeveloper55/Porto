import { useDispatch, useSelector } from "react-redux";
import {
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
} from "../../redux/slices/cartSlice";
import { useEffect, useState } from "react";
import { GrClose } from "react-icons/gr";
import { Link } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import { HiMiniMinus, HiMiniPlus } from "react-icons/hi2";

export default function CartSidebar({ showCart, setShowCart }) {
  const cartItems = useSelector((state) => state.cart.items);
  const subtotal = useSelector((state) => state.cart.subtotal);
  const dispatch = useDispatch();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    if (showCart) {
      setIsTransitioning(true);
    } else {
      setTimeout(() => setIsTransitioning(false), 500);
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [showCart]);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setShowCart(false);
    }, 500);
  };

  return (
    <>
      <div
        onClick={handleClose}
        className={`fixed inset-0 bg-black bg-opacity-40 z-[9998] transition-opacity duration-500 ${
          isTransitioning && showCart && !isClosing
            ? "opacity-100"
            : "opacity-0 pointer-events-none"
        }`}
      ></div>
      <div
        className={`fixed w-72 right-0 top-0 h-full z-[99999999] bg-white py-10 px-6 transform transition-transform duration-500 ease-in-out ${
          isTransitioning && showCart && !isClosing
            ? "translate-x-0"
            : "translate-x-full"
        }`}
      >
        <span
          className="absolute -left-8 top-4 cursor-pointer text-white text-lg"
          onClick={handleClose}
        >
          <GrClose />
        </span>
        <div className="flex h-full flex-col justify-between">
          <div>
            <div className="flex justify-between text-sm font-medium text-zinc-800 border-b-[1px] pb-4 border-b-neutral-300">
              <span>
                {cartItems.length} {cartItems.length === 1 ? "ITEM" : "ITEMS"}
              </span>{" "}
              <Link to="/cart">
                <span className="hover:underline">VIEW CART</span>
              </Link>
            </div>
            <div className="overflow-y-scroll h-[335px] cart-overflow">
              {cartItems === 0 ? (
                <p>No items in the cart</p>
              ) : (
                cartItems.map((item, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center gap-2 my-4 relative"
                  >
                    <span
                      className="absolute right-[2px] -top-2 cursor-pointer rounded-full z-[99999] p-[2px] text-sm"
                      onClick={() => dispatch(removeFromCart({ id: item.id }))}
                      style={{ boxShadow: "0 2px 6px 0 rgba(0,0,0,0.4)" }}
                    >
                      <IoClose />
                    </span>
                    <div>
                      <h5 className="text-left text-sm">{item.name}</h5>
                      <div className="flex gap-2 items-center mt-1">
                        <div className="flex gap-2 items-center px-1 leading-7 border-zinc-200 border-[1px]">
                          <span
                            className="border-zinc-200 border-r-[1px] pr-1 cursor-pointer"
                            onClick={() =>
                              dispatch(decreaseQuantity({ id: item.id }))
                            }
                            style={{ display: "ruby" }}
                          >
                            <HiMiniMinus />
                          </span>
                          <span className="px-[2px]">{item.quantity}</span>
                          <span
                            className="border-zinc-200 border-l-[1px] pl-1 cursor-pointer ruby"
                            onClick={() =>
                              dispatch(increaseQuantity({ id: item.id }))
                            }
                            style={{ display: "ruby" }}
                          >
                            <HiMiniPlus />
                          </span>
                        </div>
                        <span className="text-sm flex items-center gap-[2px] text-neutral-500 font-light">
                          <span className="text-[10px]">
                            <IoClose />
                          </span>{" "}
                          ${item.price.toFixed(2)}
                        </span>
                      </div>
                    </div>
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 object-cover rounded-md right-2 relative"
                    />
                  </div>
                ))
              )}
            </div>
          </div>
          <div className="flex flex-col gap-2 ">
            <div className="flex justify-between mb-4 items-center">
              <span className="uppercase text-[12px] font-bold">Subtotal:</span>
              <span className="text-sm font-bold">${subtotal.toFixed(2)}</span>
            </div>
            <Link to="/cart">
              <button className="bg-neutral-200 w-full text-[12px] py-3 uppercase hover:bg-neutral-100">
                View Cart
              </button>
            </Link>
            <Link to="/checkout">
              <button className="bg-zinc-800 w-full text-white py-3 uppercase text-[12px] hover:bg-zinc-700">
                Checkout
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
