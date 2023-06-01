import React from "react";
import useGenres, { Genre } from "../../../hooks/useGenres";
import useData from "../../../hooks/useData";

const GenreList = () => {
  const { data } = useGenres();
  return (
    <ul>
      {data.map((d) => (
        <li key={d.id}>{d.name}</li>
      ))}
    </ul>
  );
};

export default GenreList;
