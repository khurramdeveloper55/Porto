import React, { useState, useRef } from "react";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { fetchProductImages } from "../api/fetchImages";

export default function ProductDetailsSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef(null);
  const { productId } = useParams();
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
        <div className="screen">
          <img src={images[activeIndex]} alt={`Slide ${activeIndex + 1}`} />
        </div>
      </section>
      <section className="thumbnail-carousel relative">
        <button
          type="button"
          className="carousel__btn prev absolute left-0 top-0"
          onClick={handlePrevClick}
          disabled={activeIndex === 0}
          aria-label="Previous slide"
        >
          &lt;
        </button>
        <ul className="carousel__slider flex w-64 gap-4" ref={carouselRef}>
          {images.map((image, index) => (
            <li
              key={index}
              className={`carousel__slide ${
                index === activeIndex ? "active" : ""
              }`}
              onClick={() => handleThumbnailClick(index)}
            >
              <div className="thumbnail">
                <img
                  src={image}
                  alt={`Thumbnail ${index + 1}`}
                  loading="lazy"
                />
              </div>
            </li>
          ))}
        </ul>
        <button
          type="button"
          className="carousel__btn next absolute right-0 top-0"
          onClick={handleNextClick}
          disabled={activeIndex === images.length - 1}
          aria-label="Next slide"
        >
          &gt;
        </button>
      </section>
    </div>
  );
}
