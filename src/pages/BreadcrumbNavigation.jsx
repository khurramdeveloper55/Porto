import React from "react";
import { IoMdHome } from "react-icons/io";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchProductsByCategory } from "../api/products";

export default function BreadcrumbNavigation() {
  const { categoryName } = useParams();

  const {
    data: products,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["products", categoryName],
    queryFn: () => fetchProductsByCategory(categoryName),
    enabled: !!categoryName,
  });

  if (isLoading) return <p>Loading products...</p>;
  if (error) return <p>Error fetching products: {error.message}</p>;

  if (!products || products.length === 0) {
    return <p>No products found in this category.</p>;
  }

  const firstProduct = products[0];

  return (
    <div className="w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]  relative gradient-bg">
      <div className="flex justify-between items-center container mx-auto relative md:py-16 py-6 mt-8">
        <div className="text-left">
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
            <span className="uppercase">{firstProduct.category}</span>
          </div>
          <h2 className="md:text-5xl text-2xl text-zinc-800 font-bold">
            {firstProduct.category}
          </h2>
        </div>
        <div className="absolute right-0 top-0">
          <img
            src={firstProduct.breadcrumb}
            alt=""
            className=" w-32 md:w-full"
          />
        </div>
      </div>
    </div>
  );
}
