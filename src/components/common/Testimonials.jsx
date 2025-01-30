import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { GrNext, GrPrevious } from "react-icons/gr";
import Slider from "react-slick";
import CarouselWithArrows from "./CarouselWithArrows";

export default function Testimonials() {
  return (
    <div>
      <h2 className="md:text-3xl text-2xl font-bold md:text-left text-center mb-6 mt-12 text-zinc-800">
        Customers Testimonials
      </h2>

      <CarouselWithArrows
        slidesToShow={2}
        breakpoints={[
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows: false,
            },
          },
        ]}
      >
        <div className="carousel-item">
          <div className=" flex items-center gap-4">
            <div className="rounded-full flex items-center w-24 h-24">
              <img src="images/avatar-1.jpg" className="rounded-full" alt="" />
            </div>
            <div className=" py-3">
              <h5 className="text-md font-bold text-zinc-800 text-left">
                John Doe -{" "}
                <span className="text-sm text-neutral-500 font-light">
                  November 15, 2024
                </span>
              </h5>
              <h3 className="flex gap-[1px] mt-1 text-sm text-red-400">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </h3>
              <p className="text-md mt-3 text-left text-neutral-500 font-light">
                Love my new case—stylish and sturdy! Perfect fit for my phone.
                Highly recommend!
              </p>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className=" flex items-center gap-4">
            <div className="rounded-full flex items-center w-24 h-24">
              <img src="images/avatar-2.jpg" className="rounded-full" alt="" />
            </div>
            <div className=" py-3">
              <h5 className="text-md font-bold text-zinc-800 text-left">
                Jessica Doe -{" "}
                <span className="text-sm text-neutral-500 font-light">
                  November 18, 2024
                </span>
              </h5>
              <h3 className="flex gap-[1px] mt-1 text-sm text-red-400">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </h3>
              <p className="text-md mt-3 text-left text-neutral-500 font-light">
                The screen protector saved my phone! Great quality and easy to
                apply. Very satisfied.
              </p>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className=" flex items-center gap-4">
            <div className="rounded-full flex items-center w-24 h-24">
              <img src="images/avatar-1.jpg" className="rounded-full" alt="" />
            </div>
            <div className=" py-3">
              <h5 className="text-md font-bold text-zinc-800 text-left">
                John Doe -{" "}
                <span className="text-sm text-neutral-500 font-light">
                  November 22, 2024
                </span>
              </h5>
              <h3 className="flex gap-[1px] mt-1 text-sm text-red-400">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </h3>
              <p className="text-md mt-3 text-left text-neutral-500 font-light">
                Love my new case—stylish and sturdy! Perfect fit for my phone.
                Highly recommend!
              </p>
            </div>
          </div>
        </div>
      </CarouselWithArrows>
    </div>
  );
}
