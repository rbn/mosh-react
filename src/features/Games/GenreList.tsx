import React from "react";
import useGenres, { Genre } from "../../hooks/useGenres";
import Button from "../../ui/elements/Button";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}
const GenreList = ({ selectedGenre, onSelectGenre }: Props) => {
  const { data, isLoading, error } = useGenres();

  if (error) return null;

  return (
    <div>
      <h1>Genres</h1>
      {data.map((genre) => (
        <p className="" key={genre.id}>
          <Button
            key={genre.id}
            onClick={() => onSelectGenre(genre)}
            style="underlined"
            fontWeight={
              genre.id === selectedGenre?.id
                ? "font-bold italic underline"
                : "font-normal"
            }
          >
            {genre.name}
          </Button>
        </p>
      ))}
    </div>
  );
};

export default GenreList;
