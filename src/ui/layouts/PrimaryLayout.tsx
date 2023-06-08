import { Outlet, Route, Routes } from "react-router-dom";
import TopNav from "../nav/TopNav";
import EventSideBar from "../../features/Events/EventsSideBar";
import React from "react";
import SideBar from "../nav/SideBar";

export default function PrimaryLayout() {
  return (
    <>
      {/*  Top Nav */}
      <TopNav />

      {/* ⬇ Everything below Top Nav ⬇  */}

      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 flex">
        {/* Sidebar - include here only if page does not maintain its own sidebar in "Outlet" */}
        <Routes>
          <Route path="" element={<SideBar />} />
          <Route path="events" element={<SideBar />} />
          <Route path="events/:id" element={<SideBar />} />
          <Route path="store" element={<SideBar />} />
          <Route path="membership" element={<SideBar />} />
        </Routes>
        <Outlet />
        <Routes>
          <Route path="store" element={<SideBar />} />
        </Routes>
      </div>
    </>
  );
}
