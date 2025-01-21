import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Link } from "react-router-dom";
import { getCategories } from "../services/apiCategories";
import { FaChevronDown } from "react-icons/fa";

export default function Navigation() {
  const { data: categories, isLoading } = useQuery({
    queryKey: ["categories"],
    queryFn: getCategories,
  });
  return (
    <div>
      <ul className="lg:flex hidden lg:space-x-2 xl:space-x-2 items-center mb-5 gap-10 font-semibold text-zinc-800 lg:text-md xl:text-lg">
        {categories?.map((category) => (
          <li key={category.id} className="flex items-center gap-2">
            <Link
              to={`/${encodeURIComponent(
                category.name.toLowerCase().replace(/\s+/g, "-")
              )}`}
            >
              {category.name}
            </Link>
          </li>
        ))}
        <Link>
          <span className="flex items-center gap-1">
            More{" "}
            <span className="text-sm">
              <FaChevronDown />
            </span>
          </span>
        </Link>
      </ul>
    </div>
  );
}
