import React from "react";
import { Game } from "../../../hooks/useGames";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <div className="max-w-sm rounded-4xl overflow-hidden shadow-lg my-10">
      <img
        className="w-full"
        src={game.background_image}
        alt="Sunset in the mountains"
      ></img>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{game.name}</div>
        {/* <p className="text-gray-700 text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
          quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
          nihil.
        </p> */}
      </div>
      <div className="px-6 pt-4 pb-2">icons go here</div>
    </div>
  );
};

export default GameCard;
