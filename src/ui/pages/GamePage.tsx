import React, { useState } from "react";
import GameGrid from "../../features/Games/GameGrid";
import TopNav from "../nav/TopNav";
import SideBarGame from "../../features/Games/SideBarGame";
import { Genre } from "../../hooks/useGenres";
import PlatformSelector from "../../features/Games/PlatformSelector";
import { Platform } from "../../hooks/usePlatforms";
import { Game } from "../../hooks/useGames";
import SearchInput from "../elements/SearchInput";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  searchText: string;
}

const GamePage = () => {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <>
      <TopNav />
      <SideBarGame
        selectedGenre={gameQuery.genre}
        onSelectGenre={(genre: Genre) => {
          setGameQuery({ ...gameQuery, genre });
        }}
      />
      <main className="px-4 py-16 sm:px-6 lg:flex-auto lg:px-0 lg:py-20 h-screen w-screen">
        <div className="py-6">
          <SearchInput
            placeholder="Search games"
            onSearch={(searchText) => {
              setGameQuery({ ...gameQuery, searchText });
            }}
          />
        </div>
        <PlatformSelector
          selectedPlatform={gameQuery.platform}
          onSelectPlatform={(platform) => {
            setGameQuery({ ...gameQuery, platform });
          }}
        />
        <div className="grid grid-cols-4 gap-4">
          <GameGrid gameQuery={gameQuery} />
        </div>
      </main>
    </>
  );
};

export default GamePage;
