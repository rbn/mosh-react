import React from "react";
import { ImHome } from "react-icons/im";
import { ImPencil } from "react-icons/im";
import { MdTerrain } from "react-icons/md";
import { ImLeaf } from "react-icons/im";
import { ImLab } from "react-icons/im";

const SideBar = () => {
  return (
    <div className="fixed top-0 left-0 h-screen w-16 m-0 pt-20 flex flex-col bg-gray-800 text-white">
      <SideBarIcon icon={<ImHome size="28" />}></SideBarIcon>
      <SideBarIcon icon={<ImPencil size="28" />}></SideBarIcon>
      <SideBarIcon icon={<ImLeaf size="28" />}></SideBarIcon>
      <SideBarIcon icon={<ImLab size="28" />}></SideBarIcon>
      <SideBarIcon icon={<MdTerrain size="38" />}></SideBarIcon>
    </div>
  );
};

const SideBarIcon = ({ icon, text = "tooltip 💡" }) => {
  return (
    <div className="sidebar-icon group">
      {icon}
      <span className="sidebar-tooltip group-hover:scale-100">{text}</span>
    </div>
  );
};

export default SideBar;
