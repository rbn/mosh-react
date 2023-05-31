import React from "react";
import { Platform } from "../../../hooks/useGames";
import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";

interface Props {
  platforms: Platform[];
}

const Icon = (props) => {
  const { icon } = props;
  const TheIcon = icon;
  return <TheIcon {...props} />;
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
      <div className="px-6 pt-4 pb-2">
        {platforms.map((platform) => (
          <Icon icon={iconMap[platform.slug]} />
        ))}
      </div>
    </>
  );
};

export default PlatformIconList;
