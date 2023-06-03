import React, { useState } from "react";
import GameGrid from "../../features/Games/GameGrid";
import TopNav from "../nav/TopNav";
import SideBarGame from "../../features/Games/SideBarGame";
import { Genre } from "../../hooks/useGenres";
import PlatformSelector from "../../features/Games/PlatformSelector";
import { Platform } from "../../hooks/usePlatforms";

const GamePage = () => {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(
    null
  );

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
        <PlatformSelector
          onSelectPlatform={(platform) => {
            setSelectedPlatform(platform);
          }}
        />
        <div className="grid grid-cols-4 gap-4">
          <GameGrid
            selectedGenre={selectedGenre}
            selectedPlatform={selectedPlatform}
          />
        </div>
      </main>
    </>
  );
};

export default GamePage;
