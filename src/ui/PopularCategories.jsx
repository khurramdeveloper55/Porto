import React, { useState } from "react";
import { GrNext, GrPrevious } from "react-icons/gr";
import Slider from "react-slick";

export default function PopularCategories() {
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
  };

  function CustomPrevArrow(props) {
    const { className, onClick } = props;
    return (
      <button
        className={`${className} custom-prev !text-black !text-xl w-24 h-24 z-50 absolute top-64 border -left-[50px]`}
        onClick={onClick}
        aria-label="Previous Slide"
      >
        <span>
          <GrPrevious />
        </span>
      </button>
    );
  }

  function CustomNextArrow(props) {
    const { className, onClick } = props;
    return (
      <button
        className={`${className} custom-next !text-black !text-xl w-24 h-24 z-50 absolute top-64 -right[50px]`}
        onClick={onClick}
        aria-label="Next Slide"
      >
        <span>
          <GrNext />
        </span>
      </button>
    );
  }

  return (
    <div>
      <h2 className="text-3xl font-bold text-left mb-12">Popular Categories</h2>

      <Slider {...settings}>
        <div className="carousel-item ">
          <div className="mb-2 mx-4">
            <img src="images/categories/category-1.jpg" alt="" />
          </div>
          <div>
            <h3>Cases</h3>
            <p>11 Products</p>
          </div>
        </div>
        <div className="carousel-item ">
          <div className="mb-2 mx-4">
            <img src="images/categories/category-1.jpg" alt="" />
          </div>
          <div>
            <h3>Cables</h3>
            <p>11 Products</p>
          </div>
        </div>
        <div className="carousel-item ">
          <div className="mb-2 mx-4">
            <img src="images/categories/category-1.jpg" alt="" />
          </div>
          <div>
            <h3>Chargers</h3>
            <p>11 Products</p>
          </div>
        </div>
        <div className="carousel-item ">
          <div className="mb-2 mx-4">
            <img src="images/categories/category-1.jpg" alt="" />
          </div>
          <div>
            <h3>MagSafe</h3>
            <p>11 Products</p>
          </div>
        </div>
        <div className="carousel-item ">
          <div className="mb-2 mx-4">
            <img src="images/categories/category-1.jpg" alt="" />
          </div>
          <div>
            <h3>Power Banks</h3>
            <p>11 Products</p>
          </div>
        </div>
        <div className="carousel-item ">
          <div className="mb-2 mx-4">
            <img src="images/categories/category-1.jpg" alt="" />
          </div>
          <div>
            <h3>Screen Protectors</h3>
            <p>11 Products</p>
          </div>
        </div>
        <div className="carousel-item ">
          <div className="mb-2 mx-4">
            <img src="images/categories/category-1.jpg" alt="" />
          </div>
          <div>
            <h3>HeadPhones</h3>
            <p>11 Products</p>
          </div>
        </div>
      </Slider>
    </div>
  );
}
