import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { FaCcPaypal, FaCcVisa, FaGooglePay, FaStar } from "react-icons/fa";
import { FiHeart } from "react-icons/fi";
import { IoMdHome } from "react-icons/io";
import { MdKeyboardArrowRight, MdOutlineDone } from "react-icons/md";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import ProductDetailsSlider from "./ProductDetailsSlider";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductDetails } from "../api/productDetails";
import { addToWishlist } from "../redux/slices/wishlistSlice";
import { addToCart } from "../redux/slices/cartSlice";
import { HiMiniMinus, HiMiniPlus } from "react-icons/hi2";
import Loader from "../components/common/Loader";

export default function ProductDetails() {
  const { productId } = useParams();
  const navigate = useNavigate();
  const [selectedColor, setSelectedColor] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [isAdded, setIsAdded] = useState(false);
  const isDisabled = !selectedColor[productId];
  const wishlist = useSelector((state) => state.wishlist.items);

  const dispatch = useDispatch();
  const {
    data: product,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["products", productId],
    queryFn: () => fetchProductDetails(productId),
    enabled: !!productId,
  });

  // Handle loading state
  if (isLoading) {
    return <Loader />;
  }

  // Handle error state
  if (error) {
    return <div>Error loading product details: {error.message}</div>;
  }

  const isInWishlist = wishlist.some((item) => item.id === product.id);

  const handleSelectedColor = (productID, color) => {
    setSelectedColor((prev) => ({
      ...prev,
      [productID]: color,
    }));
  };

  const handleClearColor = () => {
    setSelectedColor((prev) => ({
      ...prev,
      [product.id]: null,
    }));
  };

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        id: product.id,
        name: product.name,
        price: parseFloat(selectedColor[product.id].price),
        color: selectedColor[product.id].name,
        quantity: quantity,
        image: product.image,
      })
    );
    setIsAdded(true);
  };

  const handleAddToWishlist = () => {
    if (!isInWishlist) {
      dispatch(
        addToWishlist({
          id: product.id,
          name: product.name,
          price: product.colors,
          quantity: quantity,
          image: product.image,
        })
      );
    } else {
      navigate("/wishlist");
    }
  };

  const parsedColors = product?.colors?.map((color) => JSON.parse(color));
  return (
    <>
      <div className="text-left text-neutral-400 text-xs flex md:flex-row flex-col items-center mb-4">
        <span className="text-lg">
          <IoMdHome />
        </span>{" "}
        <span className="text-lg">
          <MdKeyboardArrowRight />
        </span>{" "}
        SHOP{" "}
        <span className="text-lg">
          <MdKeyboardArrowRight />
        </span>
        <span className="uppercase">{product.category}</span>
        <span className="text-lg">
          <MdKeyboardArrowRight />
        </span>{" "}
        <span className="uppercase">{product.name}</span>
      </div>
      <h3 className="md:text-md text-[12px]  text-left mb-2 flex  gap-2 items-center">
        {isAdded && (
          <>
            <span className="text-emerald-500 inline text-xl font-bold">
              <MdOutlineDone />
            </span>
            <span className="font-bold">
              {" "}
              {quantity} x "{product.name}"
            </span>{" "}
            have been added to your cart
          </>
        )}
      </h3>
      <div className="flex md:flex-row flex-col gap-6">
        <div className="md:w-1/2 w-full">
          <ProductDetailsSlider />
        </div>

        <div className="md:w-1/2 w-full">
          <div className="text-left">
            <h2 className="text-3xl font-bold text-zinc-800 mb-1">
              {product.name}
            </h2>
            <div className="flex items-center gap-4 mb-4">
              <span className="flex gap-[1px] text-red-400">
                <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
              </span>{" "}
              <span className="text-neutral-500 text-sm">
                3 customer reviews
              </span>{" "}
              <span className="text-neutral-500">|</span>
              <span className="text-neutral-500 text-sm">Add a review</span>
            </div>
            <div>
              <h3 className="text-2xl font-medium text-zinc-700">
                {product?.colors?.length > 0 ? (
                  <>
                    $
                    {Math.min(
                      ...product.colors.map((color) => JSON.parse(color).price)
                    ).toFixed(2)}{" "}
                    - $
                    {Math.max(
                      ...product.colors.map((color) => JSON.parse(color).price)
                    ).toFixed(2)}
                  </>
                ) : (
                  <Loader />
                )}
              </h3>
            </div>
            <p className="text-neutral-500 my-4">
              Enhance your Galaxy A35 5G experience with the sleek and stylish
              Galaxy A35 5G Silicone Case. This premium accessory is designed to
              provide superior protection while maintaining the elegant look of
              your smartphone.
            </p>
            <p className="text-neutral-500 text-[12px]">
              SKU: <span className="text-black font-semibold">1234567811</span>
            </p>
            <p className="text-neutral-500 text-[12px]">
              Category:{" "}
              <span className="uppercase text-black font-semibold">
                {product.category}
              </span>
            </p>
            <p className="text-neutral-500 text-[12px]">
              Tag:{" "}
              <span className="uppercase text-black font-semibold">Bundle</span>
            </p>
            <div className="bg-indigo-50 w-full my-4 rounded-lg text-center py-8">
              <span>Color:</span>
              <div className="flex gap-2 mt-2 mb-5 justify-center relative">
                {parsedColors?.map((color, index) => (
                  <>
                    <span
                      key={index}
                      className={`w-6 h-6 rounded-full  inline-block cursor-pointer ${
                        !isAdded &&
                        selectedColor[product.id]?.name === color.name
                          ? "outline outline-[2px] border-2 border-neutral-100 outline-black"
                          : ""
                      } `}
                      style={{ backgroundColor: color.name }}
                      onClick={() => handleSelectedColor(product.id, color)}
                    ></span>
                    {selectedColor[product.id] &&
                      !isAdded &&
                      selectedColor[product.id].name === color.name && (
                        <span
                          className="absolute top-[30px] translate-x-[-30px] bg-zinc-800 text-white uppercase text-[12px] px-2 py-1 font-light cursor-pointer inline-block"
                          onClick={handleClearColor}
                        >
                          Clear
                        </span>
                      )}
                  </>
                ))}
              </div>
              {selectedColor[product.id] && !isAdded && (
                <span className="mt-[20px] inline-block">
                  {selectedColor[product.id]?.price
                    ? `$${parseFloat(selectedColor[product.id].price).toFixed(
                        2
                      )}`
                    : ""}
                </span>
              )}
              <div className="flex justify-center mt-2 mb-4">
                <button className="bg-white w-32 h-12 px-4 rounded-full flex items-center justify-between">
                  <span
                    onClick={() =>
                      setQuantity((prev) => (prev > 1 ? prev - 1 : 1))
                    }
                    className="text-xl text-black"
                  >
                    <HiMiniMinus />
                  </span>
                  <span>{quantity}</span>
                  <span
                    onClick={() =>
                      setQuantity((prev) => (prev > 0 ? prev + 1 : 1))
                    }
                    className="text-xl text-black"
                  >
                    <HiMiniPlus />
                  </span>
                </button>
              </div>
              <div className="mb-4">
                <button
                  className={`px-16 py-4 bg-zinc-800 hover:bg-indigo-500 ${
                    isDisabled || isAdded
                      ? "cursor-not-allowed opacity-50"
                      : " cursor-pointer opacity-100"
                  } text-sm text-white rounded-full ${
                    isAdded || "bg-indigo-500"
                  } `}
                  onClick={handleAddToCart}
                  disabled={isDisabled || isAdded}
                >
                  {isAdded ? (
                    <span className="flex gap-2 items-center">
                      ADDED TO CART
                    </span>
                  ) : (
                    "ADD TO CART"
                  )}
                </button>
              </div>
              <div className="flex justify-center my-6">
                <button
                  className="text-sm flex gap-1 items-center"
                  onClick={handleAddToWishlist}
                >
                  {isInWishlist ? (
                    <span className="text-sm">Browse Wishlist</span> // Only the text when in wishlist
                  ) : (
                    <>
                      <span className="text-lg">
                        <FiHeart />
                      </span>
                      <span>Add to Wishlist</span>
                    </>
                  )}
                </button>
              </div>
              <div className="flex md:flex-row flex-col items-center justify-center gap-2 text-neutral-500">
                Supported payment types:{" "}
                <span className="text-4xl flex gap-2">
                  <FaCcVisa /> <FaCcPaypal /> <FaGooglePay />
                </span>
              </div>
            </div>
            <div className="mt-4">
              <span className="text-neutral-500">
                Order now and your order ships by{" "}
                <span className="text-black">Tue, Mar 12</span>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex lg:flex-row flex-col text-left gap-8 my-16">
        <div className="lg:w-1/2 w-full">
          <h3 className="text-3xl font-bold mb-3">Overview</h3>
          <p className="text-neutral-500 mb-6">
            The Galaxy A35 5G Silicone Case is the perfect blend of style and
            functionality. It not only enhances the look of your smartphone but
            also provides robust protection against daily wear and tear. Whether
            you’re at home, at work, or on the go, this case ensures your Galaxy
            A35 5G remains safe and stylish.
          </p>
          <p className="text-neutral-500">
            Perfect Fit: Custom-made for the Galaxy A35 5G, ensuring a snug and
            secure fit. Precise cutouts allow easy access to all buttons, ports,
            and cameras without removing the case. Premium Silicone Material:
            Crafted from high-quality silicone, this case offers a soft, smooth
            texture that feels great in your hand. It’s also flexible yet
            durable, providing long-lasting protection.
          </p>
        </div>
        <div className="lg:w-1/2 w-full">
          <h3 className="text-3xl font-bold mb-3">Details</h3>
          <div className="bg-neutral-100 rounded-sm text-sm pl-5 py-2">
            SPECIFICATIONS
          </div>
          <div className="py-2 text-sm border-b-neutral-100 border-b-[1px] border-solid flex justify-between">
            <span className="text-neutral-500">Colors</span>
            <span>Multiple color options available</span>
          </div>
          <div className="py-2 text-sm border-b-neutral-100 border-b-[1px] border-solid flex justify-between">
            <span className="text-neutral-500">Compatibility</span>
            <span>Galaxy A35 5G</span>
          </div>
          <div className="py-2 text-sm border-b-neutral-100 border-b-[1px] border-solid flex justify-between">
            <span className="text-neutral-500">Dimensions</span>
            <span>Precisely tailored to fit the Galaxy A35 5G</span>
          </div>
          <div className="py-2 text-sm border-b-neutral-100 border-b-[1px] border-solid flex justify-between">
            <span className="text-neutral-500">Material</span>
            <span>High-quality silicone</span>
          </div>
          <div className="py-2 text-sm border-b-neutral-100 border-b-[1px] border-solid flex justify-between">
            <span className="text-neutral-500">Weight</span>
            <span>Lightweight design for everyday use</span>
          </div>
        </div>
      </div>
    </>
  );
}
