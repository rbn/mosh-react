import React from "react";
import { Platform } from "../../../hooks/useGames";

interface Props {
  platforms: Platform[];
}

const PlatformIconList = () => {
  return;
  <>
    {game.parent_platforms.map(({ platform }) => (
      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
        {platform.name}
      </span>
    ))}
    ;
  </>;
};

export default PlatformIconList;
