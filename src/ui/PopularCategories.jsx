import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { GrNext, GrPrevious } from "react-icons/gr";
import Slider from "react-slick";
import { getCategories } from "../services/apiCategories";

export default function PopularCategories() {
  const { data: categories, isLoading } = useQuery({
    queryKey: ["categories"],
    queryFn: getCategories,
  });
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 2;
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: currentSlide > 0 ? <CustomPrevArrow /> : null,
    nextArrow: currentSlide < totalSlides - 1 ? <CustomNextArrow /> : null,
    beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
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
        className={`${className} custom-prev before:hidden !text-black !text-lg w-24 !left-[-18px] !top-[35%] h-24 z-50 absolute  border `}
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
        className={`${className} custom-next before:hidden !text-black !top-[35%] !right-0 !text-lg w-24 h-24 z-50 absolute  `}
        onClick={onClick}
        aria-label="Next Slide"
      >
        <span className="bg-white border-[1px] rounded-full shadow-custom  !w-10 pl-[10px] text-black pt-[10px] !h-10 inline-block">
          <GrNext />
        </span>
      </button>
    );
  }

  if (!categories || categories.length === 0) {
    return <p>No categories available</p>;
  }

  return (
    <div>
      <h2 className="text-3xl font-bold text-left mb-12">Popular Categories</h2>

      <Slider {...settings}>
        {categories.map((category) => (
          <div key={category.id} className="carousel-item ">
            <div className="mb-2 mx-4">
              <img
                src="images/categories/category-1.jpg"
                className="w-full rounded-xl"
                alt=""
              />
            </div>
            <div>
              <h3>{category.name}</h3>
              <p>{category.products} Products</p>
            </div>
          </div>
        ))}
        {/* <div className="carousel-item ">
          <div className="mb-2 mx-4">
            <img
              src="images/categories/category-1.jpg"
              className="w-full rounded-xl"
              alt=""
            />
          </div>
          <div>
            <h3>Cases</h3>
            <p>11 Products</p>
          </div>
        </div>
        <div className="carousel-item ">
          <div className="mb-2 mx-4">
            <img
              src="images/categories/category-2.jpg"
              className="w-full rounded-xl"
              alt=""
            />
          </div>
          <div>
            <h3>Cables</h3>
            <p>11 Products</p>
          </div>
        </div>
        <div className="carousel-item ">
          <div className="mb-2 mx-4">
            <img
              src="images/categories/category-3.jpg"
              className="w-full rounded-xl"
              alt=""
            />
          </div>
          <div>
            <h3>Chargers</h3>
            <p>11 Products</p>
          </div>
        </div>
        <div className="carousel-item ">
          <div className="mb-2 mx-4">
            <img
              src="images/categories/category-4.jpg"
              className="w-full rounded-xl"
              alt=""
            />
          </div>
          <div>
            <h3>MagSafe</h3>
            <p>11 Products</p>
          </div>
        </div>
        <div className="carousel-item ">
          <div className="mb-2 mx-4">
            <img
              src="images/categories/category-5.jpg"
              className="w-full rounded-xl"
              alt=""
            />
          </div>
          <div>
            <h3>Power Banks</h3>
            <p>11 Products</p>
          </div>
        </div>
        <div className="carousel-item ">
          <div className="mb-2 mx-4">
            <img
              src="images/categories/category-6.jpg"
              className="w-full rounded-xl"
              alt=""
            />
          </div>
          <div>
            <h3>Screen Protectors</h3>
            <p>11 Products</p>
          </div>
        </div>
        <div className="carousel-item ">
          <div className="mb-2 mx-4">
            <img
              src="images/categories/category-7.jpg"
              className="w-full rounded-xl"
              alt=""
            />
          </div>
          <div>
            <h3>HeadPhones</h3>
            <p>11 Products</p>
          </div>
        </div> */}
      </Slider>
    </div>
  );
}
