import React from "react";
import { CiDollar } from "react-icons/ci";
import { FaLock } from "react-icons/fa";
import { TbClock24, TbTruckDelivery } from "react-icons/tb";
import Slider from "react-slick";

export default function ServiceBenefits() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          arrows: false,
        },
      },
    ],
  };
  return (
    <>
      <Slider {...settings}>
        <div className="carousel-item w-full !flex items-center justify-center my-8">
          <span className="relative inline-block text-4xl text-indigo-600 before:content-[''] before:absolute before:w-8 before:h-8 before:bg-gray-100 before:rounded-full before:-z-10 before:top-[10px] before:-right-[22px] before:transform before:-translate-x-1/2 before:-translate-y-1/2">
            <TbTruckDelivery />
          </span>
          <p className="pl-3 text-xl inline-block font-bold text-zinc-800 text-left leading-6">
            Free Shipping & <br className="md:block hidden" /> Returns
          </p>
        </div>
        <div className="carousel-item w-full !flex items-center justify-center my-8">
          <span className="relative inline-block text-4xl text-indigo-600 before:content-[''] before:absolute before:w-8 before:h-8 before:bg-gray-100 before:rounded-full before:-z-10 before:top-[10px] before:-right-[22px] before:transform before:-translate-x-1/2 before:-translate-y-1/2">
            <CiDollar />
          </span>
          <p className="pl-3 text-xl inline-block font-bold text-zinc-800 text-left leading-6">
            Money Back <br className="md:block hidden" /> Guarantee
          </p>
        </div>
        <div className="carousel-item w-full !flex items-center justify-center my-8">
          <span className="relative inline-block text-4xl text-indigo-600 before:content-[''] before:absolute before:w-8 before:h-8 before:bg-gray-100 before:rounded-full before:-z-10 before:top-[10px] before:-right-[22px] before:transform before:-translate-x-1/2 before:-translate-y-1/2">
            <TbClock24 />
          </span>
          <p className="pl-3 text-xl inline-block font-bold text-zinc-800 text-left leading-6">
            Online Support 24/7
          </p>
        </div>
        <div className="carousel-item w-full !flex items-center justify-center my-8 ">
          <span className="relative inline-block text-3xl text-indigo-600 before:content-[''] before:absolute before:w-8 before:h-8 before:bg-gray-100 before:rounded-full before:-z-10 before:top-[10px] before:-right-[22px] before:transform before:-translate-x-1/2 before:-translate-y-1/2">
            <FaLock />
          </span>

          <p className="pl-3 text-xl inline-block font-bold text-zinc-800 text-left leading-6">
            Secure Payment
          </p>
        </div>
      </Slider>
      <hr />
    </>
  );
}
