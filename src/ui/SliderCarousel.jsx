import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import { GrNext, GrPrevious } from "react-icons/gr";

export default function SliderCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 2;
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
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
        className={`${className} custom-prev before:hidden !text-black !text-lg w-24 !left-[-18px] !top-[45%] h-24 z-50 absolute  border `}
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
        className={`${className} custom-next before:hidden !text-black !top-[45%] !right-0 !text-lg w-24 h-24 z-50 absolute  `}
        onClick={onClick}
        aria-label="Next Slide"
      >
        <span className="bg-white border-[1px] rounded-full shadow-custom  !w-10 pl-[10px] text-black pt-[10px] !h-10 inline-block">
          <GrNext />
        </span>
      </button>
    );
  }

  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div className="carousel-item ">
          <div
            className="flex items-center content-between rounded-lg  max-h-[450px]"
            style={{ backgroundImage: 'url("images/slider/slider-bg-1.jpg")' }}
          >
            <div className="w-1/2 ">
              <img
                src="images/slider/slide-dots.png"
                className={`absolute lg:top-16 top-6 md:left-10 left-4 w-[100px] md:w-auto slide-up-img  ${
                  currentSlide === 0 ? "animate-img" : ""
                }`}
              />
              <div className="md:pl-20 pl-8 text-left">
                <h2
                  className={`lg:text-5xl md:text-3xl text-xl font-extrabold text-zinc-800 leading-11 slide-up-h2 ${
                    currentSlide === 0 ? "animate" : ""
                  }`}
                >
                  New Deals <br /> Just Dropped
                </h2>
                <p
                  className={`mt-4 text-neutral-500 slide-up-p md:block hidden ${
                    currentSlide === 0 ? "animate" : ""
                  }`}
                >
                  Save up to 70% off on headsets, cases, and so much more. New
                  products added every week.
                </p>
                <span
                  className={`mt-4 inline-block bg-indigo-600 font-bold md:text-lg text-sm text-white px-8 py-3 rounded-full slide-up-btn ${
                    currentSlide === 0 ? "animate" : ""
                  }`}
                >
                  <Link>Shop Now</Link>
                </span>
              </div>
            </div>
            <div className="w-1/2 pt-12">
              <img
                src="images/slider/slide-img-1.png"
                alt="Slide 1"
                className="carousel-image md:w-[500px] w-[200px]"
              />
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div
            className="flex items-center content-between rounded-lg max-h-[450px]"
            style={{ backgroundImage: 'url("images/slider/slider-bg-2.jpg")' }}
          >
            <div className="md:w-[490px] w-[200px]  pt-12 md:pl-12 pl-2">
              <img
                src="images/slider/slide-img-2.png"
                alt="Slide 2"
                className="carousel-image"
              />
            </div>
            <div className="w-1/2 p-2 text-left">
              <h2
                className={`lg:text-5xl md:text-3xl text-xl font-extrabold text-zinc-800 leading-11 slide-up-h2 ${
                  currentSlide === 1 ? "animate" : ""
                }`}
              >
                Apple Watch <br /> Edition <br /> Base Station
              </h2>
              <p
                className={`mt-4 text-neutral-500 slide-up-p md:block hidden ${
                  currentSlide === 1 ? "animate" : ""
                }`}
              >
                The ultimate charging hub for iPhone, Apple Watch, and AirPods.
              </p>
              <span
                className={`mt-4 inline-block bg-indigo-600 font-bold md:text-lg text-sm text-white px-8 py-3 rounded-full slide-up-btn ${
                  currentSlide === 1 ? "animate" : ""
                }`}
              >
                <Link>Shop Now</Link>
              </span>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
}
