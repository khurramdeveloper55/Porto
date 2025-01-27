import { useDispatch, useSelector } from "react-redux";
import {
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
} from "../../redux/slices/cartSlice";

export default function CartSidebar({ setShowCart }) {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  return (
    <div className="fixed w-72 right-0 top-0 h-full z-[9999] bg-neutral-100 py-10 px-8">
      <span
        className="absolute right-2 top-2 cursor-pointer"
        onClick={() => setShowCart((show) => !show)}
      >
        X
      </span>
      <div className="flex justify-between text-sm font-medium text-zinc-800 border-b-[1px] pb-3 border-b-neutral-300">
        <span>
          {cartItems.length} {cartItems.length === 1 ? "ITEM" : "ITEMS"}
        </span>{" "}
        <span>VIEW CART</span>
      </div>
      {cartItems === 0 ? (
        <p>No items in the cart</p>
      ) : (
        cartItems.map((item, index) => (
          <div
            key={index}
            className="flex justify-between items-center gap-2 my-4 relative"
          >
            <span
              className="absolute right-2 top-2 cursor-pointer"
              onClick={() => dispatch(removeFromCart({ id: item.id }))}
            >
              X
            </span>
            <div>
              <h5 className="text-left text-sm">{item.name}</h5>
              <div className="flex gap-2 items-center mt-1">
                <div className="flex gap-2 items-center px-2 border-zinc-200 border-[1px]">
                  <span
                    className="border-zinc-200 border-r-[1px] pr-2 cursor-pointer"
                    onClick={() => dispatch(decreaseQuantity({ id: item.id }))}
                  >
                    -
                  </span>
                  <span>{item.quantity}</span>
                  <span
                    className="border-zinc-200 border-l-[1px] pl-2 cursor-pointer"
                    onClick={() => dispatch(increaseQuantity({ id: item.id }))}
                  >
                    +
                  </span>
                </div>
                <span>${item.price}</span>
              </div>
            </div>
            <img
              src={item.image}
              alt={item.name}
              className="w-12 h-12 object-cover"
            />
          </div>
        ))
      )}
    </div>
  );
}
