import React from "react";
import useGames, { Game } from "../../hooks/useGames";
import GameCard from "../../features/Games/GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import { Genre } from "../../hooks/useGenres";

interface Props {
  selectedGenre: Genre | null;
}

const GameGrid = ({ selectedGenre }: Props) => {
  const { data, error, isLoading } = useGames(selectedGenre);
  const skeletons = [1, 2, 3, 4, 5, 6];

  return (
    <>
      {error.length > 0 ? <p>{error}</p> : ""}
      {isLoading &&
        skeletons.map((skeleton) => <GameCardSkeleton key={skeleton} />)}
      {data.map((game) => (
        <GameCard key={game.id} game={game} />
      ))}
    </>
  );
};

export default GameGrid;
