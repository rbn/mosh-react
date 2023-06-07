import { Outlet, Route, Routes } from "react-router-dom";
import TopNav from "../nav/TopNav";
import EventSideBar from "../../features/Events/EventsSideBar";
import React from "react";
import SideBar from "../nav/SideBar";

export default function BlankLayout() {
  return (
    <>
      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 flex">
        {/* Main  */}
        <Outlet />
      </div>
    </>
  );
}
