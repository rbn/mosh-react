import React from "react";
import useGenres, { Genre } from "../../hooks/useGenres";
import Button, { Style } from "../../ui/elements/Button";

interface Props {
  onSelectGenre: (genre: Genre) => void;
}
const GenreList = ({ onSelectGenre }: Props) => {
  const { data } = useGenres();
  return (
    <div>
      {data.map((genre) => (
        <p className="" key={genre.id}>
          <Button
            key={genre.id}
            onClick={() => onSelectGenre(genre)}
            style={Style.underlined}
          >
            {genre.name}
          </Button>
        </p>
      ))}
    </div>
  );
};

export default GenreList;
