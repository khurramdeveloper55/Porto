import PopularCategories from "./PopularCategories";
import ProductDeals from "./ProductDeals";
import Deals from "./Deals";
import Strip from "./Strip";
import Testimonials from "./Testimonials";
import Social from "./Social";
import Cta from "./Cta";
import SliderCarousel from "./SliderCarousel";
import ChooseUs from "./ChooseUs";

export default function Home() {
  return (
    <>
      <SliderCarousel />
      <ChooseUs />
      <PopularCategories />
      <ProductDeals />
      <Deals />
      <Strip />
      <Testimonials />
      <Social />
      <Cta />
    </>
  );
}
