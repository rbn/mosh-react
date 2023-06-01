import React from "react";
import { Game } from "../../../hooks/useGames";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../../../services/image-url";

interface Props {
  game: Game;
}

const GameCardSkeleton = () => {
  return (
    <div className="max-w-sm rounded-4xl overflow-hidden shadow-lg my-10 animate-pulse">
      <div className="object-cover h-48 w-96 bg-gray-300"></div>
      <div className="px-6 py-4">
        <div className="grid grid-cols-3 gap-4 h-24">
          <div className="h-2 bg-slate-200 rounded col-span-2"></div>
          <div className="h-2 bg-slate-200 rounded colclassName-span-1"></div>
        </div>
      </div>
    </div>
  );
};

export default GameCardSkeleton;
