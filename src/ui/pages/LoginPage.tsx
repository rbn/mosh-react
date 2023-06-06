import React, { useState } from "react";
import TopNav from "../nav/TopNav";
import { Genre } from "../../hooks/useGenres";
import { Link, Outlet } from "react-router-dom";
import LoginMain from "../../features/Login/LoginMain";

const LoginPage = () => {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);

  return (
    <main>
      <div className="w-full text-center my-8"></div>
      {/* <Link to="/shell1" className="">
          Application Shell
        </Link> */}
      <LoginMain />
    </main>
  );
};

export default LoginPage;
