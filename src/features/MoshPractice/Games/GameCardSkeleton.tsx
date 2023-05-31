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
    <div className="max-w-sm rounded-4xl overflow-hidden shadow-lg my-10">
      <div className="object-cover h-48 w-96 bg-gray-300"></div>
      <div className="px-6 py-4">
        <div className="font-bold  h-24 w-48 text-xl mb-2 inline-block text-center">
          <span className="text-slate-400 italic text-sm">loading ...</span>
        </div>
        <div className="px-6 py-4 justify-between -m-2 flex flex-wrap "></div>
      </div>
    </div>
  );
};

export default GameCardSkeleton;
