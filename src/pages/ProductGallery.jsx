import { useQuery } from "@tanstack/react-query";
import React from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import ProductSortingFilter from "../components/common/ProductSortingFilter";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../api/apiProducts";
import { selectFilter } from "../redux/slices/filterSlice";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoMdHeart, IoMdHeartEmpty } from "react-icons/io";

export default function ProductGallery() {
  const { visibleCount, minPrice, maxPrice, sortOption } =
    useSelector(selectFilter);
  const dispatch = useDispatch();
  const wishlist = useSelector((state) => state.wishlist.items);
  const {
    data: products,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  if (isLoading) return <p>Loading products...</p>;
  if (error) return <p>Error fetching products: {error.message}</p>;

  if (!products || products.length === 0) {
    return <p>No products found in this category.</p>;
  }

  const filteredProducts = products.filter((product) => {
    const productMinPrice = Math.min(
      ...product.colors.map((color) => JSON.parse(color).price)
    );
    const productMaxPrice = Math.max(
      ...product.colors.map((color) => JSON.parse(color).price)
    );

    if (!minPrice && !maxPrice) {
      return true;
    }

    return productMinPrice >= minPrice && productMaxPrice <= maxPrice;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortOption) {
      case "A-Z":
        return a.name.localeCompare(b.name);
      case "Z-A":
        return b.name.localeCompare(a.name);
      case "price-low-high":
        const aMinPrice = Math.min(
          ...a.colors.map((color) => JSON.parse(color).price)
        );
        const bMinPrice = Math.min(
          ...b.colors.map((color) => JSON.parse(color).price)
        );
        return aMinPrice - bMinPrice;
      case "price-high-low":
        const aMaxPrice = Math.max(
          ...a.colors.map((color) => JSON.parse(color).price)
        );
        const bMaxPrice = Math.max(
          ...b.colors.map((color) => JSON.parse(color).price)
        );
        return bMaxPrice - aMaxPrice;
      default:
        return 0;
    }
  });

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
    <>
      <ProductSortingFilter />
      <div className="container mx-auto px-4 mt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {sortedProducts.slice(0, visibleCount).map((product, index) => (
            <div
              key={index}
              className="p-4 bg-gray-100 rounded relative overflow-hidden  group"
            >
              <div className="relative mb-1 cursor-pointer">
                <img
                  src={product.image}
                  className="rounded-xl object-cover"
                  alt=""
                />
                <img
                  src={product.image_alt}
                  className="absolute top-0 left-0 rounded-xl object-cover opacity-0 hover:opacity-100 hover:scale-110 transition-transform duration-700"
                  alt=""
                />
              </div>
              <div className="flex gap-2 mb-2 mt-3 justify-center">
                <span className="w-5 h-5 rounded-full  bg-zinc-800 inline-block "></span>
                <span className="w-5 h-5 rounded-full  bg-neutral-500 inline-block "></span>
                <span className="w-5 h-5 rounded-full  bg-white inline-block "></span>
              </div>
              <span className="text-[10px] uppercase font-light text-neutral-400">
                {product.category}
              </span>
              <h2 className="text-md text-zinc-800 font-medium truncate mb-1">
                <Link to={`/product/${product.id}`}>{product.name}</Link>
              </h2>
              <span className="flex gap-[1px] text-neutral-500 mb-2 text-sm justify-center">
                <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
              </span>
              <p className="text-neutral-500 font-semibold">
                $
                {`${Math.min(
                  ...product.colors.map((color) => JSON.parse(color).price)
                ).toFixed(2)} - ${Math.max(
                  ...product.colors.map((color) => JSON.parse(color).price)
                ).toFixed(2)}`}
              </p>
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
          ))}
        </div>
      </div>
    </>
  );
}
