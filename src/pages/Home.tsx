import React from "react";
import GameGrid from "../features/MoshPractice/Games/GameGrid";

const Home = () => {
  return (
    <main className="px-4 py-16 sm:px-6 lg:flex-auto lg:px-0 lg:py-20 h-screen">
      <div className="mx-auto max-w-2xl space-y-16 sm:space-y-20 lg:mx-0 lg:max-w-none">
        <div>
          <h1 className="font-bold py-6">I am the home page</h1>
          <GameGrid />
        </div>
      </div>
    </main>
  );
};

export default Home;
