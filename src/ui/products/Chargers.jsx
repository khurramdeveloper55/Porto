import React, { useState } from "react";
import ProductBreadcrumb from "./ProductBreadcrumb";
import Deals from "../Deals";
import Sorting from "../Sorting";
import { useQuery } from "@tanstack/react-query";
import { GrNext, GrPrevious } from "react-icons/gr";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaRegHeart, FaStar } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { fetchProductsByCategory } from "../../services/apiFetchProducts";

export default function Chargers({ categoryId }) {
  const {
    data: products,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["products"],
    queryFn: () => fetchProductsByCategory(categoryId),
  });

  console.log(products);

  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 2;
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: currentSlide > 0 ? <CustomPrevArrow /> : null,
    nextArrow: currentSlide < totalSlides - 1 ? <CustomNextArrow /> : null,
    beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };

  function CustomPrevArrow(props) {
    const { className, onClick } = props;
    return (
      <button
        className={`${className} custom-prev before:hidden !text-black !text-lg w-24 !left-[-18px] !top-[50%] h-24 z-50 absolute  border `}
        onClick={onClick}
        aria-label="Previous Slide"
      >
        <span className="bg-white border-[1px] rounded-full shadow-custom  !w-10 pl-[10px] text-black pt-[10px] !h-10 inline-block">
          <GrPrevious />
        </span>
      </button>
    );
  }

  function CustomNextArrow(props) {
    const { className, onClick } = props;
    return (
      <button
        className={`${className} custom-next before:hidden !text-black !top-[50%] !right-0 !text-lg w-24 h-24 z-50 absolute  `}
        onClick={onClick}
        aria-label="Next Slide"
      >
        <span className="bg-white border-[1px] rounded-full shadow-custom  !w-10 pl-[10px] text-black pt-[10px] !h-10 inline-block">
          <GrNext />
        </span>
      </button>
    );
  }

  if (!products || products.length === 0) {
    return <p>No products available</p>;
  }
  return (
    <>
      <ProductBreadcrumb />
      <Deals />
      <Sorting />
      <div className="my-16"></div>
      <Slider {...settings}>
        {products.map((product) => (
          <div className="carousel-item">
            <div className=" bg-neutral-100 mx-2 rounded-xl relative group cursor-pointer">
              <div>
                <img
                  src="images/products/product-1.jpg"
                  className="rounded-xl"
                  alt=""
                />
              </div>
              <div className=" py-3 ">
                <div className="flex gap-2 mt-2 mb-2 justify-center">
                  <span className="w-5 h-5 rounded-full  bg-zinc-800 inline-block "></span>
                  <span className="w-5 h-5 rounded-full  bg-neutral-500 inline-block "></span>
                  <span className="w-5 h-5 rounded-full  bg-white inline-block "></span>
                </div>
                <span className="text-sm text-neutral-400">
                  {product.category}
                </span>
                <h3 className="">{product.name}</h3>
                <span className="flex gap-[1px] justify-center">
                  <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
                </span>
                <p className="text-xl text-neutral-700 font-medium">
                  {product.price}
                </p>
              </div>
              <div className="absolute top-3 right-2 opacity-0 transform scale-90 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100">
                <span className="flex flex-col gap-4">
                  <Link to="/product">
                    <span className="bg-white border-[1px] rounded-full flex items-center justify-center shadow-custom w-10 h-10">
                      <FaArrowRightLong />
                    </span>
                  </Link>
                  <span className="bg-white border-[1px] rounded-full flex items-center justify-center shadow-custom w-10 h-10">
                    <FaRegHeart />
                  </span>
                  <span className="bg-white border-[1px] rounded-full flex items-center justify-center shadow-custom w-10 h-10">
                    <IoIosSearch />
                  </span>
                </span>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </>
  );
}
