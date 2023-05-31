import React from "react";
import GameGrid from "../features/MoshPractice/Games/GameGrid";
import TopNav from "../features/nav/TopNav";
import SideBar from "../features/nav/SideBar";

const Home = () => {
  return (
    <>
      <TopNav />
      <SideBar />
      <main className="px-4 py-16 sm:px-6 lg:flex-auto lg:px-0 lg:py-20 h-screen w-screen">
        <div className="grid grid-cols-4 gap-4">
          <GameGrid />
        </div>
      </main>
    </>
  );
};

export default Home;
