import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/common/Footer";
import Header from "../components/common/Header";
import Navigation from "../components/common/Navigation";

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
