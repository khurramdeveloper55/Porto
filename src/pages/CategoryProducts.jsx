import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import FeaturedDeals from "../components/common/FeaturedDeals";
import { FaStar } from "react-icons/fa";
import { fetchProductsByCategory } from "../api/products";
import BreadcrumbNavigation from "./BreadcrumbNavigation";

export default function CategoryProducts() {
  const { categoryName } = useParams();
  const [selectedColor, setSelectedColor] = useState({});
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

  const handleSelectedColor = (productId, color) => {
    setSelectedColor((prev) => ({
      ...prev,
      [productId]: color,
    }));
  };

  return (
    <>
      <BreadcrumbNavigation />
      <FeaturedDeals />
      <div className="container mx-auto px-4">
        <h1 className="text-2xl font-bold my-4">Category {categoryName}</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => {
            const parsedColors = product.colors.map((color) =>
              JSON.parse(color)
            );
            return (
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
                  {parsedColors?.map((color, index) => (
                    <span
                      key={index}
                      className={`w-5 h-5 rounded-full  inline-block cursor-pointer `}
                      style={{ backgroundColor: color.name }}
                      onClick={() => handleSelectedColor(product.id, color)}
                    ></span>
                  ))}
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
                  Price: $
                  {selectedColor[product.id]
                    ? parseFloat(selectedColor[product.id].price).toFixed(2)
                    : `${Math.min(
                        ...product.colors.map(
                          (color) => JSON.parse(color).price
                        )
                      ).toFixed(2)} - ${Math.max(
                        ...product.colors.map(
                          (color) => JSON.parse(color).price
                        )
                      ).toFixed(2)}`}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
