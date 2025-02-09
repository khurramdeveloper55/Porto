import React, { useState, useRef } from "react";
import { useQuery } from "@tanstack/react-query";
import { useLocation, useParams } from "react-router-dom";
import { fetchProductImages } from "../api/fetchImages";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

export default function ProductDetailsSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef(null);
  const { productName } = useParams();

  const location = useLocation();
  const productId = location.state?.productId;
  const {
    data: productImages,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["products", productId],
    queryFn: () => fetchProductImages(productId),
  });

  let images = productImages?.product_images || [];

  // Handle loading state
  if (isLoading) {
    return <div>Loading...</div>;
  }

  // Handle error state
  if (error) {
    return <div>Error loading product details: {error.message}</div>;
  }

  const updateActiveSlide = (newIndex) => {
    setActiveIndex(newIndex);
  };

  const scrollToSlide = (index) => {
    const carouselSlider = carouselRef.current;
    const activeSlide = carouselSlider.children[index];
    if (activeSlide) {
      const { offsetLeft, offsetWidth } = activeSlide;
      const { clientWidth } = carouselSlider;
      carouselSlider.scrollTo({
        left: offsetLeft - clientWidth / 2 + offsetWidth / 2,
        behavior: "smooth",
      });
    }
  };

  const handlePrevClick = () => {
    if (activeIndex > 0) {
      updateActiveSlide(activeIndex - 1);
    }
  };

  const handleNextClick = () => {
    if (activeIndex < images.length - 1) {
      updateActiveSlide(activeIndex + 1);
    }
  };

  const handleThumbnailClick = (index) => {
    updateActiveSlide(index);
  };

  return (
    <div className="image-thumbnail-carousel">
      <section className="image-display">
        <div className="screen relative group">
          <button
            type="button"
            className={`carousel__btn prev absolute opacity-0 group-hover:opacity-100 text-3xl z-50 left-0 top-[50%] ${
              activeIndex === 0 ? "hidden" : ""
            }`}
            onClick={handlePrevClick}
            disabled={activeIndex === 0}
            aria-label="Previous slide"
          >
            <BsChevronLeft />
          </button>
          <div className="overflow-hidden w-full max-w-full">
            <div
              className="flex transition-transform duration-500"
              style={{
                transform: `translateX(-${activeIndex * 100}%)`,
              }}
            >
              {images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Slide ${index + 1}`}
                  className="w-full object-cover rounded-md"
                  style={{ minWidth: "100%" }}
                />
              ))}
            </div>
          </div>

          <button
            type="button"
            className={`carousel__btn next absolute text-3xl opacity-0 group-hover:opacity-100 right-0 top-[50%] ${
              activeIndex === images.length - 1 ? "hidden" : ""
            }`}
            onClick={handleNextClick}
            disabled={activeIndex === images.length - 1}
            aria-label="Next slide"
          >
            <BsChevronRight />
          </button>
        </div>
      </section>
      <section className="thumbnail-carousel relative">
        <ul className="carousel__slider flex max-w-64 gap-4" ref={carouselRef}>
          {images.map((image, index) => (
            <li
              key={index}
              className={`carousel__slide cursor-pointer  mt-3 p-1 ${
                index === activeIndex
                  ? "border-2 border-zinc-800 rounded-md"
                  : ""
              }`}
              onClick={() => handleThumbnailClick(index)}
            >
              <div className="thumbnail">
                <img
                  src={image}
                  alt={`Thumbnail ${index + 1}`}
                  loading="lazy"
                  className="w-[275px] rounded-md"
                />
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
