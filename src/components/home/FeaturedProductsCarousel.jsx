import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { IoMdHeart, IoMdHeartEmpty } from "react-icons/io";
import { getProducts } from "../../api/apiProducts";
import CarouselWithArrows from "../common/CarouselWithArrows";
import { useDispatch, useSelector } from "react-redux";
import {
  addToWishlist,
  removeFromWishlist,
} from "../../redux/slices/wishlistSlice";

export default function FeaturedProductsCarousel() {
  const dispatch = useDispatch();
  const wishlist = useSelector((state) => state.wishlist.items);
  const { data: products, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });
  const [selectedColor, setSelectedColor] = useState({});
  if (!products || products.length === 0) {
    return <p>No products available</p>;
  }

  const handleSelectedColor = (productId, color) => {
    setSelectedColor((prev) => ({
      ...prev,
      [productId]: color,
    }));
  };

  const isInWishlist = (id) => wishlist.some((item) => item.id === id);

  const handleAddToWishlist = (product) => {
    if (isInWishlist(product.id)) {
      dispatch(removeFromWishlist({ id: product.id }));
    } else {
      dispatch(
        addToWishlist({
          id: product.id,
          name: product.name,
          price: product.colors,
          quantity: 1,
          image: product.image,
        })
      );
    }
  };

  return (
    <div className="mt-16">
      <div className="mb-8 flex items-center md:flex-row flex-col justify-between">
        <h2 className="md:text-left text-center md:text-3xl text-2xl font-bold md:mb-0 mb-3  text-zinc-800">
          Hurry Up Deals
        </h2>
        <div className="flex items-center gap-4">
          <h3 className="text-2xl font-medium md:block hidden text-zinc-800">
            Offer ends in:
          </h3>
          <div className="flex gap-2 items-center">
            <div className="bg-neutral-100 py-1 px-2 leading-0">
              <span className="md:text-3xl text-2xl font-semibold">185</span>{" "}
              <br />{" "}
              <span className="font-light md:text-sm text-[12px] text-neutral-500 uppercase">
                Days
              </span>
            </div>
            <span className="md:text-3xl text-2xl text-zinc-800">:</span>
            <div className="bg-neutral-100 py-1 px-2 leading-0">
              <span className="md:text-3xl text-2xl font-semibold">24</span>{" "}
              <br />{" "}
              <span className="font-light md:text-sm text-[12px] text-neutral-500 uppercase">
                Hours
              </span>
            </div>
            <span className="md:text-3xl text-2xl text-zinc-800">:</span>
            <div className="bg-neutral-100 py-1 px-2 leading-0">
              <span className="md:text-3xl text-2xl font-semibold">16</span>{" "}
              <br />{" "}
              <span className="font-light md:text-sm text-[12px] text-neutral-500 uppercase">
                Minutes
              </span>
            </div>
            <span className="md:text-3xl text-2xl text-zinc-800">:</span>
            <div className="bg-neutral-100 py-1 px-2 leading-0">
              <span className="md:text-3xl text-2xl font-semibold">20</span>{" "}
              <br />{" "}
              <span className="font-light md:text-sm text-[12px] text-neutral-500 uppercase">
                Seconds
              </span>
            </div>
          </div>
        </div>
      </div>

      <CarouselWithArrows
        slidesToShow={4}
        breakpoints={[
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows: false,
            },
          },
        ]}
      >
        {products?.map((product) => {
          const parsedColors = product.colors.map((color) => JSON.parse(color));
          return (
            <div className="carousel-item" key={product.id}>
              <div className=" bg-neutral-100 mx-2 rounded-xl overflow-hidden  relative group">
                <div className=" cursor-pointer flex items-center justify-center">
                  <img src={product.image} className="rounded-xl" alt="" />
                  <img
                    src={product.image_alt}
                    className="absolute top-0 left-0 rounded-xl object-cover opacity-0 hover:opacity-100 hover:scale-110 transition-transform duration-700"
                    alt=""
                  />
                </div>
                <div className=" py-3 px-4 ">
                  <div className="flex gap-2 my-2 justify-center">
                    {parsedColors?.map((color, index) => (
                      <span
                        key={index}
                        className={`w-5 h-5 rounded-full  inline-block cursor-pointer ${
                          selectedColor[product.id]?.name === color.name
                            ? "outline outline-[1px] border-2 border-neutral-100 outline-black"
                            : ""
                        } `}
                        style={{ backgroundColor: color.name }}
                        onClick={() => handleSelectedColor(product.id, color)}
                      ></span>
                    ))}
                  </div>
                  <span className="text-[10px] uppercase font-light text-neutral-400 hover:text-neutral-800">
                    <Link
                      to={product.category.toLowerCase().replace(/\s+/g, "-")}
                    >
                      {product.category}
                    </Link>
                  </span>
                  <h3 className="text-md font-medium mb-2  truncate blue-950">
                    <Link
                      to={`/product/${encodeURIComponent(
                        product.name.toLowerCase().replace(/\s+/g, "-")
                      )}`}
                      state={{ productId: product.id }}
                    >
                      {product.name}
                    </Link>
                  </h3>
                  <span className="flex gap-[1px] text-neutral-500 mb-2 text-sm justify-center">
                    <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
                  </span>
                  <p className="text-neutral-700 text-lg font-semibold mb-2">
                    {selectedColor[product.id]
                      ? `$${parseFloat(selectedColor[product.id].price).toFixed(
                          2
                        )}`
                      : `$${Math.min(
                          ...product.colors.map(
                            (color) => JSON.parse(color).price
                          )
                        ).toFixed(2)} - $${Math.max(
                          ...product.colors.map(
                            (color) => JSON.parse(color).price
                          )
                        ).toFixed(2)}`}
                  </p>
                </div>
                <div className="absolute top-3 right-2 opacity-0 transform scale-90 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100">
                  <span className="flex flex-col gap-4">
                    <Link to={`/product/${product.id}`}>
                      <span className="bg-white border-[1px] rounded-full flex items-center justify-center shadow-custom w-10 h-10 hover:bg-black hover:text-white  cursor-pointer transition-all duration-300">
                        <FaArrowRightLong />
                      </span>
                    </Link>
                    <span
                      className={`bg-white border-[1px] text-2xl rounded-full flex items-center justify-center shadow-custom w-10 h-10 hover:bg-black hover:text-white ${
                        isInWishlist(product.id)
                          ? "text-red-400  hover:text-red-400"
                          : ""
                      } cursor-pointer transition-all duration-300`}
                      onClick={() => handleAddToWishlist(product)}
                    >
                      {isInWishlist(product.id) ? (
                        <IoMdHeart />
                      ) : (
                        <IoMdHeartEmpty />
                      )}
                    </span>
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </CarouselWithArrows>
    </div>
  );
}
