import React from "react";
import useGames from "../../../hooks/useGames";
import GameCard from "./GameCard";

const GameGrid = () => {
  const { games, error } = useGames();

  return (
    <>
      {error.length > 0 ? <p>{error}</p> : ""}
      {console.log(error)}
      {games.map((game) => (
        <GameCard key={game.id} game={game} />
      ))}
    </>
  );
};

export default GameGrid;
