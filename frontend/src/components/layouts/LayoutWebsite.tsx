import React from "react";
import { Header, Footer } from "../Index";
import { Outlet } from "react-router-dom";

const LayoutWebsite = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default LayoutWebsite;
