import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { GrNext, GrPrevious } from "react-icons/gr";
import Slider from "react-slick";

export default function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 2;
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
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
      <h2 className="text-3xl font-bold text-left mb-6 mt-12">
        Customers Testimonials
      </h2>

      <Slider {...settings}>
        <div className="carousel-item">
          <div className=" flex items-center gap-4">
            <div className="rounded-full w-24 h-24">
              <img src="images/avatar-1.jpg" alt="" />
            </div>
            <div className=" py-3">
              <h5 className="text-md font-bold text-zinc-800 text-left">
                John Doe -{" "}
                <span className="text-sm text-neutral-400">
                  November 15, 2024
                </span>
              </h5>
              <h3 className="flex gap-1 mt-1">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </h3>
              <p className="text-md mt-4 text-left text-neutral-700 font-medium">
                Love my new case—stylish and sturdy! Perfect fit for my phone.
                Highly recommend!
              </p>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className=" flex items-center gap-4">
            <div className="rounded-full w-24 h-24">
              <img src="images/avatar-1.jpg" alt="" />
            </div>
            <div className=" py-3">
              <h5 className="text-md font-bold text-zinc-800 text-left">
                John Doe -{" "}
                <span className="text-sm text-neutral-400">
                  November 15, 2024
                </span>
              </h5>
              <h3 className="flex gap-1 mt-1">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </h3>
              <p className="text-md mt-4 text-left text-neutral-700 font-medium">
                Love my new case—stylish and sturdy! Perfect fit for my phone.
                Highly recommend!
              </p>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className=" flex items-center gap-4">
            <div className="rounded-full w-24 h-24">
              <img src="images/avatar-1.jpg" alt="" />
            </div>
            <div className=" py-3">
              <h5 className="text-md font-bold text-zinc-800 text-left">
                John Doe -{" "}
                <span className="text-sm text-neutral-400">
                  November 15, 2024
                </span>
              </h5>
              <h3 className="flex gap-1 mt-1">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </h3>
              <p className="text-md mt-4 text-left text-neutral-700 font-medium">
                Love my new case—stylish and sturdy! Perfect fit for my phone.
                Highly recommend!
              </p>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
}
