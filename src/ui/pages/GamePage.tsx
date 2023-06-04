import React, { useState } from "react";
import GameGrid from "../../features/Games/GameGrid";
import TopNav from "../nav/TopNav";
import GameSideBar from "../../features/Games/GameSideBar";
import { Genre } from "../../hooks/useGenres";
import PlatformSelector from "../../features/Games/PlatformSelector";
import { Platform } from "../../hooks/usePlatforms";
import SearchInput from "../elements/SearchInput";
import GameHeader from "../../features/Games/GameHeader";

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

      <aside className="sidebar-aside visible lg:visible md:visible sm:invisible">
        <GameSideBar
          selectedGenre={gameQuery.genre}
          onSelectGenre={(genre: Genre) => {
            setGameQuery({ ...gameQuery, genre });
          }}
        />
      </aside>
      <main className="px-4 py-16 sm:px-6 lg:flex-auto lg:px-0 lg:py-20 h-screen w-screen">
        <div className="py-6">
          <SearchInput
            placeholder="Search games"
            onSearch={(searchText) => {
              setGameQuery({ ...gameQuery, searchText });
            }}
          />
        </div>
        <div className="py-6">
          <GameHeader gameQuery={gameQuery} />
        </div>
        <PlatformSelector
          selectedPlatform={gameQuery.platform}
          onSelectPlatform={(platform) => {
            setGameQuery({ ...gameQuery, platform });
          }}
        />
        <div className="grid grid-cols-4 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-4">
          <GameGrid gameQuery={gameQuery} />
        </div>
      </main>
    </>
  );
};

export default GamePage;
