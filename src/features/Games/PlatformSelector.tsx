import React from "react";
import Dropdown from "../../ui/elements/Dropdown";
import { Platform } from "../../hooks/useGames";

interface Props {
  platform: Platform;
}

const PlatformSelector = () => {
  const menuItems = [
    { name: "hi", link: "/jack" },
    { name: "larry", link: "/jack" },
    { name: "hey", link: "/jack" },
  ];

  return (
    <div>
      <Dropdown firstItem="Platforms" menuItems={menuItems} />
    </div>
  );
};

export default PlatformSelector;
