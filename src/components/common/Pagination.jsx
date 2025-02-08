import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectFilter,
  updateCurrentPage,
} from "../../redux/slices/filterSlice";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

export default function Pagination({ totalProducts }) {
  const dispatch = useDispatch();
  const { visibleCount, currentPage } = useSelector(selectFilter);
  const totalPages = Math.ceil(totalProducts / visibleCount);
  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) dispatch(updateCurrentPage(page));
  };
  return (
    <div className="mt-6 gap-1 flex items-center justify-center">
      <button
        className={`border-[1px] px-2 py-[9px] text-lg ${
          currentPage === 1 ? "text-neutral-300" : "text-neutral-500"
        }`}
        disabled={currentPage === 1}
        onClick={() => handlePageChange(currentPage - 1)}
      >
        <FaAngleLeft />
      </button>
      {[...Array(totalPages)].map((_, index) => (
        <button
          key={index}
          onClick={() => handlePageChange(index + 1)}
          className={`border-[1px] px-3 py-1 text-lg ${
            currentPage === index + 1
              ? "border-indigo-500 text-indigo-500"
              : "text-neutral-500"
          }`}
        >
          {index + 1}
        </button>
      ))}
      <button
        className={`border-[1px] px-2 py-[9px] text-lg ${
          currentPage === totalPages ? "text-neutral-300" : "text-neutral-500"
        }`}
        disabled={currentPage === totalPages}
        onClick={() => handlePageChange(currentPage + 1)}
      >
        <FaAngleRight />
      </button>
    </div>
  );
}
