import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { getCategories } from "../../api/categories";
import CarouselWithArrows from "../common/CarouselWithArrows";

export default function CategoryCarousel() {
  const { data: categories, isLoading } = useQuery({
    queryKey: ["categories"],
    queryFn: getCategories,
  });

  if (!categories || categories.length === 0) {
    return <p>No categories available</p>;
  }

  return (
    <div className="mt-16">
      <h2 className="text-3xl font-bold text-left mb-7">Popular Categories</h2>
      <CarouselWithArrows
        slidesToShow={6}
        breakpoints={[
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              arrows: false,
            },
          },
        ]}
      >
        {categories.map((category) => (
          <div key={category.id} className="carousel-item ">
            <div className="mb-2 mx-4 overflow-hidden rounded-xl">
              <img
                src={category.image}
                className="w-full rounded-xl cursor-pointer hover:scale-110 transition-transform duration-700"
                alt=""
              />
            </div>
            <div>
              <h3 className="text-zinc-800 text-lg font-semibold hover:text-indigo-600">
                <Link
                  to={`/${encodeURIComponent(
                    category.name.toLowerCase().replace(/\s+/g, "-")
                  )}`}
                >
                  {category.name}
                </Link>
              </h3>
              <p className="text-neutral-500 font-normal text-sm">
                {category.product_count} Products
              </p>
            </div>
          </div>
        ))}
      </CarouselWithArrows>
    </div>
  );
}
