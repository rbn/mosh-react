import React from "react";
import Dropdown, { menuItem } from "../../ui/elements/Dropdown";
import usePlatforms, { Platform } from "../../hooks/usePlatforms";

interface Props {
  onSelectPlatform: (platform: Platform) => void;
}

const PlatformSelector = ({ onSelectPlatform }: Props) => {
  const { data, error, isLoading } = usePlatforms();
  let menuItems: menuItem[] = [];

  data.map((platform) => {
    menuItems.push({
      name: platform.name,
      link: "#",
      onClick: () => onSelectPlatform(platform),
    });
  });

  return (
    <div>
      <Dropdown title="Platforms" menuItems={menuItems} />
    </div>
  );
};

export default PlatformSelector;
