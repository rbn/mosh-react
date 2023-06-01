import React from "react";
import { Platform } from "src/hooks/useGames";
import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { IconType } from "react-icons";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";

interface Props {
  platforms: Platform[];
}

const Icon = ({ icon, color }) => {
  const TheIcon = icon;
  return <TheIcon color={color} />;
};

const PlatformIconList = ({ platforms }: Props) => {
  const iconMap = {
    pc: FaWindows,
    playstation: FaPlaystation,
    linux: FaLinux,
    mac: FaApple,
    xbox: FaXbox,
    android: FaAndroid,
    ios: MdPhoneIphone,
    nintendo: SiNintendo,
    web: BsGlobe,
  };

  return (
    <>
      {platforms.map((platform) => (
        <span
          className="inline-block rounded-full px-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
          key={platform.id}
        >
          <Icon icon={iconMap[platform.slug]} color="#9ca3af" />
        </span>
      ))}
    </>
  );
};

export default PlatformIconList;
