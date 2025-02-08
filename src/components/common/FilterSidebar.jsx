import React, { useState, useEffect } from "react";
import { GrClose } from "react-icons/gr";
import useCategories from "../../hooks/useCategories";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { filterPrice } from "../../redux/slices/filterSlice";

export default function FilterSidebar({ showFilterSide, setShowFilterSide }) {
  const dispatch = useDispatch();
  const { categories, isLoading } = useCategories();
  const [filterClosing, setFilterClosing] = useState(false);
  const [filterTransitioning, setFilterTransitioning] = useState(false);
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  useEffect(() => {
    document.body.style.overflow = "hidden";

    if (showFilterSide) {
      setFilterTransitioning(true);
    } else {
      setTimeout(() => setFilterTransitioning(false), 500);
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [showFilterSide]);
  const handleFilterClose = () => {
    setFilterClosing(true);
    setTimeout(() => {
      setShowFilterSide(false);
    }, 500);
  };

  const handleFilter = () => {
    dispatch(
      filterPrice({
        minPrice: minPrice,
        maxPrice: maxPrice,
      })
    );
  };
  return (
    <>
      <div
        onClick={handleFilterClose}
        className={`fixed inset-0 bg-black bg-opacity-40 z-[9998] transition-opacity duration-500 ${
          filterTransitioning && showFilterSide && !filterClosing
            ? "opacity-100"
            : "opacity-0 pointer-events-none"
        }`}
      ></div>
      <div
        className={`fixed w-64 left-0 top-0 h-full z-[9999] bg-white pb-6 pt-10 px-6 cart-overflow  transform transition-transform duration-500 ease-in-out ${
          filterTransitioning && showFilterSide && !filterClosing
            ? "translate-x-0"
            : "-translate-x-full"
        }`}
      >
        <span
          className="absolute -right-8 top-4 cursor-pointer text-white text-lg"
          onClick={handleFilterClose}
        >
          <GrClose />
        </span>
        <h4 className="text-sm text-left font-bold uppercase text-zinc-800 mb-4">
          All Categories
        </h4>
        <ul>
          {categories?.map((category) => (
            <li
              key={category.id}
              className="text-left uppercase py-2 text-neutral-500 text-[12px]"
            >
              <Link
                to={`/${encodeURIComponent(
                  category.name.toLowerCase().replace(/\s+/g, "-")
                )}`}
              >
                {category.name}
              </Link>
            </li>
          ))}
        </ul>
        <h4 className="text-sm text-left font-bold uppercase text-zinc-800 mt-4">
          Select Price
        </h4>
        <div className="flex flex-col   bg-white  z-20 space-y-2 mt-4 ">
          <div className="flex space-x-2 items-center mb-2">
            <input
              type="number"
              placeholder="Min"
              value={minPrice}
              onChange={(e) => setMinPrice(e.target.value)}
              className="w-full px-2 py-1 border border-neutral-200"
            />{" "}
            <span> - </span>
            <input
              type="number"
              placeholder="Max"
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
              className="w-full px-2 py-1 border border-neutral-200"
            />
          </div>

          <button
            className="bg-neutral-100 w-full text-zinc-800 text-sm font-light uppercase py-2  px-4 hover:text-white hover:bg-indigo-500 duration-300"
            onClick={handleFilter}
          >
            Filter
          </button>
        </div>
      </div>
    </>
  );
}
