import { useQuery } from "@tanstack/react-query";
import React from "react";
import { FaStar } from "react-icons/fa";
import { getProducts } from "../../services/apiProducts";
import { Link } from "react-router-dom";
import Sorting from "../Sorting";

export default function ShopProducts({ visibleCount, setVisibleCount }) {
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

  return (
    <>
      <Sorting visibleCount={visibleCount} setVisibleCount={setVisibleCount} />
      <div className="container mx-auto px-4">
        <h1 className="text-2xl font-bold my-4">Category </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.slice(0, visibleCount).map((product) => (
            <div
              key={product.id}
              className="p-4 bg-gray-100 rounded shadow relative overflow-hidden"
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
              <h2 className="text-lg font-medium truncate mb-1">
                <Link to={`/product/${product.id}`}>{product.name}</Link>
              </h2>
              <span className="flex gap-[1px] text-neutral-500 mb-2 text-sm justify-center">
                <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
              </span>
              <p>
                Price: ${parseFloat(product.min_price).toFixed(2)} - $
                {parseFloat(product.max_price).toFixed(2)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
