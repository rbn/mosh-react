import { Outlet, Route, Routes } from "react-router-dom";
import TopNav from "../nav/TopNav";
import EventSideBar from "../../features/Events/EventsSideBar";
import React from "react";

export default function BasicLayout() {
  return (
    <>
      {/*  Top Nav */}
      <TopNav />

      {/* Main  */}
      <Outlet />
    </>
  );
}
