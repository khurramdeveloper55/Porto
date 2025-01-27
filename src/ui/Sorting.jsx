import React, { useState } from "react";
import { BsGrid3X3GapFill } from "react-icons/bs";
import { FaAngleDown, FaList } from "react-icons/fa";
import { getCategories } from "../services/apiCategories";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  filterPrice,
  updateCount,
  updateSortOption,
} from "../services/filterSlice";

export default function Sorting() {
  const [showFilter, setShowFilter] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [minPrice, setMinPrice] = useState(54);
  const [maxPrice, setMaxPrice] = useState(100);
  const { data: categories, isLoading } = useQuery({
    queryKey: ["categories"],
    queryFn: getCategories,
  });

  const handleOnChange = (event) => {
    const selectedCategory = event.target.value;
    const url = `/${encodeURIComponent(
      selectedCategory.toLowerCase().replace(/\s+/g, "-")
    )}`;
    navigate(url);
  };

  const handleFilter = () => {
    dispatch(
      filterPrice({
        minPrice: minPrice,
        maxPrice: maxPrice,
      })
    );
  };

  const handleUpdateSort = (event) => {
    dispatch(updateSortOption(event.target.value));
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
        <span
          className="text-neutral-400 bg-neutral-100  relative flex w-40 justify-between items-center p-2"
          onClick={() => setShowFilter((show) => !show)}
        >
          Select Price
          <span className="font-normal text-black">
            <FaAngleDown />
          </span>
          {showFilter && (
            <div className="flex flex-col absolute left-0 top-[40px] w-64 z-20 space-y-2 p-2">
              <div
                className="flex space-x-2"
                onClick={(e) => e.stopPropagation()}
              >
                <input
                  type="number"
                  placeholder="Min"
                  value={minPrice}
                  onChange={(e) => setMinPrice(e.target.value)}
                  className="w-full p-2 border border-neutral-300 rounded-md"
                />
                <input
                  type="number"
                  placeholder="Max"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(e.target.value)}
                  className="w-full p-2 border border-neutral-300 rounded-md"
                />
              </div>

              <button
                className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
                onClick={handleFilter}
              >
                Filter
              </button>
            </div>
          )}
        </span>
        <span className="text-neutral-400 bg-neutral-100 flex w-40 justify-between items-center p-2">
          Select Colors
          <span className="font-normal text-black">
            <FaAngleDown />
          </span>
        </span>
      </div>
      <div className="flex gap-4">
        <select
          defaultValue="default"
          onChange={handleUpdateSort}
          className="w-40 bg-neutral-100"
        >
          <option value="default">Default Sorting</option>
          <option value="A-Z">SORT BY A TO Z</option>
          <option value="Z-A">SORT BY Z TO A</option>
          <option value="price-low-high">SORT BY PRICE: LOW TO HIGH</option>
          <option value="price-high-low">SORT BY PRICE: HIGH TO LOW</option>
        </select>
        <select
          className="text-black bg-neutral-100 flex w-16 justify-between items-center p-2"
          onChange={(event) =>
            dispatch(updateCount(Number(event.target.value)))
          }
          defaultValue={12}
        >
          <option value="10">10</option>
          <option value="12">12</option>
          <option value="25">25</option>
          <option value="32">32</option>
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
