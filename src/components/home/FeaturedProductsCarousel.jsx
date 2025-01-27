import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { GrNext, GrPrevious } from "react-icons/gr";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { IoMdHeartEmpty } from "react-icons/io";
import { BiShoppingBag } from "react-icons/bi";
import { getProducts } from "../../api/apiProducts";

export default function FeaturedProductsCarousel() {
  const { data: products = [], isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedColor, setSelectedColor] = useState({});
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

  if (!products || products.length === 0) {
    return <p>No products available</p>;
  }

  const handleSelectedColor = (productId, color) => {
    setSelectedColor((prev) => ({
      ...prev,
      [productId]: color,
    }));
  };

  return (
    <div>
      <h2 className="text-3xl font-bold text-left mb-8 mt-16">
        Hurry Up Deals
      </h2>

      <Slider {...settings}>
        {products?.map((product) => {
          const parsedColors = product.colors.map((color) => JSON.parse(color));
          return (
            <div className="carousel-item" key={product.id}>
              <div className=" bg-neutral-100 mx-2 rounded-xl overflow-hidden  relative group">
                <div className=" cursor-pointer">
                  <img src={product.image} className="rounded-xl" alt="" />
                  <img
                    src={product.image_alt}
                    className="absolute top-0 left-0 rounded-xl object-cover opacity-0 hover:opacity-100 hover:scale-110 transition-transform duration-700"
                    alt=""
                  />
                </div>
                <div className=" py-3 px-4 ">
                  <div className="flex gap-2 my-2 justify-center">
                    {parsedColors?.map((color) => (
                      <span
                        key={color}
                        className={`w-5 h-5 rounded-full  inline-block cursor-pointer ${
                          selectedColor[product.id]?.name === color.name
                            ? "outline outline-[1px] border-2 border-neutral-100 outline-black"
                            : ""
                        } `}
                        style={{ backgroundColor: color.name }}
                        onClick={() => handleSelectedColor(product.id, color)}
                      ></span>
                    ))}
                  </div>
                  <span className="text-[10px] uppercase font-light text-neutral-400 hover:text-neutral-800">
                    <Link
                      to={product.category.toLowerCase().replace(/\s+/g, "-")}
                    >
                      {product.category}
                    </Link>
                  </span>
                  <h3 className="text-md font-medium mb-2  truncate blue-950">
                    <Link to={`/product/${product.id}`}>{product.name}</Link>
                  </h3>
                  <span className="flex gap-[1px] text-neutral-500 mb-2 text-sm justify-center">
                    <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
                  </span>
                  <p className="text-neutral-700 text-lg font-semibold mb-2">
                    {selectedColor[product.id]
                      ? `$${parseFloat(selectedColor[product.id].price).toFixed(
                          2
                        )}`
                      : `$${Math.min(
                          ...product.colors.map(
                            (color) => JSON.parse(color).price
                          )
                        ).toFixed(2)} - $${Math.max(
                          ...product.colors.map(
                            (color) => JSON.parse(color).price
                          )
                        ).toFixed(2)}`}
                  </p>
                </div>
                <div className="absolute top-3 right-2 opacity-0 transform scale-90 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100">
                  <span className="flex flex-col gap-4">
                    <Link to={`/product/${product.id}`}>
                      <span className="bg-white border-[1px] rounded-full flex items-center justify-center shadow-custom w-10 h-10 hover:bg-black hover:text-white  cursor-pointer transition-all duration-300">
                        <FaArrowRightLong />
                      </span>
                    </Link>
                    <span className="bg-white border-[1px] rounded-full text-2xl flex  cursor-pointer items-center justify-center shadow-custom w-10 h-10 hover:bg-black hover:text-white transition-all duration-300">
                      <BiShoppingBag />
                    </span>
                    <span className="bg-white border-[1px] text-2xl rounded-full flex items-center justify-center shadow-custom w-10 h-10 hover:bg-black hover:text-white  cursor-pointer transition-all duration-300">
                      <IoMdHeartEmpty />
                    </span>
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}
