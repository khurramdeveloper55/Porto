import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { FaCcPaypal, FaCcVisa, FaGooglePay, FaStar } from "react-icons/fa";
import { FiHeart } from "react-icons/fi";
import { IoMdHome } from "react-icons/io";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { fetchProductDetails } from "../../services/apiProductDetails";
import ProductSlider from "../ProductSlider";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../services/cartSlice";
import { TiTick } from "react-icons/ti";
import { addToWishlist } from "../../services/wishlistSlice";

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
    return <div>Loading...</div>;
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
      <div className="text-left text-neutral-400 text-xs flex items-center mb-4">
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
      <div className="flex md:flex-row flex-col gap-6">
        <div className="md:w-1/2 w-full">
          <ProductSlider />
        </div>

        <div className="md:w-1/2 w-full">
          <div className="text-left">
            <h2 className="text-3xl font-bold text-zinc-800">{product.name}</h2>
            <div className="flex items-center gap-4 mb-4">
              <span className="flex gap-[1px]">
                <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
              </span>{" "}
              <span>3 customer reviews</span> <span>Add a review</span>
            </div>
            <div>
              <h3 className="text-2xl font-medium text-zinc-800">
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
                  <p>Loading...</p>
                )}
              </h3>
            </div>
            <p className="text-neutral-500 my-4">
              Enhance your Galaxy A35 5G experience with the sleek and stylish
              Galaxy A35 5G Silicone Case. This premium accessory is designed to
              provide superior protection while maintaining the elegant look of
              your smartphone.
            </p>
            <p className="text-neutral-500 text-sm">SKU: 1234567811</p>
            <p className="text-neutral-500 text-sm">
              Category: <span className="uppercase">{product.category}</span>
            </p>
            <div className="bg-indigo-50 w-full my-4 rounded-lg text-center py-8">
              <span>Color:</span>
              <div className="flex gap-2 mt-2 mb-5 justify-center">
                {parsedColors?.map((color, index) => (
                  <span
                    key={index}
                    className={`w-5 h-5 rounded-full  inline-block cursor-pointer `}
                    style={{ backgroundColor: color.name }}
                    onClick={() => handleSelectedColor(product.id, color)}
                  ></span>
                ))}
              </div>
              {selectedColor[product.id] && (
                <span>
                  {selectedColor[product.id]?.price
                    ? `$${parseFloat(selectedColor[product.id].price).toFixed(
                        2
                      )}`
                    : "Select a color"}
                </span>
              )}
              <div className="flex justify-center mt-2 mb-4">
                <button className="bg-white w-32 h-12 px-4 rounded-full flex items-center justify-between">
                  <span
                    onClick={() =>
                      setQuantity((prev) => (prev > 1 ? prev - 1 : 1))
                    }
                  >
                    -
                  </span>
                  <span>{quantity}</span>
                  <span
                    onClick={() =>
                      setQuantity((prev) => (prev > 0 ? prev + 1 : 1))
                    }
                  >
                    +
                  </span>
                </button>
              </div>
              <div className="mb-4">
                <button
                  className={`px-16 py-4 bg-zinc-800 ${
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
                      ADDED TO CART{" "}
                      <span className="text-xl">
                        <TiTick />
                      </span>
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
                  <span className="text-lg">
                    <FiHeart />
                  </span>
                  {isInWishlist ? "Browse Wishlist" : "Add to Wishlist"}
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
