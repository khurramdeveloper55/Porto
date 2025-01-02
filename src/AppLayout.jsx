import React from "react";
import Header from "./ui/Header";
import Navigation from "./ui/Navigation";
import { Outlet } from "react-router-dom";
import SliderCarousel from "./ui/SliderCarousel";
import Home from "./ui/Home";

export default function AppLayout() {
  return (
    <>
      <Header />
      <Navigation />
      <Outlet />
      <SliderCarousel />
      <Home />
    </>
  );
}
