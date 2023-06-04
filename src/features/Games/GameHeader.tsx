import React from "react";
import { GameQuery } from "../../ui/pages/GamePage";

interface Props {
  gameQuery: GameQuery;
}

const GameHeader = ({ gameQuery }: Props) => {
  // Games (default)
  // Action Games
  // Xbox Games
  // Xbox Action Games

  const heading = `${gameQuery.platform?.name || ""} ${
    gameQuery.genre?.name || ""
  } Games`;

  return <h1 className="font-bold text-2xl">{heading}</h1>;
};
export default GameHeader;
