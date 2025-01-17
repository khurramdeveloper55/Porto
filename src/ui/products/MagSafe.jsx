import React from "react";
import Deals from "../Deals";
import ProductDeals from "../ProductDeals";
import ProductBreadcrumb from "./ProductBreadcrumb";
import Sorting from "../Sorting";

export default function MagSafe() {
  return (
    <>
      <ProductBreadcrumb />
      <Deals />
      <Sorting />
      <ProductDeals />
    </>
  );
}
