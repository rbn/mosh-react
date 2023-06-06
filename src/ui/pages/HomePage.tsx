import React, { useState } from "react";
import TopNav from "../nav/TopNav";
import { Genre } from "../../hooks/useGenres";
import { Link, Outlet } from "react-router-dom";

const HomePage = () => {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);

  return (
    <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 flex">
      <main className="px-4 py-16 sm:px-6 lg:flex-auto lg:px-0 lg:py-20 h-screen w-screen">
        <div className="">Home Page</div>
      </main>
    </div>
  );
};

export default HomePage;
