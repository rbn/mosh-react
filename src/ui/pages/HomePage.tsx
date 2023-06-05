import React, { useState } from "react";
import TopNav from "../nav/TopNav";
import { Genre } from "../../hooks/useGenres";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);

  return (
    <main className="px-4 py-16 sm:px-6 lg:flex-auto lg:px-0 lg:py-20 h-screen w-screen">
      <div className="grid grid-cols-4 gap-4">Home Page</div>
      <Link to="/games">Games</Link>
    </main>
  );
};

export default HomePage;
