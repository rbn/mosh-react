import React, { useState } from "react";
import GameGrid from "../../features/Games/GameGrid";
import TopNav from "../nav/TopNav";
import SideBarGame from "../nav/SideBarGame";
import { Genre } from "../../hooks/useGenres";

const Home = () => {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);

  return (
    <>
      <TopNav />
      <SideBarGame
        selectedGenre={selectedGenre}
        onSelectGenre={(genre: Genre) => {
          setSelectedGenre(genre);
        }}
      />
      <main className="px-4 py-16 sm:px-6 lg:flex-auto lg:px-0 lg:py-20 h-screen w-screen">
        <div className="grid grid-cols-4 gap-4">
          <GameGrid selectedGenre={selectedGenre} />
        </div>
      </main>
    </>
  );
};

export default Home;
