import React from "react";
import useGames, { Game } from "../../hooks/useGames";
import GameCard from "../../features/Games/GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import { Genre } from "../../hooks/useGenres";
import { Platform } from "../../hooks/usePlatforms";
import { GameQuery } from "../../ui/pages/GamePage";

interface Props {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
  const { data, error, isLoading } = useGames(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6];

  console.log(error);
  if (error.length) return <p>{error}</p>;

  return (
    <>
      {isLoading &&
        skeletons.map((skeleton) => <GameCardSkeleton key={skeleton} />)}
      {data.map((game) => (
        <GameCard key={game.id} game={game} />
      ))}
    </>
  );
};

export default GameGrid;
