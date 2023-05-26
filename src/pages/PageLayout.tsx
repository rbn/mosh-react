import React from "react";
import SideBar from "./SideBar";
import Header from "./Header";
import MainContent from "./MainContent";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function PageLayout1() {
  return (
    <div className="mx-auto max-w-7xl sm:px-6 pt-16 lg:flex lg:gap-x-16 lg:px-8">
      <SideBar />
      <Header />
      <MainContent />
    </div>
  );
}
