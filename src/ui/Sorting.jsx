import React from "react";
import { BsGrid3X3GapFill } from "react-icons/bs";
import { FaAngleDown, FaList } from "react-icons/fa";
import { getCategories } from "../services/apiCategories";
import { useQuery } from "@tanstack/react-query";
import { Link, useNavigate } from "react-router-dom";
import { getProducts } from "../services/apiProducts";

export default function Sorting({ visibleCount, setVisibleCount }) {
  const navigate = useNavigate();
  const { data: categories, isLoading } = useQuery({
    queryKey: ["categories"],
    queryFn: getCategories,
  });

  const { data: products, error } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  const handleOnChange = (event) => {
    const selectedCategory = event.target.value;
    const url = `/${encodeURIComponent(
      selectedCategory.toLowerCase().replace(/\s+/g, "-")
    )}`;
    navigate(url);
  };

  const handleVisibleProducts = (event) => {
    setVisibleCount(Number(event.target.value));
  };

  return (
    <div className="flex justify-between">
      <div className="flex gap-4">
        <select
          className="w-40 p-2 bg-neutral-100 text-neutral-400 border rounded cursor-pointer"
          onChange={handleOnChange}
          defaultValue=""
        >
          <option value="" defaultValue="">
            All Categories
          </option>

          {categories?.map((category) => (
            <option key={category.id} value={category.name}>
              {category.name}
            </option>
          ))}
        </select>
        <span className="text-neutral-400 bg-neutral-100 flex w-40 justify-between items-center p-2">
          Select Price
          <span className="font-normal text-black">
            <FaAngleDown />
          </span>
        </span>
        <span className="text-neutral-400 bg-neutral-100 flex w-40 justify-between items-center p-2">
          Select Colors
          <span className="font-normal text-black">
            <FaAngleDown />
          </span>
        </span>
      </div>
      <div className="flex gap-4">
        <span className="text-black bg-neutral-100 flex w-40 justify-between items-center p-2">
          Default Sorting
          <span className="font-normal text-black">
            <FaAngleDown />
          </span>
        </span>
        <select
          className="text-black bg-neutral-100 flex w-16 justify-between items-center p-2"
          onChange={handleVisibleProducts}
          defaultValue={12}
        >
          <option value="10">10</option>
          <option value="12">12</option>
          <option value="25">25</option>
          <option value="32S">32</option>
        </select>
        <span className="text-indigo-500 text-xl bg-neutral-100 flex justify-between items-center py-2 px-3">
          <BsGrid3X3GapFill />
        </span>
        <span className="text-black text-xl bg-neutral-100 flex justify-between items-center py-2 px-3">
          <FaList />
        </span>
      </div>
    </div>
  );
}
