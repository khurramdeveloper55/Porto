import PromoStrip from "../common/PromoStrip";
import ChooseUs from "../common/ServiceBenefits";
import HeroSlider from "./HeroSlider";
import CategoryCarousel from "./CategoryCarousel";
import FeaturedProductsCarousel from "./FeaturedProductsCarousel";
import FeaturedDeals from "../common/FeaturedDeals";
import ContactSupportCta from "../common/ContactSupportCta";
import Testimonials from "../common/Testimonials";
import { GrClose } from "react-icons/gr";

export default function HomePage() {
  return (
    <>
      <HeroSlider />
      <ChooseUs />
      <CategoryCarousel />
      <FeaturedProductsCarousel />
      <FeaturedDeals />
      <PromoStrip />
      <Testimonials />
      <ContactSupportCta />
    </>
  );
}
