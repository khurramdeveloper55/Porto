import React, { useState } from "react";
import { BsGrid3X3GapFill } from "react-icons/bs";
import { FaList } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  filterPrice,
  updateCount,
  updateSortOption,
} from "../../redux/slices/filterSlice";
import useCategories from "../../hooks/useCategories";
import { IoIosArrowDown } from "react-icons/io";
import FilterSidebar from "./FilterSidebar";
import { FiFilter } from "react-icons/fi";

export default function ProductSortingFilter() {
  const [showFilter, setShowFilter] = useState(false);
  const [showFilterSide, setShowFilterSide] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [minPrice, setMinPrice] = useState(54);
  const [maxPrice, setMaxPrice] = useState(100);
  const { categories, isLoading } = useCategories();

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
    <>
      <div className="flex justify-between">
        <div className="flex items-center gap-4">
          <span
            className="md:hidden items-center flex gap-2 w-20 p-2 bg-neutral-100 text-sm text-zinc-800 border-0 rounded cursor-pointer"
            onClick={() => setShowFilterSide((show) => !show)}
          >
            <span className="text-lg">
              <FiFilter />
            </span>{" "}
            Filter
          </span>
          <select
            className="w-40 p-2 md:inline-block hidden bg-neutral-100 text-sm text-neutral-400 border-0 rounded cursor-pointer"
            onChange={handleOnChange}
            defaultValue=""
          >
            <option
              value=""
              defaultValue=""
              className=" bg-white text-zinc-600"
            >
              All Categories
            </option>

            {categories?.map((category) => (
              <option
                key={category.id}
                value={category.name}
                className=" bg-white text-zinc-600 cursor-pointer"
              >
                {category.name}
              </option>
            ))}
          </select>

          <span
            className="text-neutral-400 md:flex hidden bg-neutral-100 text-sm  border-0 rounded  relative  w-40 justify-between items-center p-2"
            onClick={() => setShowFilter((show) => !show)}
          >
            Select Price
            <span className="font-normal text-neutral-400">
              <IoIosArrowDown />
            </span>
            {showFilter && (
              <div className="flex flex-col absolute filter bg-white left-0 top-[40px] w-48 z-20 space-y-2 p-2">
                <div
                  className="flex space-x-2"
                  onClick={(e) => e.stopPropagation()}
                >
                  <input
                    type="number"
                    placeholder="Min"
                    value={minPrice}
                    onChange={(e) => setMinPrice(e.target.value)}
                    className="w-full px-2 py-1 border border-neutral-200"
                  />
                  <input
                    type="number"
                    placeholder="Max"
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(e.target.value)}
                    className="w-full px-2 py-1 border border-neutral-200"
                  />
                </div>

                <button
                  className="bg-neutral-100 text-zinc-800 text-sm uppercase py-2 px-4 hover:text-white hover:bg-indigo-500 duration-300"
                  onClick={handleFilter}
                >
                  Filter
                </button>
              </div>
            )}
          </span>
        </div>
        <div className="flex gap-4">
          <select
            defaultValue="default"
            onChange={handleUpdateSort}
            className="md:w-40 w-32 bg-neutral-100 rounded text-zinc-800 text-sm"
          >
            <option
              value="default"
              className="text-sm font-normal text-zinc-800 capitalize"
            >
              Default Sorting
            </option>
            <option
              value="A-Z"
              className="text-sm font-normal text-zinc-800 capitalize"
            >
              Sort By A To Z
            </option>
            <option
              value="Z-A"
              className="text-sm font-normal text-zinc-800 capitalize"
            >
              Sort By Z To A
            </option>
            <option
              value="price-low-high"
              className="text-sm font-normal text-zinc-800 capitalize"
            >
              Sort By Price: Low To High
            </option>
            <option
              value="price-high-low"
              className="text-sm font-normal text-zinc-800 capitalize"
            >
              Sort By Price: High To Low
            </option>
          </select>
          <select
            className="text-zinc-800 text-sm bg-neutral-100 rounded flex w-16 justify-between items-center p-2"
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
          <span className="text-indigo-500 md:flex hidden cursor-pointer rounded text-xl bg-neutral-100  justify-between items-center py-2 px-3">
            <BsGrid3X3GapFill />
          </span>
          <span className="text-black text-xl cursor-pointer rounded bg-neutral-100 md:flex hidden justify-between items-center py-2 px-3">
            <FaList />
          </span>
        </div>
      </div>
      {showFilterSide && (
        <FilterSidebar
          showFilterSide={showFilterSide}
          setShowFilterSide={setShowFilterSide}
        />
      )}
    </>
  );
}
