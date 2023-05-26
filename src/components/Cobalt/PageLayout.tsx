import React from "react";
import SideBar from "./SideBar";
import Header from "./Header";
import MainContent from "./MainContent";
import Footer from "./Footer";
import Banner from "./Banner";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function PageLayout1() {
  return (
    <div className="mx-auto max-w-7xl sm:px-6 pt-16 lg:flex lg:gap-x-16 lg:px-8">
      {/* <Banner /> */}
      <SideBar />
      <Header />
      <MainContent />
      {/* <Footer /> */}
    </div>
  );
}
