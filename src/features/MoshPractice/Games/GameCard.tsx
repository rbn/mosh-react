import React from "react";
import { Game } from "../../../hooks/useGames";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../../../services/image-url";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <div className="max-w-sm rounded-4xl overflow-hidden shadow-lg my-10">
      <img
        className="object-cover h-48 w-96"
        src={getCroppedImageUrl(game.background_image)}
        alt="Sunset in the mountains"
      ></img>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 inline-block">{game.name}</div>
        <div className="px-6 py-4 justify-between -m-2 flex flex-wrap ">
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </div>
      </div>
    </div>
  );
};

export default GameCard;
