import React from "react";
import Header from "./ui/Header";
import Navigation from "./ui/Navigation";
import { Outlet } from "react-router-dom";
import Footer from "./ui/Footer";

export default function AppLayout() {
  return (
    <>
      <Header />
      <Navigation />
      <Outlet />
      <Footer />
    </>
  );
}
