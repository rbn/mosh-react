import React from "react";
import { Outlet } from "react-router-dom";
import SearchInput from "../elements/SearchInput";

const StorePage = () => {
  return (
    <main>
      <div className="mx-auto w-[80%]">
        <SearchInput />
      </div>
      <Outlet />
    </main>
  );
};

export default StorePage;
