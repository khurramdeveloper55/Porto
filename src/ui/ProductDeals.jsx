import React, { useState } from "react";
import { GrNext, GrPrevious } from "react-icons/gr";
import Slider from "react-slick";

export default function ProductDeals() {
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
      <h2 className="text-3xl font-bold text-left mb-12 mt-12">
        Hurry Up Deals
      </h2>

      <Slider {...settings}>
        <div className="carousel-item">
          <div className=" bg-neutral-100 mr-1 rounded-xl">
            <div>
              <img src="images/products/product-4.jpg" alt="" />
            </div>
            <div className=" py-3">
              <span className="text-sm text-neutral-400">Headphones</span>
              <h3 className="">JBL Tune 720BT</h3>
              <p className="text-xl text-neutral-700 font-medium">$80 - $100</p>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className=" bg-neutral-100 mr-1 rounded-xl">
            <div>
              <img src="images/products/product-4.jpg" alt="" />
            </div>
            <div className=" py-3">
              <span className="text-sm text-neutral-400">Headphones</span>
              <h3 className="">JBL Tune 720BT</h3>
              <p className="text-xl text-neutral-700 font-medium">$80 - $100</p>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className=" bg-neutral-100 mr-1 rounded-xl">
            <div>
              <img src="images/products/product-4.jpg" alt="" />
            </div>
            <div className=" py-3">
              <span className="text-sm text-neutral-400">Headphones</span>
              <h3 className="">JBL Tune 720BT</h3>
              <p className="text-xl text-neutral-700 font-medium">$80 - $100</p>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className=" bg-neutral-100 mr-1 rounded-xl">
            <div>
              <img src="images/products/product-4.jpg" alt="" />
            </div>
            <div className=" py-3">
              <span className="text-sm text-neutral-400">Headphones</span>
              <h3 className="">JBL Tune 720BT</h3>
              <p className="text-xl text-neutral-700 font-medium">$80 - $100</p>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className=" bg-neutral-100 mr-1 rounded-xl">
            <div>
              <img src="images/products/product-4.jpg" alt="" />
            </div>
            <div className=" py-3">
              <span className="text-sm text-neutral-400">Headphones</span>
              <h3 className="">JBL Tune 720BT</h3>
              <p className="text-xl text-neutral-700 font-medium">$80 - $100</p>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
}
