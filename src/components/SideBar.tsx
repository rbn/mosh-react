import React from "react";
import { MdTerrain } from "react-icons/md";

const SideBar = () => {
  return (
    <div className="fixed top-0 left-0 h-screen w-16 m-0 flex flex-col bg-gray-dark p-4 text-white">
      <div className="sidebar-icon">
        <MdTerrain size="32" />
      </div>
      <div className="sidebar-icon">
        <MdTerrain size="32" />
      </div>
      <div className="sidebar-icon">
        <MdTerrain size="32" />
      </div>
      <div className="sidebar-icon">
        <MdTerrain size="32" />
      </div>
      <div className="sidebar-icon">
        <MdTerrain size="32" />
      </div>
    </div>
  );
};

export default SideBar;
