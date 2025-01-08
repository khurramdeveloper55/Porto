import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
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

  return (
    <div>
      <h2 className="text-3xl font-bold text-left mb-12 mt-12">
        Hurry Up Deals
      </h2>

      <Slider {...settings}>
        <div className="carousel-item">
          <div className=" bg-neutral-100 mx-2 rounded-xl">
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
              <span className="text-sm text-neutral-400">Headphones</span>
              <h3 className="">JBL Tune 720BT</h3>
              <span className="flex gap-[1px] justify-center">
                <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
              </span>
              <p className="text-xl text-neutral-700 font-medium">$80 - $100</p>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className=" bg-neutral-100 mx-2 rounded-xl">
            <div>
              <img
                src="images/products/product-2.jpg"
                className="rounded-xl"
                alt=""
              />
            </div>
            <div className=" py-3">
              <div className="flex gap-2 mt-2 mb-2 justify-center">
                <span className="w-5 h-5 rounded-full  bg-zinc-800 inline-block "></span>
                <span className="w-5 h-5 rounded-full  bg-neutral-500 inline-block "></span>
                <span className="w-5 h-5 rounded-full  bg-white inline-block "></span>
              </div>
              <span className="text-sm text-neutral-400">Headphones</span>
              <h3 className="">JBL Tune 720BT</h3>
              <span className="flex gap-[1px] justify-center">
                <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
              </span>
              <p className="text-xl text-neutral-700 font-medium">$80 - $100</p>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className=" bg-neutral-100 mx-2 rounded-xl">
            <div>
              <img
                src="images/products/product-3.jpg"
                className="rounded-xl"
                alt=""
              />
            </div>
            <div className=" py-3">
              <div className="flex gap-2 mt-2 mb-2 justify-center">
                <span className="w-5 h-5 rounded-full  bg-zinc-800 inline-block "></span>
                <span className="w-5 h-5 rounded-full  bg-neutral-500 inline-block "></span>
                <span className="w-5 h-5 rounded-full  bg-white inline-block "></span>
              </div>
              <span className="text-sm text-neutral-400">Headphones</span>
              <h3 className="">JBL Tune 720BT</h3>
              <span className="flex gap-[1px] justify-center">
                <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
              </span>
              <p className="text-xl text-neutral-700 font-medium">$80 - $100</p>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className=" bg-neutral-100 mx-2 rounded-xl">
            <div>
              <img
                src="images/products/product-4.jpg"
                className="rounded-xl"
                alt=""
              />
            </div>
            <div className=" py-3">
              <div className="flex gap-2 mt-2 mb-2 justify-center">
                <span className="w-5 h-5 rounded-full  bg-zinc-800 inline-block "></span>
                <span className="w-5 h-5 rounded-full  bg-neutral-500 inline-block "></span>
                <span className="w-5 h-5 rounded-full  bg-white inline-block "></span>
              </div>
              <span className="text-sm text-neutral-400">Headphones</span>
              <h3 className="">JBL Tune 720BT</h3>
              <span className="flex gap-[1px] justify-center">
                <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
              </span>
              <p className="text-xl text-neutral-700 font-medium">$80 - $100</p>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className=" bg-neutral-100 mx-2 rounded-xl">
            <div>
              <img
                src="images/products/product-5.jpg"
                className="rounded-xl"
                alt=""
              />
            </div>
            <div className=" py-3">
              <div className="flex gap-2 mt-2 mb-2 justify-center">
                <span className="w-5 h-5 rounded-full  bg-zinc-800 inline-block "></span>
                <span className="w-5 h-5 rounded-full  bg-neutral-500 inline-block "></span>
                <span className="w-5 h-5 rounded-full  bg-white inline-block "></span>
              </div>
              <span className="text-sm text-neutral-400">Headphones</span>
              <h3 className="">JBL Tune 720BT</h3>
              <span className="flex gap-[1px] justify-center">
                <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
              </span>
              <p className="text-xl text-neutral-700 font-medium">$80 - $100</p>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
}
