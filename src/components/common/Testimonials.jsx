import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { GrNext, GrPrevious } from "react-icons/gr";
import Slider from "react-slick";
import CarouselWithArrows from "./CarouselWithArrows";

export default function Testimonials() {
  return (
    <div>
      <h2 className="text-3xl font-bold text-left mb-6 mt-12">
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
      </CarouselWithArrows>
    </div>
  );
}
